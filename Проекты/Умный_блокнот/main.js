const buttons = document.querySelectorAll('.btn');
const saveNoteBtn = document.querySelector('#saveNoteBtn');
const title = document.querySelector('#title');
const noteText = document.querySelector('#note-text');
const tag = document.querySelector('#tag');
const notesList = document.querySelector('#notesList');
const edit = document.querySelector('#edit');
const check = document.querySelector('#check');
const textToolsSection = document.querySelector('.text-tools-section');
const completed = document.querySelector('#completed');
const unfulfilled = document.querySelector('#unfulfilled');
const All = document.querySelector('#All');
const sortSelect = document.querySelector('#sortSelect');
const filterInput = document.querySelector('#filterInput');
const generateReportBtn = document.querySelector('#generateReportBtn');
const totalNotes = document.querySelector('#totalNotes');
const totalChars = document.querySelector('#totalChars');
const totalWords = document.querySelector('#totalWords');
const uniqueTags = document.querySelector('#uniqueTags');
const longestNote = document.querySelector('#longestNote');
const shortestNote = document.querySelector('#shortestNote');
const numberOfTags = document.querySelector('#numberOfTags');
const protectNotesBtn = document.querySelector('#protectNotesBtn');
const password = document.querySelector('#password');
const passwordSection = document.querySelector('.password-section');


let arrNote = []; // Хранит все заметки.

function presenceTag(arr, index) { // Проверка наличия тегов. Если они есть, то выводит на экран
    let tags = [];
    (arr[index].tag) ? tags.push(arr[index].tag) : console.log('Теги отсуствует');

    return tags;
}

function viewAllElements(arr) { // Отображает содержимое массива и добавляет кнопки

    notesList.textContent = '';

    arr.forEach((el, index) => {
        let li = document.createElement('li');
        let btnEdit = document.createElement('button');
        let btnDel = document.createElement('button');

        li.className = 'note';
        btnEdit.className = 'btn';
        btnDel.className = 'btn';
        btnEdit.classList.add('btnNote-edit');
        btnDel.classList.add('btnNote-del');

        li.setAttribute('data-index', index);
        btnEdit.setAttribute('data-index', index);
        btnDel.setAttribute('data-index', index);

        btnEdit.textContent = 'Редактировать';
        btnDel.textContent = 'Удалить';

        btnEdit.style.marginRight = '10px';

        li.innerHTML = `<strong>Заголовок:</strong> ${el.title}<br><strong>Текст:</strong> ${el.noteText}<br><strong>Теги:</strong> ${el.tag}<br> 
        <strong>Статус:</strong> ${el.execution ? 'Выполнено' : 'Не выполнено'}<br> `;

        li.appendChild(btnEdit);
        li.appendChild(btnDel);
        notesList.appendChild(li);
    });

    const btnEdit = document.querySelectorAll('.btnNote-edit');
    const btnDel = document.querySelectorAll('.btnNote-del');

    btnEdit.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);
            editNote(index);
            blockBtn(btnEdit);
        })
    })

    btnDel.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);
            delet(index);
            console.log(arrNote);
        })
    })

    checkButtons();
}

function viewElement(el, index) {
    let li = document.createElement('li');
    let btnEdit = document.createElement('button');
    let btnDel = document.createElement('button');

    li.className = 'note';
    btnEdit.className = 'btn';
    btnDel.className = 'btn';
    btnEdit.classList.add('btnNote-edit');
    btnDel.classList.add('btnNote-del');

    li.setAttribute('data-index', index);
    btnEdit.setAttribute('data-index', index);
    btnDel.setAttribute('data-index', index);

    btnEdit.textContent = 'Редактировать';
    btnDel.textContent = 'Удалить';

    btnEdit.style.marginRight = '10px';

    li.innerHTML = `<strong>Заголовок:</strong> ${el.title}<br><strong>Текст:</strong> ${el.noteText}<br><strong>Теги:</strong> ${el.tag}<br> 
    <strong>Статус:</strong> ${el.execution ? 'Выполнено' : 'Не выполнено'}<br> `;

    li.appendChild(btnEdit);
    li.appendChild(btnDel);
    notesList.appendChild(li);
}

function resetBlock(btn) { // Предотвращаем стандартное поведение (перезагрузку страницы)
    btn.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
        });
    });
}

