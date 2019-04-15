function chapter71(){
	var student = {firstName: "Teja", 
				   lastName: "Sri", 
				   age: 7, 
				   class: "Drawing",
				   greetStudent: function(){
					alert('Hi '+this.firstName+' Welcome to '+this.class+' classes');
				   }
				   };
	student.greetStudent();
}

//chapter 72
function Plan(classname, price, totClasses, space, startDate)
{
	this.classname = classname;
	this.price = price;
	this.totClasses = totClasses;
	this.space = space;
	this.startDate = startDate;
	var discMonths = [2,3,4];
	var totPrice;
	this.finalPrice = function(){
		var currMonth = new Date().getMonth();
		if(discMonths.includes(currMonth)){
			totPrice = price * (totClasses - 1);//one month off
		}
		else{
			totPrice = price * totClasses;
		}
		return totPrice;
	}
}
var marchPlan = new Plan('Spring Crafts',10, 5, 10, '3/1/2019');
var aprilPlan = new Plan('Easterbunny Crafts', 10, 5, 10, '4/1/2019');

function chapter72(){
	alert('Currently we have '+marchPlan.classname+'. Starting from '+marchPlan.startDate);
}

//chapter 73
function chapter73(){
	alert('Total price for your classes is: '+aprilPlan.finalPrice());
}

//chapter 74
Plan.prototype.location = 'Charlotte';
function chapter74(){
	alert('We are conducting our classes in '+marchPlan.location+' location.');
}

//chapter 75
function chapter75(){
	var slotAvailable = "space" in marchPlan;
	if(slotAvailable === true)
	{
		alert('Total available slots in this class are: '+marchPlan.space);
	}
}

//chapter 76
function chapter76(){
	alert('Current site is: '+window.location.hostname);
}