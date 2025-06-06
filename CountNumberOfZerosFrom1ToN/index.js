function countZero(params) {
  let count = 0;

  while (params) {
    if (params % 10 == 0) {
      count += 1;
    }
    params = Math.floor(params / 10);
  }
  return count;
}
console.log(countZero(1000));
function countZeros(n) {
  let count = 0;
  for (let i = 10; i <= n; i++) {
    count += countZero(i);
  }
  return count;
}
