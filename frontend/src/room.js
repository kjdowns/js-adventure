class Room {
    constructor(src){
        this.background = new Image();
        this.background.src = src
        this.leftBoundary = 40; //x left
        this.rightBoundary = 720; //x right
        this.topBoundary = 65; // y top
        this.bottomBoundary = 400; //y bottom
    }

    render(){
        ctx.drawImage(this.background, 0, 0);
    }
}