// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
let background = new Image();
let playerSprite = new Image();
playerSprite.src = "img/sprite-sheet.png"
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

let player = new Player();

function initializeScene() {
    background.src = "img/dungeon_entrance.JPG"
    background.onload = function(){
    ctx.drawImage(background, 0, 0);
    drawEntity(player, playerSprite);
    }
}

function drawEntity(entity, img) {
    ctx.drawImage(img, 0, 0, 35, 35, entity.xPosition, entity.yPosition, entity.width, entity.height)
}

function gameLoop() {
    initializeScene();
}
setInterval(gameLoop,15);