var n1 = 12.3;
var n2 = 14;
var n3 = 13.6;
// math.random()
console.log(Math.round(n1));// returns the value of x rounded to its nearest integer
console.log(Math.ceil(n1)); //returns the value of x rounded up to its nearest integer:
console.log(Math.floor(n3)); //returns the value of x rounded down to its nearest integer
console.log(Math.sqrt(64));// returns the squre root of x 
console.log(Math.pow(2,3));// returns the value of x to the power of y
// power of y
console.log(Math.abs(-125)); //returns the absolute (positive integer) value of x
// can be used to find the lowest or highest value in a list of arguments
console.log(Math.min(25,30,9,15,5));
console.log(Math.max(25,30,9,15,5));
console.log(Math.random()); //returns a random number between 0(inclusive), and 1(exclusive)

console.log(Math.round(Math.random() * 100))