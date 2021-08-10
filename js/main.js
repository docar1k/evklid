new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoheight: true,
  spaceBetween: 70,
  slidesPerView: 1,
  loop: true,

});

const burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  document.querySelector('.burger__line').classList.toggle('active');
  const menu = document.querySelector('.nav');
  menu.classList.toggle("animate");
});

