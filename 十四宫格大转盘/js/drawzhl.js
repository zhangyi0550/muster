var lottery = {
    index: -1,	//当前转动到哪个位置，起点位置
    count: 0,	//总共有多少个位置
    timer: 0,	//setTimeout的ID，用clearTimeout清除
    speed: 200,	//初始转动速度
    times: 0,	//转动次数
    cycle: 10,	//转动基本次数：即至少需要转动多少次再进入抽奖环节
    prize: -1,	//中奖位置
    isShowUserinfo:0,
    init: function (id, parmPrize) {
        if ($("#" + id).find(".lottery-unit").length > 0) {
            $lottery = $("#" + id);
            $units = $lottery.find(".lottery-unit");
            this.obj = $lottery;
            this.count = $units.length;
            this.prize = parmPrize;
            $lottery.find(".lottery-unit-" + this.index).addClass("active");
        };
    },
    roll: function () {
        var index = this.index;
        var count = this.count;
        var lottery = this.obj;
        $(lottery).find(".lottery-unit-" + index).removeClass("active");
        index += 1;
        if (index > count - 1) {
            index = 0;
        };
        $(lottery).find(".lottery-unit-" + index).addClass("active");
        this.index = index;
        return false;
    },
    stop: function (index) {
        this.prize = index;
       
        return false;
    },
};
//头部礼包图片
$(document).ready(function () {
    $('.TopH_adImg').mousemove(function () {

        $('.TopH_adImg_div').slideDown("500");//you can give it a speed
    });
    $('.TopH_adImg_div').mouseleave(function () {
        $('.TopH_adImg_div').slideUp("fast");
    });
    $('li.mainleyoul ').mousemove(function () {
        $(this).find('ul').slideDown("500");//you can give it a speed
    });
    $('li.mainleyoul').mouseleave(function () {
        $(this).find('ul').slideUp("fast");
    });
});
function closeTC() {
    $(".yybox").hide();
}
function roll() {
    lottery.times += 1;
    lottery.roll();
    if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
        clearTimeout(lottery.timer);
        //lottery.prize = -1;
        lottery.times = 0;
        click = false;
        var showUserInfo= $("#hidIsShowUserInfo").val();
        if (isShowUserinfo == 1 && showUserInfo == "1")
            PopUpLayer('/jifen/userinfo.aspx?name=' + $("#hidDralName").val(), '1050', '940');
        else
            $(".yybox").show();
    } else {
        if (lottery.times < lottery.cycle) {
            lottery.speed -= 10;
        } else if (lottery.times == lottery.cycle) {
            var index = Math.random() * (lottery.count) | 0;
            //lottery.prize = index;
        } else {
            if (lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
                lottery.speed += 110;
            } else {
                lottery.speed += 20;
            }
        }
        if (lottery.speed < 40) {
            lottery.speed = 40;
        };
        //console.log(lottery.times+'^^^^^^'+lottery.speed+'^^^^^^^'+lottery.prize);
        lottery.timer = setTimeout(roll, lottery.speed);
    }
    return false;
}

var click = false;

window.onload = function () {
    lottery.init('lottery');
    $("#lottery a").click(function () {
        //console.log("1-" + click);
        if (click || typeof (click) == "undefined") {
            return false;
        } else{
            lottery.speed = 100;
            click = draw();
            return false;
        }
    });
    var ticker = $("#ticker");
    ticker.children().filter("dt").each(function () {

        var dt = $(this),
          container = $("<div>");

        dt.next().appendTo(container);
        dt.prependTo(container);

        container.appendTo(ticker);
    });
    ticker.css("overflow", "hidden");

    function animator(currentItem) {
        var distance = currentItem.height();
        duration = (distance + parseInt(currentItem.css("marginTop"))) / 0.025;
        currentItem.animate({ marginTop: -distance }, duration, "linear", function () {
            currentItem.appendTo(currentItem.parent()).css("marginTop", 0);
            animator(currentItem.parent().children(":first"));
        });
    };
    animator(ticker.children(":first"));
    ticker.mouseenter(function () {
        ticker.children().stop();
    });
    ticker.mouseleave(function () {
        animator(ticker.children(":first"));
    });
    var gameID = $("#hidGameID").val();
};

function draw() {
    click = true;
    var gID=  $("#hidGameID").val();
    var isLogin = $("#hidIsLogin").val();
    if (isLogin != "True") {
        window.location.href = "http://user.26xn.com/logins.aspx?backURL=http://zsg.26xn.com/ac/20180818/index.aspx";
        return false;
    }
    var areas = $("#language").val();
    if (areas == "-1")
    {
        alert("请选择大区");
        $("#language").focus();
        click = false;
        return false;
    }
    var roleName = "";
    $.ajax({
        type: "Get",
        url: "/ac/20180818/IHttpHander/dialzhl.ashx",
        data: { gID: gID, aID: areas, roleName: roleName, i: Math.random() },
        success: function (msg) {
            var dataObj = eval("(" + msg + ")");
            if (dataObj.length != 0) {
                switch (dataObj[0].state) {
                    case "-1":
                        alert("抽奖活动暂未开放");
                        click = false;
                        break;
                    case "-2":
                        alert("此活动已经结束！");
                        click = false;
                        break;
                    case "-5":
                        alert("请选择您要发送的角色");
                        click = false;
                        break;
                    case "-4":
                        window.location.href = "http://user.26xn.com/logins.aspx?backURL=http://zsg.26xn.com/ac/20180818/index.aspx";
                        click = false;
                        break;
                    case "-3":
                        alert("您没有创建角色，不能进行抽奖");
                        click = false;
                        break;
                    case "-6":
                        alert("大区维护中，不能进行抽奖");
                        click = false;
                        break;
                    case "-7":
                        alert("抽奖活动维护中...");
                        click = false;
                        break;
                    case "-8":
                        alert("请去游戏福利小仙那把所有的礼包领取完，再来抽奖");
                        click = false;
                        break;
                    case "0":
                        var dialCount = parseInt($('#hidDialCount').val());
                        $("#lotterynum").html('剩余火把：' + (dialCount - 1));
                        $('#hidDialCount').val(dialCount - 1);

                        var ljCount = parseInt($('#hidLJCount').val());
                        $("#lotterynumLJ").html('累计抽奖次数：' + (ljCount + 1));
                        $('#hidLJCount').val(ljCount + 1);


                        $("#spPrize").html(dataObj[0].name);
                        var prize = parseInt(dataObj[0].Coord);
                        isShowUserinfo = dataObj[0].isAUTO;
                        $("#hidDralName").val(dataObj[0].name);
                        lottery.init('lottery', prize);
                        roll();
                        click = true;
                        //console.log("3-" + click);
                        break;
                    default:
                        alert("您没有火把,不能进行抽奖");
                        click = false;
                        break;
                }
               
            }
        }
    });
    click = true;
    //console.log("2-" + click);
}
