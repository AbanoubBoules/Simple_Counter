let seconds = 00;
let tens = 00;
let min = 00;
let hours = 00;
let gethours = document.querySelector('.hours');
let getmin = document.querySelector('.min');
let getseconds = document.querySelector('.seconds');
let gettens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnClear = document.querySelector('.btn-clear');
let interval;
btnStart.addEventListener('click', () => {
    interval = setInterval(start, 10);
    btnStart.disabled = true;
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    btnStart.disabled = false;
})
btnClear.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    min = '00';
    hours = '00';
    getseconds.innerHTML = seconds;
    gettens.innerHTML = tens;
    getmin.innerHTML = min;
    gethours.innerHTML = hours;
    btnStart.disabled = false;
})
function start() {
    tens++;
    if (tens <= 9) {
        gettens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
        gettens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        getseconds.innerHTML = '0' + seconds;
        tens = 0;
        gettens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getseconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        min++;
        getmin.innerHTML = '0' + min;
        seconds = 0;
        getseconds.innerHTML = '0' + 0;
    }
    if (min > 9) {
        getmin.innerHTML = min;
    }
    if (min > 59) {
        hours++;
        gethours.innerHTML = '0' + hours;
        min = 0;
        getmin.innerHTML = '0' + 0;
    }
    if (hours > 9) {
        gethours.innerHTML = hours;
    }

    

}
