function fizzBuzz1() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var middle_initial = document.getElementById('middle_initial').value;
	if (first_name == '') {
		return;
	}
	var greet = 'Welcome to Magic Land, ' + first_name + ' ' + middle_initial + '.' + ' ' + last_name + '!';
	document.getElementById('greeting').innerHTML = greet;
	var i;
	var outputMessage = '';
	for (i = 1; i <= 140; i++) {
		if((i % 3 === 0) && (i % 5 === 0)){
			outputMessage += i + ') Water Colors' + "<br>";
		}
		else if (i % 3 === 0){
			outputMessage += i + ') Water' + "<br>";
		}
		else if(i % 5 === 0){
			outputMessage += i + ') Colors' + "<br>";
		}
		else{
			outputMessage += i + ') Drawing' + "<br>";
		}
	}
	document.getElementById('brand_message').innerHTML = outputMessage;
}