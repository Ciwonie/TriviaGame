$('.mySound').append('<embed id="embed_player" src="https://a.tumblr.com/tumblr_m2c1c9uMBL1rtntgko1.mp3" autostart="true" loop="true" hidden="true"></embed>');

var questionCounter = 0;
var answerCounter = 0;
var correct = 0;
var incorrect = 0;
var attempted = 0;
var seconds = 20;
var timeInterval;
var restarted = false;
var alphabet;
var letter;
var unown;

var trivia = [
    {
        question: 'How many Pokemon can Eevee currently evolve into?',
        choices: ['Nine', 'Eight', 'Six', 'Seven'],
        answer: 'Eight'
    },
    {
        question: "In Pokemon Go, Pikachu's 2nd year anniversay costume is: ",
        choices: ['An Astronaut', 'A Detective', 'A Cowboy', 'A Party Hat'],
        answer: 'A Cowboy'
    },
    {
        question: 'Which Pokemon was the first ever created?',
        choices: ['Pikachu', 'Bulbasaur', 'Mew', 'Rhydon'],
        answer: 'Rhydon'
    },
    {
        question: 'Red is the strongest trainer you could face in the original generation II, which one of these Pokemon was on his elite team?',
        choices: ['Raichu', 'Mewtwo', 'Espeon', 'Lapras'],
        answer: 'Espeon'
    }
];

var total = trivia.length;
var percentage;

$('.startButton').on('click', function () {
    $('#timer').text('Time remaining: ' + seconds);
    initialize();
    clearAttr();
    possibleAnswers();
    questionCreator();
    countDown();
});

function initialize() {
    $('.startButton').remove();
    for (i = 0; i < trivia.length; i++) {
        $('#answers').append(`<div class="box" data-number=${i}></div>`)
    }
}

function possibleAnswers() {
    for (i = 0; i < trivia.length; i++) {
        $(`[data-number=${i}]`).text(trivia[questionCounter].choices[i])
        if (trivia[questionCounter].choices[i] === trivia[questionCounter].answer) {
            $(`[data-number=${i}]`).attr('data-answer', true);
        }
    }
    unownGenerator()
}

function clearAttr() {
    for (i = 0; i < trivia.length; i++) {
        $(`[data-number=${i}]`).attr('data-answer', false);
    }
}

function questionCreator() {
    if (questionCounter === 0) {
        $('#question').html(trivia[questionCounter].question);
        questionCounter++;
        console.log(questionCounter);
    }
    else if (questionCounter === 1) {
        $('#question').html(trivia[questionCounter].question);
        questionCounter++;
        console.log(questionCounter);
    }
    else if (questionCounter === 2) {
        $('#question').html(trivia[questionCounter].question);
        questionCounter++;
        console.log(questionCounter);
    }
    else if (questionCounter === 3) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
}


$(document).on('click', '.box', function () {
    if (!restarted) {
        if ($(this).attr('data-answer') === 'true') {
            correct++;
            attempted++;
            countDownReset()
            clearAttr()
            possibleAnswers();
            questionCreator();
            finalPage();
        }
        else {
            incorrect++;
            attempted++;
            countDownReset()
            clearAttr()
            possibleAnswers();
            questionCreator();
            finalPage();
        }
    }
});

function finalPage() {
    percentage = (correct / total) * 100;
    if (attempted === total) {
        clearInterval(timeInterval);
        $('#endGame').html('<h1>Would you like to play again?</h1>'
            + 'Correct: ' + correct
            + '<br>' + 'Incorrect: ' + incorrect
            + '<br>' + percentage + '%'
            + '<br>' + '<button class=restart>Play Again!</button>');
        $('#timer').text('Time remaining: 00');
        restarted = true;
    }
}

function countDown() {
    timeInterval = setInterval(function () {
        console.log(seconds);
        seconds--;
        $('#timer').text('Time remaining: ' + seconds);
        if (attempted === total) {
            clearInterval(timeInterval);
        }
        else if (seconds === 0) {
            console.log('Times up');
            $('#timer').text('Time remaining: 0');
            clearInterval(timeInterval);
            incorrect++;
            attempted++;
            clearAttr()
            possibleAnswers();
            questionCreator();
            countDownReset();
            finalPage();
        }
    }, 1000);
}

function countDownReset() {
    clearInterval(timeInterval);
    seconds = 20;
    $('#timer').text('Time remaining: ' + seconds);
    countDown();
}



$(document).on('click', '.restart', function () {
    console.log('restarting');
    questionCounter = 0;
    answerCounter = 0;
    correct = 0;
    incorrect = 0;
    attempted = 0;
    seconds = 20;
    $('#timer').text('Time remaining: ' + seconds);
    clearAttr();
    possibleAnswers();
    questionCreator();
    countDown();
    if (restarted) {
        console.log('deleting');
        restarted = false;
        $('#endGame').html('');
    }
});

function unownGenerator() {
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    letter = Math.round(Math.random() * 26);
    unown = 'unown' + alphabet[letter] + ' ';
    $('.box').prepend(unown);
}
