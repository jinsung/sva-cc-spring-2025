let particle;

let particles = [];
let isDragging = false;
let gravity;

function setup() {
  createCanvas(800, 400);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(190);
  
  if (isDragging) {
    line(mouseX, mouseY, particle.pos.x, particle.pos.y);
  }
  for (let particle of particles) {
    particle.update();
    particle.draw();
    particle.applyForce(gravity);
  }
}

function mousePressed() {
  particle = new Particle(mouseX, mouseY, 15);
  particles.push(particle);
  isDragging = true;
}

function mouseReleased() {
  isDragging = false;
  const mouse = createVector(mouseX, mouseY);
  force = p5.Vector.sub(particle.pos, mouse);
  force.mult(0.3);
  particle.active();
  particle.applyForce(force);
}