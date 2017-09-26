// name value pair

// in js keys are also treated as properties of objects

// var person = {
// 	firstName: "Harish",
// 	lastName: "N"
// }
// console.log(person);

// console.log("The first name is " + person.firstName);
// console.log("The last name is " + person["lastName"]);

// person["middleName"] = "B";
// person.title = "Mr.";
// console.log(person.title + person.firstName+ " " + person.middleName+" " + person.lastName);

// var players = {
// 	virat: 3,
// 	sachin: 2,
// 	dhoni: 1 
// }

// for (var key in players){
// 	console.log(key + " appears " + players[key] + " times.");
// }
Array.prototype.count = function(n){
	var count = 0;
	this.forEach(function(num){
		if (num == n){
			count ++;
		}
	});
	return count;
} 

var str = "virat virat sachin sachin dhoni virat"
 array = str.split(" ");
 console.log(array);
 var person = {}; 
 array.forEach(function(name){
 	person[name] = array.count(name);
 });

 console.log(person);

for(var key in person) {
 console.log(key + " " + "*".repeat(person[key]));
}
