

$(document).ready(function(){
	let params = (new URL(document.location)).searchParams;
	let score = params.get('score');
	document.getElementById("score").innerHTML = "SCORE: "+score;
});