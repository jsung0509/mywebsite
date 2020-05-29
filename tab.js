const selectClock = document.querySelector('#selectClock');
const selectStopwatch = document.querySelector('#selectStopwatch');

const selectTimer = document.querySelector('#selectTimer');
const w_clock = document.querySelector('#w_clock');
const w_stopwatch = document.querySelector('#w_stopwatch');
const w_timer = document.querySelector('#w_timer');

selectClock.onclick = function(){
    w_clock.getElementsByClassName.display = 'block';
    w_stopwatch.getElementsByClassName.display = 'none';
    w_timer.getElementsByClassName.display = 'none';
}
selectClock.onclick = function(){
    w_clock.getElementsByClassName.display = 'none';
    w_stopwatch.getElementsByClassName.display = 'block';
    w_timer.getElementsByClassName.display = 'none';
}
selectClock.onclick = function(){
    w_clock.getElementsByClassName.display = 'none';
    w_stopwatch.getElementsByClassName.display = 'none';
    w_timer.getElementsByClassName.display = 'block ';
}