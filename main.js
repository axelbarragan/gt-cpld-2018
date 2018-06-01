$(function () { // wait for document ready

 $('.nav a').click(function(){
    $('.navbar-ex1-collapse').collapse('hide');
  });

 function jeje() {
   TweenMax.from( $('.orale'), 0.5,
    {css:{scale:0.5, opacity:0, rotation: 10}, 
    ease:Quad.easeInOut
  });
 }

 $('.slider3').bxSlider({
  adaptiveHeight: true,
  mode: 'vertical',
  auto: true,
  speed: 400,
  pause: 5000
});

 /*---*/
 /*Contador*/
 

  function validarLetras(letras){
    var re =  /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    return re.test(letras);
  }

  function validarCorreo(correo){
    var re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    return re.test(correo);
  }

  

  $('.enviarDatos').click(function(e) {
    e.preventDefault();
    var nombre  = $('.frmNombre').val();
    var email   = $('.frmEmail').val();
    var mensaje = $('.frmMensaje').val();
    if(nombre.length>0) {
      if(validarLetras(nombre)) {
        if(email.length>0) {
          if(validarCorreo(email)) {
            if(mensaje.length>0) {
              var dataString = $('#formContacto').serialize();
              $.ajax({
                type: "POST",
                url: "php/newContacto.php",
                data: dataString,
                beforeSend: function() {
                  $('.inpu').prop('disabled', true);
                },
                success: function(data) {
                  console.log(data);
                  $('.inpu').prop('disabled', false);
                  var json=JSON.parse(data);
                  if(json.respuesta=='bien') {
                    $('.inpu').val('');
                    $('.error-rec').remove();
                    alert("TU MENSAJE HA SIDO ENVIADO");
                  } else {
                    console.log("Error: "+json.error+" | Data: "+data);
                  }
                },
              });
            } else {
              alert("INTRODUCE TU MENSAJE");
              $('.frmMensaje').focus();
            }
          } else {
            alert("VERIFICA TU CORREO");
            $('.frmEmail').focus();
          }
        } else {
          alert("INTRODUCE TU CORREO");
          $('.frmEmail').focus();
        }
      } else {
        alert("VERIFICA TU NOMBRE, SÓLO SE PERMITEN LETRAS.");
        $('.frmNombre').focus();
      }
    } else {
      alert("INTRODUCE TU NOMBRE");
      $('.frmNombre').focus();
    }
  });



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