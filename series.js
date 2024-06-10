//Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence(n is the input parameter).
//Series:1+ 1/4 +1/7 +1/10+.......

//My Solution:
function SeriesSum(n) {
  var sum = 0
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1)
  }
  return sum.toFixed(2)
}
  
