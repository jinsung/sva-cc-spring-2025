class ParticleSystem {

  constructor() {
    this.gravity = createVector(0, 0.1);
    this.particles = [];
  }

  addParticles(x, y, num) {
    for (let i = 0; i < num; i++) {
      const p = new Particle(x, y, 5);
      const randomForce = p5.Vector.random2D();
      randomForce.setMag(random(0, 0.3));
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
      for (let j = (i-1); j >= 0; j--) {
        const other = this.particles[j];
        let distance = p5.Vector.dist(particle.pos, other.pos);
        if ((particle.r + other.r + 10) > distance) {
          if (distance == 0) distance = 0.0001;
          let push = p5.Vector.sub(particle.pos, other.pos);
          push.normalize();
          push.div(distance*distance);
          //push.setMag(1/(distance * 2));
          push.limit(0.3);
          particle.applyForce(push);
          other.applyForce(push.mult(-1));
        }
        //particle.applyForce(f);
      }

      particle.update();
      particle.draw();
      //particle.applyForce(this.gravity);
    }
  }

}