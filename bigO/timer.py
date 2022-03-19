from timeit import Timer

def test1():
	l = []
	for i in range(1000):
		l = l + [i]

t1 = Timer("test1()", "from __main__ import test1")
print(f"concatenation: {t1.timeit(number=1000):15.2f} milliseconds")
