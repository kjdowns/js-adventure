class Player extends GameObject {
    constructor(){
        super();
        this.hp = 10;
        this.xPosition = 380;
        this.yPosition = 400;
        this.speed = 10;
        this.width = 50;
        this.height = 50;
        this.sprite.src = "img/sprite-sheet.png";
    }

}