Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
Example:
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
//My Soltion:
var greet = function(name) {
 return "Hello "+ name.charAt(0).toUpperCase() + name.substring(1).toLowerCase() + "!"
};
