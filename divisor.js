//Count the number of divisors of a positive integer n.
//Random tests go up to n = 500000, but fixed tests go higher.
//Examples (input --> output)
//4 --> 3 // we have 3 divisors - 1, 2 and 4

//My Solution:
function getDivisorsCnt(n){
    // todo
  let count = 0
  for(let i=1 ; i<=n ; i++){
    if(n%i === 0){
      count+=1
    }
  }
  return count
  
}
