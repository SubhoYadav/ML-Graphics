class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;
    this.selected = null;
    this.hoveredPoint = null;

    this.ctx = this.canvas.getContext("2d");

    this.#addEventListeners();
  }

  display() {
    this.graph.draw(this.ctx);

    if (this.selected) {
      this.selected.draw(this.ctx, 18, "black", true);
    }

    if (this.hoveredPoint) {
      this.hoveredPoint.draw(this.ctx, 18, "black", false, true);
    }
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (event) => {
      if (event.button == 2) {
        const mouseLoc = new Point(event.offsetX, event.offsetY);
        this.hoveredPoint = getNearestPoint(mouseLoc, this.graph.points);
        if (this.hoveredPoint) {
          this.graph.removeRandomPoint(this.hoveredPoint);
          this.hoveredPoint = null;
          this.selected = null;
        }
      } else if (event.button == 0) {
        const mouseLoc = new Point(event.offsetX, event.offsetY);

        this.hoveredPoint = getNearestPoint(mouseLoc, this.graph.points);
        if (this.hoveredPoint) {
          this.selected = this.hoveredPoint;
          return;
        }
        this.graph.addPoint(mouseLoc);
      }
    });

    this.canvas.addEventListener("mousemove", (event) => {
      const mouseLoc = new Point(event.offsetX, event.offsetY);

      this.hoveredPoint = getNearestPoint(mouseLoc, this.graph.points);
    });

    this.canvas.addEventListener("contextmenu", (event) =>
      event.preventDefault()
    );
  }
}
