//Array: Task 1
function isArray(arr) {
    return arr instanceof Array; 
}
console.log(isArray([2, 4, 5, 6])); // true
console.log(isArray(2)); // false

//Array: Task 2 
function removeUndeNaN(arr) {
    if (isArray(arr)) {
        for (i = 0; i <= arr.length; i++) {
            if (arr) {
                arr.splice(i, 1);
            }
        }
    } else {
        throw new Error('not Array');
    }
}

// var arr = ['null','12','0','','false',"undefined",NaN,'015','10'];
arr = 1;
console.log(removeUndeNaN(arr));

//Array: Task 3;
function highestValue(arr) {
    if (isArray(arr)) {
        var max = 0000;
        for (i = 0; i <= arr.length; i++) {
            if (max <= arr[i]) {
                max = arr[i];
            }
        }
        return max;
    } else {
        throw new Error('not array');
    }
}
var arr = [5, 15, -40, 1030, 1050, 550, 200, 140];
console.log(highestValue(arr));
//Array: Task 4;
function minValue(arr) {
    if (isArray(arr)) {
        var min = 0000;
        for (i = 0; i <= arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    } else {
        throw new Error('not array');
    }
}
var arr = [5, 15, -40, 1030, -199, 550, -400, 140];
console.log(minValue(arr));

//Array: Task 5;
function arrayOfWords(str) {
    var wordArr;
    wordArr = str.split(" ");
    return wordArr;
}

var str = "Java Script = ECHMA Script (and you know it!)"
console.log(arrayOfWords(str));

//Array: Task 6;
function freqItem(arr) {
    var count = 0;
    var max = 0;
    var element = 0;
    var index = 0;

    for (i = 0; i < 8; i++) {
        element = arr[0][i];
        count = 0;
       
        for (j = 0; j < 8; j++) {
            if (element == arr[0][j])
                count++;
        }
        arr[1][i] = count;
    }
   
    for (j = 0; j < 8; j++) {
        if (max < arr[1][j]) {
            max = arr[1][j];
            index = j;
        }
    }

    return arr[0][index];
}
var arr = new Array(['1', '2', '3', '4', '3', '5', '6', '3'], [0, 0, 0, 0, 0, 0, 0, 0])
console.log(freqItem(arr));

//Array: Task 7;
function clone(arr) {
    var newArr = arr.slice(0);
    return newArr;
}
var arr = ['1', '2', '4'];
console.log(clone(arr));

//Array: Task 8; !ignore case sensitivity

function removeDuplications(str) {
    var array = str.split(' ');
    var buffer;

    for (i = 0; i < array.length; i++) {
        buffer = array[i];

        for (j = i; j < array.length; j++) {
            if (buffer == array[j + 1]) {
                array.splice(j + 1, 1);
            }
        }
    }

    return array;
}
var str = "Test Test test Java Script java Script Test go!";
console.log(removeDuplications(str));

//Array: Task 9;
function mergeAr(arr1, arr2) {
    var arr1;
    var arr2;
    var merged = arr1.concat(arr2);
    var str = merged.join(' ');
    var merged = removeDuplications(str);

    return merged;
}
var arr1 = ['js', 'ECHMA', 'js', 'ECHMA', '12', '31'];
var arr2 = ['07', '16', 'js', 'ECHMA', 'js',];
console.log(mergeAr(arr1, arr2));

//Array: Task 10;
function removeSpec(arr) {
    var str = arr.join(' ');
    str = (str.replace(/[%#-@!_]/g, ""))
    arr = str.split(' ');
    
    return arr;
}
var arr = ['Java', 'Script', 'is', '*$#!_!', 'Awesome'];
console.log(removeSpec(arr));

//Array: Task 11;
var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

function sIncrease(c, d) {
    return (
        c['title'] > d['title'] ||
        c['title'] > d['title']
    ) ? 1 : -1;
}

console.log(library.sort(sIncrease));