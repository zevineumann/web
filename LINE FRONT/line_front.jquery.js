
var score = 0;
var life = 3;

$(document).ready(function(){
	$("body").click(function() {
	//get click left and top for the bullet
		var cx = event.clientX;
		var cy = event.clientY;
		bull = new bullet();
		bull.shoot(cx, cy);
	});	
	start_planes_timer();
	setInterval(chek, 50);
});

function start_planes_timer() {
	var random = (Math.floor(Math.random() * 4) + 2) * 1000;
	setTimeout(fly_plane, random);
}

function chek() {
	if (life == 0 ) game_over();
}

function game_over() {
	location.replace("./game_over.html?score="+score)
}

function click_plane(elem) {
	
	//get plane x,y
	var planeex = $(elem).css('marginLeft');
	var planeey = $(elem).css('marginTop');
	var planex = parseInt(planeex);
	var planey = parseInt(planeey);
	$(elem).remove();
	$('#div').after('<img id="smoke" class="smoke" src="boom1.jpg">');
	$('#smoke').css({"marginTop": planey-70, "marginLeft": planex-50});
	$("#smoke").fadeOut(500);
	score = score+50;
	document.getElementById("score").innerHTML = score;
	
}

function fly_plane() {
	start_planes_timer();
	
	//get random left and top for creating the plane
	var screenx = screen.width;
	var screeny = screen.height;
	var randomx = Math.floor(Math.random() * (screenx - 170));
	var randomy = Math.floor( Math.max(Math.random(),0.4)  * screeny );
	
	//new component plane
	var plane;
	plane = new component();
	plane.create(randomx, randomy);
	plane.fly();
	
}

function component() {
	
	this.create = function(x, y) {
		$("#div").after("<img onclick='click_plane(this)' id='plane' class='plane' src='./jet.png'>")
		$("#plane").css({"marginTop": y, "marginLeft": x});
	}
	
	this.fly = function() {
		$("#plane").animate({"height": '90px', 'width': '150px', 'marginTop': '-301px'},6000,function() {
			//if plane pased
			var toop = $(this).css('marginTop');
			
			if (toop > "-100px" && $(this).is(":visible") ) {
				life = life+-1;
				document.getElementById("life").innerHTML = life;
			}
		});
		
	}
	
}

function dis_bullet(elem) {
	$(elem).remove();
}

function bullet() {
	this.shoot = function(cx, cy) {
		$("#div").after("<div class='triangle-up' id='bullet'></div>")
		$("#bullet").css({"marginTop": screen.height+600, "marginLeft": screen.width / 2});
		$("#bullet").animate({
			"marginTop": cy,
			"marginLeft": cx+-10,
			'height': '10px',
			'width' :'2px'
		},350,function() {
			dis_bullet(this)
		});
		
	}
	
}