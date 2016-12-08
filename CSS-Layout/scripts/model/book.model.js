var Book = (function () {
    'use strict';

    function Book(title, author, img, rate){
         var _title;
         var _author;
         var _img;
         var _rate;

        this.getTitle = function () {
            return _title;
        };

        this.setTitle = function (title) {
            if (typeof title == 'string') {
                _title = title;
            } else {
                throw new Error('wrong title');
            }
        };

         this.getAuthor = function () {
            return author;
        };

        this.setAuthor = function (author) {
            if (typeof author == 'string') {
                _author = author;
            } else {
                throw new Error('Wrong author name');
            }
        };

         this.getImg = function () {
            return _img;
        };

        this.setImg = function (img) {
            if (img) {
                _img = img;
            } else {
                throw new Error('Wrong image file');
            }
        };

         this.getRate = function () {
            return _rate;
        };

        this.setRate = function (rate) {
            if (typeof rate == 'number') {
                _rate = rate;
            } else {
                throw new Error('Wrong rate');
            }
        };

        this.setTitle(title);
        this.setAuthor(author);
        this.setImg(img);
        this.setRate(rate);
    }

    return Book;
} ());
