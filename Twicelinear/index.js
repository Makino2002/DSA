function dblLinear(n) {
  let u = [1];
  let xi = 0,
    yi = 0;

  while (u.length <= n) {
    const nextY = 2 * u[xi] + 1;
    const nextZ = 3 * u[yi] + 1;

    if (nextY < nextZ) {
      u.push(nextY);
      xi++;
    } else if (nextY > nextZ) {
      u.push(nextZ);
      yi++;
    } else {
      u.push(nextY);
      xi++;
      yi++;
    }
  }

  return u[n];
}
