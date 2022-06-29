// document.body.innerHTML = "";

const quizBox = document.getElementById("quiz");
var startBtn = document.getElementById("buttons");
var timerDisplay = document.getElementById("timer");
var userNameInput = 
`<form>
        <label for="username">User name:</label><br>
        <input type="text" id="username" name="username"><br>
        </form>`;
var score = 0;

var quizTimer = 75;
var questionCount = 0;
var questionHTML;

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

  questionHTML = output;
  

 
}

function showNextQuestion()
{
    //take all resulting code and inject it into the html page
  quizBox.innerHTML = questionHTML[questionCount];
     // find all of the buttons with the question butt id
  var answerBtnA = document.getElementById("questionButta")
  setupAnswerButton(answerBtnA);

    var answerBtnB = document.getElementById("questionButtb")
    setupAnswerButton(answerBtnB);

    var answerBtnC = document.getElementById("questionButtc")
    setupAnswerButton(answerBtnC);
}

function setupAnswerButton(answerBtn)
{
    answerBtn.addEventListener("click", function answerCheckC(){
      if(answerBtn.value == QuizContent[questionCount].correctAnswer){
        score += 1;
      } else {
        quizTimer -= 10;
      }
      questionCount++;
      console.log(questionCount);
      // if there are more questions, show another one
      // otehrwise, show the scoreboard
      if(questionCount < questionHTML.length)
        showNextQuestion();
      else
        showScoreboard();
    });
}

function showScoreboard()
{
    quizBox.innerHTML = "<p>Your score is:</p>" + score + "<br>" + userNameInput;
    localStorage.setItem('Username', 'userNameInput.value');

}

//activated whenever the button element is clicked, currently checking if quizTimer is at 75 to see if it has been clicked yet.
//If it has not been clicked then the initial click will change the text of the button to "submit" and begin the timer.
//Afterwards, post click, the button will be used to check quiz answers.
startBtn.addEventListener("click", function quizGo(){
        console.log(quizTimer);
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
        startBtn.style.display = "none";
        quizBuilder();
        showNextQuestion();
  }
);
