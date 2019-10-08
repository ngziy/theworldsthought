var url = 'https://mddn201project3-zed.firebaseio.com/messages.json';
let keys;
let JSONmessages;
let textPos = [];
let bg
let buffer = [];
let entryNo = 30

function preload() {
    bg = loadImage('bg-01.png');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < entryNo; i++) {
        textPos[i] = {
            px: random(-width, width),
            py: random(150, (height / 4) * 3),
            speed: random(2, 4)
        };
    }

    setInterval(askISS, 1000);
}

function askISS() {
    JSONmessages = loadJSON(url, gotData);
}

function gotData(data) {
    keys = Object.keys(JSONmessages);
    if (JSONmessages) {
        for (let k = 1; k < entryNo; k++) {
            buffer.push(JSONmessages[keys[keys.length - k]].messages);
        }
    }
}
function draw() {
    background(255);
    image(bg, ((windowWidth - bg.width) / 2), (windowHeight - bg.height));
    textFont("Rubik Mono One");
    textAlign(CENTER, CENTER);
    textSize(12.5)
    rectMode(CENTER)
    if (buffer.length >= entryNo) {
        for (let k = 1; k < entryNo; k++) {
            noStroke()
            fill(0, 125)
            rect(textPos[k].px, textPos[k].py, textWidth(buffer[buffer.length-k])+100, 50)
            fill(255)
            text(buffer[buffer.length-k], textPos[k].px, textPos[k].py);

            textPos[k].px += textPos[k].speed;
            if (textPos[k].px > width * 2) {
                textPos[k].px = -width;
            }
        }
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}