function removeRandomSegment() {
  if (graph.segments.length > 0) {
    let index = Math.floor(Math.random() * graph.segments.length);
    graph.removeRandomSegment(index);

    // Area of the canvas we want to clear out
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
  }
}

const removeRandomPoint = () => {
  if (graph.points.length > 0) {
    let index = Math.floor(Math.random() * graph.points.length);
    graph.removeRandomPoint(index);

    // Area of the canvas we want to clear out
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    graph.draw(ctx);
  }
};

const addRandomSegment = () => {
  // get any two random points
  const index1 = Math.floor(Math.random() * graph.points.length);
  const index2 = Math.floor(Math.random() * graph.points.length);

  // Math.random() generates a random no. between 0 inclusive and 1 exclusive
  graph.addSegment(new Segment(graph.points[index1], graph.points[index2]));

  // Area of the canvas we want to clear out
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
};

let addRandomPoint = () => {
  graph.addPoint(
    new Point(Math.random() * myCanvas.width, Math.random() * myCanvas.height)
  );

  // Area of the canvas we want to clear out
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  graph.draw(ctx);
};
