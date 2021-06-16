;(function($){
    $(document).ready(function(){
        $('.pop-btn').on('click', function(){
            $(this).parent().children('.popup-wrapper').addClass('visible');
        });
        $('.close-popup').on('click', function(){
            $('.popup-wrapper').removeClass('visible');
        });
    });
})(jQuery);