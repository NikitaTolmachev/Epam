var NumberUtils = (function (a) {
  return a}
 ());

var Calculator = (function (NumberUtils) {


  function Calculator() {
    var result = 0;

    this.add = function (a) {
      if (isNaN(NumberUtils)) {
        result = result + a;

        return this.add;}

       else {
throw new Error;
      }
    };

    this.mul = function (a) {
    if (isNaN(NumberUtils)) {
        result = result * a;

        return this.mul;}

       else {
throw new Error;
      }
    };

    this.sub = function (a) {
  if (isNaN(NumberUtils)) {
        result = result - a;

        return this.sub;}

       else {
throw new Error;
      }
    };

    this.div = function (a) {
if (isNaN(NumberUtils)) {
        result = result / a;

        return this.div;}

       else {
throw new Error;
      }
    };

    this.getResult = function () {
      return result;
    };

    this.reset = function () {
      result = 0;

      return result;
    };
  }

  return Calculator;
  
} (NumberUtils));

var calculator = new Calculator();

calculator.add(3)(5);
console.log(calculator.getResult());
