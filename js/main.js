(function($) {
    
    "use strict";
    
    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    
    
    //Update Header Style and Scroll to Top
    function headerStyle() {
        if($('.main-header').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var sticky_header = $('.fixed-header .sticky-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos > 100) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }
    
    headerStyle();
    
    //Submenu Dropdown Toggle
    if($('.main-header li.dropdown ul').length){
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        
        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
        
        //Disable dropdown parent link
        $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
    }

    
    //Fact Counter + Text Count
    if($('.count-box').length){
        $('.count-box').appear(function(){
    
            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                
            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }
            
        },{accY: 0});
    }
    

    //LightBox / Fancybox
    if($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect  : 'fade',
            closeEffect : 'fade',
            helpers : {
                media : {}
            }
        });
    }
    
    //Contact Form Validation
    // if($('#contact-form').length){
    //     $('#contact-form').validate({
    //         rules: {
    //             username: {
    //                 required: true
    //             },
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             subject: {
    //                 required: true
    //             },
    //             message: {
    //                 required: true
    //             }
    //         }
    //     });
    // }
     
   
    // Scroll to a Specific Div
    if($('.scroll-to-target').length){
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
           // animate
           $('html, body').animate({
               scrollTop: $(target).offset().top
             }, 1500);
    
        });
    }
    
    // Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
    
    $(window).on('scroll', function() {
        headerStyle();
    });
    
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
    
    $(window).on('load', function() {
        handlePreloader();
    }); 


 
 

})(window.jQuery);