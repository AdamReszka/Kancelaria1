$(document).ready(initAll);

function initAll(){

  var timer1 = 0;

  setHeight();
  setNumbers();
  startSlider();
  startParallax();
  contactService();
  goToForm();
  movingMenu()
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

function contactService() {
  $('.contact-phone-number').fadeOut();
  setTimeout(function() {
    $('#first-contact-phone').addClass('display-flex').addClass('bounceIn');
  }, 3000);
  setTimeout(function() {
    $('#first-contact-form').addClass('display-flex').addClass('bounceIn');
  }, 3700);
  $('#first-contact-phone').on(
    {
    mouseenter: function() {
      $(this).addClass('hover-phone');
      $(this).closest('.first-contact-box').find('#first-contact-form').removeClass('hover-form');
      if($('.first-contact-info').hasClass('display-flex')) {
        $('.first-contact-info').addClass('bounceOut');
        $('#first-contact-form').removeClass('hover-form');
        setTimeout(function(){
          $('.first-contact-info').removeClass('display-flex display-flex2');
        }, 500);
      };
      $('.contact-phone-number').fadeIn();
    },
    mouseleave: function() {
      setTimeout(function(){
        $('#first-contact-phone').removeClass('hover-phone');
        $('.contact-phone-number').fadeOut();
      }, 7000);
    }
  });
  $('#first-contact-form').on(
    {
    mouseenter: function() {
      $(this).closest('.first-contact-box').find('#first-contact-phone').removeClass('hover-phone');
      $('.first-contact-info').removeClass('bounceOut');
      $('.first-contact-info').stop();
      $('#first-contact-form').stop();
      $(this).addClass('hover-form');
      $('.first-contact-info').addClass('display-flex');
      $('.first-contact-info').addClass('bounceIn')
    },
    mouseleave: function() {
      setTimeout(function(){
        $('#first-contact-form').removeClass('hover-form');
        if(!$('#first-contact-form').hasClass('hover-form2')){
          $('.first-contact-info').addClass('bounceOut').removeClass('display-flex');
        }
      }, 7000);
    }
  });
  $('.first-contact-info').on(
    {
    mouseenter: function() {
      $('.first-contact-info').stop();
      $('#first-contact-form').stop();
      $('.first-contact-info').removeClass('bounceOut');
      $('#first-contact-form').addClass('hover-form2');
      $('.first-contact-info').addClass('display-flex2');
      $('#first-contact-form').removeClass('hover-form');
    },
    mouseleave: function() {
      setTimeout(function(){
        $('.first-contact-info').removeClass('display-flex');
        $('.first-contact-info').removeClass('display-flex2');
        $('#first-contact-form').removeClass('hover-form');
        $('#first-contact-form').removeClass('hover-form2');
        $('.first-contact-info').addClass('bounceOut');
      }, 7000);
    }
  });
}

function goToForm() {
  $('#first-contact-button').on('click', function() {
    $(this).closest('body').find('#contact-form-layer').removeClass('fadeOut');
    $(this).closest('.first-contact-box').find('.first-contact-info').addClass('bounceOut');
    $(this).closest('.first-contact-box').find('#first-contact-form').removeClass('hover-form');
    setTimeout(function(){
      $('.first-contact-info').removeClass('display-flex display-flex2');
    }, 500);
    $(this).closest('body').find('#contact-form-layer').addClass('open');
    $(this).closest('body').find('#contact-form-layer').addClass('fadeIn');
    $(this).closest('body').find('#main-contact-form').addClass('fadeInDown');
  });
  $('.cf-layer-cover').on('click', function(e) {
    if (e.target !== this) {
      return;
    } else {
      if($('#contact-form-layer').hasClass('open')) {
        $('#contact-form-layer').removeClass('fadeIn');
        $('#contact-form-layer').addClass('fadeOut');
        setTimeout(function(){
          $('#contact-form-layer').removeClass('open');
        }, 500);
      }
    }
  });
  $('#close-x-container').on('click', function() {
    $('#contact-form-layer').removeClass('fadeIn');
    $('#contact-form-layer').addClass('fadeOut');
    $('#main-contact-form').addClass('fadeOutUp');
    setTimeout(function(){
      $('#contact-form-layer').removeClass('open');
      $('#main-contact-form').removeClass('fadeOutUp');
    }, 1000);
  });
}

function movingMenu(){
  jQuery('.menu-button').click(function(event){
		event = event || window.event;
		var sectionID = event.currentTarget.id + "-section";

		jQuery("html,body").animate({
			scrollTop: jQuery("#" + sectionID).offset().top
		}, 1000)
	});
}
