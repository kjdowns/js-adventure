class Room {
    constructor(src){
        this.background = new Image();
        this.background.src = src
    }

    render(){
        ctx.drawImage(this.background, 0, 0);
    }
}