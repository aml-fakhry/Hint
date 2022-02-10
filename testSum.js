// Requiring the lodash library
const _ = require('lodash');

function genRand(min, max, decimalPlaces) {
  const rand = Math.random() * (max - min) + min;
  const power = Math.pow(10, decimalPlaces);
  const x = Math.floor(rand * power) / power;
  let second = (x + '').split('.')[1];
  let first = (x + '').split('.')[0];

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
