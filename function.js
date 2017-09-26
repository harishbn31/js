// global variables
var n1 = 10;
var n2 = 20;


// variables declared outside function is available dirctly inside the function in js
function add(){
	console.log(n1);
	console.log(n2);
	// cahnges can be made to variables, changes inside function will affect variables
	n1 = 100;
	n2 = 200;
	return "back from function"
}

console.log(add());
//changes inside function will affect variables

console.log(n1);
console.log(n2);