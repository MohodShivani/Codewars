//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
//Examples: 0->0 , 2->5 , 12->15 , -2->0 , -5->-5
//Input may be any positive or negative integer (including 0).
//You can assume that all inputs are valid integers.


//My Solution:
function roundToNext5(n){
  return Math.ceil(n/5)*5;
}

