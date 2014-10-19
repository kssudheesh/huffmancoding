def frequency(str):
	freqs = {}
	for ch in str:
		freqs[ch] = freqs.get(ch,0) + 1
	return freqs
print frequency('aaabccdeeeeeffg')
