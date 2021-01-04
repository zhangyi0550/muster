$(function(){
	var page = (function(){
		var swiperFirst = function(){
			var mySwiper = new Swiper('.swiper-container-0',{
			    loop:true,
			    autoplay: 4500
			});
			$('.arrow-left').on('click', function(e){
			    e.preventDefault()
			    mySwiper.swipePrev()
			});
			$('.arrow-right').on('click', function(e){
			    e.preventDefault()
			    mySwiper.swipeNext()
			});
		};

		var swiperSecond = function(){
			var mySwiper1 = new Swiper('.swiper-container-1',{
				pagination: '.pagination',
				loop:true,
				grabCursor: true,
				paginationClickable: true
			});
			$('.arrow-left-1').on('click', function(e){
				e.preventDefault()
				mySwiper1.swipePrev()
			});
			$('.arrow-right-1').on('click', function(e){
				e.preventDefault()
				mySwiper1.swipeNext()
			});
			var $span = $('.pagination span'),
				$src = $('.swiper-ft .swiper-slide');
			var len = $span.length;
			for (var i = 0; i < len; i++) {
				var src = $src.eq(i+1).attr('data');
				$span.eq(i).css('background', 'url('+src+')');
			}
		};


		var fullPage = function(refresh){

			var isScroll = 0,
		        pageIndex = 0,
		        $html = $('html');

			setTimeout(function() {
		        $('html,body').animate({
		        	scrollTop: '55'},
		        	10, function() {

		        //此处为刷新停留在刷新前位置，勿删
	     		//if ($('.first').length) {
				  //   	var scrollIndex;
					 // 	var scrollTop = $(document).scrollTop();
						
						// scrollIndex = Math.round(scrollTop/1080);
						// console.log(scrollTop);
						
						// $('.page').eq(scrollIndex)
						// 	.addClass('current')
						// 	.siblings('.page').removeClass('current');
						// pageIndex = scrollIndex;
				  //   }
		        });
		    }, 0);


		    //屏幕滚动
		    $html.mousewheel(function(event, delta) {
		    	$('.page').eq(0).removeClass('first');
		        if (isScroll == 0) {
		            isScroll = 1;
		            setTimeout(function() {
		                isScroll = 0;
		            }, 600);
		            if (delta < 0) {
		                if (pageIndex < 3) {
		                    pageIndex++;
		                    
		                    if (pageIndex == 0) {
		                        $('html,body').animate({
		                            'scrollTop': 55
		                        }, 400);
		           				$('.down').show();
		                        return false;
		                    }else{
		                    	$('.down').hide();
		                    }

		                    if (pageIndex == 1 || pageIndex == 2) {
		                    	$('#small_nav').show();
		                    }else{
		                    	$('#small_nav').hide();
		                    }

		                    $('html,body').animate({
		                        'scrollTop': pageIndex * 1080 + 55
		                    }, 500);

		                    $('.page').eq(pageIndex)
		                    	.addClass('current')
		                    	.siblings('.page')
		                    	.removeClass('current');

		                    return false;
		                }

		            } else if (delta > 0) {
		                if (pageIndex > -1) {
		                    pageIndex--;

		                    if (pageIndex == -1) {
		                        $('html,body').animate({
		                            'scrollTop': 0
		                        }, 400);
		                        return false;
		                    }

		                    if (pageIndex == 0) {
		           				$('.down').show();
		                    }else{
		                    	$('.down').hide();
		                    }
		                    
		                    $('html,body').animate({
		                        'scrollTop': pageIndex * 1080 + 55
		                    }, 500);

		                    if (pageIndex != -1) {
		                    	$('.page').eq(pageIndex)
			                    	.addClass('current')
			                    	.siblings('.page')
			                    	.removeClass('current');
		                    }
		                    
		                    if (pageIndex == 1 || pageIndex == 2) {
		                    	$('#small_nav').show();
		                    }else{
		                    	$('#small_nav').hide();
		                    }
		                    return false;
		                }
		            }

		            return false;
		        } else {
		            return false;
		        }

		    });
		    //向下滚动
		    $('.down').click(function() {
		        pageIndex++;
		        if (pageIndex > 0) {
		            $('.down').hide();
		        }
		        $('.page').eq(pageIndex).addClass('current')
		        	.siblings('.page').removeClass('current');
		        $('html,body').animate({
		            'scrollTop': pageIndex * 1080 + 55
		        }, 500);
		    })
		};


		var scrollFunc = function(){
			var width = $(window).width();
			if ($(window).scrollTop() >55) {
				$('.nav-wrap').addClass('nav-wrap-fixed')
			}else{
				$('.nav-wrap').removeClass('nav-wrap-fixed')
			}

			if ($(window).scrollTop() >155) {
				$('.down').fadeOut();
			}else{
				$('.down').fadeIn();
			}

            if($(window).scrollTop() >550){
        		$('.news-title').addClass('zoom-in');
            	if (width > 1450) {
	            	$('.rec-box,.swiper').addClass('fadeInDownXs');
	            	$('.enter-box').addClass('fadeInUpXs')
	            	$('.vote-box,.tab').addClass('fadeInUp');
            	}else{
            		$('.rec-box,.swiper,.enter-box,.vote-box,.tab').addClass('fadeInUp');
            	}
            	
            }

            if($(window).scrollTop() >1355) {
            	$('.t3').addClass('zoom-in');
            	$('.swiper-ft').addClass('fadeInUpXs');
            }

            if($(window).scrollTop() >2155) {
            	$('.t4').addClass('zoom-in');
            	$('.apt-box').addClass('fadeInUpXs');
            }

		};



		var mediaTab = function(){
			var $tabs = $('.tabs a'),
				$list = $('.tabs-list');

			var len = $tabs.length * 369 + 'px';
			$list.css('width', len);
			$tabs.hover(function() {
				$list.stop();
				var index = $(this).index();
				var pos = index * -369 + 'px';
				$tabs.eq(index).addClass('cur')
					.siblings().removeClass('cur');
				$list.animate({left: pos}, 400);
			});

			//下一组推荐
			var $more = $('.news-more'),
				$rec_list = $('.rec-list'),
				$rec_tab = $('.rec-tab'),
				rec_len = $rec_list.length,
				min = 0;

			if ($rec_tab.length < 2) {
				$more.hide();
			}

			// var rec_width = rec_len / 3 * 705 + rec_len % 3 * 240 +'px';
			// $rec_wrap.css('width', rec_width);

			$more.click(function(event) {
				
				min++;
				if (min == Math.ceil(rec_len/3)) {
					min = 0;
				}
				
				$rec_tab.eq(min).addClass('rec-cur')
					.siblings().removeClass('rec-cur');
				
			});
		};

		var shareconf = {
            title: '我已成功预约国人首款沙盒武侠网游九阴真经2首测资格，在此等候阁下大驾光临。点击预约，同我一起浪迹江湖！',
            url: 'http://9yin2.woniu.com/index.html',
            desc: '',
            pic: 'http://9yin2.woniu.com/static/web201703/images/share.jpg'
        };
		var share = function(){
	        var qzone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(shareconf.url) + '&title=' + shareconf.title + '&pics=' + shareconf.pic + '&summary=' + shareconf.desc;

	        var sinaurl = 'http://service.weibo.com/share/share.php?title=' + shareconf.title + '&url=' + encodeURIComponent(shareconf.url) + '&source=bookmark&pic=' + shareconf.pic;

	        var qqurl = 'http://connect.qq.com/widget/shareqq/index.html?url=' + encodeURIComponent(shareconf.url) + '&desc=' + shareconf.desc + '&title=' + shareconf.title + '&summary=&pics=' + shareconf.pic + '&flash=&site=&style=201&width=32&height=32&showcount=';

	        var tieba = 'http://tieba.baidu.com/f/commit/share/openShareApi?title='+ shareconf.title +'&desc=' + shareconf.desc + '&comment=&pic=' + shareconf.pic + '&url=' + encodeURIComponent(shareconf.url);

	        $('.pop-weibo').attr('href', sinaurl);
	        $('.pop-qq').attr('href', qqurl);
	        $('.pop-qzone').attr('href', qzone);
	        $('.pop-baidu').attr('href', tieba);
		};

		//http://gwactv2.woniu.com/9yin2/h170314/appointment
		var appointment =function(){
			var $apt_btn = $('.appointment'),
				$apt_pop = $('#apt_pop'),
				$apt_pop_suc = $('#apt_pop_suc'),
				$submit = $('.apt-pop-btn'),
				$close = $('.close');

			$apt_btn.click(function(event) {
				$apt_pop.fadeIn()
			});

			$close.click(function(event) {
				$apt_pop.fadeOut();
				$apt_pop_suc.fadeOut();
			});

			$submit.click(function(event) {
				var name = $('.name').val(),
					phone = $('.phone').val(),
					email = $('.email').val(),
					reg= /^[1][0-9]\d{9}$/,
					mReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;

				if (!name) {
					alert('请填写姓名！');
					return false;
				}
				if(!reg.test(phone)||phone == null){
				    alert("请输入正确的手机号！");
				    return false;
				}
				if (!mReg.test(email)||email == null) {
					alert('请输入正确的邮箱！');
					return false;
				}

				$.ajax({
					url: 'http://gwactv2.woniu.com/9yin2/h170314/appointment',
					type: 'get',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					data: {
						phone: phone,
						name: name,
						mail: email
					},
					success: function(data){
						if (data.nickname) {
							$('.apt-s').html(data.name+'，人称'+data.nickname);
							shareconf.title = '我名为'+data.name+'，人称'+data.nickname+'，我已成功预约国人首款沙盒武侠网游九阴真经2首测资格，在此等候阁下大驾光临。点击预约，同我一起浪迹江湖！';
							share();
							$apt_pop_suc.fadeIn();
						}else{
							alert(data.msg);
						}
					}

				})
				
			});
		};


		var sundry = function(){
			var $wx = $('.j-wx'),
				$qr = $('.join-qr'),
				$join = $('.join-link'),
				$back_a = $('.join-back a');

			$wx.click(function(event) {
				$back_a.fadeOut('10', function() {
					$qr.fadeIn();
				});
			});

			$join.mouseleave(function(event) {
				$qr.fadeOut();
				$back_a.show();
			});

			setTimeout(function() {
				$('html,body').animate({
					scrollTop: '55'},
					10, function() {
				});
		    }, 10);

		    var $audio =document.getElementById('audio'),
		    	$music = $('.music');

		    $music.click(function(event) {
		    	if($music.hasClass("active")){
				    $music.removeClass("active");
				    $audio.pause();
				}else{
				    $music.addClass("active");
				    $audio.play();
				}
		    });

		};


		var init = function(){
			$(window).scroll(function(){ 
				scrollFunc();
			});

			// fullPage();
			swiperSecond();
			swiperFirst();
			mediaTab();
			sundry();
			appointment();
			share();
		};

		return {
			init: init
		}
	})();

	page.init();
})