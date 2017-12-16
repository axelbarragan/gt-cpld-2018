$(function () { // wait for document ready

 var owl = $('.owl-carousel');
 owl.owlCarousel({
  autoplay:true,
  loop: true,
});
 owl.on('changed.owl.carousel', function(event) {
  jeje();
 })

 function jeje() {
   TweenMax.from( $('.orale'), 0.5,
    {css:{scale:0.5, opacity:0, rotation: 10}, 
    ease:Quad.easeInOut
  });
 }



 var x = $(".one h1").offset();
 var one = $(".one").width();
 var para = $(".one h1").width();
 var right = one - (x.left + para);
 var twoOffset = $(".two h1").offset();
 var twoLeftOffset = twoOffset.left - one;
 var firstLine = twoLeftOffset + right;
 var leftPos = para + x.left;

 /*$(".horizontal-line").css({"top": x.top, "left": leftPos});*/
// init controller
var controller = new ScrollMagic.Controller();

var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
    .to("#slideContainer", 1,   {x: "-75%"})

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "200%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
      ////.addIndicators()
      .addTo(controller);


      var horizontal = new ScrollMagic.Scene({
        offset: 50,
        duration: 300,
       // reverse: false
      }).setTween(".horizontal-line", {width: firstLine}) // trigger a TweenMax.to tween
        // .addIndicators()
        .addTo(controller);
      });