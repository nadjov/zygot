
	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
	});
	$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})
		});

//video

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


/*$(window).resize(function(){  
	Bind an event handler to the "resize"
  if ($(window).width() < 767 || $(window).height() < 480) {
      $(document).on("focus", ".mc-field-group", function(event){
    var boxheight =  $(window).height() - 40;
    $("#page1").append("<div id='blank' style='height:"+boxheight+"px;'"+"></div>");
$('html, body').animate({scrollTop: $('.mc-field-group').offset().top - 100}, 500); 
});

$(document).on("focusout", ".mc-field-group", function(event){
$('#blank').remove();
});
    }
})*/

//read more
$(document).ready(function() {
  $("#more").click(function() {
    var elem = $("#more").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#more").text("Read Less");
      $("#text").slideDown("slow");
    } else {
      //Stuff to do when btn is in the read less state
      $("#more").text("Read More");
      $("#text").slideUp();
    }
  });
});

$(document).ready(function() {
  $("#more1").click(function() {
    var elem = $("#more1").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#more1").text("Read Less");
      $("#text1").slideDown("slow");
    } else {
      //Stuff to do when btn is in the read less state
      $("#more1").text("Read More");
      $("#text1").slideUp();
    }
  });
});


if($(window).innerWidth() <= 768) {
		$( "#more" ).click(function() {
			  $( "#page2" ).animate({
			   height: "122vh", 
				}, 1500 );
		});
}

if($(window).innerWidth() <= 768) {

		$( "#more1" ).click(function() {
		  $( "#page3" ).animate({
		   height: "170vh", 
			}, 1500 );
		});
}



