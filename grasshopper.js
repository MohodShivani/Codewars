//This function should test if the factor is a factor of base.
//Return true if it is a factor or false if it is not.

//My Solution:
function checkForFactor (base, factor) {
  let check = base % factor
  if(check == 0){
    return true
  }
    return false
}
