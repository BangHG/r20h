const pathDuration = 2000;
const path1 = anime.path('.section--main #path1');
const path1Ani = anime({
  targets: '.bg-cft--1 .i',
  translateX: path1('x'),
  translateY: path1('y'),
  scale: [0, '100%'],
  easing: 'easeInOutQuart',
  duration: pathDuration,
  delay: 500,
});
const path2 = anime.path('.section--main #path2');
const path2Ani = anime({
  targets: '.bg-cft--2 .i',
  translateX: path2('x'),
  translateY: path2('y'),
  scale: [0, '100%'],
  easing: 'easeInOutQuart',
  duration: pathDuration * 0.85,
  delay: 500,
});
const path3 = anime.path('.section--main #path3');
const path3Ani = anime({
  targets: '.bg-cft--3 .i',
  translateX: path3('x'),
  translateY: path3('y'),
  scale: [0, '100%'],
  easing: 'easeInOutQuart',
  duration: pathDuration * 0.9,
  delay: 500,
});
const path4 = anime.path('.section--main #path4');
const path4Ani = anime({
  targets: '.bg-cft--4 .i',
  translateX: path4('x'),
  translateY: path4('y'),
  scale: [0, '100%'],
  easing: 'easeInOutQuart',
  duration: pathDuration * 0.95,
  delay: 500,
});
const path5 = anime.path('.section--main #path5');
const path5Ani = anime({
  targets: '.bg-cft--5 .i',
  translateX: path5('x'),
  translateY: path5('y'),
  scale: [0, '100%'],
  easing: 'easeInOutQuart',
  duration: pathDuration * 0.85,
  delay: 500,
});
const path6 = anime.path('.section--main #path6');
const path6Ani = anime({
  targets: '.bg-cft--6 .i',
  translateX: path6('x'),
  translateY: path6('y'),
  scale: [0, '100%'],
  easing: 'easeInOutQuart',
  duration: pathDuration * 0.95,
  delay: 500,
});

// ## parallax

const pageMain = $('body');

pageMain.mousemove(parallaxMain);

const elem_cft = document.querySelector('.section--main .bg-cft_bx');
const elem_bg = document.querySelector('.section--main .bg');

function parallaxMain(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;

  let __bg_x = `${_mouseX - _w}`;
  let __bg_y = `${_mouseY - _h}`;
  let __cft_x = `${_mouseX - _w}`;
  let __cft_y = `${_mouseY - _h}`;

  let bgPositionX = `${-50 - __bg_x * 0.001 * 0.5}%`;
  let bgPositionY = `${-50 - __bg_y * 0.003 * 0.5}%`;
  let cftPositionX = `${-50 - __cft_x * -0.001 * 0.9}%`;
  let cftPositionY = `${-50 - __cft_y * -0.003 * 0.9}%`;

  // console.log(bgPositionX, cftPositionY);
  elem_bg.style.transform = `translate(${bgPositionX}, ${bgPositionY})`;
  elem_cft.style.transform = `translate(${cftPositionX}, ${cftPositionY})`;
}
