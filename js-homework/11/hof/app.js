var launch = function(){
	console.log("Launched!");
}

var launchTwo = function(){
	console.log("Launched a different rocket!");
}

// launch();


// a higher order function because we pass in a function
function rocketLaunch(launchFn){
for(var i = 10; i > 0; i--) {
	console.log(i, "...")
}
	launchFn();
}

rocketLaunch(launch);
rocketLaunch(launchTwo);

setInterval(function() {
	rocketLaunch(launch);
}, 5000);

//jQuery might look something like this --- see video




