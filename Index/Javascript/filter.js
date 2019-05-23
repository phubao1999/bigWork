$(document).ready(function () {
    // Hiệu Ứng Filter
    $('.ourProject ul li').click(function (e) { 
        e.preventDefault();
        var danhMuc = $(this).data('class');
        // console.log(danhMuc);
        $('.effect img').each(function(index, el){
            if($(this).hasClass(danhMuc)){
                $(this).fadeIn();
            }
            else {
                $(this).fadeOut();
            }
        });
    });
});