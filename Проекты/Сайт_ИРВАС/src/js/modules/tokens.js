function hideAllBlocks(arr) { // Функция для скрытия всех блоков
    arr.forEach(block => {
        document.querySelector(block).style.display = 'none';
    });
}

export function createObject(arr, arr2) { // Создание объекта с ссылкой и блоком
    const elements = arr.map((link, index) => {
        return {
            link: document.querySelector(link),
            block: document.querySelector(arr2[index])
        };
    });

    return elements
}

export function view(arr, arr2) { //Отображает контект при нажатии на конкретный токен
    arr.forEach(element => {
        element.link.addEventListener('click', function () {
            hideAllBlocks(arr2);
            element.block.style.display = 'block';
        });
    });
}

export function turningIntoArr(arr) {
    const elementsImg = Array.from(arr);

    return elementsImg;
}

export function viewImg(arr, arr2) {
    arr.forEach((img, index) => { //Токены (Остекление балконов и лоджий) сработка по нажатию на картинку
        img.style.cursor = 'pointer';

        img.addEventListener('click', function () {
            hideAllBlocks(arr2);
            document.querySelector(arr2[index]).style.display = 'block';
        });
    });
}