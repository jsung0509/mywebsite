const startbtn = document.querySelector('#start');
const resetbtn = document.querySelector('#reset');

let timeElasped = 0;

let stopwatchFunction = function(){
    timeElasped = 0;

    let minute = Math.floor(timeElasped / 60);
    let second = timeElasped % 60;

    if(minute < 10) minute = '0' + minute;
    if(second < 10) second = '0' + second;
    let timenow = minute + '+' +second;

    let timeshown = document.querySelector('#w_stopwatch h1')
    timeshown.textContent = timenow;
}

let a;
startbtn.onclick = function(){
    let curstate = document.querySelector('#start').textContent;
    if(curstate === 'start'){
        document.querySelector('#start').textContent = 'stop'
        a = setInterval(stopwatchFunction, 1000)
    }
    else{
        clearInterval(a);
    }
}