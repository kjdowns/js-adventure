class Projectile {
    
    constructor(caster, type){
        this.type = type;
        this.xPosition = caster.xPosition;
        this.yPosition = caster.yPosition;
        this.direction = caster.direction;
        this.height= 40;
        this.width = 40;
        this.sprite = new Image();
        if (type == "fire") {
            this.sprite.src = "img/fireball.png"
        } else {
            this.sprite.src = "img/icicle.png"
        }
    }

}