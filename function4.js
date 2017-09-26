

function add(n1,n2){
	console.log(n1);
	console.log(n2);
	return n1 + n2
}

console.log(add(10,20));
//whenever we pass extra args, it will  reject extra args
console.log(add(10,20,30));
// whenever we pass less args, the remaining args treated as undefined by js
console.log(add(10));