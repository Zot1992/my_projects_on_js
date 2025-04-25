const cards = document.querySelectorAll('.card');
const btn = document.querySelector('#btn');
const timerView = document.querySelector('#timer');
let matcht = 0;
let cardOne;
let cardTwo;
let disibel = false;

function flipCard(event) {
    const clicktCadr = event.target; //target это элемент на который мы кликнули. event содержит информацию о событии которое произошло.
    if (cardOne !== clicktCadr && !disibel) {
        clicktCadr.classList.toggle('flip');
        if (!cardOne) {
            return cardOne = clicktCadr;
        }
        else {
            cardTwo = clicktCadr;
        }

        disibel = true;

        let cardOneImage = cardOne.querySelector('.back-view img').src;
        let cardTwoImage = cardTwo.querySelector('.back-view img').src;
        mageCards(cardOneImage, cardTwoImage);
    }
    console.log(clicktCadr);
}

function mageCards(image1, image2) { //Если совпадений 8 то игра закончена.
    if (image1 === image2) {
        matcht++;
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = '';
        cardTwo = '';
        return disibel = false;
    }

    setTimeout(function () {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400)

    setTimeout(function () {
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne = '';
        cardTwo = '';
        disibel = false;
    }, 1200)
}

function moveRandom() {
    matcht = 0;
    disibel = false;
    cardOne = '';
    cardTwo = '';
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(function () {
        return Math.random() > 0.5 ? 1 : -1; //1 то сортируем в порядке возрастания, а если -1 то в порядке убывания.
    });

    cards.forEach(function (el, ind) {
        el.classList.remove('flip');
        el.addEventListener('click', flipCard);
        let imageTag = el.querySelector('.back-view img');
        imageTag.src = `images/img-${arr[ind]}.png`;
    });

    console.log(arr);
}





function timer(time) {
    const timer = setInterval(() => { //setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
        timerView.textContent = (time <= 0)
            ? clearInterval(timer) //Отменяет регулярное выполнение функции
            : time--

        if (time <= 0) {
            btn.style.pointerEvents = 'auto';
            cards.forEach(function (el) {
                el.removeEventListener('click', flipCard);
            })
        }
        if (matcht === 8) {
            matcht = 0;
            timerView.textContent = 'Вы выиграли!';
            btn.style.pointerEvents = 'auto';
            clearInterval(timer);
        }
    }, 1000)
}


btn.addEventListener('click', function () {

    cards.forEach(function (el) {
        el.classList.remove('flip');
        el.addEventListener('click', flipCard);
    });

    btn.style.pointerEvents = 'none';
    timerView.textContent = '';

    moveRandom();

    let time = 60; // Задаём начальное время

    timer(time);
})






