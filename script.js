
//Задание 1
document.write("<h4>Задание 1</h4>");
var a = "Hello ", b = "World";
document.write("<p>1 var = " + a + "; 2 var = " + b + "</p>");

//Задание 2

document.write("<h4>Задание 2</h4>");
function calculateTriangleSquare(a, h) {
    return 1 / 2 * a * h;
}

document.write("<p>Площадь треугольника (сторона = " + 2
    + ", высота = " + 2 + ") : " + calculateTriangleSquare(2, 2) + "</p>");
//Задание 3

document.write("<h4>Задание 3</h4>");
var arr = [1, 2, 3];
function reverseArrayDoWhile(array) {
    var i = 0,
        arr1 = [];

    do {
        arr1[i] = array[array.length - 1 - i];
        i++;
    } while (i < array.length);

    return arr1;
}

function reverseArrayWhile(array) {
    var i = 0,
        arr1 = [];

    while (i < array.length) {
        arr1[i] = array[array.length - 1 - i];
        i++;
    }

    return arr1;
}

function reverseArrayFor(array) {
    var i = 0,
        arr1 = [];

    for (i = 0; i < array.length; i++) {
        arr1[i] = array[array.length - 1 - i];
    }

    return arr1;
}

document.write("Исходный массив = " + arr + "<br>");
document.write("Перевернутый массив 1 = " + reverseArrayDoWhile(arr) + "<br>");
document.write("Перевернутый массив 2 = " + reverseArrayWhile(arr) + "<br>");
document.write("Перевернутый массив 3 = " + reverseArrayFor(arr) + "<br>");

//Задание 4

document.write("<h4>Задание 4</h4>");

var i = 0,
    j = 0;

document.write("++i " + "&nbsp; i++" + "<br>");

while ((i < 3) && (j < 3)) {
    document.write("&nbsp;&nbsp;&nbsp;" + ++i + "&nbsp;&nbsp; ");
    document.write(j++ + "<br>");
}

//Задание 5

document.write("<h4>Задание 5</h4>");
function number(arg) {
    var str;

    if (arg > 0) {
        return str = "положительное";
    } else if (arg == 0) {
        return str = "нулевое";
    } else {
        return str = "отрицательное";
    }
}

document.write("Число 2 - " + number(2) + "<br>");
document.write("Число 0 - " + number(0) + "<br>");
document.write("Число -5 - " + number(-5) + "<br>");

//Задание 6

document.write("<h4>Задание 6</h4>");
var name = prompt("Как тебя зовут?", "Введите своё имя");
alert('Привет, ' + name);
document.write("Введено имя : " + name);


//Задание 7

document.write("<h4>Задание 7</h4>");
function factorial(num) {
    var fact = 1;

    for (var i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

document.write("Факториал числа 3 = " + factorial(3) + "<br>");