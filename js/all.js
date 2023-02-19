$(document).ready(function () {
  const $gameList = $('.bgSlots > ul.flexWrapBox');

  $('.gameNav-bottom-slots > ul.gameNav-bottom-logoList > li').on(
    'click',
    (e) => {
      const li = e.currentTarget;
      const id = $(li).data('id');
      const games = slotsGames[id] || [];
      const $games = games.map((game) =>
        $(`
    <li class="bgSlots-item">
      <div class="bgSlots-item-img">
        <img
          src="${game.href}"
          alt=""
          title=""
        />
        <div class="bgSlots-item-img-btn">
          ${
            game.freeTrial ? '<span class="freeTrialBtn">Free trial</span>' : ''
          }
          <span>Play Now</span>
        </div>
      </div>
      <div class="bgSlots-item-txt">${game.title}</div>
    </li>
    `),
      );
      $gameList.html($games);
    },
  );
  //------
  function showLoginTopbar() {
    if ($(this).scrollTop() > 442) {
      $('.header__noticeWrap').css('top', '150px');
      $('.login-container').addClass('loginTopbar');
    } else {
      $('.header__noticeWrap').css('top', '97px');
      $('.login-container').removeClass('loginTopbar');
    }
  }
  $(window).scroll(showLoginTopbar);
  // ------
  const $prevBtn = $('.bannerWrap .banner-prevBtn');
  const $nextBtn = $('.bannerWrap .banner-nextBtn');
  $('.banners-carousel').slick({
    arrows: true,
    prevArrow: $prevBtn,
    nextArrow: $nextBtn,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    easing: 'linear',
    infinite: true,
  });

  //------
  $('.more-five .gameNav-bottom-logoList').slick({
    arrows: true,
    speed: 300,
    slidesPerRow: 5,
    slidesToShow: 5,
    slidesToScroll: 1,
    easing: 'linear',
    variableWidth: true,
    infinite: false,
  });
  //-----
  $('.LOTTO').click(function (e) {
    $(this).addClass('choose-game').siblings().removeClass('choose-game');
    $('.bgLottery').show().siblings().hide();
    $('.gameNav-bottom-lottery').show().siblings().hide();
  });
  $('.FISH').click(function (e) {
    $(this).addClass('choose-game').siblings().removeClass('choose-game');
    $('.bgFishing').show().siblings().hide();
    $('.gameNav-bottom-fishing').show().siblings().hide();
  });
  $('.LIVE').click(function (e) {
    $(this).addClass('choose-game').siblings().removeClass('choose-game');
    $('.bgLiveCasino').show().siblings().hide();
    $('.gameNav-bottom-liveCasino').show().siblings().hide();
  });
  $('.POKER').click(function (e) {
    $(this).addClass('choose-game').siblings().removeClass('choose-game');
    $('.bgPoker').show().siblings().hide();
    $('.gameNav-bottom-poker').show().siblings().hide();
  });
  $('.SLOT').click(function (e) {
    $(this).addClass('choose-game').siblings().removeClass('choose-game');
    $('.bgSlots').show().siblings().hide();
    $('.gameNav-bottom-slots').show().siblings().hide();
  });
  $('.SPORT').click(function (e) {
    $(this).addClass('choose-game').siblings().removeClass('choose-game');
    $('.bgSports').show().siblings().hide();
    $('.gameNav-bottom-sports').show().siblings().hide();
  });
  //-----
  $('.rightBar > ul.rightBar_nav > li > .icon-close').click(function (e) {
    $('.rightBar > ul.rightBar_nav')
      .addClass('deactive')
      .siblings()
      .removeClass('deactive');
    $('.rightBar > .rightBar_showBtn')
      .addClass('active')
      .siblings()
      .removeClass('active');
  });
  $('.rightBar > .rightBar_showBtn > .rightBar_showBtn-btn').click(function (
    e,
  ) {
    $('.rightBar > ul.rightBar_nav')
      .addClass('active')
      .siblings()
      .removeClass('active');
    $('.rightBar > .rightBar_showBtn')
      .addClass('deactive')
      .siblings()
      .removeClass('deactive');
  });
});
