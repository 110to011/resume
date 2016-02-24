
function Calc(container) {
	this.container = container;
	this.init();
}

Calc.prototype = {
	constructor : Calc,

	init: function () {
		this.firstNum = 0; //第一个操作数
		this.secondNum = 0; //第二个操作数
		this.tempStr = '';//存储第一行的计算过程的字符串
		this.NumStr = ''; //存储第二行的输入值
		this.operatNum = 0;//判断第几次点击操作符
		this.operat1;
		this.operat2;
		this.bc = 0;
		this.otheroper = 0;//判断是否是其他操作符：开平方、取倒数等
		this.run = 1; //当除数为0时判断是否允许执行其他操作
		this.clickNum = 0; //点击菜单的次数
		this.basetype  = '';
		this.utiltype = '';
		this.radioup = document.getElementsByName('radio1');
		this.radiobt = document.getElementsByName('radio2');
		this.divs = document.getElementsByClassName('li-div');
		this.divl = document.getElementsByClassName('lli-div');
		this.outer = document.getElementById('calc');
		this.ourt = document.getElementById('right');
		this.ou1 = document.getElementById('outer1');
		this.ou2 = document.getElementById('outer2');
		this.ou3 = document.getElementById('outer3');
		this.ou4 = document.getElementById('outer4');
		this.ou5 = document.getElementById('outer5');
		this.pdiv1 = document.getElementById('pdiv1');
		/*this.calbody = document.querySelector('.calc');*/
		/*this.calbody = document.getElementById('calc');*/
		this.disX = 0;
		this.disY = 0;

		//计算器输入数字显示
		this.view = document.getElementById('view');
		//计算过程显示
		this.process = document.getElementById('process');
		//查看菜单
		this.lookup = document.getElementById('lookup');
		//编辑菜单
		this.edit = document.getElementById('edit');
		this.listen();
		/*this.drag();*/
	},
	/*drag: function () {
 		var container = this.container;
		this.calbody.addEventListener('onmousedown', function (e) {
    	this.disX = e.clientX - this.offsetLeft;
        this.disY = e.clientY - this.offsetTop;
		document.addEventListener('onmousemove', function (e) {
        this.calbody.style.left = (e.clientX - this.disX) + 'px';
        this.calbody.style.top = (e.clientY - this.disY) + 'px';
     }); 
		document.addEventListener('onmouseup', function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
     }); 
		return false;
	});
	},*/
	listen: function () {
		var self = this;

		// 基本数字、计算
		this.container.addEventListener ('click', function (event) {
			var target = event.target;
			// 输入数字判断,若为数字则执行数字显示操作
			if(/[\.0-9]/.test(target.value)) {
				self.inputNumber(target.value);
			} else if (/[\+\-\*\/\=]/.test(target.value)) {
			// 判断输入的是否为操作符，若为操作符则执行计算过程和结果的显示操作
				self.getOperator(target.value);
			} else if (target.value == 'MC' ||  target.value == 'MR' || target.value == 'C' || target.value == 'CE') {
			//判断是否为清空操作
				self.getClear();
			} else if (target.value == 'sqr') {
			//判断是否为开方操作
				self.getSqrt();
			} else if (target.value == 'back') {
			//判断是否为退格操作
				self.backSpace();
			} else if (target.tagName == 'BUTTON') {
				self.lookUp();
			}else {
				if (target.value == 'standard') {
					self.standard(target.value);
				}else if (target.value == 'science') {
					self.science(target.value);
				}else if (target.value == 'programmer') {
					self.programmer(target.value);
				}else if (target.value == 'basic') {
					self.basic(target.value);
				}else if (target.value == 'unitchange') {
					self.unitchange(target.value);
				}else if (target.value == 'calcudate') {
					self.calcudate(target.value);
				}
			}
		});
	},
	
	//控制菜单按钮的展开与收缩
	lookUp: function () {
  		this.clickNum += 1;
		var val1 = document.getElementById('lookup');
		if (this.clickNum % 2 == 1) {

			val1.className = val1.className.replace('showli','');
		} else {

			val1.className = 'showli';
		}    
 	},
/*控制radio1按钮组的显示和隐藏*/
	radio1Control: function(r){
		for(var i = 0;i < this.radioup.length;i++){
			if(this.radioup[i].value == r){
				this.divs[i].className = 'li-div present';
				this.radioup[i].className = '';
			}else {
				this.divs[i].className = 'li-div hide';
				this.radioup[i].className = 'hideradio';
			}
		}
	},
/*控制radio2按钮组的显示和隐藏*/
    radio2Cotrol: function (r){
    	for(var i = 0;i < this.radiobt.length;i++){
			if(this.radiobt[i].value == r){
				this.divl[i].className = 'lli-div present';
				this.radiobt[i].className = '';
			}else {
				this.divl[i].className = 'lli-div hide';
				this.radiobt[i].className = 'hideradio';
			}
		}
},
      //点击基本功能菜单按钮时的操作
     standard: function (u) {
          this.lookUp();
          this.radio1Control(u);   
          this.basetype = u;
          if (this.utiltype == '' || this.utiltype == 'basic' ) {
			this.ourt.className = 'hide';
			this.outer.className = 'calc sd-outer';
			this.ou1.className = 'present';
			this.ou2.className = 'hide';
			this.ou3.className = 'hide';
			this.ou4.className = 'hide';
			this.ou5.className = 'hide';
			this.view.className = 'showresult basicstashowtext';
			this.process.className = 'showtext basicstashowtext';
          }else if (this.utiltype == 'unitchange') {
			this.outer.className = 'calc st-outer4';
			this.ou2.className = 'hide';
			this.ou3.className = 'hide';
			this.ou5.className = 'hide';
			this.ou4.className = 'outer4 outer4-sd present';
			this.ou1.className = 'present';
			this.ourt.className = 'present';
			this.view.className = 'showresult sduc-showtext';
			this.process.className = 'showtext sduc-showtext';
          }else if (this.utiltype == 'calcudate') {
			this.outer.className = 'calc st-outer5';
			this.ourt.className = 'present';
			this.view.className = 'showresult sduc-showtext';
			this.process.className = 'showtext sduc-showtext';
			this.ou1.className = 'present';
			this.ou2.className = 'hide';
			this.ou3.className = 'hide';
			this.ou4.className = 'hide';
			this.ou5.className = 'outer5 outer4-sd present';
          }
          return this.basetype;
          
      },
      science: function (u) {
          this.lookUp();
          this.radio1Control(u);     
          this.basetype = u;
          if (this.utiltype == '' || this.utiltype == 'basic' ) {
			this.outer.className = 'calc souter';
			this.ou1.className = 'hide';
			this.ou2.className = 'present';
			this.ou3.className = 'hide';
			this.ourt.className = 'hide';
			this.ou4.className = 'hide';
			this.view.className = 'showresult basicscishowtext';
			this.process.className = 'showtext basicscishowtext';
          }else if (this.utiltype == 'unitchange') {
          	this.outer.className = 'calc suc-outer';
			this.ourt.className = 'present';
			this.ou3.className = 'hide';
			this.ou5.className = 'hide';
			this.ou4.className = 'outer4 suc-outer4 present';
			this.ou2.className = 'present';
			this.view.className = 'showresult suc-showtext';
			this.process.className = 'showtext suc-showtext';
          }else if (this.utiltype == 'calcudate') {
			this.view.className = 'showresult suc-showtext';
	        this.process.className = 'showtext suc-showtext';
	        this.outer.className = 'calc scd-outer';
	        this.ourt.className = 'present';
	        this.ou5.className = 'outer5 scd-outer5 present';
	        this.ou1.className = 'hide';
	        this.ou2.className = 'present';
	        this.ou3.className = 'hide';
	        this.ou4.className = 'hide';
          }
          return this.basetype;
                  
      },
      programmer: function (u){
          this.lookUp();
          this.radio1Control(u);     
          this.basetype = u;
          if (this.utiltype == '' || this.utiltype == 'basic' ) {
          	this.outer.className = 'calc pouter';
            this.ou1.className = 'hide';
            this.ou2.className = 'hide';
            this.ou3.className = 'present';
            this.ourt.className = 'hide';
            this.ou4.className = 'hide';
            this.pdiv1.className = 'pdiv1';
            this.view.className = 'showresult basicproshowtext';
			this.process.className = 'showtext basicproshowtext';
          }else if (this.utiltype == 'unitchange') {
		  this.view.className = 'showresult pcd-showtext';
	      this.process.className = 'showtext pcd-showtext';
	      this.outer.className = 'calc puc-outer';
	      this.ourt.className = 'present';
	      this.ou4.className = 'outer4 puc-outer4 present';
	      this.ou2.className = 'hide';
	      this.ou3.className = 'present';
	      this.ou5.className = 'hide';
	      this.pdiv1.className = 'pdiv1 pdiv1-p';
          }else if (this.utiltype == 'calcudate') {
		  this.view.className = 'showresult pcd-showtext';
	      this.process.className = 'showtext pcd-showtext';
	      this.outer.className = 'calc pcd-outer';
	      this.ourt.className = 'present';
	      this.ou5.className = 'outer5 pcd-outer5 present';
	      this.ou1.className = 'hide';
	      this.ou2.className = 'hide';
	      this.ou3.className = 'present';
	      this.ou4.className = 'hide';
	      this.pdiv1.className = 'pdiv1 pdiv1-p';
          }
           return this.basetype;
      },
     
      basic: function (b) {
      	  this.lookUp();
      	  this.radio2Cotrol(b);   
          this.utiltype = b;
          if (this.basetype == '' || this.basetype == 'standard' ) {
			this.ourt.className = 'hide';
			this.outer.className = 'calc sd-outer';
			this.ou1.className = 'present';
			this.ou2.className = 'hide';
			this.ou3.className = 'hide';
			this.ou4.className = 'hide';
			this.ou5.className = 'hide';
			this.view.className = 'showresult basicstashowtext';
			this.process.className = 'showtext basicstashowtext';
          }else if (this.basetype == 'science') {
			this.outer.className = 'calc souter';
			this.ou1.className = 'hide';
			this.ou2.className = 'present';
			this.ou3.className = 'hide';
			this.ourt.className = 'hide';
			this.ou4.className = 'hide';
			this.view.className = 'showresult basicscishowtext';
			this.process.className = 'showtext basicscishowtext';
          }else if (this.basetype == 'programmer') {
			this.outer.className = 'calc pouter';
            this.ou1.className = 'hide';
            this.ou2.className = 'hide';
            this.ou3.className = 'present';
            this.ourt.className = 'hide';
            this.ou4.className = 'hide';
            this.pdiv1.className = 'pdiv1';
            this.view.className = 'showresult basicproshowtext';
			this.process.className = 'showtext basicproshowtext';
          }
          return this.utiltype;
      },
      unitchange: function (b) {
      	  this.lookUp();
      	  this.radio2Cotrol(b);   
          this.utiltype = b;
          if (this.basetype == '' || this.basetype == 'standard' ) {
			this.outer.className = 'calc st-outer4';
			this.ou2.className = 'hide';
			this.ou3.className = 'hide';
			this.ou5.className = 'hide';
			this.ou4.className = 'outer4 outer4-sd present';
			this.ou1.className = 'present';
			this.ourt.className = 'present';
			this.view.className = 'showresult sduc-showtext';
			this.process.className = 'showtext sduc-showtext';
          }else if (this.basetype == 'science') {
			this.outer.className = 'calc suc-outer';
			this.ourt.className = 'present';
			this.ou3.className = 'hide';
			this.ou5.className = 'hide';
			this.ou4.className = 'outer4 suc-outer4 present';
			this.ou2.className = 'present';
			this.view.className = 'showresult suc-showtext';
			this.process.className = 'showtext suc-showtext';
          }else if (this.basetype == 'programmer') {
			this.view.className = 'showresult pcd-showtext';
			this.process.className = 'showtext pcd-showtext';
			this.outer.className = 'calc puc-outer';
			this.ourt.className = 'present';
			this.ou4.className = 'outer4 puc-outer4 present';
			this.ou2.className = 'hide';
			this.ou3.className = 'present';
			this.ou5.className = 'hide';
			this.pdiv1.className = 'pdiv1 pdiv1-p';
          }
          return this.utiltype;
      },

      calcudate: function (b) {
      	  this.lookUp();
      	  this.radio2Cotrol(b);   
          this.utiltype = b;
          if (this.basetype == '' || this.basetype == 'standard' ) {
			this.outer.className = 'calc st-outer5';
			this.ourt.className = 'present';
			this.view.className = 'showresult sduc-showtext';
			this.process.className = 'showtext sduc-showtext';
			this.ou1.className = 'present';
			this.ou2.className = 'hide';
			this.ou3.className = 'hide';
			this.ou4.className = 'hide';
			this.ou5.className = 'outer5 outer4-sd present';
          }else if (this.basetype == 'science') {
			this.view.className = 'showresult suc-showtext';
	        this.process.className = 'showtext suc-showtext';
	        this.outer.className = 'calc scd-outer';
	        this.ourt.className = 'present';
	        this.ou5.className = 'outer5 scd-outer5 present';
	        this.ou1.className = 'hide';
	        this.ou2.className = 'present';
	        this.ou3.className = 'hide';
	        this.ou4.className = 'hide';
          }else if (this.basetype == 'programmer') {
			this.view.className = 'showresult pcd-showtext';
			this.process.className = 'showtext pcd-showtext';
			this.outer.className = 'calc pcd-outer';
			this.ourt.className = 'present';
			this.ou5.className = 'outer5 pcd-outer5 present';
			this.ou1.className = 'hide';
			this.ou2.className = 'hide';
			this.ou3.className = 'present';
			this.ou4.className = 'hide';
			this.pdiv1.className = 'pdiv1 pdiv1-p';
          }
          return this.utiltype;
      },

     //点击数字按钮时的操作
	inputNumber: function (number) {

		if(this.run) {
			this.tempStr = this.tempStr + number;
			if(this.view.innerText == '0' || this.operatNum != 0 ) {

				this.view.innerText = ''; 
			}

			this.NumStr = this.NumStr + number;
			this.view.innerText = this.NumStr;
			if(this.operatNum == 0 ) {

				this.firstNum = parseFloat(this.NumStr);
			} else {
				this.secondNum = parseFloat(this.NumStr);
			}
		}
	},
	//点击操作符的操作
	getOperator: function (type) {

		if(this.run) {
			this.NumStr = '';
			if(this.operatNum == 0) {
				this.operat1 = type;
			} else {
				this.operat2 = type;
			}
			if(this.otheroper == 1) {
				if(this.bc) {
					this.firstNum = 0;
					this.tempStr = this.firstNum;
				} else {
					this.tempStr = this.firstNum;
				}
			}
			this.operatNum += 1;
			this.tempStr = this.tempStr + type;
			this.process.innerText = this.tempStr;
			if(this.operatNum > 1) {
				this.calculate(this.firstNum, this.operat1, this.secondNum);
				if(this.operat2 == "=") {

					this.process.innerText = '';
					this.tempStr = this.firstNum;
					this.operatNum = 0;
					this.secondNum = 0;
				} else {
					this.operat1 = this.operat2;
					if(this.bc) {
						this.calculate(this.firstNum, this.operat1, this.secondNum);
					}

				}

			} else if(this.bc) {
				calculate(this.firstNum, this.operat1, this.secondNum);
			}
		}
	},
    //执行计算
	calculate: function (val1,opera,val2) {
		switch(opera){
		   case '+' : this.firstNum = val1 + val2;break;
	       case '-' : this.firstNum = val1 - val2;break;
	       case '*' : this.firstNum = val1 * val2;break;
	       case '/' : this.firstNum = val1 / val2;break;
		}
       this.view.innerText = this.firstNum;
	},
    //清空操作
	getClear: function () {
		run = 1;
		this.view.innerText = 0;
		this.NumStr = '';
		this.process.innerText = '';
		this.tempStr = '';
	},
	//进行开方
	getSqrt: function () {
		this.run = 1;
		this.otheroper  = 1;
		if(this.tempStr < 0 ){
			this.view.innerText = '无效输入';
		    this.run = 0;
		}else{
			this.tempStr = Math.sqrt(this.tempStr);
			this.process.innerText = 'sqrt(' + this.tempStr + ')';
			this.view.innerText = this.tempStr;
			this.firstNum = this.tempStr;
		}
	},

	//退格操作
	backSpace: function () {
		run = 1;bc = 1;otheroper = 1;
		var bcs = this.view.innerText.substring(0,this.view.innerText.length-1);
		this.view.innerText = bcs.toString();
		if(bcs == ''){
			this.view.innerText = 0;
			this.NumStr = '';
			this.process.innerText = '';
			this.tempStr = '';}
	}
};


 window.onload = function (){
 	new Calc(document.getElementById('calc'));
    // 获取元素和初始值
    var oBox = document.getElementById('calc'),
        disX = 0, disY = 0;
    // 容器鼠标按下事件
    oBox.onmousedown = function (e){
        var e = e || window.event;
        disX = e.clientX - this.offsetLeft;
        disY = e.clientY - this.offsetTop;
        document.onmousemove = function (e){
            var e = e || window.event;
            oBox.style.left = (e.clientX - disX) + 'px';
            oBox.style.top = (e.clientY - disY) + 'px';
        };
        document.onmouseup = function (){
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
};