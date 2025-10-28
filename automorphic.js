Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"
25 is an automorphic number, because 25*25=625  ends with 25, so return "Automorphic".
  
//My Solution:
  function automorphic(n){
  return String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!"
}
