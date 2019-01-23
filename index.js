'use strict';

const STATE = {
    currentQuestion: 0,
    score: 0,
    totalQuestions: 10,
    answer: 0,
    questions: [],
};

// generate random questions order
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
function generateQuestionString(arr) {
    let fullString = '';
    for (let i = 0; i < arr.length; i++) {
        fullString += `
            <div class="input-group">
                <label class="answer"><input type='radio' name='radio-answer' value='${i}' required><span>${arr[i]}</span></label>
            </div>
        `;
    }
    return fullString;
}

function generateQuestionView() {
    const currentQuestion = STATE.currentQuestion;
    const questionData = STATE.questions[currentQuestion];
    const answersStrings = generateQuestionString(questionData.answers);
    return `
        <h2>Identify the TV series associated with the image below:</h2>
        <div class="question-image-holder">
            <img src=${questionData.image.src} alt=${questionData.image.alt}>
        </div>
        <form class='js-question-form'>
            <div>
                ${answersStrings}
            </div>
            <div class="button-holder">
                <button id="js-sumbit" type="submit">Submit</button>
            </div>
        </form>
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
        <p>${questionData.trivia}</p>
        <button id="js-next-question-btn">Next Question</button>
    `;
}

// generate final results view
function generateFinalResultsView() {
    let score = STATE.score;
    const totalQuestions = STATE.totalQuestions;
    return `
        <h2>Congratulations</h2>
        <img>
        <h3>Your score ${score} / ${totalQuestions}</h3>
        <p>You're ${score >= 8 ? 'a grandmaster' : score === 5 || 6 || 7 ? 'average' : 'possibly terrible'}  at identifying Tv Shows!</p>
        <button id="js-play-again-btn">Play again?</button>
  `;
}

// decide if answer is correct
function isAnswerCorrect(inputValue) {
  return inputValue === STATE.answer
}

// get input value from user
function grabAnswer(form) {
    let inputValue = $(form).find('input[type=radio]:checked').val();
    inputValue = parseInt(inputValue);
    STATE.answer = inputValue;
}

// keep track of current question
function loadNewQuestion() { 
    STATE.currentQuestion++;
}

// check if user answer is the current correct answer
function userScore() {
    isAnswerCorrect(STATE.questions[STATE.currentQuestion].correctAnswerIndex) ? STATE.score++ : STATE.score;
}

// render and insert answer screen
function renderAnswerView() {
    const answerScreen = generateAnswerView();
    $('.container').html(answerScreen);
}

// render and insert question screen
function renderQuestion() {
    const questionScreen = generateQuestionView();
    $('.container').html(questionScreen);
}

// render and insert results screen
function renderResultsView() {
    const resultsScreen = generateFinalResultsView();
    $('.container').html(resultsScreen);
}

// update score and total question count in header
function renderUpdatedScore() {
    const currentQNum = STATE.currentQuestion+1;
    const totalQuestions = STATE.totalQuestions;
    let score = STATE.score;
    $('.q-num-tracker').text(currentQNum+'/'+totalQuestions);
    $('.score-tracker').text(score);
}

/* // get question img functions
function getCurrentQuestion() {
    let currentQuestion = getRandomInt(STORE.length);
    console.log('getCurrentQuestion function called');
    return currentQuestion;
} */

// get random number array that is the total amount of questions desired
function randomizeQuestionOrder() {
    const randoOrderArr = shuffleArray(STORE);
    const totalQuestions = STATE.totalQuestions;
    const actualQuestions = randoOrderArr.slice(0, totalQuestions);
    STATE.questions = actualQuestions;
}

// handle submit button
function handleSubmitButton() {
    $('.container').on('submit', '.js-question-form', function (event) {
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
        renderUpdatedScore();
        if (STATE.totalQuestions - 1 > STATE.currentQuestion) {
            loadNewQuestion()
            renderQuestion();
        } else {
            renderResultsView();
        }
    });
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

// handles start quiz button on landing page
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