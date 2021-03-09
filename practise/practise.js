// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let counter = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i]) {
       counter = counter + 1
      }
    }
    return counter
  }
  
  
  console.log(countSheeps(sheep));


//   Complete the solution so that it reverses the string passed into it.

//   'world'  =>  'dlrow'
function solution(str){
    return str.split("").reverse().join("");
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    // Code here
    let total = 0
    for(var i = 0; i<=num; i++) {
      total = total + i
    }
    return total

 }      

console.log(summation(12));   

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    if (bool == true) {
      return 'yes'
    }
    else {
      return 'no'
    }
   }


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
    if (bullets >= dragons * 2 ) {
     return true
   } else {
     return false
   }
 }


//  Given an array of integers.

//  Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
 
//  If the input array is empty or null, return an empty array.
 
//  Example
//  For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
    let a = []
    let total = 0
    let counter = 0
  
    for (let i = 0; i < input; i++ ) {
      if (input[i] is a positive integer) {
        total = total + 1
      } else if (input[i] is a negative integer) {
        counter + i
      }
    }
    return a.push total and a.push counter
  }