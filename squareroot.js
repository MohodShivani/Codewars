//Given an integral number, determine if it's a square number:
//Examples:
-1  =>  false
 0  =>  true
 4  =>  true
25  =>  true
26  =>  false

//My Solution:
var isSquare = function(n){
  return n >=0 && Math.sqrt(n) % 1 === 0
}
