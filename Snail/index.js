snail = function (array) {
  // enjoy
  const result = [];
  let top = 0;
  let bottom = array.length;

  let left = 0;
  let right = array[0].length;

  while (left < right || top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(array[left][i]);
    }
    top++;
    for (let i = top; i < bottom; i++) {
      result.push(array[i][right - 1]);
    }
    right--;
    for (let i = right - 1; i >= left; i--) {
      result.push(array[bottom - 1][i]);
    }
    bottom--;

    for (let i = bottom - 1; i >= top; i--) {
      result.push(array[i][left]);
    }
    left++;
    console.log(bottom, top, left, right);
  }

  return result;
};
