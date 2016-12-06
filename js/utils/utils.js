var Utils = (function () {
    "use strict";

    function Utils() { }

    Utils.prototype.isBlank = function (str) {
        str = str.replace(/\s{2,}/g, ' ');
        return str != ' ' && str != '';
    }

    return Utils;
} ());