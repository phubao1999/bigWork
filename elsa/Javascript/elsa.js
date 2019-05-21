$(document).ready(function () {
    $(window).scroll(function () { 
        if($('html, body').scrollTop()>430){
            $('.menutren').addClass('abc');
        }
        else if($('html, body').scrollTop()<=100){
            $('.menutren').removeClass('abc');
        }
    });
    
});