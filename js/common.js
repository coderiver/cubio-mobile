head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	var clickEventType=((document.ontouchstart!==null)?'click':'touchstart');

	//popups
	$('.js-popup-btn').on("click", function(){
		if ($('.js-popup').hasClass('is-active')) {
			$(".js-popup").removeClass('is-active');
		}
		else {
			$(".js-popup").addClass('is-active');
		}		
		return false;
	});
	$('.js-popup-close').on("click", function(){
		$(".js-popup").removeClass('is-active');
		$(".js-popup-in").removeClass('is-active');
		return false;
	});
	$('.overlay').on("click", function(){
		$(".js-popup").removeClass('is-active');
		$('.js-popup-in').removeClass('is-active');
		return false;
	});



	$('.js-menu-btn').on("click", function(){
		if ($('.js-menu').hasClass('is-active')) {
			$(".js-menu").removeClass('is-active');
		}
		else {
			$(".js-menu").addClass('is-active');
		};
		return false;
	});
	$('.js-menu-close').on("click", function(){
		$(".js-menu").removeClass('is-active');
		return false;
	});

	$(".js-form-select").change(function() {
		$(this).parent('.js-form-choice').find('.js-form-input').val($(this).val());
	});

	$('.js-form-box input').focusin(function() {
		$(this).parent().addClass('is-active');
	});
	$('.js-form-box input').focusout(function() {
		$(this).parent().removeClass('is-active');
	});

	$('.js-popup-open').click(function(event) {
		attr = $(this).attr('href');
		$('#pop1, #pop2, #pop3, #pop4, #pop5, #pop6, #pop7').removeClass('is-active');
		$(' '+attr).addClass('is-active');
		if ($('.js-popup').hasClass('is-active')) {
			$(".js-popup").removeClass('is-active');
		}
		else {
			$(".js-popup").addClass('is-active');
		}		
		return false;
	});

	//drop
	$('.js-drop-btn').on('click', function() {
		$('.js-drop-items').toggleClass('is-active');
		return false;
	});
	$('body').on('click', function(event) {
		$('.js-drop-items').removeClass('is-active');
	});
	$('.js-drop-items li').on('click', function() {
		$(this).parents('.js-drop-choice').find('.js-drop-input').val($(this).data("value"));
		$(this).parents('.js-drop-items').removeClass('is-active');
	});
	$("body").on("click", ".js-drop-items", function(event){
        event.stopPropagation();
    });
	//tabs
    $('.tabs a').click(function(event) {
    	$('.tabs a').removeClass('is-active');
    	$(this).addClass('is-active');
		attr = $(this).attr('href');
		$('#tab1,#tab2').addClass('is-hidden');
		$(' '+attr).removeClass('is-hidden');
		return false;
	});
});