
$(document).ready(function(){

	tocom();
	boom1 = setInterval(seeboom1, 300);
	boom2 = setInterval(seeboom2, 1000);
	setInterval(jeep, 5000);
	$("#tank").animate({"margin-left": '50px'},3000,function(){
		
		$("#button").click(function(){
			chek = setInterval(chek, 50);
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
				clearInterval(chek);
				});
			});
		});
	});
});

	var bullet;
	var mysoldier;
	
function tocom() {
	var soldier1 = document.getElementById('soldier1');
	var soldierleft = soldier1.style.marginLeft;
	var soldierwidth = soldier1.style.width;
	var soldierheight = soldier1.style.height;
	
	var bullet1 = document.getElementById('bullet');
	var bulletleft = bullet1.style.marginLeft;
	var bulletwidth = bullet1.style.width;
	var bulletheight = bullet1.style.height;

    bullet = new component(bulletwidth, bulletheight, bulletleft);
    mysoldier  = new component(soldierwidth, soldierheight, soldierleft);    
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

function component(width, height, left) {
    this.width = width;
    this.height = height;  
    this.left = left;    

    this.crashWith = function(soldier) {
        
        var bulletright = this.left;
        var soldierleft = soldier.left;
        var crash = false;
        if (bulletright > soldierleft) {
            crash = true;
			
        }
        return crash;
    }
}

function chek() {
	if (bullet.crashWith(mysoldier)) {
		fallsoldier("pic soldier/deadsoldier3.png", "200px", "250px", "350px");
		setTimeout(fall, 300);
		clearInterval(boom2);
    }
}