const sides = document.querySelectorAll(".sides");
const calculateBtn = document.querySelector("#check-area");
const outputEl = document.querySelector("#output");

function calculateBaseAndHeight(b, h) {
  const baseandHeight = b * h;
  return baseandHeight;
}

function calculateArea() {
  const baseandHeight = calculateBaseAndHeight(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  //console.log(baseandHeight);
  const area = baseandHeight / 2;
  outputEl.innerText = `The area of traingle is ${area} cm²`;
}

calculateBtn.addEventListener("click", calculateArea);
