var Book = (function () {
    "use strict";

    function Book(id, title, author, image, stars) {
        var _id,
            _title,
            _author,
            _image,
            _stars;

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

        this.getTitle = function () {
            return _title;
        };

        this.setTitle = function (title) {
            if (typeof (title) == 'string'){
                _title = title;
            } else {
                throw new Error('Title must be a string');
            }
        };

        this.getAuthor = function () {
            return _author;
        };

        this.setAuthor = function (author) {
            if (typeof (author) == 'string'){
                _author = author;
            } else {
                throw new Error('Author must be a string');
            }
        };

        this.getImage = function () {
            return _image;
        };

        this.setImage = function (image) {
            if (typeof (image) == 'string'){
                if (image == '') {
                    _image = "nocover.jpg";
                } else {
                    _image = image;
                }
            } else {
                throw new Error('Image must be a string');
            }
        };

        this.getStars = function () {
            return _stars;
        };

        this.setStars = function (stars) {
            if (stars == undefined) {
                _stars = 0;
            } else if (!isNaN(parseFloat(stars)) && isFinite(stars)) {
                _stars = stars;
            } else {
                throw new Error('Stars must be a number');
            }
        };

        this.setId(id);
        this.setTitle(title);
        this.setAuthor(author);
        this.setImage(image);
        this.setStars(stars);
    }

    return Book;

} ());