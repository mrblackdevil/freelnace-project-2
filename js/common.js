// Pop up форма
$(document).ready(function() {
	$('.popup').magnificPopup();
});

// Video content popup
$(document).ready(function() {
	$('.video-content').magnificPopup();
});
	//Аякс отправка форм на обратный звонок
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
		//Аякс отправка форм на обратный звонок
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#subscribe-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#subscribe-form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
		//Аякс отправка форм на обратный звонок
	//Документация: http://api.jquery.com/jquery.ajax/
	// Вставить полную ссылку на products.html
	$("#get-pdf-doc").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#get-pdf-doc").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
			window.location("../products.html"); 
		});
		return false;
	});
// Маску для ввода номера телефона
jQuery(function($){
	$("#phone").mask("+7(999) 999-9999");
});

   // Pop up telephone
   jQuery(function($){
   	$("#phone-popup").mask("+7(999) 999-9999");
   });    
   // Счетчик цифр 
   var time = 2;
   $('#counter').each(function(){
   	$('div').each(function(){
   		var 
   		i = 1,
   		num = $(this).data('num'),
   		step = 1000 * time / num,
   		that = $(this),
   		int = setInterval(function(){
   			if (i <= num) {
   				that.html(i);
   			}
   			else {
   				clearInterval(int);
   			}
   			i++;
   		},step);
   	});
   });
