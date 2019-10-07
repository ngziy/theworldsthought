
let JSONmessages;

let keys;
let textPos = [];

let bg
let scaleRatio = 0

  let url1 = 'https://mddn201project3-zed.firebaseio.com/messages.json';

let timer = 0;

function preload() {

  JSONmessages = loadJSON(url1,"jsonp")

  bg = loadImage('bg-01.png');
 
}


function setup() {

  createCanvas(windowWidth, windowHeight);
  keys = Object.keys(JSONmessages);



  for (let i = 0; i < 20; i++) {
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
    
  }

function draw() {


  	background(255);
    image(bg,((width-bg.width)/2),(windowHeight-bg.height));
      for(let k=1; k<15 ; k++) {
        noStroke()
        fill(0,125)
        rect(textPos[k].px, textPos[k].py, width/4, height/7)
        fill(255)
        text(JSONmessages[keys[keys.length-k]].messages, textPos[k].px, textPos[k].py, width/4, height/7);
        textPos[k].px+=textPos[k].speed;
        if(textPos[k].px > width*2) {
          textPos[k].px = -width/2;
        }
      }



  timer++;
  if(timer> 1750) {
    // JSONmessages = loadJSON(url1,"jsonp")
    // keys = Object.keys(JSONmessages);
    location.reload()
    timer = 0;
    


  }
  }



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  location.reload()
  
}