time();
setInterval(time, 1000)

function time() {
    var Nowtime = new Date();
    var h = Nowtime.getHours();
    if (h < 10) h = '0' + h;
    var m = Nowtime.getMinutes();
    if (m < 10) m = '0' + m;
    var s = Nowtime.getSeconds();
    if (s < 10) s = '0' + s;
    //获得字符串时间
    var str = '' + h + m + s;
    var ul = document.getElementsByTagName('ul');
    var li = document.getElementsByTagName('li');
    //灰掉所有li
    for (var i = 0; i < li.length; i++) {
        li[i].className = ''
    }
    //字符串时间与每个ul关联
    for (var i = 0; i < ul.length; i++) {
        //
        ul[i].style.top = (parseInt(str[i]) - 1) * (-36) + 'px';
        //当前li样式激活
        ul[i].getElementsByTagName('li')[str[i]].className = 'active'

    }
    // console.log(str)
}