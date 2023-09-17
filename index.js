//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const NA1 = numbers.filter((e) => e >= 25);
console.log(NA1);
const NA2 = numbers.filter((e) => e % 5 == 0);
console.log(NA2);
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const NA3 = numbers.map((e) => e ** 2);
console.log(NA3);
const NA4 = numbers.map((e) => e * 2);
console.log(NA4);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const NA5 = numbers.filter((e) => e >= 25).map((e) => e ** 2);
console.log(NA5);
const NA6 = numbers.filter((e) => e % 5 == 0).map((e) => e * 3);
console.log(NA6);
