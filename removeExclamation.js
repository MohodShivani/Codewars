Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples
remove("Hi!",1) === "Hi"
//My Solution:
function remove(s,n){
  for (var i=0;i<n;i++)  s=s.replace("!","");
  return s;
}
