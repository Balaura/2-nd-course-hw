//Задание 1

let password = 'пароль';
let confirmPassword = prompt('Введите пароль');

if (password === confirmPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задание 2

let c = prompt('Введите число');

if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 3

let d = prompt('Введите число');
let e = prompt('Введите число');

if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5

let monthNumber = prompt('Введите номер месяца');

switch (+monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Номер месяца больше 12');
        break;
}

//Задание 7

let userInput = prompt('Пожалуйста, введите любое число');
let number = Number(userInput);

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
} else {
    alert('Вы ввели не число');
}

//Задание 8

let clientOS = prompt('Если вы используете iOS, введите 0. Если Android, введите 1.');
clientOS = Number(clientOS);

switch (clientOS) {
    case 0:
        console.log('Установите версию приложения для iOS по ссылке');
        break;
    case 1:
        console.log('Установите версию приложения для Android по ссылке');
        break;
    default:
        console.log('Не удалось определить операционную систему или введены некорректные данные');
}

//Задание 9

let OS = prompt('Если вы используете iOS, введите 0. Если Android, введите 1.');
let clientDeviceYear = prompt('Введите год выпуска вашего телефона.');
OS = Number(OS);
clientDeviceYear = Number(clientDeviceYear);

let clientOSYear = clientDeviceYear <= 2015 ? 'облегчённую  версию' : 'версию';

switch (OS) {
    case 0:
        console.log(`Установите ${clientOSYear} приложения для iOS по ссылке`);
        break;
    case 1:
        console.log(`Установите ${clientOSYear} приложения для Android по ссылке`);
        break;
    default:
        console.log('Не удалось определить операционную систему или введены некорректные данные');
}
