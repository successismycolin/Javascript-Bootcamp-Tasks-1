// Conditional Statements & Loops

// Exercise 1: Temperature check

// 1. Write a code using if else statements to check the temperature
//    and print a message based on the following conditions:
    let temperature = 20;
    // a. If the temperature is below 0, print "It's freezing!"
    if (temperature < 0) {
        console.log("It's freezing!")
    // b. If the temperature is between 0 and 15, print "It's cold."
    } else if (0 <= temperature <= 15) {
        console.log("It's cold.")
    // c. If the temperature is between 16 and 25, print "It's mild."
    } else if (16 <= temperature <= 25) {
        console.log("It's mild.")
    // d. If the temperature is above 25, print "It's warm."
    } else if (temperature > 25) {
        console.log("It's warm.")
    }

// 2. Rewrite the code using Switch Statements.

    switch (true) {
        case (temperature < 0): 
            console.log("It's freezing!");
            break;
        case (0 <= temperature <= 15): 
            console.log("It's cold.");
            break;
        case (16 <= temperature <= 25): 
            console.log("It's mild.");
            break;
        case (temperature > 25): 
            console.log("It's warm.");
    }

// Exercise 2: Divisibility Check
// 1. Write a code using if else statements to check if a number is
//    divisible by 2, 3, or both:
    let number = 11;
    // a. If the number is divisible both by 2 and 3, print "Divisible by both."
    if (number % 2 == 0 && number % 3 == 0) {
        console.log("Divisible by both 2 and 3.");
    // b. If the number is divisible by only 2, print "Divisible by 2."
    } else if (number % 2 == 0) {
        console.log("Divisible by 2.");
    // c. If the number is divisible by only 3, print "Divisible by 3."
    } else if (number % 3 == 0) {
        console.log("Divisible by 3.");
    // d. If the number is not divisible by either, print "Not divisible by 2 or 3."
    } else if (!number % 2 == 0 && !number % 3 == 0) {
        console.log("Not divisible by 2 or 3.");
    }

// 2. Rewrite the code using switch statements.

switch (true) {
    case (number % 2 == 0 && number % 3 == 0):
        console.log("Divisible by both 2 and 3.");
        break;
    case (number % 2 == 0):
        console.log("Divisible by 2.");
    case (number % 3 == 0):
        console.log("Divisible by 3");
    case (!number % 2 == 0 && !number % 3 == 0):
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops 

// 1. Print numbers from 1 to 10.
for (number = 1; number <= 10; number++) {
    console.log(number);
}

// 2. Print all even numbers between 1 and 20.
for (number = 2; number <= 20; number+=2) {
    console.log(number);
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result. Hint '+='
let sum = 0;
for (number = 1; number <= 100; number++) {
    sum += number;
}
console.log(sum);

// 4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each element to the console.
const numbers = [1, 2, 3, 4, 5];
for (number in numbers) {
    console.log(number)
}

// 5. const numbers = [3, 7, 2, 5, 10, 6]. Given the array of numbers, find and print the largest number. 
//    Hint: current value and previous value.
let previousValue = numbers[0];
let highestValue = numbers[0];
for (currentValue in numbers) {
    if (currentValue > previousValue) {
        highestValue = currentValue;
    }
    previousValue = currentValue;
}
console.log(highestValue);

// Exercise 4: While loops

// 1. Print numbers from 1 to 10.
let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

// 2. Print all even numbers between 1 and 20.
let number = 1;
while (number <= 20 && number % 2 == 0) {
    console.log(number);
    number++;
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
let number = 1;
let sum = 0;
while (number <= 100) {
    sum += number;
    number ++;
}
console.log(sum);

// 4. Print all multiples of 5 less than 50. Hint: '%'
let number = 1;
while (number <= 50 && number % 5 == 0) {
    console.log(number);
    number++
}

// Exercise 5: Do While loops

// 1. Print numbers from 1 to 10.
let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 10);

// 2. Calculate the sum of all numbers from 1 to 100 and print the result.
let number = 1;
let sum = 0;
do {
    sum += number;
    number++;
} while (number <= 100);
console.log(sum);

// 3. Prompt the user to enter a number greater than 10. Keep asking until they enter
//    a valid number.
do {
    let input = Number(prompt("Please enter a number greater than 10: "));
} while (input <= 10);

// 4. Create a simple guessing game where the user must guess a number between 1 and 10.
//    The game continues until the user guesses the correct number.
let targetNumber = 3;
let guess;

do{
    let input = Number(prompt("Guess a number between 1 and 10: "));
} while (guess !== targetNumber);