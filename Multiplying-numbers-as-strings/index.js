function multiply(a, b) {
  if (a === "" || b === "") {
    return "0";
  }
  const lengthA = a.length;
  const lengthB = b.length;
  const result = new Array(lengthA + lengthB).fill(0);
  for (let i = lengthA - 1; i >= 0; i--) {
    const digitA = a[i] - 0;
    for (let j = lengthB - 1; j >= 0; j--) {
      const digitB = b[j] - 0;
      let pos = i + j + 1;
      let product = a[i] * b[j] + result[pos];
      result[pos] = product % 10;
      result[pos - 1] += Math.floor(product / 10);
    }
  }
  while (result[0] === 0 && result.length != 1) {
    result.shift();
  }
  return result.join("");
}
