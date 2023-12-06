/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
/*
let say , largestNumber is at 0 index
then iterate through the array
compare numbers with 0 index
if it is greater update the value 
then we will get largest number
*/

function findLargestElement(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length;i++){
        if(numbers[i] > largestNumber){
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

module.exports = findLargestElement;