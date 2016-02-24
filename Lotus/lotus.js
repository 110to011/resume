/*控制台信息显示*/
var consoleArray = [
	{
		command: "gem install lotusrb", 
		log: [
			'Fetching: lotusrb-0.4.1.gem (100%)',
			'Succesfully installed lotusrb-0.4.1'
		]
	},
	{
		command: "lotus new bookshelf", 
		log: ['21 files created successfully']
	},
	{
		command: "cd bookshelf && bundle", 
		log: ['Bundle complete! 6 Gemfile dependencies, 25 gems now installed.']
	},
	{
		command: "bundle exec lotus server", 
		log: [
			'[2015-09-28 14:24:18] INFO WEBrick 1.3.1',
			'[2015-09-28 14:24:18] INFO ruby 2.2.2 (2015-04-13) [x86_64-darwin14]',
			'[2015-09-28 14:24:18] INFO WEBrick::HTTPServer#start: pid=49997 port=2300'
		]
	}
];
/*frameworks信息显示*/
var frameworksArray = [
	{
		title: "", 
		description: "Full stack web applications"
	},
	{
		title: "Model",
		description: "A persistence framework with entities, repositories, data mapper and query objects"
	},
	{
		title: "Router",
		description: "Rack compatible, lightweight and fast HTTP Router for Ruby"
	},
	{
		title: "Utils" ,
		description: "Ruby core extensions and class utilities for Lotus"
	},
	{
		title: "View" ,
		description: "View layer for Lotus"
	},
	{
		title: "Controller",
		description: "Complete, fast and testable actions for Rack and Lotus"
	},
	{
		title: "Validations",
		description: "Validations mixin for Ruby objects"
	},
	{
		title: "Helpers",
		description: "View helpers for Ruby applications"
	}
];

var arr = ['http://rubygems.org/gems/lotus-','http://rdoc.info/gems/lotus-','https://github.com/lotus/'];
var linkname = ['Gem','API','Source Code'];
var first = ['http://rubygems.org/gems/lotusrb','http://rdoc.info/gems/lotusrb','https://github.com/lotus/lotus'];
var consoleContent = document.getElementById('consoleContent');
var consolebody = document.getElementById('consoleBody');
var frameworks = document.getElementById('frameworks');
var topHeader = document.getElementById('topHeader');
var contentHeader = document.getElementById('contentHeader');
var height = topHeader.offsetHeight;


showConsole();
showFrameworks();

/*在控制台显示信息的代码*/
function showConsole() {
	var str = '';
	for(var i = 0;i < consoleArray.length;i++){
		
		str += generateLog(consoleArray[i]);
		
	}
	consoleContent.innerHTML = str;
	consoleContent.innerHTML += '<div class="operate-item active"><h4></h4></div>';
	
}	

function generateLog(loginfo) {
	
	var str = '<div class="operate-item">';
	var logarr = loginfo.log;
	str += '<h4>' + loginfo.command + '</h4>';
	for(var i = 0;i < logarr.length;i++){
		str +=  '<p>' + logarr[i] + '</p>';
	}
	str += '</div>';
	return str;
}

/*显示frameworks信息*/
function showFrameworks () {
	var str = '';
 	for(var i = 0;i < frameworksArray.length;i++) {	
 		var index = i + 1;
 		str += showItems(frameworksArray[i],index);
 	}
 	frameworks.innerHTML = str;
}

function showItems(items,index) {
	var str = '<li><span class="frspan">';
	str += index < 10 ? ('_0' + index) : ('_' + index);
	str += '</span><div>';
	str += (items["title"].length == '') ? '<h4>Lotus</h4>' : ('<h4>' + 'Lotus' + '<span>' + items["title"] + '</span></h4>');
	str += '<p>' + items["description"] + '</p>'; 
	if(index-1 == 0){ //第一个对象需特殊处理
		for(var j = 0;j < 3;j++) {
			str += '<a href = ' + first[j] + '>' + linkname[j] + '</a>';
		}
	}else { //不是第一个对象时链接的规律相同
		for(var j = 0;j < arr.length;j++) {
			str += '<a href = ' + arr[j] + items["title"].toLowerCase() + '>' + linkname[j] + '</a>';
		}
	}
	str += '</div></li>';
	return 	str;	 
}	

// clearInterval(interval);

function scrollFunc() {
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    contentHeader.className = 'content-header' + (st > height ? ' fixedheader' : '');
}


//滚动滑轮触发scrollFunc方法
 window.onscroll = scrollFunc;
	
//placeholder失效时的解决方案
var ph = document.querySelectorAll('[placeholder]')[0];
var inp = document.getElementsByTagName('input')[0];

placeholder(inp);
function placeholder(inp) {
	var txt = inp.getAttribute('placeholder');
	if(ph){ 
		inp.value = txt;
	}
	// inp.addEventListener('onfocus',function() {
	// 	var txt = this.placeholder || this.getAttribute('placeholder');
	// 	if(this.value == txt)
	// 	{
	// 		this.value='';
	// 	}
	// });
	// inp.addEventListener('onblur',function() {
	// 	if(this.value ==''){
	// 		this.className += 'has-value';
	// 		this.value = this.placeholder || this.getAttribute('placeholder');
	// 	}
	// });
	 
}
var focusEvent = function() {
	var txt = this.placeholder || this.getAttribute('placeholder');
		if(this.value == txt)
		{
			this.value='';
		}
}
var blurEvent = function() {
	if(this.value ==''){
		this.value = this.placeholder || this.getAttribute('placeholder');
	}
}
// 兼容各种浏览器的事件监听处理函数
addEventHandler(inp,"onfocus",focusEvent);
addEventHandler(inp,"onblur",blurEvent);
function addEventHandler(target,type,func){  
    if(target.addEventListener){  
        //监听IE9，谷歌和火狐  
        target.addEventListener(type, func, false);  
    }else if(target.attachEvent){  
        target.attachEvent("on" + type, func);  
    }else{  
        target["on" + type] = func;  
    }   
}  