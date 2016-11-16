//object
var sidebar = {
    width: 300,
    height: 200,
    title: "sidebar",
    obj: {
        width1: 300,
        height1: 400,
        title: "newSidebar"

    }
};

//object: Task 1;
function objLength(obj) {
    var counter = 0;

    return (function countLength(obj) {
        for (var key in obj) {
            counter++;
            if (typeof obj[key] == 'object') {
                countLength(obj[key]);
            }
        }

        return counter;
    } (obj));
}

console.log(objLength(sidebar));

//object: Task 2;
function objListProp(obj) {
    for (key in obj) {
        console.log("Ключ:" + key + " " + "значение:" + " " + obj[key]);
    }
}
objListProp(sidebar);