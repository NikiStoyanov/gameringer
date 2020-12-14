var headX = 0, headY=0, updates=0, directionX=0, directionY=1, passedX=[], passedY=[], numberOfPassed=0, numberOfApples=5,  appleX=[], appleY=[], extension=200, points=0;
backGround=tryToLoad("backGround");
snake=tryToLoad("snake");
apple=tryToLoad("apple");
for(indexApple=0; indexApple<numberOfApples; indexApple=indexApple+1){
    appleX[indexApple]=randomInteger(700);
    appleY[indexApple]=randomInteger(500);
}
function update() {
    headX=headX+directionX;
    headY=headY+directionY;
    numberOfPassed=numberOfPassed+1;
    passedX[numberOfPassed]=headX;
    passedY[numberOfPassed]=headY;
    for(indexPassed=numberOfPassed-extension; indexPassed<numberOfPassed; indexPassed=indexPassed+1){
        if(headX==passedX[indexPassed] && headY==passedY[indexPassed]){
            console.log("Baaam!!!");
        }
    }
    for (indexApple=0; indexApple<numberOfApples; indexApple=indexApple+1){
        if(areColliding(headX, headY, 20, 20, appleX[indexApple], appleY[indexApple], 50, 50)){
            extension=extension+30;
            appleX[indexApple]=5000;
            appleY[indexApple]=5000;
            points=points+1;
            console.log("Points=",points);
        }
    }
}
function draw() {
    drawImage(backGround, 0, 0, 800, 600);
    for(indexPassed=numberOfPassed-extension; indexPassed<numberOfPassed; indexPassed=indexPassed+1){
        drawImage(snake, passedX[indexPassed], passedY[indexPassed], 25, 25);
    }
    for(indexApple=0; indexApple<numberOfApples; indexApple=indexApple+1){
        drawImage(apple, appleX[indexApple], appleY[indexApple], 50, 50);
    }
};
function keyup(key) {
    if(key==39){ //right
        directionX=1;
        directionY=0;
    }
    if(key==40){ //down
        directionX=0;
        directionY=1;
    }
    if(key==37){ //left
        directionX=-1;
        directionY=0;
     }  
    if(key==38){ //up
         directionX=0;
         directionY=-1;
    }
};
function mouseup() {
};
