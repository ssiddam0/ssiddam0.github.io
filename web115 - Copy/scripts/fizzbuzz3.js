function greetCustomer(){
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var middle_initial = document.getElementById('middle_initial').value;
	first_name = first_name.trim();
	last_name = last_name.trim();
	if (first_name == '') {
		return;
	}
	if(middle_initial!== ''){
		var greet = 'Welcome to Magic Land, ' + first_name + ' ' + middle_initial + '.' + ' ' + last_name + '!';
	}
	else{
		var greet = 'Welcome to Magic Land, ' + first_name + ' ' + last_name + '!';
	}
	document.getElementById('greeting').innerHTML = greet;	
}

function fizzBuzz3() {
	var firstDivisor = 3;
	var secondDivisor = 5;
	var thirdDivisor = 7;
	var outputMessage = '';
	function checkDivision(iCounter,divisor)
	{
		return (iCounter%divisor === 0)? true : false;
	}
	for (var i = 1; i <= 140; i++) {
		if(checkDivision(i,firstDivisor) && checkDivision(i,	secondDivisor) && checkDivision(i,thirdDivisor)){
			outputMessage += i + ') Water Colors Painting' + "<br>";
		}
		else if (checkDivision(i,firstDivisor) && checkDivision(i,secondDivisor)){
			outputMessage += i + ') Water Colors' + "<br>";
		}	
		else if(checkDivision(i,firstDivisor) && checkDivision(i,thirdDivisor)){
			outputMessage += i + ') Water Painting' + "<br>";
		}
		else if(checkDivision(i,secondDivisor) && checkDivision(i,thirdDivisor)){
			outputMessage += i + ') Colors Painting' + "<br>";
		}
		else if(checkDivision(i,firstDivisor)){
			outputMessage += i + ') Water' + "<br>";
		}
		else if(checkDivision(i,secondDivisor)){
			outputMessage += i + ') Colors' + "<br>";
		}
		else if(checkDivision(i,thirdDivisor)){
			outputMessage += i + ') Painting' + "<br>";
		}
		else{
			outputMessage += i + ')' + "<br>";
		}
	}
	document.getElementById('brand_message').innerHTML = outputMessage;
}