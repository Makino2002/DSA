const intervals = [
  [3, 5],
  [1, 4],
  [7, 10],
];
// function sumIntervals(intervals) {
//   let dp = new Array();
//   let count = 0;
//   for (let i = 0; i < intervals.length; i++) {
//     let start = intervals[i][0] + 1;
//     let end = intervals[i][1];
//     while (start <= end) {
//       if (dp[start] != start) {
//         dp[start] = start;
//         count++;
//       }
//       start++;
//     }
//   }
//   console.log(count);
//   return count;
// }
// sumIntervals(intervals);
function sumIntervals(intervals) {
  if (!intervals.length) return 0;

  intervals.sort((a, b) => a[0] - b[0]);
  let total = 0;
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    if (currStart <= end) {
      end = Math.max(end, currEnd);
    } else {
      total += end - start;
      [start, end] = [currStart, currEnd];
    }
  }

  total += end - start;
  return total;
}
