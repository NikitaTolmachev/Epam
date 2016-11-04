function isPalindrome(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[str.length - 1 - i]) {
            result = 'yes';
        } else {
            result = 'no';
            return result;
        }
    }
    return result;
}

test = isPalindrome("abracadabra");
test2 = isPalindrome("abracacarba");
console.log(test);
console.log(test2);