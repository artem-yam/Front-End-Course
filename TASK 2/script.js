
//Задание 1
console.info('Задание 1');
function isPalindrome(str) {
    var str1 = str.toLowerCase();

    for (var i = 0, j = 1; i <= str1.length; i++ , j++) {
        if (str1[i] == ' ') {
            i++;
        }
        if (str1[str1.length - j] == ' ') {
            j++;
        }
        if (str1[i] != str1[str1.length - j]) {
            return false;
        }
    }

    return true;
}
console.log('Строка \"Я иду с мечем судия\" - палиндром? ' + isPalindrome('Я иду с мечем судия'));


//Задание 2
console.info('Задание 2');
function stringCombinations(str) {
    var str1 = [];

    for (var i = 0; i <= str.length; i++) {
        for (j = i; j <= str.length; j++) {
            if (j > i) {
                str1.push(str.substring(i, j));
            }
        }
    }

    return str1;
}
console.log('Все комбинации букв строки \"dog\" : ' + stringCombinations('dog'));


//Задание 3
console.info('Задание 3');
function bubbleSort(str) {
    var m = str.split('');

    for (var i = 0; i < str.length; i++) {
        var swapped = false,
            j = 0;
            
        while (j < m.length - i) {
            if (m[j] > m[j + 1]) {
                var b = m[j];
                m[j] = m[j + 1];
                m[j + 1] = b;
                swapped = true;
            }
            j++;
        }
        if (!swapped) {
            break;
        }
    }
    var str1 = '';
    for (var i = 0; i < m.length; i++) {
        str1 += m[i];
    }

    return str1;
}
console.log(' Сортировка строки \"asdfngngncxbcv\" методом пузырька : ' + bubbleSort('asdfngngncxbcv'));


//Задание 4
console.info('Задание 4');
function longestWord(str) {
    str = str.split(' ');
    var lw = str[0];

    for (var i = 1; i < str.length; i++) {
        if (str[i].length > lw.length) {
            lw = str[i];
        }
    }

    return lw;
}
console.log('Самое длинное слово в строке \"qwe qwerty qwertyuiop qwer\" - ' + longestWord('qwe qwerty qwertyuiop qwer'));


//Задание 5
console.info('Задание 5');
function extractUnique(str) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i != j) {
                str[j] = "";
            }
        }
    }
    str = str.join('');

    return str;
}
console.log('Удалим из строки \"thequickbrownfoxjumpsoverthelazydog\" все символы, которые уже встречались');
console.log('Полученная строка - ' + extractUnique('thequickbrownfoxjumpsoverthelazydog'));