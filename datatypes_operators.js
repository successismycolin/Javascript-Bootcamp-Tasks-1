// Data Types and Operators

// Exercise 1: Numbers

// 1. Declare a number variable and assign an integer to it.
//    Declare a variable and assign it a floating number.
let number1 = 5;
let number2 = 2.5;

// 2. Perform addition, subtraction, multiplication, division, modulus 
//    and exponentiation with a number variable and another number.
let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let modulus = number1 % number2;
let exponentiation = number1 ** number2;

// 3. Print all your variables.
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);
console.log(exponentiation);

// ----------------------------------------------------------------------

// Exercise 2: Boolean and Operators

// 1. Use comparison operators to compare two numbers and store the 
//    results in boolean variables.
let num1 = 3;
let num2 = 4;

// 2. Declare two variables x and y with the values 8 and 12 respectively.
let x = 8;
let y = 12;
// a. Use comparison operators to check and print the following:
// b. If x is greater than y.
console.log(x > y)
// c. If x is less than or equal to y.
console.log(x <= y)
// d. If x is equal to y.
console.log(x == y)
// e. If x is not equal to y.
console.log(x != y)

// 3. Declare the variables a and b with values true and false, determine 
//    and print the result of the following logical operations.
let a = true;
let b = false;
// a. a AND b
console.log(a && b)
// b. a OR b
console.log(a || b)
// c. NOT a
console.log(!a)

// 4. Declare variable p and assign it a value of 10. Use the following 
//    assignment operators to modify the value of p with any number and 
//    print the result each time.
let p = 10;
// a. +=
p += 5
console.log(p)
// b. -=
p -= 5
console.log(p)
// c. *=
p *= 5
console.log(p)
// d. /=
p /= 5
console.log(p)
// e. %=
p %= 5
console.log(p)