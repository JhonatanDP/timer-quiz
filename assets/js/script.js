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
var userWrongCounter = 0;
var userCorrectAnswer;
var timeLeft = 5;

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

var questionList = document.getElementById("ul-list");
var startButton = document.getElementById("btn");
var listEl = document.createElement("ul");
var questionSwitch = document.getElementById("question-change");
var listPosted = document.getElementById("list");
var deleteStartButton = document.getElementById("summit");
var a = 0;
var activeQuestion;

var buildQuestion = function (){

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
};

var checkAnswer = function (){
    var buttonEl0 = document.getElementById("0");
    var buttonEl1 = document.getElementById("1");
    var buttonEl2 = document.getElementById("2");
    var buttonEl3 = document.getElementById("3");

    buttonEl0.addEventListener("click", function(){
        

    });




};

    
    
//     for (var i = 0; i < userQuestions.length-1; i++) {
//         var userSelection = document.createElement('li');
//         var answerButton = document.createElement("button");
//         userSelection.innerHTML = userQuestions[i].answers[i];
//         startButton.innerHTML = userQuestions[i].answers[i];
//         userSelection.setAttribute('style','display: block;');
//         userSelection.appendChild(answerButton);
//         listEl.appendChild(userSelection);
//      }
// questionList.appendChild(listEl);

    










// var questionList = document.getElementById("ol-list");
// var listPosted = document.getElementById("list");
// var buttonAnswers = document.createElement("button");



// buttonAnswers.innerHTML = "TEST" ;
// li1.appendChild(buttonAnswers);
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// li1.setAttribute("style", "align-items: left; list-style: none;");
// document.getElementById("question-change").innerHTML = (userQuestions[0].question) ;




// for (var i = 0; i < userQuestions.length; i++){
//     console.log(userQuestions[i].question);
// var questionChanged = document.getElementById("question-change");

// }

// };

// for (var i = 0; i < userQuestions.length; i++){
// questionList.removeChild(listPosted);
// questionList.appendChild(listEl);
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// }
    
// };



document.getElementById("summit").addEventListener("click", startCounter);
document.getElementById("summit").addEventListener("click", buildQuestion);


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