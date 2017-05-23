$(document).ready(initAll);

function initAll(){
  setHeight();
  startParallax();
}

function setHeight(){
  $('#sec1-main-cont').height($(window).innerHeight());
}

function startParallax() {
  $('#sec1-main-cont').parallax({imageSrc: '../images/notes2.jpg'});
}
