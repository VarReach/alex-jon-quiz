"use strict"

const STATE = {
    currentQuestion: 0,
    score: 0,
    totalQuestions: 10,
    answer: 0,
    questions: [],
};

// get random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function shuffleArray(arr) {
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = arr.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


// generate question views
function generateQuestionView() {
    const currentQuestion = STATE.currentQuestion;
    const questionData = STATE.questions[currentQuestion];
    console.log(STATE.questions)
    console.log(STATE.questions[currentQuestion])
    return `
        <h2>Some text</h2>
        <img src=${questionData.image.src} alt=${questionData.image.alt}>
        <form class='js-question-form'>
            <label class="answer"><input type='radio' name='radio-answer' value='0'><span>${questionData.answers[0]}</span></label>
            <label class="answer"><input type='radio' name='radio-answer' value='1'><span>${questionData.answers[1]}</span></label>
            <label class="answer"><input type='radio' name='radio-answer' value='2'><span>${questionData.answers[2]}</span></label>
            <label class="answer"><input type='radio' name='radio-answer' value='3'><span>${questionData.answers[3]}</span></label>
            <label class="answer"><input type='radio' name='radio-answer' value='4'><span>${questionData.answers[4]}</span></label>
            <button id="js-sumbit" type="submit">Submit</button>
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
    const currentQuestion = STATE.currentQuestion;
    const questionData = STATE.questions[currentQuestion];
    const correctBool = isAnswerCorrect(questionData.correctAnswerIndex);
    return `
        <img src=${questionData.altImage.src} alt=${questionData.altImage.alt}>
        <h2>${correctBool ? 'You were right!' : 'Wrong!'}</h2>
        <h3 class='js-correct-asnwer'>The correct answer was...</h3>
        <p>${questionData.answers[questionData.correctAnswerIndex]}</p>
        <button id="js-next-question-btn">Next Question</button>
    `;
}

// generate final results view

function generateFinalResultsView() {
    let score = STATE.score;
    const totalQuestions = STATE.totalQuestions
    console.log(score)
    return `
        <h2>Congratulations</h2>
        <img>
        <h3>Your score ${score} / ${totalQuestions}</h3>
        <p>You're ${score >= 8 ? 'a grandmaster' : score === 5 || 6 || 7 ? 'average' : 'possibly terrible'}  at identifying Tv Shows!</p>
        <button id="js-play-again-btn">Play again?</button>
  `;
}

// get question img functions
function getCurrentQuestion() {
    let currentQuestion = getRandomInt(STORE.length);
    console.log('getCurrentQuestion function called');
    return currentQuestion;
}


// handle play again button
function handlePlayAgainButton() {
    $('.container').on('click', '#js-play-again-btn', () => {
        STATE.score = 0;
        STATE.currentQuestion = 0;
        randomizeQuestionOrder();
        renderQuestion();
        renderUpdatedScore();
    });
}

// decide if answer is correct
function isAnswerCorrect(inputValue) {
  return inputValue === STATE.answer
}

function grabAnswer(form) {
    let inputValue = $(form).find('input[type=radio]:checked').val();
    inputValue = parseInt(inputValue);
    STATE.answer = inputValue;
}

function renderAnswerView() {
    const answerScreen = generateAnswerView();
    console.log(answerScreen);
    $('.container').html(answerScreen);
}


// handle submit button
function handleSubmitButton() {
    $('.container').on('submit', '.js-question-form', function(event) {
        event.preventDefault();
        grabAnswer(this);
        renderAnswerView();
        userScore();
        renderUpdatedScore();
    });
}

// handle next question button
function handleNextQuestionButton() {
  $('.container').on('click', '#js-next-question-btn', () => {
    if (STATE.questions.length-1 !== STATE.currentQuestion) {
        renderQuestion();
        renderUpdatedScore();
    } else {
        renderUpdatedScore();
        renderResultsView();
    }
    
  });
}

// handle restart button

function loadNewQuestion() { 
    STATE.currentQuestion++;
}

function renderQuestion() {
    loadNewQuestion();
    const questionScreen = generateQuestionView();
    $('.container').html(questionScreen);
}

function userScore() {
    isAnswerCorrect(STATE.questions[STATE.currentQuestion].correctAnswerIndex) ? STATE.score++ : STATE.score;
}

function renderResultsView() {
    const resultsScreen = generateFinalResultsView();
    $('.container').html(resultsScreen);
}

function renderUpdatedScore() {
    const currentQNum = STATE.currentQuestion;
    const totalQuestions = STATE.totalQuestions;
    let score = STATE.score;
    $('.q-num-tracker').text(currentQNum+'/'+totalQuestions);
    $('.score-tracker').text(score);
}

function randomizeQuestionOrder() {
    const randoOrderArr = shuffleArray(STORE);
    const totalQuestions = STATE.totalQuestions;
    const actualQuestions = randoOrderArr.slice(0, totalQuestions);
    STATE.questions = actualQuestions;
}


function handleStartQuizButton() {
    $('#js-start-btn').click(() => {
        randomizeQuestionOrder();
        renderQuestion();
        renderUpdatedScore();
    });
}


//Start Screen

//Start Button -> Transitions us to the Quiz Screen


function main() {
    handleStartQuizButton();
    handleSubmitButton();
    handleNextQuestionButton();
    handlePlayAgainButton();
}

$(main);