const hamburger = document.querySelector('.burger-bar');
const navMenu = document.querySelector('.nav-ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle ('active');
    navMenu.classList.toggle ('active');
})

$(".js-anchor-link").click(function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 1500);
    }
  });