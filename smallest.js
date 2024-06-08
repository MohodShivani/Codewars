//Given an array of integers your solution should find the smallest integer.
//For example: Given [34, 15, 88, 2] your solution will return 2

//My Solution:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args)
  }
}
