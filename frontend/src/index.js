
const ctx = document.getElementById("gameCanvas").getContext("2d")
ctx.font = "24px Arial"
ctx.fillStyle = "cadetblue"
const heartBar = document.getElementById("hp-bar");
const inputBox = document.getElementById("username");
const saveButton = document.getElementById("save-button");
const loadButton = document.getElementById("load-button");
const dialogBox = new Image();
dialogBox.src = "img/dialog-box.png"
let isPaused = true;
let gameWon = false;
let gameOver = false;
let currentRoomCounter = 1;
let currentRoom;
let player = new Player();

document.addEventListener('keydown', function(e){
    if (e.key == "ArrowLeft") {
            player.direction = "left"
    } else if (e.key == "ArrowRight") {
            player.direction = "right"
    } else if (e.key == "ArrowDown") {
            player.direction = "down"
    } else if (e.key == "ArrowUp") {
            player.direction = "up"
    } else if (e.key == "z"){
        let fireball = new Projectile(player, "fire", 60, 60)
        currentRoom.projectiles.push(fireball);
    } else if (e.key == "x"){
        let icicle = new Projectile(player, "ice", 60, 60)
        currentRoom.projectiles.push(icicle);
    }
})

document.addEventListener('keyup', function(e){
    if (e.key == "ArrowLeft") {
            player.direction = "idle-left"
    } else if (e.key == "ArrowRight") {
            player.direction = "idle-right"
    } else if (e.key == "ArrowDown") {
            player.direction = "idle-down"
    } else if (e.key == "ArrowUp") {
            player.direction = "idle-up"
    } else if (e.key == "Enter"){
        if (!gameWon && !gameOver) {
            isPaused = false;
        }
    }
})

saveButton.addEventListener('click', uploadSave);
loadButton.addEventListener('click', loadSave)

function updateHeartBar() {
    let counter = player.hp;
    for (let i = 0; i < heartBar.children.length; i++) {
        if (counter > 1) {
            heartBar.children[i].src = "img/heart_full.png";
            counter -= 2;
        } else if (counter == 1) {
            heartBar.children[i].src = "img/heart_half.png";
            counter -= 1;
        } else {
            heartBar.children[i].src = "img/heart_empty.png"
        }         
    }
}

function renderScene() {
    currentRoom.render();
    player.animate(40, 40);
    drawEnemies();
    drawProjectiles(); 
}

function renderDialogBox(line1, line2) {
    ctx.drawImage(dialogBox, 32, 320);
    ctx.fillText(line1, 350, 365)
    ctx.fillText(line2, 270, 405)
}

function updateGameObjects() {
    player.update();
    currentRoom.enemies.forEach( enemy => {
        enemy.decideMovement();
        enemy.update();
    })
}

function handleCollisions(){
    //Check player collision with enemy
    if (!player.collision){
        currentRoom.enemies.forEach( enemy => {
            if (player.checkCollision(enemy)){
                player.collision = true;
                player.hp -= 1;
                updateHeartBar();
                setTimeout(() => {player.collision = false}, 1000);
            }
        })
    }
    //Check projectile collision with enemy
    currentRoom.projectiles.forEach(projectile => {
        if (!projectile.collision) {
            currentRoom.enemies.forEach( enemy => {
                if (projectile.checkCollision(enemy)){
                    projectile.collision = true;
                    enemy.hp -= 5;
                }
            })
        }
    })
}

function drawProjectiles() {
    currentRoom.projectiles.forEach(projectile => {
        projectile.animate(40, 40)
        projectile.moveInFiredDirection();
    })
}

function drawEnemies() {
    currentRoom.enemies.forEach( enemy => {
        switch (enemy.name) {
            case "slime":
                enemy.animate(25, 25)
                break;
            case "bat-black":
            case "bat-red":
            case "zombie":
            case "arachne":
                enemy.animate(40, 40)
                break;
            case "black-reaper":
            case "golden-reaper":
                enemy.animate(60, 60)
                break;
        }
    });
}

function removeKilledEnemies(){
    currentRoom.enemies = currentRoom.enemies.filter( enemy => enemy.hp >= 0);
}

function checkGameState() {
    if (currentRoom.enemies.length <= 0) {
        isPaused = true
        if (currentRoomCounter >= 10){
            gameWon = true;
        } else {
            currentRoomCounter += 1
            initializeRoom();
        }
    }
    if (player.hp <= 0) {
        isPaused = true;
        gameOver = true;
    }
}

function parseEnemies(level) {
    fetch(`http://localhost:3000/rooms/${level}/enemies`)
    .then((response) => response.json())
    .then(function (json){
        json.forEach(enemy => {
            currentRoom.enemies.push(new Enemy(enemy["name"]))
        })
    })
}

function uploadSave() {
    let configObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"  
        },
        body: JSON.stringify({username: inputBox.value, hp: player.hp, current_level: currentRoomCounter})
    }
    fetch(`http://localhost:3000/games/${inputBox.value}`, configObj)
}

function loadSave() {
    fetch(`http://localhost:3000/games/${inputBox.value}`)
    .then((response) => response.json())
    .then(function (json){
        player.hp = json["hp"]
        currentRoomCounter = json["current_level"]
        initializeRoom();
        updateHeartBar();
        })
}

function initializeRoom() {
    currentRoom = new Room();
    parseEnemies(currentRoomCounter);
}

function gameLoop() {
    ctx.clearRect(0,0,800, 480)
    renderScene();
    if (isPaused) {
        if (gameWon){
            renderDialogBox("Congratulations!", "You cleared the Dungeon!");
        } else if (gameOver){
            renderDialogBox("Game Over", "Refresh to try again!");
        } else {
            renderDialogBox(`Level ${currentRoomCounter}`, "Press Enter to continue");
        }
    } else {
        handleCollisions();
        updateGameObjects();
        removeKilledEnemies();
        checkGameState();
    }
    requestAnimationFrame(gameLoop)
}

initializeRoom();
gameLoop();