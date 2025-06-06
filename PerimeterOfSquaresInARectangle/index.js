let memo = {};

function fib(n) {
  if (n in memo) return memo[n];
  if (n == 1 || n == 2) return 1;

  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}
// function fib(n) {
//   if (n == 1) return 1;
//   if (n == 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// function perimeter(n) {
//   let sum = fib(n + 3) - 1;
//   return 4 * sum;
// }

// function fib(n) {
//   if (n in memo) return memo[n];
//   if (n == 1 || n == 2) return 1;

//   memo[n] = fib(n - 1) + fib(n - 2);
//   return memo[n];
// }

function perimeter(n) {
  let sum = 0;

  // Tính tổng các giá trị Fibonacci từ F(1) đến F(n+2)
  //   for (let i = 1; i <= n+1; i++) {
  //     sum += fib(i);
  //   }
  sum = fib(n + 3) - 1;

  return 4 * sum; // Chu vi là tổng Fibonacci nhân với 4
}

// Kiểm tra với n = 5
console.log(perimeter(5)); // Kết quả: 80
