/**
 * fibonacci
 *
 * @param n: an integer
 * @return: an integer f(n)
 */
(function fibonacci(n) {
  const fibonacciArr = [0, 1];
  n === 0 ? 0 : n === 1 ? 1 : true;
  for (let i = 1; i < n; i++) {
    fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i - 1]);
  }
  console.log(fibonacciArr[n - 1]);
})(4);
