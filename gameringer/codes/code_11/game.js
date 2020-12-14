var updates = 0,
    lightOn = [],
    randomNumber, clickedAtX, clickedAtY;
var backBoard = tryToLoad("backBoard");
var greenButton = tryToLoad("greenButton");
var rebButton = tryToLoad("redButton");
for (x = 0; x < 7; x = x + 1) {
    lightOn[x] = [];
    for (y = 0; y < 5; y = y + 1) {
        randomNumber = randomInteger(2);
        if (randomNumber == 0) {
            lightOn[x][y] = false;
        } else {
            lightOn[x][y] = true;
        }
    }
}

function update() { }

function draw() {
    drawImage(backBoard, 0, 0, 800, 600);
    for (x = 0; x < 7; x = x + 1) {
        for (y = 0; y < 5; y = y + 1) {
            if (lightOn[x][y] == true) {
                drawImage(greenButton, x * 100, y * 100, 100, 100);
            } else {
                drawImage(rebButton, x * 100, y * 100, 100, 100);
            }
        }
    }
};

function keyup(key) { };

function mouseup() {
    clickedAtX = Math.floor(mouseX / 100);
    clickedAtY = Math.floor(mouseY / 100);
    if (lightOn[clickedAtX][clickedAtY] == true) {
        lightOn[clickedAtX][clickedAtY] = false;
    } else {
        lightOn[clickedAtX][clickedAtY] = true;
    }
    if (clickedAtX < 6) { //right
        lightOn[clickedAtX + 1][clickedAtY] = !lightOn[clickedAtX + 1][clickedAtY];
    }
    if (clickedAtX > 0) { //left
        lightOn[clickedAtX - 1][clickedAtY] = !lightOn[clickedAtX - 1][clickedAtY];
    }
    if (clickedAtY < 4) { //down
        lightOn[clickedAtX][clickedAtY + 1] = !lightOn[clickedAtX][clickedAtY + 1];
    }
    if (clickedAtY > 0) { //up
        lightOn[clickedAtX][clickedAtY - 1] = !lightOn[clickedAtX][clickedAtY - 1];
    }
};