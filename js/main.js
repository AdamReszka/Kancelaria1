$(document).ready(initAll);
  $(window).stellar();
function initAll(){

  var timer1 = 0;

  setHeight();
  setNumbers();
  startSlider();
  startParallax();

}

function setHeight(){
  $('#sec1-main-cont').height($(window).innerHeight());
}

function setNumbers() {

  var eventFired = false;
  objectPositionTop = $('#numbersPosition').offset().top - $(window).height();
  $(window).on('scroll', function() {
    var currentPosition = $(document).scrollTop();
    if (currentPosition > objectPositionTop && eventFired === false) {
      eventFired = true;
      $('.timer').countTo();
    }
  });
}

function startParallax(){
  $(window).stellar();
}

function startSlider() {
  timer1 = setInterval(function() {moveRightAuto();}, 12000);

  var slideCount = $('.customers-slider ul li').length;
  var slideWidth = $('.customers-slider ul li').width();
  var slideHeight = $('.customers-slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  $('.customers-slider').css({ width: slideWidth, height: slideHeight });
  $('.customers-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('.customers-slider ul li:last-child').prependTo('.customers-slider ul');

  function moveLeft() {
  $('.customers-slider ul').animate({
    left: + slideWidth
  }, 1200, function() {
    $('.customers-slider ul').css('left', '');
  });
};
function moveLeftAuto() {
  $('.customers-slider').animate({
    left: + slideWidth
  }, 1200, function() {
    $('.customers-slider ul li:last-child').prependTo('.customers-slider ul');
    $('.customers-slider ul').css('left', '');
  });
};
function moveRight() {
  $('.customers-slider ul').animate({
    left: - slideWidth
  }, 1200, function() {
    $('.customers-slider ul').css('left', '');
  });
};
function moveRightAuto() {
  $('.customers-slider ul li:first-child').appendTo('.customers-slider ul');
  $('.customers-slider ul').animate({
    left: - slideWidth
  }, 1200, function() {
    $('.customers-slider ul').css('left', '');
  });
};
$('#previous-slide').click(function() {
  console.log('to działa');
	$('.customers-slider ul').stop();
	moveLeft();
	clearInterval(timer1);
	timer1 = setInterval(function() {
		moveRightAuto();
	}, 12000);
});
$('#next-slide').click(function() {
	$('.customers-slider ul').stop();
	moveRightAuto();
	clearInterval(timer1);
	timer1 = setInterval(function() {
		moveRightAuto();
	}, 12000);
});
}
