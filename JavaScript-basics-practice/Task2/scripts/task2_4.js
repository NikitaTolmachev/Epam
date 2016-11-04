function test(msg) {
    var wordArr = new Array();
    maxString = "";
    wordArr = msg.split(" ");
    for (var i = 0 in wordArr) {
        if (wordArr[i].length > maxString.length) {
            maxString = wordArr[i];
        }
    }
    window.alert("Longest word: " + maxString);
}
var msg = prompt("Enter a string")
test(msg);