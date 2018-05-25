function ajaxGet(url) {
    var p = new Promise(function (success) {
        if (XMLHttpRequest) {
            var ajax = new XMLHttpRequest();
        } else {
            var ajax = new ActiveXObject('Microsoft.XMLHTTP');
        }
        ajax.open('GET', url, true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                success(ajax.responseText);
            }
        }
        ajax.send(null);
    })
    return p
}
// ajaxGet(url).then(function (res) {

// }, function () {

// })

function ajaxPost(url, data) {
    if (data) {
        var str = '';
        for (var attr in data) {
            str += attr + '=' + data[attr] + '&';
        }
        data = str;
    } else {
        data = null;
    }
    var p = new Promise(function (success) {
        if (XMLHttpRequest) {
            var ajax = new XMLHttpRequest();
        } else {
            var ajax = new ActiveXObject('Microsoft.XMLHTTP');
        }
        ajax.open('POST', url, true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                success(ajax.responseText);
            }
        }
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(data);
    })
    return p;
}
// ajaxPost(url, {}).then(function (res) {

// })