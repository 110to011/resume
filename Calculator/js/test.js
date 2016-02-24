var secondNum = 0; //第二个操作数
var NumStr = ''; //存储第二行的输入值
var firstNum = 0; //第一个操作数
var showvalue = 0; //第一行显示的值
var shvalue = 0; //第二行显示的值
var tempStr = '';//存储第一行的计算过程的字符串
var operatNum = 0;//判断第几次点击操作符
var operat1;
var operat2;
var otheroper = 0;//判断是否是其他操作符：开平方、取倒数等
var run = 1; //当除数为0时判断是否允许执行其他操作
var clickNum = 0; //点击菜单的次数

function lookup(){
  clickNum += 1;
  var val1 = document.getElementById('lookup');
  if(clickNum % 2 == 1){
  val1.className = val1.className.replace('showli','');
  }else{
  val1.className = 'showli';
  }
       
 }
 function edit(){
  clickNum += 1;
  var val2 = document.getElementById('edit');
  if(clickNum % 2 == 1){
  val2.className = val2.className.replace('showli','');
  }else{
  val2.className = 'showli';
  }
       
 }
 function help(){
  clickNum += 1;
  var val2 = document.getElementById('help');
  if(clickNum % 2 == 1){
  val2.className = val2.className.replace('showli','');
  }else{
  val2.className = 'showli';
  }
 }

 /**
 * 单位转换时“从”所对应的输入框获得焦点
 */
function getFocusfrom(){
        var getval = document.getElementById('from');
        if(getval.value == '输入值'){
          getval.value = '';
        }
      }
/**
 * 单位转换时“到”所对应的输入框获得焦点时“从”所对应的输入框显示默认值
 */
function getFocusto(){
        var getval = document.getElementById('to');
        if(getval.value == ''){
          document.getElementById('from').value = '输入值';
        }
      }
/*控制radio1按钮组的显示和隐藏*/
/*function radio1Control(r1){
  var sd = document.getElementById('standard');
  var sc = document.getElementById('science');
  var pr = document.getElementById('programmer');
  /*标准型*
   if(r1.value == '0'){
      r1.className = 'showradio';
      sc.className = 'hideradio';
      pr.className = 'hideradio';
      /*科学型型*
    }else if(r1.value == '1'){
      r1.className = 'showradio';
      sd.className = 'hideradio';
      pr.className = 'hideradio';
      /*程序员*
    }else if(r1.value == '2'){
      r1.className = 'showradio';
      sc.className = 'hideradio';
      sd.className = 'hideradio';
    }
}*/
/*控制radio2按钮组的显示和隐藏*/
/*function radio2Cotrol(r2){
  var ba = document.getElementById('base');
  var un = document.getElementById('unit');
  var da = document.getElementById('date');
  /*基本
  if(r2.value == '0'){
      r2.className = 'showradio';
      un.className = 'hideradio';
      da.className = 'hideradio';
  /*单位转换
    }else if(r2.value == '1'){
      r2.className = 'showradio';
      ba.className = 'hideradio';
      da.className = 'hideradio';
  /*日期计算*
    }else if(r2.value == '2'){
      r2.className = 'showradio';
      ba.className = 'hideradio';
      un.className = 'hideradio';
    }
}*/
/**
 * 点击基本菜单再点击标准型、科学型或程序员时触发的事件
 * @return {[type]} [description]
 */
