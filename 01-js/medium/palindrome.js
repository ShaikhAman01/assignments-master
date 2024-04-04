/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Helper function to remove non-alphanumeric characters
  function removeNonAlphanumericChars(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
  }

  str = removeNonAlphanumericChars(str).toLowerCase(); // Convert to lowercase and remove non-alphanumeric characters
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
module.exports = isPalindrome;
