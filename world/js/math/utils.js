function getNearestPoint(initialPoint, graphPoints, threshold = 10) {
  let minDist = Number.MAX_SAFE_INTEGER;
  let nearestPoint = null;

  for (let point of graphPoints) {
    let dist = distance(initialPoint, point);
    if (minDist > dist) {
      minDist = dist;
      nearestPoint = point;
    }
  }
  if (minDist <= threshold) {
    return nearestPoint;
  }
}

function distance(p, q) {
  return Math.hypot(p.x - q.x, p.y - q.y);
}
