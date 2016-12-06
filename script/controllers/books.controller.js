//Функции для работы с библиотекой
var BooksController = (function (BooksStore, Utils, NotificationsStore, Book) {
    "use strict";

    //Поиск
    function search(search, isMostPopular, change, activeCategory) {
        var search2 = search.toLowerCase();
        var count = 0;
        var result = [];
        var store = [];
        var isAllBooks = false;
        var bookId;

        if (isMostPopular) {
            store = BooksController.mostPopular();
        } else {
            store = BooksStore;
            isAllBooks = true;
        }

        for (var i = 0; i < store.length; i++) {
            var book = store[i];
            var titleSearch = book.getTitle().toLowerCase().indexOf(search2);
            var authorSearch = book.getAuthor().toLowerCase().indexOf(search2);

            if (titleSearch != -1 || authorSearch != -1) {
                if (isAllBooks) {
                    bookId = store[i].getId();
                } else {
                    bookId = store[i].id;
                }

                result.push({
                    id: bookId,
                    title: book.getTitle(),
                    author: book.getAuthor(),
                    image: book.getImage(),
                    stars: book.getStars()
                });

                count++;
            }
        }

        if (count == 0) {
            var result = 0;
        }

        if (change) {
            NotificationsController.addNotification(
                "You searched <b>" + search +
                "</b> in <b>" + activeCategory.innerHTML + "</b>"
            );
        }

        return result;
    }

    //Изменение рейтинга
    function updateRating(id, rating) {
        BooksStore[id - 1].setStars(rating);
        return true;
    }

    //Только популярные
    function mostPopular() {
        var maxStar = 1;
        var reply = [];

        for (var i = 0; i < BooksStore.length; i++) {
            var book = BooksStore[i];
            
            if (book.getStars() > maxStar) {
                maxStar = book.getStars();
            }
        }

        for (var i = 0; i < BooksStore.length; i++) {
            var book = BooksStore[i];

            if (book.getStars() == maxStar) {
                reply.push({
                    id: book.getId(),
                    title: book.getTitle(),
                    author: book.getAuthor(),
                    image: book.getImage(),
                    stars: book.getStars()
                });
            }
        }

        return reply;
    }

    //Добавление книги
    function addBook(title, author, bookImage) {
        if (!(Utils.isBlank(title) && Utils.isBlank(author))) {
            alert("Fill \"Title\" and \"Author\" fields to add a new book");
        } else {
            var bookId = BooksStore.length + 1;
            var newBook = new Book(bookId, title, author, bookImage);

            BooksStore.push(newBook);

            NotificationsController.addNotification("You added <b>" +
                title + "</b> by <b>" + author + "</b> to your <b>Library</b>");
            alert("Book \"" + author + " - " + title + "\" has been added!");
        }

        return true;
    }

    return {
        updateRating: updateRating,
        addBook: addBook,
        search: search,
        mostPopular: mostPopular
    };
} (BooksStore, Utils, NotificationsStore, Book));