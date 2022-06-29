// document.body.innerHTML = "";

var startBtn = document.getElementById("buttons");
var timerDisplay = document.getElementById("timer");
var preTimer = 5;
var quizTimer = 75;
var score = 0;


startBtn.addEventListener("click", function quizGo(){
        console.log(quizTimer);
        var waitFive = setInterval(() => {
            preTimer--;
            timerDisplay.innerHTML = preTimer;
            if(preTimer === 0) {
                clearInterval(waitFive);
                var startTime = setInterval(() => {
                quizTimer--;
                timerDisplay.innerHTML = quizTimer;
                if (quizTimer === 0) {
                    clearInterval(startTime);
                    JSON.stringify(score);
                    localStorage.setItem('Last score', score);
                    // things go here to make appear a form to enter info and show score
                }
            } , 1000 )
            }
        } , 1000 );
});

var answerBtnA = document.getElementById("questionButta")

answerBtnA.addEventListener("click", function answerCheckA(){
  if(answerBtnA.value == QuizContent[0].correctAnswer){
    score += 1;
    console.log("correct");
  } else {
    quizTimer -= 10;
    console.log("incorrect");
  }
});

var answerBtnB = document.getElementById("questionButtb")

answerBtnB.addEventListener("click", function answerCheckB(){
  if(answerBtnB.value == QuizContent[0].correctAnswer){
    score += 1;
    console.log("correct");
  } else {
    quizTimer -= 10;
    console.log("incorrect")
  }
});

var answerBtnC = document.getElementById("questionButtc")

answerBtnC.addEventListener("click", function answerCheckC(){
  if(answerBtnC.value == QuizContent[0].correctAnswer){
    score += 1;
  } else {
    quizTimer -= 10;
  }
});

// Setting up the minus ten function needs to be called when the wrong answer is chosen
// input is false or question false or some shit idk i haven't used forms
quizTimer = quizTimer - 10;

// likely need to replace current HTML and add innerHTML to make it delete once quiz begins
// can use document.innerHTML = ""; or some shit to clear maybe

