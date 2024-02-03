// Задание 1

const people = [
     { name: 'Глеб', age: 29 },
     { name: 'Анна', age: 17 },
     { name: 'Олег', age: 7 },
     { name: 'Оксана', age: 47 }
];

people.sort((x, y) => x.age - y.age);

console.log(people);

// Задание 2

function isPositive(num) {
     return num >= 0;
}
function isMale(human) {
     return human.gender === "male";
}
function filter(arr, ruleFunction) {
     const output = [];
     for (i = 0; i < arr.length; i++) {
          if (ruleFunction(arr[i])) {
               output.push(arr[i]);
          }
     }
     return output;
}
console.log(filter([3, -4, 1, 9], isPositive));

const peopleFilter = [
     { name: 'Глеб', gender: 'male' },
     { name: 'Анна', gender: 'female' },
     { name: 'Олег', gender: 'male' },
     { name: 'Оксана', gender: 'female' }
];
console.log(filter(peopleFilter, isMale));

// Задание 3

function timer30(seconds) {
     const interval = setInterval(() => {
          console.log(new Date().toString());
     }, 3000);

     setTimeout(() => {
          clearInterval(interval);
          console.log('30 секунд прошло');
     }, seconds * 1000);
}

timer30(30);

// Задание 4

function delayForSecond(callback) {
     setTimeout(callback, 1000);
}

delayForSecond(function () {
     console.log('Привет, Глеб!');
})


// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
     setTimeout(() => {
          console.log('Прошла одна секунда');
          if (cb) { cb(); }

     }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
     console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));


