/*By Daviz7
module Object Athena V3
*/
export class object {
  constructor(x,y,width,height,speed){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.destinyY = null;
    this.destinyX = null;
    this.speed = speed === null ? 0 : speed;
    this.gravity_v = null;
  }
  edit(x1,y1,width1,height1,speed1) {
    this.x = x1;
    this.y = y1;
    this.width = width1;
    this.height = height1;
    this.speed = speed1 === null ? 0 : speed1;
  }
  setPosition(x,y) {
    this.x = x;
    this.y = y;
  }
  goTo(destinoX,destinoY) {
    this.destinyX = destinoX;
    this.destinyY = destinoY;
  }
  gravity(gravity_value) {
   this.speedY += gravity_value;
   this.gravity_v = gravity_value;
  }
  moveUp() {
  this.y -= this.speed;
  }
  moveDown() {
  this.y += this.speed;
  }
  moveLeft() {
  this.x -= this.speed;
  }
  moveRight() {
  this.x += this.speed;
  }
  update() {
  if (this.destinyX !== null && this.destinyY !== null) {
    let distanciaX = this.destinyX - this.x;
    let distanciaY = this.destinyY - this.y;
    let distanciaTotal = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

    if (distanciaTotal > 2) { // Define uma margem de parada
      let direcaoX = distanciaX / distanciaTotal;
      let direcaoY = distanciaY / distanciaTotal;
      this.speedX = direcaoX * this.speed; 
      this.speedY = direcaoY * this.speed; 
    } else {
      this.destinyX = null;
      this.destinyY = null;
    }
  }
  this.x += this.speedX;
  this.y += this.speedY;
  }
  addCollider(obj) {
    const thisRight = this.x + this.width;
    const thisBottom = this.y + this.height;
    const objRight = obj.x + obj.width;
    const objBottom = obj.y + obj.height;

    if (
      this.x < objRight && thisRight > obj.x &&
      this.y < objBottom && thisBottom > obj.y
    ) {
      // Há uma colisão
      const overlapX = Math.min(thisRight, objRight) - Math.max(this.x, obj.x);
      const overlapY = Math.min(thisBottom, objBottom) - Math.max(this.y, obj.y);

      if (overlapX < overlapY) {
        // Colisão é mais estreita horizontalmente, ajuste X
        if (this.x < obj.x) {
          this.x -= overlapX;
        } else {
          this.x += overlapX;
        }
      } else {
        // Colisão é mais estreita verticalmente, ajuste Y
        if (this.y < obj.y) {
          this.y -= overlapY;
        } else {
          this.y += overlapY;
        }
      }
    }
  }
  colliderObj(obj) {
    return (this.x < obj.x + obj.width && this.x + this.width > obj.x && this.y < obj.y + obj.height && this.height + this.y > obj.y);
  }
}