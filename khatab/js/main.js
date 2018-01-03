/*global $, alert , console*/

$(function (){
      'use strict';
      //Adjust Header Height
     $('.header').height($(window).height());
     $(window).resize(function (){
         $('.header').height($(window).height());


     });
      //links Add active class


$('.links li').click(function (){
          $(this).addClass('active').siblings().removeClass('active');

     });

});



