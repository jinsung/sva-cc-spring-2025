let engine;
let shapes = [];
let mouseConstraint;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  engine = Matter.Engine.create();
  setupChain();
}

function setupChain() {
  const size = 25;
  const anchor = {x: width/2, y:100};
  let prevCircle = null;
  for (let i = 0; i < 5; i++) {
    const circle = new Circle(
      engine.world, 
      createVector(anchor.x + i * size * 1.1, anchor.y), 
      createVector(size*2)
    );
    shapes.push(circle);

    const constraintOptions = {
      bodyB: circle.body,
      length: size * 2.5,
      stiffness: 0.5
    }

    if (prevCircle) {
      constraintOptions.bodyA = prevCircle.body;
    } else {
      constraintOptions.pointA = anchor;
    }
    const constraint = Matter.Constraint.create(constraintOptions);
    Matter.Composite.add(engine.world, constraint);
    prevCircle = circle;
  }
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