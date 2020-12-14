// Creating variables
var playerX=0, playerY=0, updates=0, plX=[], plY=[], lives=5; 
var backMountain=tryToLoad("backMountain");
var superhero=tryToLoad("superhero");
plX[0]=200; 
plY[0]=550; 
plX[1]=400; 
plY[1]=200; 
plX[2]=600; 
plY[2]=400;
function update() {
    playerY=playerY+1;
    if(isKeyPressed[37]){
        playerX=playerX-1;
    }
    if(isKeyPressed[39]){
        playerX=playerX+1;   
    }
    for(ip=0;ip<3;ip=ip+1){
        plY[ip]=plY[ip]-1;
    }
    for(ip=0;ip<3;ip=ip+1){
       if(plY[ip]<0){
            plY[ip]=600;  
       } 
    }
    for(ip=0;ip<3;ip=ip+1){
        if(areColliding(playerX,playerY,80,80,plX[ip],plY[ip],200,10)){
            playerY=plY[ip]-80;
        }
    }
    if(playerY<0 || playerY>600){
        lives=lives-1;
        console.log("Jivoti=",lives);
        playerY=200;
    }
}
function draw() {
    drawImage(backMountain,0, 0, 800, 600);
    drawImage(superhero,playerX,playerY,80,80);
    for(ip=0;ip<3;ip=ip+1){
        drawImage(ground[ip],plX[ip],plY[ip],200,10);
    }
};
function keyup(key) {
};
function mouseup() {
};
