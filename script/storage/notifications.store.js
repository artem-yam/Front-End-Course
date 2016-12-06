var NotificationsStore = (function (Notification) {
    "use strict";

    return [
        new Notification(1, "You added <b>Fight Club</b> by <b>Chuck Palahniuk</b> to your" +
            " <b>Must Read Titles</b>", new Date(2015,9,20,15,20,0,0)),
        new Notification(2, "You added <b>The Trial</b> by <b>Franz Kafka</b> to your" +
            " <b>Must Read Titles</b>", new Date(2015,9,20,15,40,0,0))
    ];
} (Notification));