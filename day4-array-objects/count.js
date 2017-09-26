var numbers = [10,20,30,10,50];
var count = 0;
	numbers.forEach(function(n){
		if (n == 10){
			count ++;
		}
	});
	console.log(count);
//prototypical inheritance
//anonymous function

Array.prototype.count = function(n){
	var count = 0;
	this.forEach(function(num){
		if (num == n){
			count ++;
		}
	});
	return count;
} 

var numbers = [10,20,30,40,50,10,10];
var names = ["viart", "viart","sachin", "sachin","sachin"];

console.log(numbers.count(10));
console.log(numbers.count(20));
console.log(names.count("sachin"));

