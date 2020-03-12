class Projectile {
    
    constructor(caster, type){
        this.type = type;
        this.xPosition = caster.xPosition;
        this.yPosition = caster.yPosition;
        this.direction = caster.direction;
        this.height= 62;
        this.width = 62;
        this.sprite = new Image();
        if (type == "fire") {
            this.sprite.src = "img/fireball.png"
        } else {
            this.sprite.src = "img/icicle.png"
        }
    }

}