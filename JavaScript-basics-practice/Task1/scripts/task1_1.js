function comparision(a, b) {
    return a > b;
}

var a;
var b;

a = prompt("Введите число а");
b = prompt("Введите число b");

if (comparision(a, b)) {
    alert("A больше!");
} else {
    alert("B больше!")
}