var arr = ['(', 5, 5, 2, 2, 2, '(', 2, 9, 4];

const map = arr.reduce(
  (acc, e) => acc.set({ e: e, x: arr.indexOf(e) }, 0),
  new Map()
);

console.log(arr.map((x) => arr.indexOf(x)));

// console.info([...map.keys()]);
// console.info([...map.values()]);
console.info([...map.entries()]);

// Use map.keys() to get unique elements

// Use map.values() to get the occurrences

// Use map.entries() to get the pairs [element, frequency]

// [ 5, 2, 9, 4 ]
// [ 3, 5, 1, 1 ]
// [ [ 5, 3 ], [ 2, 5 ], [ 9, 1 ], [ 4, 1 ] ]
