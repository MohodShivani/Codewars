//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//My Solution:
function isTriangle(a,b,c){
  if(a + b > c && a + c > b && c + b > a){
    return true
  }else{
    return false
  }
}
