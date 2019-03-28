$(function(){

    $('.itm[data-on]').on('click', function(){
        $('.itm-active').removeClass('itm-active');
        $(this).addClass('itm-active');
        let that = $('.content[data-cont=' + $(this).attr('data-on') + ']');
        $('.content[data-cont]').not(that).fadeOut();
        $(that).fadeIn();
    })


});
