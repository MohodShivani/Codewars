 Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters 
~#$%^&!@*():;"'.,? all intact.
Remove all of the numbers'! !' -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'.

//My Solution:
  function stringClean(s){
  return s.split('').filter((n) => n != parseInt(n)).join('');
}
