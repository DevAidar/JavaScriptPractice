console.log("Assessment loaded!");
// Write the code to solve the following problems.
// For each of the following, use window.prompt() to get user input.
// After getting each one right, "comment it out" so that when you
// refresh you don't have to keep typing things in!

// 1. Even or Odd

// Prompt the user for a number
// If the number is even print "even"
// If the number is odd print "odd"

// let num;
// num = window.prompt("Enter a number");
// alert((num % 2 == 0) ? "even" : "odd");

// 2. Sum numbers from the user

// Prompt the user to enter two numbers, then show their sum.

// let num;
// num = parseInt(window.prompt("Enter the first number"));
// num += parseInt(window.prompt("Enter the second number"));
// alert(`Sum is ${num}`);

// console.log(parseInt(num1) + parseInt(num2));

// 3. A random number from min to max

// The built-in function Math.random() creates a random value from 0 to 1 (not /// including 1).

// Write a function random(min, max) to generate a random floating-point number // from min to max (not including max).

// Examples of its work:

// function random(min, max) {
//     return Math.random() * (max - min) + min;
// }
//
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525



// 4. A random integer from min to max

// Create a function randomInteger(min, max) that generates a random integer
// from min to max, including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// You can use the solution of the previous task as the base.


// 5. Uppercase the first character

// Write a function ucFirst(str) that returns the string str with the
// uppercased first character, for instance:

// function ucFirst(str) {
//     return str.substr(0, 1).toUpperCase() + str.substr(1);
// }
//
// console.log(ucFirst("dog"));
// console.log(ucFirst("kitten"));

// 6. Check for spam

// Write a function checkSpam(str) that returns true if str contains ‘viagra’
// or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// function checkSpam(str) {
//     return str.toLowerCase().search("viagra") != -1 || str.toLowerCase().search("xxx") != -1;
// }

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// let emailString1 = 'buy ViAgRA now';
// let emailString2 = 'free xxxx';
// let emailString3 = 'innocent rabbit';
//
//
// console.log(checkSpam(emailString1));
// console.log(checkSpam(emailString2));
// console.log(checkSpam(emailString3));

// 7. Truncate the text

// Create a function truncate(str, maxlength) that checks the length of the str
// and, if it exceeds maxlength, truncates the string to make its length equal
// to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to tel"
// truncate("Hi everyone!", 20) = "Hi everyone!"

// function truncate(str, num) {
//     if (str.length > num) {
//         return str.substr(0, 20);
//     }
//     return str;
// }
//
// let string1 = "What I'd like to tell on this topic is:";
// let string2 = "What I'd like to tel";
// let string3 = "Hi everyone!";
//
// console.log(truncate(string1, 20));
// console.log(truncate(string2, 20));
// console.log(truncate(string3, 20));

// 8. Extract the money

// We have a cost in the form "$120". That is: the dollar sign goes first, and
// then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric
// value from such string and return it

// function extractCurrencyValue(str) {
//     return parseFloat(str.substr(1));
// }
//
// console.log(extractCurrencyValue("$120"));
// console.log(extractCurrencyValue("$8372.32"));
// console.log(extractCurrencyValue("$38217316.21"));
// console.log(extractCurrencyValue("$0.23"));

// 9. The List

// Big Gary's job is to make sure that the club only lets in the "best" class of clientele.
// Prompt the user for:
// - their age
// - their income
// - if they are a celebrity ("yes" or "no")
// - if they are wearing sneakers ("yes" or "no")

// If Big Gary let's you in, he prints: "*nod*"
// If he doesn't let you in, he prints: "You're not on the list."

// You are not allowed in if:
//   - you are under 18 or over 35.
//   - you have an income under 100,000.
//   - you are wearing sneakers.

// Otherwise you are let in. However, there are some exceptions, you will also be let in if:
//   - you are over 16 and a celebrity.
//   - you are over 16 and your income is over 5,000,000.
//   - you are under 25 (and over 18), you have an income over 250K, but are wearing sneakers.

// The test cases are as follows:
// age, money, celeb, shoes - Outcome

// Rare
// 15, 100K, y, n - N
// 16, 100K, y, n - Y
// 16, 4.9M, n, n - N
// 16, 5M, n, n - Y
// 17, 250K, n, y - N
// 25, 250K, n, y - N
// 20, 250K, n, y - Y
// 20, 249K, n, y - N

