$(".menu-button").click(function() {
  $(this).toggleClass("on");
  $(".menu-box").slideToggle();
  return false;
});