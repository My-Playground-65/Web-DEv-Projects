const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const newDate = new Date();
console.log(newDate);
let h = newDate.getHours();
console.log(h);

function updateClock(){
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();
    let ampm = "AM";

    if(hour<12){
        ampm = "AM";
    }else{
        ampm = "PM";
    }

    if(minute < 10){
        minute = `0${minute}`;
    }
    if(second < 10){
        second = `0${second}`;
    }

    hourEl.innerText = hour;
    minEl.textContent = minute;
    secondEl.innerText = second;
    ampmEl.innerHTML = ampm;

    setTimeout(updateClock,1000);


}
updateClock();


