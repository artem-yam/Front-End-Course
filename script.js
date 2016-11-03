﻿

//Number

/*1.Write a function which defines if a given value is a number.
Use this function in the next tasks 
to define if a given value is a number;*/

console.info('Number_Task_1');
function isNumber(n) 
{
  return !isNaN(parseFloat(n)) && isFinite(n);
}
console.log(isNumber("JavaScript")); // false
console.log(isNumber (2)); // true

/*2.Write a function which defines if a given number
 is negative or not. Do not forget to check if 
 the given value is a number.*/

 console.info('Number_Task_2');
 function isNegative(n)
 {
     var neg;
     if (isNumber(n)==false) 
        neg = 'Введенное значение - не число'
     else if (n<0) neg = true
     else neg = false;
     return neg;
 }
console.log(isNegative(2)); // false
console.log(isNegative(-2)); // true

/*3.Write a function which defines if a given number
 is positive or not. Do not forget to check if 
 the given value is a number.*/

 console.info('Number_Task_3');
 function isPositive(n)
 {
     var pos;
     if (isNumber(n)==false) 
        pos = 'Введенное значение - не число'
     else if (n>0) pos = true
     else pos = false;
     return pos;
 }
console.log(isPositive(2)); // true
console.log(isPositive(-2)); // false

/*4.Write a function which calculates a factorial for 
a given number (use recursion in your algorithm). 
Do not forget to check if the given value is a number.*/

 console.info('Number_Task_4');
 function factorial(n)
 {
     var fact;
     if (isNumber(n)==false) 
        fact = 'Введенное значение - не число'
     else if (n==0 || n==1) fact=1
     else if (n<0) fact = 'Нельзя найти факториал от отрицтельного числа';
     else fact = n * factorial(n-1); 
     return fact;
 }
console.log('Факториал 3 = ' + factorial(3));

/*5.Write a function which returns if the number is prime or not. 
Do not forget to check if the given value is a number.*/

console.info('Number_Task_5');
 function isPrime(n)
 {
     var prime;
     if (isNumber(n)==false) 
        prime = 'Введенное значение - не число'
     else if (n==1) prime = false
     else 
     {
         prime = true;
         for(var i=2;i<n;i++)
             if (n%i==0)
             {
                prime = false;
                break;
             }
     }
     return prime;
 }
 console.log(isPrime(5));


//String

/*1.Write a function which defines if a given value is a string.
Use this function in the next tasks to define 
if a given value is a string;*/

console.info('String_Task_1');
function isString(str) 
{
    return (typeof (str) == 'string');
}
console.log(isString("JavaScript")); // true
console.log(isString(2)); // false

/*2.Write a function which defines if a given value 
can be casted to a number;*/

console.info('String_Task_2');
function canParseToNumber(str) 
{
    if (!isString(str)) 
        return 'Введенное значение - не строка'
     else return !isNaN(parseFloat(str));
}
console.log(canParseToNumber("2")); // true

/*3.Write a function which returns a given string length. 
Do not forget to check if the given value is a string;*/

console.info('String_Task_3');
function getStringLength(str) 
{
    if (!isString(str)) 
        return 'Введенное значение - не строка'
     else return str.length;
}
console.log(getStringLength("JS"));  // 2

/*4.Write a JavaScript function to convert a string into camel case;*/

console.info('String_Task_4');
function camelize(str) 
{
    if (!isString(str)) 
        return 'Введенное значение - не строка'
     else 
     {
        str = str.split('');
        str.unshift(' ');
        for (var i=1; i<str.length;i++)
        {
             str[i] = str[i].toLowerCase();
            if (str[i-1] == ' ')
            {
                str[i] = str[i].toUpperCase();
                delete str[i-1];
            } 
        }
        return str.join('');
     }
}
console.log(camelize(" java scriPt"));  // "JavaScript"

/*5.Write a JavaScript function to capitalize 
the first letter of a string; */

console.info('String_Task_5');
function capitalize(str) 
{
    if (!isString(str)) 
        return 'Введенное значение - не строка'
     else 
     {
        str = str.split('');
        str[0] = str[0].toUpperCase();
        return str.join('');
     }
}
console.log(capitalize("javaScript")); // "JavaScript"

