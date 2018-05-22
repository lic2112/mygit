// 链式运动
function move(ele, obj, fn) {
    clearInterval(ele.timer)
    ele.timer = setInterval(() => {
        var onOff = true;
        for (var attr in obj) {
            var iNow = attr == 'opacity' ? getStyle(ele, attr) * 100 : parseInt(getStyle(ele, attr))
            var speed = (obj[attr] - iNow) / 7
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
            if (!Math.abs(obj[attr] - iNow) < 1) {
                onOff = false
            }
            iNow += speed
            if (attr == 'opacity') {
                ele.style.opacity = iNow / 100;
                ele.style.filter = 'alpha(opacity=' + iNow + ')'
            } else {
                ele.style[attr] = iNow + 'px'
            }
        }
        if (onOff) {
            clearInterval(ele.timer)
            if (fn) fn()
        }
    }, 30);
}
function getStyle(obj, attr) {
    if (getComputedStyle) {
        return getComputedStyle(obj, false)[attr]
    } else {
        return obj.currentStyle[attr]
    }
}