Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
//My Solution:
function replace(s) {
  return s.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e).join('');
}
