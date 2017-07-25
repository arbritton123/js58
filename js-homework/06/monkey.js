var Monkey = function (name, species, foodsEaten) {
this.name = name
this.species = species
this.foodsEaten = foodsEaten

}

Monkey.prototype.eatSomething = function(food) {
	this.foodsEaten = this.foodsEaten + ", " + food
	console.log(this.name + " has enjoyed a " + food)
}

Monkey.prototype.introduce = function(){
	console.log(this.name + " has eaten " + this.foodsEaten)
}

var monkey1 = new Monkey('George', 'curious', 'bananas');

monkey1.eatSomething('lasagne')
monkey1.introduce()