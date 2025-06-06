function howMuchCoffee(events) {
  // Code go here
  let count = 0;
  for (let i = 0; i < events.length; i++) {
    if (events[i] === "cw" || events[i] === "dog" || events[i] === "cat") {
      count++;
      continue;
    }

    if (
      events[i] === "MOVIE" ||
      events[i] === "DOG" ||
      events[i] === "CAT" ||
      events[i] === "CW"
    ) {
      count += 2;
      continue;
    }
    if (events[i].toLowerCase() === "movie") {
      count++;
      continue;
    }
  }
  if (count <= 3) {
    return count;
  }
  return "You need extra sleep";
}
console.log(howMuchCoffee(["cw", "CAT"]));
