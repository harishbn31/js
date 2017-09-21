	var numbers = "1234567890";

	function phone(numbers){
		return "(" + (numbers.substr(0,3)) + ") " + numbers.substring(3,6) + "-" +numbers.slice(6);
	}
	console.log(phone(numbers));

// only in ES6 feature i.e., ECMAScript 2015
// string interpolation  
	console.log(`(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`)