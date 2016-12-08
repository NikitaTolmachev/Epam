var controller = (function (books, view) {
    'use strict';

    function addBook(title, author, img, rate) {
        var newBook = new Book(title, author, img, rate);

        books.push(newBook);
        view.showNotifications([
            newBook
        ], 1);
        view.showBooks(books);
    }

    function searchBooks(books, str) {
        var result = [];

        if (Array.isArray(books)) {
            books.forEach(function (book) {
                for (var key in book) {
                    var author = book.getTitle();
                    var title = book.getTitle();

                    if (title.indexOf(str) !== -1 || author.indexOf(str) !== -1) {
                        result.push(book);
                        break;
                    }
                }
            });
        }

        return result;
    }


    function watchMostPopular(books) {
        var result = [];

        if (Array.isArray(books)) {
            books.forEach(function (book) {
                if (book.getRate() === 5) {
                    result.push(book);
                }
            });
        }

        return result;
    }

    return {
        addBook: addBook,
        searchBooks: searchBooks,
        watchMostPopular: watchMostPopular
    };
} (books, view));