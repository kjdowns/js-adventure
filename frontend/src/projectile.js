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
        ctx.drawImage(this.sprite, (this.width * this.sheetRow), (this.height * this.sheetCol), this.width, this.height, this.xPosition, this.yPosition, 40, 40 );
        if (this.sheetRow > 8) {
            this.sheetRow = 0;
        }
        this.sheetRow += 1;
        this.xPosition -= this.speed;
    }

}