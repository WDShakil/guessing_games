let step1 = document.querySelector(".step1");
let player1name = document.querySelector("#name");
let step1Startbtn = document.querySelector(".step1_startbtn");
let step2_player1_name = document.querySelector(".step2_player1_name");

step1Startbtn.addEventListener("click", function () {
  if (player1name.value !== "") {
    step2_player1_name.innerHTML = player1name.value;
    step2.style.display = "block";
    step1.style.display = "none";
  } else {
    errorFunction(step1, "The name input must be filled");
  }
});

player1name.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    step1Startbtn.click();
  }
});

function errorFunction(parent, msg) {
  let warning_error = document.createElement("div");
  let warning_icon = document.createElement("i");
  let close_icon = document.createElement("i");
  let warning_text = document.createElement("span");
  warning_icon.setAttribute("class", "ri-error-warning-line");
  parent.appendChild(warning_error);
  warning_error.appendChild(warning_icon);
  warning_error.appendChild(warning_text);
  warning_error.appendChild(close_icon);
  close_icon.setAttribute("class", "ri-close-line closeicon");
  warning_text.innerText = msg;
  warning_error.setAttribute("class", "warning_error");
  close_icon.addEventListener("click", function () {
    warning_error.style.display = "none";
  });
  setTimeout(() => {
    warning_error.style.display = "none";
  }, 3000);
}

// Step 2
let step2 = document.querySelector(".step2");
let step2Playbtn = document.querySelector(".step2_playbtn");
let first_number = document.querySelector("#first_number");

step2Playbtn.addEventListener("click", function () {
  if (first_number.value !== "") {
    step2.style.display = "none";
    step3.style.display = "block";
    startCountdown();
  } else {
    errorFunction(step2, "Please Give Your Number");
  }
});
first_number.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    step2Playbtn.click();
  }
});
// Step 3
let step3 = document.querySelector(".step3");
let step3Guessbtn = document.querySelector(".step3_guessbtn");
let chances = document.querySelector(".chances");
let guessNumber = document.querySelector("#guess_number");
let player2Name = document.querySelector(".step3_player2_name");

guessNumber.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    step3Guessbtn.click();
  }
});
player2Name.addEventListener("click", function () {
  // Select the entire content within the editableHeading
  const range = document.createRange();
  range.selectNodeContents(player2Name);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
});
let chance = 5;
chances.innerText = chance;

step3Guessbtn.addEventListener("click", function () {
  if (guessNumber.value !== "") {
    chance--;
    chances.innerHTML = chance;
    if (first_number.value == guessNumber.value) {
      winingResult.innerHTML = `Win ${player2Name.innerText}`;
      step3.style.display = "none";
      step4.style.display = "block";
    }
    if (chance < 1) {
      winingResult.innerHTML = `Win ${player1name.value}`;
      step3.style.display = "none";
      step4.style.display = "block";
    }

    guessNumber.value = "";
  } else {
    errorFunction(step3, "Input cannot be left blank");
  }
});

// Cowndown Timer Start
const countdownElement = document.querySelector(".cowndown");

let countdownTime = 0.5 * 60; // 30 seconds

function updateCountdown() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;
  countdownElement.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startCountdown() {
  let countdownInterval = setInterval(() => {
    countdownTime--;
    updateCountdown();

    if (first_number.value == guessNumber.value) {
      clearInterval(countdownInterval);
    } else {
      if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        winingResult.innerHTML = `Win ${player1name.value}`;
        step3.style.display = "none";
        step4.style.display = "block";
      }
    }
  }, 1000);
}

// Cowndown Timer End

// Step 4
let step4 = document.querySelector(".step4");
let winingResult = document.querySelector(".wining_result");
