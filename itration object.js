function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    const element = objects[i];
    if (element.x === element.y) {
      count++;
    }
  }
  return count;
}
getCount([
  { x: 1, y: 1 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
]);
