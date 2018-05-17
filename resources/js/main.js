$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
  });


$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1100);
    return false;
});

$('.your-class').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 3,
         arrows: true,
         dots: true,

    });

});
