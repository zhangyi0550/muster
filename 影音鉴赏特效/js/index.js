$(document).ready(function(){
    $("#jcsp li").hover(function(){
        $(this).find(".card_border").addClass("animate"),
        $(this).find(".mask").stop(!0).delay(600).fadeIn()},
        function(){$(this).find(".card_border").removeClass("animate"),
        $(this).find(".mask").stop(!0).hide()
    })
})