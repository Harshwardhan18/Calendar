var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

var dt=new Date();
var currentMonth = dt.getMonth();
var firstDay = new Date(dt.getFullYear(), dt.getMonth(), 1); 
var lastDay = new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
var content = document.querySelector('.content');

for(let i=0;i<firstDay.getDay();i++) {
    var emptyElements = document.createElement('span');
    emptyElements.setAttribute('class','month-dates');
    content.appendChild(emptyElements);
}
for(let i=0;i<lastDay.getDate();i++) {
    var date = document.createElement('span');
    date.textContent = i+1;
    date.setAttribute('class','month-dates');
    content.appendChild(date);
}



                   



