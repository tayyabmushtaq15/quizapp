const questions = [
    {
        question: "What is largest animal in the world",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Computer is a ....... word",
        answers: [
            {text: "Latin", correct: true},
            {text: "English", correct: false},
            {text: "French", correct: false},
            {text: "German", correct: false},
        ]

    },
    {
        question: "Pakistan independance day is",
        answers: [
            {text: "14 August 1937", correct: false},
            {text: "14 August 1957", correct: false},
            {text: "14 August 1947", correct: true},
            {text: "14 August 1967", correct: false},
        ]
    },
    {
        question: "HTML Stands for",
        answers: [
            {text: "Hyper transport multi language", correct: false},
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hiper Text Markup Language", correct: false},
            {text: "Hipher Text Marked Language", correct: false},
        ]
    },
    {
        question: "PTCL Stands for",
        answers: [
            {text: "Pakistan Transport Comppany Ltd", correct: false},
            {text: "Pakistan Telecome Company Limited", correct: true},
            {text: "Pakistan Telecome Authority", correct: false},
            {text: "Pakistan Transport company Logistic", correct: false},
        ]
    },
    {
        question: "Javascript is also knows as",
        answers: [
            {text: "TypeScript", correct: false},
            {text: "ES6", correct: true},
            {text: "Ekima", correct: false},
            {text: "Script based Program", correct: false},
        ]
    },
    {
        question: "HTML Stands for",
        answers: [
            {text: "Hyper transport multi language", correct: false},
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hiper Text Markup Language", correct: false},
            {text: "Hipher Text Marked Language", correct: false},
        ]
    },
    {
        question: "Javascript is also knows as",
        answers: [
            {text: "TypeScript", correct: false},
            {text: "ES6", correct: true},
            {text: "Ekima", correct: false},
            {text: "Script based Program", correct: false},
        ]
    },
    {
        question: "Javascript is also knows as",
        answers: [
            {text: "TypeScript", correct: false},
            {text: "ES6", correct: true},
            {text: "Ekima", correct: false},
            {text: "Script based Program", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);        
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});
startQuiz();









