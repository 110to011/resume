$(function () {
	var tel = $(".header-content .tel");
	var source = $('.header-content .shows');
	$(document).scroll(function () {
		if($(document).scrollTop() > 0) {
			$('.header').addClass('fixheader');
			$('.deskimg').width(160);
		} else {
			$('.header').removeClass('fixheader');
			$('.deskimg').width(200);
		}
	});
	
	tel.hover(function () {
		$(this).find(".showresource").show();
		tel.mouseover(function () {
			$(this).find(".showresource").show();
		}).mouseout(function () {
			$(this).find(".showresource").hide();
		});	
	}, function () {
		$(this).find(".showresource").hide();
	}); 
	
	source.hover(function () {
		$(this).find(".showresource").show();
	}, function () {
		$(this).find(".showresource").hide();
	});

});
