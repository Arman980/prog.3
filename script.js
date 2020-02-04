///! Setup function fires automatically
function setup() {

    var side = 20;


    var socket = io();
    var clientmatrix = [];
    var m = 20;

    var n = 20;

    




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


    
    