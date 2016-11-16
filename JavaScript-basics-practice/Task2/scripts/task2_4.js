function test(msg) {

    var wordArr;
    var maxString = "";
    var wordArr = msg.split(" ");

    for (var i = 0 in wordArr) {
        if (wordArr[i].length > maxString.length) {
            maxString = wordArr[i];
        }
    }
    return maxString;
}
var msg = prompt("Enter a string")
window.alert("Longest word: " + test(msg));