const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // добавляем парсер для тела запроса
const app = express();

// Путь к папке с вашими файлами
const publicPath = path.join(__dirname, '../src');

// Настройка статического каталога
app.use(express.static(publicPath));

// Добавляем middleware для парсинга JSON
app.use(bodyParser.json());

// Корневой маршрут
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Добавляем обработчик POST-запроса
app.post('/submit-form', (req, res) => {
    const data = req.body;

    // Проверяем обязательные поля
    if (!data.user_name || !data.user_phone) {
        return res.status(400).json({ error: 'Недостаточно данных' });
    }

    // Для примера сохраняем данные в консоль
    console.log('Полученные данные:', data);

    // Отправляем ответ клиенту
    res.status(200).json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});