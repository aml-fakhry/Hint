function bitwise(n, k) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let x = i & j;
      console.log(x);
      if (x < k) {
        max = Math.max(max, x);
      }
    }
  }
  return max;
}
console.log(bitwise(9, 2));
