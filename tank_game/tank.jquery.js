
$(document).ready(function(){

	tocom();
	boom1 = setInterval(seeboom1, 300);
	boom2 = setInterval(seeboom2, 1000);
	setInterval(jeep, 5000);
	$("#tank").animate({"margin-left": '50px'},3000,function(){
		
		$("#button").click(function(){
			chek_timer = setInterval(chek, 30);
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
				});
			});
		});
	});
});

	var bullet;
	var mysoldier;
	
function tocom() {
	var soldier1 = $("#soldier1");
	var soldierleft = soldier1.css('margin-left');
	var soldierwidth = soldier1.css('width');
	var soldierheight = soldier1.css('height');

	
	var bullet1 = $("#bullet");
	var bulletleft = bullet1.css('margin-left');
	var bulletwidth = bullet1.css('width');
	var bulletheight = bullet1.css('height');

    bullet = new component(bullet1, bulletwidth, bulletheight, bulletleft);
    mysoldier  = new component(soldier1, soldierwidth, soldierheight, soldierleft);    
}

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

function fallsoldier( pic, width, height, marginTop) {
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

function upirbutton() {
	var ubutton = document.getElementById("disu");
	ubutton.id = "button";
}

function jeep() {
	$("#jeep").animate({"margin-left": '1700px'},5000,function(){
	var jeep = Math.floor(Math.random() * -6000);
	$("#jeep").css({"margin-left": jeep});
	});
}

function component(elem, width, height, left) {
    this.width = width;
    this.height = height;
    this.left = left;
	this.newPos = function() {
		this.left = elem.css('margin-left');
    }

    this.crashWith = function(soldier) {
        
        var bulletright = parseInt(this.left);
        var soldierleft = parseInt(soldier.left);
        var crash = false;
        if (bulletright > soldierleft) {
            crash = true;
        }
        return crash;
    }
}

function chek() {
	bullet.newPos();
	if (bullet.crashWith(mysoldier)) {
		fallsoldier("pic soldier/deadsoldier3.png", "200px", "250px", "350px");
		setTimeout(fall, 300);
		clearInterval(boom2);
		clearInterval(chek_timer);
    }
}