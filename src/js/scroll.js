var toTopBtn = document.querySelector(".up-button");
var scrollAnimation;

if (toTopBtn) {
  function scrollToTop() {
    var position = document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
      window.scrollBy(0, -Math.max(10, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 10);
    } else clearTimeout(scrollAnimation);
  }
}

//для плавного скролла к якорям
$(document).ready(function() {
  $(".first-slide").on("click", ".scroll-btn", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
