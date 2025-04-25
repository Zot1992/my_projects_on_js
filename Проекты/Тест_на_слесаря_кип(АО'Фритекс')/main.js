const questions = [
    {
        question: 'Какого бесконтактного датчика положения из представленных не бывает?',
        choices: ['Оптический', 'Рекурсивный', 'Емкостной', 'Индукционный'],
        correctAnswer: 1,
    },
    {
        question:
            'Какого типа термопар из представленных не бывает по МЭК?',
        choices: ['X', 'J', 'N', 'R'],
        correctAnswer: 0,
    },
    {
        question:
            ' Какой прибор называют пирометром?',
        choices:
            ['Пирометром называют прибор для определения широты и долготы',
                'Пирометром называют прибор для бесконтактного измерения температуры',
                'Пирометром называют прибор для для дистанционного измерения количества золота в сплаве',
                'Пирометром называют прибор для контактного измерения содержания серы в углеродистой стали'],
        correctAnswer: 1,
    },
    {
        question: 'Что понимается под шаговым электродвигателем?',
        choices: ['Двигатель, способный делать строго определённое число оборотов в системах сервоприводов',
            'Двигатель, способный надёжно работать во взрывоопасных и агрессивных средах, запчасти к которому имеются в шаговой доступности',
            'Двигатель любого устройства, снабжённый шагающей платформой',
            'Двигатель, который не нуждается в текущем и планово-предупредительном ремонте в течение определённого  (длительного)  периода'],
        correctAnswer: 0,
    },
    {
        question: 'Какой параметр измеряет термопара?',
        choices: [
            'Температуру в жидких, газообразных, вязких средах, а также в твёрдых телах',
            'Внутреннее давление в трубопроводах и технологических аппаратах',
            'Уровень жидкости в резервуаре',
            'Расход жидких компонентов и газов',
        ],
        correctAnswer: 0,
    },
    {
        question: 'Есть ли конструктивные отличия заслонки и задвижки?',
        choices: [
            'Заслонки и задвижки — это исполнительные устройства, не имеющие конструктивных различий',
            'Да, различия есть: корпус заслонки обычно изготавливается из нержавеющей стали, а задвижки — из чугуна или алюминия',
            'Да, различия есть: заслонка перекрывает площадь сечения путём поворота вокруг оси, а задвижка — путём движения затвора, перпендикулярного трубопроводу',
            'Да, различия есть: задвижка перекрывает площадь сечения путём поворота вокруг оси, а заслонка — путём движения затвора, перпендикулярного трубопроводу',
        ],
        correctAnswer: 2,
    },
    {
        question: 'С каким прибором работают термометры сопротивления?',
        choices: [
            'С мостами',
            'С потенциометрами',
            'С электроконтактными манометрами',
            'С мембранными дифманометрами',
        ],
        correctAnswer: 0,
    },
    {
        question: 'В чём состоит основная цель планово-предупредительного ремонта (ППР) средств КИП и А?',
        choices: [
            'Всё перечисленное верно',
            'В правильном и своевременном ведении графика ППР',
            'В надлежащем заполнении паспортов приборов',
            'В своевременной сдаче в госповерку (ведомственную поверку) приборов',
        ],
        correctAnswer: 0,
    },
    {
        question:
            'Слесари КИП и А имеют квалификационные разряды. Для чего они нужны?',
        choices: ['Для того, чтобы назначать наставниками для стажёров и практикантов только слесарей высшей квалификации',
            'Для того, чтобы закрепить за тем или иным работником конкретные средства КИП и А',
            'Для учёта опыта, квалификации и уровня оплаты труда каждого сотрудника службы КИП и А',
            'Для правильной организации работы бригады эксплуатационников КИП и А'],
        correctAnswer: 2,
    },
    {
        question: 'Тензодатчик — это первичный измеритель, действующий на принципе?',
        choices: [
            'Изменения электродвижущей силы при меняющейся температуре или составе агента',
            'Изменения электрического сопротивления при меняющемся силовом давлении, растяжении, кручении',
            'Изменения числа рН при меняющейся щёлочности или кислотности среды',
            'Изменения светимости тела при меняющейся температуре',
        ],
        correctAnswer: 1,
    },
    {
        question: 'Какие операции необходимо производить после ремонта приборов?',
        choices: ['Регулировку и поверку приборов',
            'Проверку герметичности',
            'Монтаж приборов',
            'Чистку от грязи'],
        correctAnswer: 0,
    },
    {
        question: 'Назовите основной инструмент слесаря КИП?',
        choices: [
            'изолента',
            'отвертка',
            'мультиметр',
            'нож',
        ],
        correctAnswer: 2,
    },
    {
        question: 'Что называют предклапаном?',
        choices: ['Предклапаном называют предохранительный клапан, срабатывающий при установленных параметрах',
            'Предклапаном называют предупредительный клапан, который включает систему предупредительной или аварийной сигнализации',
            'Предклапаном называют предметный клапан, который открывается при помпаже компрессора',
            'Предклапаном называют предусмотренный техрегламентом клапан, подающий паровой сигнал к окончанию рабочего дня'],
        correctAnswer: 0,
    },
    {
        question: 'Является ли простокваша ньютоновской жидкостью (подчиняющейся законам И. Ньютона)?',
        choices: [
            'Да, является',
            'Является только в замороженном виде',
            'Измерения приборами расхода можно осуществлять только для ньютоновских жидкостей',
            'Нет, не является',
        ],
        correctAnswer: 3,
    },
    {
        question: 'Как называют на крупном предприятии главного специалиста, руководящего службой КИП и А?',
        choices: [
            'Главный метролог',
            'Главный приборист',
            'Главный поверитель КИП и А',
            'Главный механик',
        ],
        correctAnswer: 0,
    },
]

