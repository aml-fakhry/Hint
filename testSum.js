const _ = require('lodash');
function genRand(min, max, decimalPlaces) {
  const rand = Math.random() * (max - min) + min;
  const power = Math.pow(10, decimalPlaces);
  const x = Math.floor(rand * power) / power;
  let second = (x + '').split('.')[1];
  let first = (x + '').split('.')[0];
  console.log({ second }, { x });
  if (second.length === 1) {
    const x = Number(Number(first) + `.${second + 1}`);
    return x;
  } else {
    return x;
  }
}
const arrOfRandomNum = [];
for (let i = 0; i < 20; i++) {
  const randomNum = genRand(0, 10, 2);
  arrOfRandomNum.push(randomNum);
}
console.log({ arrOfRandomNum });
const sumLodashData = _.sum(arrOfRandomNum);
console.log({ sumLodashData });
let sumData = 0;
for (let index = 0; index < arrOfRandomNum.length; index++) {
  const element = arrOfRandomNum[index];
  sumData += element;
}
console.log({ sumData });

/**
 * @Number_EPSILON (Number.EPSILON)This uses the known smallest difference between 1 and the smallest floating point number greater
 than one to fix the EPSILON rounding error ending up just one EPSILON below the rounding up threshold.
 Maximum precision is 15 for 64bit floating point and 6 for 32bit floating point. Your javascript is likely 64bit.
 */

/**
 * @param value The number or string.
 * @param decimalDigits The number of digits to appear after the decimal point.
 * @returns A number representing the given number using fixed-point notation without round.
 */
function round(number, decimalDigits) {
  const power = Math.pow(10, decimalDigits);
  const tranceNumber = Math.trunc(number * power) / power;
  console.log({ tranceNumber });
  return Math.round(tranceNumber * power + Number.EPSILON * power) / power;
}
const finalResult = round(sumLodashData, 2);
console.log({ finalResult });
