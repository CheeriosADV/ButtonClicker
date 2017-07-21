var fill1 = 0;
var fill2 = 0;
var fill3 = 0;
var clicks = 999;
var wow = 100;
var button;
function setup() {
createCanvas(600, 600);
    
button = createButton("reset");
    button.position(20, 550);
    button.mousePressed(resetSketch);
    resetSketch();
}

function draw() {
    background(100, 0, 100);
    fill(50, 0, 50);
    stroke(50, 0, 50);
    ellipse(315, 315, 300, 300);
stroke(fill1, fill2, fill3);
    fill(fill1, fill2, fill3);
    ellipse(300, 300, 300, 300);
    fill(0);
    stroke(0);
    textSize(32);
    text("Clicks: " + clicks, 25, 50);
    text("Click on Enter", 200, 100);
    WOW();
}

function resetSketch(){
    clicks = 0;
    wow = 10;
    fill1 = 0;
    fill2 = 0;
    fill3 = 0;
}

function keyPressed(){
    if(keyCode ===  ENTER){
    if(fill1 < 255){
    fill1 = fill1 + Math.random() * (255 - 0) + 0;;
    }else if(fill1 >= 255){
        fill1 = 255;
        fill1 = fill1 - Math.random() * (255 - 0) + 0;;
        
    }
    
    if(fill2 < 255){
    fill2 = fill2 + Math.random() * (255 - 0) + 0;
    }else if(fill2 >= 255){
        fill2 = 255;
        fill2 = fill2 - Math.random() * (255 - 0) + 0;
    }
    
    if(fill3 < 255){
    fill3 = fill3 + Math.random() * (255 - 0) + 0;
    }else if(fill3 >= 255){
        fill3 = 255;
        fill3 = fill3 - Math.random() * (255 - 0) + 0;
    }
    
    clicks++;
    }
}

function WOW(){
if(clicks >= 100 && clicks < 300){
    wow = 100;
    textSize(26);
        text("Wow you have now clicked over " + wow + " times!", 20, 500);
    }else{
        console.log("no");
    }
    
if(clicks >= 300 && clicks < 500){
    wow = 300;
    textSize(26);
        text("Wow you have now clicked over " + wow + " times!", 20, 500);
}else{
        console.log("no");
    } 
    
if(clicks >= 500 && clicks < 700){
    wow = 500;
    textSize(26);
        text("Wow you have now clicked over " + wow + " times!", 20, 500);
}else{
        console.log("no");
    } 
    
    if(clicks >= 700 && clicks < 1000){
    wow = 700;
    textSize(26);
        text("Wow you have now clicked over " + wow + " times!", 20, 500);
}else{
        console.log("no");
    }
    
    if(clicks >= 1000){
    wow = clicks;
    textSize(26);
        text("You have clicked " + wow + " times!", 20, 500);
} 
    
}