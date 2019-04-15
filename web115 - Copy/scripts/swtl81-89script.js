//chapter 81
function checkForPopBlocker(){
	var testPop = window.open("","","width=100,height=100");
	if(testPop === null || typeof(testPop) === "undefined")
	{
		alert("Please disable your popup blocker");
	}
	testPop.close();
}

//chapter 82
function checkForName()
{
	var targetField = document.getElementById("name");
	if(targetField.value.length === 0)
	{
		alert("Please enter your name");
		targetField.focus();
		targetField.style.background = "yellow";
		return false;
	}
	targetField.style.background = "white";
}

//chapter 83
function checkForClass(selecID)
{
	var targetField = document.getElementById(selecID);
	if(targetField.selectedIndex === 0)
	{
		alert("Please select a class");
		targetField.focus();
		targetField.style.background = "yellow";
		return false;
	}
	targetField.style.background = "white";
}
//chapter 84
function validateRadios(r1)
{
	var radios = document.getElementsByName(r1);
	for(var i=0;i< radios.length; i++)
	{
		if(radios[i].checked)
		{
			return true;
		}
	}
	alert('Please check one');
	return false;
}

//chapter 85
function validateZipcode()
{
	var zipcode = document.getElementById('zip').value;
	if(zipcode.length < 5)
	{
		alert('Please enter a 5 digit code');
		return false;
	}
	for(var i=0; i<=4;i++)
	{	
		var thisChar = parseInt(zipcode[i]);
		if(isNaN(thisChar))
		{
			alert('Please enter only numbers');
			return false;
		}
	}
}

//Chapter 86
function checkEmail(eEntered){
    var eEntered = document.getElementById(eEntered).value;
    var emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-Z0-9]{2,4}$/;

    if(!(eEntered.match(emailPattern))){
        alert("Please enter a correct email address.")
        return false;
    }
}

//Chapter 87
function greetWorld()
{
	try{
		aler('Hello');
	}
	catch(err){
		alert(err);
	}
}

//Chapter 88
function checkPassword(){
    try{
        var password = document.getElementById("password").value;
        if(password.length < 8){
            throw "Password must be at least 8 characters.";
        }
		if(password.indexOf(" ")!== -1){
			throw "No spaces in the password, please.";
		}
        var numberSomewhere = false;
        for(var i=0; i<password.length;i++){
            if(isNaN(password[i])===false){
                numberSomewhere = true;
                break;
            }
        }
        if(numberSomewhere===false){
            throw "Password must contain at least one number.";
        }
        
      }//try close
        catch(err){
            alert(err);
      }//cath close
}

//Chapter 89
var b1 = document.getElementById("button1");
//alert('b1 in chapter 89 is: '+b1);
b1.onclick = sayHello;
function sayHello()
{
	alert("Hi there.");
}