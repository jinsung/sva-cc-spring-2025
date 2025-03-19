let ws;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.addClass('background');
  background(220);

  ws = new WebSocket("ws://localhost:3000");
  ws.onmessage = event => {
    console.log(JSON.stringify(event.data));
    onMessage(event.data);
  }
}

function draw() {
}

function onMessage(data) {
  background(220);
  const json = JSON.parse(data);
  //console.log("onMessage:", JSON.stringify(json));
  circle(json.x, json.y, 30);
}

function mouseDragged() {
  sendData();
}

function onMousePressed() {
  sendData();
}

function sendData() {
  const data = {
    "px":pmouseX, 
    "py":pmouseY,
    "x":mouseX, 
    "y":mouseY
  };
  ws.send(JSON.stringify(data));
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
}