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

