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

function countPositivesSumNegatives(input){
  if (input == null || input.length == 0)
     return [];

   let total = 0
   let count = 0

   for (let i = 0; i<input.length; i++){
     if (input[i] > 0){
       total = total + 1
     }else if (input[i] < 0) {
       count = count + input[i]
     }

   }
   let arr = []
   arr.push(total);
   arr.push(count);
   return arr
 }

let thisInput = []
console.log(countPositivesSumNegatives(thisInput));


// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// let thisInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// console.log(countPositivesSumNegatives(thisInput));
//  

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  }else {
    return num * 1
  }
}

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`

function numberToString(num) {
  return num.toString()
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
  return str.slice(1, -1)
  };
  
  //.slice does not use the index of 0. index starts with 1. slice removes the index set
  thisStr = 'alice'
  console.log(removeChar(thisStr));

// Write a function called repeat_str which repeats the given string src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"  

function repeatStr (n, s) {
  return s.repeat(n)
}

console.log(repeatStr (6, 'Hello'));

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInteger(args) {
  return Math.min(...args)
}
let given = [34, 15, 88, 2]
console.log(findSmallestInteger(given));

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
    
  }
}

// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  x = x.split(" ");
  x = x.join("")
  return x
}

let thisStr = 'I believe in miracles'
console.log(noSpace(thisStr));

function noSpace(x){
  x = x.split(" ").join("");
  return x
}

let thisStr = 'I believe in miracles'
console.log(noSpace(thisStr));

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5)
}

console.log(litres(6.7));

// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}


// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2){
  if (operation === "+"){
    return value1 + value2
  }else if(operation === "-"){
    return value1 - value2
  }else if (operation === "*"){
    return value1 * value2
  }else if(operation === "/"){
    return value1 / value2
  }
}


// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0){
    return true
  }else {
    return false
  }
}

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++){
    n = haystack.indexOf("needle")
  }
    return `found the needle at position ${n}`
}

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

function maps(x){
  return x.map(x => x * 2);
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function abbrevName(name){
  name = name.toUpperCase()
  n = name.split(" ")
  return n[0][0] + "." + n[1][0]
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(-array[i]);
  }
   return newArr;
}



function doubleInteger(i){
  i +=i
  return i
}

let arr = 26

console.log(doubleInteger(arr));

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks){
  total = 0
  for (i = 0; i < marks.length; i++){
    total += marks[i]
  }
  return Math.floor(total / marks.length);
}

//Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  var vowelsCount = 0;
  for (i = 0; i < str.length; i++){
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      vowelsCount +=1
    }
  }
  return vowelsCount ;
}

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str;
}


// Software Engineer, Full Stack Developer looking to put all of my learning and knowledge to task in a diverse environment that insists on growth and has high work/life balance standards. Dedicated, hard working, self starter and forever student I always believe there is more for me to learn.

// I am hard working and industrious. I tend to build a close relationship with a small group of associates. I desire to blend group goals into personal goals for optimal success, creating a win-win situation. I bring a natural curiosity to the team, and is usually willing to try my hands at many challenges.

// Intrigued by the process of problem solving and understanding how I got to the solutions. Excited to be a woman, wife and mother in tech and to be accomplishing goals that I have set for myself.

// I just set up a super rad template site using Next.js and markdown. Super easy and cutting edge, saved me weeks of design and dev



// Experience
// Google
// Software Engineer
// Company NameGoogle Full-time
// Dates EmployedMar 2021 ??? Present
// Employment Duration1 mo
// Jobot
// Software Engineer
// Company NameJobot
// Dates EmployedSep 2019 ??? Mar 2021
// Employment Duration1 yr 7 mos
// LocationIrvine
// Jobot is a revolutionary career platform that combines intelligent technology with experienced recruiters to fill jobs and provide incredible service to our clients and candidates in the process. As a Software Engineer, I get to build technology solutions that our Jobot team, clients, and candidates love. Jobot utilizes intelligent technology to power your job search. Whether you are looking for a job or to hire, we are here to help.
// see less
// Arcules
// Company NameArcules
// Total Duration2 yrs 1 mo
// TitleSoftware Engineer
// Dates EmployedSep 2018 ??? Sep 2019
// Employment Duration1 yr 1 mo
// LocationIrvine, California
// ??? Reduced load time by over 90% for our 4 highest-traffic pages by redesigning RESTful endpoints to scale, adding cursor pagination, optimizing database models, and using asynchronous functions
// ??? Improved site reliability by leading pair programming style Lunch & Learn where I showed 25 engineers how to add code to a microservice to monitor pod health, throughput, and error rate (and together, we successfully instrumented all microservices within 1 week)
// ??? Leveraged my PM iterative skateboard-mindset and coding chops to refine a massive time-sensitive engineering project into an MVP that could be delivered in weeks instead of months
// ??? Built new microservice (from scratch) to replace a legacy service that reduced the CSV download time for an events table by 99% and enabled real-time autocomplete search suggestion by using a speedy Redis cache lookup instead of PostgreSQL calls
// ??? Won 2nd place in Hackathon for building internal tool (a bot that automatically clicks through site to detect and report errors) still used by QA team daily
// ???
// see more
// TitleProduct Manager
// Dates EmployedSep 2017 ??? Sep 2018
// Employment Duration1 yr 1 mo
// LocationIrvine, California
// ??? Revitalized customer-centric design by leading Design Thinking ideation sessions focused on customer pain points to guide product decisions
// ??? Improved quality of engineering output by creating alignment through user stories that effectively detailed what the problem was and why it was a problem
// ??? Enabled squad to deliver projects weeks ahead of time by also serving as scrum master to uphold agile principles, remove blockers, and resolve conflicts
// ??? Collaborated across all departments: engineers to refine user stories into actionable tasks, UX to design new features and prototype MVPs, and company leadership and stakeholders to develop feature roadmap
// ??? Created and prioritized product backlog to achieve overall product strategy through compelling user stories that inspired customer empathy and detailed acceptance criteria that served as objective metrics for success
// ??? Wrote high-level vision scopes that communicated product goals and drove product vision to ensure alignment of company from the top-down
// see less
// University of California, Santa Barbara
// Graduate Engineering Teaching Assistant
// Company NameUniversity of California, Santa Barbara
// Dates EmployedJan 2016 ??? Jun 2017
// Employment Duration1 yr 6 mos
// ??? Created and delivered lecture for classes ranging from 12-27 students each week
// ??? Assigned homework and was ultimately responsible for 30% of student???s overall grade in class
// ??? Students in my section achieved highest average grade on midterm exam (10% above lecture average)
// UC Santa Barbara
// Undergraduate Engineering Grader
// Company NameUC Santa Barbara
// Dates EmployedSep 2014 ??? Mar 2015
// Employment Duration7 mos
// LocationUC Santa Barbara
// ??? Managed team of graders
// ??? Evaluated student's performance on assignments and provided feedback for improvement
// ??? Created homework solutions as study aide for students
// Advanced Vision Science Inc. (A Santen Company)
// Head Engineering Intern
// Company NameAdvanced Vision Science Inc. (A Santen Company)
// Dates EmployedJun 2014 ??? Oct 2014
// Employment Duration5 mos
// LocationGoleta
// ??? Led engineering studies to improve manufacturing process for AVS intraocular lenses: improved yield by over 10%, reduced operator time, and decreased costs
// ??? Served as lead engineer during emergency production shut down and successfully brought lens yield back up and into production
// ??? Improved operator productivity by influencing the work culture and eventually becoming the engineering/operations liaison, effectively bridging the gap between management and front line operations
// see less
// UC Santa Barbara
// Company NameUC Santa Barbara
// Total Duration8 mos
// TitleOrientation Staff
// Dates EmployedMar 2013 ??? Aug 2013
// Employment Duration6 mos
// LocationUC Santa Barbara
// ??? Served as academic advisor, student ambassador, and campus guide
// ??? Worked in environment demanding painstaking detail, with fellow advisors and minimal supervision to orientate over 8,000 new students and their parents to UCSB
// ??? Gained public speaking skills ??? presentations to students, panels for parents, tours of UCSB and Isla Vista
// ???
// see more
// TitleCampus Learning Assistant Services Physics Tutor
// Dates EmployedJan 2013 ??? May 2013
// Employment Duration5 mos
// LocationUC Santa Barbara
// ??? Tutored students involved in the Disabled Students Services Program or Intercollegiate Athletic Programs
// Geek Week Committee
// President
// Company NameGeek Week Committee
// Dates EmployedJan 2012 ??? Jun 2012
// Employment Duration6 mos
// LocationUCSB
// ??? Served as project manager to prepare/organize the second annual UCSB College of Engineering Geek Week where all 5 engineering majors gather for friendly competition in series of activities ??? trivia night, dodgeball, relay race, campus wide scavenger hunt, etc. - throughout the week for major pride
// ??? Collaborated with presidents of UCSB engineering clubs (ACM, AIChE, ASME, and IEEE).
// see less