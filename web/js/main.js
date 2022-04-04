$(document).ready(function() {
  // 햄버거버튼 클릭시 gnb보임
  $('.ham_button').click(function() {
    $('.allmenu_wrap').show();
    $('html, body').css({'overflow-y' : 'hidden'});
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
  
  // 메인 글씨 타이핑 효과
  const content = "WEB PUBLISHER"
  const text = document.querySelector(".typing_txt")
  let index = 0;
 
  function typing(){
    text.textContent += content[index++]
    if(index > content.length){
      text.textContent = ""
      index = 0;
    }
  }
  setInterval(typing, 300)
  
  
  



});//ready()
