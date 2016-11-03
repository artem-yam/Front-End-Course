
//Задание 1
console.info("Задание 1");
function is_palindrome(str)
{
    str1 = str.toLowerCase();
    for (i=0,j=1;i<=str1.length;i++,j++)
    {
        if (str1[i]==' ') i++;
        if (str1[str1.length-j]==' ') j++;
        if (str1[i] != str1[str1.length - j]) 
            return console.log('Строка : '+str+' - не полиндром');
    }
    return console.log('Строка : '+str+' - полиндром');
}

is_palindrome('Я иду с мечем судия');

//Задание 2
console.info("Задание 2");
function string_combinations(str) {
		var str1 = [];
        console.log('Исходная строка : '+str);
		for (i = 0; i <= str.length; i++) {
			for (j = i; j <= str.length; j++) {
				if (j > i) {
				    str1.push(str.substring(i, j));
				}
			}
		}
        console.log('Разбиения : '+str1);
	}

string_combinations('dog');

//Задание 3
console.info("Задание 3");
function bubble_sort(str)
{
console.log('Исходная строка : ' + str);
var m = str.split('');
for (i = 0; i < str.length; i++) 
{   
    
    var swapped = false, j = 0;
    while (j < m.length - i) {
        if (m[j] > m[j+1]) {
            var b = m[j]; 
            m[j] = m[j+1];
            m[j+1] = b;
            swapped = true;
        }
        j++;
    }  
    if(!swapped) break;
}
var str1 = '';
for (i=0;i<m.length;i++)
    str1 += m[i];
console.log('Отсортированная строка : '+ str1);
}

bubble_sort('asdfngngncxbcv');

//Задание 4
console.info("Задание 4");
function longest_word(str)
{
    console.log('Исходная строка : ' + str);
    str = str.split(' ');
    var lw = str[0];
    for (i = 1 ; i < str.length ; i++ )
        if (str[i].length > lw.length) lw = str[i];
    console.log('Самое длинное слово - ' + lw);
}

longest_word('qwe qwerty qwertyuiop qwer');

//Задание 5
console.info("Задание 5");
function extract_unique(str)
{       
    console.log('Исходная строка : ' + str);
    str = str.split('');
		for (i = 0; i < str.length; i++) 
			for (j = 0; j < str.length; j++) 
				if (str[i] == str[j] && i != j) 
					str[j] = "";
    str = str.join('');
	console.log('Получена строка : ' + str);
}
extract_unique('thequickbrownfoxjumpsoverthelazydog');