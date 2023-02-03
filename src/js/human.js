export default class Human {
  constructor(name, currentAge) {
    this.name = name;
    this.currentAge = currentAge
    this.mercuryAge = 0
    this.venusAge = 0
    this.marsAge = 0
    this.jupiterAge = 0
    this.yearsSince = 0
    this.yearsUntil = 0
    this.mercuryYearsSince = 0
    this.mercuryYearsUntil = 0
    this.venusYearsSince = 0
    this.venusYearsUntil = 0
    this.marsYearsSince = 0
    this.marsYearsUntil = 0
    this.jupiterYearsSince = 0
    this.jupiterYearsUntil = 0
  };

  earthYearsPassedSince(previousAge) {
    let yearsPassed = parseInt(this.currentAge - previousAge);
    this.yearsSince = yearsPassed;
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
    this.mercuryYearsSince = mercuryYearsPassed;
  }
  mercuryYearsPassedUntil(futureAge) {
    let mercuryYearsUntil = parseInt((futureAge - this.currentAge) / 0.24);
    this.mercuryYearsUntil = mercuryYearsUntil
  }


  venus() {
    let venusConversion = parseInt(this.currentAge / 0.62);
    this.venusAge = venusConversion;
  };
  venusYearsPassedSince(previousAge) {
    let venusYearsPassed = parseInt((this.currentAge - previousAge) / 0.62);
    this.venusYearsSince = venusYearsPassed;
  }

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