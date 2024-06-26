//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//Example:
//"abcde" -> 0 # no characters repeats more than once
//"aabbcde" -> 2 # 'a' and 'b'

//My Solution:
function duplicateCount(text){
  return text
    .toLowerCase()
    .split('')
    .filter((val, i, arr) => {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i   
    }).length
}
