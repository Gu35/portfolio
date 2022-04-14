$ (function() {
    //햄버거 버튼
    $('.hamburger_button').click(function() {
        $('.allmenu_box').show();
        $('html, body').css({'overflow-y' : 'hidden'});
        $('.allmenu_wrap').addClass('on');
    });
    //close_btn
    $('.allmenu_wrap .close_btn').click(function() {
        $('.allmenu_box' ).hide();
        $('html, body').css({'overflow-y' : 'visible'})
        $('.allmenu_wrap').removeClass('on');
    });
    // let n = 0;
    // $('.allmenu_box .a1>li>a').click(function() {
    //     if(n != 0) {n = 0;}
    //     else {n = 180}
    //     $(this).find('.b1').css('transform', 'translateY(-50%) rotate(' + n + 'deg)')
    // })  


    //.a1 클릭시 .a2 보여짐
    $('.allmenu_box .a1>li>a').click(function() {
        $('.allmenu_box .a1>li>a').not(this).next().slideUp()
        $(this).next().slideToggle();
        $('.allmenu_box .a1>li>a').not(this).children('button').removeClass('open')
        $(this).children('button').toggleClass('open')
    });
    //.a2 클릭시 .a3 보여짐
    $('.allmenu_box .a2>li>a').click(function() {
        $('.allmenu_box .a2>li>a').not(this).next().slideUp()
        $(this).next().slideToggle();
    });
    //main_visual
    $('.visual_grop').slick({
        autoplay : true,
        appendArrows : $('.control_button')
    });
    // gnb 마우스 호버
    $('#gnb>li').hover(function() {
        $(this).find('.gnb2 ').show();
        $('header').append('<div class="nav_bg"></div>')
    }, function() {
        $('.gnb2 ').hide();
        $('.nav_bg').remove();
    });

}) //ready