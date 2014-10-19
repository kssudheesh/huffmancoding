codes = { a: '00',  g: '010',  c: '011',  f: '100',  b: '1010',  d: '1011',e: '11' }
function encode(str){
	var output = '';
	for(var ch=0; ch < str.length; ch++){
		output += codes[str[ch]];
	}
	return output
};
console.log(encode('aaabccdeeeeeffg'));
