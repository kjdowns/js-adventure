class Enemy extends GameObject {
    constructor(name){
        super();
        this.name = name;
        this.xPosition = Math.floor(Math.random() * (currentRoom.rightBoundary - currentRoom.leftBoundary)) + currentRoom.leftBoundary;
        this.yPosition = Math.floor(Math.random() * (currentRoom.bottomBoundary - (currentRoom.topBoundary + 1))) + currentRoom.topBoundary;
        this.sprite = new Image();
        this.setAttributeByName();
        this.frames = 3;
        this.delay = 10;
    }

    setAttributeByName(){
        switch (this.name) {
            case "slime":
                this.sprite.src = "img/slime.png"
                this.hp = 5;
                this.speed = 3;
                this.height = 24;
                this.width = 24;
                break;
            case "bat-black":
                this.sprite.src = "img/bat-black.png"
                this.hp = 10;
                this.speed = 5;
                this.height = 64;
                this.width = 48;
                break;
            case "bat-red":
                this.sprite.src = "img/bat-red.png"
                this.hp = 10;
                this.speed = 5;
                this.height = 64;
                this.width = 48;
                break;
            case "zombie":
                this.sprite.src = "img/zombie.png"
                this.hp = 15;
                this.speed = 4;
                this.height = 64;
                this.width = 48;
                break;
            case "arachne":
                this.sprite.src = "img/arachne.png"
                this.hp = 25;
                this.speed = 6;
                this.height = 64;
                this.width = 48;
                break;
            case "black-reaper":
                this.sprite.src = "img/black-reaper.png"
                this.hp = 40;
                this.speed = 8;
                this.height = 128;
                this.width = 96;
                break;
            case "golden-reaper":
                this.sprite.src = "img/golden-reaper.png"
                this.hp = 40;
                this.speed = 8;
                this.height = 128;
                this.width = 96;
                break;
        }
    }

    setAnimationDirection(){
        switch (this.name) {
            case "slime":
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