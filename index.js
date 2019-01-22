"use strict"

const STATE = {
    questionDataIndex: 0,
    currentQuestion: 0,
    score: 0,
    totalQuestions: 10,
}

// get random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/* function shuffleArray(arr) {
  let i = 0;
  let j = 0;
  let temp = null

  for (i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
} */


// generate question views
function generateQuestionView() {
    const questionData = STORE[STATE.questionDataIndex];
    return `
        <h2>Some text</h2>
        <img src=${questionData.image.src} alt=${questionData.image.alt}>
        <form class='js-question-form'>
            <label class="answer"><input type='radio' name='radio-answer' value='0'><span>${questionData.answers[0]}</span></label>
            <label class="answer"><input type='radio' name='radio-answer' value='1'><span>${questionData.answers[1]}</span></label>
            <label class="answer"><input type='radio' name='radio-answer' value='2'><span>${questionData.answers[2]}</span></label>
            <label class="answer"><input type='radio' name='radio-answer' value='3'><span>${questionData.answers[3]}</span></label>
            <label class="answer"><input type='radio' name='radio-answer' value='4'><span>${questionData.answers[4]}</span></label>
            <button id="js-sumbit">Let's Go!</button>
        </form>
     `;
}

// generate landing view
function generateLandingView() {
  return `
    <section class="hidden">
      <h2>Think you know Sci-Fi television?</h2>
      <p>Find out with our 10 question quiz!</p>
      <button id="js-start-btn">Let's Go!</button>
    </section>
  `;
}

// generate answers view
function generateAnswerView() {
  return `
  <section class="hidden">
      <div>
        <img>
        <img>
        <img>
        <img>
      </div>
      <h2>You were right!</h2>
      <h3 class='js-correct-asnwer'>The correct answer was...</h3>
      <p>Answer goes here</p>
      <button id="js-next-question-btn">Next Question</button>
    </section>
  `;
}

// generate final results view
function generateFinalResultsView() {
  return `
  <section class="hidden">
    <h2>Congratulations</h2>
    <img>
    <h3>Your score 8/10</h3>
    <p>You're a grandmaster at identifying Tv Shows!</p>
    <button id="js-play-again-btn">Play again?</button>
  </section>
  `;
}

// get question img functions
function getCurrentQuestion() {
  let currentQuestion = getRandomInt(STORE.length);
  console.log('getCurrentQuestion function called');
  return currentQuestion;
}

// get question answer functions


// keep track of score


// handle let's go button


// handle submit button


// handle next question button


// handle restart button

function grabRandomQuestion() {
    const index = 0;//getRandomInt(STORE.length);
    STATE.currentQuestion++;
    STATE.questionDataIndex = index;
}

function renderQuestion() {
    const questionScreen = generateQuestionView();
    $('.container').html(questionScreen);
}

function renderUpdatedScore() {
    $('')
}

function loadNextQuestion() {
    grabRandomQuestion();
    renderQuestion();
    renderUpdatedScore();
}


function handleStartQuizButton() {
    $('#js-start-btn').click(() => {
    //Grab a question
        //grab one of the questions saved in the STORE
        //make sure it's unique
    //Render said question to the screen
        //change the html in the container to our form
        //Show the current question and the score in the header
        loadNextQuestion();
    });
}


//Start Screen

    //Start Button -> Transitions us to the Quiz Screen


function main() {
  handleStartQuizButton();
}

$(main);