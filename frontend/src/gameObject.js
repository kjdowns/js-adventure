class GameObject {
    
    constructor(){
        this.xPosition;
        this.yPosition;
        this.height;
        this.width;
        this.speed;
        this.sprite = new Image();
        this.sprite.src;
        this.direction;
        this.sheetRow;
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

}