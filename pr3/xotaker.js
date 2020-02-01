var LivingCreature = require("./LivingCreature.js")

module.exports = class GrassEater extends LivingCreature { 

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 5 && newCell) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            geaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.multiply = 0;
        }
    }
    move() {
        this.energy--;
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
        }
        if (this.energy < 0) {
            this.die()
        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in geaterArr) {
            if (this.x == geaterArr[i].x && this.y == geaterArr[i].y) {
                geaterArr.splice(i, 1);
                break;
            }
        }
    }
    eat() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newCell[0];
            this.y = newCell[1];

            this.energy++;
            this.mul();
            for (var i in grassArr) {
                if (newCell[0] == grassArr[i].x && newCell[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.move();
        }
    }
}