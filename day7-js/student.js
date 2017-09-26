// attributes instead name, age, & gender are properties of object
function Student(){
	this.name;
	this.age;
	this.gender;
}

var s1 = new Student();
console.log(s1);
console.log(s1.name);


s1.name = "Ravi";
s1.age = 10;
s1.gender = "m";
s1.medals = ["running", " swimming"];
s1.captitan = false //additional property not defined inside function
console.log(s1);

var s2 = new Student();
s2.name = "sheetal";
s2.age = 12;
s2.gender = "f";
console.log(s2);

