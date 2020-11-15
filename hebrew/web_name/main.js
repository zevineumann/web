
function calculateBDay(year, month, day)  {
	
	var bday = new Date(year, month, day);
	var now = new Date();
	var res = Math.floor((now - bday) / (1000*60*60*24*365));
	var ress = Math.floor((now - bday) / (1000*60));
	ress = ress.toLocaleString('en');	
	document.getElementById("bday").innerHTML ="גיל: "+res+"<br>הדקות שבזבזת כול חיך: "+ress;

	var url = new URL(window.location.href);
	document.getElementById("name").innerHTML ="שמך: "+url.searchParams.get('fname')+" "+ url.searchParams.get('lname');
	
}