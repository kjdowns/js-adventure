class Player {
    constructor(){
        this.hp = 10;
        this.xPosition = 380;
        this.yPosition = 400;
        this.speed = 10;
        this.width = 50;
        this.height = 50;
        this.sprite = new Image();
        this.sprite.src = "img/sprite-sheet.png";
        this.collision = false;
    }

    collisionBox(){
        return {
            x: this.xPosition,
            y: this.yPosition,
            width: this.width,
            height: this.height
        }
    }
    
}