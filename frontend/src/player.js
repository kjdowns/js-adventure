class Player extends GameObject {
    constructor(){
        super();
        this.hp = 10;
        this.xPosition = 380;
        this.yPosition = 400;
        this.speed = 10;
        this.width = 26;
        this.height = 26;
        this.sprite.src = "img/sprite-sheet.png";
    }

    animate(){
        this.setAnimationDirection();
        ctx.drawImage(this.sprite, (this.width * this.sheetCol), (this.height * this.sheetRow), this.width, this.height, this.xPosition, this.yPosition, 50, 50 );
        if (this.sheetCol > 8) {
            this.sheetCol = 0;
        }
        this.sheetCol += 1;
    }

    setAnimationDirection(){
        switch (this.direction) {
            // case "up":
            //     this.sheetRow = ;
            // break;
            // case "down":
            //     this.sheetRow = ;
            // break;
            case "left":
                this.sheetRow = 9;
            break;
            case "right":
                this.sheetRow = 1;
            break;
        }
    }

}