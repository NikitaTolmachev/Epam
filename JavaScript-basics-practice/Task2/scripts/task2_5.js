function uniqueSymbol(str) {

    var array = str.split('');
    var buffer;
    for (i = 0; i < array.length; i++) {
        buffer = array[i];
        for (j = i; j < array.length; j++) {
            if (buffer == array[j + 1]) {
                delete array[j + 1];
            }


        }
    }
    alert(array.join(''));
}
var str = prompt('Enter string');
uniqueSymbol(str);