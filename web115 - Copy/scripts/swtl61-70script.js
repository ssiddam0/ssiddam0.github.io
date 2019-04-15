function chapter61() {
	var d = document.getElementById("progList");
	var pCounter = 0;
	for (var i = 0; i < d.childNodes.length; i++) {
		if(d.childNodes[i].nodeType === 1){
			pCounter++;
		}
		if(pCounter === 3){
			d.childNodes[i].innerHTML = 'Parties.';
			break;
		}	
	}
}
function chapter62() {
	var parentNode = document.getElementById("locations");
	parentNode.lastElementChild.innerHTML = 'Rock Hill';
}
function chapter63() {
	var target = document.getElementById("chapter63");
	document.getElementById("tname").innerHTML = target.nodeName;
}
function chapter64() {
	var parentNode = document.getElementById("loc");
	alert(parentNode.childNodes);
	var nodeList = parentNode.childNodes;
	var howManyKids = nodeList.length;
	alert('Total we have'+ howManyKids +' locations');
}
function chapter65() {
	var target = document.getElementById("demo");
	target.setAttribute("class", "special");
}
function chapter66() {
	var numOfItems = document.getElementsByClassName("button1")[5].attributes.length;
	alert(numOfItems);
}
function chapter67() {
	var parentDiv = document.getElementById("locations1");
	var nodeToAdd = document.createElement("p");
	var newTxt = document.createTextNode("Rock Hill");
	nodeToAdd.appendChild(newTxt);
	parentDiv.appendChild(nodeToAdd);
	document.getElementById("btn1").disabled = true;
}
function chapter68() {
	var parentDiv = document.getElementById("locations2");
	var nodeToAdd = document.createElement("p");
	var newTxt = document.createTextNode("Rock Hill");
	nodeToAdd.appendChild(newTxt);
	var paragraph1 = parentDiv.firstChild;
	parentDiv.insertBefore(nodeToAdd,paragraph1);
	document.getElementById("btn2").disabled = true;
}
function chapter70(){
	var student = {firstName: "Teja", lastName: "Sri", age: 7, class: "Drawing"};
	document.getElementById("demo1").innerHTML = student.firstName + " is taking " + student.class + " classes.";
}