var radio1 = document.getElementsByName('radio1');
var radio2 = document.getElementsByName('radio2');
function baseOption(u){
  /*var radio1 = document.getElementsByName('radio1');
  var radio2 = document.getElementsByName('radio2');*/
  /*radio1Control(u);*/
      for(var i=0;i<radio1.length;i++){
            /*标准型*/
             if(radio1.item(i).checked && radio1.item(i).value == '0'){
              for(var j=0;j<radio2.length;j++){
                if(radio2.item(j).checked && radio2.item(j).value == '1'){
                   unitchange();
                }else if(radio2.item(j).checked && radio2.item(j).value == '2'){
                   calcudate();
                }else if(radio2.item(j).checked && radio2.item(j).value == '0'){
                   standard();
                }
              }
          /*科学型*/
          }else if(radio1.item(i).checked && radio1.item(i).value == '1'){
              for(var j=0;j<radio2.length;j++){
                if(radio2.item(j).checked && radio2.item(j).value == '1'){
                   unitchangeScience();
                }else if(radio2.item(j).checked && radio2.item(j).value == '2'){
                   calcudateScience();
                }else if(radio2.item(j).checked && radio2.item(j).value == '0'){
                   science();
                }
              }
          /*程序员*/
          }else if(radio1.item(i).checked && radio1.item(i).value == '2'){
              for(var j=0;j<radio2.length;j++){
                if(radio2.item(j).checked && radio2.item(j).value == '1'){
                   unitchangeProgram();
                }else if(radio2.item(j).checked && radio2.item(j).value == '2'){

                   calcudateProgram();
                }else if(radio2.item(j).checked && radio2.item(j).value == '0'){
                   programmer();
                }
              }
          }
}
  
  
}
/*选择单位转换或者日期计算时再选择标准型、科学型或程序员时触发的事件*/
function chooseOption(b){ 
  /*var radio1 = document.getElementsByName('radio1');
  var radio2 = document.getElementsByName('radio2');*/
  /*radio2Cotrol(b);*/
         for(var i=0;i<radio2.length;i++){
            /*标准型*/
             if(radio2.item(i).checked && radio2.item(i).value == '0'){
              for(var j=0;j<radio1.length;j++){
                if(radio1.item(j).checked && radio1.item(j).value == '1'){
                   unitchange();
                }else if(radio1.item(j).checked && radio1.item(j).value == '2'){
                   calcudate();
                }else if(radio1.item(j).checked && radio1.item(j).value == '0'){
                   standard();
                }
              }
          /*科学型*/
          }else if(radio2.item(i).checked && radio2.item(i).value == '1'){
              for(var j=0;j<radio1.length;j++){
                if(radio1.item(j).checked && radio1.item(j).value == '1'){
                   unitchangeScience();
                }else if(radio1.item(j).checked && radio1.item(j).value == '2'){
                   calcudateScience();
                }else if(radio1.item(j).checked && radio1.item(j).value == '0'){
                   science();
                }
              }
          /*程序员*/
          }else if(radio2.item(i).checked && radio2.item(i).value == '2'){
              for(var j=0;j<radio1.length;j++){
                if(radio1.item(j).checked && radio1.item(j).value == '1'){
                   unitchangeProgram();
                }else if(radio1.item(j).checked && radio1.item(j).value == '2'){
                   calcudateProgram();
                }else if(radio1.item(j).checked && radio1.item(j).value == '0'){
                   programmer();
                }
              }
          }
}
}

function standard(){
          lookup();   
          var all = document.getElementById('calc');
          var ourt = document.getElementById('right');
          var ou1 = document.getElementById('outer1');
          var ou2 = document.getElementById('outer2');
          var ou3 = document.getElementById('outer3');
          var ou4 = document.getElementById('outer4');
          var ou5 = document.getElementById('outer5');
          var process = document.getElementById('process');
          var view = document.getElementById('view');
          ourt.className = 'hide';
          all.className = 'calc sd-outer';
          ou1.className = 'present';
          ou2.className = 'hide';
          ou3.className = 'hide';
          ou4.className = 'hide';
          ou5.className = 'hide';
          view.className = 'showresult sduc-showresult';
          process.className = 'showtext sduc-showtext';
      }
function science(){
          lookup();
          var all = document.getElementById('calc');
          var oulf = document.getElementById('left');
          var ourt = document.getElementById('right');
          var ou1 = document.getElementById('outer1');
          var ou2 = document.getElementById('outer2');
          var ou3 = document.getElementById('outer3');
          var ou4 = document.getElementById('outer4');
          
          all.className = 'calc souter';

          ou1.className = 'hide';
          ou2.className = 'present';
          ou3.className = 'hide';
          ourt.className = 'hide';
          /*ou4.className = 'hide';*/
      }
function programmer(){
          lookup();
          var all = document.getElementById('calc');
          var oulf = document.getElementById('left');
          var ourt = document.getElementById('right');
          var ou1 = document.getElementById('outer1');
          var ou2 = document.getElementById('outer2');
          var ou3 = document.getElementById('outer3');
          var ou4 = document.getElementById('outer4');
          all.className = 'calc pouter';
          ou1.className = 'hide';
          ou2.className = 'hide';
          ou3.className = 'present';
          ourt.className = 'hide';
          /*ou4.className = 'hide';*/
      }
