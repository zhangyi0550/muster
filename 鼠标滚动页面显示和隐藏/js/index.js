

$(function () {

    var isMobile = {

        Android: function () {

            return navigator.userAgent.match(/Android/i) ? true : false;

        },

        BlackBerry: function () {

            return navigator.userAgent.match(/BlackBerry/i) ? true : false;

        },

        iOS: function () {

            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;

        },

        Windows: function () {

            return navigator.userAgent.match(/IEMobile/i) ? true : false;

        },

        any: function () {

            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());

        }

    };





    var page = 1, gPage = $('#contbox .pwin_cont dd').length + 1, openMs = 0, resizeTg;



    // 绑定resize

    $(window).on("resize", function (e) {

        clearTimeout(resizeTg);

        resizeTg = setTimeout(cssSize, 100);

    });

    function cssSize() {

        var w = $(window).width();

        var h = $(window).height();

        if (w <= 1320) {

            w = 1320;

        } else {

            w = '100%';

        }

        $('#main').css('width', w);

        if (h > 900) {

            $('#main').css('height', h);

        } else {

            $('#main').css('height', 900);

        }

    }

    cssSize();



    $("body,html").on("mousewheel", function (e) {

        //e.preventDefault();

        if (isMobile.any()) {

            return false;

        }

        if ($("body").is(":animated")) {

            return false;

        }

        if (openMs == 1) {



            openMs = 0;

            if (e.deltaY > 0) { // 滚轮向上 页面向下平移 

                if ($(document).scrollTop() <= 0) {

                    if (page <= 1) {

                        //return false;

                    } else {

                        page--;

                        showPage(page, 'up');

                    }

                }

            } else if (e.deltaY < 0) { // 滚轮向下   页面向上平移

                if ($(document).scrollTop() + $(window).height() == $(document).height()) {

                    if (page >= gPage) {

                        //return false;

                    } else {

                        page++;

                        showPage(page, 'down');

                    }

                }

            }

            setTimeout(function () { openMs = 1; }, 500);

        }

    });

    // 定时器
    window.onload = function () {
        setTimeout(function () {

            $(window).trigger("resize");

            $("#sNav ul li").each(function (i) {

                if (i > 0) {

                    $(this).children('span:eq(5)').css({ 'opacity': 0 });

                    $(this).children('span:eq(6)').css({ 'opacity': 0 });

                    $(this).children('span:eq(7)').css({ 'opacity': 0 });

                }

            });

            $('#sNav ul li:eq(0)').children('span:eq(5)').stop(false, true).animate({ 'opacity': 1 }, 1);

            $('#sNav ul li:eq(0)').children('span:eq(6)').stop(false, true).animate({ 'opacity': 1 }, 1);

            $('#sNav ul li:eq(0)').children('span:eq(7)').stop(false, true).animate({ 'opacity': 1 }, 1);

            nShow($('#sNav ul li:eq(0)'));



        }, 500);

        setTimeout(function () {

            $('#sNav').animate({ 'right': 39 }, 1000);
        }, 700);



        setTimeout(function () {

            openMs = 1;

        }, 1700);

    }

    var timeout;

    function showPage(index, d) {

        clearTimeout(timeout);
        if (index == 1) {
            $('#contbox').delay(300).fadeOut('fast');
        } else {
            $('#contbox dd').removeClass('current');

            if ($("#contbox").css("display") != "block") {

                $('#contbox .pwin_cont').animate({ 'top': "50%" }, 500);

                $('#contbox').fadeIn('fast');

                setTimeout(function () {

                    $('#contbox dd:eq(' + (index - 2) + ')').addClass('current');

                }, 500);

            } else {

                $('#contbox dd:eq(' + (index - 2) + ')').addClass('current');

            }

        }

        nHide($('#sNav ul li[class*="hover"]'), 1);

        $('#sNav ul li[class*="hover"]').removeClass('hover');

        nShow($('#sNav ul li:eq(' + (index - 1) + ')'));

        $('#sNav ul li:eq(' + (index - 1) + ')').addClass('hover');



    }
    $('#sNav ul li').hover(function () {

        nShow($(this));

    }, function () {

        nHide($(this), 2);

    });



    $('#sNav ul li').click(function () {

        var l = $(this).index();

        showPage(l + 1);

    });
    $(".exit").click(function () {

        showPage(1);

    });


    // 导航
    function nShow(c) {

        c.children('em').stop(false, true).animate({ 'left': -32 }, 300);

        c.children('span:eq(3)').stop(false, true).animate({ 'width': 10 }, 500);

        c.children('span:eq(4)').stop(false, true).animate({ 'width': 14 }, 500);

        c.children('span:eq(5)').stop(false, true).animate({ 'width': 18, 'opacity': 1 }, 500);

        c.children('span:eq(6)').stop(false, true).animate({ 'width': 22, 'opacity': 1 }, 500);

        c.children('span:eq(7)').stop(false, true).animate({ 'width': 18, 'opacity': 1 }, 500);

        c.children('span:eq(8)').stop(false, true).animate({ 'width': 14 }, 500);

        c.children('span:eq(9)').stop(false, true).animate({ 'width': 10 }, 500);

    }
    function nHide(c, d) {

        if (d == 2) {

            var x = c.attr('class');

            if (x.indexOf('hover') > -1) {

                return false;

            }

        }

        c.children('em').stop(false, true).animate({ 'left': 1 }, 300);

        c.children('span:eq(3)').stop(false, true).animate({ 'width': 6 }, 500);

        c.children('span:eq(4)').stop(false, true).animate({ 'width': 6 }, 500);

        c.children('span:eq(5)').stop(false, true).animate({ 'width': 6, 'opacity': 0 }, 500);

        c.children('span:eq(6)').stop(false, true).animate({ 'width': 6, 'opacity': 0 }, 500);

        c.children('span:eq(7)').stop(false, true).animate({ 'width': 6, 'opacity': 0 }, 500);

        c.children('span:eq(8)').stop(false, true).animate({ 'width': 6 }, 500);

        c.children('span:eq(9)').stop(false, true).animate({ 'width': 6 }, 500);

    }



});

// 防止刷新后 页面回到刷新前的位置

$(window).unload(function () {

    $('body,html').scrollTop(0);

});



