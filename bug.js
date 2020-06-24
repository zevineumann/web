
$(document).ready(function(){
	$(".c").click(function(){
		setInterval(zevi),1;
	});
	
	$("#MoveButton").mouseover(function(){
		var random = Math.floor(Math.random() * 500) -500;
		document.getElementById('MoveButton').style.marginTop = random + "px";
	});
});

function zevi() {
	alert("ha ha try to take me off");
}

