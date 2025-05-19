const fs = require('fs');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Функция для генерации случайного пароля
function generateRandomPassword(length = 12) {
  return crypto.randomBytes(length).toString('hex').slice(0, length); // Генерирует строку из 12 символов
}

// Загрузите файл JSON
fs.readFile('output.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }

  // Преобразуем JSON в объект
  let jsonData = JSON.parse(data);

  // Проверьте, есть ли массив пользователей в данных
  if (jsonData.users && Array.isArray(jsonData.users)) {
    // Обрабатываем каждого пользователя
    jsonData.users = jsonData.users.map(user => {
      // Генерируем случайный пароль для пользователя
      const password = generateRandomPassword();
      
      // Хешируем пароль с использованием bcrypt
      const passwordHash = bcrypt.hashSync(password, 10);
      
      // Добавляем новый хеш пароля
      user.passwordHash = passwordHash;
      user.password = password;  // Добавляем оригинальный пароль (если нужно)

      console.log(`User: ${user.username}, Password: ${password}, Hash: ${passwordHash}`);

      return user;
    });
  } else {
    console.error('Массив пользователей не найден в данных!');
    return;
  }

  // Сохраняем обновленные данные обратно в файл JSON
  fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
    } else {
      console.log('Данные пользователей обновлены успешно!');
    }
  });
});
