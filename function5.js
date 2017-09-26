function add(){
	console.log(arguments.length)
	//here arguments is special object which is like array but (not array), no array methods  can be called object but only the length property can be accessed
	console.log(arguments);
	console.log(arguments[0]);
	//console.log(arguments.push(1));  // invalid
	//all argumentscan be accessed via looping over argument object
	var sum = 0;
	// for (var i = 0; i < arguments.length; i++) {
		
	// 	sum += arguments[i];
	// }

	for (var key in arguments){
		sum+= arguments[key];
	}
	return sum
	
}
console.log(add(10));
console.log(add(10,20));
console.log(add(10,20,30));
