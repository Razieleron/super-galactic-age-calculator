export default class Human {
  constructor(name, currentAge) {
    this.name = name;
    this.currentAge = currentAge
    this.mercuryAge = 0
    this.venusAge = 0
    this.marsAge = 0
    this.jupiterAge = 0
    this.yearsPassed = 0
    this.yearsUntil = 0
    this.mercuryYearsPassed = 0
  };

  earthYearsPassedSince(previousAge) {
    let yearsPassed = parseInt(this.currentAge - previousAge);
    this.yearsPassed = yearsPassed;
  }
  earthYearsUntil(futureAge) {
    let yearsUntil = parseInt(futureAge - this.currentAge);
    this.yearsUntil = yearsUntil;
  }


  mercury() {
    let mercuryConversion = parseInt(this.currentAge / 0.24);
    this.mercuryAge = mercuryConversion;
  };
  mercuryYearsPassedSince(previousAge) {
    let mercuryYearsPassed = parseInt((this.currentAge - previousAge) / 0.24);
    this.mercuryYearsPassed = mercuryYearsPassed
  }


  venus() {
    let venusConversion = parseInt(this.currentAge / 0.62);
    this.venusAge = venusConversion;
  };

  mars() {
    let marsConversion = parseInt(this.currentAge / 1.88);
    this.marsAge = marsConversion;
  }

  jupiter() {
    let jupiterConversion = parseInt(this.currentAge / 11.86);
    this.jupiterAge = jupiterConversion
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