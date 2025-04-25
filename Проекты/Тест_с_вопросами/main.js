const questions = [
  {
    question: 'Что такое переменная в JavaScript?',
    choices: ['Тип данных', 'Место для хранения значения', 'Массив', 'Объект'],
    correctAnswer: 1,
  },
  {
    question:
      'Какой метод используется для добавления элемента в конец массива?',
    choices: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAnswer: 0,
  },
  {
    question:
      'Какой оператор используется для сравнения значений в JavaScript?',
    choices: ['=', '==', '===', '!='],
    correctAnswer: 1,
  },
  {
    question: 'Какую функцию нужно вызвать для преобразования строки в число?',
    choices: ['parseInt()', 'parseFloat()', 'Number()', 'String()'],
    correctAnswer: 0,
  },
  {
    question: 'Как объявить функцию в JavaScript?',
    choices: [
      'function myFunction()',
      'def myFunction()',
      'fun myFunction()',
      'function = myFunction()',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Что такое замыкание в JavaScript?',
    choices: [
      'Пара функций, одна из которых вызывает другую',
      'Функция, которая возвращает другие функции',
      'Функция с доступом к своей внешней области видимости',
      'Невозможность переменной выйти за пределы функции',
    ],
    correctAnswer: 2,
  },
  {
    question: 'Что делает метод `map()` в JavaScript?',
    choices: [
      'Возвращает новый массив, изменяя каждый элемент массива',
      'Возвращает новый массив, не изменяя исходный',
      'Извлекает элементы массива',
      'Переворачивает массив',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Что такое "this" в JavaScript?',
    choices: [
      'Указатель на объект, к которому принадлежит функция',
      'Ключевое слово для создания объекта',
      'Тип данных',
      'Массив',
    ],
    correctAnswer: 0,
  },
  {
    question:
      'Какой метод используется для добавления элемента в начало массива?',
    choices: ['push()', 'shift()', 'unshift()', 'pop()'],
    correctAnswer: 2,
  },
  {
    question: 'Что такое Promise в JavaScript?',
    choices: [
      'Тип данных',
      'Объект, который представляет результат асинхронной операции',
      'Метод для работы с массивами',
      'Функция для работы с датами',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Как определить, является ли переменная массивом?',
    choices: ['Array.isArray()', 'typeof', 'instanceof Array', 'isArray()'],
    correctAnswer: 0,
  },
  {
    question: 'Что делает метод `reduce()` в JavaScript?',
    choices: [
      'Применяет функцию к каждому элементу массива',
      'Возвращает новый массив с результатами',
      'Применяет функцию для накопления значения на основе элементов массива',
      'Переворачивает массив',
    ],
    correctAnswer: 2,
  },
  {
    question: 'Как можно вызвать метод массива в обратном порядке?',
    choices: ['reverse()', 'shift()', 'pop()', 'unshift()'],
    correctAnswer: 0,
  },
  {
    question: 'Как создать новый объект в JavaScript?',
    choices: [
      'let obj = {};',
      'let obj = new Object();',
      'let obj = Object.create();',
      'Все варианты правильные',
    ],
    correctAnswer: 3,
  },
  {
    question: 'Что такое JSON?',
    choices: [
      'JavaScript Object Notation',
      'Тип данных для обмена данными',
      'Функция для работы с массивами',
      'Метод для работы с объектами',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Что делает оператор "===" в JavaScript?',
    choices: [
      'Сравнивает значения и типы данных',
      'Сравнивает только значения',
      'Сравнивает только типы данных',
      'Ничего не делает',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Как создать объект в JavaScript?',
    choices: [
      'let obj = {};',
      'let obj = new Object();',
      'let obj = Object.create();',
      'Все варианты правильные',
    ],
    correctAnswer: 3,
  },
  {
    question: 'Что такое "strict mode" в JavaScript?',
    choices: [
      'Режим строгого выполнения кода',
      'Режим для работы с функциями',
      'Режим для работы с массивами',
      'Режим для проверки ошибок',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Что делает метод `filter()` в JavaScript?',
    choices: [
      'Отбирает элементы, которые удовлетворяют условию',
      'Применяет функцию к каждому элементу массива',
      'Возвращает новый массив с измененными элементами',
      'Переворачивает массив',
    ],
    correctAnswer: 0,
  },
  {
    question:
      'Как создать новый массив из существующего массива, увеличив каждый его элемент на 1?',
    choices: ['map()', 'reduce()', 'filter()', 'forEach()'],
    correctAnswer: 0,
  },
  {
    question: 'Какой метод используется для сортировки массива в JavaScript?',
    choices: ['sort()', 'order()', 'arrange()', 'shuffle()'],
    correctAnswer: 0,
  },
  {
    question: 'Что такое hoisting в JavaScript?',
    choices: [
      'Подъем переменных и функций в начало их области видимости',
      'Ошибки при вызове функций',
      'Неопределенные переменные',
      'Объекты с динамическими свойствами',
    ],
    correctAnswer: 0,
  },
]

let currentQuestionIndex = 0;
let selectedAnswerIndex = null;
let isAnswerGiven = false;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;

const btn = document.getElementById('btn');
const questionText = document.querySelector('.container > .question');
const choicesList = document.querySelector('.container > .choice__list');
const resultDisplay = document.getElementById('resalt');

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function displayCurrentQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionTextContent = currentQuestion.question;
  const choices = currentQuestion.choices;

  questionText.textContent = questionTextContent;
  choicesList.innerHTML = '';

  choices.forEach((choice, index) => {
    const li = document.createElement('li');
    li.classList.add('choice__li');
    li.innerHTML = `<input class="inputs" type="radio" name="choice" value="${index}"> ${choice}`;
    choicesList.appendChild(li);
  });

  const radioButtons = document.querySelectorAll('.inputs');
  radioButtons.forEach(el => el.addEventListener('change', function () {
    if (el.checked) {
      isAnswerGiven = true;
      selectedAnswerIndex = el.value;
      btn.style.pointerEvents = 'auto';
    }
  }));

  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  console.log('Правильный ответ: ' + correctAnswer);
}

function startQuiz() {
  shuffleArray(questions);
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  wrongAnswersCount = 0;
  btn.textContent = 'Следующий вопрос';
  resalt.textContent = '';
  displayCurrentQuestion();
}

btn.textContent = 'Начать';

btn.addEventListener('click', function () {

  if (currentQuestionIndex < questions.length) {
    if (btn.textContent === 'Начать') {
      startQuiz();
      return;
    }

    if (!isAnswerGiven) {
      console.log('Не выбрано ни одного ответа!');
      resultDisplay.textContent = 'Не выбрано ни одного ответа!';
      btn.style.pointerEvents = 'none';
      return;
    }

    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
    if (selectedAnswerIndex == correctAnswerIndex) {
      correctAnswersCount++;
    } else {
      wrongAnswersCount++;
    }

    isAnswerGiven = false;
    currentQuestionIndex++;
    resultDisplay.textContent = `${currentQuestionIndex} из ${questions.length}`;


    if (currentQuestionIndex < questions.length) {
      displayCurrentQuestion();
    } else {
      choicesList.innerHTML = '';
      questionText.textContent = 'Результат';
      resultDisplay.textContent = `Правильных ответов: ${correctAnswersCount}. Неправильных ответов: ${wrongAnswersCount}.`;
      btn.textContent = 'Начать сначала';
    }
  } else {
    // Сброс для новой викторины
    startQuiz();
  }
});


