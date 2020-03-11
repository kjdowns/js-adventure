// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
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
}

function checkCollision(entity1, entity2){
    if ((entity1.collisionBox()[0] > entity2.collisionBox()[0] && entity1.collisionBox()[0] < entity2.collisionBox()[1]) ||
        (entity1.collisionBox()[1] > entity2.collisionBox()[0] && entity1.collisionBox()[1] < entity2.collisionBox()[1]) ||
        (entity1.collisionBox()[2] > entity2.collisionBox()[2] && entity1.collisionBox()[2] < entity2.collisionBox()[3]) ||
        (entity1.collisionBox()[3] > entity2.collisionBox()[2] && entity1.collisionBox()[3] < entity2.collisionBox()[3])) {
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