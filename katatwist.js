This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
Add the value "codewars" to the array websites 1,000 times.

//My Solution:
let websites = []
for(let i=0; i<1000; i++){
  console.log(websites.push("codewars"))
}
OR
var websites = new Array(1000).fill("codewars");


