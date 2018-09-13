//video

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


//menu

var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");
var dropdown = document.querySelector(".dropdown");
var dropdownStart = document.querySelector(".dropdownStart");

toggle.addEventListener("click", function() {
  menu.classList.toggle("showMenu");
  /*
  if (dropdown.offsetWidth === 0 && dropdown.offsetHeight === 0) {
    dropdown.classList.remove("showDropdown")
  }
  */
}, false);

dropdownStart.addEventListener("click", function() {
  dropdown.classList.toggle("showDropdown");
}, false);


//animation
(function(){var a=document.querySelector('#el_gjK9Kx7UV'),b=a.querySelectorAll('style'),c=function(d){b.forEach(function(f){var g=f.textContent;g&amp;&amp;(f.textContent=g.replace(/transform-box:[^;\r\n]*/gi,'transform-box: '+d))})};c('initial'),window.requestAnimationFrame(function(){return c('fill-box')})})();

(function(){var a=document.querySelector('#el_anHy2nW1GZ'),b=a.querySelectorAll('style'),c=function(d){b.forEach(function(f){var g=f.textContent;g&amp;&amp;(f.textContent=g.replace(/transform-box:[^;\r\n]*/gi,'transform-box: '+d))})};c('initial'),window.requestAnimationFrame(function(){return c('fill-box')})})();

//read more 





