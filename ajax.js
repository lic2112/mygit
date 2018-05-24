function ajaxGet(url, fn) {
    if (XMLHttpRequest) {
        var ajax = new XMLHttpRequest();
    } else {
        var ajax = new ActiveXObject('Microsoft.XMLHTTP');      //IE
    }
    ajax.open('get', url + '?t=' + new Date().getDate(), true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            fn(ajax.responseText);
        }
    }
    ajax.send(null);
}
// ajaxGet("http:// ", function (res) {

// })