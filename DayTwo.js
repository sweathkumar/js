// 🌟 Day 2 – JavaScript Practice

console.log("=== IF / ELSE IF / ELSE ===");
let score = 85;
if (score >= 90) {
  console.log('A Grade');
} else if (score >= 75) {
  console.log('B Grade');
} else {
  console.log('Needs improvement');
}

// Check if number is +ve, -ve, or 0
let num = -5;
if (num > 0) {
  console.log('Positive');
} else if (num < 0) {
  console.log('Negative');
} else {
  console.log('Zero');
}

// === SWITCH CASE ===
console.log("=== SWITCH ===");
let day = 'Saturday';
switch (day) {
  case 'Monday':
    console.log('Start of the week');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend vibes!');
    break;
  default:
    console.log('Just another day');
}

// === FOR LOOP ===
console.log("=== FOR LOOP ===");
for (let i = 1; i <= 5; i++) {
  console.log('Loop count:', i);
}

// === WHILE LOOP ===
console.log("=== WHILE LOOP ===");
let count = 3;
while (count > 0) {
  console.log('Countdown:', count);
  count--;
}

// === DO WHILE LOOP ===
console.log("=== DO WHILE LOOP ===");
let xx = 0;
do {
  console.log('Runs at least once:', x);
  xx++;
} while (xx < 1);

// === FUNCTIONS ===
console.log("=== FUNCTION ===");
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Sweath'));

function isEvenOrOdd(n) {
  return n % 2 === 0 ? 'Even' : 'Odd';
}
console.log('17 is', isEvenOrOdd(17));

function square(n) {
  return n * n;
}
console.log('Square of 6:', square(6));

// === ARROW FUNCTIONS ===
console.log("=== ARROW FUNCTION ===");
const add = (a, b) => a + b;
console.log('5 + 7 =', add(5, 7));

const isEven = (n) => n % 2 === 0;
console.log('10 is even?', isEven(10));

// === PRACTICE TASKS ===
console.log("=== PRACTICE TASKS ===");

// Task 1: Age check
let old = 17;
let status = old >= 18 ? 'Adult' : 'Minor';
console.log('Age status:', status);

// Task 2: Even numbers 1–20
console.log('Even numbers from 1 to 20:');
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// Task 3: FizzBuzz Function
function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  else if (n % 3 === 0) return 'Fizz';
  else if (n % 5 === 0) return 'Buzz';
  else return n;
}
console.log('FizzBuzz test for 15:', fizzBuzz(15));
console.log('FizzBuzz test for 9:', fizzBuzz(9));
console.log('FizzBuzz test for 10:', fizzBuzz(10));
console.log('FizzBuzz test for 7:', fizzBuzz(7));
