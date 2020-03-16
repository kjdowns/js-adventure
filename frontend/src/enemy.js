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

    setAnimationDirection(){
        switch (this.name) {
            case slime:
                switch (this.direction) {
                    case "up":
                    case "idle-up":
                        this.sheetRow = 0;
                        break;
                    case "right":
                    case "idle-right":
                        this.sheetRow = 1;
                        break;
                    case "down":
                    case "idle-down":
                        this.sheetRow = 2;
                        break;
                    case "left":
                    case "idle-left":
                        this.sheetRow = 1;
                        break;
                }
                break;
        
            default:
                switch (this.direction) {
                    case "up":
                    case "idle-up":
                        this.sheetRow = 0;
                        break;
                    case "right":
                    case "idle-right":
                        this.sheetRow = 1;
                        break;
                    case "down":
                    case "idle-down":
                        this.sheetRow = 2;
                        break;
                    case "left":
                    case "idle-left":
                        this.sheetRow = 3;
                        break;
                }
                break;
        }
    }
}