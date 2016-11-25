
console.info('Calculator');

var Calculator = (function () {
  'use strict';

  var result = 0;

  function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  function add(value) {
    if (!isNumber(value)) {
      throw new Error('Введенное значение - не число');
    } else {
      this.result += value;
      return this;
    }
  }

  function subtract(value) {
    if (!isNumber(value)) {
      throw new Error('Введенное значение - не число');
    } else {
      this.result -= value;
      return this;
    }
  }

  function divide(value) {
    if (!isNumber(value)) {
      throw new Error('Введенное значение - не число');
    } else if (value == 0) {
      throw new Error('Деление на 0 невозможно');
    } else {
      this.result /= value;
      return this;
    }
  }

  function multiply(value) {
    if (!isNumber(value)) {
      throw new Error('Введенное значение - не число');
    } else {
      this.result *= value;
      return this;
    }
  }

  function getResult() {
    return this.result;
  }

  function reset() {
    this.result = 0;
    return this;
  }
  
  function getInitialState() {
    var _this = this;

    setTimeout(function () {
      _this.result = 5;
      _this.getResult();
    }, 500);
  }

  return {
    result: result,
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
    getResult: getResult,
    reset: reset,
    getInitialState: getInitialState
  };
} ());

console.log(Calculator.getResult()); // 0
Calculator.add(4);
Calculator.subtract(1);
console.log(Calculator.getResult()); // 3
console.log(Calculator.reset()); // 0
console.log(Calculator.add(4).reset().add(1).getResult()); // 1
Calculator.getInitialState();