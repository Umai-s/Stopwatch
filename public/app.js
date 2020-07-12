var min = 0, sec = 0, msec = 0;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")

var interval;

function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 59) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10)
    var b = document.getElementById('button');
    b.disabled = true
}
function stop() {
    clearInterval(interval);
    var b = document.getElementById('button');
    b.disabled=false;
}
function reset() {
    min = 0; sec = 0; msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
}
