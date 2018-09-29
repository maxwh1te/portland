jQuery(document).ready(function($){
//slideshow
    $('.slideshow-top').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
    });
//wraper-best-sellers
    $('.best-seller-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
//============ Main-menu-list (sidebar)
    $('.openIconMenu').on('click', function() {
        $(this).parent('.menu-list-item').next().slideToggle();
        $(this).children().toggleClass('iconArrow-active');
    });
    // ============ Mobile Menu
    var menuButton = $('.logoMenuToggle');
    var navSite = $('.menu-bottom');

    menuButton.on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.main-menu').next().removeClass('active');
        } else {
            $(this).addClass('active');
            $('.main-menu').next().addClass('active');
        }
    });

    var topLinkButton = $('.link-menu-button');
    var topLinkMenu = $('.link-menu');

    topLinkButton.on('click', function () {
       if($(this).hasClass('active')) {
           $(this).removeClass('active');
           $('.menuUpRight').parent().find(topLinkMenu).removeClass('active');
       } else {
           $(this).addClass('active');
           $('.menuUpRight').parent().find(topLinkMenu).addClass('active');
       }
    })
    //============scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            navSite.removeClass('active');
            menuButton.removeClass('active');
            topLinkButton.removeClass('active');
            topLinkMenu.removeClass('active');
        }
        prevScrollpos = currentScrollPos;
    }
    //=================footer button
    $('.rb-footToggle').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).next().addClass('active');
        }
    })
    //====================top scroll button
    $(function() {

        $(window).scroll(function() {

            if($(this).scrollTop() !== 0) {

                $('.toTop').fadeIn();

            } else {

                $('.toTop').fadeOut();

            }

        });

        $('.toTop').click(function() {

            $('body,html').animate({scrollTop:0},500);

        });

    });
    //=====================button scroll sidebar
    $('.filters-button-open').on('click', function() {
        if($(this).hasClass('active')) {
            $('.filters').first().removeClass('active');
            $(this).removeClass('active');
            $('.filters').next().removeClass('active');
        } else {
            $('.filters').first().addClass('active');
            $(this).addClass('active');
            $('.filters').next().addClass('active');
        }
    })
});
