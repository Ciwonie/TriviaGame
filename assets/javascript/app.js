$('.mySound').append('<embed id="embed_player" src="https://a.tumblr.com/tumblr_m2c1c9uMBL1rtntgko1.mp3" autostart="true" loop="true" hidden="true"></embed>');
hideBoxes();
hideGifs();
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
var gifTruth = false;
var gifTimerCorrect;
var gifTimerIncorrect;
var gifTimerTimesUp;

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
    },
    {
        question: 'In the second-generation Pokémon games, which Pokémon can you start with?',
        choices: ['Bulbasaur', 'Treecko', 'Eevee', 'Totodile'],
        answer: 'Totodile'
    },
    {
        question: 'Which one of these is not a Pokémon?',
        choices: ['Torkoal', 'Pyukumuku', 'Mimikyu', 'Agumon'],
        answer: 'Agumon'
    },
    {
        question: "What does the Pokémon ability 'Levitate' do?",
        choices: ['Increase speed', 'Immune to ground-type', 'Avoids wild pokemon', 'Allows flight'],
        answer: 'Immune to ground-type'
    },
    {
        question: "What does a Pokémon's nature do?",
        choices: ['Change stats by 10%', 'Effects behaviour', 'Increases happiness', 'Nothing, its just cool'],
        answer: 'Change stats by 10%'
    },
    {
        question: "In the Second-generation games, which Pokémon is in the middle of Professor Elm's Table?",
        choices: ['Chikorita', 'Mew', 'Cyndaquil', 'Totodile'],
        answer: 'Cyndaquil'
    },
    {
        question: "Which two Pokémon are the first that you see in Pokemon Red, if you don't press the A button before the cutscene ends?",
        choices: ['Gengar, Nidorino', 'Charmander, Squirtle', 'Mew, Mewtwo', 'Pikachu, Eevee'],
        answer: 'Gengar, Nidorino'
    },
    {
        question: 'Which one of these moves can be learned by Pikachu?',
        choices: ['Surf', 'Fly', 'Earthquake', 'Transform'],
        answer: 'Surf'
    },
    {
        question: "Which of these Pokemon is John's favorite?",
        choices: ['Charmander', 'Gyarados', 'Gengar', 'Pikachu'],
        answer: 'Charmander'
    }
];

var total = trivia.length;
var percentage;

$('.startButton').on('click', function () {
    $('#timer').text('Time remaining: ' + seconds);
    showBoxes();
    initialize();
    clearAttr();
    possibleAnswers();
    questionCreator();
    countDown();
});

function initialize() {
    $('.startButton').hide();
    for (i = 0; i < 4; i++) {
        $(`.box${i}`).attr('data-number', `${i}`);
    }
}

function possibleAnswers() {
    for (i = 0; i < 4; i++) {
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
        console.log(questionCounter);
    }
    else if (questionCounter === 1) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 2) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 3) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 4) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 5) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 6) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 7) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 8) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 9) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 10) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 11) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
    else if (questionCounter === 12) {
        $('#question').html(trivia[questionCounter].question);
        console.log(questionCounter);
    }
}

$('.box0, .box1, .box2, .box3').on('click', function () {
    if (!restarted) {
        if ($(this).attr('data-answer') === 'true') {
            correct++;
            attempted++;
            questionCounter++;
            gifTruth = true;
            gifGenerator();
            countDownReset();
            clearAttr();
            finalPage();
            possibleAnswers();
            questionCreator();
        }
        else {
            incorrect++;
            attempted++;
            questionCounter++;
            gifGenerator();
            countDownReset();
            clearAttr();
            finalPage();
            possibleAnswers();
            questionCreator();
        }
    }
});

function finalPage() {
    gifTruth = false;
    percentage = Math.round((correct / total) * 100);
    if (attempted === total) {
        clearInterval(timeInterval);
        clearGifTimers();
        hiders();
        $('#endGame').html('<br><br>' + '<h1>Would you like to play again?</h1>'
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
        seconds--;
        $('#timer').text('Time remaining: ' + seconds);
        if (attempted === total) {
            clearInterval(timeInterval);
        }
        else if (seconds === 0) {
            $('#timer').text('Time remaining: 0');
            clearInterval(timeInterval);
            incorrect++;
            attempted++;
            questionCounter++;
            timeUpGif();
            clearAttr();
            finalPage();
            possibleAnswers();
            questionCreator();
            countDownReset();
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
    hideGifs();
    questionCounter = 0;
    answerCounter = 0;
    correct = 0;
    incorrect = 0;
    attempted = 0;
    seconds = 20;
    $('#timer').text('Time remaining: ' + seconds);
    clearAttr();
    showers();
    possibleAnswers();
    questionCreator();
    countDown();
    if (restarted) {
        restarted = false;
        $('#endGame').html('');
    }
});

function unownGenerator() {
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    letter = Math.round(Math.random() * 26);
    unown = 'unown' + alphabet[letter] + ' ';
    $('.box0, .box1, .box2, .box3').prepend(unown);
}

function gifGenerator() {
    if (gifTruth) {
        $('.box0, .box1, .box2, .box3').hide();
        $('#question').hide();
        $('#timer').hide();
        $('.loadergif').show();

        gifTimerCorrect = setTimeout(function () {
            $('.loadergif').hide();
            $('.box0, .box1, .box2, .box3').show();
            $('#question').show();
            $('#timer').show();
            countDownReset();
        }, 3000);
    }
    else {
        $('.box0, .box1, .box2, .box3').hide();
        $('#question').hide();
        $('#timer').hide();
        $('.secondgif').show();

        gifTimerIncorrect = setTimeout(function () {
            $('.secondgif').hide();
            $('.box0, .box1, .box2, .box3').show();
            $('#question').show();
            $('#timer').show();
            countDownReset();
        }, 3000);
    }
}

function timeUpGif() {
    $('.box0, .box1, .box2, .box3').hide();
    $('#question').hide();
    $('#timer').hide();
    $('.thirdgif').show();

    gifTimerTimesUp = setTimeout(function () {
        $('.thirdgif').hide();
        $('.box0, .box1, .box2, .box3').show();
        $('#question').show();
        $('#timer').show();
        countDownReset();
    }, 3000);
}

function hiders() {
    $('.box0, .box1, .box2, .box3').hide();
    $('#question').hide();
    $('#timer').hide();
}

function showers() {
    $('.box0, .box1, .box2, .box3').show();
    $('#question').show();
    $('#timer').show();
}

function clearGifTimers() {
    clearInterval(gifTimerCorrect);
    clearInterval(gifTimerIncorrect);
    clearInterval(gifTimerTimesUp);
}

function hideGifs() {
    $('.secondgif').hide();
    $('.loadergif').hide();
    $('.thirdgif').hide();
}

function hideBoxes () {
    $('.box0, .box1, .box2, .box3').hide();
}

function showBoxes () {
    $('.box0, .box1, .box2, .box3').show();
}
