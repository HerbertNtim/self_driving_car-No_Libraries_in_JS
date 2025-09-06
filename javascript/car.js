class Car {
  constructor(x, y, width, height) {
    this.y = y;
    this.x = x;
    this.width = width;
    this.height = height;

    // Movement Manipulation
    this.speed = 0;
    this.acceleration = 0.2;
    this.friction = 0.05;
    this.maxSpeed = 3;

    this.controls = new Controls();
  }

  update() {
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }

    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    if (this.speed < -this.maxSpeed / 2) {
      this.speed = -this.maxSpeed / 2;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }

    if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if (this.controls.left) {
      this.angle += 0.03;
    }

    if (this.controls.right) {
      this.angle -= 0.03;
    }

    this.y -= this.speed;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );

    ctx.fill();
  }
}
