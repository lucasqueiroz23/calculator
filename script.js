import { Calculator } from "./calculator.js";

function getOperands() {
  const firstOperand = prompt('Insert the first operand');
  const secondOperand = prompt('Insert the second operand');
  if(isNaN(firstOperand) || isNaN(secondOperand)){
    alert("You didn't enter a valid number");
    return;
  }
  const calc = new Calculator(firstOperand, secondOperand);
  const operation = prompt('Insert the operation');
  switch(operation){
    case '+':
      console.log(calc.add());
      break;
    case '-':
      console.log(calc.subtract());
      break;
    case '*':
      console.log(calc.multiply());
      break;
    case '/':
      console.log(calc.divide());
      break;
    default:
      console.log('Insert a valid operation!');
      break;
  }
}

document.querySelector('button').addEventListener('click', getOperands);