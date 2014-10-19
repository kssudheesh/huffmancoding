function decode(tree,str){
	var output = ''
	var p = tree
	for(bit in str){
		if(str[bit] == '0'){p = p[0];}
		else{p = p[1];}
		if(typeof(p) == 'string'){
			output += p
			p = tree
		}
	}
	return output;
}
console.log(decode([['a', ['g', 'c']], [['f', ['b', 'd']], 'e']],'000000101001101110111111111111100100010'));
