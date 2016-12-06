var Item = (function () {
    "use strict";

    //Новый элемент
    function Item(text, checked) {
        var _text,
            _checked;

        this.getText = function () {
            return _text;
        };

        this.setText = function (text) {
            if (typeof text == 'string') {
                _text = text;
            } else {
                throw new Error('Text must be a string');
            }
        };

        this.getChecked = function () {
            return _checked;
        };

        this.setChecked = function (checked) {
            if (checked == undefined) {
                _checked = false;
            } else if (typeof (checked) == 'boolean') {
                _checked = checked;
            } else {
                throw new Error('Checked must be a boolean');
            }
        };

        this.setText(text);
        this.setChecked(checked);
    }

    return Item;

} ());