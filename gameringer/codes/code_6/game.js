var playerX=0, playerY=500, updates=0, shooting=false, bulletX, bulletY, targetX=0, 
    targetY=0, points=1, lives=5;
var backGround=tryToLoad("backStars");
var spacecraft=tryToLoad("spacecraft");
var explosion=tryToLoad("explosion");
var ufo=tryToLoad("ufo");
function update() {
    targetX=targetX+2;
    if(targetX>800){
        targetX=0;
        targetY=randomInteger(500);
    }
    playerX=mouseX;
    if(shooting){
        bulletX=playerX+15;
        bulletY=playerY;
    }
    bulletY=bulletY-5;
    if(areColliding(bulletX,bulletY,50,50,targetX,targetY,100,120)){
        targetX=900;
        points=points+1;
        console.log("Points=",points);
    }
    if(areColliding(targetX,targetY,100,120,playerX,playerY,80,110)){
        targetX=900;
        lives=lives-1;
        console.log("Lives=",lives);
    }
    if(lives<=0){
        playerX=3000;
        targetY=3000;
        console.log("Gave over!");
        backGround=tryToLoad("gameOver");
    }
}
function draw() {
    drawImage(backGround,0,0,800,600);
    drawImage(spacecraft,playerX,playerY,80,110);
    drawImage(explosion,bulletX,bulletY,50,50);
    drawImage(ufo,targetX,targetY,120,100);
};
function keyup(key) {
};
function mouseup() {
    shooting=false;  
};
function mousedown(){
    shooting=true;
};