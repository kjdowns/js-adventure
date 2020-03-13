class Projectile extends GameObject {
    
    constructor(caster, type, height, width){
        this.type = type;
        this.xPosition = caster.xPosition;
        this.yPosition = caster.yPosition;
        this.direction = caster.direction;
        this.height= height;
        this.width = width;
        if (type == "fire") {
            this.sprite.src = "img/fireball.png"
        } else {
            this.sprite.src = "img/icicle.png"
        }
    }

}