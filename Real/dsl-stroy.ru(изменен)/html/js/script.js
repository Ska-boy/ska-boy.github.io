// PopUp Form and thank you popup after sending message
var popOverlay = $(".popup-overlay");
var popWindow = $(".map-popup");
var popUpBtn = $(".popupBtn");

$(function(){
    let cacousel1 = $('.carousel1').owlCarousel({
        items: 1,
        loop: true
    });
    $("#right").click(function() {
        cacousel1.trigger('next.owl.carousel');
    });
        
    $("#left").click(function() {
        cacousel1.trigger('prev.owl.carousel');
    });

    let cacousel2 = $('.carousel2').owlCarousel({
        items: 3,
        loop: true,
        center: true,
        margin: 50,
        dots: false,
        smartSpeed:400,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 1,
                padding: 20
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
                center: false,
                margin:20
            },
            1000 : {
                margin:20
            }
        }
    });

    $("#right1").click(function() {
        cacousel2.trigger('next.owl.carousel');
        $('.owl-item.active').not('class="center"').addClass('half-opacity');
    });
        
    $("#left1").click(function() {
        cacousel2.trigger('prev.owl.carousel');
    });

    let cacousel3 = $('.carousel3').owlCarousel({
        items: 1,
        loop: true
    });
    $(".controls #right2").click(function() {
        cacousel3.trigger('next.owl.carousel');
    });
        
    $(".controls #left2").click(function() {
        cacousel3.trigger('prev.owl.carousel');
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

	popUpBtn.on('click', function(){
	  popOverlay.fadeIn();
	  popWindow.fadeIn();
	});
	
  $(document).on("click", function(event) {
    if ($(event.target).closest(popWindow).length) return;
	if ($(event.target).closest(popUpBtn).length) return;
    popOverlay.fadeOut();
    popWindow.fadeOut();
    event.stopPropagation();
  });
  $(".map .map-popup .close").on('click', function(){
    popOverlay.fadeOut();
    popWindow.fadeOut();
  });
  
  $('input[name="tel"]').mask("+7 (999) 999-99-99");

  $('#main').on('mousemove', (e)=> {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();
    $('#main .main-bg').css({
        'transform': 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)'
    });
  });
  
});

	function send_form(e) {
		var form_id = e;
		var a = $("#" + e).serialize(),
			i = a;
		"" == !a.split("&")[1].split("=")[0] ? $.ajax({
			type: "POST",
			url: "include/send.php",
			data: i,
			success: function(e) {
				$("#" + form_id).hide();
				$("." + form_id + "-success").show();
			},
			error: function(e, a) {
				alert("Error: " + e.responseCode)
			}
		}) : $("#" + e).find('[name = "phone_f"]').css({
			"border-color": "red"
		})
	}  