import { modalClose } from './modal.js';

export function shiftType(input) { // Меняем тип input на number
    input.type = 'number';
}

export function initForms(calcData, jsonCalc) {
    const forms = document.querySelectorAll('.form');
    const inputPhones = document.querySelectorAll('input[name="user_phone"]');
    const json = [];

    inputPhones.forEach(inp => {
        inp.addEventListener('input', () => {
            inp.value = inp.value.replace(/[^0-9]/g, '');
        })
    })

    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = form.querySelector('input[name="user_name"]').value.trim();
            const phone = form.querySelector('input[name="user_phone"]').value.trim();

            if (name.length < 2) {
                showInd(form, 'error', 'Имя должно быть длинее одного символа');
                return;
            }
            if (!/^\d{10,15}$/.test(phone)) {
                showInd(form, 'error', 'Введите коректный номер телефона 10-15');
                return;
            }
            showInd(form, 'louding', 'Отправка...');

            const data = {
                user_phone: phone,
                user_name: name
            }

            if (form.closest('#popup_calc_end') && calcData && Object.keys(calcData).length > 0) {
                data.calc = calcData;
                jsonCalc.push({
                    ...calcData,
                    date: { name, phone }
                })
            }
            else {
                json.push({
                    name, phone
                });
            }

            try {
                const response = await fetch('http://localhost:3000/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                if (response.ok) {
                    showInd(form, 'успех', 'Заявка отправлена!');
                    form.reset();
                    if (form.closest('#popup_calc_end')) {
                        modalClose(document.querySelector('#popup_calc_end'));
                    }
                }
                else {
                    showInd(form, 'ошибка', 'Ошибка отправки!');
                }

            }
            catch (error) { showInd(form, 'ошибка', 'Ошибка сети!'); }
        })
    })
}

function showInd(form, type, mesage) {
    let nat = form.querySelector('.form-natific');

    if (nat) {
        nat.remove();
    }

    nat = document.createElement('div');
    nat.className = `form-natific ${type}`;
    nat.textContent = mesage;

    form.appendChild(nat);

    setTimeout(function () {
        return nat.remove();
    }, 3000);
}