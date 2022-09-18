import Big from 'big.js';
import BigNumber from 'bignumber.js';
import decimal from 'decimal.js';
const r = decimal.sum(0.1, 0.1).toNumber();
const f = 3;
const s = 3;
const rer = decimal.mul(s, f);
console.log('ttt', decimal.mul(s, f));

console.log(f > s);
const rr = [4.9, 5.0008, 6];
const ss = 3;
const dd = 56.9;
// const u = decimal.mul(...[2.8, 2]);
// console.log('dddd', f.sub(s));

// console.log(r);
/* normal sum */
let sum = 0;
const amount = 2.55;
for (let i = 0; i < 9897; i++) {
  sum += amount;
}
console.log({ sum });

/* use big.js */
let val2 = Big(0.0);
const amount2 = Big(2.55);
const result2 = val2.plus(amount2).times(9897);
const sumWithBig_js = result2.toFixed(2);
console.log({ sumWithBig_js });

/* use bigNumber.js */
let val3 = new BigNumber(0.0);
const amount3 = new BigNumber(2.55);
const result3 = val3.plus(amount3).times(9897);
const sumWithBigNumber_js = result3.toFixed(2);
console.log({ sumWithBigNumber_js });
