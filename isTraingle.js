const angleInput = document.querySelectorAll(".angle-input");
const btnCheck = document.querySelector("#check-button");
const outputxt = document.querySelector("#output-text");

btnCheck.addEventListener("click", isTraingle);

// function findTraingle(angle1, angle2, angle3) {
//   const sum = angle1 + angle2 + angle3;
//   return sum;
// }

function isTraingle() {
  const sum =
    Number(angleInput[0].value) +
    Number(angleInput[1].value) +
    Number(angleInput[2].value);
  if (sum === 180) {
    outputxt.innerText = "yay this is a traingle";
  } else {
    outputxt.innerText = "oops this is not a triangle";
  }
}
