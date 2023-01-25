let questions = [
    {
  
   question: "What does CSS stand for?",
   choices:[
           "Creative Style Sheets",
           "Computer Style Sheets",
           "Cascading Style Sheets",
           "Colorful Style Sheets"
   ],
   correctChoices:  "Cascading Style Sheets"
  
   },
  
   {
  
   question: "Which HTML tag is used to define an internal style sheet?",
   choices:[
           "<script>",
           "<style>",
           "<code>",
           "<css>"
   ],
   correctChoices:  "<style>"
   
   },
  
   {
  
   question: "Inside which HTML element do we put the JavaScript?",
   choices:[
           "<script>",
           "<style>",
           "<rths>",
           "<css>"
   ],
   correctChoices:  "<script>"
   
   },
  
   {
  
   question: "Choose the correct HTML element for the largest heading?",
   choices:[
           "<big>",
           "<h6>",
           "<head>",
           "<h1>"
   ],
   correctChoices:  "<h1>"
   
   },
  
   {
  
   question: "Which operator is used to assign a value to a variable?",
   choices:[
       "@",
       "#",
       "=",
       "()"                    
   ],     
   correctChoices:  "="
   
   },
  
   {
  
   question: "How do you call a function named 'myFunction'?",
   choices:[
       "call to function myFunction();",
       "call to function myFunction();",
       "call myFunction();",
       "myFunction();"                    
   ],                    
   correctChoices:  "myFunction();"
   
   },
  
   {
  
  
   question: "What is the correct HTML for adding a background color?",
   choices:[
       "<body bg='red'>",
       "<div style='background-color:grey;'>",
       "<body background='yellow'>",
       "<div background='green'>"                    
   ],       
   correctChoices:  "<div style='background-color:grey;'>"
  
                
   },
  
   {
  
  
   question: "JavaScript is the same as Java.?",
   choices:[
       "Yes",
       "No",
       "Maybe",
       "Just Might Be"                    
       ],      
       correctChoices:  "No"
   
                
       },
  
  {
  
  
   question: "How can you make a numbered list?",
   choices:[
       "<ol>",
       "<ul>",
       "<nl>",
       "<br>"                    
       ],      
       correctChoices:  "<ol>"
   
                 
       },
  {
  
  
   question: "Which doctype is correct for HTML5?",
   choices:[
       "<!DOCTYPE HTML>",
       "<!DOCTOP HMTL!>",
       "<!DOCTYPE HTML PUBLIC-//W3C>",
       "<!DOCTYPE HTML5>"                    
       ],
       correctChoices:  "<!DOCTYPE HTML>"
   
   
   }];
   console.log(questions)

var timeEl = document.querySelector("#time");
var screenEl = document.querySelector("#start-screen");
var startBtnEl = document.querySelector("#start");
var questionsEl = document.getElementById("questions");
var answerButtonEl = document.getElementById("answer-Button")
var questTitleEl = document.querySelector("#question-title")
var choiceEl = document.querySelector("#choices");
var endScreenEl = document.querySelector("#end-screen");
var nameEl = document.querySelector("#name");
var submitBtnEl = document.querySelector("#submit");
var feedbackEl = document.querySelector("#feedback");
var finalScoreEl = document.querySelector("final-score");
var reStartBtn = document.querySelector("#restart");
let time = 70, clearId;
let score = 0

// setInterval(function(){
// time--;
// },1000)

function startQuiz(){ 
//  setInterval()
// clearId = setInterval(countDown, 1000);
console.log ("started the quiz")
startScreenSect.style.display = "none"
// questionsEl.removeAttribute("class");
getQuestion();
}

function countDown(){
    time--;
    timeEl.textContent = time
if (time===0){
    endTheQuiz();
    
}
function clearInterval(){
    // clear time
    clearInterval(clearId);

    // endTheQuiz();

}
}
function endTheQuiz() {
    // question div is removed
   questionsEl.classList.add("hide") 
//    Endscreen
   endScreenEl.classList.remove("hide")

   finalScoreEl.innerHTML = score;

   currentQuestion = 0
}



let startScreenSect = document.querySelector(".start")

startBtnEl.addEventListener("click", startQuiz,)


var currentQuestionIndex = 0;
var currentQuestion = {}
var currentQuestionIndex, value
var choiceListEl = choiceEl.childNodes;
let questionNum = 0;
let userChoice = "";
let correctCounter = 0;
let isCorrect = false;
let timerCount = 0;
var timer;

