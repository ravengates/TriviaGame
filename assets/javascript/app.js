// when website first opens, only Trivia Game and Start Button should show
// hide Timer, Form-( Trivia Questions and done Button), and Results Page

//Once Start Button is clicked 
//timer is set for 30 seconds and begins counting down-- when at 0 -shows results
//Triva Questions are shown// only able to chose one


//Once Timer is Out OR when done clicked
//Result Page is shown 



// when the website first opens ////Hide Function
////hide timer, question form, and result page
$(document).ready(function() {
    $('.meangirl-ques').hide();
    $('#timer').hide();
    $('.results').hide();
   
   

    //variables needed------------------------------------
var seconds = 30;
var correctQuestions = 0;
var wrongQuestions = 0;
var unAnswered= 0;
var intervalId;


//FUNCTIONS-----------------------------------------------

//show functions.
function unHide(){
    $('.meangirl-ques').show();
    $('#timer').show();
    $('#doneBtn').show();
    
}


function startTimer(){
intervalId = setInterval(decrement, 1000);
}

function decrement(){
    seconds--;
    $('#timer').html("" +"Time Remaing!" +" "+ seconds + " " + "seconds");
    if (seconds ===1){
        $('#timer').html("" +"Time Remaing!" +" "+ seconds + " " + "second");
    }
    else if(seconds ===0) {
        $('#startBtn').hide();
    hide();
    allTotals();
    $('.results').show();
    }
}

function clear() {
    clearInterval(intervalId);
}


 
//hide function.
function hide(){
    $('.meangirl-ques').hide();
    $('#timer').hide();
    $('#doneBtn').hide();
       
}

//show totals


function allTotals(){
    $('#results').show();
    questionsNotAnswered = (4-(correctQuestions+wrongQuestions));
    $('#questionsCorrect').text("Correct Answers:" + " " + correctQuestions); 
    $('#questionsWrong').text("Wrong Answers:" + " " + wrongQuestions); 
    $('#questionsNotAnswered').text("Questions Not Answered:" + " " + unAnswered); 
}



//CLICK EVENTS---------------------------------------------

//click start button -- needs to show questions, start timer, intake answers.
$('#startBtn').on('click', function(){
    $('#startBtn').hide();
    unHide(); 
    startTimer();
$('.results').hide();
    
});

//click done button -- needs to hide questions, hide timer, and show results
$('#doneBtn').on('click',function(){
       $('#startBtn').hide();
    hide();
    allTotals();
    $('.results').show();
              
});

/// clicking questions

$('input[type=radio]').on ('change', function(){
    correctQuestions = $('input[value=correct]:checked').length;
    wrongQuestions = $('input[value=wrong]:checked').length;
    unAnswered = (4-(correctQuestions+wrongQuestions));
    });




});