let engine;
let shapes = [];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  engine = Matter.Engine.create();
  setupChain();
  setupMouse();
}

function setupChain() {
  const size = 25;
  const anchor = { x: width / 2, y: 100 };
  let prevCircle = null;
  for (let i = 0; i < 5; i++) {
    const circle = new Circle(
      engine.world,
      createVector(anchor.x + i * size * 1.1, anchor.y),
      createVector(size * 2)
    );
    shapes.push(circle);

    const constraintOptions = {
      bodyB: circle.body,
      length: size * 2.5,
      stiffness: 0.5,
    };

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

function setupMouse() {
  const mouse = Matter.Mouse.create();
  const mcOptions = {
    mouse: mouse,
  };
  const mouseConstraint = Matter.MouseConstraint.create(engine, mcOptions);
  Matter.Composite.add(engine.world, mouseConstraint);
}

function draw() {
  background(190);

  //draw constraints
  stroke(0);
  for (let i = 0; i < engine.world.constraints.length; i++) {
    let constraint = engine.world.constraints[i];
    if (constraint.bodyA && constraint.bodyB) {
      line(
        constraint.bodyA.position.x,
        constraint.bodyA.position.y,
        constraint.bodyB.position.x,
        constraint.bodyB.position.y
      );
    } else if (constraint.pointA && constraint.bodyB) {
      line(
        constraint.pointA.x,
        constraint.pointA.y,
        constraint.bodyB.position.x,
        constraint.bodyB.position.y
      );
    }
  }

  for (let i = shapes.length - 1; i >= 0; i--) {
    const shape = shapes[i];
    shape.display();
    if (shape.isDead()) {
      shapes.splice(i, 1);
    }
  }

  // Updating the Matter.js engine:
  // advances the physics simulation by one frame
  // (assuming 60 FPS)
  Matter.Engine.update(engine, 1000 / 30);
}
