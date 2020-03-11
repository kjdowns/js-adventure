class Player {
    constructor(){
        this.xPosition = 380;
        this.yPosition = 400;
        this.speed = 10;
        this.width = 50;
        this.height = 50;
        this.sprite = new Image();
        this.sprite.src = "img/sprite-sheet.png";
    }

    collisionBox(){
        return [this.xPosition, this.xPosition + this.width, this.yPosition, this.yPosition + this.height]
    }
}