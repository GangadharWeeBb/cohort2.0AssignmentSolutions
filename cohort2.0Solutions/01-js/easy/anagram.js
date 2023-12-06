/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

  /*

  Intution :
       -> if 2 strings are not equal length it is not anagram
       -> check the case sensitive, convert to lowercase and remove spaces and puncutaions
       -> convert str to arr and reverse the string
       -> then compare and return the result
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  str1 = str1.toLowerCase().replace(/[^a-z0-9]/gi, "");
  str2 = str2.toLowerCase().replace(/[^a-z0-9]/gi, "");

  let firstString = str1.split("").sort().join("");
  let secondString = str2.split("").sort().join("");

  return firstString === secondString;
}

module.exports = isAnagram;
