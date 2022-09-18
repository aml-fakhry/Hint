(function sum(numbers, target) {
  let indices = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let y = i + 1; y < numbers.length; y++) {
      if (numbers[i] + numbers[y] === target) {
        indices.push(i, y);
      } else {
        continue;
      }
    }
  }
  console.log(indices);
})([2, 4, 3, 6], 5);
