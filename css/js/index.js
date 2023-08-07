$(document).ready(function () {
  //-----login-
  function showLoginTopbar() {
    if (
      $(this).scrollTop() > 442 &&
      $(window).width() > 767 &&
      $('#loginBox').attr('class') == 'header__login'
    ) {
      $('.header__noticeWrap').css('top', '150px');
      $('.login-container').addClass('loginTopbar');
    } else {
      $('.header__noticeWrap').css('top', '97px');
      $('.login-container').removeClass('loginTopbar');
    }
  }
  $(window).scroll(showLoginTopbar);
  // -----banner-
  const $prevBtn = $('.bannerWrap .banner-prevBtn');
  const $nextBtn = $('.bannerWrap .banner-nextBtn');
  $('.banners-carousel').slick({
    arrows: true,
    dots: false,
    prevArrow: $prevBtn,
    nextArrow: $nextBtn,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: true,
          autoplaySpeed: 1500,
        },
      },
    ],
  });

  //-----RWD--
  $(window).resize(function () {
    if ($(window).width() > 767) {
      $('.login-container').show();
    }
    if ($(window).width() <= 767) {
      $('.login-container').hide();
    }
  });
});
