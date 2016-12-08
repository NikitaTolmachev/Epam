var view = (function () {
    'use strict';

    function clearContextBox() {
        while (document.getElementById('contentBoxFlexUl').hasChildNodes()) {
            document
                .getElementById('contentBoxFlexUl')
                .removeChild(document.getElementById('contentBoxFlexUl').firstChild);
        }
    }

    function showBooks(books) {
        var container = document.getElementById('contentBoxFlexUl');

        clearContextBox();

        if (Array.isArray(books)) {
            books.forEach(function (book, index) {
                var bookEl = createBook(book, index, books);
                container.appendChild(bookEl);
            });
        } else {
            throw new Error('Wrong type of array!');
        }
    }

    function createBook(book, index, books) {
        var size = utilites.calculateSize(books);
        var newLi = document.createElement('li');

        newLi.className = 'contentBoxFlexLi';

        var newContentDiv = document.createElement('div');

        newContentDiv.className = 'content';
        newLi.appendChild(newContentDiv);

        var newImageDiv = document.createElement('div');

        newImageDiv.className = 'image';
        newImageDiv.style.background = book.getImg() + 'no-repeat';
        newContentDiv.appendChild(newImageDiv);

        var newBookNameDiv = document.createElement('div');

        newBookNameDiv.className = 'contentBookName';
        newBookNameDiv.innerHTML = book.getTitle();
        newContentDiv.appendChild(newBookNameDiv);

        var newAuthorNameDiv = document.createElement('div');

        newAuthorNameDiv.className = 'contentAuthor';
        newAuthorNameDiv.innerHTML = book.getAuthor();
        newContentDiv.appendChild(newAuthorNameDiv);

        var newRatingDiv = document.createElement('div');

        newRatingDiv.className = 'rating';
        newRatingDiv.id = 'rating';
        newContentDiv.appendChild(newRatingDiv);

        for (var i = 5; i > 0; i--) {
            var newRatingInput = document.createElement('input');
            newRatingInput.id = book.getTitle() + (i);
            newRatingInput.name = 'rating' + index;
            newRatingInput.type = 'radio';
            newRatingInput.value = i;
            newRatingDiv.appendChild(newRatingInput);
            var newRatingLabel = document.createElement('label');
            newRatingLabel.setAttribute('for', book.getTitle() + (i));
            newRatingLabel.id = book.getTitle() + (i);
            newRatingDiv.appendChild(newRatingLabel);

            if (books[index].getRate() == i) {
                newRatingInput.setAttribute('checked', 'checked');
            }

            newRatingInput.addEventListener('click', function (EventTarget) {
                books[index].setRate(event.currentTarget.value);
                showNotifications([book], 3);
            });
        }

        return newLi;
    }

    function clearNotificationBox() {
        while (document.getElementById('infoUl').hasChildNodes()) {
            document
                .getElementById('infoUl')
                .removeChild(document.getElementById('infoUl').firstChild);
        }
    }

    function showNotifications(books, msgType) {
        if (books) {
            books.forEach(function (book, index) {
                var bookEl = createNotification(book, index, books, msgType);
            });
        } else {
            throw new Error('Error in books.storage');
        }
    }

    function createNotification(book, index, books, msgType) {
        var newInfoLi = document.createElement('li');

        newInfoLi.id = 'notification';
        document.getElementById('infoUl').insertBefore(newInfoLi, infoUl.firstChild);

        var newInfoNotification = document.createElement('div');

        newInfoNotification.className = 'notification';

        switch (msgType) {
            case 1:
                newInfoNotification.innerHTML = 'You added' + ' ' + book.getTitle() + ' ' + ' ' + 'by' + ' ' + book.getAuthor();
                break;
            case 2:
                newInfoNotification.innerHTML = 'You are switched to most popular';
                break;
            case 3:
                newInfoNotification.innerHTML = 'You are punched' + ' ' + book.getTitle() + ' ' + 'rating' + ' ' + book.getRate();
                break;
        }

        newInfoLi.appendChild(newInfoNotification);
    }

    function onBookAdd() {
        var BookName = document.getElementById('bookName');
        var title = BookName.value;
        var AuthorName = document.getElementById('authorName');
        var author = AuthorName.value;
        var image = document.getElementById('image').value.split(/(\\|\/)/g).pop();
        var img = image ? 'url(' + image + ')' : 'url(empty1.jpg)';
        var rating = document.getElementById('rank');
        var rate = parseInt(rating.value);

        controller.addBook(title, author, img, rate);
    }

    function onSearch() {
        var result = [];

        clearContextBox();

        var str = document.getElementById('searchTextarea').value;
        var resultBooks = controller.searchBooks(books, str);

        showBooks(resultBooks);

    }

    function onAllBooks() {
        showBooks(books);
        clearNotificationBox();
    }

    function onMostPopular() {
        var result = [];
        clearContextBox();

        var result = controller.watchMostPopular(books);
        showBooks(result);
        showNotifications(result, 2);
    }

    function initializeEvents() {
        document.getElementById('with_button').addEventListener('mouseover', utilites.makeVisibleForm);
        document.getElementById('with_button').addEventListener('mouseout', utilites.hideForm);
        document.getElementById('form_for_input_book_data').addEventListener('mouseover', utilites.makeVisibleForm);
        document.getElementById('form_for_input_book_data').addEventListener('mouseout', utilites.hideForm);
        document.getElementById('add_a_book').addEventListener("click", onBookAdd);
        document.getElementById('search_textarea').addEventListener('keyup', onSearch);
        document.getElementById('most_popular').addEventListener('click', onMostPopular);
        document.getElementById('all_books').addEventListener('click', onAllBooks);
    }

    return {
        showBooks: showBooks,
        showNotifications: showNotifications,
        initializeEvents: initializeEvents
    };
} ());


