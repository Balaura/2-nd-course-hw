// // Задание 1
// function getSmallerNumber() {

//      const num1 = parseInt(prompt('Введите первое число 1:'), 10);
//      const num2 = parseInt(prompt('Введите второе число:'), 10);

//      return num1 < num2 ? num1 : num2;
// }
// console.log(getSmallerNumber());

// // Задание 2

// function parityOfNumber() {
//      let num = parseInt(prompt('Введите число:'), 10);

//      return num % 2 === 0 ? 'Число четное' : 'Число нечетное';
// }

// parityOfNumber();

// // Задание 3

// function getSquare() {
//      const num = parseInt(prompt('Введите число:'), 10);
//      const result = num * num;
//      console.log(result);
// }
// getSquare();

// function squareNumber(number) {
//      return number * number;
// }

// // Задание 4

// function getUserAge() {
//      let age = prompt('Сколько вам лет?');

//      if (age < 0 || age !== Number(age) || age === '') {
//           console.log('Вы ввели неправильное значение');
//      } else if (age >= 0 && age <= 12) {
//           console.log('Привет, друг!');
//      } else {
//           console.log('Добро пожаловать!');
//      }
// }

// getUserAge();

// // Задание 5

// function checkIsNumber() {
//      let num1 = prompt('Введите первое число:');
//      let num2 = prompt('Введите второе число:');

//      if (isNaN(num1) || isNaN(num2)) {
//           return 'Одно или оба значения не являются числом';
//      } else {
//           return num1 * num2;
//      }
// }

// checkIsNumber();

// // Задание 6

// function cubeNumber() {
//      let number = prompt('Введите число');

//      if (isNaN(number)) {
//           return 'Переданный параметр не является числом';
//      } else {
//           const cube = number ** 3;
//           return `${number} в кубе равняется ${cube}`;
//      }
// }

// // Проверяем функцию с параметрами от 0 до 10 включительно
// for (let i = 0; i <= 10; i++) {
//      console.log(cubeNumber(i));
// }

// // Задание 7

// const circle1 = {
//      radius: 10,
//      getArea: function () {
//           return this.radius * this.radius;
//      }
// };

// console.log(circle1.getArea());

// const circle2 = {
//      radius: 12,
//      getPerimeter: function () {
//           return 2 * this.radius;
//      }
// }

// console.log(circle2.getPerimeter());

// Задание 8

// function getSeasonByMonth() {
//      let monthNumber = prompt('Введите номер месяца');

//      if (monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber)) {
//           return 'Некорректный параметр: введите число от 1 до 12';
//      } else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
//           return 'Зима';
//      } else if (monthNumber >= 3 && monthNumber <= 5) {
//           return 'Весна';
//      } else if (monthNumber >= 6 && monthNumber <= 8) {
//           return 'Лето';
//      } else if (monthNumber >= 9 && monthNumber <= 11) {
//           return 'Осень';
//      }

// }

// getSeasonByMonth();
document.addEventListener('DOMContentLoaded', function () {
     var playButton = document.getElementById('playButton');

     playButton.addEventListener('click', function () {
          alert(getSeasonByMonth());
     });
});

function getSeasonByMonth() {
     let monthNumber = prompt('Введите номер месяца');
     monthNumber = parseInt(monthNumber);

     if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
          return 'Некорректный параметр: введите число от 1 до 12';
     } else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
          return 'Зима';
     } else if (monthNumber >= 3 && monthNumber <= 5) {
          return 'Весна';
     } else if (monthNumber >= 6 && monthNumber <= 8) {
          return 'Лето';
     } else if (monthNumber >= 9 && monthNumber <= 11) {
          return 'Осень';
     }

}