// Age
// 17, 100K, n, n - N
// 18, 100K, n, n - Y
// 35, 100K, n, n - N
// 34, 100K, n, n - Y

// Income
// 20, 99K, n, n - N
// 20, 100K, n, n - Y

// Shoes
// 20, 100K, n, y - N

// function clubTest(age, income, isCelebrity, isWearingSneakers) {
//     return (age >= 18 && age < 35 && income >= 100000 && !isWearingSneakers) ||
//            (!isWearingSneakers && isCelebrity && age >= 16) ||
//            (!isWearingSneakers && income >= 5000000 && age >= 16) ||
//            (income >= 250000 && age >= 18 && age < 25);
// }

// Rare
// console.log("RARE");
// console.log(clubTest(15, 100000, true, false) + " should be false");
// console.log(clubTest(16, 100000, true, false) + " should be true");
// console.log(clubTest(16, 4.9000000, false, false) + " should be false");
// console.log(clubTest(16, 5000000, false, false) + " should be true");
// console.log(clubTest(17, 250000, false, true) + " should be false");
// console.log(clubTest(25, 250000, false, true) + " should be false");
// console.log(clubTest(20, 250000, false, true) + " should be true");
// console.log(clubTest(20, 249000, false, true) + " should be false");

// Age
// console.log("AGE");
// console.log(clubTest(17, 100000, false, false) + " should be false");
// console.log(clubTest(18, 100000, false, false) + " should be true");
// console.log(clubTest(35, 100000, false, false) + " should be false");
// console.log(clubTest(34, 100000, false, false) + " should be true");

// Income
// console.log("INCOME");
// console.log(clubTest(20, 99000, false, false) + " should be false");
// console.log(clubTest(20, 100000, false, false) + " should be true");

// Shoes
// console.log("SHOES");
// console.log(clubTest(20, 100000, false, true) + " should be false");

// 10. Perfect Change
// Prompt the user for a dollar amount they would like perfect change for. (eg. 100 = $1)
// Write code that intakes the users money and prints to the console perfect change.
// Once the change has been printed in the console the code should stop running.

// function change(money) {
//     let output = "";
//
//     // 20$
//     let changeAmmount = parseInt(money / 20);
//     for (let i = 0; i < changeAmmount; i++) {
//         output += "20$\n";
//     }
//     money -= changeAmmount * 20;
//
//     // 10$
//     changeAmmount = parseInt(money / 10);
//     for (let i = 0; i < changeAmmount; i++) {
//         output += "10$\n";
//     }
//     money -= changeAmmount * 10;
//
//     // 5$
//     changeAmmount = parseInt(money / 5);
//     for (let i = 0; i < changeAmmount; i++) {
//         output += "5$\n";
//     }
//     money -= changeAmmount * 5;
//
//     // 1$
//     changeAmmount = parseInt(money);
//     for (let i = 0; i < changeAmmount; i++) {
//         output += "1$\n";
//     }
//     money -= changeAmmount;
//
//     // Converting $ to cents
//     money *= 100;
//     money = Math.round(money);
//
//     // Quarter
//     changeAmmount = parseInt(money / 25);
//     for (let i = 0; i < changeAmmount; i++) {
//         output += "Quarter\n";
//     }
//     money -= changeAmmount * 25;
//
//     // Dime
//     changeAmmount = parseInt(money / 10);
//     for (let i = 0; i < changeAmmount; i++) {
//         output += "Dime\n";
//     }
//     money -= changeAmmount * 10;
//
//     // Nickel
//     changeAmmount = parseInt(money / 5);
//     for (let i = 0; i < changeAmmount; i++) {
//         output += "Nickel\n";
//     }
//     money -= changeAmmount * 5;
//
//     // Penny
//     changeAmmount = parseInt(money);
//     for (let i = 0; i < changeAmmount; i++) {
//         output += "Penny\n";
//     }
//     money -= changeAmmount;
//
//     return output;
// }
//
// console.log(98.82);
// console.log(change(98.82));
// let randomNumber = parseInt(Math.random() * 10000) / 100;
// console.log(randomNumber);
// console.log(change(randomNumber));

// Examples:
//    User inputs: 82
//    Console outputs:
//       quarter
//       quarter
//       quarter
//       nickel
//       penny
//       penny
