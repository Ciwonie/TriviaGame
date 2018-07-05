var questionCounter = 0;
var answerCounter = 0;
var correct = 0;
var incorrect = 0;
var attempted = 0;
var seconds = 20;
var timeInterval;

var trivia = [
    {
        question: 'Batman lives in ____.',
        choices: ['Arkham', 'Smallville', 'Gotham', 'Sin City'],
        answer: 'Gotham'
    },
    {
        question: 'Nephophobia is the fear of ____.',
        choices: ['Heights', 'Glass', 'Textbooks', 'Clouds'],
        answer: 'Clouds'
    },
    {
        question: 'In Monopoly, you collect ____ for finishing second in a beauty contest.',
        choices: ['$50', '$100', '$200', '$10'],
        answer: '$10'
    },
    {
        question: 'Okunoshima is an island off of Japan overrun with ____.',
        choices: ['Deer', 'Cats', 'Rats', 'Rabbits'],
        answer: 'Rabbits'
    }
];

var total = trivia.length;


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
    if ($(this).attr('data-answer') === 'true') {
        alert('nice');
        correct++;
        attempted++;
        countDownReset()
        clearAttr()
        possibleAnswers();
        questionCreator();
        finalPage();
    }
    else {
        alert('wrong')
        incorrect++;
        attempted++;
        countDownReset()
        clearAttr()
        possibleAnswers();
        questionCreator();
        finalPage();
    }
});

function finalPage() {
    if (attempted === total) {
        alert('game over');
        $('.box').remove();
        $('#question').remove();
        $('#timer').remove();
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
            alert('Times up!')
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


function reset() {
    //need to reset questionCounter
    //reset the html
}

// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//   }

//   //  The decrement function.
//   function decrement() {

//     //  Decrease number by one.
//     number--;

//     //  Show the number in the #show-number tag.
//     $("#show-number").html("<h2>" + number + "</h2>");


//     //  Once number hits zero...
//     if (number === 0) {

//       //  ...run the stop function.
//       stop();

//       //  Alert the user that time is up.
//       alert("Time Up!");
//     }
//   }

