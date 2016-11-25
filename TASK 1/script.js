
//Задание 1
console.info('Задание 1');
function largestNum(a,b) {
   return a >= b ? a : b;
}

console.log('Среди чисел 2 и 4 наибольшее = ' + largestNum(2,4)); 


//Задание 2
console.info('Задание 2');
for(var i=0;i<=9;i++) {
    if (isOdd(i)) {
        console.log('Число ' + i + ' - четное');
    } else {
        console.log('Число ' + i + ' - нечетное');
    }
}

function isOdd(num) {
    return num % 2 === 0;
}

//Задание 3
console.info('Задание 3');
function isBlank(str) {
    var i,
        j;

    for (i=0, j=0;i<str.length;i++) {
        if (str[i]==' ') {
            j++;
        }
    }
    if (j==str.length) {
        blank = true;
    } else if ( str==' ' || str == '') {
        blank = true;
    } else {
        blank = false;
    }

    return blank;
}
console.log(isBlank(''));
console.log(isBlank('    '));
console.log(isBlank('  abc  '));