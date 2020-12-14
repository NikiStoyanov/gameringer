// Creating variables
var boxX = 0, boxY = 0,updates=0, noteX=750, noteY=0, x, points=0;
var note=tryToLoad("note");
var box=tryToLoad("box");
var backMusic=tryToLoad("backMusic");
function update() {
    noteX=noteX-10;
    if(noteX<0){
        noteX=750;
        x=randomInteger(2);
        console.log("x=", x);
        if(x==0){
        noteY=0;
        }else{
            noteY=300;
        }
        if(noteY==boxY){
            points=points+1;
            console.log("Points=", points);
        }
    }
    if(mouseY>300){
        boxY=300;
    }
    if(mouseY<300){
        boxY=0;
    }
}
function draw() {
    drawImage(backMusic, 0, 0, 800, 600);
    drawImage(box, boxX, boxY, 50, 300);
    drawImage(note, noteX, noteY, 50, 300);
};
function keyup(key) {
};
function mouseup() {
};
