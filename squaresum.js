//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return .

//My Solution:

function squareSum(num){
    return numbers.reduce((sum,num) => sum + (num **2), 0);
}
