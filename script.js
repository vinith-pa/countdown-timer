"use strict"


const daysEl = document.getElementById("days"); 
const hoursEl = document.getElementById("hours"); 
const minsEl = document.getElementById('mins'); 
const secondsEl = document.getElementById('seconds'); 

const newYears = '01 Jan 2023';

function countdown(){
    const newYearsDate  =new Date(newYears);
    const current = new Date();

    const secondsRemaining = Math.trunc((newYearsDate-current)/(1000));
    const minutesRemaining = Math.trunc((newYearsDate-current)/(1000*60));
    const hoursRemaining = Math.trunc((newYearsDate-current)/(1000*60*60));
    const daysRemaining = Math.trunc((newYearsDate-current)/(1000*60*60*24));
    const seconds = Math.trunc(secondsRemaining%60);
    const mins = Math.trunc(minutesRemaining%60);
    const hours = Math.trunc(hoursRemaining%24);
    const days = Math.trunc((newYearsDate-current)/(1000*60*60*24));

    daysEl.innerHTML = days;
    hoursEl.innerHTML = format(hours);
    minsEl.innerHTML = format(mins);
    secondsEl.innerHTML = format(seconds);

}

function format(time){
   return time < 10 ? `0${time}`:time;
}
countdown();

setInterval(countdown,1000);
