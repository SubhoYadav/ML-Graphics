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
  draw(ctx, size = 18, color = "black", outline = false, fill = false) {
    const radius = Math.round(size / 2);
    if (outline) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "yellow";

      ctx.arc(this.x, this.y, radius * 0.6, 0, Math.PI * 2);
      ctx.stroke();
      return;
    }

    if (fill) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, radius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      return;
    }

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  equals(point) {
    console.log("Checking ", this);
    return this.x == point.x && this.y == point.y;
  }
}
