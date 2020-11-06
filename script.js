class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {

  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {

  }

  updateOutput() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    // console.log(`this.previousOperand = ${this.previousOperand}`);
    // console.log(`this.currentOperand = ${this.currentOperand}`);
    this.previousOperandTextElement.innerText = this.previousOperand;
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
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateOutput();
  });
});

decimalButton.addEventListener('click', (event) => {
  calculator.appendNumber(event.target.innerText);
  calculator.updateOutput();
})
