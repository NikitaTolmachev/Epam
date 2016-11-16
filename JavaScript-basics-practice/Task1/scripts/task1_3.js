function isBlank(str) {
   return (str.length === 0)
    
}
 var str = prompt("Введите что-нибудь!")
 
if (isBlank(str)) {
        alert("Пустая!")
    } else (alert("Не пустая!"))