# fibonacci

def fibonacci(n, calculated={1:0,2:1,3:1}):
	if n in calculated:
		return calculated[n]

	else:
		calculated[n] = fibonacci(n-1, calculated) + fibonacci(n-2, calculated)
		return calculated[n]

print(fibonacci(5))
