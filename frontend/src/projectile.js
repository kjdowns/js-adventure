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
        this.frames = 8;
        this.delay = 5;
        if (type == "fire") {
            this.sprite.src = "img/fireball.png"
        } else {
            this.sprite.src = "img/icicle.png"
        }
    }

    setAnimationDirection(){
        if (this.type == "fire") {
            switch (this.direction) {
                case "up":
                case "idle-up":
                    this.sheetRow = 2;
                    break;
                case "down":
                case "idle-down":
                    this.sheetRow = 6;
                    break;
                case "left":
                case "idle-left":
                    this.sheetRow = 0;
                    break;
                case "right":
                case "idle-right":
                    this.sheetRow = 4;
                    break;
            }
        } else {
            switch (this.direction) {
                case "up":
                case "idle-up":
                    this.sheetRow = 6;
                    break;
                case "down":
                case "idle-down":
                    this.sheetRow = 2;
                    break;
                case "left":
                case "idle-left":
                    this.sheetRow = 4;
                    break;
                case "right":
                case "idle-right":
                    this.sheetRow = 0;
                    break;
            }
        }
    }

    moveInFiredDirection(){
        switch (this.direction) {
            case "left":
            case "idle-left":
                this.xPosition -= this.speed;
                break;
            case "right":
            case "idle-right":
                this.xPosition += this.speed
                break;
            case "down":
            case "idle-down":
                this.yPosition += this.speed
                break;
            case "up":
            case "idle-up":
                this.yPosition -= this.speed
                break;
        }
    }

}