def trimTree(tree):
	p = tree[1]
	if type(p) == type('') : return p
	else : return (trimTree(p[0]),trimTree(p[1]))
print trimTree((15, ((6, ((3, 'a'), (3, ((1, 'g'), (2, 'c'))))), (9, ((4, ((2, 'f'), (2, ((1, 'b'), (1, 'd'))))), (5, 'e'))))))
