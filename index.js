var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

trainingtime = yyyy - 2016;

document.getElementById('date-time').innerHTML=today;
document.getElementById('trainingtime').innerHTML=trainingtime;