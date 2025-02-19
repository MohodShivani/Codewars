Remove all exclamation marks from the end of sentence.
Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
//My Solution:
function remove(string) {  
  while(string && string.slice(-1) == "!") 
    { 
        string = string.slice(0,-1) 
    }
    return string;
}
