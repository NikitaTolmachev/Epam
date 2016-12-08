var utilites = (function () {
    'use strict';

     function calculateSize(obj) {
        var size = 0, 
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                size++;
            }
        }

        return size;
    }

    function hideForm() {
        document.getElementById('form_for_input_book_data').style.visibility = "hidden";
    }

    function makeVisibleForm() {
        document.getElementById('form_for_input_book_data').style.visibility = "visible";
    }

    return {
        calculateSize: calculateSize,
        hideForm: hideForm,
        makeVisibleForm: makeVisibleForm
    };
} (utilites));

