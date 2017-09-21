var numbers = [10,20,30,40,35,15];

/*
numbers.find{|n| n > 15}
*/

var result = numbers.find(function(n){
				return n > 15
				});
console.log(result);

var result = numbers.find(function(n){
				return n > 55
				});
console.log(result);

//filter
/*
numbers.find_all{|n| n >= 20}
*/
var results = numbers.filter(function(n){
				return n >= 20
				});
console.log(results);

var results = numbers.filter(function(n){
				return n >= 50
				});
console.log(results);