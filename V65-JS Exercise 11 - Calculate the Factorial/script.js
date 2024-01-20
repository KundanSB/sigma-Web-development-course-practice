// Take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// Checking if the number is negative
if (number < 0) {
  console.log('Error! Factorial for negative number does not exist.');
}
// If the number is 0
else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
}
// If the number is positive
else {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}
