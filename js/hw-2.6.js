// Задание 1 и 2

let products = [1, 5, 4, 10, 0, 3];
for (let item of products) {
     if (item === 10) break;
     console.log(item);
}
console.log(products.indexOf(4));

// Задание 3

let num = [1, 3, 5, 10, 20];
let str = num.join(' ');
console.log(str);

// Задание 4

let arr = [];
for (let i = 0; i < 3; i++) {
     arr[i] = [];
     for (j = 0; j < 3; j++) {
          arr[i][j] = 1;
     }
}
console.log(arr);

// Задание 5

let arry = [1, 1, 1];
arry.push(2, 2, 2)
console.log(arry);

// Задание 6

let array = [9, 8, 7, 'a', 6, 5];

let sortedArray = array.filter(item => item !== 'a').sort((a, b) => a - b);

console.log(sortedArray);

// Задание 7

let aray = [9, 8, 7, 6, 5];

let userGuess = prompt("Угадайте число:");
userGuess = parseInt(userGuess, 10);

if (aray.includes(userGuess)) {
     alert("Угадал");
} else {
     alert("Не угадал");
}

// Задание 8

let strok = 'abcdef';
let reversedStr = strok.split('').reverse().join('');

console.log(reversedStr);

// Задание 9
let arry1 = [[1, 2, 3], [4, 5, 6]];
let [a, b] = arry1;
let c = a.concat(b);
console.log(c);

// Задание 10
let arr1 = [9, 8, 7, 6, 5];

for (let i = 0; i < arr1.length - 1; i++) {
     let sum = arr1[i] + arr1[i + 1];
     console.log(`Сумма элементов с индексами ${i} и ${i + 1}: ${sum}`);
}

// Задание 11
let result = [9, 8, 7, 6, 5];

function powArr(nums) {
     return nums.map(num => num ** 2);
}
console.log(powArr(result));

// Задание 12
let words = ['ждать', 'здесь', 'спать', 'очень хочу', '-'];
function getLengthWords(words) {
     return words.map(word => word.length);
}

console.log(getLengthWords(words));

// Задание 13
let arrays = [9, -8, 7, 0, 5];

function filterPositive(arrays) {
     return arrays.filter(item => item < 0);
}

console.log(filterPositive(arrays));

// Задание 14

function getRandom() {

     let nums = [];

     for (let num = 0; num < 10; num++) {
          nums.push(Math.floor(Math.random() * 11));
     }
     console.log(nums);

     let numsEven = nums.filter(num => num % 2 === 0);
     console.log(numsEven);
}

// Задание 14

function getAverage() {

     let nums = [];

     for (let num = 0; num < 6; num++) {
          nums.push(Math.floor(Math.random() * 10 + 1));
     }

     let average = (nums.reduce((sum, current) => sum + current, 0)) / nums.length;

     console.log(nums);
     console.log(average);
}