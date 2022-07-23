(function($){
	$('#mobile-menu').on('click', function(){
		$('.navbar').slideToggle()
	})
})(jQuery);

(function($){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
})(jQuery);


$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
		var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});



$(document).ready( function(){
	 			$('.topfadein').each(function(){
				$(this).addClass('active');
 		});
});

$(function(){
	$(window).scroll(function (){
			$('.fadein').each(function(){
					var position = $(this).offset().top;
					var scroll = $(window).scrollTop();
					var windowHeight = $(window).height();
					if (scroll > position - windowHeight + 400){
						$(this).addClass('active');
					}
			});
	});
});

