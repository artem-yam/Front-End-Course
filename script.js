
//Задание 1
document.write("<h4>Задание 1</h4>");
var a = "Hello ", b = "World";
document.write("<p>1 var = "+a+"; 2 var = "+b+"</p>");

//Задание 2

document.write("<h4>Задание 2</h4>");
function S_tr(a,h) {
    document.write("<p>Площадь треугольника (сторона = " + a
    + ", высота = " + h + ") : " + (1/2*a*h)+"</p>")
}
S_tr(2,2);

//Задание 3

document.write("<h4>Задание 3</h4>");
var arr = [1,2,3];
function Reverse_array(array) {
    var i = 0,
        arr1=[], 
        arr2=[], 
        arr3=[];
    document.write("Исходный массив = "+array+"<br>");
    do {
        arr1[i]=array[array.length-1-i];
        i++;
    }   while (i<array.length);
    i=0;
    while (i<array.length) {
        arr2[i]=array[array.length-1-i];
        i++;
    } 
    for(i=0;i<array.length;i++) {
        arr3[i]=array[array.length-1-i];
    }
    document.write("Перевернутые массивы : <br>");
    document.write("Массив 1 = "+arr1+"<br>");
    document.write("Массив 2 = "+arr2+"<br>");
    document.write("Массив 3 = "+arr3+"<br>");
}
Reverse_array(arr);

//Задание 4

document.write("<h4>Задание 4</h4>");
var i=0,
    j=0;
document.write("++i " + "&nbsp; i++" + "<br>");
while ((i<3) && (j<3)) {
    document.write("&nbsp;&nbsp;&nbsp;"+ ++i + "&nbsp;&nbsp; ");
    document.write(j++ + "<br>");
}

//Задание 5

document.write("<h4>Задание 5</h4>");
function number(arg) {
    if (arg>0) document.write("Число " + arg + " - положительное<br>")
    else if (arg ==0) document.write("Число " + arg + " - нулевое<br>")
    else document.write("Число " + arg + " - отрицательное<br>")
}
number(2); 
number(0); 
number(-5);

//Задание 6

document.write("<h4>Задание 6</h4>");
var name = prompt("Как тебя зовут?", "Введите своё имя");
alert('Привет, ' + name); 
document.write("Введено имя : " + name);   


//Задание 7

document.write("<h4>Задание 7</h4>");
function factorial(num) {
    var fact = 1;
    for (var i=1;i<=num;i++) {
        fact *= i;
    }
    document.write("Факториал числа " + num +" = "+ fact + "<br>");
}
factorial(3);
        
     