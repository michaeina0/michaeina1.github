let level = 1;
let maxLevel = 25;
let difficulty = "easy";
let numberRange = {
    easy: [1, 10],
    medium: [1, 50],
    hard: [1, 100]
};

let currentAnswer;

function generateQuestion() {
    let min = numberRange[difficulty][0] + (level - 1) * 5;
    let max = numberRange[difficulty][1] + (level - 1) * 5;
    let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

    let question = `${num1} ${operator} ${num2}`;
    return {
        question: question,
        answer: eval(question)
    };
}

function startGame() {
    difficulty = document.getElementById("difficulty").value;
    level = 1;
    document.getElementById("menu-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    if (level > maxLevel) {
        document.getElementById("question").textContent = "¡Felicidades! Has completado todos los niveles.";
        document.getElementById("answer").style.display = "none";
        document.getElementById("result").style.display = "none";
        return;
    }

    let { question, answer } = generateQuestion();
    document.getElementById("question").textContent = `Nivel ${level}: ${question}`;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
    currentAnswer = answer;
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById("answer").value);
    if (userAnswer === currentAnswer) {
        document.getElementById("result").textContent = "¡Correcto!";
        level++;
    } else {
        document.getElementById("result").textContent = `¡Incorrecto! La respuesta correcta es ${currentAnswer}`;
    }
    setTimeout(nextQuestion, 1000);
}
