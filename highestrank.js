Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
Note: no empty arrays will be given.
Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//My Solution:
function highestRank(arr){
  var obj = {};
  arr.forEach(function(elem){
     if(obj[elem] === undefined)
       obj[elem] = 0;
     obj[elem]++;
  });
  var keys = Object.keys(obj), highest = 0, key;
  keys.forEach(function(elem){
     if(obj[elem] >= highest)
     {
        highest = obj[elem];
        key = elem;
     }
  })
  return parseInt(key);
}
