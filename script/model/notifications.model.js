var Notification = (function (Utils) {
    "use strict;"

    function Notification(id, text, date) {
        var _id;
        var _text;
        var _date; 

        this.getId = function () {
            return _id;
        };

        this.setId = function (id) {
            if (!isNaN(parseFloat(id)) && isFinite(id)) {
                _id = id;
            } else {
                throw new Error('Id must be a number');
            }
        };

        this.getText = function () {
            return _text;
        };

        this.setText = function (text) {
            if (typeof (text) == 'string'){
                _text = text;
            } else {
                throw new Error('Text must be a string');
            }
        };

        this.getDate = function () {
            return _date;
        };

        this.setDate = function (date) {
            if (Utils.isDate(date)) {
                 _date = date || Utils.updateDate(); 
            } else {
                throw new Error('Date is not valid');
            }
        };

        this.setId(id);
        this.setText(text);    
        this.setDate(date);
    }

    return Notification;

} (Utils));
