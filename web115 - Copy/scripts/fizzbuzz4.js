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

function fizzBuzz4() {
	var firstDivisor = document.getElementById('number1').value;
	var secondDivisor = document.getElementById('number2').value;
	var thirdDivisor = document.getElementById('number3').value;
	var firstWord = document.getElementById('word1').value;
	var secondWord = document.getElementById('word2').value;
	var thirdWord = document.getElementById('word3').value;
	var defaultWord = document.getElementById('word4').value;
	var countTill = document.getElementById('count').value;
	var outputMessage = '';
	function checkDivision(iCounter,divisor)
	{
		return (iCounter%divisor === 0)? true : false;
	}
	for (var i = 1; i <= countTill; i++) {
		if(checkDivision(i,firstDivisor) && checkDivision(i,	secondDivisor) && checkDivision(i,thirdDivisor)){
			outputMessage += i + ') '+ firstWord+secondWord+thirdWord + "<br>";
		}
		else if (checkDivision(i,firstDivisor) && checkDivision(i,secondDivisor)){
			outputMessage += i + ') '+firstWord+secondWord + "<br>";
		}	
		else if(checkDivision(i,firstDivisor) && checkDivision(i,thirdDivisor)){
			outputMessage += i + ') '+firstWord+thirdWord+ "<br>";
		}
		else if(checkDivision(i,secondDivisor) && checkDivision(i,thirdDivisor)){
			outputMessage += i + ') '+secondWord+thirdWord+ "<br>";
		}
		else if(checkDivision(i,firstDivisor)){
			outputMessage += i + ') '+firstWord + "<br>";
		}
		else if(checkDivision(i,secondDivisor)){
			outputMessage += i + ') '+secondWord+ "<br>";
		}
		else if(checkDivision(i,thirdDivisor)){
			outputMessage += i + ') '+thirdWord+ "<br>";
		}
		else{
			outputMessage += i + ') '+defaultWord+ "<br>";
		}
	}
	document.getElementById('brand_message').innerHTML = outputMessage;
}