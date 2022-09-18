/**
 * XII
 */

(function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1) {
      const chars = `${s[i]}${s[i + 1]}`;
      if (map[chars]) {
        sum += map[chars];
        i++;
      } else {
        sum += map[`${s[i]}`];
      }
    } else {
      sum += map[`${s[i]}`];
    }
  }
  return sum;
})('CMX');
