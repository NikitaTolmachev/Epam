//String: Task 1;
function isString(str) {
    var str;
    if (typeof (str) == "string") {
        return true;
    } else {
        return false;
    }
}
console.log(isString("JavaScript")); // true
console.log(isString(2)); // false

//String: Task 2;    !Need to ask
function canParseToNumber(str) {
    var result = parseInt(str);
    if (result == "NaN") {
        return false;
    } else {
        return true;
    }
}
console.log(canParseToNumber("2")); // true

//String: Task 3;
function getStringLength(str) {
    if (isString(str)) {
        return str.length;
    }
    else {
        console.log("Not a string");
    }
}
console.log(getStringLength("JS"));  // 2
//String: Task 4;
function camelize(str) {
    return str
        .replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
}
console.log(camelize("java script"));

//String: Task 5;
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize("javaScript"));

//String: Task 6;
function findOccurrences(target, str) {
    var target;
    var pos = 0;
    var pos = -1;
    var occurrences = 0;
    while ((pos = str.indexOf(target, pos + 1)) != -1) {
        occurrences++;
    }
    return occurrences;
}
console.log(findOccurrences("a", "JavaScript")); // 2
console.log(findOccurrences("Ja", "JavaScript")); // 1
console.log(findOccurrences("-", "JavaScript")); // 0
console.log(findOccurrences("b", "JavaScript")); // 0
