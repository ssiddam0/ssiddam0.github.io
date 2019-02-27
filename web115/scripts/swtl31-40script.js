function chapter31() {
	var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var now = new Date();
	var theDay = now.getDay();
	var nameOfToday = dayNames[theDay];
	alert("Name of today is: " + nameOfToday);
}

function chapter32() {
	var d = new Date();
	var dayOfMonth = d.getDate();
	var currentMonth = d.getMonth();
	currentMonth++; /*getMonth() produces a month number ranging from 0 for January through 11 for December.*/
	var currYr = d.getFullYear();
	alert(" Extracting current day, month number and year.. " + dayOfMonth + ", " + currentMonth + ", " + currYr);
}

function chapter33() {
	var nextArtCampDay = new Date("July 09, 2019");
	var msDiff = nextArtCampDay.getTime() - new Date().getTime();
	var daysTillCamp = Math.floor(msDiff / (1000 * 60 * 60 * 24));
	alert("Number of days till our next art camp is: " + daysTillCamp);
}

function chapter35() {
	var now = new Date();
	var theHr = now.getHours();
	var theMin = now.getMinutes();
	alert("Current time: " + theHr + ":" + theMin);
}

function chapter36(noOfClasses) {
	var feePerClass = 10;
	var totFee = feePerClass * noOfClasses;
	var discountPercent = 10;
	var discount = discountPercent / 100;
	var totDisc = totFee * discount;
	var finalFee = totFee - totDisc;
	alert("Your total fee is " + totFee + " You have got 10% discount, Your final amount after discount is " + finalFee);
}

function chapter40() {
	switch (new Date().getDay()) {
		case 0:
		case 6:
			alert("It's weekend, no classes today.");
			break;
		case 1:
		case 3:
			alert("Monday and Wednesday, we have drawing classes.");
			break;
		case 2:
		case 4:
			alert("Tuesday and Thursday, we have painting classes.");
			break;
		case 5:
			alert("Hey its Friday, it's Art free play! ");
			break;

	}
}