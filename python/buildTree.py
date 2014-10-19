def buildTree(tuples):
	while len(tuples) > 1:
		leastTwo = tuple(tuples[0:2])
		theRest = tuples[2:]
		combFreq = leastTwo[0][0] + leastTwo[1][0]
		tuples = theRest+[(combFreq,leastTwo)]
		tuples.sort()
	return tuples[0]
print buildTree([(1, 'b'), (1, 'd'), (1, 'g'), (2, 'c'), (2, 'f'), (3, 'a'), (5, 'e')])
