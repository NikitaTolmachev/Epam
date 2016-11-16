function dateDiff() {
    var date1 = new Date(2015, 03, 15, 0000, 0000, 0000);
    var date2 = new Date(2016, 10, 14, 0000, 0000, 0000);
  
    return ((date1 - date2) / (1000 * 60 * 60 * 24))
}
console.log(dateDiff());

function nowDate() {
    return new Date();
}
console.log(nowDate());

function formatDate() {
    var date = new Date(2016, 09, 22, 11, 45);
    var options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
   
    return date.toLocaleString("en-US", options);
}
console.log(formatDate());