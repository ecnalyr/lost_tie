// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function() {
$(document).foundation();
});
// Slider Controllers
  (function(){
      /mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
      if (!pageYOffset) window.scrollTo(0, 1);
    }, 1000);
      var options = {
        nextButton: true,
        prevButton: true,
        animateStartingFrameIn: true,
        transitionThreshold: 500,
        preloader: true,
        preloadTheseFrames: [1,2,3],
        preloadTheseImages: [
          "../../img/slider-imgs/bg1.jpg",
          "../../img/slider-imgs/bg2.jpg",
          "../../img/slider-imgs/bg3.jpg",
          "../../img/slider-imgs/bg4.jpg"
        ],
        fallback: {
                theme: "slide",
                speed: 500
            }
      };

      var sequence = $("#sequence").sequence(options).data("sequence"),
          $slides = $('#sequence-slides'), counter = '' ;

          if(sequence){

             sequence.beforeFirstFrameAnimatesIn= function(){
                $slides.find('.slider-bg').each(function(i){
                  counter = ++i;
                  $(this).addClass('header-' + counter);
                });
              };

          }
          else{
            return;
          }


  })();