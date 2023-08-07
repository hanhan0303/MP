//--hamburger------
const topbarToggleBtn = document.querySelector('.hamburger');
const topbarMobileNav = document.querySelector('.header__mobile-Nav');
topbarToggleBtn.addEventListener('click', function () {
  topbarToggleBtn.classList.toggle('active');
  topbarMobileNav.classList.toggle('active');
});
