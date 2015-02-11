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


	//select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    $('.select__list li').on('click', function() {
	    	$('.select__text').addClass('is-active');
	    });
	});

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

});