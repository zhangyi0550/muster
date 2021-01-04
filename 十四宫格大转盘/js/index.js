jQuery(document).ready(function($){
    //打开窗口
    $('.bxc').on('click', function(event){
        event.preventDefault();
        $('.cd-popup-5').addClass('is-visible-5');
        //$(".dialog-addquxiao").hide()
    });
    //关闭窗口
    $('.cd-popup-5').on('click', function(event){
        if( $(event.target).is('.cd-popup-close-1') || $(event.target).is('.cd-popup-5') ) {
            event.preventDefault();
            $(this).removeClass('is-visible-5');
        }
    });
    //ESC关闭
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup-5').removeClass('is-visible-5');
        }
    });		
});