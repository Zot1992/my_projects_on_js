import {
    popup_engineer_btn, popup_engineer__call, popup_engineer_close, phone_link, popup__call, popup_close,
    feedback__phone_link, popup_calc, popup_calc_profile, popup_calc_end
} from '../variables.js';
import { modalOpen, modalClose, modalCloseSpace } from './modal.js';

export function modalWork() {
    popup_engineer_btn.addEventListener('click', function () { //Открывает модальное окно при нажатии на (Вызвать замерщика)
        modalOpen(popup_engineer__call);
    })

    popup_engineer_close.addEventListener('click', function () {
        modalClose(popup_engineer__call);
    });

    document.addEventListener('click', (event) => {  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
        modalCloseSpace(event, popup_engineer__call);
        modalCloseSpace(event, popup__call);
        modalCloseSpace(event, popup_calc);
        modalCloseSpace(event, popup_calc_profile);
        modalCloseSpace(event, popup_calc_end);
    })

    phone_link.addEventListener('click', function () { //Открывает модальное окно при нажатии на (Заказать обратный звонок)
        modalOpen(popup__call);
    })

    feedback__phone_link.addEventListener('click', function () { //Открывает модальное окно при нажатии на (Спросите у нашего специалиста!)
        modalOpen(popup__call);
    })

    popup_close.addEventListener('click', function () {
        modalClose(popup__call);
    });

    document.addEventListener('DOMContentLoaded', function () { // Таймер на открытие модальной страницы. Запускается при входе на страницу.
        setTimeout(function () {
            modalOpen(popup__call);
        }, 60000); // 60 секунд
    })
}