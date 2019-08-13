var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

var dt = new Date();
var month = dt.getMonth();
var currentYear = dt.getFullYear();
newMonth(dt.getFullYear(), dt.getMonth());


var btnF = document.getElementById('forward');
var btnB = document.getElementById('back');
var nDate = document.querySelectorAll('.month-dates');

var countf = 0;
btnF.addEventListener('click', event => {
    countf++;
    if (dt.getMonth() + countf > 11) {
        dt.setMonth(0);
        let nMonth = dt.getMonth();
        currentYear += 1;
        countf = 0;
        newMonth(currentYear, nMonth);
    } else {
        newMonth(currentYear, dt.getMonth() + countf);
    }

})

var countB = 0;
btnB.addEventListener('click', event => {
    countB++;
    if (dt.getMonth() - countB < 0) {
        dt.setMonth(11);
        let nMonth = dt.getMonth();
        currentYear -= 1;
        countB = 0;
        newMonth(currentYear, nMonth);
    } else {
        newMonth(currentYear, dt.getMonth() - countB);
    }
})

function newMonth(yr, mon) {
    var newDt = new Date(yr, mon);
    let nMonth = newDt.getMonth();
    currentMonth = monthNames[nMonth];
    currentDate = newDt.getDate();
    firstDay = new Date(newDt.getFullYear(), newDt.getMonth(), 1);
    lastDay = new Date(newDt.getFullYear(), newDt.getMonth() + 1, 0);
    content = document.querySelector('.content');
    headerMonth = document.getElementById('date');
    headerMonth.textContent = currentMonth;

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    for (let i = 0; i < firstDay.getDay(); i++) {
        var emptyElements = document.createElement('span');
        emptyElements.setAttribute('class', 'month-dates');
        content.appendChild(emptyElements);
    }
    for (let i = 0; i < lastDay.getDate(); i++) {
        var date = document.createElement('span');
        date.textContent = i + 1;
        date.setAttribute('class', 'month-dates');
        content.appendChild(date);
    }

}