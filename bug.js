
$(document).ready(function(){
	$(".c").click(function(){
		setInterval(zevi),1;
	});
	
	$("#MoveButton").mouseover(function(){
		var randomtop = Math.floor(Math.random() * 500) -500;
		var randomleft = Math.floor(Math.random() * 200);
		document.getElementById('MoveButton').style.marginTop = randomtop + "px";
		document.getElementById('MoveButton').style.marginLeft = randomleft + "px";
	});
});

function zevi() {
	alert("ha ha try to take me off");
}

