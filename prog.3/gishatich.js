class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.multiply = 0;
        this.directions = [
        ];

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 5 && newCell) {
            var newPredator = new Predator(newCell[0], newCell[1], this.index);
            predatorArr.push(newPredator);
            matrix[newCell[1]][newCell[0]] = 3;
            this.multiply = 0;
        }
    }
    move() {
        this.energy--;
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 3;
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
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
    eat() {
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 3;
            matrix[this.y][this.x] = 0;

            this.x = newCell[0];
            this.y = newCell[1];

            this.energy++;
            this.mul();
            for (var i in geaterArr) {
                if (newCell[0] == geaterArr[i].x && newCell[1] == geaterArr[i].y) {
                    geaterArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.move();
        }
    }
}
