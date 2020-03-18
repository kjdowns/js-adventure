class Room {
    constructor(){
        this.background = new Image();
        this.background.src = "img/dungeon_entrance.JPG"
        this.leftBoundary = 40; //x left
        this.rightBoundary = 720; //x right
        this.topBoundary = 65; // y top
        this.bottomBoundary = 400; //y bottom
        this.projectiles = [];
        this.enemies = [];
    }

    render(){
        ctx.drawImage(this.background, 0, 0);
    }
}