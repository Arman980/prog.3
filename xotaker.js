var livingcreature = require("./livingcreature.js");
module.exports = class grassEtar extends livingcreature{
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (newCell && this.multiply >= 16) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            var newGrassEater = new GrassEtar(newX, newY, 2);
            grassEaterArr.push(newGrassEater);
            this.multiply = 0;
        }
    }
    move() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        this.energy--;
        if (this.energy == 0) {
            this.die();
        }
    }
    die() {
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
    eat(){
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
            this.energy++;
            this.mul();
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 0);
                    break;
                }
            }
        }
        else{
            this.move();
        }
    }   
}
