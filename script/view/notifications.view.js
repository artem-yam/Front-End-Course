var NotificationView = (function (NotificationsController, NotificationsStore) {
    "use strict";

    //Создаём блока сообщения-истории
    function createBlock(id, text, date) {
        var history = window.document.querySelector(".history_block");
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var timeHistory = NotificationsController.generateTime(day, month, year, hour, minutes);

        var code = "<div class=\"history_log id" + id + "\">" + 
            "<div class=\"history_pic\"></div>" + 
            "<div class=\"history_text\">" + text +
            "<p><span>" + timeHistory + 
            " ago</span></div></div>";
        history.innerHTML = code + history.innerHTML;
    }

     //Загружаем историю
    function loadHistory() {
        window.document.querySelector(".history_block").innerHTML = "";
        var i = 0;
        if (NotificationsStore.length > 5) {
            i = NotificationsStore.length - 5;
        }
        while (i<NotificationsStore.length) {
            var msg = NotificationsStore[i];
            createBlock(
                msg.getId(),
                msg.getText(),
                msg.getDate()
            );
            i++;
        }
    }

    return {
        createBlock: createBlock,
        loadHistory: loadHistory
    };
} (NotificationsController, NotificationsStore));