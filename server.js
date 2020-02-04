var express = require('express');
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
let random = require('./modules/random');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];



grassArr = [];
grassEaterArr = [];
matrix = [];
grassHashiv = 0;






app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

function matrixGenerator(l) {
    var m = [];
    for (var i = 0; i < l; i++) {
        m[i] = [];
        for (var j = 0; j < l; j++) {
            var rand = random(0, 100);
            if (rand <= 20) {
                m[i][j] = 1;
            } else if (rand > 20 && rand <= 50) {
                m[i][j] = 2;
            } else if (rand > 55 && rand <= 60) {
                m[i][j] = 3;
            } else if (rand > 69 && rand <= 70) {
                m[i][j] = 4;
            } else if (rand > 75 && rand <= 80) {
                m[i][j] = 5;
            } else {
                m[i][j] = 0;
            }
        }
    }
    return m;
}

grassArr = [];
waterArr = [];
banArr = [];
predatorArr = [];
grassEaterArr = [];

var Grass = require("./Grass.js")
var grassEater = require("./grassEater.js")
var water = require("./water.js")
var ban = require("./ban.js")
var predator = require("./predator.js")


server.listen(3000);


function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
        }
    }
}

creatingObjects();

function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }//! Object to send

    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}
