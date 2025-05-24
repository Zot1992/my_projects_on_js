import {
    glazing_price_btn, popup_calc, popup_calc_close, balcon_icons, big_img,
    popup_calc_button, popup_calc_profile, popup_calc_profile_button, popup_calc_profile_close, popup_calc_end, form_popup_calc_end, popup_calc_end_close,
    cold, warm
} from '../variables.js';
import { modalOpen, modalClose } from './modal.js';
import { shiftType } from './forms.js';

const saveState = {
    index: -1,
    width: null,
    height: null,
    view_type: null,
    cold: null,
    warm: null
};

export function initCalculator() {

    const calcData = [];

    glazing_price_btn.forEach(btn => {// Обработчик кнопок "Рассчитать стоимость"
        btn.addEventListener('click', () => {
            modalOpen(popup_calc);
        });
    });

    popup_calc_close.addEventListener('click', () => {// Закрытие калькулятора
        modalClose(popup_calc);
    });

    // Настройка индексов для иконок и изображений
    balcon_icons.forEach((el, index) => {
        el.setAttribute('data-index', index);
    });

    big_img.forEach((el, index) => {
        el.setAttribute('data-index', index);
    });

    balcon_icons.forEach(btn => { // Выбор формы балкона
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);

            big_img.forEach(img => {
                img.style.display = 'none';
            });

            balcon_icons.forEach(icon => {
                icon.classList.remove('do_image_more');
            });

            big_img[index].style.display = 'block';
            big_img[index].style.margin = 'auto auto 3rem auto';
            balcon_icons[index].classList.add('do_image_more');

            saveState.index = index;
        });
    });

    shiftType(width);
    shiftType(height);

    popup_calc_button.addEventListener('click', () => {  // Переход к выбору профиля
        saveState.width = parseInt(width.value);
        saveState.height = parseInt(height.value);

        (saveState.index === -1 || isNaN(saveState.width) || isNaN(saveState.height)) ? alert('Выберите форму балкона и размеры')
            : (modalClose(popup_calc), modalOpen(popup_calc_profile))
    });

    popup_calc_profile_close.addEventListener('click', () => { // Закрытие выбора профиля
        modalClose(popup_calc_profile);
    });


    function checkboxWork(check_1, check_2) { //Обеспечивает выбор только одного чекбокса
        check_1.addEventListener('change', () => {
            if (check_1.checked) {
                check_2.checked = false;
            }
        });

        check_2.addEventListener('change', () => {
            if (check_2.checked) {
                check_1.checked = false;
            }
        });
    }

    checkboxWork(cold, warm);

    popup_calc_profile_button.addEventListener('click', () => {
        saveState.view_type = view_type.value;
        saveState.cold = cold.checked;
        saveState.warm = warm.checked;

        (saveState.cold === false && saveState.warm === false) ? alert('Выберите профиль остекления')
            : (modalClose(popup_calc_profile), modalOpen(popup_calc_end))

    });

    form_popup_calc_end.addEventListener('submit', (event) => { // Обработка формы
        event.preventDefault();

        calcData.push({
            img: saveState.index,
            width: saveState.width,
            height: saveState.height,
            type: saveState.view_type,
            cold: saveState.cold,
            warm: saveState.warm,
        })

        console.log(calcData);
    })

    popup_calc_end_close.addEventListener('click', function () {
        modalClose(popup_calc_end);
    });

    return calcData;
}