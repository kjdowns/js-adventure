class Player extends GameObject {
    constructor(){
        super();
        this.hp = 10;
        this.xPosition = 380;
        this.yPosition = 400;
        this.speed = 4;
        this.width = 48;
        this.height = 64;
        this.sprite.src = "img/mage-light.png";
        this.frames = 3;
        this.delay = 8;
    }

    setAnimationDirection(){
        switch (this.direction) {
            case "up":
                this.sheetRow = 0;
            break;
            case "down":
                this.sheetRow = 2;
            break;
            case "left":
                this.sheetRow = 3;
            break;
            case "right":
                this.sheetRow = 1;
            break;
        }
    }

}