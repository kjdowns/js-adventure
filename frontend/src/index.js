// Display canvas backround test code

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
let background = new Image();
background.src = "img/dungeon_entrance.JPG"
background.onload = function(){
    ctx.drawImage(background,0,0);

    // Render test player box
    let player = new Path2D();
    player.rect(390, 410, 20, 35); 
    ctx.stroke(player); 
    ctx.fill(player);

    //Move test player box
    
}


