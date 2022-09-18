
var sub = [3, 2];
var s1 = [5];
var s2 = [3];

const [isFomUserLocations, isToUserLocations] = [
  sub?.some((a) => s1.includes(a)),
  sub?.some((a) => s2.includes(a)),
];
console.log({ isFomUserLocations }, { isToUserLocations });
let l;
if (!s1.length || isToUserLocations) {
  l = 'lll';
}
console.log(l);

var all = [5, 9, 0, 4, 2];
const [, , ...rest] = all;
console.log({rest});
