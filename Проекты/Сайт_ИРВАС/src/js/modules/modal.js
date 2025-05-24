export function modalOpen(modal) { //Функция по открытию модального окна
    modal.style.display = "block";
    document.body.classList.add('modal__lock');
}

export function modalClose(modal) { //Функция по закрытие модального окна
    modal.style.display = "none";
    document.body.classList.remove('modal__lock');
}

export function modalCloseSpace(event, modal) { //Закрывает модальное окно если кликнуть за его пределами 
    if (event.target === modal || event.target.classList.contains('overlay')) {
        modal.style.display = "none";
        document.body.classList.remove('modal__lock');
    }
}
