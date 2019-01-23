'use strict';

const STATE = {
    currentQuestion: 0,
    score: 0,
    totalQuestions: 1,
    answer: 0,
    backgroundState: 0,
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

//generate Welcome Page
function generateLandingView() {
    return `
        <h1 class="welcome-title">Think you know about Sci-Fi television?</h1>
        <p class="welcome-subtitle">Find out with our 10 question quiz!</p>
        <div class="button-holder">
        <button id="js-start-btn">Let's Go!</button>
        </div>
    `;
}



// generate question views
function generateQuestionString(arr) {
    let fullString = '';
    arr = shuffleArray(arr);
    for (let i = 0; i < arr.length; i++) {
        fullString += `
            <div class="input-group">
                <input type='radio' id="radio-answer-${i}" name='radio-answer' value='${arr[i]}' required><label class="answer" for="radio-answer-${i}"><span>${arr[i]}</span></label>
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
    const correctBool = isAnswerCorrect(questionData.correctAnswer);
    return `
        <h3>${correctBool ? 'You were right!' : 'Wrong!'}</h3>
        <p class="trivia-subtitle">${correctBool ? 'Here, have some trivia:' : 'The correct answer was \''+questionData.correctAnswer+'\'. Have some trivia anyway:'}</p>
        <div class="question-image-holder">
            <img src=${questionData.altImage.src} alt=${questionData.altImage.alt}>
        </div>
        <p class="trivia-subtitle trivia-text">${questionData.trivia}</p>
        <div class="button-holder">
            <button id="js-next-question-btn">Next Question</button>
        </div>
    `;
}

// generate final results view
function getPerformanceString(s,tq) {
    const percentRight = Math.floor(s/tq*100);
    if (percentRight === 100) {
        return 'Amazing! You\'re a master at this!';
    } else if (percentRight < 100 && percentRight >= 80) {
        return 'Wow. You\'re pretty good at this!'; 
    } else if (percentRight < 80 && percentRight >= 60) {
        return 'Great! You\'re getting the hang of this.';
    } else if (percentRight < 60 && percentRight >= 40) {
        return 'Not bad. Mabye you should watch some more Sci-Fi though.';
    } else {
        return 'You might be terrible at this. Go watch some TV!';
    }
}

function getMedalAttrs(s,tq) {
    const percentRight = Math.floor(s/tq*100);
    if (percentRight >= 80) {
        return { src: 'Images/GoldMedal.png', alt: 'A gold medal' };
    } else if ( percentRight >= 60 ) {
        return { src: 'Images/SilverMedal.png', alt: 'A silver medal' };
    } else {
        return { src: 'Images/BronzeMedal.png', alt: 'A bronze medal' };
    }
}

function generateFinalResultsView() {
    let score = STATE.score;
    const totalQuestions = STATE.totalQuestions;
    const performanceString = getPerformanceString(score,totalQuestions);
    const medalAttr = getMedalAttrs(score,totalQuestions);
    return `
        <img class="medal" src="${medalAttr.src}" alt="${medalAttr.alt}">
        <h3>Your score: ${score} / ${totalQuestions}</h3>
        <p class="results-subtitle">${performanceString}</p>
        <div class="button-holder">
            <button id="js-play-again-btn">Play again?</button>
        </div>
  `;
}

// decide if answer is correct
function isAnswerCorrect(inputValue) {
  return inputValue === STATE.answer;
}

// get input value from user
function grabAnswer(form) {
    let inputValue = $(form).find('input[type=radio]:checked').val();
    STATE.answer = inputValue;
}

// keep track of current question
function loadNewQuestion() { 
    STATE.currentQuestion++;
}

// check if user answer is the current correct answer
function userScore() {
    const correct = isAnswerCorrect(STATE.questions[STATE.currentQuestion].correctAnswer) 
    correct ? STATE.score++ : STATE.score;
}

//render and insert landing screen
function renderLandingView() {
    const landingScreen = generateLandingView();
    $('.container').html(landingScreen);
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
function renderUpdatedQuizTracker() {
    renderUpdatedScore();
    renderUpdatedQuestionNum();
}

function renderUpdatedScore() {
    let score = STATE.score;
    $('.score-tracker').text(`Score: ${score}`);
}

function renderUpdatedQuestionNum() {
    const currentQNum = STATE.currentQuestion+1;
    const totalQuestions = STATE.totalQuestions;
    $('.q-num-tracker').text(`Question: ${currentQNum+'/'+totalQuestions}`);
}

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
        transitionToScreen(() => {
            renderAnswerView();
            fadeInContainer();
        });
        userScore();
        animateScore(() => { renderUpdatedScore(); });
    });
}

// handle next question button
function handleNextQuestionButton() {
    $('.container').on('click', '#js-next-question-btn', () => {
        if (STATE.totalQuestions - 1 > STATE.currentQuestion) {
            loadNewQuestion();

            animateQuestionNum(() => { renderUpdatedQuestionNum(); });
            transitionToScreen(() => {
                renderQuestion();
                fadeInContainer();
            });
        } else {
            transitionToScreen(() => {
                fadeOutScore()
                renderResultsView();
                incrementBackgroundState();
                transitionBackground();
            });
        }
    });
}

// handle play again button
function handlePlayAgainButton() {
    $('.container').on('click', '#js-play-again-btn', () => {
        STATE.score = 0;
        STATE.currentQuestion = 0;
        transitionToScreen(() => {
            renderLandingView();
        });
        hardResetBackgroundState();
        transitionBackground();
    });
}

// handles start quiz button on landing page
function handleStartQuizButton() {
    $('.container').on('click', '#js-start-btn', () => {
        transitionToScreen(() => {
            randomizeQuestionOrder();
            renderQuestion();
            renderUpdatedQuizTracker();
            //animations
            initializeScore();
            incrementBackgroundState();
            transitionBackground();
        });
    });
}

//Animation functions
function incrementBackgroundState() {
    STATE.backgroundState < 3 ? STATE.backgroundState++ : STATE.backgroundState = 0;
}

//called when pressing logo at top
function hardResetBackgroundState() {
    STATE.backgroundState = 0;
}

function transitionBackground() {
    const currentState = STATE.backgroundState;
    const mountainsHeight = BACKGROUND_STORE.mountains.height[currentState];
    const mountainsOpacity = BACKGROUND_STORE.mountains.opacity[currentState];
    const starsHeight = BACKGROUND_STORE.stars.height[currentState];
    const starsOpacity = BACKGROUND_STORE.stars.opacity[currentState];
    const length = BACKGROUND_STORE.length[currentState];
    //animate mountains

    const mountainsDone = $('.background-image-details.mountains').animate({
        bottom: `${mountainsHeight}`,
        opacity: `${mountainsOpacity}`,
    }, length).promise();
    //animate stars
    const starsDone = $('.background-image-details.stars').animate({
        top: `${starsHeight}`,
        opacity: `${starsOpacity}`,
    }, length).promise();
    Promise.all([starsDone,mountainsDone]).then(() => {
        fadeInContainer();
    });
}

function transitionToScreen(fn) {
    $('.container').fadeOut('1000');
    $('.container').promise().done(fn);
}

function fadeInContainer() {
    $('.container').fadeIn('1000');
    
}

function animateScore(fn) {
    $('.score-tracker').slideUp('500', () => {
        $('.score-tracker').promise().done(() => {
            fn();
            $('.score-tracker').slideDown('500');
        });
    });
}


function animateQuestionNum(fn) {
    $('.q-num-tracker').slideUp('500', () => {
        $('.q-num-tracker').promise().done(() => {
            fn();
            $('.q-num-tracker').slideDown('500');
        });
    });
}

function fadeOutScore() {
    $('.tracker-holder').fadeOut('1000');
}

function initializeScore() {
    $('.tracker-holder').animate({
        opacity: 1,
    }, '1000');
}

function main() {
    renderLandingView()
    handleStartQuizButton();
    handleSubmitButton();
    handleNextQuestionButton();
    handlePlayAgainButton();
}

$(main);