/*6.Write a JavaScript function which return 
the number of occurrences of a given substring in a string. */

console.info('String_Task_6');
function findOccurrences(substr,str) 
{
    if (!isString(str) || !isString(substr)) 
        return 'Одно из введенных значений - не строка'
     else 
     {
         str = str.toLowerCase();
         substr = substr.toLowerCase();
         if (substr == ' ' || substr == '') return 0; 
         var pos = -1, count = 0;
         while ((pos = str.indexOf(substr, pos +1)) != -1)
         {
             count++;
         }
     return count;
     }
}
console.log(findOccurrences("a", "JavaScript" )); // 2
console.log(findOccurrences ("ja", "JavaScript" )); // 1
console.log(findOccurrences ("", "JavaScript" )); // 0
console.log(findOccurrences ("b", "JavaScript" )); // 0


//Array

/*1.Write a function which defines if a given value is an array.
 Use this function in the next tasks to define if a given
 value is an array; */
 
console.info('Array_Task_1');
function isArray(arr) 
{
    return (!isNaN(arr.length) && typeof (arr) != 'string');
}
console.log(isArray([])); // true
console.log(isArray(2)); // false
console.log(isArray('fbf22 '));

/*2.Write a JavaScript function to remove 'null', '0',
 '""', 'false', 'undefined' and 'NaN' values from an array*/
 
console.info('Array_Task_2');
function removeSpecial(arr) 
{
    if (!isArray(arr)) 
        return 'Введенное значение - не массив'
    else 
    {
        for (var i=0;i<arr.length;i++)
            if  (!arr[i])
            {
              delete arr[i];
            }
        return arr;
    }
}
console.log(removeSpecial(['1','2','',0/0,false,null,0]));

/*3.Write a JavaScript function to find the highest value in an array*/

console.info('Array_Task_3');
function highestValue(arr) 
{
    if (!isArray(arr)) 
        return 'Введенное значение - не массив'
    else 
    {
        var high = arr[0];
        for (var i=1;i<arr.length;i++)
            if (arr[i]>high)
                high = arr[i];
        return high;
    }
}
console.log(highestValue([0,1,2,10,3,4]));

/*4.Write a JavaScript function to find the lowest value in an array*/

console.info('Array_Task_4');
function lowestValue(arr) 
{
    if (!isArray(arr)) 
        return 'Введенное значение - не массив'
    else 
    {
        var low = arr[0];
        for (var i=1;i<arr.length;i++)
            if (arr[i]<low)
                low = arr[i];
        return low;
    }
}
console.log(lowestValue([0,1,2,10,3,4]));

/*5.Write a JavaScript function to split a string 
and convert it into an array of words;  */

console.info('Array_Task_5');
function splitToWords(str) 
{
    if (!isString(str)) 
        return 'Введенное значение - не строка'
    else 
    {
        var pos = -1, words = [], i = 0, j = 0;
        do
        {
            pos = str.indexOf(' ', pos +1);
            if (pos == -1) words[i] = str.substring(j, str.length)
            else words[i] = str.substring(j, pos);
            i++;
            j = pos+1;
            //console.log(pos);
        } while (pos != -1);
        return words;
    }
}
console.log(splitToWords('qq ww ee'));

/*6.Write a JavaScript function to find 
the most frequent item of an array. */

console.info('Array_Task_6');
function mostFrequent(arr) 
{
    if (!isArray(arr)) 
        return 'Введенное значение - не массив'
    else 
    {
        var maxFr = 0, Fr = 0, mostFrItem = 0;
        for (var i=0;i<arr.length;i++)
        {
           for (var j=0;j<arr.length;j++) 
               if (arr[i] == arr[j]) Fr++;
           if (Fr > maxFr) 
           {
               maxFr = Fr;
               mostFrItem = i;
           }
           Fr = 0;

        }
        return arr[mostFrItem];
    }
}
console.log(mostFrequent([1,2,3,2,2]));

/*7.Write a JavaScript function to clone an array   */

console.info('Array_Task_7');
function cloneArray(arr) 
{
    if (!isArray(arr)) 
        return 'Введенное значение - не массив'
    else 
    {
        var cloneArr;
        return cloneArr = arr;
    }
}
console.log(cloneArray([1,2,3]));

