// var str = "sdfghj"
// var name = "harish"
// String.prototype.toCapitalize = function(){
// 	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();

// 	}

// console.log(str.toCapitalize());
// console.log(name.toCapitalize());

// var numbers = [1,2];
// Array.prototype.empty = function(){

// 	return (this.length == 0) ? true : false;
// }
// console.log(numbers.empty());

// var numbers = [10,20,30,10,20];

// Array.prototype.uniq = function(){
// 	var nums = [];
// 	this.forEach(function(n){
// 		if(nums.indexOf(n) < 0){
// 			nums.push(n);
// 		}
// 	});
// 	return nums 
// }

// console.log(numbers.uniq());

var str = "virat virat sachin sachin virat"
var players = str.split(" ");
var players_hash = {};
players.forEach(function (player) {
	if (!(player in players_hash)){
		players_hash[player] = players.filter(function(n){
			return n == player 
		}).length;
	}

	})
console.log(players_hash);

// var numbers = [10,20,30,10,20,30];

// Array.prototype.last = function(){

// 	return this[(this.length) - 1];
// }

// console.log(numbers.last());