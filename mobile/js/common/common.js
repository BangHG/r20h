$(window).on('load', function () {
  $('body').attr('data-loading', 'done');
});

// swiper 게임소개:직업소개
const heroesSwiper = new Swiper('.popup__heroes .swiper', {
  speed: 600,
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  navigation: {
    nextEl: '.popup__heroes .swiper-button--next',
    prevEl: '.popup__heroes .swiper-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const gameSwiper = new Swiper('.section--game .swiper', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  fadeEffect: {},
  navigation: {
    nextEl: '.section--game .swiper-button--next',
    prevEl: '.section--game .swiper-button--prev',
  },
});

// 블라인드 활성화 함수.
function open_blind() {
  $('.blind, .blind--btnClosed').fadeIn(300);
  $('html').css('overflow-y', 'hidden');
}
// 블라인드 비 활성화 함수.
function closed_blind() {
  $('.blind, .blind--btnClosed').fadeOut(300);
  $('html').css('overflow-y', 'auto');
}
// 팝업 닫기 버튼 클릭 시 함수.
function closed_popup() {
  closed_blind();
  $('.youtube').empty().hide();
  $('.popup--video').removeClass('open');
  $('.popup').fadeOut(300);
  $('.popup__heroes').delay(300).removeClass('active');
}
$('.blind').on('click', function () {
  closed_popup();
});

$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    closed_popup();
  }
});

//팝업열기
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  open_blind();
  $('.' + targetPopupName).fadeIn();
  return false;
});

$(document).ready(function () {
  // ## aos
  AOS.init();

  // ##직업 팝업 열기
  $('.section--heroes .hero').each(function () {
    $(this).click(function (e) {
      const index = $(this).index();
      // console.log(index);

      $('.popup__heroes').addClass('active');
      open_blind();
      heroesSwiper.slideTo(index, 0, false);
    });
  });
});

const $mediaResponsiveSize = 1000;

//네비게이션
function navClose() {
  $('.nav__dimmed').stop().fadeOut();
  $('.nav__toggle').stop().removeClass('on');
  $('.nav__toggle').attr('title', '네비게이션 열기');
  $('.header').stop().removeClass('active');
}
function navOpen() {
  $('.nav__dimmed').stop().fadeIn();
  $('.nav__toggle').stop().addClass('on');
  $('.nav__toggle').attr('title', '네비게이션 닫기');
  $('.header').stop().addClass('active');
}
$('.nav-item .link').click(function () {
  navClose();
});

$('.nav__toggle').click(function () {
  if ($(this).hasClass('on')) {
    navClose();
  } else {
    navOpen();
  }
});
// ## scrollSpy function
function scrollSpy() {
  var sections = [
    //도달할 section id 값
    'section-1', //
    'section-2', //
    'section-3', //
    'section-4', //
    'section-5', //
    'section-6', //
  ];
  var current = '';
  for (var i = 0; i < sections.length; i++) {
    if ($('#' + sections[i]).offset().top <= $(window).scrollTop() + 1) {
      //float 고려 +1 처리
      current = sections[i].split('section-')[1];
    }
  }
  // console.log(current);
  $('.nav .nav-item .link').removeClass('active');
  $(`.nav .nav-item .link[href="#section-${current}"]`).addClass('active');
}

$(document).on('scroll', function (e) {
  scrollSpy();
  var nowScroll = $(this).scrollTop();

  if (nowScroll > 500) {
    $('.btnTop').stop().fadeIn();
  } else {
    $('.btnTop').stop().fadeOut();
  }
});

// ## 최상단으로 이동 버튼
$('.btnTop').click(function (e) {
  e.preventDefault();
  $('html,body').animate({ scrollTop: 0 }, 200);
});
