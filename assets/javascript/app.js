// when website first opens, only Trivia Game and Start Button should show
// hide Timer, Form-( Trivia Questions and done Button), and Results Page

//Once Start Button is clicked 
//timer is set for 30 seconds and begins counting down-- when at 0 -shows results
//Triva Questions are shown// only able to chose one


//Once Timer is Out OR when done clicked
//Result Page is shown 

//variables needed------------------------------------
var seconds = 30;
var questionsCorrect = 0;
var questionsWrong = 0;
var questionsNotAnswered= 0;
var intervalId;

// when the website first opens ////Hide Function
////hide timer, question form, and result page
$(document).ready(function() {
    $('#questions').hide();
    $('#timer').hide();
    $('#results').hide();


//FUNCTIONS-----------------------------------------------

//show functions.
function unHide(){
    $('#questions').show();
    $('#timer').show();

}
 
//hide function.
function hide(){
    $('#questions').hide();
    $('#timer').hide();
       
}

//Show Results function 
function showResults(){
    $('#results').show();
    
}

//TIMER FUNCTIONS-----------------------------------------


//CLICK EVENTS---------------------------------------------

//click start button --
$('#startBtn').on('click', function(){
    $('#startBtn').hide();
    unHide();
    

});

//click done button
$('#doneBtn').on('click',function(){
    $('#doneBtn').hide();
    hide();
    //display results
    
});




});