/*标准型单位转换*/
function unitchange(){
        lookup();
        var all = document.getElementById('calc');
        var oulf = document.getElementById('left');
        var ourt = document.getElementById('right');
        var process = document.getElementById('process');
        var view = document.getElementById('view');
        var ou1 = document.getElementById('outer1');
        var ou2 = document.getElementById('outer2');
        var ou3 = document.getElementById('outer3');
        var ou4 = document.getElementById('outer4');
        var ou5 = document.getElementById('outer5');
        all.className = 'calc st-outer4';
        ou2.className = 'hide';
        ou3.className = 'hide';
        ou5.className = 'hide';
        ou4.className = 'outer4 outer4-sd present';
        ou1.className = 'present';
        ourt.className = 'present';
        view.className = 'showresult sduc-showresult';
        process.className = 'showtext sduc-showtext';
        
        

}
/*标准型日期计算*/
function calcudate(){
        lookup();
        var all = document.getElementById('calc');
        var oulf = document.getElementById('left');
        var ourt = document.getElementById('right');
        var process = document.getElementById('process');
        var view = document.getElementById('view');
        var ou1 = document.getElementById('outer1');
        var ou2 = document.getElementById('outer2');
        var ou3 = document.getElementById('outer3');
        var ou4 = document.getElementById('outer4');
        var ou5 = document.getElementById('outer5');
        all.className = 'calc st-outer5';
        ourt.className = 'present';
        view.className = 'showresult sduc-showresult';
        process.className = 'showtext sduc-showtext';
        ou1.className = 'present';
        ou2.className = 'hide';
        ou3.className = 'hide';
        ou4.className = 'hide';
        ou5.className = 'outer5 outer4-sd present';
}
/*科学型单位转换*/
function unitchangeScience(){
        lookup();
        var all = document.getElementById('calc');
        var oulf = document.getElementById('left');
        var ourt = document.getElementById('right');
        var ou1 = document.getElementById('outer1');
        var ou2 = document.getElementById('outer2');
        var ou3 = document.getElementById('outer3');
        var ou4 = document.getElementById('outer4');
        var ou5 = document.getElementById('outer5');
        var process = document.getElementById('process');
        var view = document.getElementById('view');
        all.className = 'calc suc-outer';
        ourt.className = 'present';
        ou3.className = 'hide';
        ou5.className = 'hide';
        ou4.className = 'outer4 suc-outer4 present';
        ou2.className = 'present';
        view.className = 'showresult suc-showresult';
        process.className = 'showtext suc-showtext';
}
/*科学型日期计算*/
function calcudateScience(){
        lookup();
        var all = document.getElementById('calc');
        var oulf = document.getElementById('left');
        var ourt = document.getElementById('right');
        var ou1 = document.getElementById('outer1');
        var ou2 = document.getElementById('outer2');
        var ou3 = document.getElementById('outer3');
        var ou4 = document.getElementById('outer4');
        var ou5 = document.getElementById('outer5');
        var process = document.getElementById('process');
        var view = document.getElementById('view');
        view.className = 'showresult suc-showresult';
        process.className = 'showtext suc-showtext';
        all.className = 'calc scd-outer';
        ourt.className = 'present';
        ou5.className = 'outer5 scd-outer5 present';
        ou1.className = 'hide';
        ou2.className = 'present';
        ou3.className = 'hide';
        ou4.className = 'hide';

}
/*程序员单位转换*/
function unitchangeProgram(){
      lookup();
      var all = document.getElementById('calc');
      var oulf = document.getElementById('left');
      var ourt = document.getElementById('right');
      var ou1 = document.getElementById('outer1');
      var ou2 = document.getElementById('outer2');
      var ou3 = document.getElementById('outer3');
      var ou4 = document.getElementById('outer4');
      var ou5 = document.getElementById('outer5');
      var pdiv1 = document.getElementById('pdiv1');
      var process = document.getElementById('process');
      var view = document.getElementById('view');
      view.className = 'showresult pcd-showresult';
      process.className = 'showtext pcd-showtext';
      all.className = 'calc puc-outer';
      ourt.className = 'present';
      ou4.className = 'outer4 puc-outer4 present';
      ou2.className = 'hide';
      ou3.className = 'present';
      ou5.className = 'hide';
      pdiv1.className = 'pdiv1 pdiv1-p';
}

