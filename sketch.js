
function setup() {
  createCanvas(windowWidth, windowHeight);
    x = width/2;
    y = height/2;
    move1=createButton('Shift Left');
    move1.position(width/12, y+50);
    move1.mousePressed(shiftLeft);
    
    move2=createButton('Shift Right');
    move2.position(width/12, y+70);
    move2.mousePressed(shiftRight);
    
    move3=createButton('Shift Up');
    move3.position(width/12, y+90);
    move3.mousePressed(shiftUp);
    
    move4=createButton('Shift Down');
    move4.position(width/12, y+110);
    move4.mousePressed(shiftDown);

    button1=createButton('draw circle');
    button1.position(width/12, height/2);
    
    button2=createButton('draw square');
    button2.position(width/12, button1.y+30);
    background('grey');
    
    inp1 = createColorPicker('#ff0000');
    inp1.position(width/12, button1.y-100);
    text('select Color', width/12, button1.y-110);
    
    slider1 = createSlider(0, 300, 100);
    slider1.position(width/12, button1.y-40);
    slider1.style('width', '80px');
    text('select size', width/12, button1.y-50);
    
    sel = createSelect();
    sel.position(width/12, button1.y-150);
    sel.option('Solid Color');
    sel.option('Outline only');
    
    fill(255);
    rectMode(CENTER);
    rect(width/2, height/2, width/2, height);
    
    button1.mousePressed(drawCircle);
    button2.mousePressed(drawSquare);
}

/*function draw(){
    fill(255);
    rectMode(CENTER);
    rect(width/2, height/2, width/2, height);
    
    drawPointer();
    
}*/

function drawPointer(){
    push();
    fill('yellow');
    circle(x, y, 10);
    pop();
}
 function drawCircle(){
     if(sel.value()==='Solid Color'){
     noStroke;
     fill(inp1.color());
     }
     else{
         noFill();
         stroke(inp1.color());
     }
     circle(x, y, slider1.value());
 }
function drawSquare(){
    if(sel.value()==='Solid Color'){
     noStroke;
     fill(inp1.color());
     }
     else{
         noFill();
         stroke(inp1.color());
     }
     rect(width/2, height/2, slider1.value());
 }
function shiftLeft(){
    x= x-10;
}
function shiftRight(){
    x= x+10;
}
function shiftUp(){
    y= y-10;
}
function shiftDown(){
    y= y+10;
}
