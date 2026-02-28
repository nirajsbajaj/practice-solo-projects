// QUESTION SECION
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("strt-btn");

//QUIZ SECTION
const quizScreen = document.getElementById("quiz-screen");

const questionText = document.getElementById("question-text");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");

const answersSection = document.getElementById("answer-section");

const progressBar = document.getElementById("progress");

//END SCREEN
const endScreen = document.getElementById("end-screen");

const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");

const resultMessage = document.getElementById("result-message");

const restartButton = document.getElementById("restart-btn");

// QUIZ QUESTIONS

const quizQuestions = [
    {
        question : "You can't stop people __________ what they want.",
        answers: [
            { text: "doing", correct: true },
            { text: "do", correct: false },
            { text: "to do", correct: false },
            { text: "from doing", correct: true }
        ]
    },
    {
        question : "I'd better go now. I promised __________ late.",
        answers: [
            { text: "not being", correct: false },
            { text: "not to be", correct: true },
            { text: "to not be", correct: false },
            { text: "I wouldn't be", correct: true }
        ]
    },
    {
        question : "Do you want __________ with you or do you want to go alone?",
        answers: [
            { text: "me coming", correct: false },
            { text: "me to come", correct: true },
            { text: "that I come", correct: false },
            { text: "that I will come", correct: true }
        ]
    },
    {
        question : "I know I locked the door. I clearly remember __________ it.",
        answers: [
            { text: "locking", correct: true },
            { text: "to lock", correct: false },
            { text: "to have locked", correct: false }
        ]
    },
    {
        question : "She tried to be serious, but she couldn't help __________ .",
        answers: [
            { text: "laughing", correct: true },
            { text: "to laugh", correct: false },
            { text: "that she laughed", correct: false },
            { text: "laugh", correct: false }
        ]
    },
    {
        question : "Paul lives in Berlin now. He likes __________ there.",
        answers: [
            { text: "living", correct: true },
            { text: "to live", correct: false }
        ]
    },
    {
        question : "It's not my favourite job, but I like __________ the kitchen as often as possible.",
        answers: [
            { text: "cleaning", correct: false },
            { text: "clean", correct: false },
            { text: "to clean", correct: true },
            { text: "that I clean", correct: false }
        ]
    },
    {
        question : "I'm tired. I'd rather __________ out this evening, if you don't mind.",
        answers: [
            { text: "not going", correct: false },
            { text: "no to go", correct: false },
            { text: "don't go", correct: false },
            { text: "not go", correct: true }
        ]
    },
    {
        question : "I'd rather __________ anyone what I said.",
        answers: [
            { text: "you don't tell", correct: false },
            { text: "not you tell", correct: false },
            { text: "you didn't tell", correct: true },
            { text: "you wouldn't tell", correct: false }
        ]
    },
    {
        question : "Are you looking forward __________ on holiday?",
        answers: [
            { text: "going", correct: false },
            { text: "to go", correct: false },
            { text: "to going", correct: true },
            { text: "that you go", correct: false }
        ]
    },
    {
        question : "When Lisa first came to Britain, she wasn't used __________ on the left.",
        answers: [
            { text: "driving", correct: false },
            { text: "to driving", correct: true },
            { text: "to drive", correct: true },
            { text: "drive", correct: true }
        ]
    },
    {
        question : "I'm thinking __________ a house. Do you think that's a good idea?",
        answers: [
            { text: "to buy", correct: false },
            { text: "of to buy", correct: false },
            { text: "of buying", correct: true },
            { text: "about buying", correct: true }
        ]
    },
    {
        question : "I had no trouble __________ a place to stay. In fact it was surprisingly easy.",
        answers: [
            { text: "find", correct: false },
            { text: "found", correct: false },
            { text: "to find", correct: false },
            { text: "finding", correct: true }
        ]
    },
    {
        question : "I called the restaurant __________ a table.",
        answers: [
            { text: "for reserve", correct: false },
            { text: "to reserve", correct: true },
            { text: "for reserving", correct: false },
            { text: "for to reserve", correct: false }
        ]
    },
    {
        question : "James doesn't speak clearly __________ .",
        answers: [
            { text: "It is hard to understand him", correct: true },
            { text: "He is hard to understand", correct: true },
            { text: "He is hard to understand him", correct: false }
        ]
    },
    {
        question : "The path was icy, so we walked very carefully. We were afraid of __________ .",
        answers: [
            { text: "of failing", correct: true },
            { text: "from failing", correct: false },
            { text: "to fail", correct: false },
            { text: "to failing", correct: false }
        ]
    },
    {
        question : "I didn't hear you __________ in. You must have been very quiet.",
        answers: [
            { text: "come", correct: true },
            { text: "to come", correct: false },
            { text: "came", correct: false }
        ]
    },
    {
        question : "__________ a hotel, we looked for somewhere to eat.",
        answers: [
            { text: "Finding", correct: false },
            { text: "After finding", correct: true },
            { text: "Having found", correct: true },
            { text: "We found", correct: false }
        ]
    }
]

// QUIZ STATE VARS

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// EVEN LISTENERS

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    // console.log("Start Button Here!");
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}

function showQuestion() {
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = ( currentQuestionIndex/quizQuestions.length ) * 100;

    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answersSection.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answersSection.appendChild(button);
    });
}

function selectAnswer(event) {
    if(answersDisabled) return;

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersSection.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000)
}

function showResults() {
    quizScreen.classList.remove("active");
    endScreen.classList.add("active");

    finalScoreSpan.textContent = score;
    const percentage = (score/quizQuestions.length) * 100;

    if(percentage === 100) {
        resultMessage.textContent = "Perfect! You're a genius!";
    } else if(percentage >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!";
    } else if(percentage >= 60) {
        resultMessage.textContent = "Good effort! Keep Learning!";
    } else if(percentage >= 40) {
        resultMessage.textContent = "Not bad! Try again to improve!";
    }else {
        resultMessage.textContent = "Keep studying! You'll get better!";
    }
}

function restartQuiz() {
    endScreen.classList.remove("active");
    startQuiz();
}