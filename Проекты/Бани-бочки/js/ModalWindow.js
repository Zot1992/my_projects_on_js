//Получаем все кнопки при нажатии на которые открывается модальное окно
let buttons = document.querySelectorAll(".btn--modal");
//Получаем id навигации
let navig = document.getElementById("nav");

let unlock; //Переменная нужна что бы не было двойных нажатий.

for (let i = 0; i < buttons.length; i++) {
  // Получить модальный
  let modal = document.getElementsByClassName("modal");
  // Получить кнопку, которая открывает модальный
  let btn = document.getElementsByClassName("btn--modal");
  // Получить элемент <span>, который закрывает модальный
  let span = document.getElementsByClassName("close");

  btn[i].addEventListener('click', function () {
    {
      navig.style.display = "none";
      modal[i].style.display = "block";
      $('body').toggleClass('modal__lock');
    }
  });

  span[i].addEventListener('click', function () {
    modal[i].style.display = "none";
    navig.style.display = "block";
    $('body').toggleClass('modal__lock');
    unlock = false;
  });

  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
  window.addEventListener('click', function (event) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
      navig.style.display = "block";
      $('body').toggleClass('modal__lock');

    }
  });
}





