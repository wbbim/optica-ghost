<<<<<<< HEAD
defineAction = function() {
=======
>>>>>>> origin/master
if ($(window).scrollTop() > 200) {
	$(".navbar").addClass("active")
}

$(window).scroll(function() {
	if ($(window).scrollTop() < 200) {
		$(".navbar").removeClass("active")
	} else {
		$(".navbar").addClass("active")
	}
	if ($(window).scrollTop() == 0) {
		$(".gotop>.icon-arrow_carrot_right").addClass("top")
	} else {
		$(".gotop>.icon-arrow_carrot_right").removeClass("top")
	}
});

$(".selector").on("click", function() {
	$(".pop-menu.west,.glass").toggleClass("active")
});

$(".glass").on("click", function() {
	$(".pop-menu.west,.glass").removeClass("active")
});

$(".gotop").on("click", function() {
	$("html,body").animate({
		scrollTop: 0
	}, "slow")
});
<<<<<<< HEAD
=======

defineAction = function() {
>>>>>>> origin/master
	if (top.location !== self.location) {
		top.location = self.location
	};
	$(".body-text>p>img").on("click", function() {
		$(this).toggleClass("active")
	});

}
$(function() {
	$(document).pjax('a', '#pjax', {
		fragment: '#pjax',
		timeout: 6000,
		scrollTo: false
	});
	$(document).on('submit', '#search', function(event) {
		$.pjax.submit(event, '#pjax', {
			fragment: '#pjax',
			timeout: 6000,
			scrollTo: false
		});
	});
	$(document).on('pjax:send', function() {
		NProgress.start();
	});
	$(document).on('pjax:complete', function() {
		NProgress.done();
		if($('#disqus_thread').length) {
		    DISQUS.reset({
			   reload: true
		    });
		}
		defineAction();
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	});
});
defineAction();