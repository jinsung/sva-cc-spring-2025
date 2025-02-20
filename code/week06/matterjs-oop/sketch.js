let engine;
let shapes = [];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  engine = Matter.Engine.create();
  const bar1 = new Rect(engine.world, createVector(width * 0.25, height * 0.8), 
  createVector( width * 0.5, 20), {isStatic: true, angle: PI/4});
  const bar2 = new Rect(engine.world, createVector(width * 0.75, height * 0.8), 
    createVector(width * 0.5, 20), {isStatic: true, angle: -PI/4});
  shapes.push(bar1);
  shapes.push(bar2);
}

function draw() {
  background(190);

  for (let i = shapes.length-1; i >= 0; i--) {
    const shape = shapes[i];
    shape.display();
    if (shape.isDead()) {
      shapes.splice(i, 1);
    }
  }

  // Updating the Matter.js engine: 
  // advances the physics simulation by one frame 
  // (assuming 60 FPS)
  Matter.Engine.update(engine, 1000/30);
}

function createShape(x, y) {
  const options = { restitution: 0.5 };
  let shape = null;
  if (random() < 0.5) {
    shape = new Rect(engine.world, createVector(x, y), 
      createVector(random(10, 50), random(10, 50)), options);
  } else {
    shape = new Circle(engine.world, createVector(x, y), 
      createVector(random(10, 50), 0), options);
  }
  shapes.push(shape);
}

function mousePressed() {
  createShape(mouseX, mouseY);
}