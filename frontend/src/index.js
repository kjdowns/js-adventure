// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
let background = new Image();
let playerSprite = new Image();
playerSprite.src = "img/test-sprite.png"
document.addEventListener('keydown', function(e){
    if (e.key == "ArrowLeft") {
        console.log("Arrow Left pressed")
        player.x -= player.speed;
    } else if (e.key == "ArrowRight") {
        console.log("Arrow Right pressed")
        player.x += player.speed
    } else if (e.key == "ArrowDown") {
        console.log("Arrow Down pressed")
        player.y += player.speed
    } else if (e.key == "ArrowUp") {
        console.log("Arrow Up pressed")
        player.y -= player.speed
    }
})

// Add character and movement testing

let player = {
        x: 390,
        y: 400,
        speed: 8,
        width: 50,
        height: 70
};

function initializeScene() {
    background.src = "img/dungeon_entrance.JPG"
    background.onload = function(){
    ctx.drawImage(background, 0, 0);
    drawEntity(player, playerSprite);
    }
}

function drawEntity(entity, img) {
    ctx.drawImage(img, 0, 0, 70, 50, entity.x, entity.y, entity.height, entity.width)
}

function gameLoop() {
    initializeScene();
}
setInterval(gameLoop,15);