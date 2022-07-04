var userQuestions = [
    {
        question: "Commonly used data types Do not include:",
        answers: {
                   0: "1. strings",
                   1: "2. booleans",
                   2: "3. alerts",
                   3: "4. numbers"
                 },
        correctAnswer: "2"
    },
    {
        question: "The condition in an if / else statement enclosed with __________.",
        answers: {
                   0: "1. quotes",
                   1: "2. curly brackets",
                   2: "3. parenthesis",
                   3: "4. square brackets"
                 },
        correctAnswer: "2"
    },
    {
        question: "Arrays in JavaScript can be be used to store ________.",
        answers: {
                   0: "1. numbers and strings",
                   1: "2. other arrays",
                   2: "3. booleans",
                   3: "4. all the above"
                 },
        correctAnswer: "2"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: {
                   0: "1. commas",
                   1: "2. curly brackets",
                   2: "3. quotes",
                   3: "4. paranthesis"
                 },
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        answers: {
                   0: "1. JavaScript",
                   1: "2. terminal/bash",
                   2: "3. for loops",
                   3: "4. console.log"
                 },
        correctAnswer: "2"
    }  
];

var userScore = 0;
var userWrongAnswer;
var questionIndex = 0;
var userCorrectAnswer = 0 
var timeLeft = 75;

var timer = document.querySelector("#timer");
var scoreLink = document.querySelector("#scorelink");
var principalContent = document.querySelector("#principal-content");
var questionSwitch = document.getElementById("#question-change");
var quizQuestion = document.querySelector("#quizquestion");
var userSelection = document.querySelector("#userselection");
var userScore = document.querySelector("#userscore");
var userHighScore = document.querySelector("#userhighscores");
var score = document.getElementById("#userhighscores");


//Counter function
var startCounter = function() {
var Counter = setInterval(function () {
    timeLeft = timeLeft - userWrongCounter;
    if (timeLeft >= 0) {
      document.getElementById("time").innerHTML = timeLeft;
        timeLeft--;


        }
    else {
        clearInterval(timeInterval);
        quizResult();
    }
    }, 1000);
};
//End counter Function

var buildQuestion = function(){

questionList.removeChild(listPosted);
startButton.removeChild(deleteStartButton);
listEl.setAttribute('style', 'padding:0; margin:0;list-style: none;text-align:left;');
listEl.setAttribute('id','list');
questionSwitch.setAttribute('style', 'font-size:25px; text-align:left;');

    showQuestion(); 
};

var showQuestion = function(){

    questionSwitch.innerHTML = userQuestions[a].question;
    questionSwitch.setAttribute('style', 'font-size:25px; margin-top:  120px; text-align:left;');
    activeQuestion = questionSwitch.innerHTML;
    showAnswers();
};  
var showAnswers = function(){

    for (var i = 0; i < userQuestions.length-1; i++){

    var userSelection = document.createElement('li');
    var answerButton = document.createElement("button")
    var t = userQuestions[a].answers[i];
   answerButton.innerHTML = t;
   answerButton.setAttribute('id', [i]);
   answerButton.setAttribute('class','option-button');
    userSelection.appendChild(answerButton);
    listEl.appendChild(userSelection);
    }
    questionList.appendChild(listEl);
    buttonPressed();
};
var buttonPressed = function(){

    var buttonEl0 = document.getElementById("0");
    var buttonEl1 = document.getElementById("1");
    var buttonEl2 = document.getElementById("2");
    var buttonEl3 = document.getElementById("3");

    buttonEl0.addEventListener("click", function(){
    pressedButton = 0;
        });
    buttonEl1.addEventListener("click", function(){
    pressedButton = 1;
        });
    buttonEl2.addEventListener("click", function(){
    pressedButton = 2;
        });    
    buttonEl3.addEventListener("click", function(){
    pressedButton = 3;
        });
};
    

var checkAnswer = function(){

};

// document.getElementById("summit").addEventListener("click", startCounter);
// document.getElementById("summit").addEventListener("click", buildQuestion);
