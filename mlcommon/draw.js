const draw = {
  createPath(ctx, path, color = "black") {
    ctx.beginPath();
    ctx.moveTo(...path[0]);
    for(let i=1; i<path.length; i++) {
      ctx.lineTo(...path[i])
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke()
  },

  createPaths(ctx, paths) {
    for(let path of paths) {
      this.createPath(ctx, path)
    }
  }
}

if (module != undefined) {
  module.exports = draw
}