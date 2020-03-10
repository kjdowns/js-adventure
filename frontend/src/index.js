const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d")
let background = new Image();
background.src = "img/dungeon_entrance.JPG"
background.onload = function(){
    ctx.drawImage(background,0,0);   
}