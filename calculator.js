export class Calculator {
  constructor(firstOperand = 0, secondOperand = 0) {
    this.firstOperand = this.isFloat(firstOperand) ? parseFloat(firstOperand) : parseInt(firstOperand);
    this.secondOperand = this.isFloat(secondOperand) ? parseFloat(secondOperand) : parseInt(secondOperand);
  }

  add() {
    return this.firstOperand + this.secondOperand;
  }

  subtract() {
    return this.firstOperand - this.secondOperand;
  }

  multiply() {
    return this.firstOperand * this.secondOperand;
  }

  divide() {
    return this.divisionIsValid() ? this.firstOperand / this.secondOperand : 'ERROR';
  }

  getRemainder(){
    return this.divisionIsValid() ? this.firstOperand % this.secondOperand : 'ERROR';
  }

  square(){
    return this.firstOperand ** 2;
  }

  squareRoot(){
    return Math.sqrt(this.firstOperand);
  }

  isFloat(operand = ''){
    if(operand.includes('.')) return true;
    return false;
  }

  divisionIsValid(){
    return this.secondOperand !== 0 ? true : false; 
  }

}
