// document.body.innerHTML = "";

var startBtn = document.getElementById("buttons");
var timerDisplay = document.getElementById("timer");
var preTimer = 5;
var quizTimer = 75;



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
            } , 1000 )
            }
        } , 1000 );
});

// Setting up the minus ten function needs to be called when the wrong answer is chosen
// input is false or question false or some shit idk i haven't used forms
quizTimer = quizTimer - 10;

// likely need to replace current HTML and add innerHTML to make it delete once quiz begins
// can use document.innerHTML = ""; or some shit to clear maybe

