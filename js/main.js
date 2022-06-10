/*
//  #conWrap의 높이(세로길이) 구하기
var footerTop = $('footer').offset().top;   //푸터 위로부터의 거리
var conWrapTop =$('#conWrap').offset().top; //#conWrap 위로부터의 거리
var conWrapH =  footerTop - conWrapTop;    //#conWrap의 높이(세로길이)
$('#conWrap').css({height:conWrapH});       //#conWrap에 높이 적용

$(window).resize(function(){
    var footerTop = $('footer').offset().top; 
    var conWrapTop =$('#conWrap').offset().top; 
    var conWrapH =  footerTop - conWrapTop;
    $('#conWrap').css({height:conWrapH});
});
*/

var elFooter = document.querySelector('footer');

//  #conWrap의 높이(세로길이) 구하기-footer-아래쪽 fixed사용 안할때
var winH = $(window).height();      //열려져있는 윈도우 높이
var headerH = $('header').height();      //header의 높이
var footerH = elFooter.offsetHeight;      //footer의 높이 (자바스크립트) 
//box-sizing:border-box를 적용시, 패딩, 보더를 제외한 값 

console.log(`현재 윈도우의 높이 ${winH} / header의 높이 ${headerH } / footer의 높이 ${footerH }`)

var  conWrapH = winH - (headerH + footerH); 
//#conWrap의 높이는 화면전체의 세로에서  헤더, 푸터 높이를 빼준값

$('#conWrap').css({height:conWrapH});

$(window).resize(function(){
    var winH = $(window).height(); 
    var  conWrapH = winH - (headerH + footerH);  
    $('#conWrap').css({height:conWrapH});
});



//lnb 슬라이드 메뉴
var du = 400;
var open = 0;

$('.lnb_btn').click(function(){
    if(open == 0){
        $('#lnb').animate({left:0}, 400, 'swing');
        $('#wrap').animate({left:274}, 400, 'swing');
        $('.cover').fadeIn(du); 
        $(this).find('img').attr({'src':'img/bg_header_lnb_active.png','alt':'메뉴닫기'});
        open = '열림';
    } else {
        $('#lnb').animate({left:-274}, 400, 'swing');
        $('#wrap').animate({left:0}, 400, 'swing');
        $('.cover').fadeOut(du); 
        $(this).find('img').attr({'src':'img/bg_header_lnb.png','alt':'메뉴열기'});
        open = 0;
    }
});