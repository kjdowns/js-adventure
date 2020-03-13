// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
let currentRoom = new Room("img/dungeon_entrance.JPG");
let player = new Player();
let enemy1 = new Enemy("Fire Sprite", "img/fire-sprite.png");
let projectiles = [];

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
    } else if (e.key == "z"){
        let fireball = new Projectile(player, "fire")
        projectiles.push(fireball);
    } else if (e.key == "x"){
        let icicle = new Projectile(player, "ice")
        projectiles.push(icicle);
    }
})

function renderScene() {
    currentRoom.render();
    drawEntity(player);
    drawEntity(enemy1);
    drawProjectiles(); 
}

function checkCollision(entity1, entity2){
    let box1 = entity1.collisionBox();
    let box2 = entity2.collisionBox();

    if (box1.x < box2.x + 30 &&
        box1.x + 30 > box2.x &&
        box1.y < box2.y + 30 &&
        box1.y + 30 > box2.y) {
            return true;
    } else {
        return false;
    }
}

function drawEntity(entity) {
    ctx.drawImage(entity.sprite, 0, 0, 35, 35, entity.xPosition, entity.yPosition, entity.width, entity.height)
}

function drawProjectiles() {
    projectiles.forEach(projectile => drawEntity(projectile))
}

function gameLoop() {
    renderScene();
    if (!player.collision){
        if (checkCollision(player, enemy1)){
            console.log("Collision!!")
            player.collision = true;
            player.hp -= 1;
            setTimeout(() => {player.collision = false}, 1000);
        }
    }
}
setInterval(gameLoop,15);