// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
const sideBar = document.getElementById("side-bar");
let currentRoom = new Room("img/dungeon_entrance.JPG");
let player = new Player();
let enemy1 = new Enemy("Fire Sprite", "img/fire-sprite.png");

document.addEventListener('keydown', function(e){
    if (e.key == "ArrowLeft") {
        if (player.xPosition > currentRoom.leftBoundary){
            player.xPosition -= player.speed;
        }
    } else if (e.key == "ArrowRight") {
        if (player.xPosition < currentRoom.rightBoundary) {
            player.xPosition += player.speed
        }
    } else if (e.key == "ArrowDown") {
        if (player.yPosition < currentRoom.bottomBoundary) {
            player.yPosition += player.speed
        }
    } else if (e.key == "ArrowUp") {
        if (player.yPosition > currentRoom.topBoundary) {
            player.yPosition -= player.speed
        }
    }
})

function renderScene() {
    currentRoom.render();
    drawEntity(player);
    drawEntity(enemy1);
    sideBar.innerText = `HP: ${player.hp}` 
}

function checkCollision(entity1, entity2){
    let box1 = entity1.collisionBox();
    let box2 = entity2.collisionBox();

    if (box1.x < box2.x + box2.width &&
        box1.x + box1.width > box2.x &&
        box1.y < box2.y + box2.height &&
        box1.y + box1.height > box2.y) {
            return true;
    } else {
        return false;
    }
}

function drawEntity(entity) {
    ctx.drawImage(entity.sprite, 0, 0, 35, 35, entity.xPosition, entity.yPosition, entity.width, entity.height)
}

function gameLoop() {
    renderScene();
    if (checkCollision(player, enemy1)){
        console.log("Collision!!")
    }
}
setInterval(gameLoop,15);