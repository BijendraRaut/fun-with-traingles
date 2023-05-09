const quizForm = document.querySelector(".quiz-form");
const checkBtn = document.querySelector("#check-score");
const outputEl = document.querySelector(".output-text");

const answers = ["90°", "right angled"];

function checkScore() {
  let score = 0;
  let index = 0;
  const formDetail = new FormData(quizForm);
  for (let val of formDetail.values()) {
    if (val === answers[index]) {
      score++;
    }
    index++;
  }
  outputEl.innerText = "Your score is " + score;
}

checkBtn.addEventListener("click", checkScore);
