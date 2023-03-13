const participants = [];

function displayInput() {
  const userInput = document.getElementById("userInput").value;
  participants.push(userInput);
  const outputList = document.getElementById("outputList");
  const newItem = document.createElement("li");
  newItem.innerHTML = userInput;
  outputList.appendChild(newItem);
  document.forms[0].reset();
}

let i = 0;
let x = 0;
let intervalHandle = null;
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const headerOne = document.getElementById("headerNames");

startButton.addEventListener("click", function () {
  this.style.display = "none";
  stopButton.style.display = "block";
  intervalHandle = setInterval(function () {
    headerNames.textContent = participants[i++ % participants.length];
  }, 50);
});
stopButton.addEventListener("click", function () {
  this.style.display = "none";
  startButton.style.display = "block";
  clearInterval(intervalHandle);
});
