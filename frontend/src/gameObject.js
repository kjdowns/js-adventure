class GameObject {
    
    constructor(){
        this.xPosition;
        this.yPosition;
        this.height;
        this.width;
        this.speed;
        this.sprite = new Image();
        this.sprite.src;
        this.direction = "idle-down";
        this.sheetRow = 0;
        this.sheetCol = 0;
        this.count = 0;
        this.frames;
        this.collision = false;
    }

    update(){
        switch (this.direction) {
            case "left":
                if (this.xPosition > currentRoom.leftBoundary){
                    this.xPosition -= this.speed;
                }
                break;
            case "right":
                if (this.xPosition < currentRoom.rightBoundary) {
                    this.xPosition += this.speed
                }
                break;
            case "down":
                if (this.yPosition < currentRoom.bottomBoundary) {
                    this.yPosition += this.speed
                }
                break;
            case "up":
                if (this.yPosition > currentRoom.topBoundary) {
                    this.yPosition -= this.speed
                }
                break;
        
            default:
                break;
        }
    }

    animate(width, height){
        this.count++;
        this.setAnimationDirection();
        ctx.drawImage(this.sprite, (this.width * this.sheetCol), (this.height * this.sheetRow), this.width, this.height, this.xPosition, this.yPosition, width, height );
        if (this.count >= this.delay){
            if (this.sheetCol >= this.frames -1) {
                this.sheetCol = 0;
            }
            this.sheetCol += 1;
            this.count = 0;
        }
    }

    collisionBox(){
        return {
            x: this.xPosition,
            y: this.yPosition,
            width: this.width,
            height: this.height
        }
    }

    checkCollision(entity){
        let box1 = this.collisionBox();
        let box2 = entity.collisionBox();
    
        if (box1.x < box2.x + 30 &&
            box1.x + 30 > box2.x &&
            box1.y < box2.y + 30 &&
            box1.y + 30 > box2.y) {
                return true;
        } else {
            return false;
        }
    }

}