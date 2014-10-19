def sortFreq(freqs):
	letters = freqs.keys()
	tuples = []
	for let in letters:
		tuples.append((freqs[let],let))
	tuples.sort()
	return tuples
print sortFreq({'a': 3, 'c': 2, 'b': 1, 'e': 5, 'd': 1, 'g': 1, 'f': 2})
