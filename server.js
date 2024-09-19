const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

// Указываем папку dist как статическую
app.use(express.static(path.join(__dirname, 'dist')));

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});