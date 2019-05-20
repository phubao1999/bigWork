$(() => {
  $('.bugger').on('click', (e) => {
    $('.navbar-nav').slideToggle();
    e.stopPropagation();
  })
})

$(document).ready(function () {
  // console.log('abc')
  $(window).scroll(function () { 
    if($('html, body').scrollTop()>650){
      $('.nav').addClass('doinen'); 
      $('.nav-brand').addClass('hieuung');  
      $('.nutlen').addClass('hienthi'); 
    }
    else if ($('html, body').scrollTop()<=100){
      $('.nav').removeClass('doinen');
      $('.nav-brand').removeClass('hieuung');
      $('.nutlen').removeClass('hienthi');
    }
  });
  $('.nutlen').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({'scrollTop':0}, 1000);
  });  // Effect Back To Top
  $('.nav .nav-brand').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({'scrollTop':0}, 1000);
  });  //effect Brand

  // Almost Done
  $('.nav ul li:nth-child(1) a').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({'scrollTop':680}, 1000);

  });
  $('.nav ul li:nth-child(2) a').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({'scrollTop':1000}, 1000);
  });
  $('.nav ul li:nth-child(3) a').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({'scrollTop':1900}, 1000);
  });
  $('.nav ul li:nth-child(4) a').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({'scrollTop':2800}, 1000);
  });
  $('.nav ul li:nth-child(5) a').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({'scrollTop':3700}, 1000);
  });
});