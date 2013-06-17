
/* =========================================
 * Custom scripts for Siramix github page.
 * ========================================= */

/*
 * Set up our handlers for the Buzzwords Carousel prev and
 * next buttons.
 */
$(document).ready(function () {
  $("#bwCarousel .carousel-control.left").click(function(e){
      $("#bwCarousel").carousel('prev');
  });

  $("#bwCarousel .carousel-control.right").click(function(e){
      $("#bwCarousel").carousel('next');
  });
});
