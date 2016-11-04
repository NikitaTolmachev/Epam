function dog(str) {

    for (i = 1; i < str.length + 1; i++) {
        console.log(str.slice(0, i));
    }
    for (j = -1; j > -(str.length); j--) {
        console.log(str.slice(j, str.length))
    }
    for (h = 1; h < str.length - 1; h++) {
        console.log(str.slice(h, h + 1))
    }
}
var str = prompt("Type any word");
dog(str);