function frequency(str){
	var freqs = {};
	for(var i = 0;i < str.length;i++){
		if(str[i] in freqs){
			freqs[str[i]] ++;
		}
		else{
			freqs[str[i]] = 1; 		
		}
	}
	return freqs;
};

function sortFreq(freqs){
	var tuples = [];
	for(var char in freqs){
		tuples.push([freqs[char],char]);
	}
	tuples.sort();
	return tuples;
};

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

function trimTree(tree){
	var p = tree[1];
	if(typeof p == 'string'){return p;}
	else{return [trimTree(p[0]),trimTree(p[1])];}
};

function assignCodes(node,pat){
	if(pat == undefined){
		pat = '';
	}
	if(typeof(node) == 'string'){
		codes[node] = pat;		
	}	
	else {
		assignCodes(node[0],pat+"0");
		assignCodes(node[1],pat+"1");
	}	
};

function encode(str){
	var output = '';
	for(var ch=0; ch < str.length; ch++){
		output += codes[str[ch]];
	}
	return output
};

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
var str = 'aaabccdeeeeeffg';
var codes = {};
var util = require('util');
frequencies = frequency(str);
//console.log('Frequency of letters in aaabccdeeeeeffg:\n',frequencies);
sortedFrequencies = sortFreq(frequency(str));
//console.log('Sorted frequencies:\n',sortedFrequencies);
tree = buildTree(sortedFrequencies);
//console.log('Tree is:\n',util.inspect(tree,false,null));
trimmed = trimTree([15, [[6, [[3, 'a'], [3, [[1, 'g'], [2, 'c']]]]], [9, [[4, [[2, 'f'], [2, [[1, 'b'], [1, 'd']]]]], [5, 'e']]]]]);
//console.log('Trimmed tree is:\n',util.inspect(trimmed,false,null));
assignCodes(trimmed);
//console.log('Codes for letters:\n',codes);
sequence = encode('aaabccdeeeeeffg');
console.log('Encoded sequence for aaabccdeeeeeffg:\n',sequence);
text = decode(trimmed,'000000101001101110111111111111100100010');
console.log('Decoded string for sequence 000000101001101110111111111111100100010:\n',text);
