var userQuestions = [
    {
        question: "Commonly used data types Do not include:",
        answers: {
                   a: "strings",
                   b: "booleans",
                   c: "alerts",
                   d: "numbers"
                 },
        correctAnswer: "c"
    },
    {
        question: "The condition in an if / else statement enclosed with __________.",
        answers: {
                   a: "quotes",
                   b: "curly brackets",
                   c: "parenthesis",
                   d: "square brackets"
                 },
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be be used to store ________.",
        answers: {
                   a: "numbers and strings",
                   b: "other arrays",
                   c: "booleans",
                   d: "all the above"
                 },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: {
                   a: "commas",
                   b: "curly brackets",
                   c: "quotes",
                   d: "paranthesis"
                 },
        correctAnswer: "c"
    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        answers: {
                   a: "JavaScript",
                   b: "terminal/bash",
                   c: "for loops",
                   d: "console.log"
                 },
        correctAnswer: "d"
    }  
];

var userScore = 0;
var userWrongAnswer;
var userWrongCounter = 0;
var userCorrectAnswer;
var timeLeft = 30;

debugger;

var startQuiz = function (){
    startCounter();
    showQuestion();
    };


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

var showQuestion = function (){
    debugger;
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var questionList = document.getElementById("ol-list");
var listPosted = document.getElementById("list");
var buttonAnswers = document.createElement("button");
questionList.removeChild(listPosted);
questionList.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);

for (var i = 0; i < userQuestions.length; i++){
questionList.removeChild(listPosted);
questionList.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);


   
    
     

}
    
};
showQuestion();




document.getElementById("summit").addEventListener("click", startQuiz);


// var body = document.body;
// var h1El = document.createElement("h1");
// var infoEl = document.createElement("div");
// var imgEl = document.createElement("img");
// var kittenEl = document.createElement("div");
// var nameEl = document.createElement("div");
// var favoriteEl = document.createElement("div");
// // Create ordered list element
// var listEl = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// h1El.textContent = "Welcome to my page";
// kittenEl.textContent = "This is my kitten 🐱.";
// nameEl.textContent = "His name is Jax.";
// favoriteEl.textContent = "My favorite foods are:";

// body.appendChild(h1El);
// body.appendChild(infoEl);
// infoEl.appendChild(imgEl);
// infoEl.appendChild(kittenEl);
// infoEl.appendChild(nameEl);
// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// // Append ordered list 
// favoriteEl.appendChild(listEl);

// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// imgEl.setAttribute("src", "http://placekitten.com/200/300");
// nameEl.setAttribute("style", "font-size:25px; text-align:center;");
// kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
// favoriteEl.setAttribute("style", "font-size:20px;");