function blockBtn(btn) { // Добавляем класс для блокировки кнопки
    btn.forEach(button => {
        button.classList.add('disabled');
    })
}

function antiBlockBtn(btn) { // Добавляем класс для разблокировки кнопки
    btn.forEach(button => {
        button.classList.remove('disabled');
    })
}

function checkButtons() {
    let btnEdit = document.querySelectorAll('.btnNote-edit');
    if (isSaveButtonClicked && isEditAllClicked) {
        antiBlockBtn(btnEdit);
        isSaveButtonClicked = true;
        isEditAllClicked = true;
    }
    else {
        blockBtn(btnEdit); // ИНАЧЕ держим их заблокированными
    }
}

let isSaveButtonClicked = true;
let isEditAllClicked = true;

function editNote(index) { // Редактирует заметку

    isSaveButtonClicked = false;
    isEditAllClicked = false;

    console.log(isSaveButtonClicked, isEditAllClicked);

    let inputTitle = document.createElement('input');
    let inputText = document.createElement('input');
    let inputTag = document.createElement('input');

    inputTitle.className = 'form-input';
    inputText.className = 'form-input';
    inputTag.className = 'form-input';

    inputTitle.placeholder = 'Введите новый заголовок';
    inputText.placeholder = 'Введите новое описание';
    inputTag.placeholder = 'Введите новые теги';

    edit.appendChild(inputTitle);
    edit.appendChild(inputText);
    edit.appendChild(inputTag);

    const saveButton = document.createElement('button');
    saveButton.className = 'btn';
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener('click', function () {
        arrNote[index].title = inputTitle.value;
        arrNote[index].noteText = inputText.value;

        if (inputTag.value.split(' ').every(word => word.startsWith('#'))) {
            arrNote[index].tag = inputTag.value;
        }
        else {
            alert('Тег пишется с #.');
        }

        console.log(arrNote);

        edit.innerHTML = '';
        viewAllElements(arrNote);
        isSaveButtonClicked = true;
        checkButtons();
        console.log(isSaveButtonClicked);
    });

    edit.appendChild(saveButton);

    let toUpperCaseBtn = document.createElement('button');
    let toLowerCaseBtn = document.createElement('button');
    let trimSpacesBtn = document.createElement('button');
    let countCharsBtn = document.createElement('button');
    let countWordsBtn = document.createElement('button');
    let searchSubstringBtn = document.createElement('button');
    let replaceTextBtn = document.createElement('button');
    let extractTextBtn = document.createElement('button');
    let toolButtons = document.createElement('div');
    let textInput = document.createElement('textarea');
    let h2 = document.createElement('h2');
    let editAll = document.createElement('button');

    toUpperCaseBtn.className = 'btn';
    toLowerCaseBtn.className = 'btn';
    trimSpacesBtn.className = 'btn';
    countCharsBtn.className = 'btn';
    countWordsBtn.className = 'btn';
    searchSubstringBtn.className = 'btn';
    replaceTextBtn.className = 'btn';
    extractTextBtn.className = 'btn';
    toolButtons.className = 'tool-buttons';
    textInput.className = 'text-input';
    editAll.className = 'btn';

    toUpperCaseBtn.id = 'toUpperCaseBtn';
    toLowerCaseBtn.id = 'toLowerCaseBtn';
    trimSpacesBtn.id = 'trimSpacesBtn';
    countCharsBtn.id = 'countCharsBtn';
    countWordsBtn.id = 'countWordsBtn';
    searchSubstringBtn.id = 'searchSubstringBtn';
    replaceTextBtn.id = 'replaceTextBtn';
    extractTextBtn.id = 'extractTextBtn';
    editAll.id = 'editAll';

    toUpperCaseBtn.textContent = 'В верхний регистр';
    toLowerCaseBtn.textContent = 'В нижний регистр';
    trimSpacesBtn.textContent = 'Удалить пробелы';
    countCharsBtn.textContent = 'Подсчитать символы';
    countWordsBtn.textContent = 'Подсчитать слова';
    searchSubstringBtn.textContent = 'Поиск подстроки';
    replaceTextBtn.textContent = 'Замена текста';
    extractTextBtn.textContent = 'Извлечь часть';
    h2.textContent = 'Текстовые инструменты';
    editAll.textContent = 'Закрыть текстовые инструменты';

    textInput.placeholder = 'Введите текст из выбранной заметки для обработки';

    toolButtons.appendChild(toUpperCaseBtn);
    toolButtons.appendChild(toLowerCaseBtn);
    toolButtons.appendChild(trimSpacesBtn);
    toolButtons.appendChild(countCharsBtn);
    toolButtons.appendChild(countWordsBtn);
    toolButtons.appendChild(searchSubstringBtn);
    toolButtons.appendChild(replaceTextBtn);
    toolButtons.appendChild(extractTextBtn);

    textToolsSection.appendChild(h2);
    textToolsSection.appendChild(textInput);
    textToolsSection.appendChild(toolButtons);
    textToolsSection.appendChild(editAll);

    toUpperCaseBtn.addEventListener('click', function () {
        if (arrNote[index].noteText.includes(textInput.value)) {
            arrNote[index].noteText = arrNote[index].noteText.replace(textInput.value, textInput.value.toUpperCase());
            viewAllElements(arrNote);
            textInput.value = '';
        }
        else {
            alert('Введенного вами текста нет в заметке!');
        }
    })

    toLowerCaseBtn.addEventListener('click', function () {
        if (arrNote[index].noteText.includes(textInput.value)) {
            arrNote[index].noteText = arrNote[index].noteText.replace(textInput.value, textInput.value.toLowerCase());
            viewAllElements(arrNote);
            textInput.value = '';
        }
        else {
            alert('Введенного вами текста нет в заметке!');
        }
    })

    trimSpacesBtn.addEventListener('click', function () {
        if (arrNote[index].noteText.includes(textInput.value)) {
            arrNote[index].noteText = arrNote[index].noteText.replace(textInput.value, textInput.value.trim());
            viewAllElements(arrNote);
            textInput.value = '';
            console.log(arrNote);
        }
        else {
            alert('Введенного вами текста нет в заметке!');
        }
    })

    countCharsBtn.addEventListener('click', function () {

        let count = 0;
        let inputText = textInput.value.trim();

        if (arrNote[index].noteText.includes(textInput.value)) {

            for (let i = 0; i < inputText.length; i++) {

                if (inputText[i] != ' ') {
                    count++;
                }

            }

            alert(`Количество символов: ${count}`);
            textInput.value = '';

        }
        else {
            alert('Введенного вами текста нет в заметке!');
        }
    })

    countWordsBtn.addEventListener('click', function () {
        let inputText = textInput.value.trim();

        if (arrNote[index].noteText.includes(inputText)) {
            let wordCount = 0;
            let inWord = false; // Флаг, указывающий на то, находимся ли мы внутри слова

            for (let i = 0; i < inputText.length; i++) {
                if (inputText[i] !== ' ') {
                    if (!inWord) { // Если мы не в слове
                        inWord = true; // Входим в слово
                        wordCount++;
                    }
                } else {
                    inWord = false; // Если пробел, выходим из слова
                }
            }

            alert(`Количество слов: ${wordCount}`);
            textInput.value = '';
        } else {
            alert('Введенного вами текста нет в заметке!');
        }
    });

    searchSubstringBtn.addEventListener('click', function () {

        let inputText = textInput.value;

        if (arrNote[index].noteText.includes(textInput.value)) {

            alert(`Подстрока "${inputText}" найдена`);
            textInput.value = '';
        }
        else {
            alert('Введенного вами текста нет в заметке!');
        }
    })

    replaceTextBtn.addEventListener('click', function () {

        if (arrNote[index].noteText.includes(textInput.value)) {

            const newText = prompt('Введите текст, на который хотите заменить найденный фрагмент:');

            arrNote[index].noteText = arrNote[index].noteText.replace(textInput.value, newText);
            viewAllElements(arrNote);
            alert('Фрагмент успешно заменён!');
            textInput.value = '';

        }
        else {
            alert('Введенного вами текста нет в заметке!');
        }
    })

    extractTextBtn.addEventListener('click', function () {

        if (arrNote[index].noteText.includes(textInput.value)) {

            const newText = prompt('Введите текст, который хотите извлечь:');

            arrNote[index].noteText = arrNote[index].noteText.replace(newText, '');
            viewAllElements(arrNote);
            alert('Фрагмент успешно извлечен!');
            textInput.value = '';

        }
        else {
            alert('Введенного вами текста нет в заметке!');
        }
    })

    editAll.addEventListener('click', function () {
        textToolsSection.textContent = '';
        isEditAllClicked = true;
        checkButtons();
        console.log(isEditAllClicked);
    })
}

