
var tnk_lft = 0;

move = setInterval(move_tank, 30)

function shoot() {
	document.getElementById('bullet').style.display = 'block'; 
	document.getElementById('bullet').style.transform = 'none'; 
	var tnk = document.getElementById('tank');
	tnk_lft = parseInt(tnk.style.marginLeft) + 500;
	move_blt = setInterval(move_bullet, 1);

	document.getElementById('boom').style.display = 'block';
	setTimeout(hide_boom, 1000);
}

function move_tank() {
	move_picture('tank', 0, move,-550,2);
}

function move_bullet() {
	move_picture('bullet', 1000, move_blt, tnk_lft,5);
}


function move_picture(element_id, max, timer, strt,spd) {
	var p = document.getElementById(element_id);
	var lft = parseInt(p.style.marginLeft);
	if(isNaN(lft)) lft = strt;
	p.style.marginLeft = lft+spd + 'px';

	if(lft > max ) {
		clearInterval(timer);
		if(element_id == 'bullet') hide_bullet();
	}

	if(lft > 900)  {
		if(element_id == 'bullet') fall_bullet();
	}
	
}
	
function hide_boom() {
	document.getElementById('boom').style.display = 'none';
}

function hide_bullet() {
	var bull = document.getElementById('bullet');
	bull.style.display = 'none';
	bull.style.marginTop = '420px';	
	bull.style.marginLeft = '500px';
}

function fall_bullet() {
	var p = document.getElementById('bullet');
	var top = parseInt(p.style.marginTop);
	if(isNaN(top)) top = 400;
	p.style.marginTop = top+3 + 'px';
}