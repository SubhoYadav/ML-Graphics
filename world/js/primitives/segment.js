class Segment {
  constructor(pnt1, pnt2) {
    this.pnt1 = pnt1;
    this.pnt2 = pnt2;
  }

  draw (ctx, lineWidth = 2, lineColor = "black") {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(this.pnt1.x, this.pnt1.y);
    ctx.lineTo(this.pnt2.x, this.pnt2.y);
    ctx.stroke()
  }

  equals(segment) {
    return this.pnt1.equals(segment.pnt1) && this.pnt2.equals(segment.pnt2) ||
            this.pnt2.equals(segment.pnt1) && this.pnt2.equals(segment.pnt1)
  }
}