var ItemController = (function () {
    "use strict";

    function ItemController(itemStore, item) {
        this._itemStore = itemStore;
        this._item = item;
    };

    //Передаём данные в загрузку
    ItemController.prototype.load = function () {
        return this._itemStore.getItems();
    }

    //Добавление нового элемента
    ItemController.prototype.add = function (text) {
        var newItem = new Item(text);

        this._itemStore.setItems(newItem);

        return this._itemStore.getItems();
    }

    //Отметить элемент как выполненный
    ItemController.prototype.check = function (i) {
        var text = this._itemStore.getItems()[i].getText();
        var checked = !this._itemStore.getItems()[i].getChecked();

        this._itemStore.getItems().splice(i, 1);

        var newItem = new Item(text, checked);

        this._itemStore.setItems(newItem);

        return this._itemStore.getItems();
    }

    return ItemController;
} ());