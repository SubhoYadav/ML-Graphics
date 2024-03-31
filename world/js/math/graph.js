class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  /**
   * draw
   * draws the graph for given points and segments
   * @param {*} ctx 
   */
  draw (ctx) {
    for(let point of this.points) {
      point.draw(ctx)
    }

    for(let segment of this.segments) {
      segment.draw(ctx)
    }
  }

  /**
   * addPoint
   * Adds a point at random coordinates of the canvas
   * @param {*} point
   */
  addPoint(point) {
    this.points.push(point)
  }
}