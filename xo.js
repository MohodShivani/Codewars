//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//Examples input/output:
//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

//My Solution:
function XO(str) {
    //code here
  let x=0
  let o=0
  for(i=0;i<str.length;i++){
    if(str[i].toLowerCase()==='x'){
      x++
    }else if(str[i].toLowerCase()==='o'){
      o++
    }
  }
  return x===o
}

// return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
