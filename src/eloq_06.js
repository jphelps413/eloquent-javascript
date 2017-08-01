console.log(`\n\n\n ---------------------- NEW RUN @${new Date().toUTCString()}---------------------\n\n\n`);
console.log('\nProblem 06.01 - Vectors\n');

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(v) {
    return [this.x + v.x, this.y + v.y];
  }

  minus(v) {
    return [this.x - v.x, this.y - v.y];
  }

  length() {
    return (Math.sqrt((this.x * this.x) + (this.y * this.y)));
  }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length());

console.log('*COMPLETED*');

