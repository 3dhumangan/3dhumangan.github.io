window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "/assets/interp";
var NUM_INTERP_FRAMES = 120;

var interp_images = [[], [], [], [], [], []];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    interp_images[0][i] = new Image();
    interp_images[0][i].src = INTERP_BASE + '/' + 's1p1' + '/' + String(i).padStart(3, '0') + '.jpg';
    interp_images[1][i] = new Image();
    interp_images[1][i].src = INTERP_BASE + '/' + 's2p1' + '/' + String(i).padStart(3, '0') + '.jpg';
    interp_images[2][i] = new Image();
    interp_images[2][i].src = INTERP_BASE + '/' + 's3p2' + '/' + String(i).padStart(3, '0') + '.jpg';
    interp_images[3][i] = new Image();
    interp_images[3][i].src = INTERP_BASE + '/' + 's4p1' + '/' + String(i).padStart(3, '0') + '.jpg';
    interp_images[4][i] = new Image();
    interp_images[4][i].src = INTERP_BASE + '/' + 's5p1' + '/' + String(i).padStart(3, '0') + '.jpg';
    interp_images[5][i] = new Image();
    interp_images[5][i].src = INTERP_BASE + '/' + 's6p1' + '/' + String(i).padStart(3, '0') + '.jpg';
  }
}

function setInterpolationImage(i) {
  i = NUM_INTERP_FRAMES - i - 1;
  var image = interp_images[0][i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-1').empty().append(image);
  var image = interp_images[1][i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-2').empty().append(image);
  var image = interp_images[2][i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-3').empty().append(image);
  var image = interp_images[3][i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-4').empty().append(image);
  var image = interp_images[4][i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-5').empty().append(image);
  var image = interp_images[5][i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper-6').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    bulmaCarousel.attach('#qr-carousel', {
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      breakpoints: [
        { changePoint: 640, slidesToShow: 4, slidesToScroll: 1 }, 
        { changePoint: 2560, slidesToShow: 8, slidesToScroll: 1 },
        { changePoint: 10240, slidesToShow: 4, slidesToScroll: 1 },
        ]
    });


    // Initialize all div with carousel class
    bulmaCarousel.attach('#vc-carousel', {
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      breakpoints:[
        { changePoint: 640, slidesToShow: 1, slidesToScroll: 1 }, 
        { changePoint: 2560, slidesToShow: 2, slidesToScroll: 1 },
        { changePoint: 10240, slidesToShow: 1, slidesToScroll: 1 },
      ]
    });

    bulmaCarousel.attach('#pi-carousel', {
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      breakpoints: [
        { changePoint: 640, slidesToShow: 4, slidesToScroll: 1 }, 
        { changePoint: 2560, slidesToShow: 6, slidesToScroll: 1 },
        { changePoint: 10240, slidesToShow: 4, slidesToScroll: 1 },
        ]
    });



    // bulmaCarousel.attach('#ani-carousel', {
    //   slidesToScroll: 1,
    //   slidesToShow: 4,
    //   loop: true,
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 4500,
    // });


    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
