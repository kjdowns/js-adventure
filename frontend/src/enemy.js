class Enemy extends Player {
    constructor(name, src){
        super();
        this.name = name;
        this.sprite = new Image();
        this.sprite.src = src;
    }
}