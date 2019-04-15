function greetCustomer() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var middle_initial = document.getElementById('middle_initial').value;
	if (first_name == '' || last_name == '') {
		return;
	}
	/*first_name = first_name.charAt(0).toUpperCase()+first_name.slice(1);
	last_name = last_name.charAt(0).toUpperCase()+last_name.slice(1);
	middle_initial = middle_initial.toUpperCase();*/
	var greet = 'Welcome to Magic Land, ' + first_name + ' ' + middle_initial + '.' + ' ' + last_name + '!';
	document.getElementById('greeting').innerHTML = greet;
	var brandOutput = '';
	var i;
	for (i = 1; i <= 125; i++) {
		brandOutput += i + ') Aabarakadabra Magic' + "<br>";
	}
	document.getElementById('brand_message').innerHTML = brandOutput;
}

function evenOddDisplay() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var middle_initial = document.getElementById('middle_initial').value;
	if (first_name == '') {
		return;
	}
	/*first_name = first_name.charAt(0).toUpperCase()+first_name.slice(1);
	last_name = last_name.charAt(0).toUpperCase()+last_name.slice(1);
	middle_initial = middle_initial.toUpperCase();*/
	var greet = 'Welcome to Magic Land, ' + first_name + ' ' + middle_initial + '.' + ' ' + last_name + '!';
	document.getElementById('greeting').innerHTML = greet;
	var userInput = prompt('How high do you want to count, ' + first_name);
	if (isNaN(userInput)) {
		alert('Please enter number');
		return false;
	} else {
		var i;
		var outputMessage = '';
		for (i = 1; i <= userInput; i++) {
			if (i % 2 === 0){
				outputMessage += i + ') Magic Land - the number is even' + "<br>";
			}
			else{
				outputMessage += i + ') Magic Land - the number is odd' + "<br>";
			}
		}
	}
	document.getElementById('brand_message').innerHTML = outputMessage;
}