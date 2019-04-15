function chapter51() {
	var expandedPara = "Welcome to Magic Land. If you are looking for art classes that will inspire you and fulfill you, look no further. Our mission is for you to relax and express yourself in your creativity. We offer drawing and painting classes for kids, customized classes for all age groups, summer art camps, parties, events. Come and learn artistic technique combined with your authentic self-expression and feel encouraged to BE YOU, as you tap into your creativity.";
	document.getElementById("concept").innerHTML = expandedPara;
}

function showHideDiv() {
	var drawchk = document.getElementById('drawchk');
	var paintchk = document.getElementById('paintchk');
	drawimg.style.display = drawchk.checked ? "block" : "none";
	paintimg.style.display = paintchk.checked ? "block" : "none";
}

function swappic(eId, newPic) {
	document.getElementById(eId).src = newPic;
}

function highlightTitle() {
	document.getElementById('brandname').className = "changefont";
}

function moveRight() {
	document.getElementById("drawimg1").style.cssFloat = "right";

	document.getElementById("place2").style.display = "block";
	document.getElementById("place1").style.display = "none";
}

function moveCenter() {
	//document.getElementById('drawimg1').className = "center";
	document.getElementById("drawimg1").style.cssFloat = "none";
	//document.getElementById('drawimg1').style.display = "flex";
	//document.getElementById('drawimg1').style.align = "center";
	document.getElementById("place1").style.display = "block";
	document.getElementById("place2").style.display = "none";
}

function applyItalicsFont() {
	var para = document.getElementsByTagName("P");

	for (var i = 0; i < para.length; i++) {
		para[i].style.fontStyle = "italic";
	}
}

function changeBackground() {

	var tbody = document.getElementById("tbody");

	var td = tbody.getElementsByTagName("td");
	for (var i = 0; i < td.length; i++) {
		td[i].style.backgroundColor = "#00d5ff";
	}

}

function getTitleBackground() {

	console.log('hi' + document.head.childNodes[3].text);
	var swtlTitle = document.head.childNodes[3].text;
	document.getElementById("swtlTitle").innerHTML = swtlTitle;
}