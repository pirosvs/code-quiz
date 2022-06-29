# code-quiz

## Deployment Link
[link]

## Description
This project is an example of a dynamic quiz format, where the page continuously updates to show only the relevant information on the screen. The quiz itself displays knowledge of web APIs and dynamic JavaScript, where innerHTML and template literals are used to render content on the page while removing previous content. Usage of web API methods in JavaScript is preferred here over, for exmaple, writing directly in the HTML and hiding it in the CSS, as it makes the code appear neater and keeps the page from having to store content while it is not being displayed to the user. 

Skills used in the making of this project include basic HTML, CSS for the look of the page, and JavaScript to create interactive elements. In order to render elements on the page, this project uses template literals in combination with innerHTML in order to create the HTML in the JavaScript by updating the index of an array of questions and answers. Hence:

```
  QuizContent.forEach( (currentQuestion, questionNumber) => {
    const answers = [];

    for(answerKey in currentQuestion.answers){
        answers.push(
        `<label>
            <input type="button" id="questionButt${answerKey}" name="questionBtn" value="${answerKey}">
            ${answerKey} :
            ${currentQuestion.answers[answerKey]}
        </label>`
        );
      }
```
In this way, we are able to add a button to each answer, and to do this for each question.

## Credits
Credit to my girlfriend and my housemate for helping me immensely with this project, particularly with the string literal, a number of fixes to each function, and with the emotional support to work on this project.

## License
This project falls under the MIT License.