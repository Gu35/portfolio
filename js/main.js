$(document).ready(function() {
  // 햄버거버튼 클릭시 gnb보임
  $('.ham_button').click(function() {
    $('.allmenu_wrap').show();
    $('header').addClass('on');
  });
  
  // X버튼 클릭시 gnb안보임
  $('.close_button').click(function() {
    $('.allmenu_wrap' ).hide();
    $('html, body').css({'overflow-y' : 'visible'})
    $('header').removeClass('on');
  });
  
  // gnb 클릭시 해당 section으로 이동
  $('#gnb li').click(function() {
    let n = $(this).index();
    $('html, body').animate({
      scrollTop : $('section').eq(n).offset().top
    })
  })

    
  $('.html').rProgressbar({
    percentage: $('.html').next('span').text(),
    fillBackgroundColor: '#fc490b',
    backgroundColor: '#FFF'
  });
  $('.css').rProgressbar({
    percentage: $('.css').next('span').text(),
    fillBackgroundColor: '#2196f3',
    backgroundColor: '#FFF'
  });
  $('.javascript').rProgressbar({
    percentage: $('.javascript').next('span').text(),
    fillBackgroundColor: '#dab92c',
    backgroundColor: '#FFF'
  });
  $('.jquery').rProgressbar({
    percentage: $('.jquery').next('span').text(),
    fillBackgroundColor: '#0868ab',
    backgroundColor: '#FFF'
  });
  $('.psd').rProgressbar({
    percentage: $('.psd').next('span').text(),
    fillBackgroundColor: '#00b2ff',
    backgroundColor: '#FFF'
  });
  $('.ai').rProgressbar({
    percentage: $('.ai').next('span').text(),
    fillBackgroundColor: '#ffa000',
    backgroundColor: '#FFF'
  });
  $('.ae').rProgressbar({
    percentage: $('.ae').next('span').text(),
    fillBackgroundColor: '#dba6ff',
    backgroundColor: '#FFF'
  });
  // let a = $('.html').next('span').text();
  // $('.html').next('span').text(a + '%');
  $('.progressbar span').each(function() {
    $(this).text($(this).text() + '%')
  });

  //스크롤 이동시 작동코드
  $(window).scroll(function(){
    
  });
  $("").scroll(function(){
    
  });




 
  
});//ready()
