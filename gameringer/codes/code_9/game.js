var playerX = 0, playerY = 0,updates=0, inCard=[], clickedAt1=-1, clickedAt2=-1,
typesOfCards=5, numberOfCards=2*typesOfCards, widthInPixels=800/numberOfCards, randomIndexCard, score=0;
var arrowUp=tryToLoad("arrowUp");
var backSpace=tryToLoad("backSpace");
var box=tryToLoad("box");
var star=tryToLoad("star");
for(indexCard=0; indexCard<numberOfCards; indexCard=indexCard+1){
    inCard[indexCard]=-1;
}
for(differentCards=0; differentCards<typesOfCards; differentCards=differentCards+1){
    while(inCard[randomIndexCard]!=-1){
        randomIndexCard=randomInteger(numberOfCards);
    }
    inCard[randomIndexCard]=differentCards;
    while(inCard[randomIndexCard]!=-1){
        randomIndexCard=randomInteger(numberOfCards);
    }
    inCard[randomIndexCard]=differentCards;
}

function update() {
    playerX = mouseX;
    playerY = mouseY;
}
function draw() {
    drawImage(backSpace,0, 0, 800, 600);
    drawImage(arrowUp,playerX,playerY,30,100);
    for(indexCard=0; indexCard<numberOfCards; indexCard=indexCard+1){
        if(inCard[indexCard]!=-1){
            for(typeOfCard=0; typeOfCard<typesOfCards; typeOfCard=typeOfCard+1){
                if(inCard[indexCard]==typeOfCard){
                    drawImage(card[typeOfCard], indexCard*widthInPixels, 250, widthInPixels-1, widthInPixels-1);
                }
            }    
        }else{
            drawImage(star, indexCard*widthInPixels, 250, widthInPixels-1, widthInPixels-1);
        }
    }
    
    for(indexCard=0; indexCard<numberOfCards; indexCard=indexCard+1){
        if(inCard[indexCard]!=-1){
            if(indexCard!=clickedAt1  && indexCard!=clickedAt2){
                drawImage(box, indexCard*widthInPixels, 250, widthInPixels-1, widthInPixels-1);
            }
        }
    }
    context.fillStyle="white";
    context.font="40px Elephant";
    context.fillText("Score=",550,100);
    context.fillText(score, 700, 100);
    
};
function keyup(key) {
};
function mouseup() {
    if(clickedAt1==-1){
        clickedAt1=Math.floor(mouseX/widthInPixels);
     }else{
         if(clickedAt2==-1){
             clickedAt2=Math.floor(mouseX/widthInPixels);
         }else{
             if(inCard[clickedAt1]==inCard[clickedAt2] && clickedAt1!=clickedAt2){
                 inCard[clickedAt1]=-1;
                 inCard[clickedAt2]=-1;
                 score=score+1;
             }else{
                 console.log("Wrong!");
             }
             clickedAt1=-1;
             clickedAt2=-1;
         }
     } 
};
