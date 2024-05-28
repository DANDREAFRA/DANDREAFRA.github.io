let dvd = document.getElementById('dvd');
let x_incr = 1;
let y_incr = 3;

function init(){
dvd.style.position = 'absolute';
document.body.style.background = '#000000';
update_color();
setInterval(frame, 5);
}

function update_color(){
	let color = Math.round(Math.random()*100);
	dvd.style.fill = `hsl(${color},100%,50%)`;
}

function handle_collision(){
let dvd_height = dvd.offsetHeight;
let dvd_width = dvd.offsetWidth;
let dvd_top = dvd.offsetTop;
let dvd_left = dvd.offsetLeft;

	if(dvd_left <= 0 || dvd_left + dvd_width >= win_width){
		x_incr = ~x_incr + 1;
		update_color();
	}

	if(dvd_top <= 0 || dvd_top + dvd_height >= win_height){
		y_incr = ~y_incr + 1;
		update_color();
	}

}


function frame(){
	handle_collision();
	dvd.style.top = dvd.offsetTop + y_incr;
	dvd.style.left = dvd.offsetLeft + y_incr;
}

init();