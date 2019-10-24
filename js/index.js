$(document).ready(function() {
  // BY DEFAULT
  $(".header").css("height", 46);
  $(".black").css("visibility", "hidden");
  
  $(".menu-icon").click(function() {
    if ($(".header").height() == 46) {
      $(".header").css("height", 144);
      $(".black").css("visibility", "visible");
    } else {
      $(".header").css("height", 46);
      $(".black").css("visibility", "hidden");
    }
  });
})