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
} //Per Python Tutor, completion takes 567 steps

console.log("============================================");

// Part Two: Prime Time
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime
// number, starting at n and incrementing from there.
// As soon as you find the prime number, log that
// number and exit the loop.

for (let n = 5; n <= 12; n++) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    // i = 2, 3, 4
    if (n % i == 0) {
      isPrime = false; // not a prime number
      break;
    }
  }

  if (isPrime) {
    console.log(`${n} is a prime number.`);
  }
}

console.log("============================================");

// Part Three:Feeling Loopy

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let currentCell = 1;

const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";

for (let i = 0; i < csvString.length; i++) {
  if (csvString[i] === ",") {
    // if character is a comma, move to next cell
    currentCell++;
  } else if (csvString[i] === "\n") {
    // if chracter is \n move to next row
    console.log(cell1, cell2, cell3, cell4);
    console.log("\n");

    // Resetting cells
    currentCell = 1;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    if (currentCell === 1) {
      cell1 += csvString[i];
    } else if (currentCell === 2) {
      cell2 += csvString[i];
    } else if (currentCell === 3) {
      cell3 += csvString[i];
    } else if (currentCell === 4) {
      cell4 += csvString[i];
    }
  }
}
