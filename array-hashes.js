var winnerlist1 = [
{
	season: '1999-00', team: 'Real Madrid', country: 'Spain'
},
{
	season: '2000-01', team: 'Bayern Munich', country: 'Germany'	
},
{
		season: '2001-02', team: 'Real Madrid', country: 'Spain'

},

{
		season: '2002-03', team: 'MilanReal Madrid', country: 'Italy'

},
{
		season: '2003-04', team: 'Porto', country: 'Portugal'

}
];

function countwins(winnerlist1,country){
var str = "";
winnerlist1.forEach(function(winner){
	return winner.filter(function(n){
		n == country
	});
	// if (n["country"] == country){
	// 	array.push(n["team"]);
	// }

 });

}

console.log(countwins(winnerlist1,"Spain"));
console.log(countwins(winnerlist1,"Portugal"));
console.log(countwins(winnerlist1,"sportland"));