$(document).ready(function () {

    'use strict';

    // show & hide box
    $('.box').click(function () {
        $(this).toggleClass('show hide');
    });

    // responsive nav
    var nav = $('.nav'),
        animateTime = 500,
        navLink = $('.header .top .navLink');
        navLink.click(function () {
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
        } else {
            nav.stop().animate({
                height: '0'
            }, animateTime);
        }
    });

    // responsive options
    // Dropdown toggle
    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown').toggle();
    });
    
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
        $('.dropdown').hide();
        }
    });

});

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	element.height(curHeight); // Reset to Default Height
    	element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}