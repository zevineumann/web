
$(document).ready(function(){
	boom1 = setInterval(seeboom1, 300);
	boom2 = setInterval(seeboom2, 1000);
	$("#tank").animate({"margin-left": '50px'},3000,function(){
		setInterval(jeep, 5000);
		$("#button").click(function(){
			$("#bullet").css("transform", 'none');
			$("#boom").addClass("see");
			$("#bullet").addClass("see");
			disbutton();
			$("#bullet").animate({"margin-left": '800px'},300,function(){
				$("#bullet").css("transform", 'rotate(20deg)');
				$("#bullet").animate({"margin-left": "1100px", "margin-top": '500px'},300,function() {
				$("#bullet").css({"margin-left": "545px", "margin-top": "400px"});
				$("#bullet").removeClass("see");
				$("#boom").removeClass("see");
				upirbutton();
				fallsoldier("pic soldier/deadsoldier2.png","200px","250px","350px");
				setTimeout(fall, 300);
				clearInterval(boom2);
				});
			});
		});
	});
});

function soldier1() {
	var soldier = document.getElementById('soldier1');
}

function fall() {
	fallsoldier("pic soldier/deadsoldier.png","250px","250px","450px");
}

function seeboom1() {
	$("#boom1").addClass("see");
	setTimeout(dinyboom1, 100);
}

function seeboom2() {
	$("#boom2").addClass("see");
	setTimeout(dinyboom2, 100);
}

function dinyboom1() {
	$("#boom1").removeClass("see");
}

function dinyboom2() {
	$("#boom2").removeClass("see");
}

function fallsoldier(pic,width,height,marginTop) {
	var soldier = document.getElementById('soldier1');
	soldier.src = pic;
	soldier.style.width = width;
	soldier.style.height = height;
	soldier.style.marginTop = marginTop;
}

function disbutton() {
	var dbutton = document.getElementById("button");
	dbutton.id = "disu";
}


function fallbullet() {
	$("#bullet").animate({"marginTop": "200"},500)
}

function upirbutton () {
	var ubutton = document.getElementById("disu");
	ubutton.id = "button";
}

function jeep () {
	$("#jeep").animate({"margin-left": '1700px'},5000);
	//var jeep = Math.floor(Math.random() * 101) -200;
}

/*function rightclick() {
	var soldier = document.getElementById('soldier2').src;
	var soldierr = soldier.src;
	var g = "pic soldier/soldier9.png";
	var h = "pic soldier/soldier0.png";
	var x = event.button; 
	if (x == 1) {
		if (soldier == g) {
			soldier.src = "pic soldier/soldier0.png";
			soldier.style.transform = "none";
			clearInterval(boom1)
			boom3 = setInterval(seeboom1, 1000);
			var boom = document.getElementById('boom1');
			boom.style.marginLeft = 119;
			boom.style.marginTop = 395 ;
		} else if (soldierr == h) {
			soldier = "pic soldier/soldier9.png";
		}
	}
}*/

