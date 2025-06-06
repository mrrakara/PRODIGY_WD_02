// Containers
let hrBox = document.getElementById("hr");
let minBox = document.getElementById("min");
let secBox = document.getElementById("sec");
let countBox = document.getElementById("count");
let lapbox = document.getElementById("lap-box");

// Buttons
let playBtn = document.getElementById("play-btn");
let pauseBtn = document.getElementById("pause-btn");
let restartBtn = document.getElementById("restart-btn");
let lapBtn = document.getElementById("lap-btn");

// Times
let hr = 0;
let min = 0;
let sec = 0;
let counter = 0;
let timer = false;
let lapCount = 1;


// Pause / Stop Function
pauseBtn.addEventListener("click", () => {
  timer = false;
});


// Start / Play Function
playBtn.addEventListener("click", () => {
  // prevent multiple click on play button
  if (!timer) {
    timer = true;
    stopwatch();
  }
});


// Restart / reset Function
restartBtn.addEventListener("click", () => {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  counter = 0;
  minBox.innerHTML = min.toString().padStart(2, "0");
  secBox.innerHTML = sec.toString().padStart(2, "0");
  hrBox.innerHTML = hr.toString().padStart(2, "0");
  countBox.innerHTML = counter.toString().padStart(2, "0");
    lapbox.innerHTML = "";
});


// Lap Function
lapBtn.addEventListener("click", () => {
  if (!timer) return; // Only record lap if stopwatch is running

  const lapTime = `${hr.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}:${counter
    .toString()
    .padStart(2, "0")}`;

  const lapEntry = document.createElement("li");
  lapEntry.textContent = `Lap ${lapCount++} - ${lapTime}`;

  lapbox.prepend(lapEntry); // Add lap at the top
});


// Main Function
function stopwatch() {
  if (timer == true) {
    counter = counter + 1;
    if (counter == 100) {
      sec = sec + 1;
      secBox.innerHTML = sec.toString().padStart(2, "0");
      counter = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
      minBox.innerHTML = min.toString().padStart(2, "0");
      secBox.innerHTML = sec.toString().padStart(2, "0");
    }

    if (min == 60) {
      hr = hr + 1;
      sec = 0;
      min = 0;
      minBox.innerHTML = min.toString().padStart(2, "0");
      secBox.innerHTML = sec.toString().padStart(2, "0");
      hrBox.innerHTML = hr.toString().padStart(2, "0");
    }
    countBox.innerHTML = counter.toString().padStart(2, "0");

    setTimeout(stopwatch, 10); //10 ms
  }
}
