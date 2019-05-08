// JavaScript Document
$(document).ready(function(){
	"use strict"
$("body").niceScroll({
   cursorcolor:"#22A39F",
   cursorwidth:"5px",
   zindex: "99999" ,
   cursorborder: "none"
});

// start scrollBottom button	
$(function animateImage(){
		

	$("#animate").animate({
		bottom:'10px',
		},1500,function(){
			$(this).animate({
				bottom:'-100px'
				},1500,function(){
					animateImage();
					});
			});
}());
//start smooth scroll
 var scroll = new SmoothScroll('a[href*="#"]');﻿
 
// statr scrollTop button
   $(window).scroll(function(){
	   if($(window).scrollTop()>=700){
		  $('#scrolltop').fadeIn()
		   }else
		   { $('#scrolltop').hide()}
	   });
	   
	$('#scrolltop').click(function(){
		$('html,body').animate({scrollTop:0},1000)
		})	
	$(function animateButton(){
		

	$("#scrolltop").animate({
		bottom:'10px',
		},1500,function(){
			$(this).animate({
				bottom:'50px'
				},1500,function(){
					animateButton();
					});
			});
}());
	
//start typed.js
var typed = new Typed('.freelancing', {
  strings: ["Available FOR Freelance."],
  typeSpeed: 50,
  showCursor: false,
  loop: true,
  shuffle: true,
});

var typed = new Typed('.interactive', {
  strings: ["interactive resume."],
  typeSpeed: 50,
  showCursor: false,
  loop: true,
  loopCount: 5,
});


var typed = new Typed('.web-developer', {
  strings: ["I'm a creative web <span class='jq'>developer</span>."],
  typeSpeed: 50,
  showCursor: false,
  loop: true,
  loopCount: 2,
});

//animated progresspar

$(window).scroll(function(){
	   if($(window).scrollTop()>=2000){
jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},4000);
	});

	   }
})
//full page scroll
FastClick.attach(document.body);
$('#fullpage').fullpage();

})