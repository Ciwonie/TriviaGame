// Beginning my script by declaring variables and hidding specific elements
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

// My trivia object is where the foundation of my game is stored, ie: questions/choices/answers
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

// These two variables will keep track of trivia's length to help calculate final score at the end
var total = trivia.length;
var percentage;

// First event handler, this will initiate the game when 'Let's Go' is clicked
$('.startButton').on('click', function () {
    $('#timer').text('Time remaining: ' + seconds);
    showBoxes();
    initialize();
    clearAttr();
    possibleAnswers();
    questionCreator();
    countDown();
});

// This function hides the '.startButton' and sets data attributes to the four boxes. 
// The attribute will help the code assign a value to the box based on the object's question
function initialize() {
    $('.startButton').hide();
    for (i = 0; i < 4; i++) {
        $(`.box${i}`).attr('data-number', `${i}`);
    }
}

// This loop goes through the four boxes, checks the attr and assigns specific choice values
// Then assigns an attr of 'true' to the choice that matches the object's answer
function possibleAnswers() {
    for (i = 0; i < 4; i++) {
        $(`[data-number=${i}]`).text(trivia[questionCounter].choices[i])
        if (trivia[questionCounter].choices[i] === trivia[questionCounter].answer) {
            $(`[data-number=${i}]`).attr('data-answer', true);
        }
    }
    unownGenerator()
}

// Assigns an attr of false to the choices that are not the correct answer.  This helps organize what's right/wrong
function clearAttr() {
    for (i = 0; i < trivia.length; i++) {
        $(`[data-number=${i}]`).attr('data-answer', false);
    }
}

// This is NOT dry code. Sorry for the repetition.  Will tidy this up after submission.
// This code helps parse which question should appear to the user in a specific order.
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

// Controls notification of right/wrong and goes through a series of checks
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

// When attempted tries matches total number of questions, this function will run. Prompting users how they performed
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

// My timing interval
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

// Clearing my timing interval
function countDownReset() {
    clearInterval(timeInterval);
    seconds = 20;
    $('#timer').text('Time remaining: ' + seconds);
    countDown();
}

// another event handler for restarting the game
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

// This function prepends unowns, a pokemon that represents every letter of the alphabet. 
// With this generator, a random unown appears prepended with every question 
function unownGenerator() {
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    letter = Math.round(Math.random() * 26);
    unown = 'unown' + alphabet[letter] + ' ';
    $('.box0, .box1, .box2, .box3').prepend(unown);
}

// Functions below control hiding and showing different aspects of the DOM based on user inputs
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
