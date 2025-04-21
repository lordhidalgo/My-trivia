const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Madrid", "Roma", "París", "Berlin"],
    answer: "París"
  },
  {
    question: "¿Quién escribió 'Cien años de soledad'?",
    options: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa", "Julio Cortázar"],
    answer: "Gabriel García Márquez"
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
    answer: "Pacífico"
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1965", "1969", "1972", "1959"],
    answer: "1969"
  },
  {
    question: "¿Quién pintó la Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "¿Qué gas es necesario para la fotosíntesis?",
    options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Metano"],
    answer: "Dióxido de carbono"
  },
  {
    question: "¿En qué continente se encuentra Egipto?",
    options: ["Asia", "Europa", "África", "Oceanía"],
    answer: "África"
  },
  {
    question: "¿Cuántos planetas hay en el sistema solar?",
    options: ["7", "8", "9", "10"],
    answer: "8"
  },
  {
    question: "¿Cuál es el elemento químico con el símbolo O?",
    options: ["Oxígeno", "Oro", "Osmio", "Ozono"],
    answer: "Oxígeno"
  },
  {
    question: "¿Qué significa la palabra 'Hola' en español?",
    options: ["Adiós", "Bienvenida", "Saludos", "Despedida"],
    answer: "Saludos"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;

// Elementos del DOM
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const resultMessage = document.getElementById("result-message");

const correctSound = new Audio('https://www.soundjay.com/button/beep-07.wav');  // Sonido para respuesta correcta
const incorrectSound = new Audio('https://www.soundjay.com/button/beep-09.wav');  // Sonido para respuesta incorrecta

// Mostrar la pregunta actual
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement("button");
    optionButton.classList.add("option");
    optionButton.textContent = option;
    optionButton.onclick = () => checkAnswer(option);
    optionsElement.appendChild(optionButton);
  });
}

// Comprobar la respuesta seleccionada
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  
  if (selectedOption === currentQuestion.answer) {
    score++;
    correctSound.play();
  } else {
    incorrectSound.play();
  }

  scoreElement.textContent = `Puntaje: ${score} de ${totalQuestions}`;
  nextButton.classList.remove("hidden");
}

// Pasar a la siguiente pregunta
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < totalQuestions) {
    displayQuestion();
    nextButton.classList.add("hidden");
  } else {
    showResult();
  }
});

// Mostrar resultado final
function showResult() {
  resultMessage.textContent = `¡Juego terminado! Obtuviste ${score} de ${totalQuestions} puntos.`;
  resultMessage.classList.remove("hidden");
}

// Inicializar juego
document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
  scoreElement.textContent = `Puntaje: ${score} de ${totalQuestions}`;
});
