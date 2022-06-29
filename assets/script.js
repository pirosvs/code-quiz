// document.body.innerHTML = "";

const quizBox = document.getElementById("quiz");
var startBtn = document.getElementById("buttons");
var timerDisplay = document.getElementById("timer");
var score = 0;

var preTimer = 5;
var quizTimer = 75;
var questionCount = 1;

//this const is an array that holds all the questions
const QuizContent = [
  {
    question: "Who first used JavaScript?",
    answers: {
      a: "Mario",
      b: "George Bush",
      c: "Hatsune Miku"
    },
    correctAnswer: "a"
  },
  {
    question: "How can you utilize Javascript in every day life?",
    answers: {
      a: "In the bathroom",
      b: "To take over the world",
      c: "to make cool little website interactions"
    },
    correctAnswer: "c"
  },
  {
    question: "How many javascripts does it take to hatch an egg?",
    answers: {
      a: "React",
      b: "TypeScript",
      c: "Header 2"
    },
    correctAnswer: "c"
  },
  {
    question: "In Alfred Hitchcock's classic film, Vertigo, how does Jimmy Stewart's character utilize Javascript to save the day?",
    answers: {
      a: "He sent the captor a prank webste",
      b: "He let his cat program an investigative program",
      c: "Run away jimmy!!!!!!!!!!!!!!!!!!!!!!!!"
    },
    correctAnswer: "c"
  }
]

function quizBuilder(){
  //create an array that we are going to come back to later to put all our content into
  const output = [];

//a forEach loop that gets the html content of the current question and the index number of the question
  QuizContent.forEach( (currentQuestion, questionNumber) => {
    //An array that holds all the answers
    const answers = [];

    //now lets run code for every answer in that array where letter is checking the notated letters for each available answer
    for(answerKey in currentQuestion.answers){
        //Create a label HTML element which appends radio buttons to each answer.
        answers.push(
        `<label>
        <input type="button" id="questionButt${answerKey}" name="questionBtn" value="${answerKey}">
        ${answerKey} :
        ${currentQuestion.answers[answerKey]}
        </label>`
        );
      }

    //during this loop of "QuizContent" add the current looping question and answer to the ouput array we made at the beginning of the function
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
    console.log(output);
  });
  //take all resulting code and inject it into the html page
  quizBox.innerHTML = output[0];

  // find all of the buttons with the question butt id
  var answerBtnA = document.getElementById("questionButta")

    answerBtnA.addEventListener("click", function answerCheckA(){
      if(answerBtnA.value == QuizContent[questionCount-1].correctAnswer){
        score += 1;
        console.log("correct");
        quizBox.innerHTML = output[questionCount];
      } else {
        quizTimer -= 10;
        console.log("incorrect");
      }
      questionCount++;
      console.log(questionCount);
    });

    var answerBtnB = document.getElementById("questionButtb")

    answerBtnB.addEventListener("click", function answerCheckB(){
      if(answerBtnB.value == QuizContent[questionCount-1].correctAnswer){
        score += 1;
        console.log("correct");
        quizBox.innerHTML = output[questionCount];
      } else {
        quizTimer -= 10;
        console.log("incorrect")
      }
      questionCount++;
      console.log(questionCount);
    });

    var answerBtnC = document.getElementById("questionButtc")

    answerBtnC.addEventListener("click", function answerCheckC(){
      if(answerBtnC.value == QuizContent[questionCount-1].correctAnswer){
        score += 1;
        quizBox.innerHTML = output[questionCount];
      } else {
        quizTimer -= 10;
      }
      questionCount++;
      console.log(questionCount);
    });
}

//activated whenever the button element is clicked, currently checking if quizTimer is at 75 to see if it has been clicked yet.
//If it has not been clicked then the initial click will change the text of the button to "submit" and begin the timer.
//Afterwards, post click, the button will be used to check quiz answers.
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
      startBtn.style.display = "none";
      quizBuilder();

  }
);




// likely need to replace current HTML and add innerHTML to make it delete once quiz begins
// can use document.innerHTML = ""; or some shit to clear maybe
