const X = [9, 6, 21];
const Y = [60, 12, 96, 48, 60, 24, 72, 36, 72, 72, 48];
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
function solution(numbers) {
  let currentGCD = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    currentGCD = gcd(currentGCD, numbers[i]);
  }
  return currentGCD * numbers.length;
}

console.log(solution(Y));
