//This time no story, no theory. The examples below show you how to write function accum:
//Examples: accum("abcd") -> "A-Bb-Ccc-Dddd"

//My Solution:
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}
