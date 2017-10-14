$(document).ready(function() {
  $("h1").click(function() {
    $(this).effect("bounce", { times: 4 }, 1500);
  });
  $(".img-responsive").click(function() {
    $(this).effect("slide");
  });
});