function delet(index) {
    arrNote.splice(index, 1);
    viewAllElements(arrNote);
}

function checkTags() {
    let tagEnter = filterInput.value.trim();

    notesList.textContent = '';

    if (tagEnter) {
        arrNote.forEach((el, index) => {
            // Проверяем совпадение тега с введенным
            if (el.tag.includes(tagEnter)) {
                viewElement(el, index);
            }
        });
    }
    else {
        viewAllElements(arrNote);
    }
}

resetBlock(buttons);

saveNoteBtn.addEventListener('click', function () {
    if (title.value && noteText.value && tag.value) {

        if (tag.value.split(' ').every(word => word.startsWith('#'))) { // Разделяем слова по проблем и затем проверяем если ли # вначале каждого слова

            const date = new Date();

            const hour = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            let day;
            let month;

            function checkday(day) { //Проверка дня.
                (date.getDate() < 10) ? day = '0' + date.getDate()
                    : day = date.getDate()

                return day;
            }

            function checkMonth(month) { //Проверка месяца.
                (date.getMonth() < 9) ? month = '0' + (date.getMonth() + 1)
                    : month = (date.getMonth() + 1)

                return month;
            }

            // Формируем полную дату с временем
            let newdate = checkday(day) + '.' + checkMonth(month) + '.' + date.getFullYear() +
                ' ' + hour + ':' + minutes + ':' + seconds;

            if (check.checked) {
                arrNote.push({
                    id: arrNote.length,
                    title: title.value,
                    noteText: noteText.value,
                    tag: tag.value,
                    execution: true,
                    data: newdate
                })
            }

            else {
                arrNote.push({
                    id: arrNote.length,
                    title: title.value,
                    noteText: noteText.value,
                    tag: tag.value,
                    execution: false,
                    data: newdate
                })
            }

            console.log(arrNote);

            notesList.textContent = '';
            title.value = '';
            noteText.value = '';
            tag.value = '';

            viewAllElements(arrNote);
        }
        else {
            alert('Тег пишется с #.');
        }
    }
    else {
        alert('Вы не заполнили все поля для ввода текста!');
    }
})


