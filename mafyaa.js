// let x = 'RDRDRDRDDDD';
// console.log([...x]);

(function predictPartyVictory(senate) {
  // write your code here
  let checkString = [...senate];
  let radiant = 0;
  let dire = 0;
  checkString.forEach((x) => (x === 'R' ? radiant++ : dire++));
  for (let i = 0; i < checkString.length; i++) {
    const element = checkString[i];
    if (element === 'R') {
      dire--;
      const d = checkString.indexOf('D');
      checkString.splice(d, 1);
    } else {
      radiant--;
      const r = checkString.indexOf('R');
      checkString.splice(r, 1);
    }
  }
  return radiant > dire ? 'Radiant' : 'Dire';
})('RD');
