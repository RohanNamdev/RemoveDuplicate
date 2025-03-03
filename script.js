const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce",
];

function removeDupesFromArray(arr) {
  //   return [...new Set(arr)];

  // create a new arr to hold unique items
  // for each item in recipe arr
  // if the item is NOT yet in the unique arr, push it in
  // if it is in the unique arr, move on to the next item (do nothing)
  // return the unique arr

  const uniqueItems = [];

  arr.forEach((item) => {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  });
  return uniqueItems;
  
}

console.log(removeDupesFromArray(eggScrambleRecipe));
