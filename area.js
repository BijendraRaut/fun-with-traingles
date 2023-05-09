const sides = document.querySelectorAll(".sides");
const calculateBtn = document.querySelector("#check-area");
const outputEl = document.querySelector("#output");

function calculateArea(a, b) {
  const area = (a * b) / 2;
  console.log(area);
}

calculateBtn.addEventListener("click", calculateArea);
