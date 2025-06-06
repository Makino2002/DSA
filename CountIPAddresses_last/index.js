function ipsBetween(start, end) {
  const arrayIpStart = start.split(".").map(Number);
  const arrayIpEnd = end.split(".").map(Number);
  let result = 0;
  let exponent = 3;

  for (let i = 0; i < 4; i++) {
    result += (arrayIpEnd[i] - arrayIpStart[i]) * 256 ** exponent;
    exponent--;
  }
  return result;
}
