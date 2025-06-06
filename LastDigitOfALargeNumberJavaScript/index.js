function lastDigit(n, m) {
  if (m === 0n) return 1n;
  const cycle = [];
  let mod = n % 10n;

  while (!cycle.includes(mod)) {
    cycle.push(mod);
    mod = (mod * n) % 10n;
  }

  const cycleLength = BigInt(cycle.length);
  const index =
    m % cycleLength === 0n ? cycleLength - 1n : (m % cycleLength) - 1n;

  return cycle[Number(index)];
}
