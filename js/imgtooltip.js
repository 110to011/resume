$(function(){
  var x = 10;
  var y = 20;

  $('a.tooltips').mouseover(function(e){
    var mytitle = $(this).attr('title');
    $(this).attr('title','');
    var imgTitle = mytitle ? '<br />' + mytitle : '';
    var $tooltips ='<div id="tooltips"><img src='+$(this).attr('data-src')+'>'+ imgTitle +'</div>';
    $('body').append($tooltips);
    $('#tooltips').css({
      "left": (e.pageX + x) + "px",
      "top" : (e.pageY + y) + "px" 
    }).show('fast');
    if(e.pageX > 840) {
      $('#tooltips').css(
        "left", (e.pageX - x - 280) + "px").show('fast');
    }
    if (e.pageY > 340) {
      $('#tooltips').css(
        "top" , (e.pageY - y - 242) + "px").show('fast');
    }else if(e.pageX > 686 && e.pageY > 400) {
      $('#tooltips').css({
        "left": (e.pageX - x - 280) + "px",
        "top" : (e.pageY - y - 242) + "px"
      }).show('fast');
    }
    console.log(e.pageX); 
  }).mouseout(function(){
    var mytitle = $('#tooltips').text();
    $(this).attr('title' , mytitle);
    $('#tooltips').remove();
  }).mousemove(function(e){
    $('#tooltips').css({
      "left": (e.pageX + x) + "px",
      "top" : (e.pageY + y) + "px" 
    }).show('fast');
    if(e.pageX > 840) {
      $('#tooltips').css(
        "left", (e.pageX - x - 280) + "px").show('fast');
    }
    if (e.pageY > 340) {
      $('#tooltips').css(
        "top" , (e.pageY - y - 242) + "px").show('fast');
    }else if(e.pageX > 686 && e.pageY > 400) {
      $('#tooltips').css({
        "left": (e.pageX - x - 280) + "px",
        "top" : (e.pageY - y - 142) + "px"
      }).show('fast');
    }
  })
});