/*程序员日期计算*/
function calcudateProgram(){
      lookup();
      var all = document.getElementById('calc');
      var oulf = document.getElementById('left');
      var ourt = document.getElementById('right');
      var ou1 = document.getElementById('outer1');
      var ou2 = document.getElementById('outer2');
      var ou3 = document.getElementById('outer3');
      var ou4 = document.getElementById('outer4');
      var ou5 = document.getElementById('outer5');
      var pdiv1 = document.getElementById('pdiv1');
      var process = document.getElementById('process');
      var view = document.getElementById('view');
      view.className = 'showresult pcd-showresult';
      process.className = 'showtext pcd-showtext';
      all.className = 'calc pcd-outer';
      ourt.className = 'present';
      ou5.className = 'outer5 pcd-outer5 present';
      ou1.className = 'hide';
      ou2.className = 'hide';
      ou3.className = 'present';
      ou4.className = 'hide';
      ou5.className = 'present';
      pdiv1.className = 'pdiv1 pdiv1-p';
}
/**
 * 标准型计算器执行计算的逻辑实现
 */
/**
 * 获取所选数字
 * @return {[type]} [description]
 */
function inputVal (e) {
   if(run){
   tempStr = tempStr + e.value;
   showvalue  = document.getElementById('showtext');
   shvalue = document.getElementById('showresult');
   if(shvalue.innerText == '0' || operatNum != 0 ){
      shvalue.innerText = ''; 
   }

   NumStr = NumStr + e.value;
   shvalue.innerText = NumStr;
   // alert(NumStr);
    if(operatNum == 0 ){
      firstNum = parseFloat(NumStr);
      
   }else{
      secondNum = parseFloat(NumStr);
   }

   }

}

/**
 * 获取所选运算符
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function getOperator (e) {
  if(run){
  NumStr = '';
  if(operatNum == 0){
    operat1 = e.value;
  }else{
    operat2 = e.value;
  }
  if(otheroper == 1){
    if(bc){
    firstNum = 0;
    tempStr = firstNum;
      }
    else{tempStr = firstNum;}
  }
  operatNum += 1;
  tempStr = tempStr + e.value;
  showvalue.innerText = tempStr;
  if(operatNum > 1){
    calculate(firstNum, operat1, secondNum);
    if(operat2 == "="){
      //if(otheroper == 1){showvalue.innerText = tempStr;}
      showvalue.innerText = '';
      tempStr = firstNum;
      operatNum = 0;
      secondNum = 0;
    }else{
      operat1 = operat2;
      if(bc){calculate(firstNum, operat1, secondNum);}

    }
    
    
  }else if(bc){calculate(firstNum, operat1, secondNum);}
}
  
}

/**
 * 执行计算操作的函数
 * @param  {[type]} val1 [description]
 * @param  {[type]} oper [description]
 * @param  {[type]} val2 [description]
 * @return {[type]} result [description]
 */
function calculate(val1,opera,val2){
  //alert("hhhhh");
  
    switch(opera){
       case '+' : firstNum = val1 + val2;break;
       case '-' : firstNum = val1 - val2;break;
       case '*' : firstNum = val1 * val2;break;
       case '/' : firstNum = val1 / val2;break;
    }

    shvalue.innerText = firstNum;

}

/**
 * 清空操作、计算开方、取当前值的倒数、取相反数
 */

function getOtherVal (e) {
  run = 1;
  otheroper  = 1;
  if(e.value == '1/x'){
      if(tempStr == 0){
           shvalue.innerText = '除数不能为零';
           run = 0;
     }else{
      tempStr = 1 / tempStr;
      shvalue.innerText = tempStr;
  }
   }else if(e.value == '%'){
    tempStr = tempStr / 100; 
    shvalue.innerText = tempStr;
  }else if(e.value == '+-'){
    tempStr = 0 - tempStr;
    shvalue.innerText = tempStr;
  }
  
  firstNum = tempStr;
}
function getSqrt (e) {
  run = 1;
  otheroper  = 1;
  if(tempStr < 0 ){
  shvalue.innerText = '无效输入';
  run = 0;
   }else{
  tempStr = Math.sqrt(tempStr);
    shvalue.innerText = tempStr;
  firstNum = tempStr;
  }
}

/**
 * 清除
 */
function getClear(e){
  run = 1;
  if( e.value == 'MC' ||  e.value == 'MR' ||  e.value == 'MS' ||  e.value == 'M+' ||  e.value == 'M-' || e.value == 'C' || e.value == 'CE'){
    shvalue.innerText = 0;
    NumStr = '';
    showvalue.innerText = '';
      tempStr = '';
  }
}
/**
 * 退格操作
 */
var bc = 0;
function backSpace(){
      run = 1;bc = 1;otheroper = 1;
    var bcs = shvalue.innerText.substring(0,shvalue.innerText.length-1);
    shvalue.innerText = bcs.toString();
    if(bcs == ''){
      shvalue.innerText = 0;
      NumStr = '';
      showvalue.innerText = '';
      tempStr = '';}
  
}