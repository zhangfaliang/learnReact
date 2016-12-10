//移动端判断html字体大小
(function (b, a) {
    function c() {
        d = 100 * Math.min(e.getBoundingClientRect().width, a.maxWidth) / a.desinWidth;
        e.style.fontSize = d + "px"
    }

    var e = b.document.documentElement, d = 100, f;
    a.desinWidth = 640;
    a.maxWidth = 640;
    a.init = function () {
        b.addEventListener("resize", function () {
            clearTimeout(f);
            f = setTimeout(c, 300)
        }, !1);
        c()
    }
})(window, window.adaptive || (window.adaptive = {}));
adaptive.init();