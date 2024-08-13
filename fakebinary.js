//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//My Solution:
function fakeBin(x){
  var output = ''
  for (let i = 0; i<x.length; i++) {
    x[i] < 5 ? output += '0' : output += '1'
  }
  return output
}
