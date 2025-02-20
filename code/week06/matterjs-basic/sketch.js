let engine;
let boxes = [];
let boxSize = 30;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  engine = Matter.Engine.create();
  let ground = Matter.Bodies.rectangle(
    width/2, height, width, 25, { isStatic: true });
  Matter.Composite.add(engine.world, ground);
}

function draw() {
  background(190);

  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    push();
    translate(box.position.x, box.position.y);
    rotate(box.angle);
    rect(0, 0, boxSize, boxSize);
    pop();
  }

  // Updating the Matter.js engine: 
  // advances the physics simulation by one frame 
  // (assuming 60 FPS)
  Matter.Engine.update(engine, 1000/30);
}

function createBox(x, y) {
  let box = Matter.Bodies.rectangle(x, y, boxSize, boxSize);
  Matter.Composite.add(engine.world, [box]);
  boxes.push(box);
}

function mousePressed() {
  createBox(mouseX, mouseY);
}