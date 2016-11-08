//object
var sidebar = {
    width: 300,
    height: 200,
    title: "sidebar"
}
//object: Task 1;
function objLength(obj) {
    var obj;
    var counter = 0;
    for (var key in obj) {
        counter++;
    }
    return counter;
}

console.log(objLength(sidebar));

//object: Task 2;
function objListProp(obj) {
    for (key in obj) {
        console.log("Ключ:" + key + " " + "значение:" + " " + obj[key]);
    }
}
objListProp(sidebar);