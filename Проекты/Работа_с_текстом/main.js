const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const resalt = document.querySelector('#resalt');

let strCutOut; // для записи вырезанного текста
let arr = []; // для записи найденой подстроки и индексов ее расположения в тексте


function find() {
    const textInput = document.querySelector('#textInput').value;
    const input = document.querySelector('#input').value;


    if (!input || !textInput) {
        resalt.textContent = `Строка не найдена`;
    }

    let bull = textInput.includes(input);

    if (!bull) {
        resalt.textContent = `Подстрока '${input}' не найдена`;
    }

    let array = [];
    let start = 0;
    let check = false;


    while (true) {
        let findIndex = textInput.indexOf(input, start);
        if (findIndex === -1) break;

        array.push({
            str: input,
            startindex: findIndex,
            endindex: findIndex + input.length - 1
        });

        // Продолжаем поиск после найденного вхождения
        start = findIndex + 1;
        check = true;
    }

    if (check) {
        let resultText = `Подстрока '${input}' найдена ${array.length} раз(а): `;
        array.forEach((item, index) => {
            resultText += `Вхождение ${index + 1}: ${item.startindex} - ${item.endindex}; `;
        });

        resalt.textContent = resultText;
        console.log(array);
        arr = array;
    }
}

function cutText() {
    const textInput = document.querySelector('#textInput').value;
    const startIndex = document.querySelector('#startIndex').value;
    const endIndex = document.querySelector('#endIndex').value;

    if (!startIndex || !endIndex) {
        resalt.textContent = `Индексы не заданы`;
    }

    if (!textInput) {
        resalt.textContent = `Текст в строку для ввода текста не был введен`;
    }

    if (startIndex && endIndex && textInput) {
        strCutOut = textInput.slice(startIndex, endIndex);
        resalt.textContent = `Вырезанный текст '${strCutOut}'`;
    }
}

btn.addEventListener('click', find);
btn2.addEventListener('click', cutText);