completed.addEventListener('click', function () { //Показывает выполненные

    notesList.textContent = '';
    arrNote.forEach((el, index) => {
        if (el.execution) {
            viewElement(el, index);
        }
    })
})

unfulfilled.addEventListener('click', function () { // Показывает невыполненные

    notesList.textContent = '';
    arrNote.forEach((el, index) => {
        if (!el.execution) {
            viewElement(el, index);
        }
    })

})

All.addEventListener('click', function () { //Показывает все заметки

    notesList.textContent = '';
    viewAllElements(arrNote);
})

sortSelect.addEventListener('change', function () { // Работа с select. Взависимости от выбранного пункта выводит нужные значения.

    notesList.textContent = '';

    let value = sortSelect.value;

    switch (value) {

        case 'title':

            arrNote.sort(function (a, b) {
                return a.title.localeCompare(b.title);
            });
            viewAllElements(arrNote);

            break;

        case 'date':

            arrNote.sort(function (a, b) {
                return a.data.localeCompare(b.data);
            });
            viewAllElements(arrNote);

            break;


        case 'length':
            arrNote.sort(function (a, b) {
                return a.noteText.length - b.noteText.length;
            });
            viewAllElements(arrNote);

            break;


        default:
            alert('Не работает');
    }
})

filterInput.addEventListener('input', checkTags); // При вводе тега сразу выводит результат если он есть в заметках

