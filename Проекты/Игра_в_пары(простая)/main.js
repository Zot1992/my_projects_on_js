(function () {
    //Генерация парного массива из 8 пар.
    const generation = () => {
        let array = [];

        for (let i = 1; i < 9; i++) {
            array.push(i, i);
        }

        return array;
    }

    //Перемешивание массива
    const shuffle = (array) => {
        let m = array.length, t, i;
        // Пока есть элементы для перемешивания
        while (m) {
            // Взять оставшийся элемент
            i = Math.floor(Math.random() * m--);
            // И поменять его местами с текущим элементом
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    //Функция по проверке на совпадение в массиве
    const matchChecking = (arr, val) => {

        let bool = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                bool = true;
            }
        }

        return bool;
    }


    function cards() {
        //Создаем поле на котором будут карты и кнопка
        const field = document.createElement('div');
        const Container = document.createElement('div');
        const button = document.createElement('button');
        button.textContent = "Новая игра";

        let ArrCardsNumbers = []; // Массив для номеров карт
        let ArrEnteredNumbers = []; //Массив для проверки на совпадение номеров карт в виде объекта
        let ArrPair = []; //Массив с парами
        let ArrId = []; //Массив id
        let intId; //Переменная которая преобразует строку в число
        const quantity = 4; //Количество карт
        let quantityFalse = quantity;//Колличество карт которые не совпали.
        let count = 0; //Счет количесва открытых карт
        let countTrue = 0;//Счет карт которые совпали

        //Создаем колличесво карт которые задали и добавляем в контейнер
        for (let i = 0; i < quantity; i++) {
            const card = document.createElement('div');
            card.id = i;
            card.classList.add('card', 'img', 'vid');

            const number = document.createElement('div');
            number.id = "number-" + i;
            number.classList.add('number', 'vid');

            let randomElement = shuffle(generation())[i]; //Выводим элемент который находится под этим индексом
            ArrCardsNumbers.push(randomElement);
            number.textContent = ArrCardsNumbers[i];

            Container.append(card);
            card.append(number);
        }

        //Назначаем класс и добавляем поле в тело, а в него контейнер в котором будет кнопка и сами карты.
        field.classList.add('field');
        Container.classList.add('Container');
        button.classList.add('button');
        document.body.append(field);
        field.append(Container);
        Container.append(button);

        for (let i = 0; i < quantity; i++) {

            const card_elem = document.getElementsByClassName("card");
            const number_elem = document.getElementsByClassName("number");
            //При клике на карту происходит появление номера на карте. При открытии всех карт происходит обновление всех номеров если не было совпаденией, 
            //но если были совпадения то совпавшие остаются открытыми и заблокированными что бы на них нельзя было нажать. При совпадении всех карт игра заканчивается.
            card_elem[i].addEventListener('click', function () {

                const id = this.id; //Получаем текущий id.
                intId = Number(id); //Преобразует строку в число.

                card_elem[i].style.pointerEvents = "none"; //При нажатии на карту она блокируется и становится не кликабельной.
                number_elem[i].style.display = 'block'; //При нажатии на карту появляется ее номер.

                if (ArrEnteredNumbers.length > 0) { //Если открыта хотя бы одна карта, то при открытии следущей уже идет проверка на совпадение

                    for (let key in ArrEnteredNumbers) { //Данный цикл нужен для обхода объекта в котором лежат номера карт и их id.

                        //Если две карты совпали, то они открашиваются в зеленый цвет. Третья карта уже не попадает в эти требования.                        
                        if (ArrEnteredNumbers[key].num == number_elem[i].innerHTML && matchChecking(ArrPair, number_elem[i].innerHTML) == false) {

                            ArrId.push(ArrEnteredNumbers[key].id, intId);

                            number_elem[ArrEnteredNumbers[key].id].style.backgroundColor = "green";//Делает зеленой предыдущую карта
                            number_elem[i].style.backgroundColor = "green"; //Делает зеленым текущий номер карт

                            ArrPair.push(ArrEnteredNumbers[key].num, number_elem[i].innerHTML);

                            countTrue = countTrue + 2;

                            console.log('id:' + ArrId);
                        }
                    }
                }

                ArrEnteredNumbers.push({ num: number_elem[i].innerHTML, id: intId });

                ++count;//Прибавляется после нажатии на новую не нажатую карту.

                if (count === quantityFalse) { //Обновляет содержение карт которые не совпали
                    setTimeout(() => { //Таймер.

                        const card_elem_all = document.querySelectorAll(".card");
                        const number_elem_all = document.querySelectorAll(".number");

                        number_elem_all.forEach(elem => elem.style.display = "none"); //Все номера скрываются с карты

                        count = 0;
                        ArrEnteredNumbers.length = 0;
                        ArrCardsNumbers.length = 0;

                        quantityFalse = (countTrue > 0) ? quantity - countTrue : quantity; //Если открыта хотя бы одна карта, то количесво карт которые нужно открыть убавляется 
                        //взависимости от  колличества открытых карт. А если ни одна карта не открыта, то ничего не меняется.


                        card_elem_all.forEach(elem => elem.style.pointerEvents = "auto"); //Делает все карты кликабельными
                        //Если в массиве есть хотя бы один id, то те карты которые открыты остаются открытыми и заблокированными, а те которые не совпали меняют номера и закрываются.
                        if (ArrId.length > 0) {
                            for (let i = 0; i < quantity; i++) {

                                if (ArrId.includes(i)) {
                                    card_elem[i].style.pointerEvents = "none";
                                    number_elem[i].style.display = 'block';
                                }

                                else {
                                    randomElement = shuffle(generation())[i];
                                    document.getElementById("number-" + i).textContent = randomElement;
                                    ArrCardsNumbers.push(randomElement);
                                }
                            }
                        }
                        //Если нет совпадений карт, то все карты меняют числа.
                        else {
                            for (let i = 0; i < quantity; i++) {
                                randomElement = shuffle(generation())[i];
                                document.getElementById("number-" + i).textContent = randomElement;
                                ArrCardsNumbers.push(randomElement);
                            }
                        }
                        //Если все карты совпали, то игра выводится сообщение и страница перезагружается.
                        if (ArrCardsNumbers.length == 0) {
                            alert("Вы выиграли"); //Выводит сообщение на экран
                            location.reload(); //Метод перезагружает страницу
                        }

                        console.log(ArrCardsNumbers);
                    }, 1000); //Время через которое обновится номера карт. 1000 примерно 1 секунда.
                }

                console.log(ArrEnteredNumbers);
            })
        }
        //При нажатии на кнопку обновляется страница.
        button.addEventListener('click', function () {
            location.reload();  //Метод перезагружает страницу
        });

        console.log(ArrCardsNumbers);
    }

    cards() //Вызов функции с видом и работой карт и кнопки.
})();








