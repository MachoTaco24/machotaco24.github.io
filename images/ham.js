!function () {
    "use strict";

    var n = function (e, n, t) {
        if ("[object Object]" === Object.prototype.toString.call(e))
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && n.call(t, e[i], i, e);
        else
            for (var a = 0, o = e.length; o > a; a++)
                n.call(t, e[a], a, e);
    };
    var t = {make: function () {
            var e = document.querySelectorAll(".js-hamburger");
            e.length > 0 && n(e, function (e) {
                e.addEventListener("click", t.clickHandle, !1);
            }), t.headerAnimate(), document.querySelector(".js-hint").addEventListener("click", t.hintHandle, !1);
        }, clickHandle: function (e) {
            e.preventDefault(), this.classList.toggle("is-active");
            function n() {
                a.classList.add("hamburger--" + i[e]), window.requestTimeout(function () {
                    a.classList.add("is-active"), window.requestTimeout(function () {
                        a.classList.remove("is-active"), window.requestTimeout(function () {
                        }, 750);
                    }, 1e3);
                }, 750);
            }
            var a = document.querySelector(".hamburger--header"), o = window.requestInterval(n, t.headerAnimateDelay);
            window.requestTimeout(function () {
                window.clearRequestInterval(o), o = window.requestInterval(n, t.headerAnimateInterval);
            }, t.headerAnimateDelay);
        }};
    t.make();
}();
