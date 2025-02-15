TY.loadedModule("TY.util.cursorPoint"); (function() {
    TY.prototype.selection = function() {
        var c, a, b, d;
        if (void 0 == this[0].selectionStart) if (d = document.selection, "textarea" == this[0].tagName.toLowerCase()) b = d.createRange(),
        c = b.duplicate(),
        c.moveToElementText(this[0]),
        c.setEndPoint("EndToEnd", b),
        c = c.text.length - b.text.length,
        a = c + b.text.length;
        else if ("div" == this[0].tagName.toLowerCase()) {
            b = document.selection.createRange();
            var e = b.parentElement(),
            f = document.body.createTextRange();
            f.moveToElementText(e);
            for (d = 0; 0 > f.compareEndPoints("StartToStart", b); d++) f.moveStart("character", 1);
            document.getElementById("editDiv").innerText = e.innerText.substring(d - 1, d)
        } else a = this.val(),
        b = d.createRange().duplicate(),
        b.moveEnd("character", a.length),
        c = "" == b.text ? a.length: a.lastIndexOf(b.text),
        b = d.createRange().duplicate(),
        b.moveStart("character", -a.length),
        a = b.text.length;
        else c = this[0].selectionStart,
        a = this[0].selectionEnd;
        b = this[0].value.substring(c, a);
        return {
            start: c,
            end: a,
            text: b
        }
    }
})(jQuery); (function() {
    TY.namespace("TY.util.cursorPoint");
    var c = jQuery;
    TY.util.cursorPoint = {
        rangeData: {
            text: "",
            start: 0,
            end: 0
        },
        get: function(a) { (a = c(a).data("rangeData")) || (a = {
                text: "",
                start: 0,
                end: 0
            });
            return a
        },
        set: function(a, b) {
            try {
                var d;
                b || alert("You must get cursor position first.");
                a.focus();
                a.setSelectionRange ? a.setSelectionRange(b.start, b.end) : a.createTextRange && (d = a.createTextRange(), +a.value.length === +b.start ? d.collapse(!1) : d.moveToBookmark(b.bookmark), d.select())
            } catch(c) {
                "undefined" != typeof console && console.log(c)
            }
        },
        add: function(a, b, c) {
            var e = a.value.substring(0, b.end),
            b = a.value.substring(b.end);
            a.value = e + c + b;
            this.toTextAt(a, a.value.length - b.length)
        },
        toTextEnd: function(a) {
            if (document.all) {
                var b = a.createTextRange();
                b.moveStart("character", a.value.length);
                b.collapse(!0);
                b.select()
            } else a.setSelectionRange(a.value.length, a.value.length),
            a.focus()
        },
        toTextAt: function(a, b) {
            b ? (b > a.value.length && (b = a.value.length), 0 > b && (b = 0)) : b = a.value.length;
            if (document.all) {
                var c = a.createTextRange();
                c.moveStart("character", b);
                c.collapse(!0);
                c.select()
            } else a.setSelectionRange(b, b),
            a.focus()
        },
        bindCursorPoint: function(a) {
            a && null == a.getAttribute("_cursorPoint") && c(a).bind("select click focus change keyup",
            function() {
                c(a).data("rangeData", c(a).selection())
            }).attr("bindCursor", !0)
        },
        selectTxt: function(a, b, c) {
            try {
                if (document.selection) {
                    var e = a.createTextRange();
                    e.collapse(1);
                    e.moveStart("character", b);
                    e.moveEnd("character", c);
                    e.select()
                } else a.setSelectionRange(b, b + c)
            } catch(f) {
                TY.util.console({
                    title: "选中文本",
                    msg: f
                })
            }
        },
        init: function() {
            var a = this;
            c("textarea").livequery(function() {
                c(this).prop("bindCursor") || a.bindCursorPoint(this)
            });
            c(":input[type=text]").livequery(function() {
                c(this).prop("bindCursor") || a.bindCursorPoint(this)
            })
        }
    };
    c(document).ready(function() {
        TY.util.cursorPoint.init()
    })
})();