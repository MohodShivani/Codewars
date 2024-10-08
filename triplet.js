//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//For example:
//gimme([2, 3, 1]) => 0
//2 is the number that fits between 1 and 3 and the index of 2 in the input array is 

//My Solution:

function gimme (triplet) {
  let index = 0
  let max = Math.max(...triplet)
  let min = Math.min(...triplet)
  for(let i = 0; i < triplet.length; i++){
    if(triplet[i] !== max && triplet[i] !== min){        
      index = i
    }
  }
  return index
}
