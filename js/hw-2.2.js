//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let firstIphoneReleaseYear = 2007;
alert(firstIphoneReleaseYear);

//Задание 3
let javascriptCreatorName = "Brendan Eich";
alert(javascriptCreatorName);

//Задание 4
let x = 10;
let y = 2;
alert(x + y) + " " + (x - y) + " " + (x * y) + " " + (x / y);

//Задание 5
result = y ** 5;
alert(result);

//Задание 6
a = 9;
let b = 2;
alert(a % b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//Задание 8
let age = prompt('Сколько вам лет?');
alert(age);
//alert("Вам " + age + " лет.");

//Задание 9
const user = {
     name: "Вася",
     age: 25,
     isAdmin: true,
};

//Задание 9.1
user['city of residence'] = 'Лиман';

//Задание 9.2
user.age = 28;

//Задание 9.3
delete user['city of residence'];

//Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//Задание 10
let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);
