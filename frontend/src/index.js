// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
let currenRoom = new Room("img/dungeon_entrance.JPG");
let player = new Player();
let enemy1 = new Enemy("Fire Sprite", "img/fire-sprite.png");

document.addEventListener('keydown', function(e){
    if (e.key == "ArrowLeft") {
        console.log("Arrow Left pressed")
        player.xPosition -= player.speed;
    } else if (e.key == "ArrowRight") {
        console.log("Arrow Right pressed")
        player.xPosition += player.speed
    } else if (e.key == "ArrowDown") {
        console.log("Arrow Down pressed")
        player.yPosition += player.speed
    } else if (e.key == "ArrowUp") {
        console.log("Arrow Up pressed")
        player.yPosition -= player.speed
    }
})

function renderScene() {
    currenRoom.render();
    drawEntity(player);
    drawEntity(enemy1);
}

function drawEntity(entity) {
    ctx.drawImage(entity.sprite, 0, 0, 35, 35, entity.xPosition, entity.yPosition, entity.width, entity.height)
}

function gameLoop() {
    renderScene();
}
setInterval(gameLoop,15);