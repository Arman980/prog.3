//! Setup function fires automatically
function setup() {

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let xotakerCountElement = document.getElementById('xotakerCount');
    let GishatichCountElement = document.getElementById('GishatichCount');
    let waterCountElement = document.getElementById('waterCount');
    let banCountElement = document.getElementById('banCount');
        var side = 20;
    
    
        var socket = io();
        var clientmatrix = [];
        var m = 20;
    
        var n = 20;
      

function mousePressed(){

    var x = Math.floor(mouseX / side);
    var y = Math.floor(mouseY / side);
    var arr = [x,y];
    console.log(arr)
    socket.emit("fire",arr)

}


    frameRate(5);
    createCanvas(m * side, n * side);
    background('#acacac');
    function drawMatrix(data) {
        clientmatrix = data.matrix
        for (var y = 0; y < clientmatrix.length; y++) {
            for (var x = 0; x < clientmatrix[y].length; x++) {
    
                if (clientmatrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
    
                else if (clientmatrix[y][x] == 1) {
                    if (weather == "Summer") {
                        fill("green");
                    } else if (weather != "Summer") {
                        fill("#A79F15");
                    }
                    rect(x * side, y * side, side, side);
                }
    
                else if (clientmatrix[y][x] == 2) {
                    if (weather == "Winter") {
                        fill("#696968");
                    } else if (weather != "Winter") {
                        fill("Yellow");
                    }
                    rect(x * side, y * side, side, side);
                }
                else if (clientmatrix[y][x] == 3) {
                    fill("255, 0, 0 ");
                    rect(x * side, y * side, side, side);
                }
                else if (clientmatrix[y][x] == 4) {
                    fill("#7CFC00");
                    rect(x * side, y * side, side, side);
                }
                else if (clientmatrix[y][x] == 5) {
                    fill("#006400");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
    
    socket.on("data", drawMatrix);
}


    
    