codes = {'a': '00', 'c': '011', 'b': '1010', 'e': '11', 'd': '1011', 'g': '010', 'f': '100'}
def encode(str):
	global codes
	output = ''
	for ch in str : output += codes[ch]
	return output
print encode('aaabccdeeeeeffg')
