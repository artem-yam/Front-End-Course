var BooksView = (function (BooksController) {
    "use strict";

    //Формируем код блока книги
    function createBlock(id, title, author, image, stars, searchResult) {
        var code = "<div class=\"book\"" + " id=\"book" + id +
            "\"><img src=\"Images/" + image + "\"alt=\"" + title +
            "\"/><div class=book_description\"><span>" + title +
            "</span> by " + author + "</div><div class=\"rating\">" +
            "<input id=\"star" + (id * 10 + 5) +
            "\" onchange=\"BooksView.onStarClick(" + id + ",5);\"" +

            " type=\"radio\" name=\"rating_stars" + id +
            "\"/><label class=\"star_label\" title=\"gorgeous\" for=\"star" +
            (id * 10 + 5) + "\"></label><input id=\"star" + (id * 10 + 4) +
            "\" onchange=\"BooksView.onStarClick(" + id + ",4);\"" +

            " type=\"radio\" name=\"rating_stars" + id +
            "\"/><label class=\"star_label\" title=\"good\" for=\"star" +
            (id * 10 + 4) + "\"></label><input id=\"star" + (id * 10 + 3) +
            "\" onchange=\"BooksView.onStarClick(" + id + ",3);\"" +

            " type=\"radio\" name=\"rating_stars" + id +
            "\"/><label class=\"star_label\" title=\"regular\" for=\"star" +
            (id * 10 + 3) + "\"></label><input id=\"star" + (id * 10 + 2) +
            "\" onchange=\"BooksView.onStarClick(" + id + ",2);\"" +

            " type=\"radio\" name=\"rating_stars" + id +
            "\"/><label class=\"star_label\" title=\"poor\" for=\"star" +
            (id * 10 + 2) + "\"></label><input id=\"star" + (id * 10 + 1) +
            "\" onchange=\"BooksView.onStarClick(" + id + ",1);\"" +

            " type=\"radio\" name=\"rating_stars" + id +
            "\"/><label class=\"star_label\" title=\"bad\" for=\"star" +
            (id * 10 + 1) + "\"></label></div> </div>";

        window.document.querySelector(".main_content").innerHTML += code;
    }

    function onStarClick(id, rating) {
        BooksController.updateRating(id, rating);

        NotificationsController.addNotification("You rated  <b>" +
            BooksStore[id - 1].getTitle() + "</b> by <b>" +
            BooksStore[id - 1].getAuthor() + "</b> " + rating + " stars");

        var activeCategory = window.document.getElementsByClassName("activeCategory");

        if (document.getElementById("most_popular") != activeCategory[0]) {
            showAllBooks();
        }
    }

    //Загружаем библиотеку
    function showAllBooks() {
        onCategoryClick("all_books");
        window.document.querySelector(".main_content").innerHTML = "";

        for (var i = 0; i < BooksStore.length; i++) {
            var book = BooksStore[i];

            createBlock(
                book.getId(),
                book.getTitle(),
                book.getAuthor(),
                book.getImage(),
                book.getStars()
            );

            if (book.getStars() > 0) {
                document.getElementById("star" + ((i + 1) * 10 +
                    book.getStars())).setAttribute("checked", "");
            }
        }
    }

    //Загрузка фотографии
    function imageLoaded() {
        var bookImage;

        window.document.querySelector(".upload_button").style = "background-color: #16A3F9";

        bookImage = window.document.querySelector("#add_book_image").value;
        bookImage = bookImage.substring(12);
        bookImage = "Images/" + bookImage;

        window.document.querySelector("#loaded_image").style = "background-image: url(\"" +
            bookImage + "\"); display: block;";
    }

    //Выбор категории
    function onCategoryClick(category) {
        window.document.querySelector(".main_content").innerHTML = "";

        var categories = window.document.querySelectorAll(".main_sort .sort div a");

        for (var i = 0; i < categories.length; i++) {
            categories[i].style = "padding: 3px 10px 2px 10px;" +
                "border-radius: 15px;" + "height: 20px;";
            categories[i].setAttribute("class", "");
        }

        window.document.querySelector("#search").value = "";

        var elem = document.getElementById(category);

        elem.style = "color: white;" +
            "background-color: #95b6d5;" +
            "padding: 3px 10px 2px 10px;" +
            "border-radius: 15px;";
        elem.setAttribute("class", "activeCategory");

        NotificationView.loadHistory();
    }

    //Клик по категории
    function onMostPopularClick() {
        onCategoryClick("most_popular");
        var result = BooksController.mostPopular();

        if (result != 0) {
            for (var i = 0; i < result.length; i++) {
                createBlock(result[i].id, result[i].title, result[i].author, result[i].image, result[i].stars);
                window.document.getElementById("star" + (result[i].id * 10 +
                    result[i].stars)).setAttribute("checked", "");
            }
        } else {
            window.document.querySelector(".main_content").innerHTML = "<h2>Not found!</h2>";
        }
    }

    function onAddBookClick() {
        var title = window.document.querySelector("#add_book_title").value;
        var author = window.document.querySelector("#add_book_author").value;
        var bookImage = window.document.querySelector("#add_book_image").value;

        bookImage = bookImage.substring(12);

        BooksController.addBook(title, author, bookImage);

        window.document.querySelector("#add_image_label").style = "";
        window.document.querySelector("#loaded_image").style = "";
        window.document.querySelector("#add_book_title").value = "";
        window.document.querySelector("#add_book_author").value = "";

        var activeCategory = window.document.getElementsByClassName("activeCategory");

        if (document.getElementById("all_books") == activeCategory[0]) {
            BooksView.showAllBooks();
        }
    }

    //Поиск
    function searchInput(change) {
        var search = window.document.querySelector("#search").value;
        var activeCategory = window.document.getElementsByClassName("activeCategory");

        var isMostPopularSearch = document.getElementById("most_popular") == activeCategory[0];

        var result = BooksController.search(
            search,
            isMostPopularSearch,
            change,
            activeCategory[0]
        );

        window.document.querySelector(".main_content").innerHTML = "";

        if (result != 0) {
            for (var i = 0; i < result.length; i++) {
                createBlock(
                    result[i].id,
                    result[i].title,
                    result[i].author,
                    result[i].image,
                    result[i].stars
                );

                if (result[i].stars > 0) {
                    document.getElementById("star" + (result[i].id * 10 +
                        result[i].stars)).setAttribute("checked", "");
                }
            }
        } else {
            window.document.querySelector(".main_content").innerHTML = "<h2>Not found!</h2>";
        }
    }

    function onSearchInput(){
        searchInput(false);
    }

    function onSearchEnter(){
        searchInput(true);
    }

    //События
    function addEvents() {
        window.document.querySelector("#add_book_image").addEventListener("change", imageLoaded);
        window.document.querySelector("#add_book").addEventListener("click", onAddBookClick);
        window.document.querySelector("#all_books").addEventListener("click", showAllBooks);
        window.document.querySelector("#most_popular").addEventListener("click", onMostPopularClick);
        window.document.querySelector("#search").addEventListener("input", onSearchInput);
        window.document.querySelector("#search").addEventListener("change", onSearchEnter);
        window.document.querySelector("#search_but").addEventListener("change", onSearchEnter);
    }

    return {
        addEvents: addEvents,
        onStarClick: onStarClick,
        onCategoryClick: onCategoryClick,
        imageLoaded: imageLoaded,
        createBlock: createBlock,
        showAllBooks: showAllBooks
    };
} (BooksController));