Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.
Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (should return NaN)
//My Solution:
function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  if(n>m){
    return n%m
  }else if(n>m && n===0){
    return 0
  }else if(n<m && n===0){
    return NaN
  }else{
    return m%n
  }

OR
  return a > b ? a % b : b % a;
