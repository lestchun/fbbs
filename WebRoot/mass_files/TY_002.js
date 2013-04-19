
var __global = {
    cityNames: "北京,上海,天津,重庆,石家庄,保定,唐山,太原,大同,晋城,呼和浩特,包头,沈阳,大连,长春,四平,吉林,哈尔滨,佳木斯,南京,苏州,扬州,无锡,徐州,杭州,温州,绍兴,宁波,合肥,芜湖,安庆,马鞍山,福州,厦门,泉州,南昌,景德镇,赣州,九江,济南,青岛,淄博,威海,郑州,开封,洛阳,安阳,南阳,武汉,宜昌,襄樊,长沙,株洲,常德,岳阳,广州,深圳,佛山,潮州,东莞,南宁,柳州,桂林,海口,三亚,儋州,文昌,乐东,五指山,琼海,万宁,定安,昌江,临高,澄迈,东方,陵水,保亭,屯昌,琼中,白沙,成都,自贡,绵阳,乐山,贵阳,遵义,六盘水,昆明,拉萨,西安,宝鸡,咸阳,兰州,天水,乌鲁木齐,台湾,香港,澳门,西宁,银川,张家口,秦皇岛,沧州,邢台,承德,廊坊,邯郸,衡水,长治,运城,朔州,晋中,吕梁,临汾,忻州,阳泉,通辽,鄂尔多斯,呼伦贝尔,巴彦淖尔市,乌海,兴安盟,赤峰,阿拉善盟,锡林郭勒盟,乌兰察布市,朝阳,本溪,抚顺,鞍山,盘锦,铁岭,锦州,葫芦岛,丹东,阜新,营口,辽阳,通化,白山,延边朝鲜族自治州,辽源,松原,白城,齐齐哈尔,绥化,大兴安岭地区,伊春,鹤岗,双鸭山,黑河,鸡西,大庆,牡丹江,七台河,常州,连云港,南通,盐城,宿迁,泰州,镇江,淮安,丽水,衢州,舟山,台州,湖州,嘉兴,金华,淮北,淮南,亳州,池州,六安,阜阳,蚌埠,滁州,铜陵,宿州,黄山,宣城,巢湖,南平,漳州,龙岩,宁德,莆田,三明,吉安,宜春,抚州,新余,萍乡,上饶,鹰潭,德州,莱芜,聊城,枣庄,潍坊,泰安,东营,烟台,临沂,日照,滨州,荷泽,济宁,许昌,三门峡,平顶山,驻马店,周口,濮阳,鹤壁,济源,焦作,商丘,漯河,新乡,信阳,鄂州,咸宁,孝感,荆州,十堰,黄冈,黄石,恩施土家族苗族自治州,荆门,随州,益阳,永州,郴州,湘西土家族苗族自治州,邵阳,怀化,娄底,湘潭,张家界,衡阳,清远,河源,揭阳,汕头,珠海,肇庆,梅州,中山,云浮,江门,惠州,茂名,韶关,汕尾,湛江,阳江,河池,崇左,钦州,玉林,梧州,贺州,贵港,北海,防城港,百色,来宾,雅安,凉山彝族自治州,宜宾,泸州,资阳,阿坝藏族羌族自治州,甘孜藏族自治州,德阳,攀枝花,广元,内江,巴中,眉山,达州,南充,遂宁,广安,毕节,黔南布依族苗族自治州,黔东南苗族侗族自治州,黔西南布依族苗族自治州,铜仁,安顺,迪庆藏族自治州,文山壮族苗族自治州,德宏德宏傣族景颇族自治州,临沧,玉溪,西双版纳傣族自治州,楚雄彝族自治州,思茅,保山,昭通,曲靖,红河哈尼族彝族自治州,大理大理白族自治州,怒江傈僳族自治州,丽江,日喀则,林芝,阿里,那曲,昌都,山南,榆林,渭南,安康,汉中,商洛,铜川,延安,白银,庆阳,金昌,武威,陇南,甘南藏族自治州,酒泉,张掖,临夏回族自治州,平凉,定西,海西蒙古族藏族自治州,玉树藏族自治州,果洛藏族自治州,海南藏族自治州,海北藏族自治州,黄南藏族自治州,海东,石嘴山,固原,吴忠,阿克苏,塔城,伊犁哈萨克自治州,阿勒泰,巴音郭楞蒙古自治州,克孜勒苏柯尔克孜自治州,克拉玛依,石河子,昌吉回族自治州,伊犁哈萨克自治州,喀什,和田,哈密,博尔塔拉蒙古自治州,吐鲁番,伊吾,顺德".split(","),
    setCookie: function(a, c, e, h, k, n) {
        null === c ? __global.setCookieNoEscape(a, null, e, h, k, n) : __global.setCookieNoEscape(a, escape(c), e, h, k, n)
    },
    setCookieNoEscape: function(a, c, e, h, k, n) {
        var g = -1;
        null == c ? (g = new Date, g.setTime(g.getTime() - 864E5), g = g.toGMTString()) : "number" == typeof e && 0 <= e && (g = new Date, g.setTime(g.getTime() + 864E5 * e), g = g.toGMTString());
        document.cookie = a + "=" + c + ";" + ( - 1 != g ? " expires=" + g + ";": "") + (h ? "path=" + h: "") + (k ? "; domain=" + k: "") + (n ? "; secure": "")
    },
    setPartCookieNoEscape: function(a, c, e, h, k, n, g) {
        var i = this.getCookie(a);
        if (i) {
            for (var m = i.split("&"), i = m.length, p = Array(i), r = Array(i), s = -1, u = 0; u < i; u++) {
                var w = m[u].split("=");
                p[u] = w[0];
                r[u] = w[1];
                w[0] == c && (s = u)
            } - 1 == s ? (p[i] = c, r[i++] = null != e ? escape(e) : null) : r[s] = null != e ? escape(e) : null;
            c = "";
            if (0 < i) {
                for (e = 0; e < i; e++) null != r[e] && (c += "&" + p[e] + "=" + r[e]);
                c = c.substr(1)
            }
            "" == c && (c = null);
            this.setCookieNoEscape(a, c, h, k, n, g)
        } else null != e && (c = c + "=" + escape(e), this.setCookieNoEscape(a, c, h, k, n, g));
        return null
    },
    getCookie: function(a) {
        var c = null;
        if (document.cookie && "" != document.cookie) for (var e = document.cookie.split(";"), h = 0; h < e.length; h++) {
            var k = e[h].replace(/(^\s*)|(\s*$)/g, "");
            if (k.substring(0, a.length + 1) == a + "=") {
                c = unescape(k.substring(a.length + 1));
                break
            }
        }
        return c
    },
    setPartCookie: function(a, c, e, h, k, n, g) {
        var i = this.getCookie(a);
        if (i) {
            for (var m = i.split("&"), i = m.length, p = Array(i), r = Array(i), s = -1, u = 0; u < i; u++) {
                var w = m[u].split("=");
                p[u] = w[0];
                r[u] = w[1];
                w[0] == c && (s = u)
            } - 1 == s ? (p[i] = c, r[i++] = null != e ? escape(e) : null) : r[s] = null != e ? escape(e) : null;
            c = "";
            if (0 < i) {
                for (e = 0; e < i; e++) null != r[e] && (c += "&" + p[e] + "=" + r[e]);
                c = c.substr(1)
            }
            "" == c && (c = null);
            this.setCookie(a, c, h, k, n, g)
        } else null != e && (c = c + "=" + escape(e), this.setCookie(a, c, h, k, n, g));
        return null
    },
    getPartCookie: function(a, c) {
        var e = this.getCookie(a);
        if (e) for (var e = e.split("&"), h = 0; h < e.length; h++) {
            var k = e[h].split("=");
            if (k[0] == c) return e = k[1],
            e = unescape(e)
        }
        return null
    },
    getParameter: function(a) {
        for (var c = document.getElementsByTagName("script"), e = c.length, h = 0; h < e; h++) if (c[h].src && c[h].src.match(/global\.js(\?.*)?$/)) {
            var k = RegExp("(^|)" + a + "=([^&]*)(&|$)", "gi").exec(c[h].src);
            if (k) return k[2]
        }
        return null
    },
    getUserCityId: function() {
        return this.getCookie("__cid")
    },
    getUserCityName: function() {
        var a = this.getCookie("__cid");
        return ! isNaN(a) && 1 <= a && a <= this.cityNames.length ? this.cityNames[a - 1] : null
    },
    getUserName: function() {
        return null == this.getCookie("user") ? null: this.getPartCookie("user", "w")
    },
    getUserId: function() {
        return null == this.getCookie("user") ? null: this.getPartCookie("user", "id")
    },
    getKey: function() {
        return null == this.getCookie("temp") ? null: this.getPartCookie("temp", "k")
    },
    getSysGrad: function() {
        return null == this.getCookie("temp") ? null: this.getPartCookie("temp", "s")
    },
    getCookieTempTime: function() {
        return null == this.getCookie("temp") ? 1E9: this.getPartCookie("temp", "t")
    },
    getCookieCheckKey: function() {
        return null == this.getCookie("temp") ? null: this.getPartCookie("temp", "b")
    },
    getCookieCstmTime: function() {
        return this.getCookie("time") ? this.getPartCookie("time", "ct") : null
    },
    setCookieCstmTime: function(a) {
        this.updatePartCookie("time", "ct", a)
    },
    isOnline: function() {
        this._isOnline = !1;
        this._cookieTempTime = this.getCookieTempTime();
        var a = __global.getPartCookie("sso", "wsid"); - 1 != this._cookieTempTime && !isNaN(this.getUserId()) && 0 < this.getUserId() && !isNaN(this.getKey()) && 0 < this.getKey() && a && 32 == a.length && (this._isOnline = !0);
        return this._isOnline
    },
    IsLoadReadCookieFile: !0,
    refreshCookie: function() {
        var a = this.getCookieCstmTime(),
        c = (new Date).getTime() / 1E3;
        a && 7200 < c - a && document.write('<script charset="utf-8" src="http://passport.tianya.cn/refresh.jsp?loginFrom=' + encodeURIComponent(window.location.href) + '"><\/script>');
        this.setCookieCstmTime(c)
    },
    updatePartCookie: function(a, c, e) {
        this.setPartCookieNoEscape(a, c, e, this.getCookieDaysLeft(), "/", this.getRootDomain(), !1)
    },
    getRootDomain: function() {
        var a = document.domain.split(".");
        return "." + a[a.length - 2] + "." + a[a.length - 1]
    },
    getCookieDaysLeft: function() {
        var a = this.getPartCookie("time", "et"),
        c = 30;
        a && (c = -1 == a ? a: (a - (new Date).getTime() / 1E3) / 86400);
        return c
    }
};
__global.refreshCookie(); (function() {
    try {
        var a = null,
        c = 0,
        c = (a = navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)) ? parseInt(a[1], 10) : 0;
        if (6 == c) try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch(e) {}
    } catch(h) {}
})(); (function(a, c) {
    function e(b, f, l) {
        if (l === c && 1 === b.nodeType) if (l = "data-" + f.replace(Ua, "-$1").toLowerCase(), l = b.getAttribute(l), "string" === typeof l) {
            try {
                l = "true" === l ? !0 : "false" === l ? !1 : "null" === l ? null: !d.isNaN(l) ? parseFloat(l) : Va.test(l) ? d.parseJSON(l) : l
            } catch(a) {}
            d.data(b, f, l)
        } else l = c;
        return l
    }
    function h(b) {
        for (var f in b) if ("toJSON" !== f) return ! 1;
        return ! 0
    }
    function k(b, f, l) {
        var a = f + "defer",
        j = f + "queue",
        q = f + "mark",
        e = d.data(b, a, c, !0);
        e && ("queue" === l || !d.data(b, j, c, !0)) && ("mark" === l || !d.data(b, q, c, !0)) && setTimeout(function() { ! d.data(b, j, c, !0) && !d.data(b, q, c, !0) && (d.removeData(b, a, !0), e.resolve())
        },
        0)
    }
    function n() {
        return ! 1
    }
    function g() {
        return ! 0
    }
    function i(b, f, l) {
        var a = d.extend({},
        l[0]);
        a.type = b;
        a.originalEvent = {};
        a.liveFired = c;
        d.event.handle.call(f, a);
        a.isDefaultPrevented() && l[0].preventDefault()
    }
    function m(b) {
        var f, l, a, c, q, e, g, i, h, n, k, m = [];
        c = [];
        q = d._data(this, "events");
        if (! (b.liveFired === this || !q || !q.live || b.target.disabled || b.button && "click" === b.type)) {
            b.namespace && (k = RegExp("(^|\\.)" + b.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
            b.liveFired = this;
            var s = q.live.slice(0);
            for (g = 0; g < s.length; g++) q = s[g],
            q.origType.replace(fa, "") === b.type ? c.push(q.selector) : s.splice(g--, 1);
            c = d(b.target).closest(c, b.currentTarget);
            for (i = 0, h = c.length; i < h; i++) {
                n = c[i];
                for (g = 0; g < s.length; g++) if (q = s[g], n.selector === q.selector && (!k || k.test(q.namespace)) && !n.elem.disabled) {
                    e = n.elem;
                    a = null;
                    if ("mouseenter" === q.preType || "mouseleave" === q.preType) b.type = q.preType,
                    (a = d(b.relatedTarget).closest(q.selector)[0]) && d.contains(e, a) && (a = e); (!a || a !== e) && m.push({
                        elem: e,
                        handleObj: q,
                        level: n.level
                    })
                }
            }
            for (i = 0, h = m.length; i < h; i++) {
                c = m[i];
                if (l && c.level > l) break;
                b.currentTarget = c.elem;
                b.data = c.handleObj.data;
                b.handleObj = c.handleObj;
                k = c.handleObj.origHandler.apply(c.elem, arguments);
                if (!1 === k || b.isPropagationStopped()) if (l = c.level, !1 === k && (f = !1), b.isImmediatePropagationStopped()) break
            }
            return f
        }
    }
    function p(b, f) {
        return (b && "*" !== b ? b + ".": "") + f.replace(Wa, "`").replace(Xa, "&")
    }
    function r(b, f, l) {
        f = f || 0;
        if (d.isFunction(f)) return d.grep(b,
        function(b, d) {
            return !! f.call(b, d, b) === l
        });
        if (f.nodeType) return d.grep(b,
        function(b) {
            return b === f === l
        });
        if ("string" === typeof f) {
            var a = d.grep(b,
            function(b) {
                return 1 === b.nodeType
            });
            if (Ya.test(f)) return d.filter(f, a, !l);
            f = d.filter(f, a)
        }
        return d.grep(b,
        function(b) {
            return 0 <= d.inArray(b, f) === l
        })
    }
    function s(b, f) {
        if (1 === f.nodeType && d.hasData(b)) {
            var l = d.expando,
            a = d.data(b),
            c = d.data(f, a);
            if (a = a[l]) {
                var q = a.events,
                c = c[l] = d.extend({},
                a);
                if (q) {
                    delete c.handle;
                    c.events = {};
                    for (var e in q) {
                        l = 0;
                        for (a = q[e].length; l < a; l++) d.event.add(f, e + (q[e][l].namespace ? ".": "") + q[e][l].namespace, q[e][l], q[e][l].data)
                    }
                }
            }
        }
    }
    function u(b, f) {
        var l;
        if (1 === f.nodeType) {
            f.clearAttributes && f.clearAttributes();
            f.mergeAttributes && f.mergeAttributes(b);
            l = f.nodeName.toLowerCase();
            if ("object" === l) f.outerHTML = b.outerHTML;
            else if ("input" === l && ("checkbox" === b.type || "radio" === b.type)) b.checked && (f.defaultChecked = f.checked = b.checked),
            f.value !== b.value && (f.value = b.value);
            else if ("option" === l) f.selected = b.defaultSelected;
            else if ("input" === l || "textarea" === l) f.defaultValue = b.defaultValue;
            f.removeAttribute(d.expando)
        }
    }
    function w(b) {
        return "getElementsByTagName" in b ? b.getElementsByTagName("*") : "querySelectorAll" in b ? b.querySelectorAll("*") : []
    }
    function z(b) {
        if ("checkbox" === b.type || "radio" === b.type) b.defaultChecked = b.checked
    }
    function y(b) {
        d.nodeName(b, "input") ? z(b) : "getElementsByTagName" in b && d.grep(b.getElementsByTagName("input"), z)
    }
    function A(b, f) {
        f.src ? d.ajax({
            url: f.src,
            async: !1,
            dataType: "script"
        }) : d.globalEval((f.text || f.textContent || f.innerHTML || "").replace(Za, "/*$0*/"));
        f.parentNode && f.parentNode.removeChild(f)
    }
    function v(b, f, l) {
        var a = "width" === f ? b.offsetWidth: b.offsetHeight,
        c = "width" === f ? $a: ab;
        if (0 < a) return "border" !== l && d.each(c,
        function() {
            l || (a -= parseFloat(d.css(b, "padding" + this)) || 0);
            a = "margin" === l ? a + (parseFloat(d.css(b, l + this)) || 0) : a - (parseFloat(d.css(b, "border" + this + "Width")) || 0)
        }),
        a + "px";
        a = G(b, f, f);
        if (0 > a || null == a) a = b.style[f] || 0;
        a = parseFloat(a) || 0;
        l && d.each(c,
        function() {
            a += parseFloat(d.css(b, "padding" + this)) || 0;
            "padding" !== l && (a += parseFloat(d.css(b, "border" + this + "Width")) || 0);
            "margin" === l && (a += parseFloat(d.css(b, l + this)) || 0)
        });
        return a + "px"
    }
    function K(b) {
        return function(f, l) {
            "string" !== typeof f && (l = f, f = "*");
            if (d.isFunction(l)) for (var a = f.toLowerCase().split(ta), c = 0, q = a.length, e, g; c < q; c++) e = a[c],
            (g = /^\+/.test(e)) && (e = e.substr(1) || "*"),
            e = b[e] = b[e] || [],
            e[g ? "unshift": "push"](l)
        }
    }
    function H(b, f, d, a, j, q) {
        j = j || f.dataTypes[0];
        q = q || {};
        q[j] = !0;
        for (var j = b[j], e = 0, g = j ? j.length: 0, i = b === ga, h; e < g && (i || !h); e++) h = j[e](f, d, a),
        "string" === typeof h && (!i || q[h] ? h = c: (f.dataTypes.unshift(h), h = H(b, f, d, a, h, q)));
        if ((i || !h) && !q["*"]) h = H(b, f, d, a, "*", q);
        return h
    }
    function O(b, f) {
        var l, a, j = d.ajaxSettings.flatOptions || {};
        for (l in f) f[l] !== c && ((j[l] ? b: a || (a = {}))[l] = f[l]);
        a && d.extend(!0, b, a)
    }
    function U(b, f, l, a) {
        if (d.isArray(f)) d.each(f,
        function(f, c) {
            l || bb.test(b) ? a(b, c) : U(b + "[" + ("object" === typeof c || d.isArray(c) ? f: "") + "]", c, l, a)
        });
        else if (!l && null != f && "object" === typeof f) for (var c in f) U(b + "[" + c + "]", f[c], l, a);
        else a(b, f)
    }
    function ha() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function L() {
        setTimeout(cb, 0);
        return Y = d.now()
    }
    function cb() {
        Y = c
    }
    function Q(b, f) {
        var a = {};
        d.each(ua.concat.apply([], ua.slice(0, f)),
        function() {
            a[this] = b
        });
        return a
    }
    function va(b) {
        if (!ia[b]) {
            var f = t.body,
            a = d("<" + b + ">").appendTo(f),
            c = a.css("display");
            a.remove();
            if ("none" === c || "" === c) {
                E || (E = t.createElement("iframe"), E.frameBorder = E.width = E.height = 0);
                f.appendChild(E);
                if (!R || !E.createElement) R = (E.contentWindow || E.contentDocument).document,
                R.write(("CSS1Compat" === t.compatMode ? "<!doctype html>": "") + "<html><body>"),
                R.close();
                a = R.createElement(b);
                R.body.appendChild(a);
                c = d.css(a, "display");
                f.removeChild(E)
            }
            ia[b] = c
        }
        return ia[b]
    }
    function ja(b) {
        return d.isWindow(b) ? b: 9 === b.nodeType ? b.defaultView || b.parentWindow: !1
    }
    var t = a.document,
    db = a.navigator,
    eb = a.location,
    d = function() {
        function b() {
            if (!f.isReady) {
                try {
                    t.documentElement.doScroll("left")
                } catch(d) {
                    setTimeout(b, 1);
                    return
                }
                f.ready()
            }
        }
        var f = function(b, d) {
            return new f.fn.init(b, d, j)
        },
        d = a.jQuery,
        o = a.$,
        j,
        q = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        e = /\S/,
        g = /^\s+/,
        i = /\s+$/,
        h = /\d/,
        n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        k = /^[\],:{}\s]*$/,
        m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        s = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        u = /(?:^|:|,)(?:\s*\[)+/g,
        p = /(webkit)[ \/]([\w.]+)/,
        r = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        w = /(msie) ([\w.]+)/,
        y = /(mozilla)(?:.*? rv:([\w.]+))?/,
        V = /-([a-z]|[0-9])/ig,
        x = /^-ms-/,
        fb = function(b, f) {
            return (f + "").toUpperCase()
        },
        W = db.userAgent,
        Z,
        S,
        gb = Object.prototype.toString,
        ka = Object.prototype.hasOwnProperty,
        z = Array.prototype.push,
        v = Array.prototype.slice,
        A = String.prototype.trim,
        wa = Array.prototype.indexOf,
        xa = {};
        f.fn = f.prototype = {
            constructor: f,
            init: function(b, d, a) {
                var l;
                if (!b) return this;
                if (b.nodeType) return this.context = this[0] = b,
                this.length = 1,
                this;
                if ("body" === b && !d && t.body) return this.context = t,
                this[0] = t.body,
                this.selector = b,
                this.length = 1,
                this;
                if ("string" === typeof b) {
                    if ((l = "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? [null, b, null] : q.exec(b)) && (l[1] || !d)) {
                        if (l[1]) return a = (d = d instanceof f ? d[0] : d) ? d.ownerDocument || d: t,
                        (b = n.exec(b)) ? f.isPlainObject(d) ? (b = [t.createElement(b[1])], f.fn.attr.call(b, d, !0)) : b = [a.createElement(b[1])] : (b = f.buildFragment([l[1]], [a]), b = (b.cacheable ? f.clone(b.fragment) : b.fragment).childNodes),
                        f.merge(this, b);
                        if ((d = t.getElementById(l[2])) && d.parentNode) {
                            if (d.id !== l[2]) return a.find(b);
                            this.length = 1;
                            this[0] = d
                        }
                        this.context = t;
                        this.selector = b;
                        return this
                    }
                    return ! d || d.jquery ? (d || a).find(b) : this.constructor(d).find(b)
                }
                if (f.isFunction(b)) return a.ready(b);
                b.selector !== c && (this.selector = b.selector, this.context = b.context);
                return f.makeArray(b, this)
            },
            selector: "",
            jquery: "1.6.4",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return v.call(this, 0)
            },
            get: function(b) {
                return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
            },
            pushStack: function(b, d, a) {
                var l = this.constructor();
                f.isArray(b) ? z.apply(l, b) : f.merge(l, b);
                l.prevObject = this;
                l.context = this.context;
                "find" === d ? l.selector = this.selector + (this.selector ? " ": "") + a: d && (l.selector = this.selector + "." + d + "(" + a + ")");
                return l
            },
            each: function(b, d) {
                return f.each(this, b, d)
            },
            ready: function(b) {
                f.bindReady();
                Z.done(b);
                return this
            },
            eq: function(b) {
                return - 1 === b ? this.slice(b) : this.slice(b, +b + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(v.apply(this, arguments), "slice", v.call(arguments).join(","))
            },
            map: function(b) {
                return this.pushStack(f.map(this,
                function(f, d) {
                    return b.call(f, d, f)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: z,
            sort: [].sort,
            splice: [].splice
        };
        f.fn.init.prototype = f.fn;
        f.extend = f.fn.extend = function() {
            var b, d, a, l, o, j = arguments[0] || {},
            q = 1,
            e = arguments.length,
            V = !1;
            "boolean" === typeof j && (V = j, j = arguments[1] || {},
            q = 2);
            "object" !== typeof j && !f.isFunction(j) && (j = {});
            e === q && (j = this, --q);
            for (; q < e; q++) if (null != (b = arguments[q])) for (d in b) a = j[d],
            l = b[d],
            j !== l && (V && l && (f.isPlainObject(l) || (o = f.isArray(l))) ? (o ? (o = !1, a = a && f.isArray(a) ? a: []) : a = a && f.isPlainObject(a) ? a: {},
            j[d] = f.extend(V, a, l)) : l !== c && (j[d] = l));
            return j
        };
        f.extend({
            noConflict: function(b) {
                a.$ === f && (a.$ = o);
                b && a.jQuery === f && (a.jQuery = d);
                return f
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(b) {
                b ? f.readyWait++:f.ready(!0)
            },
            ready: function(b) {
                if (!0 === b && !--f.readyWait || !0 !== b && !f.isReady) {
                    if (!t.body) return setTimeout(f.ready, 1);
                    f.isReady = !0; ! 0 !== b && 0 < --f.readyWait || (Z.resolveWith(t, [f]), f.fn.trigger && f(t).trigger("ready").unbind("ready"))
                }
            },
            bindReady: function() {
                if (!Z) {
                    Z = f._Deferred();
                    if ("complete" === t.readyState) return setTimeout(f.ready, 1);
                    if (t.addEventListener) t.addEventListener("DOMContentLoaded", S, !1),
                    a.addEventListener("load", f.ready, !1);
                    else if (t.attachEvent) {
                        t.attachEvent("onreadystatechange", S);
                        a.attachEvent("onload", f.ready);
                        var d = !1;
                        try {
                            d = null == a.frameElement
                        } catch(l) {}
                        t.documentElement.doScroll && d && b()
                    }
                }
            },
            isFunction: function(b) {
                return "function" === f.type(b)
            },
            isArray: Array.isArray ||
            function(b) {
                return "array" === f.type(b)
            },
            isWindow: function(b) {
                return b && "object" === typeof b && "setInterval" in b
            },
            isNaN: function(b) {
                return null == b || !h.test(b) || isNaN(b)
            },
            type: function(b) {
                return null == b ? "" + b: xa[gb.call(b)] || "object"
            },
            isPlainObject: function(b) {
                if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return ! 1;
                try {
                    if (b.constructor && !ka.call(b, "constructor") && !ka.call(b.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(d) {
                    return ! 1
                }
                for (var a in b);
                return a === c || ka.call(b, a)
            },
            isEmptyObject: function(b) {
                for (var f in b) return ! 1;
                return ! 0
            },
            error: function(b) {
                throw b;
            },
            parseJSON: function(b) {
                if ("string" !== typeof b || !b) return null;
                b = f.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (k.test(b.replace(m, "@").replace(s, "]").replace(u, ""))) return (new Function("return " + b))();
                f.error("Invalid JSON: " + b)
            },
            parseXML: function(b) {
                var d, l;
                try {
                    a.DOMParser ? (l = new DOMParser, d = l.parseFromString(b, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(b))
                } catch(o) {
                    d = c
                } (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + b);
                return d
            },
            noop: function() {},
            globalEval: function(b) {
                try {
                    b && e.test(b) && (a.execScript ||
                    function(b) {
                        a.eval.call(a, b)
                    })(b)
                } catch(f) {
                    "undefined" != typeof console && console.log(f)
                }
            },
            camelCase: function(b) {
                return b.replace(x, "ms-").replace(V, fb)
            },
            nodeName: function(b, f) {
                return b.nodeName && b.nodeName.toUpperCase() === f.toUpperCase()
            },
            each: function(b, d, a) {
                var l, o = 0,
                j = b.length,
                q = j === c || f.isFunction(b);
                if (a) if (q) for (l in b) {
                    if (!1 === d.apply(b[l], a)) break
                } else for (; o < j && !(!1 === d.apply(b[o++], a)););
                else if (q) for (l in b) {
                    if (!1 === d.call(b[l], l, b[l])) break
                } else for (; o < j && !(!1 === d.call(b[o], o, b[o++])););
                return b
            },
            trim: A ?
            function(b) {
                return null == b ? "": A.call(b)
            }: function(b) {
                return null == b ? "": b.toString().replace(g, "").replace(i, "")
            },
            makeArray: function(b, d) {
                var a = d || [];
                if (null != b) {
                    var l = f.type(b);
                    null == b.length || "string" === l || "function" === l || "regexp" === l || f.isWindow(b) ? z.call(a, b) : f.merge(a, b)
                }
                return a
            },
            inArray: function(b, f) {
                if (!f) return - 1;
                if (wa) return wa.call(f, b);
                for (var d = 0,
                a = f.length; d < a; d++) if (f[d] === b) return d;
                return - 1
            },
            merge: function(b, f) {
                var d = b.length,
                a = 0;
                if ("number" === typeof f.length) for (var l = f.length; a < l; a++) b[d++] = f[a];
                else for (; f[a] !== c;) b[d++] = f[a++];
                b.length = d;
                return b
            },
            grep: function(b, f, d) {
                for (var a = [], l, d = !!d, c = 0, o = b.length; c < o; c++) l = !!f(b[c], c),
                d !== l && a.push(b[c]);
                return a
            },
            map: function(b, d, a) {
                var l, o, j = [],
                q = 0,
                e = b.length;
                if (b instanceof f || e !== c && "number" === typeof e && (0 < e && b[0] && b[e - 1] || 0 === e || f.isArray(b))) for (; q < e; q++) l = d(b[q], q, a),
                null != l && (j[j.length] = l);
                else for (o in b) l = d(b[o], o, a),
                null != l && (j[j.length] = l);
                return j.concat.apply([], j)
            },
            guid: 1,
            proxy: function(b, d) {
                if ("string" === typeof d) var a = b[d],
                d = b,
                b = a;
                if (!f.isFunction(b)) return c;
                var l = v.call(arguments, 2),
                a = function() {
                    return b.apply(d, l.concat(v.call(arguments)))
                };
                a.guid = b.guid = b.guid || a.guid || f.guid++;
                return a
            },
            access: function(b, d, a, l, o, j) {
                var q = b.length;
                if ("object" === typeof d) {
                    for (var e in d) f.access(b, e, d[e], l, o, a);
                    return b
                }
                if (a !== c) {
                    l = !j && l && f.isFunction(a);
                    for (e = 0; e < q; e++) o(b[e], d, l ? a.call(b[e], e, o(b[e], d)) : a, j);
                    return b
                }
                return q ? o(b[0], d) : c
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(b) {
                b = b.toLowerCase();
                b = p.exec(b) || r.exec(b) || w.exec(b) || 0 > b.indexOf("compatible") && y.exec(b) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function b(f, d) {
                    return new b.fn.init(f, d)
                }
                f.extend(!0, b, this);
                b.superclass = this;
                b.fn = b.prototype = this();
                b.fn.constructor = b;
                b.sub = this.sub;
                b.fn.init = function(a, l) {
                    l && l instanceof f && !(l instanceof b) && (l = b(l));
                    return f.fn.init.call(this, a, l, d)
                };
                b.fn.init.prototype = b.fn;
                var d = b(t);
                return b
            },
            browser: {}
        });
        f.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","),
        function(b, f) {
            xa["[object " + f + "]"] = f.toLowerCase()
        });
        W = f.uaMatch(W);
        W.browser && (f.browser[W.browser] = !0, f.browser.version = W.version);
        f.browser.webkit && (f.browser.safari = !0);
        e.test(" ") && (g = /^[\s\xA0]+/, i = /[\s\xA0]+$/);
        j = f(t);
        t.addEventListener ? S = function() {
            t.removeEventListener("DOMContentLoaded", S, !1);
            f.ready()
        }: t.attachEvent && (S = function() {
            "complete" === t.readyState && (t.detachEvent("onreadystatechange", S), f.ready())
        });
        return f
    } (),
    la = "done,fail,isResolved,isRejected,promise,then,always,pipe".split(","),
    ya = [].slice;
    d.extend({
        _Deferred: function() {
            var b = [],
            f,
            a,
            c,
            j = {
                done: function() {
                    if (!c) {
                        var a = arguments,
                        l, e, g, i, h;
                        f && (h = f, f = 0);
                        for (l = 0, e = a.length; l < e; l++) g = a[l],
                        i = d.type(g),
                        "array" === i ? j.done.apply(j, g) : "function" === i && b.push(g);
                        h && j.resolveWith(h[0], h[1])
                    }
                    return this
                },
                resolveWith: function(d, j) {
                    if (!c && !f && !a) {
                        j = j || [];
                        a = 1;
                        try {
                            for (; b[0];) b.shift().apply(d, j)
                        } finally {
                            f = [d, j],
                            a = 0
                        }
                    }
                    return this
                },
                resolve: function() {
                    j.resolveWith(this, arguments);
                    return this
                },
                isResolved: function() {
                    return ! (!a && !f)
                },
                cancel: function() {
                    c = 1;
                    b = [];
                    return this
                }
            };
            return j
        },
        Deferred: function(b) {
            var f = d._Deferred(),
            a = d._Deferred(),
            c;
            d.extend(f, {
                then: function(b, d) {
                    f.done(b).fail(d);
                    return this
                },
                always: function() {
                    return f.done.apply(f, arguments).fail.apply(this, arguments)
                },
                fail: a.done,
                rejectWith: a.resolveWith,
                reject: a.resolve,
                isRejected: a.isResolved,
                pipe: function(b, a) {
                    return d.Deferred(function(l) {
                        d.each({
                            done: [b, "resolve"],
                            fail: [a, "reject"]
                        },
                        function(b, a) {
                            var c = a[0],
                            o = a[1],
                            j;
                            if (d.isFunction(c)) f[b](function() {
                                if ((j = c.apply(this, arguments)) && d.isFunction(j.promise)) j.promise().then(l.resolve, l.reject);
                                else l[o + "With"](this === f ? l: this, [j])
                            });
                            else f[b](l[o])
                        })
                    }).promise()
                },
                promise: function(b) {
                    if (null == b) {
                        if (c) return c;
                        c = b = {}
                    }
                    for (var d = la.length; d--;) b[la[d]] = f[la[d]];
                    return b
                }
            });
            f.done(a.cancel).fail(f.cancel);
            delete f.cancel;
            b && b.call(f, f);
            return f
        },
        when: function(b) {
            function f(b) {
                return function(f) {
                    a[b] = 1 < arguments.length ? ya.call(arguments, 0) : f; --q || e.resolveWith(e, ya.call(a, 0))
                }
            }
            var a = arguments,
            c = 0,
            j = a.length,
            q = j,
            e = 1 >= j && b && d.isFunction(b.promise) ? b: d.Deferred();
            if (1 < j) {
                for (; c < j; c++) a[c] && d.isFunction(a[c].promise) ? a[c].promise().then(f(c), e.reject) : --q;
                q || e.resolveWith(e, a)
            } else e !== b && e.resolveWith(e, j ? [b] : []);
            return e.promise()
        }
    });
    d.support = function() {
        var b = t.createElement("div"),
        f = t.documentElement,
        a,
        c,
        j,
        q,
        e,
        g;
        b.setAttribute("className", "t");
        b.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        a = b.getElementsByTagName("*");
        c = b.getElementsByTagName("a")[0];
        if (!a || !a.length || !c) return {};
        j = t.createElement("select");
        q = j.appendChild(t.createElement("option"));
        a = b.getElementsByTagName("input")[0];
        e = {
            leadingWhitespace: 3 === b.firstChild.nodeType,
            tbody: !b.getElementsByTagName("tbody").length,
            htmlSerialize: !!b.getElementsByTagName("link").length,
            style: /top/.test(c.getAttribute("style")),
            hrefNormalized: "/a" === c.getAttribute("href"),
            opacity: /^0.55$/.test(c.style.opacity),
            cssFloat: !!c.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: q.selected,
            getSetAttribute: "t" !== b.className,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        };
        a.checked = !0;
        e.noCloneChecked = a.cloneNode(!0).checked;
        j.disabled = !0;
        e.optDisabled = !q.disabled;
        try {
            delete b.test
        } catch(i) {
            e.deleteExpando = !1
        } ! b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick",
        function() {
            e.noCloneEvent = !1
        }), b.cloneNode(!0).fireEvent("onclick"));
        a = t.createElement("input");
        a.value = "t";
        a.setAttribute("type", "radio");
        e.radioValue = "t" === a.value;
        a.setAttribute("checked", "checked");
        b.appendChild(a);
        c = t.createDocumentFragment();
        c.appendChild(b.firstChild);
        e.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.innerHTML = "";
        b.style.width = b.style.paddingLeft = "1px";
        j = t.getElementsByTagName("body")[0];
        c = t.createElement(j ? "div": "body");
        q = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        j && d.extend(q, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (g in q) c.style[g] = q[g];
        c.appendChild(b);
        f = j || f;
        f.insertBefore(c, f.firstChild);
        e.appendChecked = a.checked;
        e.boxModel = 2 === b.offsetWidth;
        "zoom" in b.style && (b.style.display = "inline", b.style.zoom = 1, e.inlineBlockNeedsLayout = 2 === b.offsetWidth, b.style.display = "", b.innerHTML = "<div style='width:4px;'></div>", e.shrinkWrapBlocks = 2 !== b.offsetWidth);
        b.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        j = b.getElementsByTagName("td");
        a = 0 === j[0].offsetHeight;
        j[0].style.display = "";
        j[1].style.display = "none";
        e.reliableHiddenOffsets = a && 0 === j[0].offsetHeight;
        b.innerHTML = "";
        t.defaultView && t.defaultView.getComputedStyle && (a = t.createElement("div"), a.style.width = "0", a.style.marginRight = "0", b.appendChild(a), e.reliableMarginRight = 0 === (parseInt((t.defaultView.getComputedStyle(a, null) || {
            marginRight: 0
        }).marginRight, 10) || 0));
        c.innerHTML = "";
        f.removeChild(c);
        if (b.attachEvent) for (g in {
            submit: 1,
            change: 1,
            focusin: 1
        }) f = "on" + g,
        a = f in b,
        a || (b.setAttribute(f, "return;"), a = "function" === typeof b[f]),
        e[g + "Bubbles"] = a;
        c = c = j = q = j = a = b = a = null;
        return e
    } ();
    d.boxModel = d.support.boxModel;
    var Va = /^(?:\{.*\}|\[.*\])$/,
    Ua = /([A-Z])/g;
    d.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            b = b.nodeType ? d.cache[b[d.expando]] : b[d.expando];
            return !! b && !h(b)
        },
        data: function(b, f, a, o) {
            if (d.acceptData(b)) {
                var j = d.expando,
                e = "string" === typeof f,
                g = b.nodeType,
                i = g ? d.cache: b,
                h = g ? b[d.expando] : b[d.expando] && d.expando;
                if (h && (!o || !h || !i[h] || i[h][j]) || !(e && a === c)) {
                    h || (g ? b[d.expando] = h = ++d.uuid: h = d.expando);
                    i[h] || (i[h] = {},
                    g || (i[h].toJSON = d.noop));
                    if ("object" === typeof f || "function" === typeof f) o ? i[h][j] = d.extend(i[h][j], f) : i[h] = d.extend(i[h], f);
                    b = i[h];
                    o && (b[j] || (b[j] = {}), b = b[j]);
                    a !== c && (b[d.camelCase(f)] = a);
                    if ("events" === f && !b[f]) return b[j] && b[j].events;
                    e ? (a = b[f], null == a && (a = b[d.camelCase(f)])) : a = b;
                    return a
                }
            }
        },
        removeData: function(b, f, a) {
            if (d.acceptData(b)) {
                var c, j = d.expando,
                e = b.nodeType,
                g = e ? d.cache: b,
                i = e ? b[d.expando] : d.expando;
                if (g[i]) {
                    if (f && (c = a ? g[i][j] : g[i])) if (c[f] || (f = d.camelCase(f)), delete c[f], !h(c)) return;
                    if (a && (delete g[i][j], !h(g[i]))) return;
                    f = g[i][j];
                    d.support.deleteExpando || !g.setInterval ? delete g[i] : g[i] = null;
                    f ? (g[i] = {},
                    e || (g[i].toJSON = d.noop), g[i][j] = f) : e && (d.support.deleteExpando ? delete b[d.expando] : b.removeAttribute ? b.removeAttribute(d.expando) : b[d.expando] = null)
                }
            }
        },
        _data: function(b, f, a) {
            return d.data(b, f, a, !0)
        },
        acceptData: function(b) {
            if (b.nodeName) {
                var f = d.noData[b.nodeName.toLowerCase()];
                if (f) return ! (!0 === f || b.getAttribute("classid") !== f)
            }
            return ! 0
        }
    });
    d.fn.extend({
        data: function(b, f) {
            var a = null;
            if ("undefined" === typeof b) {
                if (this.length && (a = d.data(this[0]), 1 === this[0].nodeType)) for (var o = this[0].attributes, j, q = 0, g = o.length; q < g; q++) j = o[q].name,
                0 === j.indexOf("data-") && (j = d.camelCase(j.substring(5)), e(this[0], j, a[j]));
                return a
            }
            if ("object" === typeof b) return this.each(function() {
                d.data(this, b)
            });
            var i = b.split(".");
            i[1] = i[1] ? "." + i[1] : "";
            return f === c ? (a = this.triggerHandler("getData" + i[1] + "!", [i[0]]), a === c && this.length && (a = d.data(this[0], b), a = e(this[0], b, a)), a === c && i[1] ? this.data(i[0]) : a) : this.each(function() {
                var a = d(this),
                l = [i[0], f];
                a.triggerHandler("setData" + i[1] + "!", l);
                d.data(this, b, f);
                a.triggerHandler("changeData" + i[1] + "!", l)
            })
        },
        removeData: function(b) {
            return this.each(function() {
                d.removeData(this, b)
            })
        }
    });
    d.extend({
        _mark: function(b, f) {
            b && (f = (f || "fx") + "mark", d.data(b, f, (d.data(b, f, c, !0) || 0) + 1, !0))
        },
        _unmark: function(b, f, a) { ! 0 !== b && (a = f, f = b, b = !1);
            if (f) {
                var a = a || "fx",
                o = a + "mark"; (b = b ? 0 : (d.data(f, o, c, !0) || 1) - 1) ? d.data(f, o, b, !0) : (d.removeData(f, o, !0), k(f, a, "mark"))
            }
        },
        queue: function(b, f, a) {
            if (b) {
                var f = (f || "fx") + "queue",
                o = d.data(b, f, c, !0);
                a && (!o || d.isArray(a) ? o = d.data(b, f, d.makeArray(a), !0) : o.push(a));
                return o || []
            }
        },
        dequeue: function(b, f) {
            var f = f || "fx",
            a = d.queue(b, f),
            c = a.shift();
            "inprogress" === c && (c = a.shift());
            c && ("fx" === f && a.unshift("inprogress"), c.call(b,
            function() {
                d.dequeue(b, f)
            }));
            a.length || (d.removeData(b, f + "queue", !0), k(b, f, "queue"))
        }
    });
    d.fn.extend({
        queue: function(b, f) {
            "string" !== typeof b && (f = b, b = "fx");
            return f === c ? d.queue(this[0], b) : this.each(function() {
                var a = d.queue(this, b, f);
                "fx" === b && "inprogress" !== a[0] && d.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                d.dequeue(this, b)
            })
        },
        delay: function(b, f) {
            b = d.fx ? d.fx.speeds[b] || b: b;
            f = f || "fx";
            return this.queue(f,
            function() {
                var a = this;
                setTimeout(function() {
                    d.dequeue(a, f)
                },
                b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b) {
            function f() {--e || a.resolveWith(o, [o])
            }
            "string" !== typeof b && (b = c);
            for (var b = b || "fx",
            a = d.Deferred(), o = this, j = o.length, e = 1, g = b + "defer", i = b + "queue", b = b + "mark", h; j--;) if (h = d.data(o[j], g, c, !0) || (d.data(o[j], i, c, !0) || d.data(o[j], b, c, !0)) && d.data(o[j], g, d._Deferred(), !0)) e++,
            h.done(f);
            f();
            return a.promise()
        }
    });
    var za = /[\n\t\r]/g,
    ma = /\s+/,
    hb = /\r/g,
    ib = /^(?:button|input)$/i,
    jb = /^(?:button|input|object|select|textarea)$/i,
    kb = /^a(?:rea)?$/i,
    Aa = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    J, Ba;
    d.fn.extend({
        attr: function(b, f) {
            return d.access(this, b, f, !0, d.attr)
        },
        removeAttr: function(b) {
            return this.each(function() {
                d.removeAttr(this, b)
            })
        },
        prop: function(b, f) {
            return d.access(this, b, f, !0, d.prop)
        },
        removeProp: function(b) {
            b = d.propFix[b] || b;
            return this.each(function() {
                try {
                    this[b] = c,
                    delete this[b]
                } catch(f) {}
            })
        },
        addClass: function(b) {
            var f, a, c, j, e, g, i;
            if (d.isFunction(b)) return this.each(function(f) {
                d(this).addClass(b.call(this, f, this.className))
            });
            if (b && "string" === typeof b) {
                f = b.split(ma);
                for (a = 0, c = this.length; a < c; a++) if (j = this[a], 1 === j.nodeType) if (!j.className && 1 === f.length) j.className = b;
                else {
                    e = " " + j.className + " ";
                    for (g = 0, i = f.length; g < i; g++)~e.indexOf(" " + f[g] + " ") || (e += f[g] + " ");
                    j.className = d.trim(e)
                }
            }
            return this
        },
        removeClass: function(b) {
            var f, a, o, j, e, g, i;
            if (d.isFunction(b)) return this.each(function(f) {
                d(this).removeClass(b.call(this, f, this.className))
            });
            if (b && "string" === typeof b || b === c) {
                f = (b || "").split(ma);
                for (a = 0, o = this.length; a < o; a++) if (j = this[a], 1 === j.nodeType && j.className) if (b) {
                    e = (" " + j.className + " ").replace(za, " ");
                    for (g = 0, i = f.length; g < i; g++) e = e.replace(" " + f[g] + " ", " ");
                    j.className = d.trim(e)
                } else j.className = ""
            }
            return this
        },
        toggleClass: function(b, f) {
            var a = typeof b,
            c = "boolean" === typeof f;
            return d.isFunction(b) ? this.each(function(a) {
                d(this).toggleClass(b.call(this, a, this.className, f), f)
            }) : this.each(function() {
                if ("string" === a) for (var j, e = 0,
                g = d(this), i = f, h = b.split(ma); j = h[e++];) i = c ? i: !g.hasClass(j),
                g[i ? "addClass": "removeClass"](j);
                else if ("undefined" === a || "boolean" === a) this.className && d._data(this, "__className__", this.className),
                this.className = this.className || !1 === b ? "": d._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            for (var b = " " + b + " ",
            f = 0,
            a = this.length; f < a; f++) if (1 === this[f].nodeType && -1 < (" " + this[f].className + " ").replace(za, " ").indexOf(b)) return ! 0;
            return ! 1
        },
        val: function(b) {
            var f, a, o = this[0];
            if (!arguments.length) {
                if (o) {
                    if ((f = d.valHooks[o.nodeName.toLowerCase()] || d.valHooks[o.type]) && "get" in f && (a = f.get(o, "value")) !== c) return a;
                    a = o.value;
                    return "string" === typeof a ? a.replace(hb, "") : null == a ? "": a
                }
                return c
            }
            var j = d.isFunction(b);
            return this.each(function(a) {
                var l = d(this);
                if (1 === this.nodeType && (a = j ? b.call(this, a, l.val()) : b, null == a ? a = "": "number" === typeof a ? a += "": d.isArray(a) && (a = d.map(a,
                function(b) {
                    return null == b ? "": b + ""
                })), f = d.valHooks[this.nodeName.toLowerCase()] || d.valHooks[this.type], !f || !("set" in f) || f.set(this, a, "value") === c)) this.value = a
            })
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var f = b.attributes.value;
                    return ! f || f.specified ? b.value: b.text
                }
            },
            select: {
                get: function(b) {
                    var f, a = b.selectedIndex,
                    c = [],
                    j = b.options,
                    b = "select-one" === b.type;
                    if (0 > a) return null;
                    for (var e = b ? a: 0, g = b ? a + 1 : j.length; e < g; e++) if (f = j[e], f.selected && (d.support.optDisabled ? !f.disabled: null === f.getAttribute("disabled")) && (!f.parentNode.disabled || !d.nodeName(f.parentNode, "optgroup"))) {
                        f = d(f).val();
                        if (b) return f;
                        c.push(f)
                    }
                    return b && !c.length && j.length ? d(j[a]).val() : c
                },
                set: function(b, f) {
                    var a = d.makeArray(f);
                    d(b).find("option").each(function() {
                        this.selected = 0 <= d.inArray(d(this).val(), a)
                    });
                    a.length || (b.selectedIndex = -1);
                    return a
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function(b, f, a, o) {
            var j = b.nodeType;
            if (!b || 3 === j || 8 === j || 2 === j) return c;
            if (o && f in d.attrFn) return d(b)[f](a);
            if (! ("getAttribute" in b)) return d.prop(b, f, a);
            var e, g;
            if (o = 1 !== j || !d.isXMLDoc(b)) f = d.attrFix[f] || f,
            (g = d.attrHooks[f]) || (Aa.test(f) ? g = Ba: J && (g = J));
            if (a !== c) {
                if (null === a) return d.removeAttr(b, f),
                c;
                if (g && "set" in g && o && (e = g.set(b, a, f)) !== c) return e;
                b.setAttribute(f, "" + a);
                return a
            }
            if (g && "get" in g && o && null !== (e = g.get(b, f))) return e;
            e = b.getAttribute(f);
            return null === e ? c: e
        },
        removeAttr: function(b, f) {
            var a;
            if (1 === b.nodeType && (f = d.attrFix[f] || f, d.attr(b, f, ""), b.removeAttribute(f), Aa.test(f) && (a = d.propFix[f] || f) in b)) b[a] = !1
        },
        attrHooks: {
            type: {
                set: function(b, f) {
                    if (ib.test(b.nodeName) && b.parentNode) d.error("type property can't be changed");
                    else if (!d.support.radioValue && "radio" === f && d.nodeName(b, "input")) {
                        var a = b.value;
                        b.setAttribute("type", f);
                        a && (b.value = a);
                        return f
                    }
                }
            },
            value: {
                get: function(b, f) {
                    return J && d.nodeName(b, "button") ? J.get(b, f) : f in b ? b.value: null
                },
                set: function(b, f, a) {
                    if (J && d.nodeName(b, "button")) return J.set(b, f, a);
                    b.value = f
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, f, a) {
            var o = b.nodeType;
            if (!b || 3 === o || 8 === o || 2 === o) return c;
            var j, e;
            if (1 !== o || !d.isXMLDoc(b)) f = d.propFix[f] || f,
            e = d.propHooks[f];
            return a !== c ? e && "set" in e && (j = e.set(b, a, f)) !== c ? j: b[f] = a: e && "get" in e && null !== (j = e.get(b, f)) ? j: b[f]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var f = b.getAttributeNode("tabindex");
                    return f && f.specified ? parseInt(f.value, 10) : jb.test(b.nodeName) || kb.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    d.attrHooks.tabIndex = d.propHooks.tabIndex;
    Ba = {
        get: function(b, f) {
            var a;
            return ! 0 === d.prop(b, f) || (a = b.getAttributeNode(f)) && !1 !== a.nodeValue ? f.toLowerCase() : c
        },
        set: function(b, f, a) { ! 1 === f ? d.removeAttr(b, a) : (f = d.propFix[a] || a, f in b && (b[f] = !0), b.setAttribute(a, a.toLowerCase()));
            return a
        }
    };
    d.support.getSetAttribute || (J = d.valHooks.button = {
        get: function(b, a) {
            var d;
            return (d = b.getAttributeNode(a)) && "" !== d.nodeValue ? d.nodeValue: c
        },
        set: function(b, a, d) {
            var c = b.getAttributeNode(d);
            c || (c = t.createAttribute(d), b.setAttributeNode(c));
            return c.nodeValue = a + ""
        }
    },
    d.each(["width", "height"],
    function(b, a) {
        d.attrHooks[a] = d.extend(d.attrHooks[a], {
            set: function(b, d) {
                if ("" === d) return b.setAttribute(a, "auto"),
                d
            }
        })
    }));
    d.support.hrefNormalized || d.each(["href", "src", "width", "height"],
    function(b, a) {
        d.attrHooks[a] = d.extend(d.attrHooks[a], {
            get: function(b) {
                b = b.getAttribute(a, 2);
                return null === b ? c: b
            }
        })
    });
    d.support.style || (d.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function(b, a) {
            return b.style.cssText = "" + a
        }
    });
    d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {
        get: function(b) {
            if (b = b.parentNode) b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex;
            return null
        }
    }));
    d.support.checkOn || d.each(["radio", "checkbox"],
    function() {
        d.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on": b.value
            }
        }
    });
    d.each(["radio", "checkbox"],
    function() {
        d.valHooks[this] = d.extend(d.valHooks[this], {
            set: function(b, a) {
                if (d.isArray(a)) return b.checked = 0 <= d.inArray(d(b).val(), a)
            }
        })
    });
    var fa = /\.(.*)$/,
    na = /^(?:textarea|input|select)$/i,
    Wa = /\./g,
    Xa = / /g,
    lb = /[^\w\s.|`]/g,
    mb = function(b) {
        return b.replace(lb, "\\$&")
    };
    d.event = {
        add: function(b, a, l, o) {
            if (! (3 === b.nodeType || 8 === b.nodeType)) {
                if (!1 === l) l = n;
                else if (!l) return;
                var j, e;
                l.handler && (j = l, l = j.handler);
                l.guid || (l.guid = d.guid++);
                if (e = d._data(b)) {
                    var g = e.events,
                    i = e.handle;
                    g || (e.events = g = {});
                    i || (e.handle = i = function(b) {
                        return "undefined" !== typeof d && (!b || d.event.triggered !== b.type) ? d.event.handle.apply(i.elem, arguments) : c
                    });
                    i.elem = b;
                    for (var a = a.split(" "), h, k = 0, m; h = a[k++];) {
                        e = j ? d.extend({},
                        j) : {
                            handler: l,
                            data: o
                        }; - 1 < h.indexOf(".") ? (m = h.split("."), h = m.shift(), e.namespace = m.slice(0).sort().join(".")) : (m = [], e.namespace = "");
                        e.type = h;
                        e.guid || (e.guid = l.guid);
                        var s = g[h],
                        u = d.event.special[h] || {};
                        if (!s && (s = g[h] = [], !u.setup || !1 === u.setup.call(b, o, m, i))) b.addEventListener ? b.addEventListener(h, i, !1) : b.attachEvent && b.attachEvent("on" + h, i);
                        u.add && (u.add.call(b, e), e.handler.guid || (e.handler.guid = l.guid));
                        s.push(e);
                        d.event.global[h] = !0
                    }
                    b = null
                }
            }
        },
        global: {},
        remove: function(b, a, l, e) {
            if (! (3 === b.nodeType || 8 === b.nodeType)) { ! 1 === l && (l = n);
                var j, q, g = 0,
                i, h, k, m, s, u, p = d.hasData(b) && d._data(b),
                r = p && p.events;
                if (p && r) if (a && a.type && (l = a.handler, a = a.type), !a || "string" === typeof a && "." === a.charAt(0)) for (j in a = a || "", r) d.event.remove(b, j + a);
                else {
                    for (a = a.split(" "); j = a[g++];) if (m = j, i = 0 > j.indexOf("."), h = [], i || (h = j.split("."), j = h.shift(), k = RegExp("(^|\\.)" + d.map(h.slice(0).sort(), mb).join("\\.(?:.*\\.)?") + "(\\.|$)")), s = r[j]) if (l) {
                        m = d.event.special[j] || {};
                        for (q = e || 0; q < s.length; q++) if (u = s[q], l.guid === u.guid) {
                            if (i || k.test(u.namespace)) null == e && s.splice(q--, 1),
                            m.remove && m.remove.call(b, u);
                            if (null != e) break
                        }
                        if (0 === s.length || null != e && 1 === s.length)(!m.teardown || !1 === m.teardown.call(b, h)) && d.removeEvent(b, j, p.handle),
                        delete r[j]
                    } else for (q = 0; q < s.length; q++) if (u = s[q], i || k.test(u.namespace)) d.event.remove(b, m, u.handler, q),
                    s.splice(q--, 1);
                    if (d.isEmptyObject(r)) {
                        if (a = p.handle) a.elem = null;
                        delete p.events;
                        delete p.handle;
                        d.isEmptyObject(p) && d.removeData(b, c, !0)
                    }
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(b, f, l, e) {
            var j = b.type || b,
            q = [],
            g;
            0 <= j.indexOf("!") && (j = j.slice(0, -1), g = !0);
            0 <= j.indexOf(".") && (q = j.split("."), j = q.shift(), q.sort());
            if (l && !d.event.customEvent[j] || d.event.global[j]) {
                b = "object" === typeof b ? b[d.expando] ? b: new d.Event(j, b) : new d.Event(j);
                b.type = j;
                b.exclusive = g;
                b.namespace = q.join(".");
                b.namespace_re = RegExp("(^|\\.)" + q.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (e || !l) b.preventDefault(),
                b.stopPropagation();
                if (l) {
                    if (! (3 === l.nodeType || 8 === l.nodeType)) {
                        b.result = c;
                        b.target = l;
                        f = null != f ? d.makeArray(f) : [];
                        f.unshift(b);
                        q = l;
                        e = 0 > j.indexOf(":") ? "on" + j: "";
                        do g = d._data(q, "handle"),
                        b.currentTarget = q,
                        g && g.apply(q, f),
                        e && d.acceptData(q) && q[e] && !1 === q[e].apply(q, f) && (b.result = !1, b.preventDefault()),
                        q = q.parentNode || q.ownerDocument || q === b.target.ownerDocument && a;
                        while (q && !b.isPropagationStopped());
                        if (!b.isDefaultPrevented()) {
                            var i, q = d.event.special[j] || {};
                            if ((!q._default || !1 === q._default.call(l.ownerDocument, b)) && !("click" === j && d.nodeName(l, "a")) && d.acceptData(l)) {
                                try {
                                    e && l[j] && ((i = l[e]) && (l[e] = null), d.event.triggered = j, l[j]())
                                } catch(h) {}
                                i && (l[e] = i);
                                d.event.triggered = c
                            }
                        }
                        return b.result
                    }
                } else d.each(d.cache,
                function() {
                    var a = this[d.expando];
                    a && a.events && a.events[j] && d.event.trigger(b, f, a.handle.elem)
                })
            }
        },
        handle: function(b) {
            var b = d.event.fix(b || a.event),
            f = ((d._data(this, "events") || {})[b.type] || []).slice(0),
            l = !b.exclusive && !b.namespace,
            e = Array.prototype.slice.call(arguments, 0);
            e[0] = b;
            b.currentTarget = this;
            for (var j = 0,
            g = f.length; j < g; j++) {
                var i = f[j];
                if (l || b.namespace_re.test(i.namespace)) if (b.handler = i.handler, b.data = i.data, b.handleObj = i, i = i.handler.apply(this, e), i !== c && (b.result = i, !1 === i && (b.preventDefault(), b.stopPropagation())), b.isImmediatePropagationStopped()) break
            }
            return b.result
        },
        props: "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,layerX,layerY,metaKey,newValue,offsetX,offsetY,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(","),
        fix: function(b) {
            if (b[d.expando]) return b;
            for (var a = b,
            b = d.Event(a), l = this.props.length, e; l;) e = this.props[--l],
            b[e] = a[e];
            b.target || (b.target = b.srcElement || t);
            3 === b.target.nodeType && (b.target = b.target.parentNode); ! b.relatedTarget && b.fromElement && (b.relatedTarget = b.fromElement === b.target ? b.toElement: b.fromElement);
            null == b.pageX && null != b.clientX && (l = b.target.ownerDocument || t, a = l.documentElement, l = l.body, b.pageX = b.clientX + (a && a.scrollLeft || l && l.scrollLeft || 0) - (a && a.clientLeft || l && l.clientLeft || 0), b.pageY = b.clientY + (a && a.scrollTop || l && l.scrollTop || 0) - (a && a.clientTop || l && l.clientTop || 0));
            if (null == b.which && (null != b.charCode || null != b.keyCode)) b.which = null != b.charCode ? b.charCode: b.keyCode; ! b.metaKey && b.ctrlKey && (b.metaKey = b.ctrlKey); ! b.which && b.button !== c && (b.which = b.button & 1 ? 1 : b.button & 2 ? 3 : b.button & 4 ? 2 : 0);
            return b
        },
        guid: 1E8,
        proxy: d.proxy,
        special: {
            ready: {
                setup: d.bindReady,
                teardown: d.noop
            },
            live: {
                add: function(b) {
                    d.event.add(this, p(b.origType, b.selector), d.extend({},
                    b, {
                        handler: m,
                        guid: b.handler.guid
                    }))
                },
                remove: function(b) {
                    d.event.remove(this, p(b.origType, b.selector), b)
                }
            },
            beforeunload: {
                setup: function(b, a, c) {
                    d.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(b, a) {
                    this.onbeforeunload === a && (this.onbeforeunload = null)
                }
            }
        }
    };
    d.removeEvent = t.removeEventListener ?
    function(b, a, d) {
        b.removeEventListener && b.removeEventListener(a, d, !1)
    }: function(b, a, d) {
        b.detachEvent && b.detachEvent("on" + a, d)
    };
    d.Event = function(b, a) {
        if (!this.preventDefault) return new d.Event(b, a);
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? g: n) : this.type = b;
        a && d.extend(this, a);
        this.timeStamp = d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = g;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = g;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g;
            this.stopPropagation()
        },
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n
    };
    var Ca = function(b) {
        var a = b.relatedTarget,
        c = !1,
        e = b.type;
        b.type = b.data;
        a !== this && (a && (c = d.contains(this, a)), c || (d.event.handle.apply(this, arguments), b.type = e))
    },
    Da = function(b) {
        b.type = b.data;
        d.event.handle.apply(this, arguments)
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(b, a) {
        d.event.special[b] = {
            setup: function(c) {
                d.event.add(this, a, c && c.selector ? Da: Ca, b)
            },
            teardown: function(b) {
                d.event.remove(this, a, b && b.selector ? Da: Ca)
            }
        }
    });
    d.support.submitBubbles || (d.event.special.submit = {
        setup: function() {
            if (d.nodeName(this, "form")) return ! 1;
            d.event.add(this, "click.specialSubmit",
            function(b) {
                var a = b.target,
                c = d.nodeName(a, "input") || d.nodeName(a, "button") ? a.type: ""; ("submit" === c || "image" === c) && d(a).closest("form").length && i("submit", this, arguments)
            });
            d.event.add(this, "keypress.specialSubmit",
            function(b) {
                var a = b.target,
                c = d.nodeName(a, "input") || d.nodeName(a, "button") ? a.type: ""; ("text" === c || "password" === c) && d(a).closest("form").length && 13 === b.keyCode && i("submit", this, arguments)
            })
        },
        teardown: function() {
            d.event.remove(this, ".specialSubmit")
        }
    });
    if (!d.support.changeBubbles) {
        var X, Ea = function(b) {
            var a = d.nodeName(b, "input") ? b.type: "",
            c = b.value;
            "radio" === a || "checkbox" === a ? c = b.checked: "select-multiple" === a ? c = -1 < b.selectedIndex ? d.map(b.options,
            function(b) {
                return b.selected
            }).join("-") : "": d.nodeName(b, "select") && (c = b.selectedIndex);
            return c
        },
        $ = function(b, a) {
            var l = b.target,
            e, j;
            if (na.test(l.nodeName) && !l.readOnly && (e = d._data(l, "_change_data"), j = Ea(l), ("focusout" !== b.type || "radio" !== l.type) && d._data(l, "_change_data", j), !(e === c || j === e))) if (null != e || j) b.type = "change",
            b.liveFired = c,
            d.event.trigger(b, a, l)
        };
        d.event.special.change = {
            filters: {
                focusout: $,
                beforedeactivate: $,
                click: function(b) {
                    var a = b.target,
                    c = d.nodeName(a, "input") ? a.type: ""; ("radio" === c || "checkbox" === c || d.nodeName(a, "select")) && $.call(this, b)
                },
                keydown: function(b) {
                    var a = b.target,
                    c = d.nodeName(a, "input") ? a.type: ""; (13 === b.keyCode && !d.nodeName(a, "textarea") || 32 === b.keyCode && ("checkbox" === c || "radio" === c) || "select-multiple" === c) && $.call(this, b)
                },
                beforeactivate: function(b) {
                    b = b.target;
                    d._data(b, "_change_data", Ea(b))
                }
            },
            setup: function() {
                if ("file" === this.type) return ! 1;
                for (var b in X) d.event.add(this, b + ".specialChange", X[b]);
                return na.test(this.nodeName)
            },
            teardown: function() {
                d.event.remove(this, ".specialChange");
                return na.test(this.nodeName)
            }
        };
        X = d.event.special.change.filters;
        X.focus = X.beforeactivate
    }
    d.support.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(b, a) {
        function c(b) {
            var l = d.event.fix(b);
            l.type = a;
            l.originalEvent = {};
            d.event.trigger(l, null, l.target);
            l.isDefaultPrevented() && b.preventDefault()
        }
        var e = 0;
        d.event.special[a] = {
            setup: function() {
                0 === e++&&t.addEventListener(b, c, !0)
            },
            teardown: function() {
                0 === --e && t.removeEventListener(b, c, !0)
            }
        }
    });
    d.each(["bind", "one"],
    function(b, a) {
        d.fn[a] = function(b, e, j) {
            var g;
            if ("object" === typeof b) {
                for (var i in b) this[a](i, e, b[i], j);
                return this
            }
            if (2 === arguments.length || !1 === e) j = e,
            e = c;
            "one" === a ? (g = function(b) {
                d(this).unbind(b, g);
                return j.apply(this, arguments)
            },
            g.guid = j.guid || d.guid++) : g = j;
            if ("unload" === b && "one" !== a) this.one(b, e, j);
            else {
                i = 0;
                for (var h = this.length; i < h; i++) d.event.add(this[i], b, g, e)
            }
            return this
        }
    });
    d.fn.extend({
        unbind: function(b, a) {
            if ("object" === typeof b && !b.preventDefault) for (var c in b) this.unbind(c, b[c]);
            else {
                c = 0;
                for (var e = this.length; c < e; c++) d.event.remove(this[c], b, a)
            }
            return this
        },
        delegate: function(b, a, d, c) {
            return this.live(a, d, c, b)
        },
        undelegate: function(b, a, d) {
            return 0 === arguments.length ? this.unbind("live") : this.die(a, null, d, b)
        },
        trigger: function(b, a) {
            return this.each(function() {
                d.event.trigger(b, a, this)
            })
        },
        triggerHandler: function(b, a) {
            if (this[0]) return d.event.trigger(b, a, this[0], !0)
        },
        toggle: function(b) {
            var a = arguments,
            c = b.guid || d.guid++,
            e = 0,
            j = function(c) {
                var l = (d.data(this, "lastToggle" + b.guid) || 0) % e;
                d.data(this, "lastToggle" + b.guid, l + 1);
                c.preventDefault();
                return a[l].apply(this, arguments) || !1
            };
            for (j.guid = c; e < a.length;) a[e++].guid = c;
            return this.click(j)
        },
        hover: function(b, a) {
            return this.mouseenter(b).mouseleave(a || b)
        }
    });
    var oa = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    d.each(["live", "die"],
    function(b, a) {
        d.fn[a] = function(b, e, j, g) {
            var i = 0,
            h, m, k = g || this.selector,
            s = g ? this: d(this.context);
            if ("object" === typeof b && !b.preventDefault) {
                for (h in b) s[a](h, e, b[h], k);
                return this
            }
            if ("die" === a && !b && g && "." === g.charAt(0)) return s.unbind(g),
            this;
            if (!1 === e || d.isFunction(e)) j = e || n,
            e = c;
            for (b = (b || "").split(" "); null != (g = b[i++]);) if (h = fa.exec(g), m = "", h && (m = h[0], g = g.replace(fa, "")), "hover" === g) b.push("mouseenter" + m, "mouseleave" + m);
            else if (h = g, oa[g] ? (b.push(oa[g] + m), g += m) : g = (oa[g] || g) + m, "live" === a) {
                m = 0;
                for (var u = s.length; m < u; m++) d.event.add(s[m], "live." + p(g, k), {
                    data: e,
                    selector: k,
                    handler: j,
                    origType: g,
                    origHandler: j,
                    preType: h
                })
            } else s.unbind("live." + p(g, k), j);
            return this
        }
    });
    d.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error".split(","),
    function(b, a) {
        d.fn[a] = function(b, d) {
            null == d && (d = b, b = null);
            return 0 < arguments.length ? this.bind(a, b, d) : this.trigger(a)
        };
        d.attrFn && (d.attrFn[a] = !0)
    }); (function() {
        function b(b, a, d, f, c, e) {
            for (var c = 0,
            l = f.length; c < l; c++) {
                var j = f[c];
                if (j) {
                    for (var o = !1,
                    j = j[b]; j;) {
                        if (j.sizcache === d) {
                            o = f[j.sizset];
                            break
                        }
                        1 === j.nodeType && !e && (j.sizcache = d, j.sizset = c);
                        if (j.nodeName.toLowerCase() === a) {
                            o = j;
                            break
                        }
                        j = j[b]
                    }
                    f[c] = o
                }
            }
        }
        function a(b, d, f, c, e, l) {
            for (var e = 0,
            j = c.length; e < j; e++) {
                var o = c[e];
                if (o) {
                    for (var g = !1,
                    o = o[b]; o;) {
                        if (o.sizcache === f) {
                            g = c[o.sizset];
                            break
                        }
                        if (1 === o.nodeType) if (l || (o.sizcache = f, o.sizset = e), "string" !== typeof d) {
                            if (o === d) {
                                g = !0;
                                break
                            }
                        } else if (0 < m.filter(d, [o]).length) {
                            g = o;
                            break
                        }
                        o = o[b]
                    }
                    c[e] = g
                }
            }
        }
        var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        o = 0,
        j = Object.prototype.toString,
        g = !1,
        i = !0,
        h = /\\/g,
        n = /\W/; [0, 0].sort(function() {
            i = !1;
            return 0
        });
        var m = function(b, a, d, f) {
            var d = d || [],
            c = a = a || t;
            if (1 !== a.nodeType && 9 !== a.nodeType) return [];
            if (!b || "string" !== typeof b) return d;
            var o, g, i, h, q, n = !0,
            u = m.isXML(a),
            p = [],
            sa = b;
            do
            if (e.exec(""), o = e.exec(sa)) if (sa = o[3], p.push(o[1]), o[2]) {
                h = o[3];
                break
            }
            while (o);
            if (1 < p.length && s.exec(b)) if (2 === p.length && k.relative[p[0]]) g = v(p[0] + p[1], a);
            else for (g = k.relative[p[0]] ? [a] : m(p.shift(), a); p.length;) b = p.shift(),
            k.relative[b] && (b += p.shift()),
            g = v(b, g);
            else if (!f && 1 < p.length && 9 === a.nodeType && !u && k.match.ID.test(p[0]) && !k.match.ID.test(p[p.length - 1]) && (o = m.find(p.shift(), a, u), a = o.expr ? m.filter(o.expr, o.set)[0] : o.set[0]), a) {
                o = f ? {
                    expr: p.pop(),
                    set: r(f)
                }: m.find(p.pop(), 1 === p.length && ("~" === p[0] || "+" === p[0]) && a.parentNode ? a.parentNode: a, u);
                g = o.expr ? m.filter(o.expr, o.set) : o.set;
                for (0 < p.length ? i = r(g) : n = !1; p.length;) o = q = p.pop(),
                k.relative[q] ? o = p.pop() : q = "",
                null == o && (o = a),
                k.relative[q](i, o, u)
            } else i = [];
            i || (i = g);
            i || m.error(q || b);
            if ("[object Array]" === j.call(i)) if (n) if (a && 1 === a.nodeType) for (b = 0; null != i[b]; b++) i[b] && (!0 === i[b] || 1 === i[b].nodeType && m.contains(a, i[b])) && d.push(g[b]);
            else for (b = 0; null != i[b]; b++) i[b] && 1 === i[b].nodeType && d.push(g[b]);
            else d.push.apply(d, i);
            else r(i, d);
            h && (m(h, c, d, f), m.uniqueSort(d));
            return d
        };
        m.uniqueSort = function(b) {
            if (y && (g = i, b.sort(y), g)) for (var a = 1; a < b.length; a++) b[a] === b[a - 1] && b.splice(a--, 1);
            return b
        };
        m.matches = function(b, a) {
            return m(b, null, null, a)
        };
        m.matchesSelector = function(b, a) {
            return 0 < m(a, null, null, [b]).length
        };
        m.find = function(b, a, d) {
            var f;
            if (!b) return [];
            for (var c = 0,
            e = k.order.length; c < e; c++) {
                var l, j = k.order[c];
                if (l = k.leftMatch[j].exec(b)) {
                    var o = l[1];
                    l.splice(1, 1);
                    if ("\\" !== o.substr(o.length - 1) && (l[1] = (l[1] || "").replace(h, ""), f = k.find[j](l, a, d), null != f)) {
                        b = b.replace(k.match[j], "");
                        break
                    }
                }
            }
            f || (f = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName("*") : []);
            return {
                set: f,
                expr: b
            }
        };
        m.filter = function(b, a, d, f) {
            for (var e, l, j = b,
            o = [], g = a, i = a && a[0] && m.isXML(a[0]); b && a.length;) {
                for (var h in k.filter) if (null != (e = k.leftMatch[h].exec(b)) && e[2]) {
                    var q, n, s = k.filter[h];
                    n = e[1];
                    l = !1;
                    e.splice(1, 1);
                    if ("\\" !== n.substr(n.length - 1)) {
                        g === o && (o = []);
                        if (k.preFilter[h]) if (e = k.preFilter[h](e, g, d, o, f, i)) {
                            if (!0 === e) continue
                        } else l = q = !0;
                        if (e) for (var p = 0; null != (n = g[p]); p++) if (n) {
                            q = s(n, e, p, g);
                            var u = f ^ !!q;
                            d && null != q ? u ? l = !0 : g[p] = !1 : u && (o.push(n), l = !0)
                        }
                        if (q !== c) {
                            d || (g = o);
                            b = b.replace(k.match[h], "");
                            if (!l) return [];
                            break
                        }
                    }
                }
                if (b === j) if (null == l) m.error(b);
                else break;
                j = b
            }
            return g
        };
        m.error = function(b) {
            throw "Syntax error, unrecognized expression: " + b;
        };
        var k = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(b) {
                    return b.getAttribute("href")
                },
                type: function(b) {
                    return b.getAttribute("type")
                }
            },
            relative: {
                "+": function(b, a) {
                    var d = "string" === typeof a,
                    f = d && !n.test(a),
                    d = d && !f;
                    f && (a = a.toLowerCase());
                    for (var f = 0,
                    c = b.length,
                    e; f < c; f++) if (e = b[f]) {
                        for (; (e = e.previousSibling) && 1 !== e.nodeType;);
                        b[f] = d || e && e.nodeName.toLowerCase() === a ? e || !1 : e === a
                    }
                    d && m.filter(a, b, !0)
                },
                ">": function(b, a) {
                    var d, f = "string" === typeof a,
                    c = 0,
                    e = b.length;
                    if (f && !n.test(a)) for (a = a.toLowerCase(); c < e; c++) {
                        if (d = b[c]) d = d.parentNode,
                        b[c] = d.nodeName.toLowerCase() === a ? d: !1
                    } else {
                        for (; c < e; c++)(d = b[c]) && (b[c] = f ? d.parentNode: d.parentNode === a);
                        f && m.filter(a, b, !0)
                    }
                },
                "": function(d, c, e) {
                    var l, j = o++,
                    g = a;
                    "string" === typeof c && !n.test(c) && (l = c = c.toLowerCase(), g = b);
                    g("parentNode", c, j, d, l, e)
                },
                "~": function(d, c, e) {
                    var l, j = o++,
                    g = a;
                    "string" === typeof c && !n.test(c) && (l = c = c.toLowerCase(), g = b);
                    g("previousSibling", c, j, d, l, e)
                }
            },
            find: {
                ID: function(b, a, d) {
                    if ("undefined" !== typeof a.getElementById && !d) return (b = a.getElementById(b[1])) && b.parentNode ? [b] : []
                },
                NAME: function(b, a) {
                    if ("undefined" !== typeof a.getElementsByName) {
                        for (var d = [], f = a.getElementsByName(b[1]), c = 0, e = f.length; c < e; c++) f[c].getAttribute("name") === b[1] && d.push(f[c]);
                        return 0 === d.length ? null: d
                    }
                },
                TAG: function(b, a) {
                    if ("undefined" !== typeof a.getElementsByTagName) return a.getElementsByTagName(b[1])
                }
            },
            preFilter: {
                CLASS: function(b, a, d, f, c, e) {
                    b = " " + b[1].replace(h, "") + " ";
                    if (e) return b;
                    for (var e = 0,
                    l; null != (l = a[e]); e++) l && (c ^ (l.className && 0 <= (" " + l.className + " ").replace(/[\t\n\r]/g, " ").indexOf(b)) ? d || f.push(l) : d && (a[e] = !1));
                    return ! 1
                },
                ID: function(b) {
                    return b[1].replace(h, "")
                },
                TAG: function(b) {
                    return b[1].replace(h, "").toLowerCase()
                },
                CHILD: function(b) {
                    if ("nth" === b[1]) {
                        b[2] || m.error(b[0]);
                        b[2] = b[2].replace(/^\+|\s*/g, "");
                        var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === b[2] && "2n" || "odd" === b[2] && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2]);
                        b[2] = a[1] + (a[2] || 1) - 0;
                        b[3] = a[3] - 0
                    } else b[2] && m.error(b[0]);
                    b[0] = o++;
                    return b
                },
                ATTR: function(b, a, d, f, c, e) {
                    a = b[1] = b[1].replace(h, ""); ! e && k.attrMap[a] && (b[1] = k.attrMap[a]);
                    b[4] = (b[4] || b[5] || "").replace(h, "");
                    "~=" === b[2] && (b[4] = " " + b[4] + " ");
                    return b
                },
                PSEUDO: function(b, a, d, f, c) {
                    if ("not" === b[1]) if (1 < (e.exec(b[3]) || "").length || /^\w/.test(b[3])) b[3] = m(b[3], null, null, a);
                    else return b = m.filter(b[3], a, d, 1 ^ c),
                    d || f.push.apply(f, b),
                    !1;
                    else if (k.match.POS.test(b[0]) || k.match.CHILD.test(b[0])) return ! 0;
                    return b
                },
                POS: function(b) {
                    b.unshift(!0);
                    return b
                }
            },
            filters: {
                enabled: function(b) {
                    return ! 1 === b.disabled && "hidden" !== b.type
                },
                disabled: function(b) {
                    return ! 0 === b.disabled
                },
                checked: function(b) {
                    return ! 0 === b.checked
                },
                selected: function(b) {
                    b.parentNode && b.parentNode.selectedIndex;
                    return ! 0 === b.selected
                },
                parent: function(b) {
                    return !! b.firstChild
                },
                empty: function(b) {
                    return ! b.firstChild
                },
                has: function(b, a, d) {
                    return !! m(d[3], b).length
                },
                header: function(b) {
                    return /h\d/i.test(b.nodeName)
                },
                text: function(b) {
                    var a = b.getAttribute("type"),
                    d = b.type;
                    return "input" === b.nodeName.toLowerCase() && "text" === d && (a === d || null === a)
                },
                radio: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "radio" === b.type
                },
                checkbox: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "checkbox" === b.type
                },
                file: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "file" === b.type
                },
                password: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "password" === b.type
                },
                submit: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return ("input" === a || "button" === a) && "submit" === b.type
                },
                image: function(b) {
                    return "input" === b.nodeName.toLowerCase() && "image" === b.type
                },
                reset: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return ("input" === a || "button" === a) && "reset" === b.type
                },
                button: function(b) {
                    var a = b.nodeName.toLowerCase();
                    return "input" === a && "button" === b.type || "button" === a
                },
                input: function(b) {
                    return /input|select|textarea|button/i.test(b.nodeName)
                },
                focus: function(b) {
                    return b === b.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(b, a) {
                    return 0 === a
                },
                last: function(b, a, d, f) {
                    return a === f.length - 1
                },
                even: function(b, a) {
                    return 0 === a % 2
                },
                odd: function(b, a) {
                    return 1 === a % 2
                },
                lt: function(b, a, d) {
                    return a < d[3] - 0
                },
                gt: function(b, a, d) {
                    return a > d[3] - 0
                },
                nth: function(b, a, d) {
                    return d[3] - 0 === a
                },
                eq: function(b, a, d) {
                    return d[3] - 0 === a
                }
            },
            filter: {
                PSEUDO: function(b, a, d, f) {
                    var c = a[1],
                    e = k.filters[c];
                    if (e) return e(b, d, a, f);
                    if ("contains" === c) return 0 <= (b.textContent || b.innerText || m.getText([b]) || "").indexOf(a[3]);
                    if ("not" === c) {
                        a = a[3];
                        d = 0;
                        for (f = a.length; d < f; d++) if (a[d] === b) return ! 1;
                        return ! 0
                    }
                    m.error(c)
                },
                CHILD: function(b, a) {
                    var d = a[1],
                    f = b;
                    switch (d) {
                    case "only":
                    case "first":
                        for (; f = f.previousSibling;) if (1 === f.nodeType) return ! 1;
                        if ("first" === d) return ! 0;
                        f = b;
                    case "last":
                        for (; f = f.nextSibling;) if (1 === f.nodeType) return ! 1;
                        return ! 0;
                    case "nth":
                        var d = a[2],
                        c = a[3];
                        if (1 === d && 0 === c) return ! 0;
                        var e = a[0],
                        l = b.parentNode;
                        if (l && (l.sizcache !== e || !b.nodeIndex)) {
                            for (var j = 0,
                            f = l.firstChild; f; f = f.nextSibling) 1 === f.nodeType && (f.nodeIndex = ++j);
                            l.sizcache = e
                        }
                        f = b.nodeIndex - c;
                        return 0 === d ? 0 === f: 0 === f % d && 0 <= f / d
                    }
                },
                ID: function(b, a) {
                    return 1 === b.nodeType && b.getAttribute("id") === a
                },
                TAG: function(b, a) {
                    return "*" === a && 1 === b.nodeType || b.nodeName.toLowerCase() === a
                },
                CLASS: function(b, a) {
                    return - 1 < (" " + (b.className || b.getAttribute("class")) + " ").indexOf(a)
                },
                ATTR: function(b, a) {
                    var d = a[1],
                    d = k.attrHandle[d] ? k.attrHandle[d](b) : null != b[d] ? b[d] : b.getAttribute(d),
                    f = d + "",
                    c = a[2],
                    e = a[4];
                    return null == d ? "!=" === c: "=" === c ? f === e: "*=" === c ? 0 <= f.indexOf(e) : "~=" === c ? 0 <= (" " + f + " ").indexOf(e) : !e ? f && !1 !== d: "!=" === c ? f !== e: "^=" === c ? 0 === f.indexOf(e) : "$=" === c ? f.substr(f.length - e.length) === e: "|=" === c ? f === e || f.substr(0, e.length + 1) === e + "-": !1
                },
                POS: function(b, a, d, f) {
                    var c = k.setFilters[a[2]];
                    if (c) return c(b, d, a, f)
                }
            }
        },
        s = k.match.POS,
        u = function(b, a) {
            return "\\" + (a - 0 + 1)
        },
        p;
        for (p in k.match) k.match[p] = RegExp(k.match[p].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        k.leftMatch[p] = RegExp(/(^(?:.|\r|\n)*?)/.source + k.match[p].source.replace(/\\(\d+)/g, u));
        var r = function(b, a) {
            b = Array.prototype.slice.call(b, 0);
            return a ? (a.push.apply(a, b), a) : b
        };
        try {
            Array.prototype.slice.call(t.documentElement.childNodes, 0)[0].nodeType
        } catch(w) {
            r = function(b, a) {
                var d = 0,
                f = a || [];
                if ("[object Array]" === j.call(b)) Array.prototype.push.apply(f, b);
                else if ("number" === typeof b.length) for (var c = b.length; d < c; d++) f.push(b[d]);
                else for (; b[d]; d++) f.push(b[d]);
                return f
            }
        }
        var y, z;
        t.documentElement.compareDocumentPosition ? y = function(b, a) {
            return b === a ? (g = !0, 0) : !b.compareDocumentPosition || !a.compareDocumentPosition ? b.compareDocumentPosition ? -1 : 1 : b.compareDocumentPosition(a) & 4 ? -1 : 1
        }: (y = function(b, a) {
            if (b === a) return g = !0,
            0;
            if (b.sourceIndex && a.sourceIndex) return b.sourceIndex - a.sourceIndex;
            var d, f, c = [],
            e = [];
            d = b.parentNode;
            f = a.parentNode;
            var l = d;
            if (d === f) return z(b, a);
            if (d) {
                if (!f) return 1
            } else return - 1;
            for (; l;) c.unshift(l),
            l = l.parentNode;
            for (l = f; l;) e.unshift(l),
            l = l.parentNode;
            d = c.length;
            f = e.length;
            for (l = 0; l < d && l < f; l++) if (c[l] !== e[l]) return z(c[l], e[l]);
            return l === d ? z(b, e[l], -1) : z(c[l], a, 1)
        },
        z = function(b, a, d) {
            if (b === a) return d;
            for (b = b.nextSibling; b;) {
                if (b === a) return - 1;
                b = b.nextSibling
            }
            return 1
        });
        m.getText = function(b) {
            for (var a = "",
            d, f = 0; b[f]; f++) d = b[f],
            3 === d.nodeType || 4 === d.nodeType ? a += d.nodeValue: 8 !== d.nodeType && (a += m.getText(d.childNodes));
            return a
        }; (function() {
            var b = t.createElement("div"),
            a = "script" + (new Date).getTime(),
            d = t.documentElement;
            b.innerHTML = "<a name='" + a + "'/>";
            d.insertBefore(b, d.firstChild);
            t.getElementById(a) && (k.find.ID = function(b, a, d) {
                if ("undefined" !== typeof a.getElementById && !d) return (a = a.getElementById(b[1])) ? a.id === b[1] || "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id").nodeValue === b[1] ? [a] : c: []
            },
            k.filter.ID = function(b, a) {
                var d = "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id");
                return 1 === b.nodeType && d && d.nodeValue === a
            });
            d.removeChild(b);
            d = b = null
        })(); (function() {
            var b = t.createElement("div");
            b.appendChild(t.createComment(""));
            0 < b.getElementsByTagName("*").length && (k.find.TAG = function(b, a) {
                var d = a.getElementsByTagName(b[1]);
                if ("*" === b[1]) {
                    for (var f = [], c = 0; d[c]; c++) 1 === d[c].nodeType && f.push(d[c]);
                    d = f
                }
                return d
            });
            b.innerHTML = "<a href='#'></a>";
            b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" !== b.firstChild.getAttribute("href") && (k.attrHandle.href = function(b) {
                return b.getAttribute("href", 2)
            });
            b = null
        })();
        t.querySelectorAll &&
        function() {
            var b = m,
            a = t.createElement("div");
            a.innerHTML = "<p class='TEST'></p>";
            if (! (a.querySelectorAll && 0 === a.querySelectorAll(".TEST").length)) {
                m = function(a, d, f, c) {
                    d = d || t;
                    if (!c && !m.isXML(d)) {
                        var e = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                        if (e && (1 === d.nodeType || 9 === d.nodeType)) {
                            if (e[1]) return r(d.getElementsByTagName(a), f);
                            if (e[2] && k.find.CLASS && d.getElementsByClassName) return r(d.getElementsByClassName(e[2]), f)
                        }
                        if (9 === d.nodeType) {
                            if ("body" === a && d.body) return r([d.body], f);
                            if (e && e[3]) {
                                var l = d.getElementById(e[3]);
                                if (l && l.parentNode) {
                                    if (l.id === e[3]) return r([l], f)
                                } else return r([], f)
                            }
                            try {
                                return r(d.querySelectorAll(a), f)
                            } catch(j) {}
                        } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                            var e = d,
                            o = (l = d.getAttribute("id")) || "__sizzle__",
                            g = d.parentNode,
                            i = /^\s*[+~]/.test(a);
                            l ? o = o.replace(/'/g, "\\$&") : d.setAttribute("id", o);
                            i && g && (d = d.parentNode);
                            try {
                                if (!i || g) return r(d.querySelectorAll("[id='" + o + "'] " + a), f)
                            } catch(h) {} finally {
                                l || e.removeAttribute("id")
                            }
                        }
                    }
                    return b(a, d, f, c)
                };
                for (var d in b) m[d] = b[d];
                a = null
            }
        } (); (function() {
            var b = t.documentElement,
            a = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.msMatchesSelector;
            if (a) {
                var d = !a.call(t.createElement("div"), "div"),
                f = !1;
                try {
                    a.call(t.documentElement, "[test!='']:sizzle")
                } catch(c) {
                    f = !0
                }
                m.matchesSelector = function(b, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(b)) try {
                        if (f || !k.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var e = a.call(b, c);
                            if (e || !d || b.document && 11 !== b.document.nodeType) return e
                        }
                    } catch(l) {}
                    return 0 < m(c, null, null, [b]).length
                }
            }
        })(); (function() {
            var b = t.createElement("div");
            b.innerHTML = "<div class='test e'></div><div class='test'></div>";
            b.getElementsByClassName && 0 !== b.getElementsByClassName("e").length && (b.lastChild.className = "e", 1 !== b.getElementsByClassName("e").length && (k.order.splice(1, 0, "CLASS"), k.find.CLASS = function(b, a, d) {
                if ("undefined" !== typeof a.getElementsByClassName && !d) return a.getElementsByClassName(b[1])
            },
            b = null))
        })();
        m.contains = t.documentElement.contains ?
        function(b, a) {
            return b !== a && (b.contains ? b.contains(a) : !0)
        }: t.documentElement.compareDocumentPosition ?
        function(b, a) {
            return !! (b.compareDocumentPosition(a) & 16)
        }: function() {
            return ! 1
        };
        m.isXML = function(b) {
            return (b = (b ? b.ownerDocument || b: 0).documentElement) ? "HTML" !== b.nodeName: !1
        };
        var v = function(b, a) {
            for (var d, f = [], c = "", e = a.nodeType ? [a] : a; d = k.match.PSEUDO.exec(b);) c += d[0],
            b = b.replace(k.match.PSEUDO, "");
            b = k.relative[b] ? b + "*": b;
            d = 0;
            for (var l = e.length; d < l; d++) m(b, e[d], f);
            return m.filter(c, f)
        };
        d.find = m;
        d.expr = m.selectors;
        d.expr[":"] = d.expr.filters;
        d.unique = m.uniqueSort;
        d.text = m.getText;
        d.isXMLDoc = m.isXML;
        d.contains = m.contains
    })();
    var nb = /Until$/,
    ob = /^(?:parents|prevUntil|prevAll)/,
    pb = /,/,
    Ya = /^.[^:#\[\.,]*$/,
    qb = Array.prototype.slice,
    Fa = d.expr.match.POS,
    rb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    d.fn.extend({
        find: function(b) {
            var a = this,
            c, e;
            if ("string" !== typeof b) return d(b).filter(function() {
                for (c = 0, e = a.length; c < e; c++) if (d.contains(a[c], this)) return ! 0
            });
            var j = this.pushStack("", "find", b),
            g,
            i,
            h;
            for (c = 0, e = this.length; c < e; c++) if (g = j.length, d.find(b, this[c], j), 0 < c) for (i = g; i < j.length; i++) for (h = 0; h < g; h++) if (j[h] === j[i]) {
                j.splice(i--, 1);
                break
            }
            return j
        },
        has: function(b) {
            var a = d(b);
            return this.filter(function() {
                for (var b = 0,
                c = a.length; b < c; b++) if (d.contains(this, a[b])) return ! 0
            })
        },
        not: function(b) {
            return this.pushStack(r(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(r(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !! b && ("string" === typeof b ? 0 < d.filter(b, this).length: 0 < this.filter(b).length)
        },
        closest: function(b, a) {
            var c = [],
            e,
            j,
            g = this[0];
            if (d.isArray(b)) {
                var i, h = {},
                m = 1;
                if (g && b.length) {
                    for (e = 0, j = b.length; e < j; e++) i = b[e],
                    h[i] || (h[i] = Fa.test(i) ? d(i, a || this.context) : i);
                    for (; g && g.ownerDocument && g !== a;) {
                        for (i in h) e = h[i],
                        (e.jquery ? -1 < e.index(g) : d(g).is(e)) && c.push({
                            selector: i,
                            elem: g,
                            level: m
                        });
                        g = g.parentNode;
                        m++
                    }
                }
                return c
            }
            i = Fa.test(b) || "string" !== typeof b ? d(b, a || this.context) : 0;
            for (e = 0, j = this.length; e < j; e++) for (g = this[e]; g;) if (i ? -1 < i.index(g) : d.find.matchesSelector(g, b)) {
                c.push(g);
                break
            } else if (g = g.parentNode, !g || !g.ownerDocument || g === a || 11 === g.nodeType) break;
            c = 1 < c.length ? d.unique(c) : c;
            return this.pushStack(c, "closest", b)
        },
        index: function(b) {
            return ! b ? this[0] && this[0].parentNode ? this.prevAll().length: -1 : "string" === typeof b ? d.inArray(this[0], d(b)) : d.inArray(b.jquery ? b[0] : b, this)
        },
        add: function(b, a) {
            var c = "string" === typeof b ? d(b, a) : d.makeArray(b && b.nodeType ? [b] : b),
            e = d.merge(this.get(), c);
            return this.pushStack(!c[0] || !c[0].parentNode || 11 === c[0].parentNode.nodeType || !e[0] || !e[0].parentNode || 11 === e[0].parentNode.nodeType ? e: d.unique(e))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    d.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b: null
        },
        parents: function(b) {
            return d.dir(b, "parentNode")
        },
        parentsUntil: function(b, a, c) {
            return d.dir(b, "parentNode", c)
        },
        next: function(b) {
            return d.nth(b, 2, "nextSibling")
        },
        prev: function(b) {
            return d.nth(b, 2, "previousSibling")
        },
        nextAll: function(b) {
            return d.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return d.dir(b, "previousSibling")
        },
        nextUntil: function(b, a, c) {
            return d.dir(b, "nextSibling", c)
        },
        prevUntil: function(b, a, c) {
            return d.dir(b, "previousSibling", c)
        },
        siblings: function(b) {
            return d.sibling(b.parentNode.firstChild, b)
        },
        children: function(b) {
            return d.sibling(b.firstChild)
        },
        contents: function(b) {
            return d.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document: d.makeArray(b.childNodes)
        }
    },
    function(b, a) {
        d.fn[b] = function(c, e) {
            var j = d.map(this, a, c),
            g = qb.call(arguments);
            nb.test(b) || (e = c);
            e && "string" === typeof e && (j = d.filter(e, j));
            j = 1 < this.length && !rb[b] ? d.unique(j) : j;
            if ((1 < this.length || pb.test(e)) && ob.test(b)) j = j.reverse();
            return this.pushStack(j, b, g.join(","))
        }
    });
    d.extend({
        filter: function(b, a, c) {
            c && (b = ":not(" + b + ")");
            return 1 === a.length ? d.find.matchesSelector(a[0], b) ? [a[0]] : [] : d.find.matches(b, a)
        },
        dir: function(b, a, e) {
            for (var o = [], b = b[a]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !d(b).is(e));) 1 === b.nodeType && o.push(b),
            b = b[a];
            return o
        },
        nth: function(b, a, d) {
            for (var a = a || 1,
            c = 0; b && !(1 === b.nodeType && ++c === a); b = b[d]);
            return b
        },
        sibling: function(b, a) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== a && d.push(b);
            return d
        }
    });
    var sb = / jQuery\d+="(?:\d+|null)"/g,
    pa = /^\s+/,
    Ga = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    Ha = /<([\w:]+)/,
    tb = /<tbody/i,
    ub = /<|&#?\w+;/,
    Ia = /<(?:script|object|embed|option|style)/i,
    Ja = /checked\s*(?:[^=]|=\s*.checked.)/i,
    vb = /\/(java|ecma)script/i,
    Za = /^\s*<!(?:\[CDATA\[|\-\-)/,
    B = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    B.optgroup = B.option;
    B.tbody = B.tfoot = B.colgroup = B.caption = B.thead;
    B.th = B.td;
    d.support.htmlSerialize || (B._default = [1, "div<div>", "</div>"]);
    d.fn.extend({
        text: function(b) {
            return d.isFunction(b) ? this.each(function(a) {
                var c = d(this);
                c.text(b.call(this, a, c.text()))
            }) : "object" !== typeof b && b !== c ? this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(b)) : d.text(this)
        },
        wrapAll: function(b) {
            if (d.isFunction(b)) return this.each(function(a) {
                d(this).wrapAll(b.call(this, a))
            });
            if (this[0]) {
                var a = d(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && a.insertBefore(this[0]);
                a.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return d.isFunction(b) ? this.each(function(a) {
                d(this).wrapInner(b.call(this, a))
            }) : this.each(function() {
                var a = d(this),
                c = a.contents();
                c.length ? c.wrapAll(b) : a.append(b)
            })
        },
        wrap: function(b) {
            return this.each(function() {
                d(this).wrapAll(b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(b) {
                1 === this.nodeType && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(b) {
                1 === this.nodeType && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = d(arguments[0]);
                b.push.apply(b, this.toArray());
                return this.pushStack(b, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = this.pushStack(this, "after", arguments);
                b.push.apply(b, d(arguments[0]).toArray());
                return b
            }
        },
        remove: function(b, a) {
            for (var c = 0,
            e; null != (e = this[c]); c++) if (!b || d.filter(b, [e]).length) ! a && 1 === e.nodeType && (d.cleanData(e.getElementsByTagName("*")), d.cleanData([e])),
            e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var b = 0,
            a; null != (a = this[b]); b++) for (1 === a.nodeType && d.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(b, a) {
            b = null == b ? !1 : b;
            a = null == a ? b: a;
            return this.map(function() {
                return d.clone(this, b, a)
            })
        },
        html: function(b) {
            if (b === c) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(sb, "") : null;
            if ("string" === typeof b && !Ia.test(b) && (d.support.leadingWhitespace || !pa.test(b)) && !B[(Ha.exec(b) || ["", ""])[1].toLowerCase()]) {
                b = b.replace(Ga, "<$1></$2>");
                try {
                    for (var a = 0,
                    e = this.length; a < e; a++) 1 === this[a].nodeType && (d.cleanData(this[a].getElementsByTagName("*")), this[a].innerHTML = b)
                } catch(g) {
                    this.empty().append(b)
                }
            } else d.isFunction(b) ? this.each(function(a) {
                var f = d(this);
                f.html(b.call(this, a, f.html()))
            }) : this.empty().append(b);
            return this
        },
        replaceWith: function(b) {
            if (this[0] && this[0].parentNode) {
                if (d.isFunction(b)) return this.each(function(a) {
                    var c = d(this),
                    e = c.html();
                    c.replaceWith(b.call(this, a, e))
                });
                "string" !== typeof b && (b = d(b).detach());
                return this.each(function() {
                    var a = this.nextSibling,
                    c = this.parentNode;
                    d(this).remove();
                    a ? d(a).before(b) : d(c).append(b)
                })
            }
            return this.length ? this.pushStack(d(d.isFunction(b) ? b() : b), "replaceWith", b) : this
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, a, e) {
            var g, j, i, h = b[0],
            m = [];
            if (!d.support.checkClone && 3 === arguments.length && "string" === typeof h && Ja.test(h)) return this.each(function() {
                d(this).domManip(b, a, e, !0)
            });
            if (d.isFunction(h)) return this.each(function(j) {
                var g = d(this);
                b[0] = h.call(this, j, a ? g.html() : c);
                g.domManip(b, a, e)
            });
            if (this[0]) {
                g = h && h.parentNode;
                g = d.support.parentNode && g && 11 === g.nodeType && g.childNodes.length === this.length ? {
                    fragment: g
                }: d.buildFragment(b, this, m);
                i = g.fragment;
                if (j = 1 === i.childNodes.length ? i = i.firstChild: i.firstChild) {
                    a = a && d.nodeName(j, "tr");
                    j = 0;
                    for (var k = this.length,
                    n = k - 1; j < k; j++) e.call(a ? d.nodeName(this[j], "table") ? this[j].getElementsByTagName("tbody")[0] || this[j].appendChild(this[j].ownerDocument.createElement("tbody")) : this[j] : this[j], g.cacheable || 1 < k && j < n ? d.clone(i, !0, !0) : i)
                }
                m.length && d.each(m, A)
            }
            return this
        }
    });
    d.buildFragment = function(b, a, c) {
        var e, j, g, i;
        a && a[0] && (i = a[0].ownerDocument || a[0]);
        i.createDocumentFragment || (i = t);
        if (1 === b.length && "string" === typeof b[0] && 512 > b[0].length && i === t && "<" === b[0].charAt(0) && !Ia.test(b[0]) && (d.support.checkClone || !Ja.test(b[0]))) j = !0,
        (g = d.fragments[b[0]]) && 1 !== g && (e = g);
        e || (e = i.createDocumentFragment(), d.clean(b, i, e, c));
        j && (d.fragments[b[0]] = g ? e: 1);
        return {
            fragment: e,
            cacheable: j
        }
    };
    d.fragments = {};
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(b, a) {
        d.fn[b] = function(c) {
            var e = [],
            c = d(c),
            j = 1 === this.length && this[0].parentNode;
            if (j && 11 === j.nodeType && 1 === j.childNodes.length && 1 === c.length) return c[a](this[0]),
            this;
            for (var j = 0,
            g = c.length; j < g; j++) {
                var i = (0 < j ? this.clone(!0) : this).get();
                d(c[j])[a](i);
                e = e.concat(i)
            }
            return this.pushStack(e, b, c.selector)
        }
    });
    d.extend({
        clone: function(b, a, c) {
            var e = b.cloneNode(!0),
            j,
            g,
            i;
            if ((!d.support.noCloneEvent || !d.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !d.isXMLDoc(b)) {
                u(b, e);
                j = w(b);
                g = w(e);
                for (i = 0; j[i]; ++i) g[i] && u(j[i], g[i])
            }
            if (a && (s(b, e), c)) {
                j = w(b);
                g = w(e);
                for (i = 0; j[i]; ++i) s(j[i], g[i])
            }
            return e
        },
        clean: function(b, a, c, e) {
            a = a || t;
            "undefined" === typeof a.createElement && (a = a.ownerDocument || a[0] && a[0].ownerDocument || t);
            for (var j = [], g, i = 0, h; null != (h = b[i]); i++) if ("number" === typeof h && (h += ""), h) {
                if ("string" === typeof h) if (ub.test(h)) {
                    h = h.replace(Ga, "<$1></$2>");
                    g = (Ha.exec(h) || ["", ""])[1].toLowerCase();
                    var m = B[g] || B._default,
                    k = m[0],
                    n = a.createElement("div");
                    for (n.innerHTML = m[1] + h + m[2]; k--;) n = n.lastChild;
                    if (!d.support.tbody) {
                        k = tb.test(h);
                        m = "table" === g && !k ? n.firstChild && n.firstChild.childNodes: "<table>" === m[1] && !k ? n.childNodes: [];
                        for (g = m.length - 1; 0 <= g; --g) d.nodeName(m[g], "tbody") && !m[g].childNodes.length && m[g].parentNode.removeChild(m[g])
                    } ! d.support.leadingWhitespace && pa.test(h) && n.insertBefore(a.createTextNode(pa.exec(h)[0]), n.firstChild);
                    h = n.childNodes
                } else h = a.createTextNode(h);
                var p;
                if (!d.support.appendChecked) if (h[0] && "number" === typeof(p = h.length)) for (g = 0; g < p; g++) y(h[g]);
                else y(h);
                h.nodeType ? j.push(h) : j = d.merge(j, h)
            }
            if (c) {
                b = function(b) {
                    return ! b.type || vb.test(b.type)
                };
                for (i = 0; j[i]; i++) e && d.nodeName(j[i], "script") && (!j[i].type || "text/javascript" === j[i].type.toLowerCase()) ? e.push(j[i].parentNode ? j[i].parentNode.removeChild(j[i]) : j[i]) : (1 === j[i].nodeType && (a = d.grep(j[i].getElementsByTagName("script"), b), j.splice.apply(j, [i + 1, 0].concat(a))), c.appendChild(j[i]))
            }
            return j
        },
        cleanData: function(b) {
            for (var a, c, e = d.cache,
            j = d.expando,
            g = d.event.special,
            i = d.support.deleteExpando,
            h = 0,
            m; null != (m = b[h]); h++) if (!m.nodeName || !d.noData[m.nodeName.toLowerCase()]) if (c = m[d.expando]) {
                if ((a = e[c] && e[c][j]) && a.events) {
                    for (var k in a.events) g[k] ? d.event.remove(m, k) : d.removeEvent(m, k, a.handle);
                    a.handle && (a.handle.elem = null)
                }
                i ? delete m[d.expando] : m.removeAttribute && m.removeAttribute(d.expando);
                delete e[c]
            }
        }
    });
    var qa = /alpha\([^)]*\)/i,
    wb = /opacity=([^)]*)/,
    xb = /([A-Z]|^ms)/g,
    Ka = /^-?\d+(?:px)?$/i,
    yb = /^-?\d/,
    zb = /^([\-+])=([\-+.\de]+)/,
    Ab = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    $a = ["Left", "Right"],
    ab = ["Top", "Bottom"],
    G,
    La,
    Ma;
    d.fn.css = function(b, a) {
        return 2 === arguments.length && a === c ? this: d.access(this, b, a, !0,
        function(b, a, f) {
            return f !== c ? d.style(b, a, f) : d.css(b, a)
        })
    };
    d.extend({
        cssHooks: {
            opacity: {
                get: function(b, a) {
                    if (a) {
                        var d = G(b, "opacity", "opacity");
                        return "" === d ? "1": d
                    }
                    return b.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": d.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(b, a, e, g) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var j, i = d.camelCase(a),
                h = b.style,
                m = d.cssHooks[i],
                a = d.cssProps[i] || i;
                if (e !== c) {
                    g = typeof e;
                    if ("string" === g && (j = zb.exec(e))) e = +(j[1] + 1) * +j[2] + parseFloat(d.css(b, a)),
                    g = "number";
                    if (! (null == e || "number" === g && isNaN(e))) if ("number" === g && !d.cssNumber[i] && (e += "px"), !m || !("set" in m) || (e = m.set(b, e)) !== c) try {
                        h[a] = e
                    } catch(k) {}
                } else return m && "get" in m && (j = m.get(b, !1, g)) !== c ? j: h[a]
            }
        },
        css: function(b, a, e) {
            var g, j, a = d.camelCase(a);
            j = d.cssHooks[a];
            a = d.cssProps[a] || a;
            "cssFloat" === a && (a = "float");
            if (j && "get" in j && (g = j.get(b, !0, e)) !== c) return g;
            if (G) return G(b, a)
        },
        swap: function(b, a, d) {
            var c = {},
            e;
            for (e in a) c[e] = b.style[e],
            b.style[e] = a[e];
            d.call(b);
            for (e in a) b.style[e] = c[e]
        }
    });
    d.curCSS = d.css;
    d.each(["height", "width"],
    function(b, a) {
        d.cssHooks[a] = {
            get: function(b, c, e) {
                var g;
                if (c) {
                    if (0 !== b.offsetWidth) return v(b, a, e);
                    d.swap(b, Ab,
                    function() {
                        g = v(b, a, e)
                    });
                    return g
                }
            },
            set: function(b, a) {
                if (Ka.test(a)) {
                    if (a = parseFloat(a), 0 <= a) return a + "px"
                } else return a
            }
        }
    });
    d.support.opacity || (d.cssHooks.opacity = {
        get: function(b, a) {
            return wb.test((a && b.currentStyle ? b.currentStyle.filter: b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": a ? "1": ""
        },
        set: function(b, a) {
            var c = b.style,
            e = b.currentStyle,
            g = d.isNaN(a) ? "": "alpha(opacity=" + 100 * a + ")",
            i = e && e.filter || c.filter || "";
            c.zoom = 1;
            if (1 <= a && "" === d.trim(i.replace(qa, "")) && (c.removeAttribute("filter"), e && !e.filter)) return;
            c.filter = qa.test(i) ? i.replace(qa, g) : i + " " + g
        }
    });
    d(function() {
        d.support.reliableMarginRight || (d.cssHooks.marginRight = {
            get: function(b, a) {
                var c;
                d.swap(b, {
                    display: "inline-block"
                },
                function() {
                    c = a ? G(b, "margin-right", "marginRight") : b.style.marginRight
                });
                return c
            }
        })
    });
    t.defaultView && t.defaultView.getComputedStyle && (La = function(b, a) {
        var e, g, a = a.replace(xb, "-$1").toLowerCase();
        if (! (g = b.ownerDocument.defaultView)) return c;
        if (g = g.getComputedStyle(b, null)) e = g.getPropertyValue(a),
        "" === e && !d.contains(b.ownerDocument.documentElement, b) && (e = d.style(b, a));
        return e
    });
    t.documentElement.currentStyle && (Ma = function(b, a) {
        var d, c = b.currentStyle && b.currentStyle[a],
        e = b.runtimeStyle && b.runtimeStyle[a],
        g = b.style; ! Ka.test(c) && yb.test(c) && (d = g.left, e && (b.runtimeStyle.left = b.currentStyle.left), g.left = "fontSize" === a ? "1em": c || 0, c = g.pixelLeft + "px", g.left = d, e && (b.runtimeStyle.left = e));
        return "" === c ? "auto": c
    });
    G = La || Ma;
    d.expr && d.expr.filters && (d.expr.filters.hidden = function(b) {
        var a = b.offsetHeight;
        return 0 === b.offsetWidth && 0 === a || !d.support.reliableHiddenOffsets && "none" === (b.style.display || d.css(b, "display"))
    },
    d.expr.filters.visible = function(b) {
        return ! d.expr.filters.hidden(b)
    });
    var Bb = /%20/g,
    bb = /\[\]$/,
    Na = /\r?\n/g,
    Cb = /#.*$/,
    Db = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    Eb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Fb = /^(?:GET|HEAD)$/,
    Gb = /^\/\//,
    Oa = /\?/,
    Hb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Ib = /^(?:select|textarea)/i,
    ta = /\s+/,
    Jb = /([?&])_=[^&]*/,
    Pa = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    Qa = d.fn.load,
    ga = {},
    Ra = {},
    I, F, Sa = ["*/"] + ["*"];
    try {
        I = eb.href
    } catch(Pb) {
        I = t.createElement("a"),
        I.href = "",
        I = I.href
    }
    F = Pa.exec(I.toLowerCase()) || [];
    d.fn.extend({
        load: function(b, a, e) {
            if ("string" !== typeof b && Qa) return Qa.apply(this, arguments);
            if (!this.length) return this;
            var g = b.indexOf(" ");
            if (0 <= g) var j = b.slice(g, b.length),
            b = b.slice(0, g);
            g = "GET";
            a && (d.isFunction(a) ? (e = a, a = c) : "object" === typeof a && (a = d.param(a, d.ajaxSettings.traditional), g = "POST"));
            var i = this;
            d.ajax({
                url: b,
                type: g,
                dataType: "html",
                data: a,
                complete: function(b, a, c) {
                    c = b.responseText;
                    b.isResolved() && (b.done(function(b) {
                        c = b
                    }), i.html(j ? d("<div>").append(c.replace(Hb, "")).find(j) : c));
                    e && i.each(e, [c, a, b])
                }
            });
            return this
        },
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? d.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Ib.test(this.nodeName) || Eb.test(this.type))
            }).map(function(b, a) {
                var c = d(this).val();
                return null == c ? null: d.isArray(c) ? d.map(c,
                function(b) {
                    return {
                        name: a.name,
                        value: b.replace(Na, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: c.replace(Na, "\r\n")
                }
            }).get()
        }
    });
    d.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),
    function(b, a) {
        d.fn[a] = function(b) {
            return this.bind(a, b)
        }
    });
    d.each(["get", "post"],
    function(b, a) {
        d[a] = function(b, e, g, i) {
            d.isFunction(e) && (i = i || g, g = e, e = c);
            return d.ajax({
                type: a,
                url: b,
                data: e,
                success: g,
                dataType: i
            })
        }
    });
    d.extend({
        getScript: function(b, a) {
            return d.get(b, c, a, "script")
        },
        getJSON: function(b, a, c) {
            return d.get(b, a, c, "json")
        },
        ajaxSetup: function(b, a) {
            a ? O(b, d.ajaxSettings) : (a = b, b = d.ajaxSettings);
            O(b, a);
            return b
        },
        ajaxSettings: {
            url: I,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(F[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Sa
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: K(ga),
        ajaxTransport: K(Ra),
        ajax: function(b, a) {
            function e(b, a, f, l) {
                if (2 !== z) {
                    z = 2;
                    t && clearTimeout(t);
                    w = c;
                    u = l || "";
                    x.readyState = 0 < b ? 4 : 0;
                    var p, s, r, l = a;
                    if (f) {
                        var y = g,
                        A = x,
                        ca = y.contents,
                        B = y.dataTypes,
                        K = y.responseFields,
                        D, C, H, da;
                        for (C in K) C in f && (A[K[C]] = f[C]);
                        for (;
                        "*" === B[0];) B.shift(),
                        D === c && (D = y.mimeType || A.getResponseHeader("content-type"));
                        if (D) for (C in ca) if (ca[C] && ca[C].test(D)) {
                            B.unshift(C);
                            break
                        }
                        if (B[0] in f) H = B[0];
                        else {
                            for (C in f) {
                                if (!B[0] || y.converters[C + " " + B[0]]) {
                                    H = C;
                                    break
                                }
                                da || (da = C)
                            }
                            H = H || da
                        }
                        H ? (H !== B[0] && B.unshift(H), f = f[H]) : f = void 0
                    } else f = c;
                    if (200 <= b && 300 > b || 304 === b) {
                        if (g.ifModified) {
                            if (D = x.getResponseHeader("Last-Modified")) d.lastModified[n] = D;
                            if (D = x.getResponseHeader("Etag")) d.etag[n] = D
                        }
                        if (304 === b) l = "notmodified",
                        p = !0;
                        else try {
                            D = g;
                            D.dataFilter && (f = D.dataFilter(f, D.dataType));
                            var E = D.dataTypes;
                            C = {};
                            var L, O, J = E.length,
                            I, M = E[0],
                            F,
                            ea,
                            N,
                            P,
                            G;
                            for (L = 1; L < J; L++) {
                                if (1 === L) for (O in D.converters)"string" === typeof O && (C[O.toLowerCase()] = D.converters[O]);
                                F = M;
                                M = E[L];
                                if ("*" === M) M = F;
                                else if ("*" !== F && F !== M) {
                                    ea = F + " " + M;
                                    N = C[ea] || C["* " + M];
                                    if (!N) for (P in G = c, C) if (I = P.split(" "), I[0] === F || "*" === I[0]) if (G = C[I[1] + " " + M]) {
                                        P = C[P]; ! 0 === P ? N = G: !0 === G && (N = P);
                                        break
                                    } ! N && !G && d.error("No conversion from " + ea.replace(" ", " to ")); ! 0 !== N && (f = N ? N(f) : G(P(f)))
                                }
                            }
                            s = f;
                            l = "success";
                            p = !0
                        } catch(U) {
                            l = "parsererror",
                            r = U
                        }
                    } else if (r = l, !l || b) l = "error",
                    0 > b && (b = 0);
                    x.status = b;
                    x.statusText = "" + (a || l);
                    p ? h.resolveWith(j, [s, l, x]) : h.rejectWith(j, [x, l, r]);
                    x.statusCode(k);
                    k = c;
                    v && i.trigger("ajax" + (p ? "Success": "Error"), [x, g, p ? s: r]);
                    m.resolveWith(j, [x, l]);
                    v && (i.trigger("ajaxComplete", [x, g]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof b && (a = b, b = c);
            var a = a || {},
            g = d.ajaxSetup({},
            a),
            j = g.context || g,
            i = j !== g && (j.nodeType || j instanceof d) ? d(j) : d.event,
            h = d.Deferred(),
            m = d._Deferred(),
            k = g.statusCode || {},
            n,
            p = {},
            s = {},
            u,
            r,
            w,
            t,
            y,
            z = 0,
            v,
            A,
            x = {
                readyState: 0,
                setRequestHeader: function(b, a) {
                    if (!z) {
                        var d = b.toLowerCase(),
                        b = s[d] = s[d] || b;
                        p[b] = a
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === z ? u: null
                },
                getResponseHeader: function(b) {
                    var a;
                    if (2 === z) {
                        if (!r) for (r = {}; a = Db.exec(u);) r[a[1].toLowerCase()] = a[2];
                        a = r[b.toLowerCase()]
                    }
                    return a === c ? null: a
                },
                overrideMimeType: function(b) {
                    z || (g.mimeType = b);
                    return this
                },
                abort: function(b) {
                    b = b || "abort";
                    w && w.abort(b);
                    e(0, b);
                    return this
                }
            };
            h.promise(x);
            x.success = x.done;
            x.error = x.fail;
            x.complete = m.done;
            x.statusCode = function(b) {
                if (b) {
                    var a;
                    if (2 > z) for (a in b) k[a] = [k[a], b[a]];
                    else a = b[x.status],
                    x.then(a, a)
                }
                return this
            };
            g.url = ((b || g.url) + "").replace(Cb, "").replace(Gb, F[1] + "//");
            g.dataTypes = d.trim(g.dataType || "*").toLowerCase().split(ta);
            null == g.crossDomain && (y = Pa.exec(g.url.toLowerCase()), g.crossDomain = !(!y || !(y[1] != F[1] || y[2] != F[2] || (y[3] || ("http:" === y[1] ? 80 : 443)) != (F[3] || ("http:" === F[1] ? 80 : 443)))));
            g.data && g.processData && "string" !== typeof g.data && (g.data = d.param(g.data, g.traditional));
            H(ga, g, a, x);
            if (2 === z) return ! 1;
            v = g.global;
            g.type = g.type.toUpperCase();
            g.hasContent = !Fb.test(g.type);
            v && 0 === d.active++&&d.event.trigger("ajaxStart");
            if (!g.hasContent && (g.data && (g.url += (Oa.test(g.url) ? "&": "?") + g.data, delete g.data), n = g.url, !1 === g.cache)) {
                y = d.now();
                var B = g.url.replace(Jb, "$1_=" + y);
                g.url = B + (B === g.url ? (Oa.test(g.url) ? "&": "?") + "_=" + y: "")
            } (g.data && g.hasContent && !1 !== g.contentType || a.contentType) && x.setRequestHeader("Content-Type", g.contentType);
            g.ifModified && (n = n || g.url, d.lastModified[n] && x.setRequestHeader("If-Modified-Since", d.lastModified[n]), d.etag[n] && x.setRequestHeader("If-None-Match", d.etag[n]));
            x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Sa + "; q=0.01": "") : g.accepts["*"]);
            for (A in g.headers) x.setRequestHeader(A, g.headers[A]);
            if (g.beforeSend && (!1 === g.beforeSend.call(j, x, g) || 2 === z)) return x.abort(),
            !1;
            for (A in {
                success: 1,
                error: 1,
                complete: 1
            }) x[A](g[A]);
            if (w = H(Ra, g, a, x)) {
                x.readyState = 1;
                v && i.trigger("ajaxSend", [x, g]);
                g.async && 0 < g.timeout && (t = setTimeout(function() {
                    x.abort("timeout")
                },
                g.timeout));
                try {
                    z = 1,
                    w.send(p, e)
                } catch(K) {
                    2 > z ? e( - 1, K) : d.error(K)
                }
            } else e( - 1, "No Transport");
            return x
        },
        param: function(b, a) {
            var e = [],
            g = function(b, a) {
                a = d.isFunction(a) ? a() : a;
                e[e.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
            };
            a === c && (a = d.ajaxSettings.traditional);
            if (d.isArray(b) || b.jquery && !d.isPlainObject(b)) d.each(b,
            function() {
                g(this.name, this.value)
            });
            else for (var j in b) U(j, b[j], a, g);
            return e.join("&").replace(Bb, "+")
        }
    });
    d.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Kb = d.now(),
    aa = /(\=)\?(&|$)|\?\?/i;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return d.expando + "_" + Kb++
        }
    });
    d.ajaxPrefilter("json jsonp",
    function(b, c, e) {
        c = "application/x-www-form-urlencoded" === b.contentType && "string" === typeof b.data;
        if ("jsonp" === b.dataTypes[0] || !1 !== b.jsonp && (aa.test(b.url) || c && aa.test(b.data))) {
            var g, j = b.jsonpCallback = d.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            i = a[j],
            h = b.url,
            m = b.data,
            k = "$1" + j + "$2"; ! 1 !== b.jsonp && (h = h.replace(aa, k), b.url === h && (c && (m = m.replace(aa, k)), b.data === m && (h += (/\?/.test(h) ? "&": "?") + b.jsonp + "=" + j)));
            b.url = h;
            b.data = m;
            a[j] = function(b) {
                g = [b]
            };
            e.always(function() {
                a[j] = i;
                if (g && d.isFunction(i)) a[j](g[0])
            });
            b.converters["script json"] = function() {
                g || d.error(j + " was not called");
                return g[0]
            };
            b.dataTypes[0] = "json";
            return "script"
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                d.globalEval(b);
                return b
            }
        }
    });
    d.ajaxPrefilter("script",
    function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    d.ajaxTransport("script",
    function(b) {
        if (b.crossDomain) {
            var a, d = t.head || t.getElementsByTagName("head")[0] || t.documentElement;
            return {
                send: function(e, g) {
                    a = t.createElement("script");
                    a.async = "async";
                    b.scriptCharset && (a.charset = b.scriptCharset);
                    a.src = b.url;
                    a.onload = a.onreadystatechange = function(b, e) {
                        if (e || !a.readyState || /loaded|complete/.test(a.readyState)) a.onload = a.onreadystatechange = null,
                        d && a.parentNode && d.removeChild(a),
                        a = c,
                        e || g(200, "success")
                    };
                    d.insertBefore(a, d.firstChild)
                },
                abort: function() {
                    if (a) a.onload(0, 1)
                }
            }
        }
    });
    var ra = a.ActiveXObject ?
    function() {
        for (var b in T) T[b](0, 1)
    }: !1,
    Lb = 0,
    T;
    d.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        var b;
        if (! (b = !this.isLocal && ha())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch(d) {}
            b = void 0
        }
        return b
    }: ha; (function(b) {
        d.extend(d.support, {
            ajax: !!b,
            cors: !!b && "withCredentials" in b
        })
    })(d.ajaxSettings.xhr());
    d.support.ajax && d.ajaxTransport(function(b) {
        if (!b.crossDomain || d.support.cors) {
            var e;
            return {
                send: function(g, i) {
                    var j = b.xhr(),
                    h,
                    m;
                    b.username ? j.open(b.type, b.url, b.async, b.username, b.password) : j.open(b.type, b.url, b.async);
                    if (b.xhrFields) for (m in b.xhrFields) j[m] = b.xhrFields[m];
                    b.mimeType && j.overrideMimeType && j.overrideMimeType(b.mimeType); ! b.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (m in g) j.setRequestHeader(m, g[m])
                    } catch(k) {}
                    j.send(b.hasContent && b.data || null);
                    e = function(a, g) {
                        var l, m, k, n, p;
                        try {
                            if (e && (g || 4 === j.readyState)) if (e = c, h && (j.onreadystatechange = d.noop, ra && delete T[h]), g) 4 !== j.readyState && j.abort();
                            else {
                                l = j.status;
                                k = j.getAllResponseHeaders();
                                n = {};
                                if ((p = j.responseXML) && p.documentElement) n.xml = p;
                                n.text = j.responseText;
                                try {
                                    m = j.statusText
                                } catch(s) {
                                    m = ""
                                } ! l && b.isLocal && !b.crossDomain ? l = n.text ? 200 : 404 : 1223 === l && (l = 204)
                            }
                        } catch(u) {
                            g || i( - 1, u)
                        }
                        n && i(l, m, n, k)
                    }; ! b.async || 4 === j.readyState ? e() : (h = ++Lb, ra && (T || (T = {},
                    d(a).unload(ra)), T[h] = e), j.onreadystatechange = e)
                },
                abort: function() {
                    e && e(0, 1)
                }
            }
        }
    });
    var ia = {},
    E, R, Mb = /^(?:toggle|show|hide)$/,
    Nb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    ba, ua = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    Y;
    d.fn.extend({
        show: function(b, a, c) {
            if (b || 0 === b) return this.animate(Q("show", 3), b, a, c);
            for (var c = 0,
            e = this.length; c < e; c++) b = this[c],
            b.style && (a = b.style.display, !d._data(b, "olddisplay") && "none" === a && (a = b.style.display = ""), "" === a && "none" === d.css(b, "display") && d._data(b, "olddisplay", va(b.nodeName)));
            for (c = 0; c < e; c++) if (b = this[c], b.style && (a = b.style.display, "" === a || "none" === a)) b.style.display = d._data(b, "olddisplay") || "";
            return this
        },
        hide: function(b, a, c) {
            if (b || 0 === b) return this.animate(Q("hide", 3), b, a, c);
            b = 0;
            for (a = this.length; b < a; b++) this[b].style && (c = d.css(this[b], "display"), "none" !== c && !d._data(this[b], "olddisplay") && d._data(this[b], "olddisplay", c));
            for (b = 0; b < a; b++) this[b].style && (this[b].style.display = "none");
            return this
        },
        _toggle: d.fn.toggle,
        toggle: function(b, a, c) {
            var e = "boolean" === typeof b;
            d.isFunction(b) && d.isFunction(a) ? this._toggle.apply(this, arguments) : null == b || e ? this.each(function() {
                var a = e ? b: d(this).is(":hidden");
                d(this)[a ? "show": "hide"]()
            }) : this.animate(Q("toggle", 3), b, a, c);
            return this
        },
        fadeTo: function(b, a, d, c) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: a
            },
            b, d, c)
        },
        animate: function(b, a, c, e) {
            var g = d.speed(a, c, e);
            if (d.isEmptyObject(b)) return this.each(g.complete, [!1]);
            b = d.extend({},
            b);
            return this[!1 === g.queue ? "each": "queue"](function() { ! 1 === g.queue && d._mark(this);
                var a = d.extend({},
                g),
                c = 1 === this.nodeType,
                e = c && d(this).is(":hidden"),
                f,
                i,
                l,
                h,
                m;
                a.animatedProperties = {};
                for (l in b) {
                    f = d.camelCase(l);
                    l !== f && (b[f] = b[l], delete b[l]);
                    i = b[f];
                    d.isArray(i) ? (a.animatedProperties[f] = i[1], i = b[f] = i[0]) : a.animatedProperties[f] = a.specialEasing && a.specialEasing[f] || a.easing || "swing";
                    if ("hide" === i && e || "show" === i && !e) return a.complete.call(this);
                    if (c && ("height" === f || "width" === f)) a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    "inline" === d.css(this, "display") && "none" === d.css(this, "float") && (d.support.inlineBlockNeedsLayout ? (i = va(this.nodeName), "inline" === i ? this.style.display = "inline-block": (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block")
                }
                null != a.overflow && (this.style.overflow = "hidden");
                for (l in b) if (c = new d.fx(this, a, l), i = b[l], Mb.test(i)) c["toggle" === i ? e ? "show": "hide": i]();
                else f = Nb.exec(i),
                h = c.cur(),
                f ? (i = parseFloat(f[2]), m = f[3] || (d.cssNumber[l] ? "": "px"), "px" !== m && (d.style(this, l, (i || 1) + m), h *= (i || 1) / c.cur(), d.style(this, l, h + m)), f[1] && (i = ("-=" === f[1] ? -1 : 1) * i + h), c.custom(h, i, m)) : c.custom(h, i, "");
                return ! 0
            })
        },
        stop: function(b, a) {
            b && this.queue([]);
            this.each(function() {
                var b = d.timers,
                c = b.length;
                for (a || d._unmark(!0, this); c--;) if (b[c].elem === this) {
                    if (a) b[c](!0);
                    b.splice(c, 1)
                }
            });
            a || this.dequeue();
            return this
        }
    });
    d.each({
        slideDown: Q("show", 1),
        slideUp: Q("hide", 1),
        slideToggle: Q("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(b, a) {
        d.fn[b] = function(b, d, c) {
            return this.animate(a, b, d, c)
        }
    });
    d.extend({
        speed: function(b, a, c) {
            var e = b && "object" === typeof b ? d.extend({},
            b) : {
                complete: c || !c && a || d.isFunction(b) && b,
                duration: b,
                easing: c && a || a && !d.isFunction(a) && a
            };
            e.duration = d.fx.off ? 0 : "number" === typeof e.duration ? e.duration: e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default;
            e.old = e.complete;
            e.complete = function(b) {
                d.isFunction(e.old) && e.old.call(this); ! 1 !== e.queue ? d.dequeue(this) : !1 !== b && d._unmark(this)
            };
            return e
        },
        easing: {
            linear: function(b, a, d, c) {
                return d + c * b
            },
            swing: function(b, a, d, c) {
                return ( - Math.cos(b * Math.PI) / 2 + 0.5) * c + d
            }
        },
        timers: [],
        fx: function(b, a, d) {
            this.options = a;
            this.elem = b;
            this.prop = d;
            a.orig = a.orig || {}
        }
    });
    d.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this); (d.fx.step[this.prop] || d.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var b, a = d.css(this.elem, this.prop);
            return isNaN(b = parseFloat(a)) ? !a || "auto" === a ? 0 : a: b
        },
        custom: function(b, a, c) {
            function e(b) {
                return g.step(b)
            }
            var g = this,
            i = d.fx;
            this.startTime = Y || L();
            this.start = b;
            this.end = a;
            this.unit = c || this.unit || (d.cssNumber[this.prop] ? "": "px");
            this.now = this.start;
            this.pos = this.state = 0;
            e.elem = this.elem;
            e() && d.timers.push(e) && !ba && (ba = setInterval(i.tick, i.interval))
        },
        show: function() {
            this.options.orig[this.prop] = d.style(this.elem, this.prop);
            this.options.show = !0;
            this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
            d(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = d.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function(b) {
            var a = Y || L(),
            c = !0,
            e = this.elem,
            g = this.options,
            i;
            if (b || a >= g.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                g.animatedProperties[this.prop] = !0;
                for (i in g.animatedProperties) ! 0 !== g.animatedProperties[i] && (c = !1);
                if (c) {
                    null != g.overflow && !d.support.shrinkWrapBlocks && d.each(["", "X", "Y"],
                    function(b, a) {
                        e.style["overflow" + a] = g.overflow[b]
                    });
                    g.hide && d(e).hide();
                    if (g.hide || g.show) for (var h in g.animatedProperties) d.style(e, h, g.orig[h]);
                    g.complete.call(e)
                }
                return ! 1
            }
            Infinity == g.duration ? this.now = a: (b = a - this.startTime, this.state = b / g.duration, this.pos = d.easing[g.animatedProperties[this.prop]](this.state, b, 0, 1, g.duration), this.now = this.start + (this.end - this.start) * this.pos);
            this.update();
            return ! 0
        }
    };
    d.extend(d.fx, {
        tick: function() {
            for (var b = d.timers,
            a = 0; a < b.length; ++a) b[a]() || b.splice(a--, 1);
            b.length || d.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(ba);
            ba = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(b) {
                d.style(b.elem, "opacity", b.now)
            },
            _default: function(b) {
                b.elem.style && null != b.elem.style[b.prop] ? b.elem.style[b.prop] = ("width" === b.prop || "height" === b.prop ? Math.max(0, b.now) : b.now) + b.unit: b.elem[b.prop] = b.now
            }
        }
    });
    d.expr && d.expr.filters && (d.expr.filters.animated = function(b) {
        return d.grep(d.timers,
        function(a) {
            return b === a.elem
        }).length
    });
    var Ob = /^t(?:able|d|h)$/i,
    Ta = /^(?:body|html)$/i;
    d.fn.offset = "getBoundingClientRect" in t.documentElement ?
    function(b) {
        var a = this[0],
        c;
        if (b) return this.each(function(a) {
            d.offset.setOffset(this, b, a)
        });
        if (!a || !a.ownerDocument) return null;
        if (a === a.ownerDocument.body) return d.offset.bodyOffset(a);
        try {
            c = a.getBoundingClientRect()
        } catch(e) {}
        var g = a.ownerDocument,
        i = g.documentElement;
        if (!c || !d.contains(i, a)) return c ? {
            top: c.top,
            left: c.left
        }: {
            top: 0,
            left: 0
        };
        a = g.body;
        g = ja(g);
        return {
            top: c.top + (g.pageYOffset || d.support.boxModel && i.scrollTop || a.scrollTop) - (i.clientTop || a.clientTop || 0),
            left: c.left + (g.pageXOffset || d.support.boxModel && i.scrollLeft || a.scrollLeft) - (i.clientLeft || a.clientLeft || 0)
        }
    }: function(b) {
        var a = this[0];
        if (b) return this.each(function(a) {
            d.offset.setOffset(this, b, a)
        });
        if (!a || !a.ownerDocument) return null;
        if (a === a.ownerDocument.body) return d.offset.bodyOffset(a);
        d.offset.initialize();
        var c, e = a.offsetParent,
        g = a.ownerDocument,
        i = g.documentElement,
        h = g.body;
        c = (g = g.defaultView) ? g.getComputedStyle(a, null) : a.currentStyle;
        for (var m = a.offsetTop,
        k = a.offsetLeft; (a = a.parentNode) && a !== h && a !== i && !(d.offset.supportsFixedPosition && "fixed" === c.position);) {
            c = g ? g.getComputedStyle(a, null) : a.currentStyle;
            m -= a.scrollTop;
            k -= a.scrollLeft;
            if (a === e) {
                m += a.offsetTop;
                k += a.offsetLeft;
                if (d.offset.doesNotAddBorder && (!d.offset.doesAddBorderForTableAndCells || !Ob.test(a.nodeName))) m += parseFloat(c.borderTopWidth) || 0,
                k += parseFloat(c.borderLeftWidth) || 0;
                e = a.offsetParent
            }
            d.offset.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (m += parseFloat(c.borderTopWidth) || 0, k += parseFloat(c.borderLeftWidth) || 0)
        }
        if ("relative" === c.position || "static" === c.position) m += h.offsetTop,
        k += h.offsetLeft;
        d.offset.supportsFixedPosition && "fixed" === c.position && (m += Math.max(i.scrollTop, h.scrollTop), k += Math.max(i.scrollLeft, h.scrollLeft));
        return {
            top: m,
            left: k
        }
    };
    d.offset = {
        initialize: function() {
            var b = t.body,
            a = t.createElement("div"),
            c,
            e,
            g,
            i = parseFloat(d.css(b, "marginTop")) || 0;
            d.extend(a.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            a.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            b.insertBefore(a, b.firstChild);
            c = a.firstChild;
            e = c.firstChild;
            g = c.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = 5 !== e.offsetTop;
            this.doesAddBorderForTableAndCells = 5 === g.offsetTop;
            e.style.position = "fixed";
            e.style.top = "20px";
            this.supportsFixedPosition = 20 === e.offsetTop || 15 === e.offsetTop;
            e.style.position = e.style.top = "";
            c.style.overflow = "hidden";
            c.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop;
            this.doesNotIncludeMarginInBodyOffset = b.offsetTop !== i;
            b.removeChild(a);
            d.offset.initialize = d.noop
        },
        bodyOffset: function(b) {
            var a = b.offsetTop,
            c = b.offsetLeft;
            d.offset.initialize();
            d.offset.doesNotIncludeMarginInBodyOffset && (a += parseFloat(d.css(b, "marginTop")) || 0, c += parseFloat(d.css(b, "marginLeft")) || 0);
            return {
                top: a,
                left: c
            }
        },
        setOffset: function(b, a, c) {
            var e = d.css(b, "position");
            "static" === e && (b.style.position = "relative");
            var g = d(b),
            i = g.offset(),
            h = d.css(b, "top"),
            m = d.css(b, "left"),
            k = {},
            n = {}; ("absolute" === e || "fixed" === e) && -1 < d.inArray("auto", [h, m]) ? (n = g.position(), e = n.top, m = n.left) : (e = parseFloat(h) || 0, m = parseFloat(m) || 0);
            d.isFunction(a) && (a = a.call(b, c, i));
            null != a.top && (k.top = a.top - i.top + e);
            null != a.left && (k.left = a.left - i.left + m);
            "using" in a ? a.using.call(b, k) : g.css(k)
        }
    };
    d.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var b = this[0],
            a = this.offsetParent(),
            c = this.offset(),
            e = Ta.test(a[0].nodeName) ? {
                top: 0,
                left: 0
            }: a.offset();
            c.top -= parseFloat(d.css(b, "marginTop")) || 0;
            c.left -= parseFloat(d.css(b, "marginLeft")) || 0;
            e.top += parseFloat(d.css(a[0], "borderTopWidth")) || 0;
            e.left += parseFloat(d.css(a[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - e.top,
                left: c.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || t.body; b && !Ta.test(b.nodeName) && "static" === d.css(b, "position");) b = b.offsetParent;
                return b
            })
        }
    });
    d.each(["Left", "Top"],
    function(b, a) {
        var e = "scroll" + a;
        d.fn[e] = function(a) {
            var g, f;
            if (a === c) {
                g = this[0];
                return ! g ? null: (f = ja(g)) ? "pageXOffset" in f ? f[b ? "pageYOffset": "pageXOffset"] : d.support.boxModel && f.document.documentElement[e] || f.document.body[e] : g[e]
            }
            return this.each(function() { (f = ja(this)) ? f.scrollTo(!b ? a: d(f).scrollLeft(), b ? a: d(f).scrollTop()) : this[e] = a
            })
        }
    });
    d.each(["Height", "Width"],
    function(b, a) {
        var e = a.toLowerCase();
        d.fn["inner" + a] = function() {
            var b = this[0];
            return b && b.style ? parseFloat(d.css(b, e, "padding")) : null
        };
        d.fn["outer" + a] = function(b) {
            var a = this[0];
            return a && a.style ? parseFloat(d.css(a, e, b ? "margin": "border")) : null
        };
        d.fn[e] = function(b) {
            var g = this[0];
            if (!g) return null == b ? null: this;
            if (d.isFunction(b)) return this.each(function(a) {
                var c = d(this);
                c[e](b.call(this, a, c[e]()))
            });
            if (d.isWindow(g)) {
                var i = g.document.documentElement["client" + a],
                h = g.document.body;
                return "CSS1Compat" === g.document.compatMode && i || h && h["client" + a] || i
            }
            if (9 === g.nodeType) return Math.max(g.documentElement["client" + a], g.body["scroll" + a], g.documentElement["scroll" + a], g.body["offset" + a], g.documentElement["offset" + a]);
            return b === c ? (g = d.css(g, e), i = parseFloat(g), d.isNaN(i) ? g: i) : this.css(e, "string" === typeof b ? b: b + "px")
        }
    });
    a.jQuery = a.$ = d
})(window); (function(a, c) {
    function e(c, e) {
        var m, k;
        m = c.nodeName.toLowerCase();
        if ("area" === m) {
            m = c.parentNode;
            k = m.name;
            if (!c.href || !k || "map" !== m.nodeName.toLowerCase()) return ! 1;
            m = a("img[usemap=#" + k + "]")[0];
            return !! m && h(m)
        }
        return (/input|select|textarea|button|object/.test(m) ? !c.disabled: "a" === m ? c.href || e: e) && h(c)
    }
    function h(c) {
        return ! a(c).parents().andSelf().filter(function() {
            return "hidden" === a.css(this, "visibility") || a.expr.filters.hidden(this)
        }).length
    }
    var k = 0,
    n = /^ui-id-\d+$/;
    a.ui = a.ui || {};
    a.ui.version || (a.extend(a.ui, {
        version: "20130318",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        _focus: a.fn.focus,
        focus: function(c, e) {
            return "number" === typeof c ? this.each(function() {
                var h = this;
                setTimeout(function() {
                    a(h).focus();
                    e && e.call(h)
                },
                c)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var c;
            c = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0);
            return /fixed/.test(this.css("position")) || !c.length ? a(document) : c
        },
        zIndex: function(e) {
            if (e !== c) return this.css("zIndex", e);
            if (this.length) for (var e = a(this[0]), i; e.length && e[0] !== document;) {
                i = e.css("position");
                if ("absolute" === i || "relative" === i || "fixed" === i) if (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i) return i;
                e = e.parent()
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++k)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && a(this).removeAttr("id")
            })
        },
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
            function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"],
    function(e, i) {
        function h(c, e, g, i) {
            a.each(k,
            function() {
                e -= parseFloat(a.css(c, "padding" + this)) || 0;
                g && (e -= parseFloat(a.css(c, "border" + this + "Width")) || 0);
                i && (e -= parseFloat(a.css(c, "margin" + this)) || 0)
            });
            return e
        }
        var k = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        n = i.toLowerCase(),
        s = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + i] = function(e) {
            return e === c ? s["inner" + i].call(this) : this.each(function() {
                a(this).css(n, h(this, e) + "px")
            })
        };
        a.fn["outer" + i] = function(c, e) {
            return "number" !== typeof c ? s["outer" + i].call(this, c) : this.each(function() {
                a(this).css(n, h(this, c, !0, e) + "px")
            })
        }
    }), a.extend(a.expr[":"], {
        data: function(c, e, h) {
            return !! a.data(c, h[3])
        },
        focusable: function(c) {
            return e(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function(c) {
            var i = a.attr(c, "tabindex"),
            h = isNaN(i);
            return (h || 0 <= i) && e(c, !h)
        }
    }), a(function() {
        var c = document.body,
        e = c.appendChild(e = document.createElement("div"));
        e.offsetHeight;
        a.extend(e.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        });
        a.support.minHeight = 100 === e.offsetHeight;
        a.support.selectstart = "onselectstart" in e;
        c.removeChild(e).style.display = "none"
    }), a.extend(a.ui, {
        plugin: {
            add: function(c, e, h) {
                var k, c = a.ui[c].prototype;
                for (k in h) c.plugins[k] = c.plugins[k] || [],
                c.plugins[k].push([e, h[k]])
            },
            call: function(a, c, e) {
                var h = a.plugins[c];
                if (h && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (c = 0; c < h.length; c++) a.options[h[c][0]] && h[c][1].apply(a.element, e)
            }
        },
        contains: a.contains,
        hasScroll: function(c, e) {
            if ("hidden" === a(c).css("overflow")) return ! 1;
            var h = e && "left" === e ? "scrollLeft": "scrollTop",
            k = !1;
            if (0 < c[h]) return ! 0;
            c[h] = 1;
            k = 0 < c[h];
            c[h] = 0;
            return k
        },
        isOverAxis: function(a, c, e) {
            return a > c && a < c + e
        },
        isOver: function(c, e, h, k, n, s) {
            return a.ui.isOverAxis(c, h, n) && a.ui.isOverAxis(e, k, s)
        }
    }))
})(jQuery); (function(a, c) {
    var e = 0,
    h = Array.prototype.slice,
    k = a.cleanData;
    a.cleanData = function(c) {
        for (var e = 0,
        i; null != (i = c[e]); e++) try {
            a(i).triggerHandler("remove")
        } catch(h) {}
        k(c)
    };
    a.widget = function(c, e, i) {
        var h, k, r, s, u = c.split(".")[0],
        c = c.split(".")[1];
        h = u + "-" + c;
        i || (i = e, e = a.Widget);
        a.expr[":"][h] = function(c) {
            return !! a.data(c, h)
        };
        a[u] = a[u] || {};
        k = a[u][c];
        r = a[u][c] = function(a, c) {
            if (!this._createWidget) return new r(a, c);
            arguments.length && this._createWidget(a, c)
        };
        a.extend(r, k, {
            version: i.version,
            _proto: a.extend({},
            i),
            _childConstructors: []
        });
        s = new e;
        s.options = a.widget.extend({},
        s.options);
        a.each(i,
        function(c, h) {
            a.isFunction(h) && (i[c] = function() {
                var a = function() {
                    return e.prototype[c].apply(this, arguments)
                },
                i = function(a) {
                    return e.prototype[c].apply(this, a)
                };
                return function() {
                    var c = this._super,
                    e = this._superApply,
                    g;
                    this._super = a;
                    this._superApply = i;
                    g = h.apply(this, arguments);
                    this._super = c;
                    this._superApply = e;
                    return g
                }
            } ())
        });
        r.prototype = a.widget.extend(s, {
            widgetEventPrefix: c
        },
        i, {
            constructor: r,
            namespace: u,
            widgetName: c,
            widgetBaseClass: h,
            widgetFullName: h
        });
        k ? (a.each(k._childConstructors,
        function(c, e) {
            var g = e.prototype;
            a.widget(g.namespace + "." + g.widgetName, r, e._proto)
        }), delete k._childConstructors) : e._childConstructors.push(r);
        a.widget.bridge(c, r)
    };
    a.widget.extend = function(e) {
        for (var g = h.call(arguments, 1), i = 0, k = g.length, p, r; i < k; i++) for (p in g[i]) r = g[i][p],
        g[i].hasOwnProperty(p) && r !== c && (e[p] = a.isPlainObject(r) ? a.widget.extend({},
        e[p], r) : r);
        return e
    };
    a.widget.bridge = function(e, g) {
        var i = g.prototype.widgetFullName;
        a.fn[e] = function(k) {
            var p = "string" === typeof k,
            r = h.call(arguments, 1),
            s = this,
            k = !p && r.length ? a.widget.extend.apply(null, [k].concat(r)) : k;
            p ? this.each(function() {
                var g, h = a.data(this, i);
                if (!h) return a.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + k + "'");
                if (!a.isFunction(h[k]) || "_" === k.charAt(0)) return a.error("no such method '" + k + "' for " + e + " widget instance");
                g = h[k].apply(h, r);
                if (g !== h && g !== c) return s = g && g.jquery ? s.pushStack(g.get()) : g,
                !1
            }) : this.each(function() {
                var c = a.data(this, i);
                c ? c.option(k || {})._init() : new g(k, this)
            });
            return s
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(c, g) {
            g = a(g || this.defaultElement || this)[0];
            this.element = a(g);
            this.uuid = e++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = a.widget.extend({},
            this.options, this._getCreateOptions(), c);
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            g !== this && (a.data(g, this.widgetName, this), a.data(g, this.widgetFullName, this), this._on({
                remove: "destroy"
            }), this.document = a(g.style ? g.ownerDocument: g.document || g), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(e, g) {
            var i = e,
            h, k, r;
            if (0 === arguments.length) return a.widget.extend({},
            this.options);
            if ("string" === typeof e) if (i = {},
            h = e.split("."), e = h.shift(), h.length) {
                k = i[e] = a.widget.extend({},
                this.options[e]);
                for (r = 0; r < h.length - 1; r++) k[h[r]] = k[h[r]] || {},
                k = k[h[r]];
                e = h.pop();
                if (g === c) return k[e] === c ? null: k[e];
                k[e] = g
            } else {
                if (g === c) return this.options[e] === c ? null: this.options[e];
                i[e] = g
            }
            this._setOptions(i);
            return this
        },
        _setOptions: function(a) {
            for (var c in a) this._setOption(c, a[c]);
            return this
        },
        _setOption: function(a, c) {
            this.options[a] = c;
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!c).attr("aria-disabled", c), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
            return this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(c, e) {
            e ? (c = a(c), this.bindings = this.bindings.add(c)) : (e = c, c = this.element);
            var i = this;
            a.each(e,
            function(e, g) {
                function h() {
                    return ! 0 === i.options.disabled || a(this).hasClass("ui-state-disabled") ? void 0 : ("string" === typeof g ? i[g] : g).apply(i, arguments)
                }
                "string" !== typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var k = e.match(/^(\w+)\s*(.*)$/),
                u = k[1] + i.eventNamespace; (k = k[2]) ? i.widget().delegate(k, u, h) : c.bind(u, h)
            })
        },
        _off: function(a, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.unbind(c).undelegate(c)
        },
        _delay: function(a, c) {
            var e = this;
            return setTimeout(function() {
                return ("string" === typeof a ? e[a] : a).apply(e, arguments)
            },
            c || 0)
        },
        _hoverable: function(c) {
            this.hoverable = this.hoverable.add(c);
            this._on(c, {
                mouseenter: function(c) {
                    a(c.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(c) {
                    a(c.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(c) {
            this.focusable = this.focusable.add(c);
            this._on(c, {
                focusin: function(c) {
                    a(c.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(c) {
                    a(c.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(c, e, i) {
            var h, k = this.options[c],
            i = i || {},
            e = a.Event(e);
            e.type = (c === this.widgetEventPrefix ? c: this.widgetEventPrefix + c).toLowerCase();
            e.target = this.element[0];
            if (c = e.originalEvent) for (h in c) h in e || (e[h] = c[h]);
            this.element.trigger(e, i);
            return ! (a.isFunction(k) && !1 === k.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    },
    function(c, e) {
        a.Widget.prototype["_" + c] = function(i, h, k) {
            "string" === typeof h && (h = {
                effect: h
            });
            var r, s = !h ? c: !0 === h || "number" === typeof h ? e: h.effect || e,
            h = h || {};
            "number" === typeof h && (h = {
                duration: h
            });
            r = !a.isEmptyObject(h);
            h.complete = k;
            h.delay && i.delay(h.delay);
            if (r && a.effects && (a.effects.effect[s] || !1 !== a.uiBackCompat && a.effects[s])) i[c](h);
            else if (s !== c && i[s]) i[s](h.duration, h.easing, k);
            else i.queue(function(e) {
                a(this)[c]();
                k && k.call(i[0]);
                e()
            })
        }
    }); ! 1 !== a.uiBackCompat && (a.Widget.prototype._getCreateOptions = function() {
        return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
    })
})(jQuery);~
function() {
    function a(c) {
        for (var e = [], g = c.length - 1; 0 <= g; g--) {
            var i = c[g];
            if ("string" === typeof i) if (k[i]) {
                var h = k[i].rely;
                e.push(i);
                h && (e = e.concat(a(h)))
            } else "undefined" != typeof console && console.log("Please check your model name:" + i);
            else "function" === typeof i && e.push(i)
        }
        return e
    }
    function c(a) {
        var c = this;
        this.stackline = a;
        this.current = this.stackline[0];
        this.bag = {
            returns: [],
            complete: !1
        };
        this.start = function() {
            "function" != typeof c.current && k[c.current] ? p(k[c.current].path, k[c.current].type, k[c.current].charset, c.next) : p("bingo", c.current, c.next, c)
        };
        this.next = function() {
            1 == c.stackline.length || 1 > c.stackline.length ? c.bag.complete = !0 : (c.stackline.shift(), c.current = c.stackline[0], c.start())
        }
    }
    function e(a, c) {
        var e = !1,
        g = !0,
        i = a.document,
        h = i.documentElement,
        k = i.addEventListener ? "addEventListener": "attachEvent",
        m = i.addEventListener ? "removeEventListener": "detachEvent",
        n = i.addEventListener ? "": "on",
        p = function(g) {
            if (! ("readystatechange" == g.type && "complete" != i.readyState) && (("load" == g.type ? a: i)[m](n + g.type, p, !1), !e && (e = !0))) c.call(a, g.type || g)
        },
        r = function() {
            try {
                h.doScroll("left")
            } catch(a) {
                setTimeout(r, 50);
                return
            }
            p("poll")
        };
        if ("complete" == i.readyState) c.call(a, "lazy");
        else {
            if (i.createEventObject && h.doScroll) {
                try {
                    g = !a.frameElement
                } catch(ha) {}
                g && r()
            }
            i[k](n + "DOMContentLoaded", p, !1);
            i[k](n + "readystatechange", p, !1);
            a[k](n + "load", p, !1)
        }
    }
    var h = document.head || document.getElementsByTagName("head")[0],
    k = {},
    n = {},
    g = {},
    i = {},
    m,
    p = function(a, c, e, i) {
        if ("string" === typeof a && "bingo" === a) c && i.bag.returns.push(c()),
        e && e();
        else if (g[a]) i && setTimeout(function() {
            p(a, c, e, i)
        },
        1);
        else if (n[a]) i && i();
        else {
            g[a] = !0;
            var k, m = c || a.toLowerCase().substring(a.lastIndexOf(".") + 1);
            if ("js" === m) k = document.createElement("script"),
            k.type = "text/javascript",
            e && (k.charset = e),
            k.src = a,
            k.async = "true";
            else if ("css" === m) {
                k = document.createElement("link");
                k.type = "text/css";
                e && (k.charset = e);
                k.rel = "stylesheet";
                k.href = a;
                n[a] = !0;
                g[a] = !1;
                h.appendChild(k);
                i && i();
                return
            }
            k.onload = k.onreadystatechange = function() {
                if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) g[a] = !1,
                n[a] = !0,
                i && i(),
                k.onload = k.onreadystatechange = null
            };
            h.appendChild(k)
        }
    },
    r = function(a, c) {
        a && c && c.path && (k[a] = c)
    };
    m = function() {
        var e = [].slice.call(arguments);
        i.core && i.autoload && !n[i] && (r("__core", {
            path: i.core
        }), e = ["__core"].concat(e));
        e = a(e).reverse();
        e = new c(e);
        e.start();
        return e.bag
    };~
    function() {
        var a = document.getElementsByTagName("script")[0],
        c = a.getAttribute("autoload"),
        a = a.getAttribute("core");
        "true" === c && a && (i.autoload = c, i.core = a);
        i.autoload && i.core && m()
    } ();
    m.exe = m;
    m.load = p;
    m.add = r;
    m.ready = function() {
        var a = arguments;
        e(window,
        function() {
            m.apply(this, a)
        })
    };
    m.watch = function(a, c, e) {
        a.watch ? a.watch(c,
        function(a, c, g) {
            e(a, c, g);
            return g
        }) : (a.__proto__ = a.__proto__ || {},
        a.__proto__.watch = function() {
            var g = this;
            g.oldValue = a[c];
            getter = function() {
                return g.oldValue
            };
            setter = function(i) {
                var h = g.oldValue;
                g.oldValue = i;
                return e.call(a, c, h, i)
            };
            Object.defineProperty ? Object.defineProperty && Object.defineProperty(a, c, {
                get: getter,
                set: setter
            }) : Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__ ? (Object.prototype.__defineGetter__.call(a, c, getter), Object.prototype.__defineSetter__.call(a, c, setter)) : a.__intervalStamp = setInterval(function() {
                var i = g.oldValue;
                return function() {
                    var g = a[c];
                    i != g && (e.call(a, c, i, g), i = g)
                }
            } (), 100)
        } ())
    };
    m.unwatch = function(a, c) {
        if (a.unwatch) a.unwatch(c);
        else {
            var e = a[c];
            delete a[c];
            a[c] = e;
            a.__intervalStamp && clearInterval(a.__intervalStamp)
        }
    };
    this.In = m
} ();
var TY = {}; (function() {
    TY = jQuery.noConflict();
    TY.extend(TY, {
        version: "1.0",
        debug: "release",
        isDebuger: function() {
            var a = "";
            switch (this.debug) {
            case "debuger":
                a = "/src";
                break;
            case "release":
                a = "http://static.tianyaui.com/global/ty";
                break;
            case "test":
                a = "http://statictest.tianyaui.com/global/ty";
                break;
            case "native":
                a = "/global/ty";
                break;
            case "qing":
                a = "http://static.tianyaui.com/global/lite/global/ty";
                break;
            case "qing-test":
                a = "http://statictest.tianyaui.com/global/lite/global/ty"
            }
            return a
        }
    })
})();
TY.namespace = function() {
    var a = arguments,
    c = null,
    e, h, k;
    if (!0 == a[a.length - 1]) for (e = 0; e < a.length - 1; ++e) {
        k = a[e].split(".");
        c = TY;
        for (h = "TY" == k[0] ? 1 : 0; h < k.length; ++h) c[k[h]] = c[k[h]] || {},
        c = c[k[h]]
    } else for (e = 0; e < a.length; ++e) {
        k = a[e].split(".");
        c = TY;
        for (h = "TY" == k[0] ? 1 : 0; h < k.length; ++h) c[k[h]] = c[k[h]] || {},
        c = c[k[h]]
    }
    return c
};
TY.extend(TY, {
    ns: function(a, c) {
        for (var e = a.split("."), h = window, k = 0; k < e.length; k++) h[e[k]] || (h[e[k]] = k != e.length - 1 || !c ? {}: c),
        h = h[e[k]];
        return h
    }
});
TY.namespace("module");
TY.extend(TY.module, In);
TY.module.add("TY.css", {
    path: TY.isDebuger() + "/resources/css/TY.css?_v=20130318",
    type: "css",
    charset: "utf-8",
    rely: null
});
function TY_getYearDay() {
    var a = new Date;
    return a.getFullYear() + "" + a.getDate() + "" + a.getHours()
}
TY.module.add("TY.core.interface", {
    path: TY.isDebuger() + "/core/interface.js?_v=" + TY_getYearDay(),
    type: "js",
    charset: "utf-8",
    rely: null
});
TY(document).data("TY.core.interface", !1);
TY.extend(TY, {
    loader: function() {
        for (var a = [], c = this, e = 0, h = arguments.length; e < h; e++)"string" === TY.type(arguments[e]) ? this.isLoadedModule(arguments[e]) || a.push(arguments[e]) : a.push(arguments[e]);
        TY(document).data("TY.core.interface") ? TY.module.exe.apply(this, a) : TY.module.exe.apply(this, ["TY.core.interface",
        function() {
            TY.module.exe.apply(c, a)
        }])
    },
    preload: function(a, c, e, h) {
        a && c && e && (a = a.replace(/\./g, "_"), 1 > TY("#" + a).size() && ("js" === e.toLowerCase() && TY("head").append('<script id="' + a + '" type="text/javascript" src="' + c + '"><\/script>'), "css" === e.toLowerCase() && TY("head").append('<link id="' + a + '"  type="text/css" rel="stylesheet" href="' + c + '"/>'), h && h()))
    },
    isLoadedModule: function(a) {
        var c = TY(document).data("TY.modules"),
        e = !1;
        if (c) for (var c = c.split(","), h = 0, k = c.length; h < k; h++) if (a === c[h]) {
            e = !0;
            break
        }
        return e
    },
    loadedModule: function(a) {
        var c = this.isLoadedModule(a),
        e = TY(document).data("TY.modules");
        e ? (e = e.split(","), c || (e.push(a), TY(document).data("TY.modules", e.join(",")))) : TY(document).data("TY.modules", a)
    }
});
TY.param = TY.param;
TY.extend(TY.param, {
    getParam: function(a, c) {
        for (var e = {},
        h = (c ? c: location.search.substring(1)).split("&"), k = -1, n = 0, g = h.length; n < g; n++) k = h[n].indexOf("="),
        -1 != k && (this.key = h[n].substring(0, k), k = h[n].substring(k + 1), k = decodeURIComponent(k), e[this.key] = k);
        return a ? e[a] : e
    }
});
TY.extend(!0, TY, {
    location: {
        protocol: function(a) {
            return (a || document.location.href).match(/^([^:]+):\/\//)[1]
        },
        host: function(a) {
            return a ? a.match(/^[^:]+:\/\/([^\/:]+)(?:\:\d+)?(?:\/.*)?$/)[1] : document.location.host
        },
        port: function(a) {
            return (a = (a || document.location.href).match(/^[^:]+:\/\/(?:\w+\.)+\w+\:(\d+)(?:\/.*)?$/)) ? a[1] : "80"
        },
        getParam: function(a) {
            var c = RegExp("[&?#]" + a + "=([^#&?]*)", "i"),
            a = c.exec(document.location.search);
            return (c = c.exec(document.location.hash)) ? c[c.length - 1] : a ? a[a.length - 1] : null
        },
        getHash: function(a) {
            return (a || location.href).match("#.*$")[0]
        },
        setHash: function(a, c) {
            var e = location.hash.substr(1),
            h = RegExp("(" + a + "=)([^&]*)"),
            c = c || "",
            e = h.test(e) ? e.replace(h,
            function(a, e) {
                return e + c
            }) : e + (("" == e ? "": "&") + a + "=" + c);
            location.hash = e
        },
        getPath: function(a) {
            var a = a || location.href,
            c;
            return - 1 < (c = a.indexOf("#!")) ? a.substring(c + 2, a.length) : a.replace(this.protocol() + "://" + location.host, "")
        },
        matcher: function(a, c) {
            var e = c ? a: this.protocol() + "://" + location.host,
            h = c || a; - 1 < location.hash.indexOf("#!") && (e = e + location.pathname + "#!");
            return this.matchUrl(location.href, e + h)
        },
        matchUrl: function(a, c) {
            var e = [],
            c = c.replace(/([\^$*+?|-])/g, "\\$1").replace(/{([^}]+)}/g,
            function(a, c) {
                e.push(c);
                return "([^/&#]+)"
            }),
            h = RegExp("^" + c + "/?$");
            if (h.test(a)) {
                for (var h = a.match(h).slice(1, e.length + 1), k = {},
                n = 0; n < h.length; n++) k[e[n]] = h[n];
                return k
            }
        }
    }
});
TY.namespace("util");
TY.util = TY.util;
TY.extend(TY.util, {
    isFinite: function(a) {
        return isFinite(a)
    },
    console: function(a) {
        if ("undefined" != typeof console) if ("object" == typeof a) if (a.title && a.msg) console.log(a.title),
        console.log(a.msg);
        else for (var c in a) console.log(c + " : " + a[c]);
        else console.log(a)
    },
    getPropertyCount: function(a) {
        var c, e = 0;
        switch (TY.type(a)) {
        case "object":
            for (c in a) a.hasOwnProperty(c) && e++;
            break;
        case "array":
            e = a.length;
            break;
        default:
            e = a.length
        }
        return e
    },
    replaceTag: function(a, c) {
        return a.replace(/(\<.*?\>)|(\<\/,*?\>)|(\<.*?\/\>)/g, c || "")
    },
    format: function(a, c) {
        if (1 == arguments.length) return function() {
            var c = TY.makeArray(arguments);
            c.unshift(a);
            return TY.validator.format.apply(this, c)
        };
        2 < arguments.length && c.constructor != Array && (c = TY.makeArray(arguments).slice(1));
        c.constructor != Array && (c = [c]);
        TY.each(c,
        function(c, h) {
            a = a.replace(RegExp("\\{" + c + "\\}", "g"), h)
        });
        return a
    },
    notNull: function(a) {
        if (a) switch (TY.type(a)) {
        case "object":
            return 0 != TY.util.getPropertyCount(a);
        case "array":
            return 0 != a.length;
        default:
            return null != a
        } else return ! 1
    },
    clearTimer: function(a) {
        clearTimeout(a);
        clearInterval(a);
        return null
    },
    getElRealSize: function(a, c) {
        if (a) {
            var e = {};
            "undefined" == typeof c && (c = !1);
            c ? (e.height = a.height() + (parseFloat(a.css("borderTopWidth")) || 0) + (parseFloat(a.css("borderBottomWidth")) || 0) + (parseFloat(a.css("paddingTop")) || 0) + (parseFloat(a.css("paddingBottom")) || 0) + (parseFloat(a.css("marginTop")) || 0) + (parseFloat(a.css("marginBottom")) || 0), e.width = a.width() + (parseFloat(a.css("paddingLeft")) || 0) + (parseFloat(a.css("paddingRight")) || 0) + (parseFloat(a.css("borderLeftWidth")) || 0) + (parseFloat(a.css("borderRightWidth")) || 0) + (parseFloat(a.css("marginLeft")) || 0) + (parseFloat(a.css("marginRight")) || 0)) : (e.height = a.height() + (parseFloat(a.css("borderTopWidth")) || 0) + (parseFloat(a.css("borderBottomWidth")) || 0) + (parseFloat(a.css("paddingTop")) || 0) + (parseFloat(a.css("paddingBottom")) || 0), e.width = a.width() + (parseFloat(a.css("paddingLeft")) || 0) + (parseFloat(a.css("paddingRight")) || 0) + (parseFloat(a.css("borderLeftWidth")) || 0) + (parseFloat(a.css("borderRightWidth")) || 0));
            return e
        }
        return null
    },
    getResourcePath: function(a) {
        function c(a, c) {
            var e, i, h = "";
            if ("js" === a) {
                e = document.getElementsByTagName("script");
                for (var p = 0,
                r = e.length; p < r; p++) if (i = e[p].src, "text/javascript" == e[p].type.toLowerCase() && RegExp(c, "gi").test(i)) {
                    h = i.slice(0, i.lastIndexOf("/"));
                    break
                }
            } else {
                e = document.getElementsByTagName("link");
                p = 0;
                for (r = e.length; p < r; p++) if (i = e[p].href, "text/css" == e[p].type.toLowerCase() && RegExp(c, "gi").test(i)) {
                    h = i.slice(0, i.lastIndexOf("/"));
                    break
                }
            }
            return h
        }
        var e = /\.css/gi,
        h = /\.js/gi;
        if (a) if ("string" === TY.type(a)) {
            a = a.toLowerCase();
            if (e.test(a)) return c("css", a);
            if (h.test(a)) return c("js", a)
        } else TY.util.console("传入的name类型错误，请传入string类型的参数。");
        else TY.util.console("未传入name")
    },
    scopeProxy: function(a, c) {
        return function() {
            return a.apply(c, arguments)
        }
    },
    getSelectTxt: function() {
        var a = "",
        a = document.selection ? document.selection.createRange().text: document.getSelection();
        return a.toString()
    },
    tmplFormat: function(a, c) {
        return a.replace(/{(.*?)}/igm,
        function(a, h) {
            return c[h] ? c[h] : a
        })
    }
});
TY.extend(!0, {
    util: {
        DateFormatter: {
            ts2TDate: function(a, c) {
                var e = new Date( + a),
                h = e.getFullYear(),
                k = (e.getMonth() + 1).toString().leftFix("0", 2),
                n = e.getDate().toString().leftFix("0", 2),
                g = [e.getHours().toString().leftFix("0", 2), ":", e.getMinutes().toString().leftFix("0", 2)].join(""),
                i = new Date,
                m = i.getFullYear(),
                p = i.getMonth(),
                r = i.getDate(),
                i = [];
                e.setHours(0);
                e.setMinutes(0);
                e.setSeconds(0);
                e = (new Date(m, p, r)).getTime() - e;
                0 >= e ? (i.push("今天"), i.push(g)) : 864E5 == e ? (i.push("昨天"), i.push(g)) : 1728E5 == e ? (i.push("前天"), i.push(g)) : (h == m ? i.push([k, "月", n, "日"].join("")) : i.push([h, "年", k, "月" + n, "日"].join("")), c && i.push(g));
                return i.join("")
            }
        }
    }
});
TY.namespace("util.event");
TY.util.event = TY.util.event;
TY.extend(TY.util.event, {
    stopBubble: function(a) {
        a && a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0
    },
    stopPrevent: function(a) {
        a && a.preventDefault ? a.preventDefault() : window.event.returnValue = !1;
        return ! 1
    }
});
"undefined" == typeof window.TY.util.proxy && (TY.util.proxy = function() {
    this.tryTimes = 0;
    this.fn.apply(this, arguments)
});
TY.extend(TY.util.proxy.prototype, {
    tryMaxTimes: 5,
    fn: function() {
        try {
            var a = arguments,
            c = null,
            e = this,
            h = null;
            if ("object" == typeof a[0]) {
                try {
                    h = frames[a[0].name],
                    c = frames[a[0].name] && frames[a[0].name].jQuery,
                    "undefined" != typeof a[0].charset && (document.charset = a[0].charset)
                } catch(k) {
                    TY.util.console({
                        title: "取得代理",
                        msg: k
                    })
                }
                if (c) {
                    TY.util.console({
                        title: "取得代理",
                        msg: "成功"
                    });
                    var n = jQuery.makeArray(a),
                    n = n.slice(2);
                    c[a[1]].apply(c, n)
                } else h || jQuery("body").append('<iframe src="' + a[0].path + '" name="' + a[0].name + '" style="display:none"></iframe>'),
                this.tryTimes++<this.tryMaxTimes && setTimeout(function() {
                    a.callee.apply(e, a)
                },
                500)
            }
        } catch(g) {
            TY.util.console({
                title: "代理错误",
                msg: g
            })
        }
    }
});
TY.namespace("mobile");
TY.extend(TY.mobile, {
    _isMobile: !1,
    checked: !1,
    core: "not Mobile",
    isMobile: function() {
        if (!this.checked) {
            var a = navigator.userAgent.toLowerCase();
            this.version = a;
            this.browser = {
                isIpad: "ipad" == a.match(/ipad/i),
                isIphoneOs: "iphone os" == a.match(/iphone os/i),
                isMidp: "midp" == a.match(/midp/i),
                isUc7: "rv:1.2.3.4" == a.match(/rv:1.2.3.4/i),
                isUc: "ucweb" == a.match(/ucweb/i),
                isAndroid: "android" == a.match(/android/i),
                isCE: "windows ce" == a.match(/windows ce/i),
                isWP: "windows phone" == a.match(/windows phone/i),
                isWM: "windows mobile" == a.match(/windows mobile/i)
            };
            for (var c in this.browser) if (this.browser[c]) {
                this.core = c;
                this._isMobile = !0;
                break
            }
            this.checked = !0
        }
        return this._isMobile
    }
});
TY.extend(String.prototype, {
    ltrim: function() {
        return this.replace(/^(\s*)/, "")
    },
    rtrim: function() {
        return this.replace(/\s*$/, "")
    },
    leftFix: function(a, c) {
        for (var e = this; e.length < c;) e = a + e;
        return e
    },
    getCNlen: function() {
        for (var a = 0,
        c = 0; c < this.length; c++) a += 128 < this.charCodeAt(c) ? 2 : 1;
        return a
    },
    subStringCn: function(a, c) {
        var e = 0,
        h = this,
        k;
        k = "..";
        c && ("boolean" == TY.type(c) && (a -= 2), "string" == TY.type(c) && (k = c.getCNlen(), a -= k, k = c));
        for (var n = 0; n < h.length; n++) if (e += 128 < h.charCodeAt(n) ? 2 : 1, e > a) {
            h = h.slice(0, n);
            c && (h += k);
            break
        }
        return h.toString()
    },
    encodeTag: function() {
        return this.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
});
jQuery.browser.msie && jQuery.extend(String.prototype, {
    trim: function() {
        return this.replace(/(^\s*)|(\s*$)/g, "")
    }
});
jQuery.browser.msie && (Array.prototype.indexOf = function(a) {
    if (void 0 === this || null === this) throw new TypeError;
    var c = Object(this),
    e = c.length >>> 0;
    if (0 === e) return - 1;
    var h = 0;
    0 < arguments.length && (h = Number(arguments[1]), h !== h ? h = 0 : 0 !== h && h !== 1 / 0 && h !== -(1 / 0) && (h = (0 < h || -1) * Math.floor(Math.abs(h))));
    if (h >= e) return - 1;
    for (h = 0 <= h ? h: Math.max(e - Math.abs(h), 0); h < e; h++) if (h in c && c[h] === a) return h;
    return - 1
});
Array.prototype.uniq = function() {
    for (var a = {},
    c = this.length,
    e = 0; e < c; e++)"undefined" == typeof a[this[e]] && (a[this[e]] = 1);
    c = this.length = 0;
    for (e in a) this[c++] = e;
    return this
};
Array.prototype.remove = function(a) {
    this.splice(this.indexOf(a), 1)
};
TY.loadedModule("TY.util.livequery");
TY.extend(TY.fn, {
    livequery: function(a, c, e) {
        var h = this,
        k;
        TY.isFunction(a) && (e = c, c = a, a = void 0);
        jQuery.each(jQuery.livequery.queries,
        function(n, g) {
            if (h.selector == g.selector && h.context == g.context && a == g.type && (!c || c.jQuerylqguid == g.fn.jQuerylqguid) && (!e || e.jQuerylqguid == g.fn2.jQuerylqguid)) return (k = g) && !1
        });
        k = k || new jQuery.livequery(this.selector, this.context, a, c, e);
        k.stopped = !1;
        k.run();
        return this
    },
    expire: function(a, c, e) {
        var h = this;
        jQuery.isFunction(a) && (e = c, c = a, a = void 0);
        jQuery.each(jQuery.livequery.queries,
        function(k, n) {
            h.selector == n.selector && h.context == n.context && (!a || a == n.type) && (!c || c.jQuerylqguid == n.fn.jQuerylqguid) && (!e || e.jQuerylqguid == n.fn2.jQuerylqguid) && !this.stopped && jQuery.livequery.stop(n.id)
        });
        return this
    }
}); (function(a) {
    a.livequery = function(c, e, h, k, n) {
        this.selector = c;
        this.context = e;
        this.type = h;
        this.fn = k;
        this.fn2 = n;
        this.elements = [];
        this.stopped = !1;
        this.id = a.livequery.queries.push(this) - 1;
        k.$lqguid = k.$lqguid || a.livequery.guid++;
        n && (n.$lqguid = n.$lqguid || a.livequery.guid++);
        return this
    };
    a.livequery.prototype = {
        stop: function() {
            var a = this;
            this.type ? this.elements.unbind(this.type, this.fn) : this.fn2 && this.elements.each(function(e, h) {
                a.fn2.apply(h)
            });
            this.elements = [];
            this.stopped = !0
        },
        run: function() {
            if (!this.stopped) {
                var c = this,
                e = this.elements,
                h = a(this.selector, this.context),
                k = h.not(e);
                this.elements = h;
                this.type ? (k.bind(this.type, this.fn), 0 < e.length && a.each(e,
                function(e, g) {
                    0 > a.inArray(g, h) && a.event.remove(g, c.type, c.fn)
                })) : (k.each(function() {
                    c.fn.apply(this)
                }), this.fn2 && 0 < e.length && a.each(e,
                function(e, g) {
                    0 > a.inArray(g, h) && c.fn2.apply(g)
                }))
            }
        }
    };
    a.extend(a.livequery, {
        guid: 0,
        queries: [],
        queue: [],
        running: !1,
        timeout: null,
        checkQueue: function() {
            if (a.livequery.running && a.livequery.queue.length) for (var c = a.livequery.queue.length; c--;) a.livequery.queries[a.livequery.queue.shift()].run()
        },
        pause: function() {
            a.livequery.running = !1
        },
        play: function() {
            a.livequery.running = !0;
            a.livequery.run()
        },
        registerPlugin: function() {
            a.each(arguments,
            function(c, e) {
                if (a.fn[e]) {
                    var h = a.fn[e];
                    a.fn[e] = function() {
                        var c = h.apply(this, arguments);
                        a.livequery.run();
                        return c
                    }
                }
            })
        },
        run: function(c) {
            void 0 != c ? 0 > a.inArray(c, a.livequery.queue) && a.livequery.queue.push(c) : a.each(a.livequery.queries,
            function(c) {
                0 > a.inArray(c, a.livequery.queue) && a.livequery.queue.push(c)
            });
            a.livequery.timeout && clearTimeout(a.livequery.timeout);
            a.livequery.timeout = setTimeout(a.livequery.checkQueue, 20)
        },
        stop: function(c) {
            void 0 != c ? a.livequery.queries[c].stop() : a.each(a.livequery.queries,
            function(c) {
                a.livequery.queries[c].stop()
            })
        }
    });
    a.livequery.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html");
    a(function() {
        a.livequery.play()
    })
})(jQuery);
TY.loadedModule("TY.util.json");
"undefined" == typeof window.TY.util && (window.TY.util = {}); (function() {
    function a(a) {
        return 10 > a ? "0" + a: a
    }
    function c(a) {
        k.lastIndex = 0;
        return k.test(a) ? '"' + a.replace(k,
        function(a) {
            var c = i[a];
            return "string" === typeof c ? c: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + a + '"'
    }
    function e(a, i) {
        var h, k, w, z, y = n,
        A, v = i[a];
        v && "object" === typeof v && "function" === typeof v.toJSON && (v = v.toJSON(a));
        "function" === typeof m && (v = m.call(i, a, v));
        switch (typeof v) {
        case "string":
            return c(v);
        case "number":
            return isFinite(v) ? "" + v: "null";
        case "boolean":
        case "null":
            return "" + v;
        case "object":
            if (!v) return "null";
            n += g;
            A = [];
            if ("[object Array]" === Object.prototype.toString.apply(v)) {
                z = v.length;
                for (h = 0; h < z; h += 1) A[h] = e(h, v) || "null";
                w = 0 === A.length ? "[]": n ? "[\n" + n + A.join(",\n" + n) + "\n" + y + "]": "[" + A.join(",") + "]";
                n = y;
                return w
            }
            if (m && "object" === typeof m) {
                z = m.length;
                for (h = 0; h < z; h += 1)"string" === typeof m[h] && (k = m[h], (w = e(k, v)) && A.push(c(k) + (n ? ": ": ":") + w))
            } else for (k in v) Object.prototype.hasOwnProperty.call(v, k) && (w = e(k, v)) && A.push(c(k) + (n ? ": ": ":") + w);
            w = 0 === A.length ? "{}": n ? "{\n" + n + A.join(",\n" + n) + "\n" + y + "}": "{" + A.join(",") + "}";
            n = y;
            return w
        }
    }
    if ("function" !== typeof Date.prototype.toJSON) try {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z": null
        },
        String.prototype.toJSON = Number.prototype.toJSON = function() {
            return this.valueOf()
        },
        Boolean.prototype.toJSON = function() {
            return this.toString()
        }
    } catch(h) {
        throw Error(h);
    }
    var k = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    n, g, i = {
        "": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    m;
    "function" !== typeof TY.util.json && (TY.util.json = function(a, c, i) {
        var h;
        g = n = "";
        if ("number" === typeof i) for (h = 0; h < i; h += 1) g += " ";
        else "string" === typeof i && (g = i);
        if ((m = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) throw Error("TY.util.stringify");
        return e("", {
            "": a
        })
    })
})();
TY.loadedModule("TY.util.dateformat");
var dateFormat = function() {
    var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    c = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    e = /[^-+\dA-Z]/g,
    h = function(a, c) {
        a = "" + a;
        for (c = c || 2; a.length < c;) a = "0" + a;
        return a
    };
    return function(k, n, g) {
        var i = dateFormat;
        1 == arguments.length && "[object String]" == Object.prototype.toString.call(k) && !/\d/.test(k) && (n = k, k = void 0);
        k = k ? new Date(k) : new Date;
        if (isNaN(k)) throw SyntaxError("invalid date");
        n = "" + (i.masks[n] || n || i.masks["default"]);
        "UTC:" == n.slice(0, 4) && (n = n.slice(4), g = !0);
        var m = g ? "getUTC": "get",
        p = k[m + "Date"](),
        r = k[m + "Day"](),
        s = k[m + "Month"](),
        u = k[m + "FullYear"](),
        w = k[m + "Hours"](),
        z = k[m + "Minutes"](),
        y = k[m + "Seconds"](),
        m = k[m + "Milliseconds"](),
        A = g ? 0 : k.getTimezoneOffset(),
        v = {
            d: p,
            dd: h(p),
            ddd: i.i18n.dayNames[r],
            dddd: i.i18n.dayNames[r + 7],
            m: s + 1,
            mm: h(s + 1),
            mmm: i.i18n.monthNames[s],
            mmmm: i.i18n.monthNames[s + 12],
            yy: ("" + u).slice(2),
            yyyy: u,
            h: w % 12 || 12,
            hh: h(w % 12 || 12),
            H: w,
            HH: h(w),
            M: z,
            MM: h(z),
            s: y,
            ss: h(y),
            l: h(m, 3),
            L: h(99 < m ? Math.round(m / 10) : m),
            t: 12 > w ? "a": "p",
            tt: 12 > w ? "am": "pm",
            T: 12 > w ? "A": "P",
            TT: 12 > w ? "AM": "PM",
            Z: g ? "UTC": (("" + k).match(c) || [""]).pop().replace(e, ""),
            o: (0 < A ? "-": "+") + h(100 * Math.floor(Math.abs(A) / 60) + Math.abs(A) % 60, 4),
            S: ["th", "st", "nd", "rd"][3 < p % 10 ? 0 : (10 != p % 100 - p % 10) * p % 10]
        };
        return n.replace(a,
        function(a) {
            return a in v ? v[a] : a.slice(1, a.length - 1)
        })
    }
} ();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
dateFormat.i18n = {
    dayNames: "Sun,Mon,Tue,Wed,Thu,Fri,Sat,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
    monthNames: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,January,February,March,April,May,June,July,August,September,October,November,December".split(",")
};
Date.prototype.format = function(a, c) {
    return dateFormat(this, a, c)
};
TY.namespace("TY.io.storage");
TY.loadedModule("TY.io.storage");
TY.io.storage = {
    hname: location.hostname ? location.hostname: "localStatus",
    isLocalStorage: window.localStorage ? !0 : !1,
    dataDom: null,
    initDom: function() {
        if (!this.dataDom) try {
            this.dataDom = document.createElement("input"),
            this.dataDom.type = "hidden",
            this.dataDom.style.display = "none",
            this.dataDom.addBehavior("#default#userData"),
            document.body.appendChild(this.dataDom)
        } catch(a) {
            return ! 1
        }
        return ! 0
    },
    set: function(a, c) {
        if (this.isLocalStorage) window.localStorage.setItem(a, TY.util.json(c));
        else if (this.initDom()) try {
            this.dataDom.load(this.hname),
            this.dataDom.setAttribute(a, TY.util.json(c)),
            this.dataDom.save(this.hname)
        } catch(e) {}
    },
    get: function(a) {
        if (this.isLocalStorage) return window.localStorage.getItem(a);
        if (this.initDom()) try {
            return this.dataDom.load(this.hname),
            this.dataDom.getAttribute(a)
        } catch(c) {
            return null
        }
    },
    remove: function(a) {
        if (this.isLocalStorage) localStorage.removeItem(a);
        else if (this.initDom()) try {
            this.dataDom.load(this.hname),
            this.dataDom.removeAttribute(a),
            this.dataDom.save(this.hname)
        } catch(c) {}
    }
};
TY.namespace("ui");
TY.loadedModule("TY.ui.mod");
"undefined" == typeof window.TY.ui.mod && (TY.ui.mod = function(a) {
    this.init(a)
});
TY.extend(TY.ui.mod.prototype, {
    version: "1.0",
    setConfig: function(a) {
        var c = TY(".modDiv").length;
        this.id = a.id || "mod_TY_ui_" + c;
        this.modZindex = a.modZindex || 100;
        this.modColor = a.modColor || "#000";
        this.modOpacity = a.modOpacity || 0.1;
        this.scrollable = !1 === a.scrollable ? !1 : !0
    },
    createHtml: function() {
        var a = [];
        a.push('<div class="modDiv" id="' + this.id + '">');
        TY("body").append(a.join(""));
        TY.event.add(window, "resize", this.setStyle, {
            modInstance: this
        })
    },
    setStyle: function(a) {
        var a = a ? a.data.modInstance: this,
        c = TY("#" + a.id);
        a.scrollable || a.lockScreen();
        c.css({
            "background-color": a.modColor,
            opacity: a.modOpacity,
            height: a.getHeight()
        })
    },
    remove: function() {
        TY("#" + this.id).remove();
        TY.event.remove(window, "resize", this.setStyle);
        this.scrollable || this.unlockScreen();
        this.destory()
    },
    destory: function() {
        for (var a in this) a = null
    },
    bringToFront: function() {
        var a = TY(".modDiv").length;
        0 < a && (a = 1 < a ? TY(".modDiv").eq(a - 2) : TY(".modDiv").eq(a - 1), a = a.css("zIndex"), "auto" == a ? a = this.modZindex: this.modZindex > a && (a = this.modZindex), TY("#" + this.id).css("z-index", +a + 2))
    },
    scrollHandler: function() {
        var a = TY("#" + this.id);
        TY.browser.msie && 6 == TY.browser.version && (a.css({
            position: "absolute"
        }), TY(window).scroll(function() {
            "undefined" != typeof time && null != time && clearTimeout(time);
            time = setTimeout(function() {
                a.animate({
                    top: TY(window).scrollTop()
                })
            },
            100)
        }))
    },
    unlockScreen: function() {
        var a = TY("html");
        if (this.boxStyle) {
            a.css({
                "padding-right": this.boxStyle.paddingRight,
                "padding-bottom": this.boxStyle.paddingBottom,
                "margin-top": this.boxStyle.marginTop,
                "margin-left": this.boxStyle.marginLeft
            });
            a.css({
                "overflow-x": this.boxStyle.overflowX,
                "overflow-y": this.boxStyle.overflowY
            });
            TY.browser.msie && TY("body").css({
                "overflow-x": this.boxStyle.bodyOverflowX,
                "overflow-y": this.boxStyle.bodyOverflowY
            });
            var c = this.boxStyle.scrollTop,
            e = this.boxStyle.scrollLeft;
            setTimeout(function() {
                a.scrollTop(c).scrollLeft(e)
            },
            0);
            this.boxStyle = void 0
        }
    },
    lockScreen: function() {
        var a = TY("html");
        if (!this.boxStyle) {
            this.boxStyle = {
                width: a.width(),
                height: a.height(),
                overflowX: a.css("overflow-x"),
                overflowY: a.css("overflow-y"),
                paddingRight: a.css("padding-right").replace(/[^\d.]+/g, ""),
                paddingBottom: a.css("padding-bottom").replace(/[^\d.]+/g, ""),
                scrollTop: a.scrollTop(),
                scrollLeft: a.scrollLeft(),
                marginTop: a.css("margin-top").replace(/[^\d.]+/g, ""),
                marginLeft: a.css("margin-left").replace(/[^\d.]+/g, "")
            };
            a.css({
                "overflow-x": "hidden",
                "overflow-y": "hidden"
            });
            if (TY.browser.msie) {
                var c = TY("body");
                TY.extend(this.boxStyle, {
                    bodyOverflowX: c.css("overflow-x"),
                    bodyOverflowY: c.css("overflow-y")
                });
                TY("body").css({
                    "overflow-x": "hidden",
                    "overflow-y": "hidden"
                })
            }
            this.boxStyle.widthOffset = a.width() - this.boxStyle.width;
            this.boxStyle.heightOffset = a.height() - this.boxStyle.height;
            c = {
                "padding-right": this.boxStyle.widthOffset,
                "padding-bottom": this.boxStyle.heightOffset,
                "margin-top": this.boxStyle.marginTop - this.boxStyle.scrollTop,
                "margin-left": this.boxStyle.marginLeft - this.boxStyle.scrollLeft
            };
            TY.browser.msie && 8 == TY.browser.version && (c["margin-top"] = this.boxStyle.marginTop - this.boxStyle.scrollTop + 1);
            a.css(c)
        }
    },
    getHeight: function() {
        var a = document.documentElement ? document.documentElement: document.body;
        return self.innerHeight || a && a.clientHeight || document.body.clientHeight
    },
    init: function(a) {
        this.setConfig(a);
        this.createHtml();
        this.setStyle();
        this.bringToFront();
        this.scrollHandler()
    }
});
TY.namespace("ui");
TY.loadedModule("TY.ui.pop");
"undefined" == typeof window.TY.ui.pop && (TY.ui.pop = function(a) {
    this.init(a)
}); (function(a) {
    TY.extend(a.prototype, {
        version: "1.0",
        setConfig: function(a) {
            this.id = "TY_ui_pop_" + (new Date).getTime();
            this.mod = null;
            this.args = TY.extend({},
            {
                isShowHead: !0,
                isClickable: !1,
                isShowButton: !0,
                isDrag: !1,
                isMod: !0,
                isShowCloseIco: !0,
                body: "",
                headTxt: "提示",
                yesTxt: "确定",
                cancelTxt: "取消",
                yesHandler: null,
                closeHandler: null,
                type: "alert",
                Buttons: [{
                    id: "submitBtn",
                    text: "确定",
                    handler: null
                },
                {
                    id: "operation1",
                    text: "操作一",
                    handler: null
                }],
                modColor: "#000",
                modOpacity: 0.1,
                modZindex: 100,
                render: null,
                top: 0,
                scrollable: !0,
                isMax: !1,
                isPadding: !0
            },
            a)
        },
        getPosition: function() {
            var a = {},
            e = TY("#" + this.id),
            h = this.getDocument();
            a.top = ((self.innerHeight || h && h.clientHeight || document.body.clientHeight) - e.height() - parseFloat(e.css("borderTopWidth")) - parseFloat(e.css("borderBottomWidth")) - parseFloat(e.css("paddingTop")) - parseFloat(e.css("paddingBottom")) - parseFloat(e.css("marginTop")) - parseFloat(e.css("marginBottom"))) / 2;
            if (TY.browser.msie && (6 == TY.browser.version || 7 == TY.browser.version)) a.top = TY(window).scrollTop() + (TY(window).height() - e.height() - parseFloat(e.css("borderTopWidth")) - parseFloat(e.css("borderBottomWidth")) - parseFloat(e.css("paddingTop")) - parseFloat(e.css("paddingBottom")) - parseFloat(e.css("marginTop")) - parseFloat(e.css("marginBottom"))) / 2;
            a.left = TY(window).scrollLeft() + (TY(window).width() - e.width() - parseFloat(e.css("borderLeftWidth")) - parseFloat(e.css("borderRightWidth")) - parseFloat(e.css("paddingLeft")) - parseFloat(e.css("paddingRight")) - parseFloat(e.css("marginLeft")) - parseFloat(e.css("marginRight"))) / 2;
            a.width = e.width();
            a.height = e.height();
            a.top += this.args.top;
            return a
        },
        createHtml: function() {
            var a = [];
            a.push('<table id="' + this.id + '" class="TY_ui_window">');
            a.push('\t<tr><td class="btl"></td><td class="btc"></td><td class="btr"></td></tr>');
            a.push('\t<tr><td class="bcl"></td><td class="bcc">');
            this.args.isShowHead && (a.push('\t<div class="topBar">'), a.push('\t\t<h3 class="title">' + this.args.headTxt + "</h3>"), this.args.isShowCloseIco && a.push('\t<div class="closeBtn" ></div>'), a.push("\t</div>"));
            a.push('\t<div class="ty-content clearfix" style="' + (!1 == this.args.isPadding ? "padding:0;": "") + '">');
            a.push(this.args.body);
            a.push("\t</div>");
            if (this.args.isShowButton) {
                a.push('<div class="btnArea">');
                switch (this.args.type) {
                case "alert":
                    a.push('<input type="button" class="yes" value="' + this.args.yesTxt + '"/>');
                    break;
                case "confirm":
                    a.push('<input type="button" class="cancel" value="' + this.args.cancelTxt + '"/>');
                    a.push('<input type="button" class="yes" value="' + this.args.yesTxt + '"/>');
                    break;
                case "window":
                    var e = [];
                    if (TY.isArray(this.args.Buttons)) for (var e = this.args.Buttons.reverse(), h = 0, k = e.length; h < k; h++) a.push('<input type="button"  value="' + e[h].text + '"/>')
                }
                a.push("</div>")
            }
            a.push('\t</td><td class="bcr"></td></tr>');
            a.push('\t<tr><td class="bfl"></td><td class="bfc"></td><td class="bfr"></td></tr>');
            a.push("</table>");
            a.push('<iframe frameborder="0" class="iframeDiv" id="iframe_' + this.id + '"/>');
            if (this.args.isMod) {
                var n = this;
                TY.loader("TY.ui.mod",
                function() {
                    n.mod = new TY.ui.mod({
                        id: "mod_" + n.id,
                        scrollable: n.args.scrollable,
                        modZindex: n.args.modZindex
                    })
                })
            }
            TY("body").append(a.join(""));
            this.args.render && this.args.render();
            this.setContentWidth();
            this.popPosHandler();
            this.show()
        },
        getDocument: function() {
            return document.documentElement ? document.documentElement: document.body
        },
        setContentWidth: function() {
            var a = this.getDocument(),
            e = self.innerWidth || a && a.clientWidth || document.body.clientWidth,
            a = self.innerHeight || a && a.clientHeight || document.body.clientHeight,
            h = TY("#" + this.id),
            k = TY(".ty-content", h);
            this.args.isMax ? (k.css({
                width: e - 140
            }), k.css({
                height: a - 100
            })) : (h.width() > e - 20 && k.parent().css({
                width: e / 2
            }), 200 > h.width() && k.parent().css({
                width: 200
            }), h.height() > a && (k.parent().css({
                height: a / 2
            }), k.css({
                height: a / 2,
                overflow: "hidden",
                "overflow-y": "auto"
            })))
        },
        popPosHandler: function(a) {
            a = a ? a.data.popInstance: this;
            if (TY.browser.msie && a.args.scrollable && (6 == TY.browser.version || 7 == TY.browser.version)) TY("#" + a.id).css({
                position: "absolute"
            }),
            TY("#iframe_" + a.id).css({
                position: "absolute"
            }),
            TY.event.add(window, "scroll", a.popScroll, {
                id: a.id
            });
            var e = a.getPosition();
            a.bringToFront();
            a.getDocument();
            TY("#" + a.id).css({
                top: e.top,
                left: e.left,
                display: "inline-block"
            });
            TY("#iframe_" + a.id).css({
                top: e.top,
                left: e.left,
                width: e.width,
                height: e.height
            })
        },
        bindEvent: function() {
            var a = TY("#" + this.id),
            e = this,
            h;
            TY(document).bind("keyup.TY_ui_pop",
            function(a) {
                27 === a.which && (e.args.closeHandler && e.args.closeHandler(), e.remove())
            });
            a.find(".closeBtn").click(function() {
                e.remove();
                e.args.closeHandler && e.args.closeHandler()
            });
            TY("#" + this.id + " .btnArea :input").click(function() {
                h = TY(this);
                if ("window" == e.args.type) e.args.Buttons[h.index()].handler();
                else if (h.hasClass("yes")) {
                    var a = !0;
                    e.args.yesHandler && (a = e.args.yesHandler());
                    void 0 === a && (a = !0);
                    a && e.remove()
                } else e.args.closeHandler && e.args.closeHandler(),
                e.remove()
            });
            var k = TY("#iframe_" + this.id),
            a = TY("#" + this.id);
            this.args.isDrag && (TY("#" + e.id).find(".topBar").hover(function() {
                TY(this).css("cursor", "move")
            }), TY.loader("TY.ui.draggable",
            function() {
                e.args.isShowHead ? a.draggable({
                    handle: ".topBar",
                    callback: function() {
                        k.css({
                            top: a.css("top"),
                            left: a.css("left")
                        })
                    }
                }) : a.draggable({
                    callback: function() {
                        k.css({
                            top: a.css("top"),
                            left: a.css("left")
                        })
                    }
                })
            }));
            this.args.isClickable && setTimeout(function() {
                TY.event.add(document, "click", e.clickToRemove, {
                    instance: e
                })
            },
            100);
            this.args.isDrag || TY.event.add(window, "resize", e.popPosHandler, {
                popInstance: e
            })
        },
        clickToRemove: function(a) {
            var e = a.target,
            a = a.data.instance;
            TY.contains(TY("#" + a.id)[0], e) || a.remove()
        },
        dragHandler: function(a) {
            function e(a) {
                window.getSelection && window.getSelection().removeAllRanges();
                k.css({
                    top: i + a.pageY - p,
                    left: g + a.pageX - m
                });
                n.css({
                    top: i + a.pageY - p,
                    left: g + a.pageX - m
                })
            }
            function h() {
                TY(document).unbind("mousemove", e).unbind("mouseup", h);
                k[0].setCapture ? (k[0].releaseCapture(), k.unbind("onlosecaptur", h)) : TY(window).unbind("onblur", h)
            }
            var k = TY(a),
            a = TY(".topBar", k),
            n = TY("#iframe_" + this.id);
            k.show();
            a.hover(function() {
                TY(this).css("cursor", "move")
            },
            function() {
                TY(this).css("cursor", "default")
            }).bind("mousedown",
            function(a) {
                r = TY(document).scrollTop();
                s = TY(document).scrollLeft();
                g = k.offset().left;
                i = k.offset().top;
                m = a.pageX + s;
                p = a.pageY + r;
                TY(document).bind("mousemove", e).bind("mouseup", h);
                k[0].setCapture ? (k[0].setCapture(), k.bind("onlosecaptur", h)) : TY(window).bind("onblur", h)
            });
            var g, i, m, p, r, s
        }, bringToFront: function() {
            var a = TY(".TY_ui_window").length;
            0 < a ? (a = 1 < a ? TY(".TY_ui_window").eq(a - 2) : TY(".TY_ui_window").eq(a - 1), a = a.css("zIndex")) : a = this.args.modZindex;
            "auto" == a ? a = this.args.modZindex: this.args.modZindex > a && (a = this.args.modZindex);
            TY("#" + this.id).css("z-index", +a + 3)
        },
        popScroll: function(a) {
            try {
                var e = TY("#" + a.data.id),
                h = TY("#iframe_" + a.data.id),
                k,
                a = null;
                "undefined" != typeof a && null != a && clearTimeout(a);
                a = setTimeout(function() {
                    k = TY(window).scrollTop() + (TY(window).height() - e.height() - parseFloat(e.css("borderTopWidth")) - parseFloat(e.css("borderBottomWidth")) - parseFloat(e.css("paddingTop")) - parseFloat(e.css("paddingBottom")) - parseFloat(e.css("marginTop")) - parseFloat(e.css("marginBottom"))) / 2;
                    e.stop(!0, !1);
                    h.stop(!0, !1);
                    e.animate({
                        top: k
                    },
                    "fast");
                    h.animate({
                        top: k
                    },
                    "fast")
                },
                100)
            } catch(n) {
                throw new Exception("IE6 popScroll ERROR");
            }
        },
        show: function() {
            TY("#" + this.id).show();
            TY("#iframe_" + this.id).show()
        },
        remove: function() {
            TY("#" + this.id).remove();
            TY("#iframe_" + this.id).remove();
            TY.event.remove(window, "resize", this.popPosHandler);
            TY(document).unbind("keyup.TY_ui_pop");
            null != this.mod && this.mod.remove();
            TY.browser.msie && this.args.scrollable && (6 == TY.browser.version || 7 == TY.browser.version) && TY.event.remove(window, "scroll", this.popScroll); (!this.args.isShowHead || this.args.isClickable) && TY.event.remove(document, "click", this.clickToRemove);
            this.destory()
        },
        destory: function() {
            try {
                var a = this,
                e;
                for (e in a) e = null;
                setTimeout(function() {
                    delete a
                },
                100)
            } catch(h) {
                throw Error("TY.ui.pop.destory ERROR");
            }
        },
        init: function(a) {
            this.setConfig(a);
            this.createHtml();
            this.bindEvent()
        }
    })
})(TY.ui.pop); (function(a) {
    function c() {
        var a = [];
        g = "ty_login_window_" + (new Date).getTime();
        a.push('<div id="' + g + '" class="TY_login_window">');
        a.push('<div class="TY_login_window_body">');
        a.push('<form method="post" target="_top" accept-charset="UTF-8" action="' + k + '" id="topguideloginform" name="topguideloginform" >');
        a.push('<div class="TY_dialog_body" style="height:70px;*height:65px!important">');
        a.push('<div class="TY_login_users">');
        a.push("<ul>");
        a.push("<li>");
        a.push('<span class="ty_login_title"><select name="method">');
        a.push('<option value="name">用户名</option>');
        a.push('<option value="email">注册邮箱</option>');
        a.push('<option value="mobile">认证手机</option>');
        a.push("</select>：</span>");
        a.push('<input name="vwriter" type="text" class="login_input" tabindex="1"/>&nbsp;');
        a.push('<a id="registerLink" href="http://passport.tianya.cn/register/default.jsp"  tabindex="3" target="_blank">立即注册</a></li>');
        a.push('<li><span class="ty_login_title">密　码：</span>');
        a.push('<input type="password"  name="vpassword" class="login_input"  tabindex="2"/>&nbsp;');
        a.push('<a href="http://passport.tianya.cn/fp/fp.jsp" target="_blank" tabindex="4">找回密码</a></li>');
        a.push('<li id="login_checkbox_li"><span class="ty_login_title"></span><input type="checkbox" name="rmflag" id="rmflag" class="login_checkbox" value="1" checked="checked" />下次自动登录</li>');
        a.push('<input  type="hidden"   value="http://www.tianya.cn/"    name="returnURL" />');
        a.push('<input type="hidden"  name="fowardURL"  value="http://www.tianya.cn/" />');
        a.push("</ul>");
        a.push("</div>");
        a.push("</div>");
        a.push("</form>");
        a.push("</div>");
        a.push('<div class="TY_otherlogin">使用其它网站帐号登录：');
        a.push('<a class="weibologin" target="_blank" href="https://api.weibo.com/oauth2/authorize?client_id=482040646&amp;response_type=code&amp;with_offical_account=1&amp;redirect_uri=http://passport.tianya.cn:80/login/sinaweibo.do"><img title="新浪微博帐号登录" src="http://global.tianyaui.com/global/gnav/images/weibo.gif" class="weiboimg"></a>');
        a.push('<a class="qq" href="https://graph.qq.com/oauth2.0/authorize?client_id=100253980&response_type=code&redirect_uri=http://passport.tianya.cn/login/qq.do" target="_blank" title="QQ帐号登录"><img src="http://global.tianyaui.com/global/gnav/images/qq.gif" title="QQ帐号登录" style="margin-left:10px;"/></a>');
        a.push('<a class="qweibo" href="https://open.t.qq.com/cgi-bin/oauth2/authorize?client_id=801132217&response_type=code&redirect_uri=http://passport.tianya.cn/login/txwb.do" target="_blank" title="腾讯微博登录"><img src="http://static.tianyaui.com/global/common/images/tencent.gif" title="腾讯微博帐号登录" style="margin-left:10px;"/></a>');
        a.push('<a class="msn" href="https://oauth.live.com/authorize?client_id=00000000440C839B&scope=wl.basic,wl.offline_access&response_type=code&locale=zh_Hans&redirect_uri=http://passport.tianya.cn/login/msn.do" target="_blank" title="MSN帐号登录"><img src="http://static.tianyaui.com/global/common/images/msn.gif" title="MSN帐号登录" style="margin-left:10px;"/></a>');
        a.push('<a class="mail139" href="http://passport.tianya.cn/login/goto139mail.do" target="_blank" title="139邮箱登录"><img src="http://static.tianyaui.com/global/common/images/139.gif" title="139邮箱登录" style="margin-left:10px;"/></a>');
        a.push("</div>");
        a.push("</div>");
        return a.join("")
    }
    function e() {
        var c = a("#" + g);
        a(":password", c).bind("keyup",
        function(a) {
            13 === a.which && h()
        })
    }
    function h() {
        var c = a("#" + g),
        e = a("#topguideloginform");
        jQuery(".TY_login_window_body input[name=vwriter]", c).val() ? jQuery(".TY_login_window_body input[name=vpassword]", c).val() ? (document.charset = "UTF-8", e.submit()) : alert("请先输入密码") : alert("请先输入用户名")
    }
    var k = "http://passport.tianya.cn/login",
    n, g;
    a.extend(TY, {
        loginAction: function(i, k, p) {
            if (jQuery.isReady) {
                var r = !0,
                s = !0,
                u = arguments;
                "boolean" == a.type(u[0]) && (!1 == u[0] && (s = !1), i = u[1], k = u[2], p = u[3]);
                buttons = [{
                    id: "submitBtn",
                    text: "登录",
                    handler: function() {
                        h()
                    }
                },
                {
                    id: "cancelBtn",
                    text: "取消",
                    handler: function() {
                        n && n.remove()
                    }
                }]; ! 1 == s && (buttons.splice(1, 1), r = !1);
                i || (i = "社区登录");
                k || (k = window.location.href);
                p || (p = window.location.href);
                "http://blog.tianya.cn/" == !k && (k = "http://blog.tianya.cn/default.asp");
                "http://blog.tianya.cn/" == !p && (p = "http://blog.tianya.cn/default.asp");
                s = "";
                s = c();
                n = new TY.ui.pop({
                    headTxt: i,
                    isShowCloseIco: r,
                    body: s,
                    type: "window",
                    Buttons: buttons,
                    modZindex: 12E3
                });
                e();
                a(".TY_login_window_body input[name=returnURL]", a("#" + g)).val(p);
                a(".TY_login_window_body input[name=fowardURL]", a("#" + g)).val(k);
                r = encodeURIComponent(window.location.href); - 1 == document.getElementById("registerLink").href.indexOf("sourceURL=") && (document.getElementById("registerLink").href = document.getElementById("registerLink").href + "?sourceURL=" + r);
                a(".TY_login_window_body input[name=vwriter]", a("#" + g)).focus();
                return ! 1
            }
            a(document).ready(function() {
                TY.loginAction(i, k, p)
            })
        }
    })
})(jQuery);
"undefined" === typeof MenuUtil && (window.MenuUtil = {});
MenuUtil.login = function(a, c, e) {
    TY.loginAction(a, c, e)
};
MenuUtil.loginIfr = function(a, c, e) {
    TY.loginAction(a, c, e)
};
var tb_show2 = function(a, c) {
    var e = "";
    c.html && (e = c.html);
    c.src && (e = c.width && c.height ? '<iframe width="' + c.width + '" height="' + c.height + '" frameborder="0" src="' + c.src + '"/>': '<iframe frameborder="0" src="' + c.src + '"/>');
    window.tb_show2_pop = new TY.ui.pop({
        isShowHead: !1,
        isShowButton: !1,
        isClickable: !0,
        body: e,
        isPadding: !1
    })
},
tb_remove2 = function() {
    try {
        window.tb_show2_pop.remove()
    } catch(a) {
        TY.util.console(a)
    }
};
"undefined" == typeof tb_show && (window.tb_show = function() {
    var a = arguments;
    window.tb_show = null;
    TY.loader("TY.util.thickbox",
    function() {
        tb_show.apply(this, a)
    })
});
var TY_Common_util = {
    showTips: function(a, c, e, h) {
        "undefined" == typeof TY.ui.tips ? TY.loader("TY.ui.tips",
        function() {
            setTimeout(function() {
                new TY.ui.tips({
                    type: a || "success",
                    msg: c || "成功提示",
                    position: "midCenter",
                    time: e || 3E3,
                    callback: function() {
                        h && h()
                    }
                })
            },
            100)
        }) : new TY.ui.tips({
            type: a || "success",
            msg: c || "成功提示",
            position: "midCenter",
            time: 3E3,
            callback: function() {
                h && h()
            }
        })
    }
};
TY_Twitter_util = function() {
    this.preUrl = "http://www.tianya.cn";
    this.allFollowVarName = "TY_twitter_Data_allFollow";
    this.followResponseVarName = "TY_twitter_Data_followResponse";
    this.FollowList = [];
    TY.loader("TY.ui.tips");
    return this
};
TY_Twitter_util.prototype.getAllfollow = function(a) {
    var c = this;
    TY.ajax({
        url: c.preUrl + "/api/tw?method=following.ice.selectall",
        data: {
            "var": c.allFollowVarName
        },
        dataType: "script",
        cache: !1,
        type: "get",
        success: function() {
            if (window[c.allFollowVarName]) {
                var e = window[c.allFollowVarName];
                e && e.success && e.data && (0 < e.data.friend.length && (c.FollowList = c.FollowList.concat(e.data.friend)), 0 < e.data.follow.length && (c.FollowList = c.FollowList.concat(e.data.follow)));
                a && a()
            }
        },
        failure: function() {
            TY.util.console("请求我的关注接口失败")
        }
    })
};
TY_Twitter_util.prototype.addFollow = function(a, c) {
    var e = this;
    this.getAllfollow(function() { - 1 != e.FollowList.indexOf( + a) ? TY_Common_util.showTips("warn", "您已关注了该用户了") : TY.ajax({
            url: e.preUrl + "/api/tw?method=following.ice.insert",
            type: "get",
            dataType: "script",
            data: {
                "params.followingUserId": a,
                "var": e.followResponseVarName
            },
            cache: !1,
            success: function() {
                if (window[e.followResponseVarName]) {
                    var h = window[e.followResponseVarName];
                    1 === h.success ? (e.FollowList.push( + a), TY_Common_util.showTips("success", "关注成功"), c && c(h.data)) : TY_Common_util.showTips("warn", h.message || "关注成功")
                }
            },
            failure: function() {
                TY.util.console("关注请求失败")
            }
        })
    })
};