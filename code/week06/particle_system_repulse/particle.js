class Particle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);    
    this.acc = createVector(0, 0);
    this.r = r;
    this.friction = 0.95;
    this.maxAge = random(100, 200);
    this.age = 0;
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
    //this.age++;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.friction);
    //this.bounce();
  }

  isDead() {
    return this.age >= this.maxAge;
  }

  draw() {
    noStroke();
    let alpha = map(this.age, 0, this.maxAge, 255, 0);
    
    fill(this.acc.heading() * 90, 
        20, 70 + this.vel.magSq() * 100, alpha);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}