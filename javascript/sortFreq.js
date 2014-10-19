function sortFreq(freqs){
	var tuples = [];
	for(var char in freqs){
		tuples.push([freqs[char],char]);
	}
	tuples.sort();
	return tuples;
};
console.log(sortFreq({'a': 3, 'c': 2, 'b': 1, 'e': 5, 'd': 1, 'g': 1, 'f': 2}));
