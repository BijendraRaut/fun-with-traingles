const sides = document.querySelectorAll(".input-sides");
const calculateBtn = document.querySelector("#calculate-hypen");
const outputEl = document.querySelector(".output");

function calculateSumOfLength(a, b) {
  const sum = a ** 2 + b ** 2;
  return sum;
}

function calculateHypotenuse() {
  const sumOfLen = calculateSumOfLength(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const hypotenuse = Math.sqrt(sumOfLen);
  outputEl.innerText = `The hypotenuse of triangle is ${hypotenuse}`;
}

calculateBtn.addEventListener("click", calculateHypotenuse);
