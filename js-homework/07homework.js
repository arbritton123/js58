window.onload = function() {
var form = document.getElementById('frm');
var submit = document.getElementById('submit');

submit.onclick = function displayOutput() {
	event.preventDefault();


            var input = document.getElementById("number").value;



	            if (input.length === 0) {
	                alert("Please enter a valid input");
	            } else {
	            		document.getElementById("random").innerHTML = "You have entered " + input;
	            }

           
        }

    };