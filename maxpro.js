Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. 
Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
Examples:[1, 2, 3] returns 6 because the maximum product is obtained from multiplying  2∗3=6 
//My Solution:
function adjacentElementsProduct(array){
  let product=[]
  for(let i=0; i<array.length-1; i++){
    product.push(array[i]*array[i+1])
  }
  return Math.max(...product)
}

