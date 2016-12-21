var Task = (function () {
    'use strict'
    function Task( inputValue, doneOrNot) {
        var _inputValue;
        var _doneOrNot;

        this.getInputValue = function () {
            return _inputValue;
        };

        this.getDoneOrNot = function () {
            return _doneOrNot;
        }

        this.setInputValue = function (inputValue) {

            if (typeof inputValue == 'string') {
                _inputValue = inputValue;

            } else {
                throw new Error('Wrong task type');
            }
        }
        
        this.setDoneOrNot = function (doneOrNot) {

            if (typeof doneOrNot == 'boolean') {
                _doneOrNot = doneOrNot;

            } else {
                throw new Error('Wrong task type');
            }
        }

        this.setInputValue(inputValue);
        this.setDoneOrNot(doneOrNot);
    }

return Task;
} ());