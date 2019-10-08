var url = 'https://mddn201project3-zed.firebaseio.com/messages.json';
let keys;
let JSONmessages;
let textPos = [];
let bg
let buffer = [];

function preload() {

    bg = loadImage('bg-01.png');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 20; i++) {
        textPos[i] = {
            px: random(-width / 2, width / 2),
            py: random(50, (height / 4) * 3),
            speed: random(1, 5)
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
        for (let k = 1; k < 15; k++) {
            buffer.push(JSONmessages[keys[keys.length - k]].messages);
        }
    }
}
function draw() {
    background(255);
    image(bg, ((windowWidth - bg.width) / 2), (windowHeight - bg.height));
    if (buffer.length >= 15) {
        for (let k = 1; k < 15; k++) {
            noStroke()
            fill(0, 125)
            rect(textPos[k].px, textPos[k].py, width / 4, height / 7)
            fill(255)
            text(buffer[buffer.length-k], textPos[k].px, textPos[k].py, width/4, height/7);
            textPos[k].px += textPos[k].speed;
            if (textPos[k].px > width * 2) {
                textPos[k].px = -width / 2;
            }
        }
    }
}