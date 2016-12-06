var Main = (function (Item, ItemStore, ItemView, ItemController, Utils) {
    "use strict";

    var ItemStore = new ItemStore([
        new Item("ToDo Item 1", false),
        new Item("ToDo Item 2", false),
        new Item("ToDo Item 3", false),
    ]);
    var ItemController = new ItemController(ItemStore, Item);
    var Utils = new Utils();
    var ItemView = new ItemView(ItemController, Utils);

    ItemView.load();
    ItemView.initializeEvents();
} (Item, ItemStore, ItemView, ItemController, Utils));