
//Задание 1
console.info("Задание 1");
function largest_num(a,b)
{
   var max;
   if (a>=b) max = a
   else max = b;
   console.log("Среди введенных чисел " + a +" и " + b +
   " наибольшее = "+ max); 
}
largest_num(2,4);

//Задание 2
console.info("Задание 2");
for(i=0;i<=9;i++)
{
    if (i % 2 == 0) console.log("Число " + i + " - четное")
    else console.log("Число " + i + " - нечетное")
}

//Задание 3
console.info("Задание 3");
function is_Blank(str)
{
    console.log('Введена строка : ' + str +".");
    for (i=0, j=0;i<str.length;i++)
    {
        if (str[i]==' ') j++;
    }
    if (j==str.length) blank = true
    else if ( str==' ' || str == '') blank = true
    else blank = false;
    return blank;
}
console.log(is_Blank(''));
console.log(is_Blank('    '));
console.log(is_Blank('  abc  '));