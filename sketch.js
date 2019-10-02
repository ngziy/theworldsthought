let earthquakes;
let JSONmessages;
let JSONinstagram;
let keys;
let textPos = [];
let speed = []
let bg
let scaleRatio = 0
let displayBox = []
let checkBox = []
let url1 = 'https://mddn201project3-zed.firebaseio.com/messages.json';
let count = 0


function preload() {
  JSONmessages = loadJSON(url1, 'jsonp');

  bg = loadImage('bg-01.png');
 
}


function setup() {

    createCanvas(windowWidth, windowHeight);

  keys = Object.keys(JSONmessages);

  for (let h = 1; h < 16; h++) {
  checkBox.push(JSONmessages[keys[keys.length-h]])
}

  for (let i = 0; i < 100; i++) {
    textPos[i] = {
      px: random(-width/2, width/2),
      py: random(50, (height/4)*3),
      speed: random(1, 5)
    };
  }

  scaleRatio = windowWidth/bg.width

    rectMode(CENTER)
    textFont("Rubik Mono One");
    textSize(height/75);
    textAlign(CENTER, CENTER);

   setInterval(function() {httpGet(url1,"json");console.log("sent")}, 500);
    
  }

function draw() {


  if(JSON.stringify(checkBox)!==JSON.stringify(displayBox)){
 displayBox = JSON.parse(JSON.stringify(checkBox))
}

  	background(255);
    image(bg,((width-bg.width)/2),(windowHeight-bg.height));
      for(let k=0; k<15 ; k++) {
        noStroke()
        fill(0,125)
        rect(textPos[k].px, textPos[k].py, width/4, height/7)
        fill(255)
        text(displayBox[k].messages, textPos[k].px, textPos[k].py,width/4, height/7);
        textPos[k].px+=textPos[k].speed;
        if(textPos[k].px > width*2) {
          textPos[k].px = -width/2;
        }
      }



  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  location.reload()
  
}