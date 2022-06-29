const quizBox = document.getElementById("quiz");
var startBtn = document.getElementById("buttons");
var timerDisplay = document.getElementById("timer");
var userNameInput = 
    `<form>
        <label for="username">User name:</label><br>
        <input type="text" id="username" name="username"><br>
    </form>`;
var score = 0;

var quizTimer = 45;
var questionCount = 0;
var questionHTML;

// This const is an array that holds all the questions
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
      a: "To pet cats",
      b: "To end world hunger",
      c: "To make cool little website interactions"
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
  // Creates an array that we are going to come back to later to put all our content into
  const output = [];

// Gets the html content of the current question and the index number of the question
  QuizContent.forEach( (currentQuestion, questionNumber) => {
    // An array that holds all the answers
    const answers = [];

    // For every answer in that array, checks the notated letters for each available answer
    for(answerKey in currentQuestion.answers){
        // Creates a label HTML element which appends radio buttons to each answer
        answers.push(
        `<label>
        <input type="button" id="questionButt${answerKey}" name="questionBtn" value="${answerKey}">
        ${currentQuestion.answers[answerKey]}
        </label>`
        );
      }

    // During this loop of "QuizContent" add the current looping question and answer to the ouput array we made at the beginning of the function
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
    // Takes all resulting code and inject it into the html page
  quizBox.innerHTML = questionHTML[questionCount];
     // Finds all of the buttons with the questionButt id and runs them with the following function
  var answerBtnA = document.getElementById("questionButta")
  setupAnswerButton(answerBtnA);

    var answerBtnB = document.getElementById("questionButtb")
    setupAnswerButton(answerBtnB);

    var answerBtnC = document.getElementById("questionButtc")
    setupAnswerButton(answerBtnC);
}

// Sets the answer buttons so that if the correct one is clicked, the score goes up, and if the 
// incorrect one is clicked, the time decreases by 10 instead of 1
function setupAnswerButton(answerBtn)
{
    answerBtn.addEventListener("click", function answerCheckC(){
      if(answerBtn.value == QuizContent[questionCount].correctAnswer){
        score += 1;
      } else {
        quizTimer -= 10;
      }

    // Moves to the next question in the array no matter which button was clicked
      questionCount++;
      console.log(questionCount);

      // If there are more questions, shows another one, othrrwise shows the scoreboard
      if(questionCount < questionHTML.length)
        showNextQuestion();
      else
        showScoreboard();
    });
}


// Once all questions have been answered or the time runs out, shows user's score and allows user
// to input a username so that score and username may be saved with localStorage

// I am aware this does not either a) preventDefault and therefore refreshes the page while not storing 
// the user input, and that as my timer is set up elsewhere I cannot call to clear it here
function showScoreboard()
{
    quizBox.innerHTML = "<p>Your score is:</p>" + score + "<br>" + userNameInput;
    localStorage.setItem('Username', 'userNameInput.value');
}

//Sets timer once start button has been clicked, displays it on the page and decreases per second
startBtn.addEventListener("click", function quizGo(){
        console.log(quizTimer);
                var startTime = setInterval(() => {
                quizTimer--;
                timerDisplay.innerHTML = quizTimer;
                // Once timer runs out, ends timer and takes the score value, makes it a string, and stores it locally,
                // then shows the scoreboard
                if (quizTimer === 0) {
                  clearInterval(startTime);
                  JSON.stringify(score);
                  localStorage.setItem('Last score', score);
                  showScoreboard();
                }
            } , 1000 )
        startBtn.style.display = "none";
        quizBuilder();
        showNextQuestion();
  }
);
