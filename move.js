// 不同元素多属性运动
function move(ele, attr, target) {
    clearInterval(ele.timer)
    ele.timer = setInterval(() => {
        if (attr == 'opacity') {
            var iNow = getStyle(ele, attr) * 100
        } else {
            var iNow = parseInt(getStyle(ele, attr))
        }
        var speed = (target - iNow) / 7
        speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed)
        if (Math.abs(target - iNow) < 1) {
            clearInterval(ele.timer)
        } else {
            iNow += speed
            if (attr == 'opacity') {
                ele.style.opacity = iNow / 100
                ele.style.filter = 'alpha(opacity=' + iNow + ')'
            } else {
                ele.style[attr] = iNow + 'px'
            }
        }
    }, 30);
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    } else {
        return getComputedStyle(obj, false)[attr]
    }
}