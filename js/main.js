// Функция для проверки правильности email-адреса
function validateEmail(email) {
    // Проверяем, содержит ли строка символ '@'
    const atPosition = email.indexOf('@');
    // Проверяем, содержит ли строка символ '.' после '@'
    const dotPosition = email.indexOf('.', atPosition);
    
    // Если '@' есть и '.' находится после '@'
    if (atPosition > 0 && dotPosition > atPosition + 1) {
        return true; // Email валиден
    } else {
        return false; // Email невалиден
    }
}

// Функция для отображения результата проверки
function checkEmail() {
    // Получаем значение из поля ввода
    const email = document.getElementById('email').value;
    // Элемент для отображения ошибки
    const errorMsg = document.getElementById('error-msg');
    
    // Проверяем email
    if (validateEmail(email)) {
        errorMsg.textContent = ''; // Если email валиден, убираем сообщение об ошибке
    } else {
        errorMsg.textContent = 'Adresse email invalide'; // Если невалиден, показываем сообщение
    }
}

// Добавляем обработчик события 'keyup' на поле ввода
document.getElementById('email').addEventListener('keyup', checkEmail);