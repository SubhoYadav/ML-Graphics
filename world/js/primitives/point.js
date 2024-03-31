class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * draw
   * @param {*} ctx: context of the canvas element
   * @param {*} size: size/radius of the point
   * @param {*} color: color of the point 
   */
  draw (ctx, size = 18, color = "black") {
    const radius = Math.round(size / 2);
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}