/*8.Write a JavaScript program to remove duplicate strings 
from a string array (ignore case sensitivity)   */

console.info('Array_Task_8');
function removeDuplicates(arr) 
{
    if (!isArray(arr)) 
        return 'Введенное значение - не массив'
    else 
    {
        for (var i=0;i<arr.length;i++)
           for (var j=0;j<arr.length;j++)
               if (arr[i] == arr[j]) arr.splice(j,1);
        return arr;
    }
}
console.log(removeDuplicates(['qwe','qwe','qwe','asd','asd']));

/*9.Write a JavaScript function to merge two arrays 
and removes all duplicates elements     */

console.info('Array_Task_9');
function removeDuplicatesFromMerge(arr1,arr2) 
{
    if (!isArray(arr1) || !isArray(arr2)) 
        return 'Введенное значение - не массив'
    else 
    {     
        var mergeArr = arr1;
        for (var i=0;i<arr2.length;i++)
            mergeArr[mergeArr.length] = arr2[i];
        return mergeArr;
    }
}
console.log(removeDuplicatesFromMerge([1,2,3],[4,5,6]));

/*10.Write a JavaScript function to remove 
a specific element from an array        */

console.info('Array_Task_10');
function removeElement(element,arr) 
{
    if (!isArray(arr)) 
        return 'Введенное значение - не массив'
    else 
    {     
        for (var i=0;i<arr.length;i++)
            if (arr[i] == element) arr.splice(i,1);
        return arr;
    }
}
console.log(removeElement(1,[1,2,3]));

/*11.Write a JavaScript function to sort the following 
array of objects by title value using ‘sort’ method     */

console.info('Array_Task_11');
function sortObjArray(objArr, sortKey) 
{       
    var key = [];   
    for (var i=0; i<objArr.length;i++)
    {
        key[i] = objArr[i].sortKey;
    }
    key = key.sort();
    for (var i=0; i<objArr.length;i++)
        for (var j=0; j<objArr.length;j++)
            if (key[i] == objArr[j].sortKey) 
            {
                var temp = objArr[i];
                objArr[i] = objArr[j]; 
                objArr[j] = temp;
            }
}

var library = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

sortObjArray(library, 'title');
 for (var i=0;i<library.length;i++)
        console.log(library[i]);


//Objects

/*1.Write a JavaScript program to get the length of a JavaScript object*/

console.info('Objects_Task_1');
function objectLength(obj) 
{       
    return  Object.keys(obj).length;
    
}

console.log(objectLength(library[0]));

/*2.Write a JavaScript program to list 
the properties of a JavaScript object       */

console.info('Objects_Task_2');
function propertiesList(obj) 
{       
    var list = [];   
    for (var key in obj) 
        list.push(key);
    return list;
}

console.log(propertiesList(library[0]));


//Date

/*1.Write a JavaScript function to get difference 
between two dates in days.          */

console.info('Date_Task_1');

var date1 = new Date(2016, 10, 3);
var date2 = new Date(2016, 9, 3);

function daysDifference(date1, date2)
{
	return Math.abs(date1 - date2)/(1000*3600*24);
}
console.log(daysDifference(date1,date2));

/*2.Write a JavaScript function gets the current date.  */

console.info('Date_Task_2');

function currentDate()
{
    return (new Date);
}

console.log(currentDate());

/*3.Write a JavaScript function which displays 
the current day and time in the following format.   */

console.info('Date_Task_3');

function formatDate(date) 
{
	var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    switch (month)
    {
        case 0:  month = 'Jan';
                 break
        case 1:  month = 'Feb';
                 break
        case 2:  month = 'Mar';
                 break
        case 3:  month = 'Apr';
                 break
        case 4:  month = 'May';
                 break
        case 5:  month = 'Jun';
                 break
        case 6:  month = 'Jul';
                 break
        case 7:  month = 'Aug';
                 break
        case 8:  month = 'Sep';
                 break
        case 9:  month = 'Oct';
                 break
        case 10: month = 'Nov';
                 break
        case 11: month = 'Dec';
                 break
        default: month = 'Ошибка'
    }
    return month + ' ' + day + ' ' + year + ', ' +
        hours + ':' + minutes;
}

console.log(formatDate(new Date())); 


