export default class Human {
  constructor(name, currentAge) {
    this.name = name;
    this.currentAge = currentAge
    this.mercuryAge = 0
  }


  mercury() {
    let mercuryConversion = parseInt(this.currentAge / 0.24);
    this.mercuryAge = mercuryConversion
  }
}

//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }    
// }