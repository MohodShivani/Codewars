Write a function which calculates the average of the numbers in a given array.
Note: Empty arrays should return 0.
//Solution:

function findAverage(array) {
  return array="" ? 0 : average = array.reduce((acc,c)=>acc+c,0)/array.length
}
