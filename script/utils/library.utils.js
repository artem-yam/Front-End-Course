//Общие Функции
var Utils = (function() {
    "use strict";
    
    //Текущая дата
    function updateDate() {
        var nowDate = new Date();
        var nowHour = nowDate.getHours();
        var nowMinutes = nowDate.getMinutes();
        var nowDay = nowDate.getDate();
        var nowMonth = nowDate.getMonth();
        var nowYear = nowDate.getFullYear();

        return {
            nowDay: nowDay,
            nowMonth: nowMonth,
            nowYear: nowYear,
            nowHour: nowHour,
            nowMinutes: nowMinutes
        };
    }
    
    updateDate();

    //Пустая ли строка
    function isBlank(str) {
        str = str.replace(/\s{2,}/g, ' ');

        return str != ' ' && str != '';
    }

    function isDate(date) {
        if (Object.prototype.toString.call(date) === "[object Date]") {
                if ( isNaN( date.getTime() ) ) {  // d.valueOf() could also work
                    return false; // date is not valid
                } else {
                    return true;
                } 
            } else {
                 return false;
            }   
    }

    return {
        updateDate: updateDate,
        isBlank: isBlank,
        isDate: isDate
    };
} ());