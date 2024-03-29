defineAction = function() {
    if ($(window).scrollTop() > 200) {
        $(".navbar").addClass("active")
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() < 200) {
            $(".navbar").removeClass("active")
        } else {
            $(".navbar").addClass("active")
        }
        if ($(window).scrollTop() <= 0) {
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
    if (top.location !== self.location) {
        top.location = self.location
    };
    $(".body-text>p>img").on("click", function() {
        $(this).toggleClass("active")
    });
}
recheckDQ = function () {
    if($('#disqus_thread').length) {
        if(window.DISQUS) {
            DISQUS.reset({
            reload: true
            });
        } else {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        }
    }
}
$(document).ready(recheckDQ);
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
        recheckDQ();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
        defineAction();
    });
});
window.addEventListener('popstate', function(event) {
    defineAction();
});
defineAction();
recheckDQ();
