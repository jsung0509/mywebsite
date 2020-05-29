let clockFunction = function(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if(hour < 10) hour = '0' + hour;
    if(Minutes < 10) hour = '0' + minute;
    if(second < 10) second = '0' + second;

    let timenow = hour + ':' minute + ':' + second;
    
    let timeshown = document.querySelector(('W_clock h1'));
    timeshown.textcontent = timenow;

}

setInterval(clockFunction, 1000);