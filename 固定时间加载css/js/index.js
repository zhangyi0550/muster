
    
    window.onload=getCSS();
    var body = document.body;
    function getCSS()
    {
        datetoday = new Date();
         day = datetoday.getDate();
        if (day == 4) {
            body.style.cssText="-webkit-filter:grayscale(100%)";
            // $('body').css({"-webkit-filter":"grayscale(100%)","-moz-filter":"grayscale(100%)","-ms-filter":"grayscale(100%)","-o-filter":"grayscale(100%)","filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)","_filter":"none"});
        } else {
         
        }
    }

