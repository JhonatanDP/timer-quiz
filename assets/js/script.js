var userQuestions = [
    {
        question: "Commonly used data types Do not include:",
        answers: {
                   0: "strings",
                   1: "booleans",
                   2: "alerts",
                   3: "numbers"
                 },
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if / else statement enclosed with __________.",
        answers: {
                   0: "quotes",
                   1: "curly brackets",
                   2: "parenthesis",
                   3: "square brackets"
                 },
        correctAnswer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be be used to store ________.",
        answers: {
                   0: "numbers and strings",
                   1: "other arrays",
                   2: "booleans",
                   3: "all the above"
                 },
        correctAnswer: "all the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: {
                   0: "commas",
                   1: "curly brackets",
                   2: "quotes",
                   3: "paranthesis"
                 },
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        answers: {
                   0: "JavaScript",
                   1: "terminal/bash",
                   2: "for loops",
                   3: "console.log"
                 },
        correctAnswer: "console.log"
    }  
];

var userWrongAnswer;
var questionIndex = 0;
var userCorrectAnswer = 0 
var timeLeft = 75;
var question;
var answer1,answer2,answer3,answer4;
var previousScores;
var questionAnswerCorrect;
var selectionArray = [];
var buttonArray = [];
var questionAnswer;
totalQuestions = userQuestions.length;
var timer = document.querySelector("#timer");
var scoreLink = document.querySelector("scorelink");
var principalContent = document.querySelector("#principal-content");
var questionSwitch = document.getElementById("question-change");
var quizQuestion = document.querySelector("#quizquestion");
var userSelection = document.querySelector("#userselection");
var userScore = document.querySelector("#userscore");
var userHighScore = document.querySelector("#userhighscores");
var score = document.getElementById("#userhighscores");
var startButton = document.getElementById("startquiz");


for(var i = 0; i < 4; i++){
    var buttonDiv = document.createElement("div");
    var selectionButtons = document.createElement("button");
    selectionButtons.setAttribute("data-index", i);
    selectionButtons.setAttribute("class","btnn");
    selectionArray.push(buttonDiv);
    buttonArray.push(selectionButtons);
}

var rightWrong = document.createElement("p");
rightWrong.setAttribute("class", "right-wrong");
userSelection.appendChild(rightWrong);


function startChallenge(){
    startTimer();
    buildQuestion();
}

function startTimer(){
    
    var timeInterval = setInterval(function(){

        timeLeft--;

        timer.textContent = "Time : "+timeLeft;
        
        if(timeLeft <= 0 || (questionIndex > totalQuestions-1)){
            
            userSelection.style.display = "none";
            quizQuestion.style.display = "none";
            showResult();
            clearInterval(timeInterval);
            timer.textContent = "";
        }

    },1000);
}
var buildQuestion = function(){

    questionSwitch.style.display = "none";
    principalContent.style.display= "none";
    quizQuestion.style.display = "none";

    if(questionIndex > totalQuestions -1){
        return;
    }
    else{
        questionAnswerCorrect = userQuestions[questionIndex].correctAnswer;

        questionSwitch.innerHTML = userQuestions[questionIndex].question;
        questionSwitch.setAttribute("class","textleft;");
        questionSwitch.style.display="block";

        for (var a = 0; a < 4; a++){
        var index = buttonArray[a].getAttribute("data-index");
        buttonArray[a].textContent = (+index+1) +". "+userQuestions[questionIndex].answers[index];
        selectionArray[a].appendChild(buttonArray[a]);
        quizQuestion.appendChild(selectionArray[a]);

        }

    }
    quizQuestion.setAttribute("style","text-align:left");
    quizQuestion.style.display = "block";
}

quizQuestion.addEventListener("click",function(event){

        var segment = event.target;
        var selectedAnswer = segment.textContent;
        var options = selectedAnswer.substring(3, selectedAnswer.length);

        if (options === questionAnswerCorrect){
            userCorrectAnswer++;
            userSelection.style.display = "block";
            rightWrong.textContent = "correct!";

            setTimeout(function(){
                rightWrong.textContent="";

            },500);
        }
        else {
            timeLeft -= 10;
            rightWrong.textContent = "Wrong!";

            setTimeout(function(){
                rightWrong.textContent="";
            },500);
        }
        questionIndex++;
        buildQuestion();

});

function showResult() {
    questionSwitch.innerHTML = "Challenge Completed!";
    questionSwitch.style.display= "block";

    var show = document.createElement("p");
    show.textContent = "You score is : "+ userCorrectAnswer;
    userScore.appendChild(show);

    var form = document.createElement("form");
    var label = document.createElement("label");
    label.textContent = "Enter you name : ";

    var textInput = document.createElement("input");
    textInput.setAttribute("id","nameInput");
    textInput.setAttribute("class","textinput");

    var summitScore = document.createElement("button");
    summitScore.setAttribute("class", "btn");
    summitScore.textContent = "Summit";

    form.appendChild(label);
    form.appendChild(textInput);
    form.appendChild(summitScore);

    userScore.appendChild(form);

    summitScore.addEventListener("click",saveScores);
}

function saveScores(Event){

    event.preventDefault();
    var userName = document.querySelector("#nameInput").ariaValueMax.trim();

    if (userName === null || userName === ''){
        alert("Please enter your name");
        return;
    }

    var user = {
        name: userName,
        score: correct
    }

    console.log(user);

    previousScores = JSON.parse(localStorage.getItem("previousScore"));

    if(previousScores){
        previousScores.push(user);
    }
    else {
        previousScores = [user];
    }

    localStorage.setItem("previousScores",JSON.stringify(previousScores));

    showScores();
}

function showScores(){

    questionSwitch.innerHTML = "userhighscores";
    questionSwitch.setAttribute("class","userhighdcores");





}

startButton.addEventListener("click",startChallenge);
