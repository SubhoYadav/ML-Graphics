class SketchPad {
  constructor(contId, size = 400) {
    this.paths = [];
    this.isDrawing = false;

    this.canvas = document.createElement("canvas");
    this.canvas.width = size
    this.canvas.height = size
    this.canvas.style = `
      background-color: white;
      visibility: hidden
    `;
    this.#addEventListeners();

    const container = document.getElementById(contId);
    container.appendChild(this.canvas)
  }

  displayCanvas() {
    console.log("displaying canvas ")
    this.canvas.style = `
    background-color: white;
    visibility: visible `
  }

  reset() {
    this.paths = []
    this.#redraw()
  }
  undoLastAction() {
    console.log("PATHS ", this.paths)
    if (this.paths.length > 0) {
      this.paths.pop();
      this.#redraw()
    }
  }

  #addEventListeners () {
    this.canvas.onmousedown = (event) => {
      // storing the starting position of the drawing
      const rect = this.canvas.getBoundingClientRect()
      const position = [
        Math.round(event.clientX - rect.left), // rect.left => the position from which the left boundary of the canvas element begins
        Math.round(event.clientY - rect.top)
      ]
      this.paths.push([position])
      this.isDrawing = true
    }

    this.canvas.onmousemove = (event) => {
      if (this.isDrawing) {
        const rect = this.canvas.getBoundingClientRect()
        const position = [
          Math.round(event.clientX - rect.left), // rect.left => the position from which the left boundary of the canvas element begins
          Math.round(event.clientY - rect.top)
        ]
        this.paths[this.paths.length - 1].push(position)
        this.#redraw(); // # specifies that the method is private within the class
      }
    }

    document.onmouseup = () => {
      this.isDrawing = false
    }
  }

  #redraw () {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    draw.createPaths(ctx, this.paths)
  }
}