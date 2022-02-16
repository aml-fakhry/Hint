import lodash from 'lodash';
const { sum } = lodash;
function genRand(min, max, decimalPlaces) {
  const rand = Math.random() * (max - min) + min;
  const power = Math.pow(10, decimalPlaces);
  const floorNumber = Math.floor(rand * power) / power;
  let first = (floorNumber + '').split('.')[0];
  let second = (floorNumber + '').split('.')[1] ?? 0.01;
  // console.log({ second }, { floorNumber });
  return second.length === 1
    ? Number(Number(first) + `.${second + 1}`)
    : floorNumber;
}
const arrOfRandomNum = [];
for (let i = 0; i < 20; i++) {
  const randomNum = genRand(0, 10, 2);
  arrOfRandomNum.push(randomNum);
}
console.log({ arrOfRandomNum });

/* sum by lodash method */
export const sumLodashData = sum(arrOfRandomNum);
console.log({ sumLodashData });

/* normal sum */
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
export function round(number, decimalDigits = 2) {
  const power = Math.pow(10, decimalDigits);
  const truncateNumber = Math.trunc(number * power) / power;
  console.log({ truncateNumber });
  return Math.round(truncateNumber * power + Number.EPSILON * power) / power;
}
const finalResult = round(sumLodashData);
console.log({ finalResult });

const randomNumber = round(101.75999999999998);
const randomNumber2 = round(66.759999999999999);
console.log({ randomNumber }, { randomNumber2 });
