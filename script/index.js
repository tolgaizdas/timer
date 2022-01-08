let timer = 0;
let minute = 0;
let seconds = 0;
let lapTime = 0;
let prevLap = 0;
let timeInterval = null;

let lapList = document.getElementById("lap-list");

function timerStart() {
    timeInterval = setInterval(function () {
        timer++;
        seconds++;
        minute = Math.floor(timer / 60);
        let timerLabel = document.getElementById("timer");
        if (timer % 60 === 0) {
            seconds = 0;
        }

        if (timer < 10) {
            timer = "0" + timer;
        }

        if (minute < 10) {
            minute = "0" + minute;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timerLabel.innerHTML = "<p class='main-timer'>" + minute + " : " + seconds + "</p>";
    }, 1000);
}

function timerlap() {
    // let past = timer - lapTime;
    // let passedTimeLabel = document.getElementById("passed-time");
    // passedTimeLabel.textContent = past;
    
    lapTime = timer - prevLap;
    if (lapTime > 59) {
        let lapMinute = Math.floor(lapTime / 60);
        let lapSeconds = lapTime % 60;

        if (lapMinute < 10) {
            lapMinute = "0" + lapMinute;
        }

        if (lapSeconds < 10) {
            lapSeconds = "0" + lapSeconds;
        }

        lapTime = lapTime + " (" + lapMinute + " : " + lapSeconds + ")";
    }

    prevLap = timer;

    var lapElement = document.createElement("li");
    lapElement.appendChild(document.createTextNode(lapTime));
    lapList.appendChild(lapElement);
}

function timerPause() {
    clearInterval(timeInterval);
}

function timerReset() {
    clearInterval(timeInterval);

    timer = 0;
    minute = 0;
    seconds = 0;
    lapTime = 0;

    // let passedTimeLabel = document.getElementById("passed-time");
    // passedTimeLabel.textContent = "There is no lap added yet.";

    let timerLabel = document.getElementById("timer");
    timerLabel.innerHTML = "<p class='main-timer'>" + minute + " : " + seconds + "</p>";

    lapList.innerHTML = "";
}

let startButton = document.getElementById("start-button");
startButton.addEventListener("click", function() {
    startButton.disabled = true;
    pauseButton.disabled = false;
    timerStart();
});

let lapButton = document.getElementById("lap-button");
lapButton.addEventListener("click", timerlap);

let pauseButton = document.getElementById("pause-button");
pauseButton.addEventListener("click", function() {
    startButton.disabled = false;
    pauseButton.disabled = true;
    timerPause();
});

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
    startButton.disabled = false;
    pauseButton.disabled = false;
    timerReset();
});