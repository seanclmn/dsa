class Fraction:
	def __init__(self,top,bottom):
		self.num = top
		self.den = bottom
	def __str__(self):
		return f"{self.num}/{self.den}"

fraction = Fraction(3,5)

print(fraction.__str__())
