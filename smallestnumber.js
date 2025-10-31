Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.
Examples
[1, 3, 1] ==> 13
//My Solution:
function minValue(values){
  //your code here
  let arr = Array.from(new Set(values))
  return parseInt(arr.sort().join(''))
}
