Absolute difference of diagonal of matrix.
1 2 3
4 5 6
9 8 9

1+5+9 = 15
3+5+9 = 17
15 - 17 = 2

//Solution:
function diagonalDifference(arr){
  let primary = 0
  let secondary = 0
  for(let i=0; i<arr.length; i++){
    primary += arr[i][i]
    secondary += arr[i][arr.length-1-i]
  }
  return Math.abs(primary - secondary)
}
