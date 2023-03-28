export class Calculator {

  constructor(leftOperand = 0, rightOperand = 0) {
    this.leftOperand = this.isFloat(leftOperand) ? parseFloat(leftOperand) : parseInt(leftOperand);
    this.rightOperand = this.isFloat(rightOperand) ? parseFloat(rightOperand) : parseInt(rightOperand);
  }

  add() {
    return this.leftOperand + this.rightOperand;
  }

  subtract() {
    return this.leftOperand - this.rightOperand;
  }

  multiply() {
    return this.leftOperand * this.rightOperand;
  }

  divide() {
    return this.leftOperand / this.rightOperand;
  }

  isFloat(operand){
    if(operand.includes('.')) return true;
    return false;
  }
}
