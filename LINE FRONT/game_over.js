
function score() {
	let params = (new URL(document.location)).searchParams;
	let score = params.get('score'); // is the string "Jonathan Smith".
}
	document.getElementById("score").innerHTML = "SCORE: "+score;
