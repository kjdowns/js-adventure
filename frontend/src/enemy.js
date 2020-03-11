class Enemy extends Player {
    constructor(name, src){
        super();
        this.name = name;
        this.xPosition = Math.floor(Math.random() * (currentRoom.rightBoundary - currentRoom.leftBoundary)) + currentRoom.leftBoundary;
        this.yPosition = Math.floor(Math.random() * (currentRoom.bottomBoundary - (currentRoom.topBoundary + 1))) + currentRoom.topBoundary;
        this.sprite = new Image();
        this.sprite.src = src;
    }
}