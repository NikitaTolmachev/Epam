function isPalindrome(str) {
    var result;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[str.length - 1 - i]) {
            result = true;
        } else {
            return false;
        }
    }

    return result;
}

test = isPalindrome("abracadabra") ? 'yes' : 'no';
test2 = isPalindrome("abracacarba") ? 'yes' : 'no';
console.log(test);
console.log(test2);