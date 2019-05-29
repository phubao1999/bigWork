$(document).ready(function () {
    $('.nutmenu i.fas.fa-bars.d-none').click(function (e) { 
        e.preventDefault();
        console.log('aaa');
        $('.ndmenu').toggleClass('rightMove');
    });
});