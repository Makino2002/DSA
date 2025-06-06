function decimalToBinary(value) {
  if (value === 0) return "0";

  let isNegative = value < 0;
  value = Math.abs(value);

  let binary = "";
  while (value > 0) {
    binary = (value % 2) + binary;
    value = Math.floor(value / 2);
  }

  return isNegative ? "-" + binary : binary;
}

function arr2bin(arr) {
  console.log("arr: ", arr);
  let array = arr.filter(
    (element, index, array) => typeof element === "number"
  );
  let sum = array.reduce((acc, val) => acc + val, 0);
  console.log(array, decimalToBinary(sum));

  console.log(Number.isNaN(sum));
  return Number.isNaN(sum) ? "NaN" : decimalToBinary(sum);
}

console.log(arr2bin([-1, -2, -3, -4, -5]));
