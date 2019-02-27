function fizzBuzz1() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var mid_initial = document.getElementById('middle_initial').value;

	if (first_name == '') {

		return;
	}
	
	var greet = 'Welcome to Magic Land, ' + first_name + ' ' + mid_initial + '.' + ' ' + last_name + '!';
	document.getElementById('greeting').innerHTML = greet;
	
		var i;
		var outputMsg = '';
		for (i = 1; i <= 140; i++) {
			if((i % 3 === 0) && (i % 5 === 0))
				outputMsg += i + ') Water Colors' + "<br>";
			else if (i % 3 === 0)
				outputMsg += i + ') Water' + "<br>";
			else if(i % 5 === 0)
				outputMsg += i + ') Colors' + "<br>";
			else
				outputMsg += i + ') Drawing' + "<br>";
		}
	
	document.getElementById('brand_msg').innerHTML = outputMsg;
}