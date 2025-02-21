let particleSystem;
let img;

function preload() {
    img = loadImage("assets/cc.png");
}

function setup() {
    createCanvas(600, 766);
    particleSystem = new ParticleSystem(img);
}

function draw() {
    background(0);
    particleSystem.loop();
    if (mouseIsPressed) {
        particleSystem.addParticles(mouseX, mouseY, 2);
    }
}

function mousePressed() {
    
}