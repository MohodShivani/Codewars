//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//Examples: [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

//My Solution:
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b)
  return array.map((x) => x % 2 ? odd.shift() : x)
}
