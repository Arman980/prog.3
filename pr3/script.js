// function matrixGenerator(l) {
//     var m = [];
//     for (var i = 0; i < l; i++) {
//         m[i] = [];
//         for (var j = 0; j < l; j++) {
//             var rand = random(0, 100);
//             if (rand <= 20) {
//                 m[i][j] = 1;
//             } else if (rand > 20 && rand <= 50) {
//                 m[i][j] = 2;
//             } else if (rand > 55 && rand <= 60) {
//                 m[i][j] = 3;
//             } else if (rand > 69 && rand <= 70) {
//                 m[i][j] = 4;
//             } else if (rand > 75 && rand <= 80) {
//                 m[i][j] = 5;
//             } else {
//                 m[i][j] = 0;
//             }
//         }
//     }
//     return m;
// }
var socket = io();
var m = 20;
var n = 20;
var side = 20;

// var matrix;
// var grassArr = [];
// var geaterArr = [];
// var predatorArr = [];
// var waterArr = [];
// var banArr = [];

// var side = 10;

function setup() {

    createCanvas(m * side, n * side)
    background('#acacac');
}




function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(255, 0, 0);
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) {
                fill("#7CFC00");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#006400");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);

            }
        }
    }

socket.on("matrix", drawMatrix)

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in geaterArr) {
        geaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in waterArr) {
        waterArr[i].mul();
    }
    for (var i in banArr) {
        banArr[i].mul();
    }

}

