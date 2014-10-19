function trimTree(tree){
	var p = tree[1];
	if(typeof p == 'string'){return p;}
	else{return [trimTree(p[0]),trimTree(p[1])];}
};
x = trimTree([15, [[6, [[3, 'a'], [3, [[1, 'g'], [2, 'c']]]]], [9, [[4, [[2, 'f'], [2, [[1, 'b'], [1, 'd']]]]], [5, 'e']]]]]);
var util = require('util');
console.log(util.inspect(x,false,null));

