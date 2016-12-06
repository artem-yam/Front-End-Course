var ItemStore = (function () {
    "use strict";

    //Хранилище элементов
    function ItemStore(items) {
        var _items = [];

        this.getItems = function () {
            return _items;
        };

        this.setItems = function (items) {
            if (items instanceof Array) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i] instanceof Item) {
                        _items.push(items[i]);
                    } else {
                        throw new Error('Items must be item type');
                    }
                }
            } else if (items instanceof Item) {
                _items.push(items);
            } else {
                throw new Error('Items must be item type');
            }
        };

        this.setItems(items);
    };

    return ItemStore;
} ());