var jigsaw = document.getElementById('jigsaw');
var sf = document.getElementById('shuffle');
var reback = document.getElementById('reback');
var show = document.getElementById('show');
var bgWidth = jigsaw.offsetWidth;
var bgHeight = jigsaw.offsetHeight;
var minWidth = (bgWidth-4)/4-2;
var minHeight = (bgHeight-4)/4-2;
var rows = 4;
var columns = 4;
var items = [];
var positions = [];
var sum = rows*columns;
var currindex;
var count;
init();
listen();

function init() {
	var html = [];
	count = 0;
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < columns; j++) {
			var top = (minHeight + 2)*i;
			var left = (minWidth + 2)*j;
			var position = 'width: ' + minWidth + 'px;'
	        + 'height: ' + minHeight + 'px;'
	        + 'background-position:' + j * - 1 * minWidth + 'px ' + i * - 1 * minHeight + 'px;'
	        + 'top: ' + top + 'px;'
	        + 'left: ' + left + 'px;';
	        var index = (i * rows + j);
	        positions[index] = {
	        	index: index,
	        	top: top,
	        	left: left
	        };
			html.push('<span class="spanstyle" style="' + position + '">' + index + '</span>');	
		}	
	}
	jigsaw.innerHTML = html.join('');
	items = document.querySelectorAll('.spanstyle'); 
	
} 

function listen() {
	for (var i = 0; i < items.length; i++) {
		items[i].onclick = function () {
			currindex = this.innerHTML * 1;
			var pinkPosition = positions[sum - 1].index;//positions中最后一个值是索引为15的位置
			var currPosition = positions[currindex].index;//当前索引位置
			if(valid(currPosition,pinkPosition)) {
				swap(currindex);
				pass();
			}
		}
	}
}
//验证当前块是否有效(判断当前块与粉色块是否能进行交换)
function valid(currPosition,pinkPosition) {
	if(currPosition % columns == 0){    //当前位置在最左列
		if(currPosition + 1 == pinkPosition){ //粉块在当前位置的右侧则可以进行交换
			return true;
		}
	}else if((currPosition + 1) % columns == 0){   //当前位置在最右列
		if(currPosition - 1 == pinkPosition){ //粉块在当前位置的左侧则可以进行交换
			return true;
		}
	}else{ //当前位置在中间列
		if((currPosition + 1 == pinkPosition) || (currPosition - 1 == pinkPosition)){
			return true;
		}
	}

	if(Math.floor(currPosition / columns) == 0){ //当前位置在最上面一行
		if(currPosition + columns == pinkPosition){
			return true;
		}
	}else if(Math.ceil((currPosition + 1) / columns) == rows){ //当前位置在最下面一行
		if(currPosition - columns == pinkPosition){
			return true;
		}
	}else{ //当前位置在中间行
		if((currPosition + columns == pinkPosition) || (currPosition - columns == pinkPosition)){
			return true;
		}
	}
	return false;

}
//进行有效块的交换操作
function swap(currindex) {
	count ++;
	var current = items[currindex];
	var pink = items[sum - 1];
	current.style.top = positions[sum - 1].top + 'px';
	current.style.left = positions[sum - 1].left + 'px';

	pink.style.top = positions[currindex].top + 'px';
	pink.style.left = positions[currindex].left + 'px';

	var prev = positions[sum - 1];
	positions[sum - 1] = positions[currindex];
	positions[currindex] = prev;
}
//判断是否通过
function pass() {
	var i;
	for (i = 0;i < positions.length; i++) {
		if(i != positions[i].index) {
			break;
		} 
	}
	if(i == positions.length) {
		show.innerHTML = 'succeed!  共用了' + count + '步。';
	}
}
//进行洗牌操作	
sf.onclick = function () {
	show.innerHTML = '';
	var length = items.length;
	count = 0;
	for (var i = 0; i < length; i++) {
		var index = Math.floor(Math.random() * length);//floor向下取整
		var prev = items[i];
		items[i] = items[index];
		items[index] = prev;

		prev = positions[i];
		positions[i] = positions[index];
		positions[index] = prev;

		//进行位置的交换
		items[i].style.top = positions[i].top + 'px';
		items[i].style.left = positions[i].left + 'px';
		items[index].style.top = positions[index].top + 'px';
		items[index].style.left = positions[index].left + 'px';
	}
}

//还原操作
reback.onclick = function() {
	show.innerHTML = '';
	count = 0;
	for (var i = 0;i < rows;i++) {
		for (var j = 0;j < columns;j++) {
			var top = (minHeight + 2)*i;
			var left = (minWidth + 2)*j;
			items[i * rows + j].style.top = top + 'px';
			items[i * rows + j].style.left = left + 'px';
			positions[i * rows + j] = {
	        	index: i * rows + j,
	        	top: top,
	        	left: left
	        };
		}
	}
}
