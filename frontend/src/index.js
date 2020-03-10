// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
let background = new Image();
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
        width: 20,
        height: 20,
        color: 'green',
};

function initializeScene() {
    background.src = "img/dungeon_entrance.JPG"
    background.onload = function(){
    ctx.drawImage(background, 0, 0);
    drawEntity(player);
    }
}

function drawEntity(entity) {
    ctx.save();
    ctx.fillStyle = entity.color;
    ctx.fillRect(entity.x, entity.y, entity.width, entity.height);
    ctx.restore();
}

function gameLoop() {
    initializeScene();
}
setInterval(gameLoop,15);