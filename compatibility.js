// event事件对象获取
// IE中:        window.event
// 正常浏览器中: 对象on事件 = function(event){}
// 兼容方式:
function fn(eve) {
    var e = eve || window.event;
}

// 阻止事件冒泡
e.stopPropagation();
e.cancelBubble = true;        //兼容IE

// 得知键盘按下哪个键: keyCode
var e = eve || event
var keyC = e.keyCode || e.which