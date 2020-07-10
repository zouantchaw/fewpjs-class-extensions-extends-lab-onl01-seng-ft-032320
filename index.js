class Polygon {
    constructor(sides) {
      this._sides = sides;
    };
  
    get countSides() {
      return this._sides.length
    };
  
    get perimeter() {
      return this._sides.reduce((perimeter, side) => {
        return perimeter += side;
      }, 0)
    };
  };
  
  class Triangle extends Polygon {
  
    get isValid() {
      if(this._sides.every(side => side > 0) && this.countSides == 3) {
        if(this._sides[0] + this._sides[1] > this._sides[2] &&
           this._sides[1] + this._sides[2] > this._sides[0] &&
          this._sides[0] + this._sides[2] > this._sides[1]) {
            return true;
          } else {
            return false;
          }
      } else {
        return false;
      }
    };
  };
  
  class Square extends Polygon {
    get isValid() {
      if(this.countSides == 4 && [this._sides[0], this._sides[1], this._sides[2], this._sides[3]].every(side => this.perimeter / 4 == side)) {
        return true;
      } else {
        return false;
      }
    };
    get area() {
      return this._sides[0] ** 2;
    };
  };