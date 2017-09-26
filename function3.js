
function add(){
	// variables defined inside function, is localy to only that function and is not available outside the function 
	var n1 = 10;
	var n2 = 20;
	console.log(n1,n2);
}

add();
// uncaugth RefereceError: n1 is not defined
console.log(n1);
console.log(n2);



function add(){
	// variables defined inside function without keyword var  is made availabel as global variable, and made it available on outside the functoin
	n1 = 10;
	n2 = 20;
	console.log(n1,n2);
}

add();

console.log(n1);
console.log(n2);