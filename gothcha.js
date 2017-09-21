var x  = true;
console.log(Number(x)); // 1
var y  = false;
console.log(Number(y)); // 0

console.log(1 == true); // true
console.log(0 == false); // true
console.log(0 == true ); // false

var z  = "10 20";
console.log(Number(z)); // NaN
console.log(parseInt(z)); // 10
console.log(1 === true); //false

//parseFloat
console.log(parseFloat("10 20 30")); //10
console.log(parseFloat("10 years")); //10
console.log(parseFloat("year is 30"));//NaN

// + operator
console.log(5 + 5); //10
console.log(5 + "5"); //55
console.log("5" + 5); //55
console.log(5 + 5 + "5"); // 105
console.log("5" + 5 + 5); // 555
console.log("5" + (5+5)); //510

var a = 123456789012345;
var b = 234567890987612345;
console.log(a);
console.log(b);

var a = 0.1;
var b = 0.2;
console.log(a + b); //0.300000000000004
console.log(((a*10) +(b*10)) / 10); // 0.3
console.log((a+b).toPrecision(1)); // 0.3





