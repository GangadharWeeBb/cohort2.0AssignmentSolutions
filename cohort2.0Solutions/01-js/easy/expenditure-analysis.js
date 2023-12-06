/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
/*
Intution:
  -> if the category doesnot exist in the result object, add it with the transcation price as its value
  -> if the category exists , add the transcation price to the existing value

  // then convert the result object into a array of objects
  // each object contain the category and total amount spent on a category
*/

function calculateTotalSpentByCategory(transactions) {

  let res = {};
  //iterate through each transcation
  for(const transaction of transactions){
    res[transaction.category] = (res[transaction.category] || 0) + transaction.price;
  }
  let ans = Object.entries(res).map(([category, totalSpent]) => ({
    category, totalSpent
  }));
  return ans;
  

  
}

module.exports = calculateTotalSpentByCategory;
