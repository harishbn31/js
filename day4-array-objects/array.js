var numbers = [10,20,30,15,20];
// add
numbers.splice(3,0,40,1,2);
console.log(numbers);

//remove

numbers.splice(4,1);
console.log(numbers);
numbers.pop();
console.log(numbers);