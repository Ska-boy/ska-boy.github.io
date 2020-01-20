$(window).load(function(){
    setTimeout(function() {
        $(".preloader").fadeOut(200);
    }, 300);
});	
$(document).ready(function() {
    var wow = new WOW({
        mobile: false
    }).init();
    $('.parallax').parallax({
        limitY: 0
    });
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        positionFromTop: 70
    });
    $('.parallaxa').parallax();
    
    $(".videos-where a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 100;
        $('html, body').animate({ scrollTop: destination }, 600);
        return false;
    });
    
    $('.energo-button input').click(function(){
        $('.modal-first').fadeIn(300);
    });
    
    $('.purpose-button input').on('click', function(){
        $('.modal-first').fadeIn(300);
    });
    
    $('.windows-button input').on('click', function(){
        $('.modal-second').fadeIn(300);
    });
    
    $('.bigmap-box-button').on('click', function(){
        $('.modal-third').fadeIn(300);
    });
    
    $('.footer-item .number-text').on('click', function(){
        $('.modal-third').fadeIn(300);
    });
    
    $('.header .number__button').on('click', function(){
        $('.modal-third').fadeIn(300);
    });
    
    $('.butclose').on('click', function(){
        $(".modal-bg").fadeOut(300);
    });
    
    $('.close').on('click', function(){
        $(".modal-bg").fadeOut(300);
    });
    
    $(document).on("click", function(e) {
        if (!(
            ($(e.target).parents('.modal-main').length)
            ||  ($(e.target).parents('form').length)
            ||	$(e.target).hasClass('modal-main') 
            ||  $(e.target).hasClass('button')
            ||  $(e.target).hasClass('butthx'))) {
                $('.modal-bg').fadeOut(300);
        }
    });
    
    var carousel = $('.windows-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 450,
        dots: false,
        responsive : {
            1960 : {
                margin: 500
            } ,
            2060 : {
                margin: 550
            } ,
            2160 : {
                margin: 600
            } ,
            2260 : {
                margin: 650
            } ,
            2360 : {
                margin: 700
            } ,
            2460 : {
                margin: 750
            } ,
            2560 : {
                margin: 800
            } ,
            2660 : {
                margin: 850
            } ,
            2760 : {
                margin: 900
            } ,
            2860 : {
                margin: 950
            } ,
            2960 : {
                margin: 1000
            } 
    
        }
    });
    $("#right").click(function() {
        carousel.trigger('next.owl.carousel');
    });
        
    $("#left").click(function() {
        carousel.trigger('prev.owl.carousel');
    });
    
    var carousel1 = $('.cert-wrap-carousel').owlCarousel({
        items: 4,
        drag: false,
        margin: 30,
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            640 : {
                items: 2
               
            },
            // breakpoint from 768 up
            868 : {
                items: 3
            },
            // breakpoint from 768 up
            1080 : {
                items: 4
            }
        }
    });
    
    $("#right1").click(function() {
        carousel1.trigger('next.owl.carousel');
    });
        
    $("#left1").click(function() {
        carousel1.trigger('prev.owl.carousel');
    });
    var carousel4 = $('#slider2').slick({
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });
    
    var carousel3 = $('.slider1').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        prevArrow: $('#left2'),
        nextArrow: $('#right2'),
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 1078,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 652,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1
              }
            },
            {
                breakpoint: 540,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 1
                }
            }
          ]
    });
    $("#right2").click(function() {
        carousel3.slick('slickNext');
    });
        
    $("#left2").click(function() {
        carousel3.slick('slickPrev');
    });
    $("input[name='phone_f']").mask("+7 ( 999 ) 999-99-99");
    $("input[name='phone_f']").mask("+7 ( 999 ) 999-99-99");  
    
    if (window.innerWidth < 600) {
        $('.energo-button input').val('Получить КП');
        $('#slider2 img').attr('src', function(){
            return $(this).attr('src').replace('img.jpg', 'imgs.jpg');
        });
    }
    
    $('.color-img img').hide();
    $('.color-img img[data-ids="1"]').show();
    
    $('.colors1 .color-items-colors-item').on('click', function(){
        $('.color-items-colors-item').removeClass('active-color');
        $(this).addClass("active-color");
        $('.color-img img').hide();
        $('.color-img img[data-ids='+$(this).attr('data-id')+']').show();
    });
});





function send_form(e) {
    var a=$("#"+e).serialize(),
    l=a;
    if (a.split("&")[2].split("=")[1]=="") {
        $("#"+e).find('[name = "phone_f"]').css( {
            "border-color": "red"
        });
    } else {
        $.ajax({
            type: "post",
            url: "include/send.php",
            data: l,
            success: function(e){
                $(".modal-bg").fadeOut(300);
                $('.modal-four').fadeIn(300);
            }
        });
    }
}