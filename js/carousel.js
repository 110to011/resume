var images = document.getElementById('images');
var imglen = document.querySelectorAll('#images li');
var dots = document.querySelectorAll('#dot li');
var index = 0;
var left = 0;
var interval;

// slideImages(index);
for(var i = 0;i < dots.length;i++) {
	(function(i) {
		dots[i].onclick = function() {
			window.clearTimeout(interval);
			slideImages(i);
			slideDots(i);
		}
	})(i);	 
}

// 切换图片

function slideImages(index) {
	images.style.left = index * (-500) + 'px';
	interval = setTimeout(function() {
		if(index + 1 < imglen.length) {
			index += 1;
			slideImages(index);
			slideDots(index);
		}else {
			index = 0;
			slideImages(index);
			slideDots(index);
		}
	},3000);
}

// 切换圆点
function slideDots(index) {
	for(var i = 0;i < dots.length;i++) {
		if(index == i){
			dots[i].className = 'changeclr';
		}else {
			dots[i].className = '';
		}
	}
}


