const form = document.querySelector('#form');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const tackscontainer = document.querySelector('#tackscontainer');
const filtrsBtn1 = document.querySelector('#filtrs-btn1');
const filtrsBtn2 = document.querySelector('#filtrs-btn2');
const filtrsBtn3 = document.querySelector('#filtrs-btn3');
const textarea = document.querySelector('#textarea');
const textToolsSection = document.querySelector('.text-tools-section');

let arr = []; // Хранит все задачи

function viewControl(arr) {

    tackscontainer.innerHTML = '';

    arr.forEach(function (el, index) {
        viewElements(el, index);
    });

    const tackscontainerBtn1 = document.querySelectorAll('.tackscontainer-btn1');
    const tackscontainerBtn2 = document.querySelectorAll('.tackscontainer-btn2');
    const tackscontainerBtn3 = document.querySelectorAll('.tackscontainer-btn3');

    tackscontainerBtn1.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);
            toggleTaskStatus(index);
        });
    });

    tackscontainerBtn2.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);
            const content = document.querySelector(`.tackscontainer-content[data-index="${index}"]`);
            let divEdit = document.createElement('div');
            let editTitle = document.createElement('input');
            let editDesk = document.createElement('input');
            let apply = document.createElement('button');

            divEdit.className = 'div-edit';
            divEdit.setAttribute('data-index', index);
            editTitle.className = 'edit-title';
            editTitle.setAttribute('data-index', index);
            editTitle.placeholder = 'Введите новое название';
            editDesk.className = 'edit-desk';
            editDesk.setAttribute('data-index', index);
            editDesk.placeholder = 'Введите новое описание';
            apply.className = 'apply-title';
            apply.setAttribute('data-index', index);
            apply.textContent = 'Применить';

            divEdit.appendChild(editTitle);
            divEdit.appendChild(editDesk);
            divEdit.appendChild(apply);

            content.appendChild(divEdit);

            const strong = document.querySelector(`.title[data-index="${index}"]`);
            const small = document.querySelector(`.desk[data-index="${index}"]`);

            blockBtn(tackscontainerBtn2);

            let count = 0;

            apply.addEventListener('click', function () {
                if (!apply.classList.contains('disabled')) {
                    apply.classList.add('disabled');
                    count++;
                    strong.textContent = editTitle.value;
                    small.textContent = editDesk.value;
                    arr[index].title = editTitle.value;
                    small.textContent = editDesk.value;
                    arr[index].desk = editDesk.value;
                }
                reset();
            });

            function reset() {
                if (count === 1) {
                    antiBlockBtn(tackscontainerBtn2);
                    divEdit.remove();
                    console.log(arr);
                }
            }

        });
    });

    tackscontainerBtn3.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);
            delet(index);
        });
    });

    console.log(arr);
}


function viewElements(el, index) {
    let div = document.createElement('div');
    div.className = 'tackscontainer-task';

    const coplitedClass = el.complited ? ' coplited' : '';

    div.innerHTML =
        `<div class="tackscontainer-content${coplitedClass}" data-index="${index}">
            <strong class="title" data-index="${index}">${el.title}</strong>
            <br>
            <small class="desk" data-index="${index}">${el.desk}</small>
        </div>
        <div class="tackscontainer__btn-group">
            <button class="tackscontainer-btn1" data-index="${index}">${el.complited ? 'Отменить' : 'Выполнить'}</button>
            <button class="tackscontainer-btn2" data-index="${index}">Редактировать</button>
            <button class="tackscontainer-btn3" data-index="${index}">Удалить</button>
        </div>`

    tackscontainer.appendChild(div);
}


function delet(index) {
    arr.splice(index, 1);
    viewControl(arr);
}

function toggleTaskStatus(index) { // Изменяем статус задачи
    const tack = arr.find((el, i) => i === index);
    if (tack) {
        tack.complited = !tack.complited;
    }
    viewControl(arr);
}

function blockBtn(btn) {
    btn.forEach(button => {
        button.classList.add('disabled');
    }) // Добавляем класс для блокировки кнопки
}

function antiBlockBtn(btn) {
    btn.forEach(button => {
        button.classList.remove('disabled');
    }) // Добавляем класс для разблокировки кнопки
}



form.addEventListener('submit', function (event) {
    event.preventDefault();
    let title = input.value.trim();
    let desk = textarea.value.trim();

    if (title) {
        arr.push({
            title: title,
            desk: desk,
            complited: false
        });

        form.reset();
        viewControl(arr);
    }
});

filtrsBtn1.addEventListener('click', function () {
    viewControl(arr);

    arr.forEach(function (el, index) {

        const content = document.querySelector(`.tackscontainer-content[data-index="${index}"]`);

        if (content && el.complited) {
            content.classList.add('coplited');
        }
    });
});

filtrsBtn2.addEventListener('click', function () {
    tackscontainer.innerHTML = '';
    arr.forEach(function (el, index) {
        if (el.complited) {
            viewElements(el, index);
        }
    })

    const tackscontainerBtn1 = document.querySelectorAll('.tackscontainer-btn1');
    blockBtn(tackscontainerBtn1);
})

filtrsBtn3.addEventListener('click', function () {
    tackscontainer.innerHTML = '';
    arr.forEach(function (el, index) {
        if (!el.complited) {
            viewElements(el, index)
        }
    })

    const tackscontainerBtn1 = document.querySelectorAll('.tackscontainer-btn1');
    blockBtn(tackscontainerBtn1);
})
