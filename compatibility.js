//获取非行内样式（兼容问题）
function getStyle(obj, attr) {             //获取非行间样式，obj是对象，attr是值
    if (obj.currentStyle) {                //针对ie获取非行间样式
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];   //针对非ie
    }
}
// getStyle()

// event事件对象获取
// IE中:        window.event
// 正常浏览器中: 对象on事件 = function(event){}
// 兼容方式:
// function fn(eve) {
// var e = eve || window.event;
// }

// 得知键盘按下哪个键: keyCode
// var e = eve || event
// var keyC = e.keyCode || e.which

// 阻止事件冒泡
// e.stopPropagation();
// e.cancelBubble = true;        //兼容IE
function stopBubble(a) {
    if (a.stopPropagation) {
        a.stopPropagation()
    } else {
        a.cancelBubble = true;
    }
}

//阻止默认事件
function stopDefault(b) {
    if (b.preventDefault) {
        b.preventDefault()
    } else {
        b.returnValue = false;
    }
}
// 调用
// document.oncontextmenu = function (eve) {
//     var e = eve || window.event
//     stopDefault(e)
// }

// 事件监听操作
var myEvent = {
    add: function (ele, myeve, fn) {
        if (ele.addEventListener) {
            ele.addEventListener(myeve, fn, false);
        } else if (ele.attachEvent) {
            ele.attachEvent('on' + myeve, fn)
        } else {
            ele['on' + myeve] = fn;
        }
    },
    remove: function (ele, myeve, fn) {
        if (ele.removeEventListener) {
            ele.removeEventListener(myeve, fn)
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + myeve, fn)
        } else {
            ele['on' + myeve] = null;
        }
    }
}
// 调用
// myEvent.add(obox, 'click', function () { })
// myEvent.remove(obox, 'click', fn)