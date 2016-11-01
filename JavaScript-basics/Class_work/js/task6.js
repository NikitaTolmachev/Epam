function name() {
    name = prompt("Whats your name?");
    alert("Hi," + "" + name + "!");
}
name();

function factorial(result) {
    var result = 1;
    n = prompt("We need a number!");
    for (i = 1; i <= n; i++) {
        result = result * i;
    }
    alert(result);
}
factorial();