
$(document).ready(function(){
	$(".bug").click(function(){
		setInterval(zevi),1;
	});
	
	$("#MoveButton").mouseover(function(){
		var randomtop = Math.floor(Math.random() * 400) -500;
		var randomleft = Math.floor(Math.random() * 800);
		document.getElementById('MoveButton').style.marginTop = randomtop + "px";
		document.getElementById('MoveButton').style.marginLeft = randomleft + "px";
	});
});

function zevi() {
	alert("חחח נסו להוריד אותי");
}

