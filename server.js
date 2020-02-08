//! Requiring modules  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
app.use(express.static("."));
app.get('/',function (req, res) {
    res.redirect('index.html');
});
server.listen(3000)



//! Requiring modules  --  END

var grass = require("./grass.js");
var ban = require("./ban.js");
var grassEater = require("./grassEater.js");
var Water = require("./water.js");
var predator = require("./predator.js");
//! Setting global arrays  --  START
predatorHashiv = 0; 
grassArr = [];
waterArr = [];
grassEaterArr = [];
banArr = [];
predatorArr = [];
grassHashiv = 0;
banHashiv = 0;
grassHashiv = 0;
waterHashiv = 0;
weather = "Summer";
weather = 1;

//! Setting global arrays  -- END
function random(fr, ft) {
    Math.floor(Math.random(fr, ft))
}

function getWeather() {
    weatherinit++;
    if (weatherinit == 5) {
        weatherinit = 1
    }
    else if (weatherinit ==4) {
        weather = "Winter"
    }
    else if (weatherinit ==3) {
        weather = "Autumn"
    }
    else if (weatherinit ==2) {
        weather = "Spring"
    }
    else if (weatherinit ==1) {
        weather = "Summer"
    }
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
    console.log("I am Here");

});
//! SERVER STUFF END  --  END

function creatingObjects() {
    matrix = matrixGenerator(20)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2);
                geaterArr.push(ge);
            }
            else if (matrix[y][x] == 3) {
                var pe = new Predator(x, y, 3);
                predatorArr.push(pe);
            }

            else if (matrix[y][x] == 4) {
                var wa = new Water(x, y, 5);
                waterArr.push(wa);
            }
            else if (matrix[y][x] == 5) {
                var ba = new ban(x, y, 6);
                banArr.push(ba);
            }
        }
    }
}


creatingObjects();

function drawserver(data) {
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

    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        weatherserver: weather
    }
    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);

    io.on("connection", function (socket) {
        socket.on("fire", function (arr) {
            var x = arr[0];
            var y = arr[1];
    
            var directions = [
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1],
            [x - 1, y],
            [x + 1, y],
            [x - 1, y + 1],
            [x, y + 1],
            [x, y + 1],
            [x + 1, y + 1]
           ];
        })
    })

var obj = { "info": [] };

function writefile() {
    var fileName = "static.json";
    obj.info.push({ "cnvac xoteri  qanak ": grassHashiv });
    fs.writeFileSync(fileName, JSON.stringify(obj, null, 3));
}


setInterval(drawserver, 1000);
setInterval(getweather, 3000); 
setInterval(writefile, 6000); 
