/** Валидация **/

$(document).ready(function(){

	$ajax_submit_1 = false;
	$ajax_submit_2 = false;
	$ajax_submit_3 = false;
	
	/* Одна форма */
	
	$(".ajax_form_1").validate({
		submitHandler: function(form) {
			$ajax_submit_1 = true;
		},
		rules:{
			'phone1':{
				required: true
			}
		},
		messages:{
			'phone1':{
				required: "<div class='error'>Не введено значение</div>"
			}
		}

	});
	
	var ajax_submit_1 = {
		target: "",
		url: "../send.php",
		success: function() { 
		try {
		yaCounter31822316.reachGoal('have_lead');
		} catch (err) {
		}
			$(".popup_form.form.success").fadeIn();
			$(".overlay").fadeIn();
		}
	};
	
	$('.ajax_form_1').submit(function(){
		if($ajax_submit_1){ 
			$(".ajax_form_1").ajaxSubmit(ajax_submit_1);
		}	
		return false;
	}); 
	
	/* Конец */
	
	/* Одна форма */
	
	$(".ajax_form_2").validate({
		submitHandler: function(form) {
			$ajax_submit_2 = true;
		},
		rules:{
			'phone2':{
				required: true
			}
		},
		messages:{
			'phone2':{
				required: "<div class='error'>Не введено значение</div>"
			}
		}

	});
	
	var ajax_submit_2 = {
		target: "",
		url: "../send2.php",
		success: function() { 
		try {
		yaCounter31822316.reachGoal('have_lead');
		} catch (err) {
		}
			$(".popup_form.form.success").fadeIn();
			$(".overlay").fadeIn();
		}
	};
	
	$('.ajax_form_2').submit(function(){
		if($ajax_submit_2){ 
			$(".ajax_form_2").ajaxSubmit(ajax_submit_2);
		}	
		return false;
	}); 
	
	/* Конец */
	
	/* Одна форма */
	
	$(".ajax_form_3").validate({
		submitHandler: function(form) {
			$ajax_submit_3 = true;
		},
		rules:{
			'phone3':{
				required: true
			}
		},
		messages:{
			'phone3':{
				required: "<div class='error'>Не введено значение</div>"
			}
		}

	});
	
	var ajax_submit_3 = {
		target: "",
		url: "../send3.php",
		success: function() { 
		try {
		yaCounter31822316.reachGoal('have_lead');
		} catch (err) {
		}
		$(".popup_form.form.success").fadeIn();
		$(".overlay").fadeIn();
		}
	};
	
	$('.ajax_form_3').submit(function(){
		if($ajax_submit_3){ 
		$('.popup_form.callback').fadeOut(300);

			$(".ajax_form_3").ajaxSubmit(ajax_submit_3);
		}	
		return false;
	}); 
	
	/* Конец */
	
}); 