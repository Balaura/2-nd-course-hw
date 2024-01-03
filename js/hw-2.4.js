//Задание 1

let i = 0;

while (i <= 2) {
     console.log("Привет");
     i++;
}

//Задание 2

let number = 1;

while (number <= 5) {
     console.log(number);
     number++;
}

for (let number = 1; number <= 5; number++) {
     console.log(number);
}

//Задание 3

for (let i = 7; i <= 22; i++) console.log(i);

//Задание 4

const obj = {
     "Коля": '200',
     "Вася": '300',
     "Петя": '400'
};

for (key in obj) {
     console.log(`${key} - зарплата ${obj[key]} долларов`);
}

//Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
     n /= 2;
     num++;
}

console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${num}`);

//Задание 6

let firstFriday;

do {
     firstFriday = prompt(`Введите число первой пятницы месяца (число от 1 до 7):`);
     firstFriday = Number(firstFriday);
} while (!Number.isInteger(firstFriday) || firstFriday < 1 || firstFriday > 7);
for (let day = firstFriday; day <= 31; day += 7) {
     console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

