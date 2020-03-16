// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
const heartBar = document.getElementById("hp-bar");
let currentRoom = new Room("img/dungeon_entrance.JPG");
let player = new Player();

//Initialize enemies
for (let i = 0; i < 3; i++) {
    currentRoom.enemies.push(new Enemy("Fire Sprite", "img/fire-sprite.png", 10, 5, 40, 40))  
}

document.addEventListener('keydown', function(e){
    if (e.key == "ArrowLeft") {
        if (player.xPosition > currentRoom.leftBoundary){
            player.xPosition -= player.speed;
            player.direction = "left"
        }
    } else if (e.key == "ArrowRight") {
        if (player.xPosition < currentRoom.rightBoundary) {
            player.xPosition += player.speed
            player.direction = "right"
        }
    } else if (e.key == "ArrowDown") {
        if (player.yPosition < currentRoom.bottomBoundary) {
            player.yPosition += player.speed
            player.direction = "down"
        }
    } else if (e.key == "ArrowUp") {
        if (player.yPosition > currentRoom.topBoundary) {
            player.yPosition -= player.speed
            player.direction = "up"
        }
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
    }
})

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
    player.animate();
    currentRoom.enemies.forEach( enemy => drawEntity(enemy));
    drawProjectiles(); 
}

function handleCollisions(){
    //Check player collision with enemy
    if (!player.collision){
        currentRoom.enemies.forEach( enemy => {
            if (player.checkCollision(enemy)){
                console.log("Collision!!")
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
                    console.log("Collision!!")
                    projectile.collision = true;
                    enemy.hp -= 5;
                }
            })
        }
    })
}

function drawEntity(entity) {
    ctx.drawImage(entity.sprite, 0, 0, 35, 35, entity.xPosition, entity.yPosition, entity.width, entity.height)
}

function drawProjectiles() {
    currentRoom.projectiles.forEach(projectile => {
        projectile.animate()
        projectile.moveInFiredDirection();
    })
}

function gameLoop() {
    ctx.clearRect(0,0,800, 480)
    renderScene();
    handleCollisions();
    requestAnimationFrame(gameLoop)
}

gameLoop();