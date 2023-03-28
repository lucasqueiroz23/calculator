import { Calculator } from "./calculator.js";

function getOperands() {
  const firstOperand = prompt('Insert the first operand');
  const secondOperand = prompt('Insert the second operand');
  if(!validateInput(firstOperand, secondOperand)) return;

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
    case 'mod':
      console.log(calc.getRemainder());
      break;
    case 'square':
      console.log(calc.square(calc.firstOperand));
      break;
    case 'sqrt':
      console.log(calc.squareRoot(calc.firstOperand));
      break;
    default:
      console.log('Insert a valid operation!');
      break;
  }
}

function validateInput(firstOperand, secondOperand) {
  if(isNaN(firstOperand) || isNaN(secondOperand)){
    alert("You didn't enter a valid number");
    return false;
  }
  return true;
}

document.querySelector('button').addEventListener('click', getOperands);