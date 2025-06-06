function binToDec(bin) {
  let dec = 0;
  let arr = bin.split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    dec += Number(arr[i]) * 2 ** i;
  }

  return dec;
}
