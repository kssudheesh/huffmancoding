function buildTree(tuples){
	while(tuples.length > 1){
		var leastTwo = tuples.slice(0,2);
		var theRest = tuples.slice(2);
		var combFreq = leastTwo[0][0]+leastTwo[1][0]		
		var comb     =[[combFreq].concat([leastTwo])];
                tuples=theRest.concat(comb);
		tuples.sort();
	}
	return tuples;
};
var util = require('util');
x = buildTree([ [ 1, 'b' ],[ 1, 'd' ],[ 1, 'g' ],[ 2, 'c' ],[ 2, 'f' ],[ 3, 'a' ],[ 5, 'e' ] ]);
console.log(util.inspect(x,false,null));
