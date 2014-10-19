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
console.log(frequency('aaabccdeeeeeffg'));
