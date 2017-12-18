$(function () { // wait for document ready

 var owl = $('.owl-carousel');
 owl.owlCarousel({
  autoplay:true,
  loop: true,
  dots: true,
  item:1
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

 /*---*/
  /*Contador*/
  var target_date = new Date('jun, 03, 2018').getTime();
  
  // variables for time units
  var days, hours, minutes, seconds;
  // get tag element
  var countdown = document.getElementById('countdown');
  // update the tag with id "countdown" every 1 second
  setInterval(function () {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    countdown.innerHTML = '<span class="days">' + days +  ' <b>dias</b></span> <span class="hours">' + hours + ' <b>horas</b></span> <span class="minutes">' + minutes + ' <b>minutos</b></span> <span class="seconds">' + seconds + ' <b>segundos</b></span>';  
  }, 1000);
  /*---*/



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
      duration: "400%"
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