

$(function () {


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







    window.onload = function () {

        setTimeout(function () {

            window.clearInterval(opencs);

            $(".popKc .popKcont p").html("100%");

        }, 350);

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

            $('.popKc').addClass('current');

        }, 500);

        setTimeout(function () {

            $('#sNav').animate({ 'right': 39 }, 1000);

            $('.urlBox').animate({ 'top': 16 }, 1000);

            $('.logo').addClass('current');

            $('.zbox1').addClass('current');

            $('.zbox1').removeClass('current2');

            $('.popKc').animate({ 'opacity': 0 }, 500);

            $('.popKc .popKcont').animate({ 'opacity': 0 }, 300);

            $('.popKc').css('left', 100000);

        }, 700);



        setTimeout(function () {

            openMs = 1;

        }, 1700);

    }

    var timeout;

    function showPage(index, d) {

        clearTimeout(timeout);

        $(".nicescroll-cursors,.jnpop").hide();

        page = index;

        if (index == 1) {

            $('#contbox .pwin_cont').animate({ 'top': "200%" }, 500);

            $('#contbox').delay(300).fadeOut('fast');

            $(".zbox1 .gd").show();

        } else {

            $(".zbox1 .gd").hide();

            if (index == 2) {

                setTimeout(function () {

                    $(".jnpop").show();

                }, 1000);

            }

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

            timeout = setTimeout(function () {

                $(".nicescroll-cursors").show();

            }, 1000);

        }

        nHide($('#sNav ul li[class*="hover"]'), 1);

        $('#sNav ul li[class*="hover"]').removeClass('hover');

        nShow($('#sNav ul li:eq(' + (index - 1) + ')'));

        $('#sNav ul li:eq(' + (index - 1) + ')').addClass('hover');

        setTimeout(function () {

            $("html,body").stop(false, true).animate({ scrollTop: 1 }, 1);

        }, 100);

    }



    $('.uba1').hover(function () {

        $('.fxBox').stop(false, true).animate({ 'height': 32 }, 1);

    }, function () {

        $('.fxBox').delay(200).stop(false, true).animate({ 'height': 0 }, 1);

    });



    $('.fxBox').hover(function () {

        $('.fxBox').stop(false, true).animate({ 'height': 32 }, 1);

    }, function () {

        $('.fxBox').delay(200).stop(false, true).animate({ 'height': 0 }, 1);

    });



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



    var jid;

    $('.xgbox a').hover(function () {

        jid = $(this).index();

        var d = $(this).children("div").html();

        $('.jtxbox').html(d);

        $(".jtxbox").getNiceScroll(0).doScrollTop(0, 10);

        $('.jnpop').stop(true, false).animate({ "top": $(this).offset().top + 100, 'opacity': 1 }, 500);

        openMs = 0;

    }, function () {

        $('.jnpop').stop(true, false).delay(200).animate({ "top": $(this).offset().top + 400, 'opacity': 0 }, 300);

        openMs = 1;

    });



    $('.jnpop').hover(function () {

        $('.jnpop').stop(true, false).animate({ "top": $('.xgbox a:eq(' + jid + ')').offset().top + 100, 'opacity': 1 }, 500);

        openMs = 0;

    }, function () {

        $('.jnpop').stop(true, false).delay(200).animate({ "top": $('.xgbox a:eq(' + jid + ')').offset().top + 400, 'opacity': 0 }, 300);

        openMs = 1;

    });





    $(".lnav").on("click", "a", function () {

        var i = $(this).index();

        var w = $(this).parent(".lnav").siblings(".csbox").width();

        $(this).siblings("a[class*='hover']").removeClass('hover');

        $(this).addClass('hover');

        $(this).parent(".lnav").siblings(".csbox").children("ul").stop(false, true).animate({ "left": -(i * w) }, 500);

    });



    $(".lpage").click(function () {

        var c = $(this).attr("class");

        var i = $(this).siblings(".lnav").children("a[class*='hover']").index();

        var l = $(this).siblings(".csbox").children("ul").children("li").length - 1;

        var w = $(this).siblings(".csbox").width();

        if (c.indexOf("spage") > -1) {

            i = i == 0 ? l : i - 1;

        } else if (c.indexOf("npage") > -1) {

            i = i == l ? 0 : i + 1;

        }

        $(this).siblings(".lnav").children("a[class*='hover']").removeClass('hover');

        $(this).siblings(".lnav").children("a:eq(" + i + ")").addClass('hover');

        $(this).siblings(".csbox").children("ul").stop(false, true).animate({ "left": -(i * w) }, 500);

    });



    $(".listnav a").click(function () {

        var i = $(this).index();

        $(this).siblings("a").removeClass("hover");

        $(this).addClass("hover");

        $(this).parent(".listnav").siblings(".boxlist").hide();

        $(this).parent(".listnav").siblings(".boxlist:eq(" + i + ")").show();

    });



    $('.cbox5,.cbox4,.cbox1,.cbox2').niceScroll({ cursorcolor: "#d7b29f", cursorborder: "none", autohidemode: true, cursorwidth: 4 });

    $('.jtxbox').niceScroll({ cursorcolor: "#888", cursorborder: "none", autohidemode: false, cursorwidth: 3 });



});





// 防止刷新后 页面回到刷新前的位置

$(window).unload(function () {

    $('body,html').scrollTop(0);

});



