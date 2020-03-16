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