let name = 'Sweath';
const age = 23;
var isDeveloper = true;

console.log(name, age, isDeveloper);

// String manipulation
let greeting = 'Hello, ';
let target = 'World!';
console.log(greeting + target);
console.log(`Hello again, ${name}!`);

// Math
let a = 10;
let b = 3;
console.log(a + b, a - b, a * b, a / b, a % b);
console.log(Math.pow(2, 3));
console.log(Math.random()*3000);

// Boolean logic
console.log(5 > 3);
console.log(5 == '5');
console.log(5 === '5');
console.log(true && false);
console.log(true || false);

// Task 1: Swap two variables
let x = 5, y = 10;
x = x + y;
y = x - y;
x = x - y;
console.log('Swapped:', x, y);

// Task 2: Check even or odd
let number = 17;
console.log(number % 2 === 0 ? 'Even' : 'Odd');
