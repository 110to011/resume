(function() {
	var items = document.querySelectorAll('.nav li a');
	var stScroll = document.getElementById('stScroll');
	var stPanel = document.querySelectorAll('.st-scroll .st-panel');
	
	var len = items.length;

	var images = document.getElementById('images');
	var lfArrow = document.getElementById('lfArrow');
	var rgArrow = document.getElementById('rgArrow');
	var imglen = document.querySelectorAll('#images li');
	var dots = document.querySelectorAll('#dot li');
	var index = 0;
	var left = 0;
	var interval;


	function myAnimation(i) {
		for(var n = 0;n < len;n++){
			items[n].className = "";
			if(n == 2) {
				removeClass(stPanel[n],'active');
			}else if(n == 6) {
				addClass(stPanel[n],'ls-item');
			}else {
				stPanel[n].className = "st-panel";
			}
		}
		addClass(items[i],'triangle');
		addClass(stPanel[i],'active');
		if(i % 2 != 0) {
			addClass(stPanel[i],'st-color');
		}
		stScroll.style.transform = 'translateY(' + '-' + i*100 + '%' + ')';
		stScroll.style.webkitTransform = 'translateY(' + '-' + i*100 + '%' + ')';
	}


	for(var i = 0;i < len;i++) {

		items[i].onclick = (function(i) {

			return function() {
				if(i == 4) {
					slideImages(index);
				}

				addClass(stPanel[i],'active');

				if(i == 2) {
					addClass(stPanel[i],'edu');
				}else {
					removeClass(stPanel[2],'edu');
				}
				myAnimation(i);
			};

		})(i);
	}

	
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

	on(lfArrow,'click',function() {
		window.clearTimeout(interval);				
		var ind = 0;
		for(var i = 0; i< dots.length; i++) {
				(function(index) {
				if(hasClass(dots[index],'changeclr')) {
					i = dots.length;
					ind = index;
				}
			})(i);
		}

		leftSlide(ind);
	});

	on(rgArrow,'click',function() {
		window.clearTimeout(interval);
		var ind = 0;
		for(var i = 0;i < dots.length;i++) {
			(function(index) {
				if(hasClass(dots[i],'changeclr')) {
					i = dots.length;
					ind = index;
				}
			})(i);
		}
		rightSlide(ind);
	});



	function slideImages(index) {
		images.style.left = index * (-500) + 'px';
		interval = setTimeout(function() {
			if(index + 1 < imglen.length) {
				leftSlide(index);
			}else if(index == imglen.length - 1) {
				index = 0;
				slideImages(index);
				slideDots(index);
			}else {
				rightSlide(index);
			}
		},2000);
	}

	function leftSlide(index) {
		if(index == imglen.length-1) {
			index = 0;
			slideImages(index);
			slideDots(index);
		}else {
			index += 1;
			slideImages(index);
			slideDots(index);
		}
	}

	function rightSlide(index) {
		index--;
		if(index < 0) {
			index = imglen.length - 1;
			slideImages(index);
			slideDots(index);
		} else {
			slideImages(index);
			slideDots(index);
		}
			
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


	function on(ele, eventType, callback) {
	    if (ele.length) {
	      for (var i = 0, len = ele.length; i < len; i++) {
	        on(ele[i], eventType, callback);
	      }
	    } else {
	      ele.addEventListener(eventType, callback, false);
	    }
	  }

	function each(array, callback) {
	    var i = 0;
	    var len = array.length;
	    for (; i < len; i++) {
	      callback(array[i], i);
	    }
	}
	function hasClass(el, clazz) {
	    var className = el.className.split(/\s+/);
	    var arr = clazz.split(/\s+/);
	    var hasClazz = true;
	    each(arr, function (cz) {
	      if (cz && className.indexOf(cz) === -1) {
	        hasClazz = false;
	        return false;
	      }
	    });
	    return hasClazz;
  }

	function addClass(el, clazz) {
		var arr = clazz.split(/\s+/);
		var cz;
		while(arr.length) {
		  cz = arr.pop();
		  if (!hasClass(el, cz)) {
		    el.className += ' ' + cz;
		  }
		}
	}

	function removeClass(el, clazz) {
		var arr = clazz.split(/\s+/);
		var cz;
		while(arr.length) {
		  cz = arr.pop();
		  if (hasClass(el, cz)) {
		    el.className = el.className.replace(new RegExp('\\b' + cz + '\\b', 'g'), '');
		  }
		}
	}

	window.onload = function() {
		myAnimation(0);
	}
})();