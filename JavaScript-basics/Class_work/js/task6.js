function name() {
    name = prompt("Whats your name?");
    alert("Hi," + "" + name + "!");
}
name();

function factorial(num) {
    var result = 1;
    
    if (!isNaN(num) && isFinite(num)) {
        for (i = 1; i <= num; i++) {
            result = result * i;
        }
    } else {
        throw new Error("Its not a number, and you know that...");
    }

    return result;
}

var n = prompt("We need a number!");
alert(factorial(n));