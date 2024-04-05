const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionContainerElement = document.getElementById('ques_box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('ans_but')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who invented the Computer?',
    answers: [
      { text: 'Charles Babbage', correct: true },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Thomas Edison', correct: false },
      { text: 'Benjamin Franklin', correct: false }
    ]
  },
  {
    question: 'Who invented Internet?',
    answers: [
      { text: 'Mark Zukenberg', correct: false },
      { text: 'Bill gates', correct: false },
      { text: 'Steve Jobs', correct: false },
      { text: 'Tim-Berners-Lee', correct: true }
    ]
  },
  {
    question: 'Who invented the printing press?',
    answers: [
      { text: 'Benjamin Franklin', correct: false },
      { text: 'James Watt', correct: false },
      { text: 'Johannes Gutenberg', correct: true },
      { text: 'Tim Berners-Lee', correct: false }
    ]
  },
  {
    question: 'Who invented the microscope?',
    answers: [
      { text: 'Antonie van Leeuwenhoek', correct: true },
      { text: 'Thomas Edison', correct: false },
      { text: 'Louis Daguerre', correct: false },
      { text: 'ALexander Graham Bell', correct: false }
    ]
  },
  {
    question: 'Who invented the camera?',
    answers: [
      { text: 'George Eastman', correct: false },
      { text: 'Thomas Edison', correct: false },
      { text: 'Louis Daguerre', correct: true },
      { text: 'Alexander Graham Bell', correct: false }
    ]
  }
]