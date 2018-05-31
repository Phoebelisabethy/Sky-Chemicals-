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

         responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]




  });



  $('.your-class-fullwidth').slick({
           infinite: true,
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: true,
           dots: true,

    });




    $(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 500);
  });

  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });



});
