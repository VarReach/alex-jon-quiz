"use strict"

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
  return `
    <section class="hidden">
    <h2>Some text</h2>
    <img src='#'>
    <form class='js-question-form'>
      <input type='radio' name='radio-answer'><span>Answer 1</span>
      <input type='radio' name='radio-answer'><span>Answer 2</span>
      <input type='radio' name='radio-answer'><span>Answer 3</span>
      <input type='radio' name='radio-answer'><span>Answer 4</span>
      <input type='radio' name='radio-answer'><span>Answer 5</span>
      <button id="js-sumbit">Let's Go!</button>
    </form>
  </section>
  `

}

// generate landing view
function generateLandingView() {
  return `
    <section class="hidden">
      <h2>Think you know Sci-Fi television?</h2>
      <p>Find out with our 10 question quiz!</p>
      <button id="js-start-btn">Let's Go!</button>
    </section>
  `
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
  `
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
  `
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


function main() {
  
}

$(main);