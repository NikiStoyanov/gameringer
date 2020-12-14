var playerX =400, playerY = 0,updates=0,frame=0,targetX=0,targetY=390,lives=5, i;
var backLandscape=tryToLoad("backLandscape");
var boy=tryToLoad("boy");
var heart=tryToLoad("heart");
function update() {
    if(isKeyPressed[32]){
        playerY=playerY-2;
    }else{
        playerY=playerY+2;
    }
    if(isKeyPressed[37]){
        playerX=playerX-2;
    }
    if(isKeyPressed[39]){
        playerX=playerX+2;
    }
    if(playerY<0){
        playerY=0;
    }
    if(playerY>520){
        playerY=520;
    }
    targetX=targetX+3;
    if(targetX>800){
        targetX=0;
        targetY=randomInteger(500);
    }
    if(areColliding(playerX,playerY,80,80,targetX,targetY,100,110)){
        lives=lives-1;
        targetX=0;
    }
    if(lives<=0){
        playerX=3000;
        targetX=3000;
    }
}
function draw() {
    drawImage(backLandscape,0, 0, 800, 600);
    drawImage(girl[frame],targetX,targetY,100,110);
    drawImage(boy,playerX,playerY,80,90);
    frame=frame+1;
    if(frame>7){
        frame=0;
    }
    for(i=0;i<lives;i=i+1){
        drawImage(heart,i*50,30,30,30);
    }
};
function keyup(key) {
};
function mouseup() {
};