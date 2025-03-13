let engine;
let shapes = [];
let leftPaddle;
let rightPaddle;
let ball;
let score = 0;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  engine = Matter.Engine.create();
  createWalls();
  createPaddles();

  setupCollisionEvents();

  setInterval(() => {
    if (ball && !ball.isDead()) {
      return;
    }
    throwABall(random(50, width-50), 0)
  }, 1000);
}

function setupCollisionEvents() {
  Matter.Events.on(engine, 'collisionStart', (event) => {
    for (let i = 0; i < event.pairs.length; i++) {
        const pair = event.pairs[i];
        const { bodyA, bodyB } = pair;
        if (
            (bodyA === ball.body && (bodyB === leftPaddle.body || bodyB === rightPaddle.body)) ||
            (bodyB === ball.body && (bodyA === leftPaddle.body || bodyA === rightPaddle.body))
        ) {
          onPaddleHit();
        }
      }
    });
}

function onPaddleHit() {
  score += 10;
}

function createPaddles() {
  leftPaddle = new Rect(engine.world, createVector(width * 0.25, height * 0.8), 
  createVector( width * 0.4, 40), {isStatic: true, angle: PI/4});
  rightPaddle = new Rect(engine.world, createVector(width * 0.75, height * 0.8), 
    createVector(width * 0.4, 40), {isStatic: true, angle: -PI/4});
  shapes.push(leftPaddle);
  shapes.push(rightPaddle);
}

function createWalls() {
  const leftSideWall = new Rect(engine.world, createVector(0, height * 0.5), 
    createVector(30, height), {isStatic: true});
  const rightSideWall = new Rect(engine.world, createVector(width, height * 0.5), 
    createVector(30, height), {isStatic: true});
  shapes.push(leftSideWall);
  shapes.push(rightSideWall);
}

function draw() {
  background(190);

  animatePaddles();

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
  textSize(20);
  text('Score: ' + score, 30, 30);
}

function animatePaddles() {
  let targetLeftAngle = PI * 0.25;
  let targetRightAngle = -PI * 0.25;
  if (keyIsPressed) {
    if (keyIsDown(LEFT_ARROW)) {
      targetLeftAngle = -PI * 0.25;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      targetRightAngle = PI * 0.25;
    }
  }
  leftPaddle.animAngle(targetLeftAngle);
  rightPaddle.animAngle(targetRightAngle);
}

function throwABall(x, y) {
  const options = { restitution: 1, inertia: Infinity, friction: 0.01, frictionAir: 0 };
  ball = new Circle(engine.world, createVector(x, y), 
      createVector(50, 0), options);
  shapes.push(ball);
  score = 0;
}
