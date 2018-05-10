// 补零
function zero(n) {
    if (n < 10 || n.length < 2) {
        return '0' + n;
    } else {
        return n;
    }
}

// 格式化日期
function myDate() {
    var d = new Date();
    var y = d.getFullYear();
    var m1 = d.getMonth();
    var mydate = d.getDate();
    var day = d.getDay()
    var h = d.getHours()
    var m2 = d.getMinutes()
    var s = d.getSeconds()
    switch (day) {
        case 0: day = '星期日'; break;
        case 1: day = '星期一'; break;
        case 2: day = '星期二'; break;
        case 3: day = '星期三'; break;
        case 4: day = '星期四'; break;
        case 5: day = '星期五'; break;
        case 6: day = '星期六'; break;
    }
    return y + '年' + zero(m1 + 1) + '月' + zero(mydate) + '日 ' + day + ' ' + zero(h) + ':' + zero(m2) + ':' + zero(s);
}