let currentQuestion = 0;
let currentAnswer = 0;
let quizizzOver = false;
let correctAnswers = 0;
let wrongAnswers = 0;

const btn = document.getElementById('btn');
const questionClass = document.querySelector('.container > .question');
const questionChoiceList = document.querySelector('.container > .choice__list');
const resalt = document.getElementById('resalt');



function shuffleRey(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const g = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[g]] = [arr[g], arr[i]];
    }
}

function displayCurrentQuestion() {
    const question = questions[currentQuestion].question;
    const numberOfChoices = questions[currentQuestion].choices.length;

    questionClass.textContent = question;
    questionChoiceList.innerHTML = '';
    let choice;
    for (let i = 0; i < numberOfChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        const li = document.createElement('li');
        li.classList.add('choice__li');
        li.innerHTML = `<input class="inputs" type="radio" name="choice" value="${i}"> ${choice}`;
        questionChoiceList.appendChild(li);
    }

    const radio = document.querySelectorAll('.inputs');

    radio.forEach(el => el.addEventListener('change', function () {
        (el.checked === true)
            ? (quizizzOver = true,
                currentAnswer = el.value,
                console.log(currentAnswer),
                btn.style.pointerEvents = 'auto')
            : console.log('')
    }))

    const correctAnswer = questions[currentQuestion].correctAnswer;
    console.log('Правильный ответ: ' + correctAnswer);
}

function restart() {
    shuffleRey(questions);
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    btn.textContent = 'Следующий вопрос';
    console.log(questions);
    resalt.textContent = '';
    displayCurrentQuestion();
}

btn.textContent = 'Начать';

console.log(questions);

