
console.info('Calculator');
var Calculator = (function () {
    'use strict';

    var result = 0;
    function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    function add(value) {
        if (!isNumber(value)) {
            console.log('Введенное значение - не число');
        } 
        else {
            result += value;
            return add;
        }
    }

    function subtract(value) {
        if (!isNumber(value)) {
            console.log('Введенное значение - не число');
        }
        else {
            result -= value;
            return subtract;
        }
    }

    function divide(value) {
        if (!isNumber(value)) {
            console.log('Введенное значение - не число');
        }
        else if (value == 0) {
            console.log('Деление на 0 невозможно');
        }
        else {
            result /= value;
            return divide;
        }
    }

    function multiply(value) {
        if (!isNumber(value)) {
            console.log('Введенное значение - не число');
        }
        else {
            result *= value;
            return multiply;
        }
    }

    function getResult() {
        return result;
    }

    function reset() {
        return result = 0;
    }

    return {
        isNumber: isNumber,
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
        getResult: getResult,
        reset: reset
  };

} ());

console.log(Calculator.getResult()); //0
Calculator.add(4);
Calculator.subtract(1);
console.log(Calculator.getResult()) // 3
Calculator.multiply(2);
console.log(Calculator.getResult()) // 6
Calculator.divide(3);
console.log(Calculator.getResult()) // 2
Calculator.divide(0);
Calculator.reset();                 
console.log(Calculator.getResult()) // 0
Calculator.add(4)(1) 
console.log(Calculator.getResult()) // 5
