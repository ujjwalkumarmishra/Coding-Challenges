// Input string
let input = "Hello, World!";

// Function to reverse the string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Set a timeout to reverse the string after 2 seconds
setTimeout(function() {
  let reversed = reverseString(input);
  console.log(reversed); // Output the reversed string
}, 2000); // 2000 milliseconds = 2 seconds
