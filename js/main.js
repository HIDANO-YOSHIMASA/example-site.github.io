$(function(){

    $('#tab').on('click', function(){
        $('.header-nav').animate({
            width: '100%',
            right: '0px'
        });
        
        $('#tab').hide();
        $('#close').show();
    });

    $('#close').on('click', function(){
        $('.header-nav').animate({
            width: '0%',
            right: '-150px'
        });

        $('#close').hide();
        $('#tab').show();
    });

});

new LuminousGallery(document.querySelectorAll('.zoom'));