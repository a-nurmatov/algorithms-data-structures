/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

// Time - O(n);
// Space - O(n);
function areThereDuplicatesV1(...params) {
  // 1) create object to save unique values
  let countUniqueValues = {};
  // 2) for loop for saving unique values and check uniqueness
  for (let i = 0; i < params.length; i++) {
    let value = params[i];
    if (countUniqueValues[value]) return true;
    countUniqueValues[value] = 1;
  }
  return false;
}

// Time - O(n log n)
// Space - O(1)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort();
  for (let i = 0; i < args.length; i++) if (arg[i] === args[i + 1]) return true;
  return false;
}

// [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'a' }
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates(1, 2, 4, 3));
