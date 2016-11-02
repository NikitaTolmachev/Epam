/* Declare two variables and show them */
var a = 10;
var b = "string";
console.log("var a:" + a + "," + "var b:" + b);


/*Write function that can find triangle`s area */
function triangle(a, b, c) {
    var p = ((a + b + c) / 2);

    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

var a = 3;
var b = 4;
var c = 5;

console.log("triangle S:" + triangle(a, b, c));



/*Write a function that reverse the given array using three kind of loops */
/*for */
function arrayFor() {
    var arr1 = [1, 2, 3, 4, 5, 6, 7];
    var arr2 = [0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < arr1.length; i++) {
        arr2[arr2.length - (i + 1)] = arr1[i];
    }

    for (j = 0; j < arr1.length; j++) {
        console.log(arr2[j]);
    }
}
arrayFor();
/*while */
function arrayWhile() {
    var arr1 = [0, 12, -88, 90, 313, 5, 14];
    var arr2 = [0, 0, 0, 0, 0, 0, 0];
    var i = 0;
    var arrLength = 7;

    while (i < arrLength) {
        arr2[arrLength - (i + 1)] = arr1[i];
        i++;
    }

    for (i = 0; i < arrLength; i++) {
        console.log(arr2[i]);
    }
}

arrayWhile();
/*do while */
function arrayDoWhile() {
    var arr1 = [53, 8, 1, -33, 6, 13, 7];
    var arr2 = [0, 0, 0, 0, 0, 0, 0];
    var i = 0;
    var arrLength = 7;

    do {
        arr2[arrLength - (i + 1)] = arr1[i];
        i++;
    } while (i < arrLength);

    for (i = 0; i < arrLength; i++) {
        console.log(arr2[i]);
    }
}
arrayDoWhile();
/*Difference between i++ and ++i */
//  ++i will increment the value of i, and then return the incremented value.
function incI() {
    i = 1;
    var j;
    j = ++i;
    console.log('i: ' + i + "," + "j:" + j);
}
incI();
//  (i is 2, j is 2)
function Iinc() {
    i = 1;
    var j;
    j = i++;
    console.log('i: ' + i + "," + "j:" + j);
}
Iinc();
// (i is 2, j is 1)
/*Write a function that checks if the given arguments
 is positive number or negative number or is 0 */
function positiveCheck(a) {
    var result;

    if (a != 0) {
        if (a > 0) {
            result = "positive!";
        } else { 
            result = "negative!"; 
        }
    } else { 
        result = "0!";
    }

    return result;
}

var a = prompt('Введите число');

alert(positiveCheck(a));

/*Create a page that asks the user his name and alert it back */

