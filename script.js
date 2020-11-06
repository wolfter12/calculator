class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {
    this.currentOperandTextElement = '';
    this.previousOperandTextElement = '';
  }

  delete() {

  }

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateOutput() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const previousOperandTextElement = document.querySelector('[data-previous-operand');
const currentOperandTextElement = document.querySelector('[data-current-operand');
const numberButtons = document.querySelectorAll('[data-number');
const operationButtons = document.querySelectorAll('[data-operation');
const decimalButton = document.querySelector('[data-decimal]');
const equalsButton = document.querySelector('[data-equals');
const deleteButton = document.querySelector('[data-delete');
const allClearButton = document.querySelector('[data-all-clear');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateOutput();
  })
})