class Room {
    constructor(src){
        this.background = new Image();
        this.background.src = src
        this.leftBoundary = 40; //x left
        this.rightBoundary = 760; //x right
        this.topBoundary = 65; // y top
        this.bottomBoundary = 440; //y bottom
    }

    render(){
        ctx.drawImage(this.background, 0, 0);
    }
}