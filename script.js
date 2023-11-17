console.log("quick test...");

// Part One:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

let num = 0;
while (num >= 0 && num <= 100) {
  if (num % 15 === 0) {
    console.log("Fizz Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
  num++;
}  //Per Python Tutor, completion takes 567 steps

// Attempt at a more efficient solution: 
// let num2 = 0;

//  for (let i = 0; i <= 100; i++) {
//     num2 = i;
//     if (i % 15 === 0) {
//         console.log("Fizz Buzz");
//     } else {
//         console.log();
//     }
    
//     if  (i % 5 === 0) {
//         console.log("Buzz");
//     } else if 
//  }

console.log("============================================");

// part Two:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime 
// number, starting at n and incrementing from there.
// As soon as you find the prime number, log that 
// number and exit the loop.

// let n = 4;

// while (n >= 0) {
//     if ((n + 1) 
// }