let timer = 0;
let minute = 0;
let seconds = 0;
let lapTime = 0;
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
        timerLabel.innerHTML = "<p class='main-timer'>" + minute + " : " + seconds + "</p>";
    }, 1000);
}

function timerlap() {
    // let past = timer - lapTime;

    // let passedTimeLabel = document.getElementById("passed-time");
    // passedTimeLabel.textContent = past;

    lapTime = timer - lapTime;

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