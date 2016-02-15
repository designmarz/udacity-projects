$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    animateOut: 'flipInX',
    items:2,
    margin:60,
    stagePadding:30,
    smartSpeed:5450
  });

  $( ".img-link, .gallery_image footer a" ).click(function(e) {
    e.preventDefault();
// TODO: add lightbox popup
});

  var id = document.getElementById('hero-text');
  var heroText = id.innerText;
  var blank = "";

  var key_typer = function(i, time) {
    var i = i || 0;
    time = Math.floor(Math.random() * 200) + 10;
    if (heroText === blank) {
      return
    } else {
      blank += heroText[i];
      id.innerText = blank;
      i++
      setTimeout(function(){
       key_typer(i);
     }, time);
    }
  };

  key_typer(0, 10);
});