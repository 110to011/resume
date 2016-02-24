var rows = 16;
var columns = 30;
var btn = document.getElementById('ignorebtn');
var items = document.querySelectorAll('td');//查询所有td目的是给td绑定mouseover事件
var endX; //定义最终的横坐标
var endY; //定义最终的纵坐标
var ignore = false;  //判断是否忽略后面颜色条的标志位

//若不忽略则执行listen方法
if(!ignore){
	listen();
}
//当点击“忽略后面”按钮时，给ignore取反
btn.onclick = function(){
	console.time('a');
	ignore = !ignore; //当第一次点击时ignore的值为false,取反为true
	if(!ignore){ //ignore的值为false,执行listen方法
		listen();
	}else {      //ignore的值为true,执行忽略操作
		ignoreBack();
	}
	console.timeEnd('a');
}

function listen(){
	for (var i = 0;i < items.length;i++) {
		(function(i){
			endX = rows-1;
			endY = columns-1;
			items[i].onmouseover = function(){	
				var arr1=position(i);
				changeBgColor(arr1[0],arr1[1],'bg');
			}
			items[i].onmouseout = function(){
				var arr1=position(i);
				changeBgColor(arr1[0],arr1[1],'');
			}
		})(i);	
	}	
}	
//忽略后面颜色条的操作
function ignoreBack() {
	for (var i = 0;i < items.length;i++) {
		//自执行
		(function(i){
			items[i].onmouseover = function(){	
				var arr1=position(i);
				endX = arr1[0];
				endY = arr1[1];
				changeBgColor(arr1[0],arr1[1],'bg');

			}
			items[i].onmouseout=function(){
				var arr1=position(i);
				endX = arr1[0];
				endY = arr1[1];
				changeBgColor(arr1[0],arr1[1],'');
			}
		})(i);	
	}	
}
//获取当前索引的横纵坐标
function position(index) {
	var x = Math.floor(index/columns);
	var y = index % columns;
	var arr1 =  [x,y];
	return arr1;
}
//添加或移除背景颜色的操作
function changeBgColor(x,y,z){
	var arr = [];
	//得到与鼠标索引坐标在同一行和同一列的td的索引值
	for (var i = 0;i <= endY;i++) {
		arr.push(x*columns+i);		
	}
	for (var j = 0;j <= endX;j++) {
		arr.push(columns*j+y);
	}
	for(var k = 0;k < arr.length;k++){
		items[arr[k]].className = z;
	}
}

