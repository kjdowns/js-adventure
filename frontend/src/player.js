class Player {
    constructor(){
        this.xPosition = 380;
        this.yPosition = 400;
        this.speed = 10;
        this.width = 35;
        this.height = 35;
        this.sprite = new Image();
        this.sprite.src = "img/sprite-sheet.png";
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