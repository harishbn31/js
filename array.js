var numbers = []
var names = new Array(); //Array.new (ruby)

var names = ["suresh","mahesh","ramesh"];
console.log(names[0]);
console.log(names[1]);
names[3] = "veeresh";
console.log(names);

//property of an array
console.log(names.length);

//methods
console.log(typeof names); // "object"
// to know if a variable is an array

console.log(Array.isArray(names)); // true
console.log(names);
// changes the state of the variable

console.log(names.reverse()); // names = names.reverse();
console.log(names);
//changes the state of the variable and works well only for alphabets

console.log(names.sort());
console.log(names);
// mutable methods
names.push("jaggesh"); // adds new value to the end of an array
names.unshift("ganesh"); // add new value to begining of array
console.log(names);

names.pop(); //removes the last value from array
names.shift(); // removes the first value from array
console.log(names);

var nums = new Array(5);
console.log(nums);
nums.fill(10);
console.log(nums);

// array is empty

console.log(numbers.length == 0); //true
console.log(nums.length == 0); // false

console.log(nums.indexOf("suresh")); // 2
console.log(nums.lastIndexOf("suresh")); // 2



var numbers = [10,20,30,40,10,20];

function unique(numbers){
 var nums = []; 
	numbers.forEach(function(n){
		if (nums.indexOf(n) < 0){
			nums.push(n);
		}
	  });
		return nums;
}
console.log(unique(numbers));

names.forEach(function(name){
	console.log(name.toUpperCase());
});













