//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

//My Solution:
const sumMix = x = x.reduce((sum,num)=> sum + Number(num),0) 