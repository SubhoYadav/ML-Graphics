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
  draw(ctx) {
    for (let point of this.points) {
      point.draw(ctx);
    }

    for (let segment of this.segments) {
      segment.draw(ctx);
    }
  }

  /**
   * addPoint
   * Adds a point at random coordinates of the canvas
   * @param {*} point
   */
  addPoint(point) {
    // validate any existence of points at the given coordinate
    const isPointAvailable = this.points.find((pt) => pt.equals(point));
    if (!isPointAvailable) {
      this.points.push(point);
    } else {
      console.log("Cannot add a point at thesame coordinate twice");
    }
  }

  addSegment(segment) {
    // validate the existence of segment between the given points
    const isSegmentAvailable = this.segments.find((seg) => seg.equals(segment));
    if (!isSegmentAvailable) {
      this.segments.push(segment);
    } else {
      console.log(false);
    }
  }

  removeRandomSegment(index) {
    this.segments.splice(index, 1);
  }

  removeRandomPoint(point) {
    const pointToRemove = point;
    console.log("Point to remove ", pointToRemove);
    // delete the segments associated with the to be deleted point
    // const primitivesObj = this.getSegmentsWithPoint(pointToRemove);
    // for (let segIndex of primitivesObj.segments) {
    //   this.removeRandomSegment(segIndex);
    // }

    const pointToRemoveIndex = this.points.findIndex((e) =>
      e.equals(pointToRemove)
    );
    console.log("Point at index ", this.points[pointToRemoveIndex]);
    this.points.splice(pointToRemoveIndex, 1);
  }

  getSegmentsWithPoint(point) {
    let segmentsToDelete = [];
    let pointsToDelete = [];
    for (let i = 0; i < this.segments.length; i++) {
      if (
        (this.segments[i].pnt1.x == point.x &&
          this.segments[i].pnt1.y == point.y) ||
        (this.segments[i].pnt2.x == point.x &&
          this.segments[i].pnt2.y == point.y)
      ) {
        segmentsToDelete.push(i);

        if (
          this.segments[i].pnt1.x == point.x &&
          this.segments[i].pnt1.y == point.y
        ) {
          pointsToDelete.push(this.segments[i].pnt2);
        } else {
          pointsToDelete.push(this.segments[i].pnt1);
        }
      }
    }
    return {
      points: pointsToDelete,
      segments: segmentsToDelete,
    };
  }
}

// Math.hypot(p1.x - p2.x, p1.y - p2.y)
