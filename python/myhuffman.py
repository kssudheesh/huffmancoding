codes = {}
def frequency(str):
	freqs = {}
	for ch in str:
		freqs[ch] = freqs.get(ch,0) + 1
	return freqs
print 'frequencies:',frequency('aaabccdeeeeeffg')

def sortFreq(freqs):
	letters = freqs.keys()
	tuples = []
	for let in letters:
		tuples.append((freqs[let],let))
	tuples.sort()
	return tuples
print 'sorted frequencies:',sortFreq(frequency('aaabccdeeeeeffg'))

def buildTree(tuples):
	while len(tuples) > 1:
		leastTwo = tuple(tuples[0:2])
		theRest = tuples[2:]
		combFreq = leastTwo[0][0] + leastTwo[1][0]
		tuples = theRest+[(combFreq,leastTwo)]
		tuples.sort()
	return tuples[0]
print 'tree:',buildTree(sortFreq(frequency('aaabccdeeeeeffg')))

def trimTree(tree):
	p = tree[1]
	if type(p) == type('') : return p
	else : return (trimTree(p[0]),trimTree(p[1]))
print 'tree after trimming frequncies:',trimTree(buildTree(sortFreq(frequency('aaabccdeeeeeffg'))))

def assignCodes(node,pat=''):
	global codes
	if type(node) == type(''):
		codes[node] = pat
	else :
		assignCodes(node[0],pat+"0")
		assignCodes(node[1],pat+"1")
assignCodes(trimTree(buildTree(sortFreq(frequency('aaabccdeeeeeffg')))))
print 'codes assigned for symbols:',codes

def encode(str):
	global codes
	output = ''
	for ch in str : output += codes[ch]
	return output
print "encoded string for 'aaabccdeeeeeffg':",encode('aaabccdeeeeeffg')

def decode(tree,str):
	output = ''
	p = tree
	for bit in str:
		if bit == '0': p = p[0]
		else: p = p[1]
		if type(p) == type('') :
			output += p
			p = tree
	return output
print "decoded text for string'000000101001101110111111111111100100010':",decode(trimTree(buildTree(sortFreq(frequency('aaabccdeeeeeffg')))),'000000101001101110111111111111100100010')
