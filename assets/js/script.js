$(function(){
  var navbarHeight = $('.navbar').outerHeight();
  function goTo(target, offsetTop){
    offsetTop = offsetTop || 0;
    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top - navbarHeight + offsetTop
    },500);
  }

  $('.scrollto').click(function(e){
    e.preventDefault()

    var offsetTop = 0;
    var attr = $(this).attr('data-offset');
    if (typeof attr !== typeof undefined && attr !== false) {
      offsetTop = Number(attr);
    }
    goTo($(this).attr('href'), offsetTop)
  })

  $('.scroll-down').click(function(e){
    e.preventDefault()
    goTo('main', 0)
  })
  
  $('[data-toggle="navigation"]').click(function(){
    if($('body').hasClass('navigation-open')){
      $('.navigation').removeClass('scaled');
      setTimeout(function(){
        $('body').removeClass('navigation-open');
      },300);
    } else {
      $('body').toggleClass('navigation-open');
      setTimeout(function(){
        $('.navigation').toggleClass('scaled');
      },100);
    }
  })
  $(document).bind("ready scroll", function () {
    if($(document).scrollTop() >= 10){
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  }).trigger('scroll');

  $('.swiper-matchheight').matchHeight();

  var swiperCard, swiperPolicy;
  function swiperMode() {
    swiperCard = new Swiper('.swiper-card', {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-card-next",
        prevEl: ".swiper-card-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        }
      },
    });
    swiperPolicy = new Swiper('.swiper-policy', {
      slidesPerView: 2,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-policy-next",
        prevEl: ".swiper-policy-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
        }
      },
      on: {
        afterInit: function () {
          $('.swiper-matchheight').matchHeight();
        },
      },
    });
  }
  swiperMode();

  $(document).scroll(function() {
    if($(window).width()>767){
      var fy = $(document).height() - $(window).height() - $('.footer').outerHeight();
      var y = $(this).scrollTop();
      if (y > 800 && y < fy) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    }
  });
  $('.scroll-top').click(function(){
    goTo('main', 0)
  })

  $('[data-toggle="limit-height"]').click(function(){
    $($(this).data('target')).toggleClass('full');
  })
})