// The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).
// A name wins the election if it gets more than n/2 votes (n = number of all votes, i.e. n is equal to the size of the given list).
// Examples
// #3 votes for "A", 2 votes for "B" -> "A" wins the election
// getWinner(["A", "A", "A", "B", "B"]) == "A" #true
// #2 votes for "A", 2 votes for "B" -> No winner
// getWinner(["A", "A", "B", "B"]) == nil #true
// #1 vote for each name -> No winner
// getWinner(["A", "B", "C", "D"]) == nil #true
// #3 votes for "A", 2 votes for "B", 1 vote for "C"  
// #-> No winner ("A" does not have more than n/2 = 3 votes)
// getWinner(["A", "A", "A", "B", "B", "C"]) == nil #true
Array.prototype.count = function(n){
	var count = 0;
	this.forEach(function(num){
		if (num == n){
			count ++;
		}
	});
	return count;
} 
 Array.prototype.uniq = function(){
	var nums = [];
	this.forEach(function(n){
		if(nums.indexOf(n) < 0){
			nums.push(n);
		}
	});
	return nums 
}


var array = ["A", "A", "A", "B", "B", "C"];

function getWinner(array){
	var hash = {};
	array.uniq().forEach(function (name){
		hash[name] = array.count(name);
		});

	for (var key in hash){
		if (hash[key] > (array.length/2)){
			return key +" " + true ;
		}
		else if (hash[key] == (array.length/2)){
			return "no winner " + true
		}
		else if ((hash[key] == (array.length/4))){
			return "no winner " + true
		}
		else{
			return false;
			}
	}
	
}
console.log(getWinner(["A", "A", "A", "B", "B", "C"]));
console.log(getWinner(["A", "A", "A", "B", "B"]));
console.log(getWinner(["A", "A", "B", "B"]));
console.log(getWinner(["A", "B", "C", "D"]));
