let timeLeft = 25 * 60; // 25 minutes in seconds
let timer = null;

function updateDisplay() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    document.getElementById("timerDisplay").innerText = 
        `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
    if (timer) return; // Keeps timer from speeding up if clicked twice
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Focus session finished! Time for a break.");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateDisplay();
}
