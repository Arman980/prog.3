var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

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
xotakerArr = [];

var Grass = require("./xot.js")
var xotaker = require("./xotaker.js")
var water=require("./water.js")
var ban=require("./ban.js")
var predator=require("./predator.js")


server.listen(3000);

