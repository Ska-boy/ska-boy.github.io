var popOverlay = $(".popup");
var popWindow = $(".popup-item");
var popUpBtn = $(".popupBtn");

$(function(){
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
	let cacousel1 = $(".carousel2").owlCarousel({
      items: 4,
      loop: true,
      margin: 50,
	    autoplay: true,
	    smartSpeed: 600
	});

	let cacousel2 = $('.carousel1').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 600
    });
	let cacousel3 = $('.slider').owlCarousel({
        items: 1,
		    loop: true
    });
	$("#oright").click(function() {
        cacousel3.trigger('next.owl.carousel');
    });
        
    $("#oleft").click(function() {
        cacousel3.trigger('prev.owl.carousel');
    });

	  $("#right").click(function() {
        cacousel1.trigger('next.owl.carousel');
    });
        
    $("#left").click(function() {
        cacousel1.trigger('prev.owl.carousel');
    });

	  $("#fright").click(function() {
		  cacousel2.trigger('next.owl.carousel');
    });
        
    $("#fleft").on("click", (function() {
      cacousel2.trigger('prev.owl.carousel');
	}));

    popUpBtn.on('click', function(){
        popOverlay.show();
        popWindow.show();
      });
      
    $(document).on("click", function(event) {
      if ($(event.target).closest(popWindow).length) return;
      if ($(event.target).closest(popUpBtn).length) return;
      popOverlay.hide();
      popWindow.hide();
      event.stopPropagation();
    });
    $(".close").on("click", function(){
      popOverlay.hide();
      popWindow.hide();
    });

    $("#burger").on("click", function(){
      $("#menu").toggle();
    });
	
	$('input[name="tel"]').mask("+38 (999) 999-99-99");
});

	// function send_form(e) {
	// 	var form_id = e;
	// 	var goal;
	// 	switch(form_id){
	// 		case 'form1': goal = 'order';break;
	// 	}
	// 	var a = $("#" + e).serialize(),
	// 		i = a;
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "include/send.php",
	// 		data: i,
	// 		success: function(e) {
	// 			dataLayer.push({'event': goal + '_FORM_SENT_VHODVTOP'});
	// 			$("#" + form_id).hide();
	// 			$("." + form_id + "-success").show();
	// 		},
	// 		error: function(e, a) {
	// 			alert("Error: " + e.responseCode)
	// 		}
	// 	})
	// }  