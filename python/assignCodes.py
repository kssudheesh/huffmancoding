codes = {}
def assignCodes(node,pat=''):
	global codes
	if type(node) == type(''):
		codes[node] = pat
	else :
		assignCodes(node[0],pat+"0")
		assignCodes(node[1],pat+"1")
assignCodes((('a', ('g', 'c')), (('f', ('b', 'd')), 'e')))
print codes
