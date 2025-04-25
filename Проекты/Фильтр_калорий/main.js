const fruits = [
    { name: "Яблоко", calories: 52 },
    { name: "Банан", calories: 89 },
    { name: "Апельсин", calories: 47 },
    { name: "Виноград", calories: 69 },
    { name: "Манго", calories: 60 }
];

const minCalor = document.querySelector('#minCalor');
const maxCalor = document.querySelector('#maxCalor');
const fruitList = document.querySelector('#fruitList');
const calor = document.querySelector('#calor');
let sumCalories = 0;

console.log(fruits);

fruits.forEach(el => {
    let li = document.createElement('li');
    li.classList.add('list');
    fruitList.append(li);
    li.innerHTML = el.name + ': <span style="font-weight: 700; font-size: 22px;">' + el.calories + '</span>';
});

sumCalories = fruits.reduce(function (a, b) {
    return a + b.calories;
}, 0); // Объект, используемый в качестве первого аргумента при первом вызове функции callback. Без него подсчет будет отобращаться некоректно.

calor.textContent = sumCalories;

console.log(sumCalories);

function sortFruits(arr) {
    sumCalories = 0;
    fruitList.innerHTML = '';

    arr.sort(function (a, b) {
        return a.calories - b.calories;
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].calories >= minCalor.value && arr[i].calories <= maxCalor.value) {
            const li = document.createElement('li');
            li.classList.add('list');
            fruitList.append(li)
            li.innerHTML = arr[i].name + ': <span style="font-weight: 700; font-size: 22px;">' + arr[i].calories + '</span>'
            sumCalories += arr[i].calories;
        }
        else {
            continue;
        }
    }

    calor.textContent = sumCalories;
}

function checkInputs() {
    const minValue = parseFloat(minCalor.value); //преобразуем значения из строк в числа
    const maxValue = parseFloat(maxCalor.value);

    (minValue != '' && maxValue != '' && minValue <= maxValue)
        ? (sortFruits(fruits),
            console.log('Работает'),
            console.log(fruits))

        : (console.log('Не работает'))
}

minCalor.addEventListener('input', checkInputs);
maxCalor.addEventListener('input', checkInputs);
