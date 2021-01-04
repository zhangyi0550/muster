function add_shoppingcar(btn) {
    var tds = $(btn).parents('tr').children('td');
    var name = $(tds[0]).html();
    var price = $(tds[1]).html();
    var kc = parseInt($(tds[3]).html());
    kc = kc - 1;
    $(tds[3]).html(kc);
    $trtd = $('<tr>' + '<td>' +
        name +
        '</td>' +
        '<td>' +
        price +
        '</td>' +
        '<td align="center">' +
        '<input class="btn btn-primary" type="button" value="-"  onclick="change(this,-1)"   />' +
        '<input  style="text-align: center"    type="text" class="dclass"  size="1"   readonly value="1">' +
        '<input class="btn btn-primary" type="button" value="+"  onclick="change(this,1)"  />' +
        '</td>' + '<td>' + price + '</td>' + '<td align="center">' +
        '<input class="btn btn-primary" type="button" value="X" onclick="del(this);" />' +
        '</td>' + '</tr>')
    $("#tb2").append($trtd);
    total();

}
//删除
function del(btn) {
    var tr1 = $('.t1class').children("tr");
    for (var i = 0; i < tr1.length; i++) {
        var tds = $(tr1[i]).children("td");
        var kc = parseInt($(tds[3]).html());
        var bs2 = $(tr1[i]).children(1).html();
        var bs = $(btn).parents('tr').children(0).html();
        if (bs == bs2) {
            var inputs = $(btn).parent().parent("tr").children(2).children();
            var amount = parseInt($(inputs[1]).val());
            kc = kc + amount;
            $(tds[3]).html(kc);
        }

    }
    $(btn).parent().parent().remove();
    total();
}
//总计
function total() {
    var trs = $("#tb2").children("tr");
    var sum = 0;
    for (var i = 0; i < trs.length; i++) {
        var tds = $(trs[i]).children("td");
        var m = $(tds[3]).html();
        sum += parseFloat(m);
    }
    $("#total").html(sum);
}
//增加减少
function change(btn, n) {
    var inputs = $(btn).parent().children("input");
    var amount = parseInt($(inputs[1]).val());
    if (amount <= 1 && n < 0) {
        return;
    }
    $(inputs[1]).val(amount + n);
    var tr1 = $('.t1class').children("tr");
    for (var i = 0; i < tr1.length; i++) {
        var bs = $(btn).parents('tr').children(0).html();
        var bs2 = $(tr1[i]).children(1).html();
        var tds = $(tr1[i]).children("td");
        var kc = parseInt($(tds[3]).html());
        if (bs == bs2) {
            kc = kc - n;
            $(tds[3]).html(kc);
        }
    }
    amount = $(inputs[1]).val();
    var tds = $(btn).parents('tr').children('td');
    var price = parseFloat($(tds[1]).html());
    var m = amount * price;
    $(tds[3]).html(m);
    total();
}