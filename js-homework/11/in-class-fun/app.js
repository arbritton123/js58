// runs the function when the page has loaded
$(function(){
	var loading = $('#loading-marquee')
	loading.hide();


	// obtain the html element on the page with the ID of 'get-weather' and attach a click event handler
 	$('#get-weather').on('click', function(event){
 		loading.show();
 		event.preventDefault();

 		//obtain the values that the user has typed in by getting the element by an ID and calling val()
 		var long = $('#longitude').val();
 		var lati = $('#latitude').val();

 	// our URL format:
 	//	https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43/long,lati
 	var baseURL = "https://js58-proxy.herokuapp.com/forecast/34b3975eb162a8bbe48e843a2eb04a43"
 	weatherURL = baseURL + "/" + long + "," + lati
 	// the WeatherURL is the baseURL concatenated with teh longitude and latitude separate by a space

 	// use the jQuery ($) get method to perform an ajax request for the weather URL and then do something with the response
 	$.get(weatherURL, function(response){
 		loading.hide();
 		//assign the current temperature to a variable so we can change the html contents of the temperature span to the response
		var temp = response.currently.temperature;
		$('#current-temp').html(temp);

		var wind = response.currently.windSpeed;
		$('#current-wind').html(wind);

		var humidity = response.currently.humidity;
		$('#current-humid').html((humidity * 100) + "%");
	 	});
 	});
 });