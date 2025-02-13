class ParticleSystem {

  constructor() {
    this.gravity = createVector(0, 0.1);
    this.particles = [];
  }

  addParticles(x, y, num) {
    for (let i = 0; i < num; i++) {
      const p = new Particle(x, y, 5);
      const randomForce = p5.Vector.random2D();
      randomForce.setMag(random(2, 10));
      p.applyForce(randomForce);
      this.particles.push(p);
    }
  }

  loop() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      if (particle.isDead()) {
        this.particles.splice(i, 1);
        continue;
      }
      particle.update();
      particle.draw();
      particle.applyForce(this.gravity);
    }
  }

}