//! Requiring modules  --  START
var grass = require("./xot.js");
var mard = require("./mard.js");
var xotaker = require("./xotaker.js");
var car = require("./car.js");
var Gishatich = require("./gishatich.js");
//! Requiring modules  --  END

//! Setting global arrays  --  START
grassArr = [];
mardArr = [];
xotakerArr = [];
carArr = [];
GishatichArr = [];
grassHashiv = 0;
mardHashiv = 0;
xotakerHashiv = 0;
carHashiv = 0;
GishatichHashiv = 0;
//! Setting global arrays  -- END
function random(fr,ft){
    Math.floor(Math.random(fr,ft))
}
//! Creating MATRIX -- START

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

//! Creating MATRIX -- END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("hey");

});
//! SERVER STUFF END  --  END


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
