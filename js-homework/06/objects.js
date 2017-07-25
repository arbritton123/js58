var Person = function(asdf, age, gender) {
	this.name = asdf;
	this.age = age;
		// this.age = Math.ceil(Math.random()*1000);

	// this.gender = "gender";
}

Person.prototype.canDrive = function() {
	if (this.age >= 16){
		return true;
	}
	else{
		return false;
	}
};

var robert = new Person ("Robert", 6);
console.log("The person is: ", robert.name)
console.log("the person's age is:", robert.age)
console.log("the person's gender is:", robert.gender)

console.log("Can they drive?", robert.canDrive());