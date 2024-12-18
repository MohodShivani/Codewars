//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//For example: (Input --> Output)
//10 --> 1
//99 --> 18
//-32 --> 5

//My Solution:
function sumDigits(number) {
  let arr = Math.abs(number).toString().split('')
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++)
    sum += +arr[i]
  return sum;
}
