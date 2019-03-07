/*------------------------------*/
//  TYPE JS Initialization
/*------------------------------*/

const options = {
    strings: ["Welcome to Olso ^1000","Rent almost anything ^500"],
    typeSpeed: 80, 
    loop:true,
    showCursor:true,
    smartBackspace: true
    
  }
  
  const typed = new Typed(".element", options);


/*------------------------------*/
//  PARTICLE JS INITIALIATION
/*------------------------------*/
particlesJS('particles-js',
  
{
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 500,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);

/*------------------------*/
    // NAVBAR ON SCROLL
/*-------------------------*/
console.log(window.screen.width)
$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if ($(window).width() > 700 && scrollPos <= 0) {
        $('.navbar').addClass('top-of-page');
        $('.navbar').removeClass('setbakground');
    
    } else {
        $('.navbar').removeClass('top-of-page');
        $('.navbar').addClass('setbakground');
    }
});
/*------------------------*/
  // Width On small Screen
/*-------------------------*/
(function($) {
  var $window = $(window),
      $html = $('.navbar');

  function resize() {
      if ($window.width() < 700) {
          return $html.addClass('setbakground');
      }

      $html.removeClass('setbakground');
  }

  $window
      .resize(resize)
      .trigger('resize');
})(jQuery);

/*------------------------*/
// Slick Slider Initialization
/*-------------------------*/
$(document).on('ready',function(){
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



});


// TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})




