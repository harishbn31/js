var password = "secret123";
var firstName = "suresh";
var lastName = "bg";
var sentence = "this is banglore";
var paragraph = "today is tuesday, today govt holiday";

console.log(password.length); // length property of string not method

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(sentence.indexOf('banglore')); // 8
console.log(sentence.indexOf('chennai')); //-1

console.log(paragraph.indexOf('today')); //0
console.log(paragraph.lastIndexOf('today')); // 18
console.log(paragraph.lastIndexOf('yesterday')); //-1

console.log(password.charAt(2)); // c

console.log(sentence.search('banglore')); // 8
console.log(password.includes("secret")); // true

// "*" * 3
console.log("*".repeat(3));
console.log(firstName.repeat(2));


	if (paragraph.includes('today')){
		console.log("today is present");
	}
	else {
		console.log("today not present");

	}

	if (paragraph.indexOf('today') != paragraph.lastIndexOf('today')) {
		console.log('today is repeated');
	}
	else{
		console.log('today not repeated');
	}


var name = "ramachandran";
	console.log(name.slice(0,4)); // rama starting and not including the last index
	console.log(name.slice(4)); // chandran
	console.log(name.substring(0,4)); // rama
	console.log(name.substring(4)); //chandran
	console.log(name.substr(2,2)); // ma
	console.log(name.substr(2,1)); // m
	console.log(name.substr(2,3)); // mac

	//capitalize
	function capitalize(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	console.log(capitalize(name));





















