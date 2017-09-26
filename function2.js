var n1 = 10;
var n2 = 20;

function add(n1,n2){
	// n1,n2  are parameters and all parameters become local variables
	console.log(n1);
	console.log(n2);
	n1 = 100;
	n2 = 200;
	return "back from function"
}

console.log(add(n1,n2));
// gets values fromglobal not from local
console.log(n1);
console.log(n2);