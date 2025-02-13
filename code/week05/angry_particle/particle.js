class Particle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(1, 3));
    this.acc = createVector(0, 0);
    this.r = r;
    this.friction = 0.98;
    this.isActive = false;
  }

  active() {
    this.isActive = true;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  bounce() {
    if (this.pos.x > width) {
      this.pos.x = width;
      this.vel.x *= -1;
    } else if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.x *= -1;
    }

    if (this.pos.y > height) {
      this.pos.y = height;
      this.vel.y *= -1;
    } else if (this.pos.y < 0) {
      this.pos.y = 0;
      this.vel.y *= -1;
    }
  }
  
  update() {
    if (!this.isActive) return;

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.friction);
    this.bounce();
  }

  draw() {
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}