btn.addEventListener('click', function () {
    if (currentQuestion < questions.length) {
        if (btn.textContent === 'Начать') {
            restart();
            return;
        }

        if (!quizizzOver) {
            console.log('Не выбрано ни одного ответа!');
            resalt.textContent = 'Не выбрано ни одного ответа!';
            btn.style.pointerEvents = 'none';
            return;
        }

        const correctAnswer = questions[currentQuestion].correctAnswer;
        if (currentAnswer == correctAnswer) {
            correctAnswers++;
            console.log('Правильно: ' + correctAnswers);
        } else {
            wrongAnswers++;
            console.log('Неправильно: ' + wrongAnswers);
        }


        quizizzOver = false;
        currentQuestion++;
        resalt.textContent = `Ответов: ${currentQuestion} из ${questions.length}`;

        if (currentQuestion < questions.length) {
            console.log('currentAnswer=' + currentAnswer);
            console.log('quizizzOver=' + quizizzOver);
            displayCurrentQuestion();
        } else {
            questionChoiceList.innerHTML = '';
            questionClass.textContent = '';
            resalt.textContent = `Правильных ответов: ${correctAnswers}. Неправильных ответов: ${wrongAnswers}.`;
            btn.textContent = 'Начать сначала';
        }

    } else {
        restart();
    }
});





// window.addEventListener('DOMContentLoaded', function () {
//     shuffleRey(questions);
// })

// let currentQuestion = 0;
// let currentAnswer = 0;
// let quizizzOver = false;
// let correctAnswers = 0;
// let wrongAnswers = 0;

// const btn = document.getElementById('btn');
// const questionClass = document.querySelector('.container > .question');
// const questionChoiceList = document.querySelector('.container > .choice__list');
// const resalt = document.getElementById('resalt');



// function shuffleRey(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const g = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[g]] = [arr[g], arr[i]];
//     }
// }

// function displaCurrentQuestion() {
//     const question = questions[currentQuestion].question;
//     const numberOfChoices = questions[currentQuestion].choices.length;

//     questionClass.textContent = question;
//     questionChoiceList.innerHTML = '';
//     let choice;
//     for (let i = 0; i < numberOfChoices; i++) {
//         choice = questions[currentQuestion].choices[i];
//         const li = document.createElement('li');
//         li.classList.add('choice__li');
//         li.innerHTML = `<input class="inputs" type="radio" name="choice" value="${i}"> ${choice}`;
//         questionChoiceList.appendChild(li);
//     }

//     const radio = document.querySelectorAll('.inputs');

//     radio.forEach(el => el.addEventListener('change', function () {
//         (el.checked === true)
//             ? (quizizzOver = true,
//                 currentAnswer = el.value,
//                 console.log(currentAnswer),
//                 btn.style.pointerEvents = 'auto')
//             : console.log('')
//     }))

//     const correctAnswer = questions[currentQuestion].correctAnswer;
//     console.log('Правильный ответ: ' + correctAnswer);
// }

// function restart() {
//     questionChoiceList.innerHTML = '';
//     questionClass.textContent = 'Результат';
//     resalt.textContent = `Правильных ответов: ${correctAnswers}. Неправильных ответов: ${wrongAnswers}.`;
//     btn.textContent = 'Начать сначала';
//     shuffleRey(questions);
//     currentQuestion = 0;
//     correctAnswers = 0;
//     wrongAnswers = 0;
//     console.log(questions);
//     quizizzOver = false;
// }

// btn.textContent = 'Начать';

// console.log(questions);

// shuffleRey(questions);

// btn.addEventListener('click', function () {
//     if (currentQuestion < questions.length) {
//         console.log('currentAnswer=' + currentAnswer);
//         console.log('quizizzOver=' + quizizzOver);
//         displaCurrentQuestion();

//         if (btn.textContent !== 'Начать') {
//             if (quizizzOver === false) {
//                 console.log('Не выбрано ни одного ответа!');
//             } else {
//                 console.log('Ответ дан');
//                 const correctAnswer = questions[currentQuestion].correctAnswer;
//                 if (currentAnswer == correctAnswer) {
//                     correctAnswers++;
//                     console.log('Правильно: ' + correctAnswers);
//                 } else {
//                     wrongAnswers++;
//                     console.log('Неправильно: ' + wrongAnswers);
//                 }
//                 quizizzOver = false;
//                 currentQuestion++;
//                 console.log('Номер вопроса: ' + currentQuestion);
//             }
//         } else console.log('Игра начата')
//         btn.style.pointerEvents = 'none';
//         resalt.textContent = '';
//         btn.textContent = 'Следующий вопрос';

//     } else {
//         restart();
//     }
// });








