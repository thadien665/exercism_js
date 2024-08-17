// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
    
}
Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor(screenSize, size, position) {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(Size) {
        if (Size.width < 1) {
            Size.width = 1;
        }
        if (Size.height < 1) {
            Size.height = 1;
        }
        if (Size.width > this.screenSize.width - this.position.x) {
            Size.width = this.screenSize.width - this.position.x;
        }
        if (Size.height > this.screenSize.height - this.position.y) {
            Size.height = this.screenSize.height - this.position.y;
        } 
        this.size.width = Size.width;
        this.size.height = Size.height;
    }

    move(Position) {
        if (Position.x < 0) {
            Position.x = 0;
        }
        if (Position.y < 0) {
            Position.y = 0;
        }
        if (Position.x + this.size.width > this.screenSize.width ) {
            Position.x = this.screenSize.width - this.size.width;
        }
        if (Position.y + this.size.height > this.screenSize.height) {
            Position.y = this.screenSize.height - this.size.width;
        }
        this.position.x = Position.x;
        this.position.y = Position.y;
    }
}

export function changeWindow(ProgramWindow) {
    ProgramWindow.size.width = 400;
    ProgramWindow.size.height = 300;
    ProgramWindow.position.x = 100;
    ProgramWindow.position.y = 150;
    return ProgramWindow;
}