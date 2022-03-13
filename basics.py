import random

class Die:
	def __init__(self,num_sides):
		self.num_sides = num_sides
		self.current_value = self.roll()
	def roll(self):
		self.current_value = random.randrange(1,self.num_sides+1)
		return self.current_value
	def __str__(self):
		return str(self.current_value)

	def __repr__(self):
		return "{} sided die: {}".format(self.num_sides,self.current_value)

for i in range(1,6):
	print(Die(i).__str__())
