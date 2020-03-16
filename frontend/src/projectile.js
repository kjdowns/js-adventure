class Projectile extends GameObject {
    
    constructor(caster, type){
        super();
        this.type = type;
        this.xPosition = caster.xPosition;
        this.yPosition = caster.yPosition;
        this.direction = caster.direction;
        this.speed = 5;
        this.height= 64;
        this.width = 64;
        if (type == "fire") {
            this.sprite.src = "img/fireball.png"
        } else {
            this.sprite.src = "img/icicle.png"
        }
    }

    animate(){
        this.setAnimationDirection();
        ctx.drawImage(this.sprite, (this.width * this.sheetCol), (this.height * this.sheetRow), this.width, this.height, this.xPosition, this.yPosition, 40, 40 );
        if (this.sheetCol > 8) {
            this.sheetCol = 0;
        }
        this.sheetCol += 1;
        this.moveInFiredDirection();
    }

    setAnimationDirection(){
        if (this.type == "fire") {
            switch (this.direction) {
                case "up":
                case "up-idle":
                    this.sheetRow = 2;
                    break;
                case "down":
                case "down-idle":
                    this.sheetRow = 6;
                    break;
                case "left":
                case "left-idle":
                    this.sheetRow = 0;
                    break;
                case "right":
                case "right-idle":
                    this.sheetRow = 4;
                    break;
            }
        } else {
            switch (this.direction) {
                case "up":
                case "up-idle":
                    this.sheetRow = 6;
                    break;
                case "down":
                case "down-idle":
                    this.sheetRow = 2;
                    break;
                case "left":
                case "left-idle":
                    this.sheetRow = 4;
                    break;
                case "right":
                case "left-idle":
                    this.sheetRow = 0;
                    break;
            }
        }
    }

    moveInFiredDirection(){
        switch (this.direction) {
            case "left":
                this.xPosition -= this.speed;
                break;
            case "right":
                this.xPosition += this.speed
                break;
            case "down":
                this.yPosition += this.speed
                break;
            case "up":
                this.yPosition -= this.speed
                break;
        }
    }

}