// var choice = answerButtonEl

 
function getQuestion(){
    if (currentQuestion===10){

        endTheQuiz();
    }

else  {
        startBtnEl.classList.add("hide");

        questionsEl.classList.remove("hide");;

        question.textContent = questions[currentQuestion] .question;
        // new button div 
        const buttonsDiv = document.createElement("div");
        // prepares choices section for coming question
        choiceEl.innerHTML = "";
        for (let i = 0; i < 10; i++){
            const button = document.createElement("button");
            button.className + "button" + [i]; 

            button.innerHTML = questions[currentQuestion].choices[i];

            buttonsDiv.appendChild(button);

            button.addEventListener("click", handleChoice);
        }
        choices.appendChild(buttonsDiv)
    }

    function handleChoice(event) {
        let button = event.target;
        
        if(button.textContent == questions[currentQuestion].choices[currentQuestion].correctChoice) {

            playCorrect()

            currentQuestion++;

            score++;

            getQuestion()

            const right = document.createElement("h4")

    }

    }
//     // var currentQuestion = questions[currentQuestionIndex];
//     questionsEl.setAttribute("class","show")
//     questionsEl.textContent = questions[i].question
//     for (const [key, value] of Object.entries(questions[i].answers)) {
//         console.log(key + ": " + value);
//         var choiceBlock = document.createElement("button");
//         choiceBlock.textContent = key + ": " + value;
//         choiceEl.appendChild(choiceBlock);
//     }
//     for(let i = 0; i < choiceListEl.length; i++) {
//     choiceListEl[i].addEventListener("click", clickChoice)  
//     }
// // function to show end screen
// function showEndScreen() {
//     questionsEl.setAttribute("class", "hide");
//     answerResultEl.setAttribute("class", "hide");
//     endScreenEl.setAttribute("class", "show");
//     finalScoreEl.textContent = correctCounter;
// }

// // function to clear the previous question and choices
// function clearQuestion() {
//     questTitleEl.textContent = "";
//     choiceEl.textContent = "";
// }

// // function to check user's choice
// function checkChoice() {
//     if(userChoice === questions[questionNum].correctAnswer) {
//         console.log("You choose the right answer!");
//         correctCounter++;
//         isCorrect = true;
//         correctAudio.play();
//     } else {
//         console.log("You choose the wrong answer!");
//         isCorrect = false;
//         // if the answer is wrong, 10 seconds will be substracted from the timer
//         timerCount = timerCount - 10;
//         wrongAudio.play();
//     }
// }
// }

// // function to show if the previous question is correct
// function displayResult() {
//     answerResultEl.setAttribute("class", "result")
//     if(isCorrect) {
//         resultEl.textContent = "Correct answer!";
//     } else {
//         resultEl.textContent = "Wrong answer!";
//     }
// }

// // function to hide the result message of the previous question
// function hideResult() {
//     answerResultEl.setAttribute("class", "hide")
// }


// // function to define the actions when the choice was clicked
// function clickChoice(event) {
//     // get the user's choice
//     var userClick =event.target;
//     userChoice = userClick.textContent[0];
    
//     // console log the user choice and the correct answer
//     console.log("User choose " + userChoice);
//     console.log("The right answer is " + questions[questionNum].correctAnswer);

//     checkChoice();

//     if(questionNum < questions.length-1) {
//         clearQuestion();
//         displayResult();
//         setTimeout(hideResult,1500);
//         questionNum++;
//         showQuestion(questionNum);
//         console.log("Current question is [" + questionNum + "]");
//     } else {
//         questionNum++;
//         showEndScreen();
//         console.log("Current question is No." + questionNum);
//     }
// }

// // function to set the timer for the quiz
// function startTimer() {
//     // set 2 minutes for the whole quiz
//     timerCount = 60;
//     timer = setInterval(function() {
//         timerCount--;
//         timerEl.textContent = timerCount;
//         if(timerCount > 0 && questionNum === myQuestions.length) {
//             clearInterval(timer);
//             timerEl.textContent = 0;
//             showEndScreen();
//         }
//         if(timerCount <= 0) {
//             clearInterval(timer);
//             timerEl.textContent = 0;
//             showEndScreen();
//         }
//     }, 1000);

// }

// // function to check the initals
// function checkInitials(input) {
//     let letters = /^[A-Z]+$/;
//     if(!input.value.match(letters)) {
//         alert("Sorry, only capital characters valid!");
//         return false;
//     } else {
//         return true;
//     }
// }

// function saveScore(event) {
//     event.preventDefault();
//     let isCapital = checkInitials(initalsEl);
//     if(!isCapital) {
//         return;
//     } else {
//         let newScore = {
//         initials: initalsEl.value,
//         score: correctCounter
//         };
//         console.log(newScore);

//         let highScoresArr = [];
//         let tempArr = JSON.parse(localStorage.getItem("highScores"));

//         if(localStorage.getItem("highScores") === null) {
//         highScoresArr.push(newScore);
//         localStorage.setItem("highScores", JSON.stringify(highScoresArr)) 
//         } else {
//         // compare the new score and saved score. If same user, save the higher score
        
//         const duplicateIndex = tempArr.findIndex(element => element.initials === newScore.initials);
//         if(duplicateIndex === -1) {
//             tempArr.push(newScore);
//         } else {
//             if(tempArr[duplicateIndex].score < newScore.score) {
//                 tempArr[duplicateIndex].score = newScore.score;
//             }
//         }

//         //  tempArr.forEach(element => {
//         //     if(element.initials === newScore.initials) {
//         //         if(element.score <= newScore.score){
//         //             element.score = newScore.score;
//         //         } else {
//         //             element.score = element.score;
//         //         }
//         //     } else {
//         //         tempArr.push(newScore);
//         //     }
//         // });
//         localStorage.setItem("highScores", JSON.stringify(tempArr));
//     }
//     endScreenEl.setAttribute("class", "hide")
//     feedbackEl.setAttribute("class", "feedback show");
    
//     }
    
// }
// // startQuizEl.addEventListener("click", startQuiz);


// submitBtnEl.addEventListener("click", saveScore);

  

//     choiceEl.innerHTML = "";
//     currentQuestion.options.forEach(function(choice, i) {
//     var    choiceBtn = document.createElement("button");
//     // button.innerText = 
//         choiceBtn.setAttribute("value", choice);
   
//         choiceBtn.textContent = i + 1 + ". " + choice;
//         choiceBtn.onclick = questionClick;
//         choice.appendChild(choiceBtn);
//         // button.class.add(choiceBtn)
//     });
// }
// console.log ()
// // // Check for right answers and deduct time for wrong answer, go to next question

// function questionClick() {
//     if (this.value !== questions[currentQuestionIndex].answer) {
//       time -= 10;
//       if (time < 0) {
//         time = 0;
//       }
//       timeEl.textContent = time;
//       feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
//       feedbackEl.style.color = "red";
//     } else {
//       feedbackEl.textContent = "Correct!";
//       feedbackEl.style.color = "green";
//     }
//     feedbackEl.setAttribute("class", "feedback");
//     setTimeout(function() {
//       feedbackEl.setAttribute("class", "feedback hide");
//     }, 2000);
//     currentQuestionIndex++;
//     if (currentQuestionIndex === questions.length) {
//       quizEnd();
//     } else {
//       getQuestion();
//     }
// }
 // End quiz by hiding questions, stop timer and show final score

// function quizEnd() {
//     clearInterval(timerId);
//     var endScreenEl = document.getElementById("quiz-end");
//     endScreenEl.removeAttribute("class");
//     var finalScoreEl = document.getElementById("score-final");
//     finalScoreEl.textContent = time;
//     questionsEl.setAttribute("class", "hide");
// }
// function saveHighscore() {
//     var name = nameEl.value.trim();
//     if (name !== "") {
//       var highscores =
//         JSON.parse(window.localStorage.getItem("highscores")) || [];
//       var newScore = {
//         score: time,
//         name: name
//       };
//       highscores.push(newScore);
//       window.localStorage.setItem("highscores", JSON.stringify(highscores));
//     }
// }

// // Save users' score after pressing enter

// // function checkForEnter(event) {
// //     if (event.key === "Enter") {
// //         saveHighscore();
// //     }
// // }
// // nameEl.onkeyup = checkForEnter;

// // Save users' score after clicking submit

// // submitBtn.onclick = saveHighscore;

// // Start quiz after clicking start quiz

// startBtn.onclick = startQuiz;
}
