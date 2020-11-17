//ending date,current data,add,subtract.
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement =document.getElementById('seconds');

const christmas = '25 December 2020';

function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days =  Math.floor(totalSeconds / 3600 / 24);

    console.log(days,hours,minutes,seconds);

   daysElement.innerHTML = days;
   hoursElement.innerHTML = hours;
   minutesElement.innerHTML = minutes;
   secondsElement.innerHTML = seconds;
}

countdown();

setInterval(countdown,1000); //Calls countdown method every second

