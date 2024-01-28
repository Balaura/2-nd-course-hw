// Задание 1

let str = 'Текст';

str = str.toUpperCase();
console.log(str);

// Задание 2

function searchStart(arrayOfStrings, searchString) {
     return arrayOfStrings.filter(str => str.toLowerCase().startsWith(searchString.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3

let n = 32.58884;

console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n));

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// Задание 5

function randomNumber() {
     return Math.floor(Math.random() * 10) + 1;
}
for (i = 0; i <= 10; i++) {
     console.log(randomNumber());
}

// Задание 6

function getRandomArrNumbers(n) {
     let array = [];
     for (i = 1; i <= Math.floor(n / 2); i++) {
          array.push(Math.round(Math.random() * n));
     }
     return array;
}

console.log(getRandomArrNumbers(10));
console.log(getRandomArrNumbers(66));
console.log(getRandomArrNumbers(-3));
console.log(getRandomArrNumbers(3));
console.log(getRandomArrNumbers(3.6));

// Задание 7

function getRandomCoupleNumber(minNum, maxNum) {

     return Math.round(Math.random() * (maxNum - minNum + 1)) + minNum;
}
for (i = 0; i <= 10; i++) {
     console.log(getRandomCoupleNumber(10, 66));
}

// Задание 8

let myDate = new Date();

console.log(myDate);

// Задание 9

let currentDate = new Date();
let dateAfter73Days = new Date(currentDate.getTime());

dateAfter73Days.setDate(dateAfter73Days.getDate() + 73);

console.log("Дата через 73 дня:", dateAfter73Days.toDateString());

// Задание 10

function formatDateToRussian(myDate) {
     const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
     let correntDate = new Date();

     let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + weekdays[myDate.getDay()];
     let fullTime = " Время:" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
     let totalTime = fullDate + fullTime;
     return totalTime;
}

console.log(formatDateToRussian(myDate));

// Задание 11

document.addEventListener('DOMContentLoaded', function () {
     var playButton = document.getElementById('playButtonRemember');

     playButton.addEventListener('click', function () {
          rememberWords();
     });
});

function rememberWords() {
     let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
     let randomFruits = fruits.sort(() => Math.random() - 0.5);
     let firstFruit = randomFruits[0].toLowerCase();
     let lastFruit = randomFruits[randomFruits.length - 1].toLowerCase();
     let list = randomFruits.join(" - ");

     alert(list);

     const userFirstFruit = prompt('Чему равнялся первый элемент массива?').toLowerCase();
     const userLastFruit = prompt('Чему равнялся последний элемент массива?').toLowerCase();

     if (userFirstFruit === firstFruit && userLastFruit === lastFruit) {
          alert('Поздравляем! Вы угадали оба элемента.');
     } else if (userFirstFruit === firstFruit || userLastFruit === lastFruit) {
          alert('Вы были близки к победе!');
     } else {
          alert('Вы ответили неверно.');
     }
}
