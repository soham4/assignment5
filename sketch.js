
function setup() {
  cnv =createCanvas(windowWidth, windowHeight);
    background(255);
    
    
    radio = createRadio();
    radio.option('draw flower');
    radio.option('draw circle');
    radio.option('draw square');
    radio.option('draw triangle');
    radio.style('width', '110px');
    radio.position(width/12, height/2);
    
    inp1 = createColorPicker('#ff0000');
    inp1.position(width/12, radio.y-100);
    slider1 = createSlider(0, width/5, width/2.5);
    slider1.position(width/12, radio.y-40);
    slider1.style('width', 'width/12');
    text('select size', width/12, radio.y-50);
    
    sel = createSelect();
    sel.position(width/12, radio.y-150);
    sel.option('Solid Color');
    sel.option('Outline only');
    
}

 function draw(){
     fill(247, 128, 84);
    rectMode(CORNER);
    noStroke();
    rect(0, 0, width/4, height);
     fill(0);
     text('select Color', width/12, radio.y-110);
     text('select size', width/12, radio.y-50);
     if(radio.value()==='draw flower'){
    cnv.mouseClicked(drawFlower);
  }
  if(radio.value()==='draw circle'){
    cnv.mouseClicked(drawCircle);
  }
  if(radio.value()==='draw square'){
    cnv.mouseClicked(drawSquare);
  }
  if(radio.value()==='draw triangle'){
    cnv.mouseClicked(drawTriangle);
  }
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
     if(mouseX>= width/4){
        a=mouseX;
        b=mouseY;
     }
     circle(a, b, slider1.value());
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
    if(mouseX>= width/4){
        a=mouseX;
        b=mouseY;
     }
     rect(a, b, slider1.value());
 }

function drawTriangle(){
    if(sel.value()==='Solid Color'){
     noStroke();
     fill(inp1.color());
     }
     else{
         noFill();
         stroke(inp1.color());
     }
     if(mouseX>= width/4){
        a=mouseX;
        b=mouseY;
     }
    //triangle(a, b, a+20, b+30, a-20, b+30);
    triangle(a, b-slider1.value(), a-(slider1.value()*(sqrt(3)/2)), b+(slider1.value()/2), a+(slider1.value()*(sqrt(3)/2)), b+(slider1.value()/2));
}

function drawFlower(){
     if(mouseX>= width/4){
        a=mouseX;
        b=mouseY;
     }
    if(sel.value()==='Solid Color'){
     noStroke();
     fill(inp1.color());
     }
     else{
         noFill();
         stroke(inp1.color());
     }
        ellipseMode(CORNERS);
        
        push();
        translate(a, b);
        ellipse(0, 0, slider1.value()*0.5, slider1.value()*0.25);
        pop();
        
        push();
        translate(a, b);
        rotate(radians(180));
        ellipse(0, 0, slider1.value()*0.5, slider1.value()*0.25);
        pop();
        
        
        push();
        translate(a, b);
        rotate(radians(60));
        ellipse(0, 0, slider1.value()*0.5, slider1.value()*0.25);
        pop();
        
        push();
        translate(a, b);
        rotate(radians(300));
        ellipse(0, 0, slider1.value()*0.5, slider1.value()*0.25);
        pop();
  

        push();
        translate(a, b);
        rotate(radians(240));
        ellipse(0, 0, slider1.value()*0.5, slider1.value()*0.25);
        pop();
  
        push();
        translate(a, b);
        rotate(radians(120));
        ellipse(0, 0, slider1.value()*0.5, slider1.value()*0.25);
        pop();
  
        ellipseMode(CENTER);
        fill('yellow');
        push();
        translate(a, b);
        ellipse(0, 0, slider1.value()*0.25);
        pop();
        
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    fill(247, 128, 84);
    rectMode(CORNER);
    rect(0, 0, width/4, height);
    radio.position(width/12, height/2);
    text('select Color', width/12, radio.y-110);
    inp1.position(width/12, radio.y-100);
    text('select size', width/12, radio.y-50);
    slider1.position(width/12, radio.y-40);
    slider1.style('width', '100px');
    sel.position(width/12, radio.y-150);
}