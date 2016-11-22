


var NumberUtils = (function (a) {
  'use strict'
  return a
}
  ());

var Calculator = (function (NumberUtils) {
'use strict'

  function Calculator() {
    var result = 0;

    this.add = function (a) {
      if (isNaN(NumberUtils)) {
        result = result + a;

        return this;
      }
      else {
        throw new Error;
      }
    };

    this.mul = function (a) {
      if (isNaN(NumberUtils)) {
        result = result * a;

        return this;
      }
      else {
        throw new Error;
      }
    };

    this.sub = function (a) {
      if (isNaN(NumberUtils)) {
        result = result - a;

        return this;
      }
      else {
        throw new Error;
      }
    };

    this.div = function (a) {
      if (isNaN(NumberUtils)) {
        result = result / a;

        return this;
      }
      else {
        throw new Error;
      }
    };

    this.getResult = function () {
      return result;
    };

    this.reset = function () {
      result = 0;

      return this;
    };

    this.getInitialState = function () {
      var that = this;

      window.setTimeout(function () {
        that.result = 5;
        that.getResult();
      }, 500);
    };
  }

  return Calculator;
  
} (NumberUtils));

var calculator = new Calculator();


calculator.add(3).sub(14).add(3);
console.log(calculator.getResult());

