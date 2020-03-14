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
        this.xPosition -= this.speed;
    }

    setAnimationDirection(){
        if (this.type == "fire") {
            switch (this.direction) {
                case "up":
                    this.sheetRow = 2;
                    break;
                case "down":
                    this.sheetRow = 6;
                    break;
                case "left":
                    this.sheetRow = 0;
                    break;
                case "right":
                    this.sheetRow = 4;
                    break;
            }
        } else {
            switch (this.direction) {
                case "up":
                    this.sheetRow = 6;
                    break;
                case "down":
                    this.sheetRow = 2;
                    break;
                case "left":
                    this.sheetRow = 4;
                    break;
                case "right":
                    this.sheetRow = 0;
                    break;
            }
        }
    }

    static cleanup(){
        projectiles = projectiles.filter(projectile => {
            projectile.xPosition > currentRoom.leftBoundary &&
            projectile.xPosition < currentRoom.rightBoundary &&
            projectile.yPosition < currentRoom.bottomBoundary &&
            projectile.yPosition > currentRoom.topBoundary
        })
    }

}