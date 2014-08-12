var ww = document.body.clientWidth;

$(function () {

    $('.other-events').hover(
      function() {
        $('.hover-menu').slideDown();
      }, function() {
        $('.hover-menu').slideUp();
      }
    );

    $('.footer-head-mobile').click(function(e){
        e.preventDefault();
        if(false == $(this).closest('.footer-list').find('.menu-item').is(':visible')) {
            $('.menu-item').slideUp();
            $('.icon').removeClass('active');
        }
        $(this).closest('.footer-list').find('.menu-item').slideToggle();
        $(this).find('.icon').toggleClass('active');
        
    });


    $('ul li:first-child').addClass('first');
    $('ul li:last-child').addClass('last');
    $('ul li:odd').addClass('odd');
    $('ul li:even').addClass('even');


    $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent").append('<span class="icon"></span>');
        };
    })

    $(".show-menu").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".nav").toggle();
    });
    adjustMenu();

    $(window).bind('resize orientationchange', function() {
        ww = document.body.clientWidth;
        adjustMenu();
        if ($('.show-menu').is(":visible") ) {
            $('.nav').hide();
            $('.show-menu').removeClass('active');
        }
    });


   // Crossbrowser input placeholder script

    var $inputText = $('.query-input input, .query-input textarea');
    $inputText.each(function () {
        if (!$(this).val()) {
            $(this).parent().find('label').show();
            //$(this).parent().css({backgroundPosition:'0 0'});
        } else {
            $(this).parent().find('label').hide();
            //$(this).parent().css({backgroundPosition:'0 bottom'});
        }
    });
    $inputText.focus(function () {
        if (!$(this).val()) {
            $(this).parent().find('label').css({
                'opacity': '0.4'
            });
            //$(this).parent().css({backgroundPosition:'0 bottom'});
        }
    });
    $inputText.keydown(function () {
        if (!$(this).val()) {
            $(this).parent().find('label').hide();
            //$(this).parent().css({backgroundPosition:'0 bottom'});
        }
    });
    $inputText.blur(function () {
        if (!$(this).val()) {
            $(this).parent().find('label').show().css({
                'opacity': '1'
            });
            //$(this).parent().css({backgroundPosition:'0 0'});
        }
    });

});

$(window).load(function(){

	$('.main-slider').flexslider({	
		animation: "slide",
        directionNav: false,
	});

	$('.carousel-slider').flexslider({
        animation: "slide",
     });
});

var adjustMenu = function() {
    if (ww < 1020) {
        $(".show-menu").css("display", "inline-block");
        $(".nav li").unbind('mouseenter mouseleave');
        $(".nav li a.parent").unbind('click').bind('click', function(e) {
            // must be attached to anchor element to prevent bubbling
            e.preventDefault();
            $(this).parent("li").toggleClass("hover");
        });
    } 
    else if (ww >= 1020) {
        $(".show-menu").css("display", "none");
        $(".nav").show();
        $(".nav li").removeClass("hover");
        $(".nav li a").unbind('click');
        $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            // must be attached to li so that mouseleave is not triggered when hover over submenu
            $(this).toggleClass('hover');
        });
    }
}

$(window).resize(function(){

});
