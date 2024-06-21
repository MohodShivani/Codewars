//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//For example (Input --> Output): 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)

//My Solution:
function persistence(num) {
  //we need a no. of types the mutiplication occurs.
  let count = 0
  
  //Need a multiplication for each number until it reach to a single digit.
  while(num.toString().length>1){
    num = num.toString().split('').reduce((acc,ele)=>acc *= Number(ele ,1))
    count++
  }
 
  //Show it in count.
  return count
} 
