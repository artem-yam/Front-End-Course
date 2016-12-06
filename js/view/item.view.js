var ItemView = (function () {
    "use strict";

    var onAdd, onCheck;

    function ItemView(itemController, utils) {
        this._itemController = itemController;
        this._utils = utils;

        onAdd = this.add.bind(this);
        onCheck = this.check.bind(this);
    };

    //Генератор кода блока элемента
    ItemView.prototype.generate = function (text, checked, i) {
        var code,
            temp;

        if (checked) {
            temp = '<div class="has-success"><div class="checkbox">' +
                '<label class="' + i + '"><input type="checkbox" class="' + i + '" checked/>';
        } else {
            temp = '<div class="has-error"><div class="checkbox">' +
                '<label class="' + i + '"><input type="checkbox" class="' + i + '"/>';
        }

        code = temp + '<span>' + text + '</span>' + '</label></div></div>';

        return code;
    }

    //Подтверждение действия
    ItemView.prototype.confirmMove = function (move, item) {
        return confirm('Are you sure you want to ' + move + ' ToDO item "' + item + '"?');
    }

    //Добавление элемента
    ItemView.prototype.add = function () {
        var text = window.document.querySelector("#ToDoNewItem").value;

        if (this._utils.isBlank(text)) {
            if (this.confirmMove("add new", text)) {
                this.load(this._itemController.add(text));
            }
        }
    }

    //Очищает вывод
    ItemView.prototype.clear = function () {
        window.document.querySelector("#listItems").innerHTML = "";
        window.document.querySelector("#ToDoNewItem").value = "";
    }

    //Отметить элемент как выполненный
    ItemView.prototype.check = function (i) {
        var item = document.getElementsByClassName(i)[0].textContent;

        if (this.confirmMove("check", item)) {
            this.load(this._itemController.check(i));
        }
    }

    //Загружает информацию из "storage"
    ItemView.prototype.load = function (items) {
        items = items || this._itemController.load();

        this.clear();

        var element = window.document.querySelector("#listItems");
        var uncheckedCode = "";
        var checkedCode = "";

        for (var i = items.length - 1; i >= 0; i--) {
            var item = items[i];

            if (item.getChecked()) {
                checkedCode = this.generate(item.getText(), item.getChecked(), i) + checkedCode;
            } else {
                uncheckedCode += this.generate(item.getText(), item.getChecked(), i);
            }

            element.innerHTML = uncheckedCode + checkedCode;
        }

        var itemEvent = document.querySelectorAll('.checkbox input');

        for (var i = 0; i < itemEvent.length; i++) {
            itemEvent[i].addEventListener("change", function () {
                onCheck(event.target.className[0]);
            });
        }
    }

    ItemView.prototype.initializeEvents = function () {
        window.document.querySelector("#AddNewItem").addEventListener("click", onAdd);
        window.document.querySelector("#ToDoNewItem").addEventListener("change", onAdd);
    }

    return ItemView;
} ());