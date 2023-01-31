let mainQuestions = [
    {

    question: "What does CSS stand for?",
    options:["Creative Style Sheets",
              "Computer Style Sheets",
              "Cascading Style Sheets",
              "Colorful Style Sheets"],
   correctChoices:  "Cascading Style Sheets"

   },
  
  {
  
    question: "Which HTML tag is used to define an internal style sheet?",
    options:["<script>",
            "<style>",
            "<code>",
            "<css>"
            ],
   correctChoices:  "<style>"

   },
  
   {
  
   question: "Inside which HTML element do we put the JavaScript?",
   options:["<script>",
           "<style>",
           "<rths>",
           "<css>"
           ],
   correctChoices:  "<script>"
    },
  
   {
  
   question: "Choose the correct HTML element for the largest heading?",
   options:["<big>",
           "<h6>",
           "<head>",
           "<h1>"
           ],
   correctChoices:  "<h1>"
   
   },
  
   {
  
   question: "Which operator is used to assign a value to a variable?",
   options:[ "@",
       "#",
       "=",
       "()"    
    ],     
   correctChoices:  "="
   
   },
  
   {
  
   question: "How do you call a function named 'myFunction'?",
   options:[
       "call to function myFunction();",
       "call to function myFunction();",
       "call myFunction();",
       "myFunction();"                    
   ],                    
   correctChoices:  "myFunction();"
   
   },
  
   {
  
    question: "What is the correct HTML for adding a background color?",
    options:[  "<body bg='red'>",
       "<div style='background-color:grey;'>",
       "<body background='yellow'>",
       "<div background='green'>"
        ],       
    correctChoices:  "<div style='background-color:grey;'>"
  
    },
  
    {
  
    question: "JavaScript is the same as Java.?",
    options:[
       "Yes",
       "No",
       "Maybe",
       "Just Might Be"                    
       ],      
       correctChoices:  "No"
   
                
    },
  
    {
  
    question: "How can you make a numbered list?",
    options:[
       "<ol>",
       "<ul>",
       "<nl>",
       "<br>"                    
       ],      
       correctChoices:  "<ol>"
   
    }];

//   console.log(mainQuestions)


    // questions
    // startQuiz()
    // start timer
    // show first question
    // askQuestion()
    // get first question from array
    // appendt title of question to page
    // loop over choices
    // create a button for each choice so we can select one
    // questionClicked()
    // get where the click happened
    // check if user guessed wrong
    // if guessed wrong, deduct time from scrore
    // move to next question
    // check if we've got no more questions 
    // stopQuiz()
    // run the askQuestion func again
    // start a clock 

             // Getting The Elements Needed //

var timeEl = document.querySelector("#time");
var screenEl = document.querySelector("#start-screen");
var startBtnEl = document.querySelector("#start");
var questionsEl = document.getElementById("questions");
var answerButtonEl = document.getElementById("answer-Button")
var choiceEl = document.querySelector("#choices");
var endScreenEl = document.querySelector("#end-screen");
var nameEl = document.querySelector("#name");
var submitBtn = document.getElementById("submit");
var feedbackEl = document.querySelector("#feedback");
var finalScoreEl = document.getElementById("#final-score");
var userEl = document.getElementById("initials");
var reStartBtn = document.querySelector("#restart");
let startScreenSect = document.querySelector(".start")
let score = 0;
finalScoreEl = score;

function startQuiz(){
startScreenSect.setAttribute('class', 'hide')
questionsEl.removeAttribute('class')

timerId = setInterval(setTime, 1000)
getQuestion()
}

//Add an event listener to the Start Button 

startBtnEl.addEventListener("click", startQuiz,)


//Start Screen display is set too none  
var timerId;
let time = 100    


// setting timer and clear timer
function setTime(){
        time--;
        timeEl.textContent = time
        if (time==0){
            endTheQuiz() 
        }
}

// console.log(score)
let currentQuestion = {}
let buttonsDiv;
let currentQuestionIndex = 0;

// Get Question From mainQuestions Arrays

function getQuestion(){
let currentQuestion = mainQuestions[currentQuestionIndex]

let titleElement = document.getElementById('question-title')
titleElement.textContent = currentQuestion.question

choiceEl.innerHTML = "";

for (let index = 0; index < currentQuestion.options.length; index++) {
    const element = currentQuestion.options[index];
    let btn = document.createElement('button')

    btn.setAttribute('value', element)
    btn.textContent = index + 1 + ': ' + element;
    choices.onclick = questionClicked
    choiceEl.appendChild(btn)
}


function questionClicked(event) {
    let btn = event.target
   
    
// console.log(event.target.value)

if (event.target.value !== mainQuestions[currentQuestionIndex].correctChoices) {
       
    feedbackEl.textContent = 'Wrong Answer 10 Secs Deducted'
    feedbackEl.setAttribute('class', 'feedback')
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
          }, 2000);    
    time -= 10


}
else {
    feedbackEl.textContent = 'Correct Answer 👍'
    feedbackEl.setAttribute('class', 'feedback')
    setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
      }, 2000);   
      score++;  

}
 currentQuestionIndex++

 function displayFinalScore(){
   document.getElementById("final-score").textcontent = score;
  
  }

if (time <= 0 || currentQuestionIndex === mainQuestions.length) {
    endTheQuiz()
    } else {
    getQuestion()
    }
    console.log(score)
}
}

// Function to end the quiz//

function endTheQuiz(){
       clearInterval(timerId)
       questionsEl.classList.add("hide") 
       document.getElementById("final-score").textContent = score 
submitBtn
       endScreenEl.removeAttribute("class")
}

   // Saving Name and Score//
function saveInitials(){
    console.log("saveInitials")
let name = userEl.value.trim();
if (name !== ""){
    let scores = JSON.parse(localStorage.getItem("User-Name-Score")) || [];
    let userNamescore = {
        score: score,
        Initials: name
        };
scores.push(userNamescore);
localStorage.setItem("User-Name-Score", JSON.stringify(scores));
window.location.href="highscores.html";
} 
}
submitBtn.addEventListener("click", saveInitials)
