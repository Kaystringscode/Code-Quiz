

const countDownEl     = document.getElementById("time");
const startButton      = document.getElementById("start");
const questionEl =  document.getElementById("questions");
const resultsBox    = document.getElementById("results"); 
const submitBtn     = document.getElementById("submit");

// var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#options");

var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback");
var reStartBtn = document.querySelector("#restart");




let timeEl = document.querySelector(".timer")
let time = 75, clearId;


function countDown(){
    time--;
    timeEl.textContent = time
if (time===0){
    endTheQuiz();
}
}
function endTheQuiz() {
    clearInterval(clearId);
}



let startScreenSect = document.querySelector(".start")

startButton.addEventListener("click", startQuiz,)


function startQuiz(){ 
clearId = setInterval(countDown, 1000);
console.log ("started the quiz")
startScreenSect.style.display = "none"
questionEl.removeAttribute("class");
getQuestion();

}


function getQuestion() {
    var currentQuestion = questions[currentQuestion];
  var promptEl = document.getElementById("question-title")
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = questionClick;
        choicesEl.appendChild(choiceBtn);
    });
}

// Check for right answers and deduct time for wrong answer, go to next question

function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
      time -= 10;
      if (time < 0) {
        time = 0;
      }
      timeEl.textContent = time;
      feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
      feedbackEl.style.color = "red";
    } else {
      feedbackEl.textContent = "Correct!";
      feedbackEl.style.color = "green";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
}

// End quiz by hiding questions, stop timer and show final score

function quizEnd() {
    clearInterval(timerId);
    var endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}

function saveHighscore() {
    var name = nameEl.value.trim();
    if (name !== "") {
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
      var newScore = {
        score: time,
        name: name
      };
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
    }
}

// Save users' score after pressing enter

// function checkForEnter(event) {
//     if (event.key === "Enter") {
//         saveHighscore();
//     }
// }
// nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

// submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = startQuiz;