generateReportBtn.addEventListener('click', function () {
    let notesQuantity = arrNote.length; //Колличесво заметок
    let countChar = 0; // Количесво символов
    let countWords = 0; // Количесво слов
    let countTags = 0 // Количесво тегов
    let noteLong = 'Нет'; // Самая длинная заметка
    let noteShort = 'Нет'; // Самая короткая заметка
    let Tags = ''; // Уникальные теги

    function findNoteLong() { // Поиск длинной заметки

        let maxChar = 0;
        let index = -1;

        for (let i = 0; i < arrNote.length; i++) {

            if (maxChar < arrNote[i].noteText.length) {
                maxChar = arrNote[i].noteText.length;
                index = i;
            }

            if (arrNote.length) {
                noteLong = arrNote[index].title;
            }
        }

        return noteLong
    }

    function findNoteShort() { // Поиск короткой заметки
        let minChar = Infinity;
        let index = -1;

        for (let i = 0; i < arrNote.length; i++) {

            if (minChar > arrNote[i].noteText.length) {
                minChar = arrNote[i].noteText.length;
                index = i;
            }

            if (arrNote.length) {
                noteShort = arrNote[index].title;
            }
        }

        return noteShort
    }

    function unTags() { // Уникальные теги
        let arrTags = [];
        let tag = '';
        let Tags = [];
        let uniqueTags = [];

        for (let el of arrNote) { //Добавляем все теги в массив
            if (!arrTags.includes(el.tag)) {
                arrTags.push(el.tag);
            }
        }

        // Разделение тегов по запятой и удаление пробелов
        for (let el of arrTags) {
            let un = el.split(',').map(tag => tag.trim().replace(' ', '')); // Удаляем пробелы
            Tags.push(un);
        }

        let flattenedUniqueTags = Tags.flat();// Раскрываем все скобки что бы был единый массив

        for (let el of flattenedUniqueTags) { // Убираем дублированные теги и добавляем только уникальные
            if (!uniqueTags.includes(el)) {
                uniqueTags.push(el);
            }
        }

        tag = uniqueTags.join(', ');

        return tag;
    }

    function countTag() { // Количесво уникальных тегов
        let arr = [];
        let count = 0;
        arr = Array.from(Tags);
        arr.forEach((el) => {
            if (el === '#') {
                count++
            }
        })

        return count;
    }

    function quantityChars() { // Подсчет общее количесво символов
        let count = arrNote.reduce((accumulator, el) => {
            // Для каждого элемента el считаем количество непустых символов в noteText
            let nonSpaceCount = Array.from(el.noteText).filter(char => char !== ' ').length;
            return accumulator + nonSpaceCount; // Суммируем с аккумулятором
        }, 0); // Начальное значение аккумулятора - 0

        return count;
    }

    function quantityWords() { // Подсчет общего количества слов
        let count = arrNote.reduce((accumulator, el) => {
            //используем метод filter, чтобы удалить пустые строки из массива. Это необходимо, поскольку при использовании split(' ') могут возникать пустые элементы, если в тексте есть несколько пробелов подряд.
            let wordCount = el.noteText.split(' ').filter(word => word.length > 0).length; // Условие word.length > 0 проверяет, что длина слова больше нуля, что позволяет оставить только непустые строки.
            return accumulator + wordCount;
        }, 0);

        return count;
    }

    noteLong = findNoteLong();
    noteShort = findNoteShort();
    Tags = unTags();
    countTags = countTag();
    countChar = quantityChars();
    countWords = quantityWords();

    totalNotes.textContent = notesQuantity;
    longestNote.textContent = noteLong;
    shortestNote.textContent = noteShort;
    uniqueTags.textContent = Tags;
    numberOfTags.textContent = countTags;
    totalChars.textContent = countChar;
    totalWords.textContent = countWords;
})


protectNotesBtn.addEventListener('click', function () {

    protectNotesBtn.classList.add('disabled'); // Блокируем кнопку при нажатии.

    let h2 = document.createElement('h2');
    h2.textContent = 'Сгенерируйте ваш пороль';

    let input = document.createElement('input');
    input.className = 'form-input';
    input.id = 'inputPassword';
    input.type = 'number';
    input.placeholder = 'Введите длину пороля';

    let p = document.createElement('p');
    p.textContent = 'Ваш пороль:';

    let span = document.createElement('span');
    span.id = 'password';

    passwordSection.appendChild(h2);
    passwordSection.appendChild(input);
    p.appendChild(span);
    passwordSection.appendChild(p);

    input.addEventListener('input', function () {
        let value = parseInt(input.value);

        if (value >= 4 && value <= 20) { // Проверяем диапазон
            span.textContent = generatePass(value);
        } else {
            span.textContent = '';
            input.value = '';
            alert('Введите число от 4 до 20.');
        }

        function generatePass(length) {
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
            let password = '';
            for (let i = 0; i < length; i++) {

                const randomIndex = Math.floor(Math.random() * chars.length);
                password += chars.charAt(randomIndex);

            }
            return password;
        }
    })
})