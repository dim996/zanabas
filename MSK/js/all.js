$(document).ready(function () {

	$('body').click(function(e){
		$('.popup_form').fadeOut(300);
		$('.overlay').fadeOut(300);
    });
	
	$('.popup_form').click(function(e){
        e.stopPropagation();
	});
	
	$('.close').click(function(e){
		$('.popup_form').fadeOut(300);
		$('.overlay').fadeOut(300);
		return false;
    });

	$('#header .button').click(function(e){
        e.preventDefault();
        e.stopPropagation();
		$('.popup_form.callback').fadeIn(300);
		$('.overlay').fadeIn(300);
		return false;
    });
	
	$(".phone1").each(function( index ) {
		$(this).mask("+7 (999) 999-9999");
	});
	
	$(".phone2").each(function( index ) {
		$(this).mask("+7 (999) 999-9999");
	});
	
	$(".phone3").each(function( index ) {
		$(this).mask("+7 (999) 999-9999");
	});
	
});