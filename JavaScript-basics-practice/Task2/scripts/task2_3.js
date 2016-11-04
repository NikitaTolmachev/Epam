function sort(string1) {
    var array = string1.split('');

    for (var j = 0, len = array.length - 1; j < len; j++) {
        var swapped = false;
        var i = 0;
        while (i < len - j) {
            if (array[i] > array[i + 1]) {
                var buffer = array[i];
                array[i] = array[i + 1];
                array[i + 1] = buffer;
                swapped = true;
            }
            i++;
        }

        if (!swapped)
            break;
    }
    console.log(array.join(' '));
}
var string1 = prompt('Enter string');
sort();