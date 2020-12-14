var ballX = 500, ballY = 400,updates=0, rightMove=true, downMove=false, racketX=0, racketY=590;
var backDesert=tryToLoad("backDesert");
var ball=tryToLoad("ball");
function update() {
    racketX=mouseX;
    if(rightMove){
        ballX=ballX+2;
    }else{
        ballX=ballX-2;
    }
    if(downMove){
        ballY=ballY+2;
    }else{
        ballY=ballY-2;
    }
    if(ballX>750){
        rightMove=false;
    }
    if(ballY<0){
        downMove=true;
    }
    if(ballY>550){
        if(areColliding(racketX,racketY,100,10,ballX,ballY,50,50)){
            downMove=false;
        }else{
            ballX=randomInteger(750);
            ballY=randomInteger(350);
        }
    }
    if(ballX<0){
        rightMove=true;
    }
}
function draw() {
    drawImage(backDesert,0, 0, 800, 600);
    drawImage(ball,ballX,ballY,50,50);
    context.fillRect(racketX,racketY, 100, 10);
    context.fillStyle="#ebd9c6";
};
function keyup(key) {
};
function mouseup() {
};
