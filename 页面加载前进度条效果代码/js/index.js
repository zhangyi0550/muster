$(document).ready(function() {
    var percentage = 0;
    var interval = setInterval(function() {
        if (percentage < 10000) {
            percentage = percentage + 10;
            var widthTemp = (percentage / 100).toFixed(0) + '%';
            $('#progressBar').css('width', widthTemp);
            $('#progressBar').text(widthTemp);
        } else {
            clearInterval(interval);
            $('h1').text('膳食分析完毕！正在为您跳转...');
            setTimeout(function() {
                location = 'index2.html';
            }, 100);
        }
    }, 10);
});