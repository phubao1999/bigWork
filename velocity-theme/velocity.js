// $(function(){
//     $(window).scroll(function(){
//         $('.logo').addClass('chucam');
//         $('.menutren').addClass('nentrang');
//         $('.nutlen').addClass('hienthi');
//     });
//     $('.nutlen').click(function(){
//     $('body').animate({'scrollTop':0});
        
        
//     });
// });
$(function(){
    $(window).scroll(function(){
        if($('html, body').scrollTop()>430){
            $('.logo').addClass('chucam');
            $('.menutren').addClass('nentrang');
            $('.nutlen').addClass('hienthi');
        }
        else if($('html, body').scrollTop()<=100){
            $('.logo').removeClass('chucam');
            $('.menutren').removeClass('nentrang');
            $('.nutlen').removeClass('hienthi');
        };
    });
    $('.nutlen.hienthi').click(function(event){
        event.preventDefault();
        $('html, body').animate({'scrollTop':0});
    });
});
$(document).ready(function () {
    console.log('chạy chưa bạn ơi');
});
