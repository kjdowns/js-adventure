class Enemy extends GameObject {
    constructor(name, src, hp, speed, height, width){
        super();
        this.name = name;
        this.hp = hp;
        this.xPosition = Math.floor(Math.random() * (currentRoom.rightBoundary - currentRoom.leftBoundary)) + currentRoom.leftBoundary;
        this.yPosition = Math.floor(Math.random() * (currentRoom.bottomBoundary - (currentRoom.topBoundary + 1))) + currentRoom.topBoundary;
        this.speed = speed;
        this.height = height;
        this.width = width;
        this.sprite = new Image();
        this.sprite.src = src;
    }

}