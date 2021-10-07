const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyColor = document.body.style;
let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", (a) => {
  timerId = setInterval(() => {
    bodyColor.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  startBtn.disabled = "true";
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = !"true";
});
