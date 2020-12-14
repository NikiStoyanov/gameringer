var updates=0, hero=tryToLoad("hero"), backGround=tryToLoad("backGrass"), heroX=100, heroY=100;
function update() {
    heroX=mouseX;
    heroY=mouseY;
}
function draw() {
    drawImage(backGround, 0, 0, 800, 600);
    drawImage(hero, heroX, heroY, 80, 100);
};
function keyup(key) {
};
function mouseup() {
};