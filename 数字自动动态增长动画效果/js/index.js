window.onload = function() {
    animationNumber(['totalPrice', 'totalOrder', 'monthsPrice', 'monthsOrder'])
    //animationNumber('monthsprice')
}

function animationNumber(elementarray, options) {
    options = Object.assign({}, options, {
        'allTime': 3000,
        'speed': 50
    })
    var allTime = options.allTime,
        speed = options.speed;
    if (elementarray instanceof Array) {
        var oneNumArray = [],
            elementidArray = [],
            countArray = [],
            valueOneArray = [];
        for (var i = 0; i < elementarray.length; i++) {
            var elementid = document.getElementById(elementarray[i]),
                valueN = elementid.getAttribute('data-value'),
                valueOne = 0;
            if (valueN instanceof Array) {
                valueOne = eval(valueN)[0]
            } else {
                valueOne = valueN
            }
            valueOneArray[i] = valueOne
            oneNumber = Math.floor(valueOne / (allTime / speed)) || 1;
            oneNumArray[i] = oneNumber
            elementidArray[i] = elementid
            countArray[i] = 0
        }
        var datetime = setInterval(function() {
            var countClear = 0
            for (var k = 0; k < elementidArray.length; k++) {
                countArray[k] += oneNumArray[k]
                if (countArray[k] >= valueOneArray[k]) {
                    countClear++
                    countArray[k] = valueOneArray[k]
                }
                elementidArray[k].innerText = '￥' + countArray[k];
            }
            if (countClear >= 4) {
                clearInterval(datetime)
            }
        }, 30)
    }
    if (typeof elementarray === 'string') {
        var e = document.getElementById(elementarray),
            allNum = eval(e.getAttribute('data-value'))[0] ? eval(e.getAttribute('data-value'))[0] : 0,
            oneNumber = Math.floor(allNum / (allTime / speed)),
            count = 0;
        var datetime = setInterval(function() {
            count += oneNumber
            if (count >= allNum) {
                clearInterval(datetime);
                count = allNum
            }
            e.innerText = '￥' + count;
        }, 30)
    }
}