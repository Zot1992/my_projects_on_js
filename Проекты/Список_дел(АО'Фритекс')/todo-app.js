(function () {

    //Эти переменные должны быть глобальными что бы вызываться в любой части кода.
    let ListArray = []; //Массив объектов который содержит добавленные дела
    let nameSession = ''; //Имя ссесии которая будет хранится в LocalStorage
    const LS = localStorage;
    let currentDate = new Date();//Переменная указывающая текущую дату
    let isoDate = currentDate.toISOString().slice(0, 10); //Убираем текущее время и оставляем только текущую дату
    //Метод toISOString() возвращает строку в формате ISO который можно описать следующим образом: YYYY-MM-DDTHH:mm:ss.sssZ. 
    //Часовой пояс всегда равен UTC, что обозначено суффиксом "Z".

    //Создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }
    //Создаем и возвращаем форму для создания дел
    function createTodoItemFrom() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        //className – строковое значение, удобно для управления всем набором классов. 
        //classList – объект с методами add/remove/toggle/contains , удобно для управления отдельными классами.
        form.classList.add('input-group', 'mb-3');//input-grop содержит группу элементов форму, а mb-3 оставляет отступ после формы.
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');//btn что бы применить к кнопке все нужные стили. btn-primary нарисует эту кнопку синим цветом.
        button.textContent = 'Добавить дело';
        button.disabled = true;//Блокируем работу кнопки

        buttonWrapper.append(button); //Добавляем кнопку в buttonWrapper что бы сделать ей лучше внешний вид
        form.append(input); //Добавляем input в саму форму
        form.append(buttonWrapper);////Добавляем buttonWrapper в саму форму 

        //Функция по проверке input. Если он пустой, то кнопка (добавить дело) будет заблокирована, а если не пустой то разблокирована. 
        input.addEventListener('input', function () {
            if (input.value !== "") {
                button.disabled = false;
            }
            else {
                button.disabled = true;
            }
        })

        //Так выгледел бы аналогичный код в HTML. 
        //<form class="input-group mb-3">
        //   <input class="from-control" placeholder="Введите название нового дела">
        //   <div class="input-group-append">
        //      <button class="btn btn-primary">Добавить дело</button>
        //   </div>
        //</form>


        return {
            form,
            input,
            button,
        };
    }

    //Функция по поиску максимального значения id и увеличение его на 1 что бы получилась уникальное число
    function getNewId(arr) {
        let max = 0;
        for (const item of arr) { // Используем for of что бы получить конкретное значение, а не все значения которые находятся под нужным индексом как в for in
            if (item.id > max) {
                max = item.id;
            }
        }
        return max + 1;
    }

    //Создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }
    // //Создаем рабочие кнопки через которые будем управлять
    function createTodoItem(obj) {
        let item = document.createElement('li');
        //Установить стили для элементов списка, а так же для разметки кнопки в его правой части flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name + ' (Дата подачи заявки: ' + obj.time + ')';//Используем именно textContent, так как при символах {} и прочих скобках написанный текст может превратиться в тег.
        //кнопки помещены в элемент, который красиво покажет их в одной группе

        let buttonGroup = document.createElement('div');
        buttonGroup.classList.add('btn-group', 'btn-group-sm');

        let doneButton = document.createElement('button');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        //Если статус дела будет true, то поле окрасится в зеленый цвет
        if (obj.done == true) {
            item.classList.add('list-group-item-success')
        }

        //Добавляем обработчики на кнопки
        doneButton.addEventListener('click', function () {
            item.classList.toggle('list-group-item-success');

            for (const listItem of ListArray) { //В отличии от for in данный цикл проходит по всем значениям, а не по индексам. 
                //В данном случае его использовать нельзя так как он выводит все что находится под данным индексом, а не конекретное значение которое мы ищем.

                if (listItem.name == obj.name) { //Проверяем соотвествует ли текст который добавлен в массив тому который выведен на экран так как они независимы.
                    listItem.done = !listItem.done; //Если текст одинаковый то меняет статус на противоположный.
                }
            }

            SaveInf(nameSession, ListArray);

        });
        deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                item.remove();
                for (let i = 0; i < ListArray.length; i++) {
                    if (ListArray[i].id == obj.id) { //Проверяем соотвествует ли текст который добавлен в массив тому который выведен на экран так как они независимы.
                        // removeFromLS(ListArray[i].id, nameSession);

                        ListArray.splice(i, 1); //Удаляет 1 элементов по индексу i
                        SaveInf(nameSession, ListArray);
                    }
                }
            }
        })

        //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок.
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        //приложению нужен допуск к самому элементу и кнопкам, что бы обрабатывать события нажатием.
        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    //Данный метод запишет наши данные в LocalStorage
    function SaveInf(arr, value) {
        return LS.setItem(arr, JSON.stringify(value));
    }

    function createTodoApp(container, title = 'Список дел', listName = '', defArray = []) {

        nameSession = listName;//Присваиваем название сессии которое присвоили к текущей странице которую запускаем.
        ListArray = defArray;//Присваиваем массиву другой массив что бы были какие то значения по умолчанию при запуске страницы. 
        //При первом запуске массив будет браться из defArray и при срабатывании функции SaveInf все данные уже попадают в LocalStorage.
        let localData = LS.getItem(nameSession); //Получаем данные из LocalStorage

        //Вызываем 3 функции которые создали до этого.
        let todoAppTitle = createAppTitle(title); //Вернет сам DOM-элемент.
        let todoItemForm = createTodoItemFrom(); //Возвращаем объект в котором есть форма.
        let todoList = createTodoList(); //Вернет сам DOM-элемент.


        //Потом их результат добавляем внутрь контейнера.
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        //Если в localStorage есть данные, то тогда мы их расшифровываем. То есть превратить из строки в массив.
        if (localData !== null && localData !== '') {
            ListArray = JSON.parse(localData);
        }

        //Нужно для того что бы сохранить текущее состояние обьекта и вывести его в том же состоянии на экран после перезагрузки страницы.
        for (const item of ListArray) {
            let todoItem = createTodoItem(item); //Добавляет все кнопки и состояние объекта
            todoList.append(todoItem.item); //Выводит DOM-элемент на экран
        }

        //Браузер создает событие submit по форме при нажатии Enter или на конопку создание дела
        todoItemForm.form.addEventListener('submit', function (e) { //регистрируем обработчик что бы при нажатии кнопки было какое-то действие.
            //эта строчка необходима, чтобы предотвратить стандартные действия браузера. В данном случае мы не хотим, чтобы страница перезагрузилась при отправке формы
            e.preventDefault();
            //Игнорируем создание элемента, если пользователь ничего не ввел в поле.
            if (!todoItemForm.input.value) {
                return;
            }

            //Создаем объект с 3 параметрами.
            let newItem = {
                id: getNewId(ListArray),
                name: todoItemForm.input.value,
                done: false,
                time: isoDate
            }

            let todoItem = createTodoItem(newItem);


            //Добавляем объект в массив объектов.
            ListArray.push(newItem);
            SaveInf(nameSession, ListArray);
            console.log(ListArray);


            //Создаем и добавляем в список новое дело с названием из поля для ввода.
            todoList.append(todoItem.item);

            todoItemForm.button.disabled = true; // Блокирует кнопку после нажатия. Без этого параметра она будет активна после нажатия.

            //Обновляем значение в поле, чтобы не пришлось стирать его вручную.
            todoItemForm.input.value = '';

        });
    }
    window.createTodoApp = createTodoApp; //Нужно что бы получить доступ к createTodoApp функции из других скриптов.
})();