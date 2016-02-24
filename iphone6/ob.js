function Iphone(container) {
	this.container = container;
	this.init();
}

Iphone.prototype = {
	constructor : Iphone,
	init: function () {
		this.prepage = document.getElementById('content-top');
		this.nextpage = document.getElementById('trans-top');
		this.thirdpage = document.getElementById('next-top');
		this.vertical = document.getElementById('vertical');
		this.horileft = document.getElementById('horizontal-left');
		this.horiright = document.getElementById('horizontal-right');
		this.showCircle = document.getElementById('circle').getElementsByTagName('span');
		this.i = 0;
		this.delta = 0;
		this.listen();

	},
	listen: function () {
		var self = this;
		document.addEventListener ('keydown', function (e) {
			var theEvent = window.event || e;
            var code = theEvent.keyCode || theEvent.which;
            if(code == 39){
			  self.nextPage();
			} else if(code == 37) {
			  self.prePage();
			}  else if(code == 38){
			  self.turnLeft();
			} else if(code == 40){
			  self.turnRight();
			}
		},false);
		window.addEventListener ('mousewheel', function (event) {
			 
			/* For IE. */
			if (!event) {
			event = window.event;
			}
			/* IE或者Opera. */
			if (event.wheelDelta) {
			 self.delta = event.wheelDelta / 140;
			}
			/*如果 增量不等于0则触发,判断滚轮向上滚或者是向下*/
			if (self.delta){
			self.handle();
			}
		},false);
	},

	handle : function (delta){
		if (this.delta > 0){
		 this.nextPage();
		}else{
		 this.prePage();
		}
  },
	nextPage : function () {
		if(this.i == 1){
			this.prepage.style.left = 9 + 'px';
			this.nextpage.style.left = 329 + 'px';
			this.prepage.className = 'content-top transpre';
			this.i--;
			this.showCircle[0].className = '.circle span  circle-span';
			this.showCircle[1].className = '';
			this.showCircle[2].className = '';
		}else if(this.i == 2){
			this.nextpage.style.left = 15 + 'px';
			this.thirdpage.style.left = 329 + 'px';
			this.thirdpage.className = 'content-top next-top transpre';
			this.i--;
			this.showCircle[0].className = '';
			this.showCircle[1].className = '.circle span  circle-span';
			this.showCircle[2].className = '';
		}
	},
	prePage: function (){
		if(this.i==0){
			this.prepage.style.left = -303 + 'px';
			this.nextpage.style.left = 15 + 'px';
			this.nextpage.className = 'content-top trans-top transpre';
			this.i++;
			this.showCircle[0].className = '';
			this.showCircle[1].className = '.circle span  circle-span';
			this.showCircle[2].className = '';
		} else if(this.i==1){
			this.nextpage.style.left = -303 + 'px';
			this.thirdpage.style.left = 15 + 'px';
			this.thirdpage.className = 'content-top next-top transpre';
			this.i++;
			this.showCircle[0].className = '';
			this.showCircle[1].className = '';
			this.showCircle[2].className = '.circle span  circle-span';
		}
	},

	turnLeft : function () {
		this.vertical.className = 'hide';
		this.horileft.className = 'vertical horizontal-left show';
	},

	turnRight : function () {
		this.vertical.className = 'hide';
        this.horiright.className = 'vertical horizontal-right show';
	}

};
new Iphone(document.getElementById('vertical'));
