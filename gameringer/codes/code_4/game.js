var updates=0, fruitX=350, fruitY=0, typeFruit, points=0;
var fruit=tryToLoad("watermelon");
var backWood=tryToLoad("backWood");
function update() {
    fruitY=fruitY+5;
    if(fruitY>600){
        fruitY=0;
        fruitX=randomInteger(800);
        typeFruit=randomInteger(6);
        if(typeFruit==0){
            fruit=tryToLoad("pear");
        }
        if(typeFruit==1){
            fruit=tryToLoad("strawberry");
        }
        if(typeFruit==2){
            fruit=tryToLoad("banana");
        }
        if(typeFruit==3){
            fruit=tryToLoad("peach");
        }
        if(typeFruit==4){
            fruit=tryToLoad("cherry");
        }
        if(typeFruit==5){
            fruit=tryToLoad("pineapple");
        }
    }
    if(mouseX>=fruitX && mouseX<=fruitX+100){ //проверка за сблъсък
            if(mouseY>=fruitY && mouseY<=fruitY+100){
                console.log("Fruit Salad!");
                points=points+1;
                console.log("Points=", points);
                fruitY=1000;
            }
        }
}
function draw() {
    drawImage(backWood, 0, 0, 800, 600);
    drawImage(fruit, fruitX, fruitY, 100, 100);
};
function keyup(key) {
};
function mouseup() {
};
