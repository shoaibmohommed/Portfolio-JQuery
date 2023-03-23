//Change pos/background/padding/add shadow on nav when scroll event happens
$(function () {
  var navbar = $(".navbar");
  var headerImg = $(".navbar img");
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 40) {
      navbar.removeClass("navbar-scroll");
      headerImg.removeClass("header-img-scroll");
    } else {
      navbar.addClass("navbar-scroll");
      headerImg.addClass("header-img-scroll");
    }
  });
});

$(".navbar a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    1000
  );
  return false;
});