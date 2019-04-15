function chapter41() {
	var totClasses = 2;
	var noOfClassesAttended = 1;
	while (noOfClassesAttended <= totClasses) {
		alert('Keep on painting..');
		noOfClassesAttended++;
	}
}

function chapter42() {
	var totClasses = 1;
	var noOfClassesAttended = 0;
	do {
		noOfClassesAttended++;
		alert('Keep on painting..');
	} while (noOfClassesAttended <= totClasses);
}

function chapter43() {
	alert("Hello Class!");
}
/*extracts the day of the week as a number and assign it to theDay and gets the name of the day using dayNames array*/
function chapter44() {
	var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var now = new Date(); //creates date object with current date&time
	var theDay = now.getDay();
	var nameOfToday = dayNames[theDay];
	alert("Name of today is: " + nameOfToday);
}

function chapter47() {
	document.getElementById('hover').innerHTML = "Magic Land";
}

function mouseOutFn() {
	document.getElementById('hover').innerHTML = "Hover Me";
}

function makeFieldRed(id) {
	document.getElementById(id).style.background = "#ec2b7a";
}

function makeFieldWhite(id) {
	document.getElementById(id).style.background = "white";
}

function capitalize(id) {
	document.getElementById(id).value = document.getElementById(id).value.toUpperCase();
}

function greetCustomer() {
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;

	var greet = 'Welcome to Magic Land, ' + first_name + ' ' + last_name + '!';
	document.getElementById('greeting').innerHTML = greet;
}