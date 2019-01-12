//Timer stuffs

var time = 60;
var intervalId;
var clockRunning = false;

function start () {
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
};

function count() {
    time--;
    $('#timer').text(time);
    
    if (time == 0) {
        $('.container-game').hide();
        $('.container-timeout').show();        
    };
};

function stop () {
    clearInterval(intervalId);
    clockRunning = false;
};

//Start and hide/show for DOM elements
//Click start shows questions and starts timer
$('#start-button').on("click", start);
$('#start-button').on("click", function() {
    $('#start-button').hide();
});

$('#start-button').on("click", function() {
    $('.container-game').show();
});

//Reload page
$('#reload-button').on("click", function() {
    location.reload();
});

//Click submit button checks the score and alters DOM elements
$('#submit-button').on("click", checker);
$('#submit-button').on("click", stop);
$('#submit-button').on("click", function() {
    $('.container-game').hide();
    $('.container-answers').show();
});

//Count user selection

$('li').on('click', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});

//Check answers & score

function checker() {
    var correctAnswers = 0;

    //grab user selection
    var q1 = $('.q1.active').attr('data-value');
    var q2 = $('.q2.active').attr('data-value');
    var q3 = $('.q3.active').attr('data-value');
    var q4 = $('.q4.active').attr('data-value');
    var q5 = $('.q5.active').attr('data-value');
    
    //correct answers
    var a1 = "WWII";
    var a2 = "6";
    var a3 = "Captain America: Civil War";
    var a4 = "Asgard";
    var a5 = "False";
    
    //calculate score
    if (q1 == a1) {
        correctAnswers++;
    }
    if (q2 == a2) {
        correctAnswers++;
    }
    if (q3 == a3) {
        correctAnswers++;
    }
    if (q4 == a4) {
        correctAnswers++;
    }
    if (q5 == a5) {
        correctAnswers++;
    }

    //convert to percent and store
    var score = correctAnswers/5 * 100;

    $('#score').text(score);
};
