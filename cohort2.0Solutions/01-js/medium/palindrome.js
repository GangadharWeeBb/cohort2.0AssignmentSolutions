/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// corner case: empty string is also palindrome

// a valid palindrome when "first and last letter of word should be same"
// here we are checking wheather first or last letter is same or not , if same return true or false



function isPalindrome(str) {
  if(str == ""){
    return true;
  }
  str = str.toLowerCase().trim().replace(/[^a-z0-9]/g,"")
  for(let i = 0; i < str.length; i++){
    if(str[i] != str[str.length - 1 - i]){
      return false
    }
  }
  return true;
}

module.exports = isPalindrome;
