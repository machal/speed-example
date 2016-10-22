/*! CSS rel=preload polyfill. Depends on loadCSS function. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT  */
(function(a) {
    // rel=preload support test
    if (!a.loadCSS) {
        return;
    }
    var b = loadCSS.relpreload = {};
    b.support = function() {
        try {
            return a.document.createElement("link").relList.supports("preload");
        } catch (a) {
            return false;
        }
    };
    // loop preload links and fetch using loadCSS
    b.poly = function() {
        var b = a.document.getElementsByTagName("link");
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            if (d.rel === "preload" && d.getAttribute("as") === "style") {
                a.loadCSS(d.href, d);
                d.rel = null;
            }
        }
    };
    // if link[rel=preload] is not supported, we must fetch the CSS manually using loadCSS
    if (!b.support()) {
        b.poly();
        var c = a.setInterval(b.poly, 300);
        if (a.addEventListener) {
            a.addEventListener("load", function() {
                a.clearInterval(c);
            });
        }
        if (a.attachEvent) {
            a.attachEvent("onload", function() {
                a.clearInterval(c);
            });
        }
    }
})(this);