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
print decode((('a', ('g', 'c')), (('f', ('b', 'd')), 'e')),'000000101001101110111111111111100100010')
