function shuffle(o){ 
    for(var j, x, i = o.length; i; 
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);   
    return o;
};

var streetNumber = Math.floor((Math.random() * 8000) + 1);
var streetName = ["Qwerty Ave", "Macintosh Street", "Falcon Ave", "Lilly Way", "Perfect Circle", "Main Street"];
var city = ["Pleasantville", "Redmond", "Wicker Park", "Medford", "Boring", "Cityville"];
var state = ["CA", "OR", "NY", "NJ", "WI", "NV"];




