class Polygon {
  constructor(lengths) {
    this.lengths = lengths;
  }
  perimeter() {
    return this.lengths.reduce((a, b) => a + b);
  }
}
let P = new Polygon([4, 3, 2]);
console.log(P);
