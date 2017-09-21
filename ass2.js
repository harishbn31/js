// var names = ["Sheldon", "Lenaord", "Penny", "Rajesh", "Howard"];
// r = 6;
// i = 0;
// while(i < r){
// 	names.push(names[i],names[i]);
// 	names.shift();
// 	i++;
// }
// console.log(names[r]);

// var str = "Hello there thanks for trying my kata";
// function hash_tag(str){
// 	var res = "#";
// 	var string = str.split(" ");
// 	string.forEach(function(word){
// 		res += word.charAt(0).toUpperCase() + word.slice(1);
// 			});
// 	return res
// }

// console.log(hash_tag(str));

// function persistance(num){
	
// 	if (num > 9){
// 		result = 1
// 		number = num.toString();
// 		var arr = number.split("");
// 		arr.forEach(function(n) {
// 		result = result * n
// 		value = result
// 		});
// 		persistance(value);
// 	}
// 	// 
// 	return value
// }
// console.log(persistance(15));


// Given a string s, the task is to find the first repeated character in it. We need to find the character that occurs more than once and whose index of first occurrence is smallest.

// Examples:

// Output: l 
// l is the first element that repeats
s = "heldfghjoertyqwertyu"

function smallest(str){
		var i = 0;
		var letter = [];
		var count = 0;
		while(i < str.length){
			if (str.indexOf(str[i]) != str.lastIndexOf(str[i])){
				letter.push(str.lastIndexOf(str[i]) - str.indexOf(str[i]));
				
			}
			else{
					letter.push(0);
					
				}
			i++;
			
		}
		 i = 0;
		 while (i < letter.length) {
			letter.forEach(function(n){
			if (n != 0){
				if (n == letter[i+1]){
					count = i;
				}
			}
	  	});
			i++;
	}
return str[count]	
}
console.log(smallest(s));



