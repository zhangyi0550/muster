

function count() {
    var st = parseInt(document.getElementById("text0").value);
    var a = parseInt(document.getElementById("text1").value);
    document.getElementById("text1-1").value = (a * 0.01 * st) + a;

    var b = parseInt(document.getElementById("text2").value);
    document.getElementById("text2-1").value = (b * 0.01 * st) + b;

    var c = parseInt(document.getElementById("text3").value);
    document.getElementById("text3-1").value = (c * 0.01 * st) + c;

    var d = parseInt(document.getElementById("text4").value);
    document.getElementById("text4-1").value = (d * 0.01 * st) + d;

    var e = parseInt(document.getElementById("text5").value);
    document.getElementById("text5-1").value = (e * 0.01 * st) + e;

    var f = parseInt(document.getElementById("text6").value);
    document.getElementById("text6-1").value = (f * 0.01 * st) + f;

    var g = parseInt(document.getElementById("text7").value);
    document.getElementById("text7-1").value = (g * 0.01 * st) + g;

    var h = parseInt(document.getElementById("text8").value);
    document.getElementById("text8-1").value = (h * 0.01 * st) + h;

    var i = parseInt(document.getElementById("text9").value);
    document.getElementById("text9-1").value = (i * 0.01 * st) + i;

    var j = parseInt(document.getElementById("text10").value);
    document.getElementById("text10-1").value = (j * 0.01 * st) + j;

    var k = parseInt(document.getElementById("text11").value);
    document.getElementById("text11-1").value = (k * 0.01 * st) + k;

    var l = parseInt(document.getElementById("text12").value);
    document.getElementById("text12-1").value = (l * 0.01 * st) + l;

    var m = parseInt(document.getElementById("text13").value);
    document.getElementById("text13-1").value = (m * 0.01 * st) + m;

    var n = parseInt(document.getElementById("text14").value);
    document.getElementById("text14-1").value = (n * 0.01 * st) + n;

    var o = parseInt(document.getElementById("text15").value);
    document.getElementById("text15-1").value = (o * 0.01 * st) + o;

    var p = parseInt(document.getElementById("text16").value);
    document.getElementById("text16-1").value = (p * 0.01 * st) + p;

    var q = parseInt(document.getElementById("text17").value);
    document.getElementById("text17-1").value = (q * 0.01 * st) + q;

}
$(function () {
    $('.btn1').click(function () {
        $('.input').val("")
    })
})
function Check(txt) {
    if (isNaN(txt.value)) { alert("请输入数字！"); txt.select(); return; }
    if (parseFloat(txt.value) > 100 || parseFloat(txt.value) < 1) { alert("宠物星级为1-100.请正确输入！"); txt.select(); return; }
}
function Check2(txt) {
    if (isNaN(txt.value)) { alert("请输入数字！"); txt.select(); return; }
    if (parseFloat(txt.value) < 1) { alert("请输入不小于1的数字！"); txt.select(); return; }
}
