let particleSystem;
function setup() {
  createCanvas(800, 400);
  particleSystem = new ParticleSystem();

  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0, 0, 45);
  particleSystem.loop();
  if (mouseIsPressed) {
    particleSystem.addParticles(mouseX, mouseY, 2);
  }
}

