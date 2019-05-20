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
    $('.nutlen').click(function(event){
        event.preventDefault();
        $('html, body').animate({'scrollTop':0}, 1000);
        console.log('abv');
    });
});

