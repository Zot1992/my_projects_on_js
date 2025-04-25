let catalog = [
    { id: 1, name: "Телефон", price: 25000, category: "Электроника", discount: 10, tags: ["новинка"] },
    { id: 2, name: "Куртка", price: 5000, category: "Одежда", discount: 10, tags: ["распродажа"] },
    { id: 3, name: "Ноутбук", price: 75000, category: "Электроника", discount: 15, tags: ["новинка"] },
    { id: 4, name: "Шапка", price: 1500, category: "Одежда", discount: 20, tags: ["распродажа"] },
];

const newName = document.querySelector('#newName');
const newPrice = document.querySelector('#newPrice');
const newCategory = document.querySelector('#newCategory');
const newDiscount = document.querySelector('#newDiscount');
const addItem = document.querySelector('#addItem');
const catalogList = document.querySelector('#catalogList');
const totalPrice = document.querySelector('#totalPrice');
const showDiscounted = document.querySelector('#showDiscounted');
const sortByName = document.querySelector('#sortByName');
const allTags = document.querySelector('#allTags');
const allDiscounted = document.querySelector('#allDiscounted');
const delItem = document.querySelector('#delItem');
const delName = document.querySelector('#delName');
const categoryFilter = document.querySelector('#categoryFilter');
const findTag = document.querySelector('#findTag');
const findTagName = document.querySelector('#findTagName');
const findName = document.querySelector('#findName');
const findNameInput = document.querySelector('#findNameInput');
const reverseItems = document.querySelector('#reverseItems');




function removingBrackets(arr) {  // Избавляемся от скобок в tags
    arr.forEach(item => {
        item.tags = item.tags.join(', ');
    });
}

function sumPrice(arr) { //Сумма всех цен
    let sum = arr.reduce(function (a, b) {
        return a + b.price;
    }, 0);

    return totalPrice.textContent = `${sum}`;
}

function viewTags(arr) { //Показать теги
    let arrTags = [];
    let tag = '';

    for (let el of arr) {
        // Добавляем только если тега ещё нет в массиве
        if (!arrTags.includes(el.tags)) {
            arrTags.push(el.tags);
        }
    }

    for (let i = 0; i < arrTags.length; i++) {
        if (i > 0) {
            tag += ', ';
        }
        tag += arrTags[i];
    }

    return allTags.textContent = tag;
}

function view(arr) { //Вывести все товары на экран
    for (let el of arr) {
        let li = document.createElement('li');
        li.className = 'item';
        li.textContent = `Название: ${el.name}, Цена: ${el.price}, 
        Категория: ${el.category}, Cкидка: ${el.discount}%`;
        catalogList.appendChild(li);
    }
}

function viewElement(el) { //Выводить по 1 товару на экран
    let li = document.createElement('li');
    li.className = 'item';
    li.textContent = `Название: ${el.name}, Цена: ${el.price}, 
        Категория: ${el.category}, Cкидка: ${el.discount}%`;
    catalogList.appendChild(li);
}

removingBrackets(catalog);
view(catalog);
viewTags(catalog);
sumPrice(catalog);

reverseItems.addEventListener('click', function () { //Показать товары по алфавиту в обратном порядке

    catalogList.textContent = '';

    catalog.sort(function (a, b) {
        return b.name.localeCompare(a.name);
    });

    view(catalog);
})

findTag.addEventListener('click', function () { //Поиск по тегу

    catalogList.textContent = '';
    let check = false;

    for (let el of catalog) {
        if (findTagName.value === el.tags) {
            viewElement(el);
            check = true;
        }

    }

    if (!check) {
        alert('Такого тега нет!');
        view(catalog);
    }

    findTagName.value = '';
})

findName.addEventListener('click', function () { //Поиск по названию

    catalogList.textContent = '';
    let check = false;
    const searchValue = findNameInput.value.toLowerCase(); // Получаем введённое значение в нижнем регистре

    for (let el of catalog) {
        if (el.name.toLowerCase().includes(searchValue)) { //Проверяем наличие подстроки
            viewElement(el);
            check = true;
        }
    }

    if (!check) {
        alert('Такого названия нет!');
        view(catalog);
    }

    findNameInput.value = '';
})


addItem.addEventListener('click', function () { //Добавить новый товар
    catalogList.textContent = '';
    view(catalog);

    if (newCategory.value === 'Электроника' || newCategory.value === 'Одежда') {
        if (newName.value && newPrice.value && newCategory.value && newDiscount.value) {

            const newTags = ["новинка"].join(', ');

            catalog.push({
                id: catalog.length + 1,
                name: newName.value,
                price: parseInt(newPrice.value),
                category: newCategory.value,
                discount: parseInt(newDiscount.value),
                tags: newTags,

            });

            let li = document.createElement('li');
            li.className = 'item';
            li.textContent = `Название: ${catalog[catalog.length - 1].name}, Цена: ${catalog[catalog.length - 1].price}, 
            Категория: ${catalog[catalog.length - 1].category}, Cкидка: ${catalog[catalog.length - 1].discount}%`;
            catalogList.appendChild(li);

            if (catalog[catalog.length - 1].discount === 0) {
                allDiscounted.textContent = 'Нет';
                console.log(catalog[catalog.length - 1].discount);
            }
            else {
                allDiscounted.textContent = 'Да';
            }

            sumPrice(catalog);
            console.log(catalog);
            newName.value = '';
            newPrice.value = '';
            newCategory.value = '';
            newDiscount.value = '';
        }
    }
    else {
        alert('Такой категории нет! Вы можете вводить только категории: Электроника, Одежда.');
    }

})

delItem.addEventListener('click', function () { //Удалить товар по названию

    let findIndex = catalog.findIndex((el) => el.name === delName.value);

    if (findIndex !== -1) {
        catalog.splice(findIndex, 1);
        console.log(catalog);
        delName.value = '';
        catalogList.textContent = '';
        view(catalog);
        sumPrice(catalog);
    }
    else {
        alert('Элемент не найден!');
    }
})

sortByName.addEventListener('click', function () { //Сортировка по названию
    catalogList.textContent = '';
    catalog.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    view(catalog);
})

showDiscounted.addEventListener('click', function () { //Показать скидки больше 10%
    catalogList.textContent = '';
    for (let el of catalog) {
        if (el.discount > 10) {
            viewElement(el);
            allDiscounted.textContent = 'Да';
        }
    }
})

categoryFilter.addEventListener('change', function () { // Работа с select. Взависимости от выбранного пункта выводит нужные значения.

    catalogList.textContent = '';

    let value = categoryFilter.value;

    switch (value) {
        case 'all':
            view(catalog)
            break;

        case 'Электроника':
            for (let el of catalog) {
                if (el.category === 'Электроника') {
                    viewElement(el)
                }
            }
            break;

        case 'Одежда':
            for (let el of catalog) {
                if (el.category === 'Одежда') {
                    viewElement(el)
                }
            }
            break;


        default:
            alert('Не работает');
    }
})
