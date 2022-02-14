$(function () {
    $(" #main-carousel .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
    });
});

$(function () {
    $("#product-spencial .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },

            768: {
                items: 4
            },
        }
    });

    $("#gallery-carousel.owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        margin: 15,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },

            768: {
                items: 4
            },
        }
    });

    $("#back-top").click(function () {
        $("html,body").animate({ scrollTop: $("#main-menu").offset().top }, "3000");
        return false;
    });

    $("#back-top").click(function () {
$("html,body").animate({ scrollTop: $("#main-menu").offset().top }, "3000");
return false;
    });

    var $easyzoom = $('.easyzoom').easyZoom();
    var api1 = $easyzoom.filter('.easyzoom').data('easyZoom');

    $("#gallery-carousel img").click(function (e) {
        e.preventDefault();
        var src = $(this).attr("src")
        api1.swap(src, src);
    });
    $("#gallery-carousel img").hover(function (e) {
        e.preventDefault();
        var src = $(this).attr("src")
        api1.swap(src, src);
    });

});

$(function () {
    $('.animatedParent').appear();
    $('.animatedClick').click(function () {
        var target = $(this).attr('data-target');


        if ($(this).attr('data-sequence') != undefined) {
            var firstId = $("." + target + ":first").attr('data-id');
            var lastId = $("." + target + ":last").attr('data-id');
            var number = firstId;

            //Add or remove the class
            if ($("." + target + "[data-id=" + number + "]").hasClass('go')) {
                $("." + target + "[data-id=" + number + "]").addClass('goAway');
                $("." + target + "[data-id=" + number + "]").removeClass('go');
            } else {
                $("." + target + "[data-id=" + number + "]").addClass('go');
                $("." + target + "[data-id=" + number + "]").removeClass('goAway');
            }
            number++;
            delay = Number($(this).attr('data-sequence'));
            $.doTimeout(delay, function () {
                console.log(lastId);

                //Add or remove the class
                if ($("." + target + "[data-id=" + number + "]").hasClass('go')) {
                    $("." + target + "[data-id=" + number + "]").addClass('goAway');
                    $("." + target + "[data-id=" + number + "]").removeClass('go');
                } else {
                    $("." + target + "[data-id=" + number + "]").addClass('go');
                    $("." + target + "[data-id=" + number + "]").removeClass('goAway');
                }

                //increment
                ++number;

                //continute looping till reached last ID
                if (number <= lastId) { return true; }
            });
        } else {
            if ($('.' + target).hasClass('go')) {
                $('.' + target).addClass('goAway');
                $('.' + target).removeClass('go');
            } else {
                $('.' + target).addClass('go');
                $('.' + target).removeClass('goAway');
            }
        }
    });

    $(document.body).on('appear', '.animatedParent', function (e, $affected) {
        var ele = $(this).find('.animated');
        var parent = $(this);


        if (parent.attr('data-sequence') != undefined) {

            var firstId = $(this).find('.animated:first').attr('data-id');
            var number = firstId;
            var lastId = $(this).find('.animated:last').attr('data-id');

            $(parent).find(".animated[data-id=" + number + "]").addClass('go');
            number++;
            delay = Number(parent.attr('data-sequence'));

            $.doTimeout(delay, function () {
                $(parent).find(".animated[data-id=" + number + "]").addClass('go');
                ++number;
                if (number <= lastId) { return true; }
            });
        } else {
            ele.addClass('go');
        }

    });

    $(document.body).on('disappear', '.animatedParent', function (e, $affected) {
        if (!$(this).hasClass('animateOnce')) {
            $(this).find('.animated').removeClass('go');
        }
    });

    $(window).on('load', function () {
        $.force_appear();
    });

})