$(document).ready(function() {
  $("h1").on("click", function() {
    $(this).effect("bounce", { times: 4 }, 1500);
  });
  $(".img-responsive").on("click", function() {
    $(this).effect("slide");
  });
  
});
