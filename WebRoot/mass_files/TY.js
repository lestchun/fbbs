document.domain = "localhost";
var __global = {
	cityNames: "北京,上海,天津,重庆,石家庄,保定,唐山,太原,大同,晋城,呼和浩特,包头,沈阳,大连,长春,四平,吉林,哈尔滨,佳木斯,南京,苏州,扬州,无锡,徐州,杭州,温州,绍兴,宁波,合肥,芜湖,安庆,马鞍山,福州,厦门,泉州,南昌,景德镇,赣州,九江,济南,青岛,淄博,威海,郑州,开封,洛阳,安阳,南阳,武汉,宜昌,襄樊,长沙,株洲,常德,岳阳,广州,深圳,佛山,潮州,东莞,南宁,柳州,桂林,海口,三亚,儋州,文昌,乐东,五指山,琼海,万宁,定安,昌江,临高,澄迈,东方,陵水,保亭,屯昌,琼中,白沙,成都,自贡,绵阳,乐山,贵阳,遵义,六盘水,昆明,拉萨,西安,宝鸡,咸阳,兰州,天水,乌鲁木齐,台湾,香港,澳门,西宁,银川,张家口,秦皇岛,沧州,邢台,承德,廊坊,邯郸,衡水,长治,运城,朔州,晋中,吕梁,临汾,忻州,阳泉,通辽,鄂尔多斯,呼伦贝尔,巴彦淖尔市,乌海,兴安盟,赤峰,阿拉善盟,锡林郭勒盟,乌兰察布市,朝阳,本溪,抚顺,鞍山,盘锦,铁岭,锦州,葫芦岛,丹东,阜新,营口,辽阳,通化,白山,延边朝鲜族自治州,辽源,松原,白城,齐齐哈尔,绥化,大兴安岭地区,伊春,鹤岗,双鸭山,黑河,鸡西,大庆,牡丹江,七台河,常州,连云港,南通,盐城,宿迁,泰州,镇江,淮安,丽水,衢州,舟山,台州,湖州,嘉兴,金华,淮北,淮南,亳州,池州,六安,阜阳,蚌埠,滁州,铜陵,宿州,黄山,宣城,巢湖,南平,漳州,龙岩,宁德,莆田,三明,吉安,宜春,抚州,新余,萍乡,上饶,鹰潭,德州,莱芜,聊城,枣庄,潍坊,泰安,东营,烟台,临沂,日照,滨州,荷泽,济宁,许昌,三门峡,平顶山,驻马店,周口,濮阳,鹤壁,济源,焦作,商丘,漯河,新乡,信阳,鄂州,咸宁,孝感,荆州,十堰,黄冈,黄石,恩施土家族苗族自治州,荆门,随州,益阳,永州,郴州,湘西土家族苗族自治州,邵阳,怀化,娄底,湘潭,张家界,衡阳,清远,河源,揭阳,汕头,珠海,肇庆,梅州,中山,云浮,江门,惠州,茂名,韶关,汕尾,湛江,阳江,河池,崇左,钦州,玉林,梧州,贺州,贵港,北海,防城港,百色,来宾,雅安,凉山彝族自治州,宜宾,泸州,资阳,阿坝藏族羌族自治州,甘孜藏族自治州,德阳,攀枝花,广元,内江,巴中,眉山,达州,南充,遂宁,广安,毕节,黔南布依族苗族自治州,黔东南苗族侗族自治州,黔西南布依族苗族自治州,铜仁,安顺,迪庆藏族自治州,文山壮族苗族自治州,德宏德宏傣族景颇族自治州,临沧,玉溪,西双版纳傣族自治州,楚雄彝族自治州,思茅,保山,昭通,曲靖,红河哈尼族彝族自治州,大理大理白族自治州,怒江傈僳族自治州,丽江,日喀则,林芝,阿里,那曲,昌都,山南,榆林,渭南,安康,汉中,商洛,铜川,延安,白银,庆阳,金昌,武威,陇南,甘南藏族自治州,酒泉,张掖,临夏回族自治州,平凉,定西,海西蒙古族藏族自治州,玉树藏族自治州,果洛藏族自治州,海南藏族自治州,海北藏族自治州,黄南藏族自治州,海东,石嘴山,固原,吴忠,阿克苏,塔城,伊犁哈萨克自治州,阿勒泰,巴音郭楞蒙古自治州,克孜勒苏柯尔克孜自治州,克拉玛依,石河子,昌吉回族自治州,伊犁哈萨克自治州,喀什,和田,哈密,博尔塔拉蒙古自治州,吐鲁番,伊吾,顺德".split(","),
	setCookie: function(a, b, c, g, d, m) {
		null === b ? __global.setCookieNoEscape(a, null, c, g, d, m) : __global.setCookieNoEscape(a, escape(b), c, g, d, m)
	},
	setCookieNoEscape: function(a, b, c, g, d, m) {
		var h = -1;
		null == b ? (h = new Date, h.setTime(h.getTime() - 864E5), h = h.toGMTString()) : "number" == typeof c && 0 <= c && (h = new Date, h.setTime(h.getTime() + 864E5 * c), h = h.toGMTString());
		document.cookie = a + "=" + b + ";" + ( - 1 != h ? " expires=" + h + ";": "") + (g ? "path=" + g: "") + (d ? "; domain=" + d: "") + (m ? "; secure": "")
	},
	setPartCookieNoEscape: function(a, b, c, g, d, m, h) {
		var l = this.getCookie(a);
		if (l) {
			for (var n = l.split("&"), l = n.length, r = Array(l), v = Array(l), p = -1, z = 0; z < l; z++) {
				var A = n[z].split("=");
				r[z] = A[0];
				v[z] = A[1];
				A[0] == b && (p = z)
			} - 1 == p ? (r[l] = b, v[l++] = null != c ? escape(c) : null) : v[p] = null != c ? escape(c) : null;
			b = "";
			if (0 < l) {
				for (c = 0; c < l; c++) null != v[c] && (b += "&" + r[c] + "=" + v[c]);
				b = b.substr(1)
			}
			"" == b && (b = null);
			this.setCookieNoEscape(a, b, g, d, m, h)
		} else null != c && (b = b + "=" + escape(c), this.setCookieNoEscape(a, b, g, d, m, h));
		return null
	},
	getCookie: function(a) {
		var b = null;
		if (document.cookie && "" != document.cookie) for (var c = document.cookie.split(";"), g = 0; g < c.length; g++) {
			var d = c[g].replace(/(^\s*)|(\s*$)/g, "");
			if (d.substring(0, a.length + 1) == a + "=") {
				b = unescape(d.substring(a.length + 1));
				break
			}
		}
		return b
	},
	setPartCookie: function(a, b, c, g, d, m, h) {
		var l = this.getCookie(a);
		if (l) {
			for (var n = l.split("&"), l = n.length, r = Array(l), v = Array(l), p = -1, z = 0; z < l; z++) {
				var A = n[z].split("=");
				r[z] = A[0];
				v[z] = A[1];
				A[0] == b && (p = z)
			} - 1 == p ? (r[l] = b, v[l++] = null != c ? escape(c) : null) : v[p] = null != c ? escape(c) : null;
			b = "";
			if (0 < l) {
				for (c = 0; c < l; c++) null != v[c] && (b += "&" + r[c] + "=" + v[c]);
				b = b.substr(1)
			}
			"" == b && (b = null);
			this.setCookie(a, b, g, d, m, h)
		} else null != c && (b = b + "=" + escape(c), this.setCookie(a, b, g, d, m, h));
		return null
	},
	getPartCookie: function(a, b) {
		var c = this.getCookie(a);
		if (c) for (var c = c.split("&"), g = 0; g < c.length; g++) {
			var d = c[g].split("=");
			if (d[0] == b) return c = d[1],
			unescape(c)
		}
		return null
	},
	getParameter: function(a) {
		for (var b = document.getElementsByTagName("script"), c = b.length, g = 0; g < c; g++) if (b[g].src && b[g].src.match(/global\.js(\?.*)?$/)) {
			var d = RegExp("(^|)" + a + "=([^&]*)(&|$)", "gi").exec(b[g].src);
			if (d) return d[2]
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
		var a = __global.getPartCookie("sso", "wsid"); 
		- 1 != this._cookieTempTime && 
		!isNaN(this.getUserId()) && 
		0 < this.getUserId() && 
		!isNaN(this.getKey()) && 
		0 < this.getKey() && 
		a && 
		32 == a.length && 
		(this._isOnline = !0);
		//return true;
		return this._isOnline
	},
	IsLoadReadCookieFile: !0,
	refreshCookie: function() {
		var a = this.getCookieCstmTime(),
		b = (new Date).getTime() / 1E3;
		a && 7200 < b - a && document.write('<script charset="utf-8" src="http://passport.tianya.cn/refresh.jsp?loginFrom=' + encodeURIComponent(window.location.href) + '"><\/script>');
		this.setCookieCstmTime(b)
	},
	updatePartCookie: function(a, b, c) {
		this.setPartCookieNoEscape(a, b, c, this.getCookieDaysLeft(), "/", this.getRootDomain(), !1)
	},
	getRootDomain: function() {
		var a = document.domain.split(".");
		return "." + a[a.length - 2] + "." + a[a.length - 1]
	},
	getCookieDaysLeft: function() {
		var a = this.getPartCookie("time", "et"),
		b = 30;
		a && (b = -1 == a ? a: (a - (new Date).getTime() / 1E3) / 86400);
		return b
	}
};
__global.refreshCookie(); (function() {
	try {
		var a = null,
		b = 0,
		b = (a = navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)) ? parseInt(a[1], 10) : 0;
		if (6 == b) try {
			document.execCommand("BackgroundImageCache", !1, !0)
		} catch(c) {}
	} catch(g) {}
})(); (function(a, b) {
	function c(e, a, q) {
		if (q === b && 1 === e.nodeType) if (q = "data-" + a.replace(Pa, "-$1").toLowerCase(), q = e.getAttribute(q), "string" === typeof q) {
			try {
				q = "true" === q ? !0 : "false" === q ? !1 : "null" === q ? null: !f.isNaN(q) ? parseFloat(q) : Qa.test(q) ? f.parseJSON(q) : q
			} catch(o) {}
			f.data(e, a, q)
		} else q = b;
		return q
	}
	function g(e) {
		for (var a in e) if ("toJSON" !== a) return ! 1;
		return ! 0
	}
	function d(e, a, q) {
		var o = a + "defer",
		c = a + "queue",
		x = a + "mark",
		k = f.data(e, o, b, !0);
		k && ("queue" === q || !f.data(e, c, b, !0)) && ("mark" === q || !f.data(e, x, b, !0)) && setTimeout(function() { ! f.data(e, c, b, !0) && !f.data(e, x, b, !0) && (f.removeData(e, o, !0), k.resolve())
		},
		0)
	}
	function m() {
		return ! 1
	}
	function h() {
		return ! 0
	}
	function l(e, a, q) {
		var o = f.extend({},
		q[0]);
		o.type = e;
		o.originalEvent = {};
		o.liveFired = b;
		f.event.handle.call(a, o);
		o.isDefaultPrevented() && q[0].preventDefault()
	}
	function n(e) {
		var a, q, b, c, x, k, d, h, g, m, l, n = [];
		c = [];
		x = f._data(this, "events");
		if (! (e.liveFired === this || !x || !x.live || e.target.disabled || e.button && "click" === e.type)) {
			e.namespace && (l = RegExp("(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
			e.liveFired = this;
			var u = x.live.slice(0);
			for (d = 0; d < u.length; d++) x = u[d],
			x.origType.replace(ha, "") === e.type ? c.push(x.selector) : u.splice(d--, 1);
			c = f(e.target).closest(c, e.currentTarget);
			for (h = 0, g = c.length; h < g; h++) {
				m = c[h];
				for (d = 0; d < u.length; d++) if (x = u[d], m.selector === x.selector && (!l || l.test(x.namespace)) && !m.elem.disabled) {
					k = m.elem;
					b = null;
					if ("mouseenter" === x.preType || "mouseleave" === x.preType) e.type = x.preType,
					(b = f(e.relatedTarget).closest(x.selector)[0]) && f.contains(k, b) && (b = k); (!b || b !== k) && n.push({
						elem: k,
						handleObj: x,
						level: m.level
					})
				}
			}
			for (h = 0, g = n.length; h < g; h++) {
				c = n[h];
				if (q && c.level > q) break;
				e.currentTarget = c.elem;
				e.data = c.handleObj.data;
				e.handleObj = c.handleObj;
				l = c.handleObj.origHandler.apply(c.elem, arguments);
				if (!1 === l || e.isPropagationStopped()) if (q = c.level, !1 === l && (a = !1), e.isImmediatePropagationStopped()) break
			}
			return a
		}
	}
	function r(e, a) {
		return (e && "*" !== e ? e + ".": "") + a.replace(Ra, "`").replace(Sa, "&")
	}
	function v(e, a, q) {
		a = a || 0;
		if (f.isFunction(a)) return f.grep(e,
		function(e, f) {
			return !! a.call(e, f, e) === q
		});
		if (a.nodeType) return f.grep(e,
		function(e) {
			return e === a === q
		});
		if ("string" === typeof a) {
			var b = f.grep(e,
			function(e) {
				return 1 === e.nodeType
			});
			if (Ta.test(a)) return f.filter(a, b, !q);
			a = f.filter(a, b)
		}
		return f.grep(e,
		function(e) {
			return 0 <= f.inArray(e, a) === q
		})
	}
	function p(e, a) {
		if (1 === a.nodeType && f.hasData(e)) {
			var b = f.expando,
			o = f.data(e),
			c = f.data(a, o);
			if (o = o[b]) {
				var x = o.events,
				c = c[b] = f.extend({},
				o);
				if (x) {
					delete c.handle;
					c.events = {};
					for (var k in x) {
						b = 0;
						for (o = x[k].length; b < o; b++) f.event.add(a, k + (x[k][b].namespace ? ".": "") + x[k][b].namespace, x[k][b], x[k][b].data)
					}
				}
			}
		}
	}
	function z(e, a) {
		var b;
		if (1 === a.nodeType) {
			a.clearAttributes && a.clearAttributes();
			a.mergeAttributes && a.mergeAttributes(e);
			b = a.nodeName.toLowerCase();
			if ("object" === b) a.outerHTML = e.outerHTML;
			else if ("input" === b && ("checkbox" === e.type || "radio" === e.type)) e.checked && (a.defaultChecked = a.checked = e.checked),
			a.value !== e.value && (a.value = e.value);
			else if ("option" === b) a.selected = e.defaultSelected;
			else if ("input" === b || "textarea" === b) a.defaultValue = e.defaultValue;
			a.removeAttribute(f.expando)
		}
	}
	function A(e) {
		return "getElementsByTagName" in e ? e.getElementsByTagName("*") : "querySelectorAll" in e ? e.querySelectorAll("*") : []
	}
	function y(e) {
		if ("checkbox" === e.type || "radio" === e.type) e.defaultChecked = e.checked
	}
	function D(e) {
		f.nodeName(e, "input") ? y(e) : "getElementsByTagName" in e && f.grep(e.getElementsByTagName("input"), y)
	}
	function B(e, a) {
		a.src ? f.ajax({
			url: a.src,
			async: !1,
			dataType: "script"
		}) : f.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Ua, "/*$0*/"));
		a.parentNode && a.parentNode.removeChild(a)
	}
	function C(e, a, b) {
		var o = "width" === a ? e.offsetWidth: e.offsetHeight,
		c = "width" === a ? Va: Wa;
		if (0 < o) return "border" !== b && f.each(c,
		function() {
			b || (o -= parseFloat(f.css(e, "padding" + this)) || 0);
			o = "margin" === b ? o + (parseFloat(f.css(e, b + this)) || 0) : o - (parseFloat(f.css(e, "border" + this + "Width")) || 0)
		}),
		o + "px";
		o = T(e, a, a);
		if (0 > o || null == o) o = e.style[a] || 0;
		o = parseFloat(o) || 0;
		b && f.each(c,
		function() {
			o += parseFloat(f.css(e, "padding" + this)) || 0;
			"padding" !== b && (o += parseFloat(f.css(e, "border" + this + "Width")) || 0);
			"margin" === b && (o += parseFloat(f.css(e, b + this)) || 0)
		});
		return o + "px"
	}
	function O(e) {
		return function(a, b) {
			"string" !== typeof a && (b = a, a = "*");
			if (f.isFunction(b)) for (var o = a.toLowerCase().split(ra), c = 0, x = o.length, k, d; c < x; c++) k = o[c],
			(d = /^\+/.test(k)) && (k = k.substr(1) || "*"),
			k = e[k] = e[k] || [],
			k[d ? "unshift": "push"](b)
		}
	}
	function k(e, a, f, c, t, x) {
		t = t || a.dataTypes[0];
		x = x || {};
		x[t] = !0;
		for (var t = e[t], d = 0, h = t ? t.length: 0, g = e === ia, m; d < h && (g || !m); d++) m = t[d](a, f, c),
		"string" === typeof m && (!g || x[m] ? m = b: (a.dataTypes.unshift(m), m = k(e, a, f, c, m, x)));
		if ((g || !m) && !x["*"]) m = k(e, a, f, c, "*", x);
		return m
	}
	function u(e, a) {
		var q, c, t = f.ajaxSettings.flatOptions || {};
		for (q in a) a[q] !== b && ((t[q] ? e: c || (c = {}))[q] = a[q]);
		c && f.extend(!0, e, c)
	}
	function E(e, a, b, c) {
		if (f.isArray(a)) f.each(a,
		function(a, s) {
			b || Xa.test(e) ? c(e, s) : E(e + "[" + ("object" === typeof s || f.isArray(s) ? a: "") + "]", s, b, c)
		});
		else if (!b && null != a && "object" === typeof a) for (var t in a) E(e + "[" + t + "]", a[t], b, c);
		else c(e, a)
	}
	function M() {
		try {
			return new a.XMLHttpRequest
		} catch(e) {}
	}
	function I() {
		setTimeout(G, 0);
		return ba = f.now()
	}
	function G() {
		ba = b
	}
	function F(e, a) {
		var b = {};
		f.each(sa.concat.apply([], sa.slice(0, a)),
		function() {
			b[this] = e
		});
		return b
	}
	function N(e) {
		if (!ja[e]) {
			var a = w.body,
			b = f("<" + e + ">").appendTo(a),
			c = b.css("display");
			b.remove();
			if ("none" === c || "" === c) {
				J || (J = w.createElement("iframe"), J.frameBorder = J.width = J.height = 0);
				a.appendChild(J);
				if (!U || !J.createElement) U = (J.contentWindow || J.contentDocument).document,
				U.write(("CSS1Compat" === w.compatMode ? "<!doctype html>": "") + "<html><body>"),
				U.close();
				b = U.createElement(e);
				U.body.appendChild(b);
				c = f.css(b, "display");
				a.removeChild(J)
			}
			ja[e] = c
		}
		return ja[e]
	}
	function P(e) {
		return f.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
	}
	var w = a.document,
	X = a.navigator,
	Y = a.location,
	f = function() {
		function e() {
			if (!s.isReady) {
				try {
					w.documentElement.doScroll("left")
				} catch(a) {
					setTimeout(e, 1);
					return
				}
				s.ready()
			}
		}
		var s = function(e, a) {
			return new s.fn.init(e, a, t)
		},
		f = a.jQuery,
		c = a.$,
		t,
		x = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		k = /\S/,
		d = /^\s+/,
		h = /\s+$/,
		g = /\d/,
		m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
		l = /^[\],:{}\s]*$/,
		n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		u = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		p = /(?:^|:|,)(?:\s*\[)+/g,
		r = /(webkit)[ \/]([\w.]+)/,
		E = /(opera)(?:.*version)?[ \/]([\w.]+)/,
		z = /(msie) ([\w.]+)/,
		v = /(mozilla)(?:.*? rv:([\w.]+))?/,
		Ya = /-([a-z]|[0-9])/ig,
		Za = /^-ms-/,
		$a = function(e, a) {
			return (a + "").toUpperCase()
		},
		Z = X.userAgent,
		ca,
		V,
		M = Object.prototype.toString,
		ka = Object.prototype.hasOwnProperty,
		A = Array.prototype.push,
		I = Array.prototype.slice,
		D = String.prototype.trim,
		G = Array.prototype.indexOf,
		y = {};
		s.fn = s.prototype = {
			constructor: s,
			init: function(e, a, f) {
				var q;
				if (!e) return this;
				if (e.nodeType) return this.context = this[0] = e,
				this.length = 1,
				this;
				if ("body" === e && !a && w.body) return this.context = w,
				this[0] = w.body,
				this.selector = e,
				this.length = 1,
				this;
				if ("string" === typeof e) {
					if ((q = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : x.exec(e)) && (q[1] || !a)) {
						if (q[1]) return f = (a = a instanceof s ? a[0] : a) ? a.ownerDocument || a: w,
						(e = m.exec(e)) ? s.isPlainObject(a) ? (e = [w.createElement(e[1])], s.fn.attr.call(e, a, !0)) : e = [f.createElement(e[1])] : (e = s.buildFragment([q[1]], [f]), e = (e.cacheable ? s.clone(e.fragment) : e.fragment).childNodes),
						s.merge(this, e);
						if ((a = w.getElementById(q[2])) && a.parentNode) {
							if (a.id !== q[2]) return f.find(e);
							this.length = 1;
							this[0] = a
						}
						this.context = w;
						this.selector = e;
						return this
					}
					return ! a || a.jquery ? (a || f).find(e) : this.constructor(a).find(e)
				}
				if (s.isFunction(e)) return f.ready(e);
				e.selector !== b && (this.selector = e.selector, this.context = e.context);
				return s.makeArray(e, this)
			},
			selector: "",
			jquery: "1.6.4",
			length: 0,
			size: function() {
				return this.length
			},
			toArray: function() {
				return I.call(this, 0)
			},
			get: function(e) {
				return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
			},
			pushStack: function(e, a, f) {
				var b = this.constructor();
				s.isArray(e) ? A.apply(b, e) : s.merge(b, e);
				b.prevObject = this;
				b.context = this.context;
				"find" === a ? b.selector = this.selector + (this.selector ? " ": "") + f: a && (b.selector = this.selector + "." + a + "(" + f + ")");
				return b
			},
			each: function(e, a) {
				return s.each(this, e, a)
			},
			ready: function(e) {
				s.bindReady();
				ca.done(e);
				return this
			},
			eq: function(e) {
				return - 1 === e ? this.slice(e) : this.slice(e, +e + 1)
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq( - 1)
			},
			slice: function() {
				return this.pushStack(I.apply(this, arguments), "slice", I.call(arguments).join(","))
			},
			map: function(e) {
				return this.pushStack(s.map(this,
				function(a, s) {
					return e.call(a, s, a)
				}))
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: A,
			sort: [].sort,
			splice: [].splice
		};
		s.fn.init.prototype = s.fn;
		s.extend = s.fn.extend = function() {
			var e, a, f, q, c, o = arguments[0] || {},
			t = 1,
			x = arguments.length,
			k = !1;
			"boolean" === typeof o && (k = o, o = arguments[1] || {},
			t = 2);
			"object" !== typeof o && !s.isFunction(o) && (o = {});
			for (x === t && (o = this, --t); t < x; t++) if (null != (e = arguments[t])) for (a in e) f = o[a],
			q = e[a],
			o !== q && (k && q && (s.isPlainObject(q) || (c = s.isArray(q))) ? (c ? (c = !1, f = f && s.isArray(f) ? f: []) : f = f && s.isPlainObject(f) ? f: {},
			o[a] = s.extend(k, f, q)) : q !== b && (o[a] = q));
			return o
		};
		s.extend({
			noConflict: function(e) {
				a.$ === s && (a.$ = c);
				e && a.jQuery === s && (a.jQuery = f);
				return s
			},
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? s.readyWait++:s.ready(!0)
			},
			ready: function(e) {
				if (!0 === e && !--s.readyWait || !0 !== e && !s.isReady) {
					if (!w.body) return setTimeout(s.ready, 1);
					s.isReady = !0; ! 0 !== e && 0 < --s.readyWait || (ca.resolveWith(w, [s]), s.fn.trigger && s(w).trigger("ready").unbind("ready"))
				}
			},
			bindReady: function() {
				if (!ca) {
					ca = s._Deferred();
					if ("complete" === w.readyState) return setTimeout(s.ready, 1);
					if (w.addEventListener) w.addEventListener("DOMContentLoaded", V, !1),
					a.addEventListener("load", s.ready, !1);
					else if (w.attachEvent) {
						w.attachEvent("onreadystatechange", V);
						a.attachEvent("onload", s.ready);
						var f = !1;
						try {
							f = null == a.frameElement
						} catch(b) {}
						w.documentElement.doScroll && f && e()
					}
				}
			},
			isFunction: function(e) {
				return "function" === s.type(e)
			},
			isArray: Array.isArray ||
			function(e) {
				return "array" === s.type(e)
			},
			isWindow: function(e) {
				return e && "object" === typeof e && "setInterval" in e
			},
			isNaN: function(e) {
				return null == e || !g.test(e) || isNaN(e)
			},
			type: function(e) {
				return null == e ? "" + e: y[M.call(e)] || "object"
			},
			isPlainObject: function(e) {
				if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e)) return ! 1;
				try {
					if (e.constructor && !ka.call(e, "constructor") && !ka.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
				} catch(a) {
					return ! 1
				}
				for (var f in e);
				return f === b || ka.call(e, f)
			},
			isEmptyObject: function(e) {
				for (var a in e) return ! 1;
				return ! 0
			},
			error: function(e) {
				throw e;
			},
			parseJSON: function(e) {
				if ("string" !== typeof e || !e) return null;
				e = s.trim(e);
				if (a.JSON && a.JSON.parse) return a.JSON.parse(e);
				if (l.test(e.replace(n, "@").replace(u, "]").replace(p, ""))) return (new Function("return " + e))();
				s.error("Invalid JSON: " + e)
			},
			parseXML: function(e) {
				var f, q;
				try {
					a.DOMParser ? (q = new DOMParser, f = q.parseFromString(e, "text/xml")) : (f = new ActiveXObject("Microsoft.XMLDOM"), f.async = "false", f.loadXML(e))
				} catch(c) {
					f = b
				} (!f || !f.documentElement || f.getElementsByTagName("parsererror").length) && s.error("Invalid XML: " + e);
				return f
			},
			noop: function() {},
			globalEval: function(e) {
				try {
					e && k.test(e) && (a.execScript ||
					function(e) {
						a.eval.call(a, e)
					})(e)
				} catch(s) {
					"undefined" != typeof console && console.log(s)
				}
			},
			camelCase: function(e) {
				return e.replace(Za, "ms-").replace(Ya, $a)
			},
			nodeName: function(e, a) {
				return e.nodeName && e.nodeName.toUpperCase() === a.toUpperCase()
			},
			each: function(e, a, f) {
				var q, c = 0,
				o = e.length,
				t = o === b || s.isFunction(e);
				if (f) if (t) for (q in e) {
					if (!1 === a.apply(e[q], f)) break
				} else for (; c < o && !1 !== a.apply(e[c++], f););
				else if (t) for (q in e) {
					if (!1 === a.call(e[q], q, e[q])) break
				} else for (; c < o && !1 !== a.call(e[c], c, e[c++]););
				return e
			},
			trim: D ?
			function(e) {
				return null == e ? "": D.call(e)
			}: function(e) {
				return null == e ? "": e.toString().replace(d, "").replace(h, "")
			},
			makeArray: function(e, a) {
				var f = a || [];
				if (null != e) {
					var b = s.type(e);
					null == e.length || "string" === b || "function" === b || "regexp" === b || s.isWindow(e) ? A.call(f, e) : s.merge(f, e)
				}
				return f
			},
			inArray: function(e, a) {
				if (!a) return - 1;
				if (G) return G.call(a, e);
				for (var s = 0,
				f = a.length; s < f; s++) if (a[s] === e) return s;
				return - 1
			},
			merge: function(e, a) {
				var s = e.length,
				f = 0;
				if ("number" === typeof a.length) for (var q = a.length; f < q; f++) e[s++] = a[f];
				else for (; a[f] !== b;) e[s++] = a[f++];
				e.length = s;
				return e
			},
			grep: function(e, a, s) {
				for (var f = [], b, s = !!s, q = 0, c = e.length; q < c; q++) b = !!a(e[q], q),
				s !== b && f.push(e[q]);
				return f
			},
			map: function(e, a, f) {
				var q, c, o = [],
				t = 0,
				x = e.length;
				if (e instanceof s || x !== b && "number" === typeof x && (0 < x && e[0] && e[x - 1] || 0 === x || s.isArray(e))) for (; t < x; t++) q = a(e[t], t, f),
				null != q && (o[o.length] = q);
				else for (c in e) q = a(e[c], c, f),
				null != q && (o[o.length] = q);
				return o.concat.apply([], o)
			},
			guid: 1,
			proxy: function(e, a) {
				if ("string" === typeof a) var f = e[a],
				a = e,
				e = f;
				if (!s.isFunction(e)) return b;
				var q = I.call(arguments, 2),
				f = function() {
					return e.apply(a, q.concat(I.call(arguments)))
				};
				f.guid = e.guid = e.guid || f.guid || s.guid++;
				return f
			},
			access: function(e, a, f, q, c, o) {
				var t = e.length;
				if ("object" === typeof a) {
					for (var x in a) s.access(e, x, a[x], q, c, f);
					return e
				}
				if (f !== b) {
					q = !o && q && s.isFunction(f);
					for (x = 0; x < t; x++) c(e[x], a, q ? f.call(e[x], x, c(e[x], a)) : f, o);
					return e
				}
				return t ? c(e[0], a) : b
			},
			now: function() {
				return (new Date).getTime()
			},
			uaMatch: function(e) {
				e = e.toLowerCase();
				e = r.exec(e) || E.exec(e) || z.exec(e) || 0 > e.indexOf("compatible") && v.exec(e) || [];
				return {
					browser: e[1] || "",
					version: e[2] || "0"
				}
			},
			sub: function() {
				function e(a, s) {
					return new e.fn.init(a, s)
				}
				s.extend(!0, e, this);
				e.superclass = this;
				e.fn = e.prototype = this();
				e.fn.constructor = e;
				e.sub = this.sub;
				e.fn.init = function(f, b) {
					b && b instanceof s && !(b instanceof e) && (b = e(b));
					return s.fn.init.call(this, f, b, a)
				};
				e.fn.init.prototype = e.fn;
				var a = e(w);
				return e
			},
			browser: {}
		});
		s.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","),
		function(e, a) {
			y["[object " + a + "]"] = a.toLowerCase()
		});
		Z = s.uaMatch(Z);
		Z.browser && (s.browser[Z.browser] = !0, s.browser.version = Z.version);
		s.browser.webkit && (s.browser.safari = !0);
		k.test(" ") && (d = /^[\s\xA0]+/, h = /[\s\xA0]+$/);
		t = s(w);
		w.addEventListener ? V = function() {
			w.removeEventListener("DOMContentLoaded", V, !1);
			s.ready()
		}: w.attachEvent && (V = function() {
			"complete" === w.readyState && (w.detachEvent("onreadystatechange", V), s.ready())
		});
		return s
	} (),
	$ = "done,fail,isResolved,isRejected,promise,then,always,pipe".split(","),
	ta = [].slice;
	f.extend({
		_Deferred: function() {
			var e = [],
			a,
			b,
			c,
			t = {
				done: function() {
					if (!c) {
						var b = arguments,
						q, k, d, h, g;
						a && (g = a, a = 0);
						for (q = 0, k = b.length; q < k; q++) d = b[q],
						h = f.type(d),
						"array" === h ? t.done.apply(t, d) : "function" === h && e.push(d);
						g && t.resolveWith(g[0], g[1])
					}
					return this
				},
				resolveWith: function(f, t) {
					if (!c && !a && !b) {
						t = t || [];
						b = 1;
						try {
							for (; e[0];) e.shift().apply(f, t)
						} finally {
							a = [f, t],
							b = 0
						}
					}
					return this
				},
				resolve: function() {
					t.resolveWith(this, arguments);
					return this
				},
				isResolved: function() {
					return ! (!b && !a)
				},
				cancel: function() {
					c = 1;
					e = [];
					return this
				}
			};
			return t
		},
		Deferred: function(e) {
			var a = f._Deferred(),
			b = f._Deferred(),
			c;
			f.extend(a, {
				then: function(e, f) {
					a.done(e).fail(f);
					return this
				},
				always: function() {
					return a.done.apply(a, arguments).fail.apply(this, arguments)
				},
				fail: b.done,
				rejectWith: b.resolveWith,
				reject: b.resolve,
				isRejected: b.isResolved,
				pipe: function(e, b) {
					return f.Deferred(function(q) {
						f.each({
							done: [e, "resolve"],
							fail: [b, "reject"]
						},
						function(e, b) {
							var c = b[0],
							o = b[1],
							t;
							if (f.isFunction(c)) a[e](function() {
								if ((t = c.apply(this, arguments)) && f.isFunction(t.promise)) t.promise().then(q.resolve, q.reject);
								else q[o + "With"](this === a ? q: this, [t])
							});
							else a[e](q[o])
						})
					}).promise()
				},
				promise: function(e) {
					if (null == e) {
						if (c) return c;
						c = e = {}
					}
					for (var f = $.length; f--;) e[$[f]] = a[$[f]];
					return e
				}
			});
			a.done(b.cancel).fail(a.cancel);
			delete a.cancel;
			e && e.call(a, a);
			return a
		},
		when: function(e) {
			function a(e) {
				return function(a) {
					b[e] = 1 < arguments.length ? ta.call(arguments, 0) : a; --x || k.resolveWith(k, ta.call(b, 0))
				}
			}
			var b = arguments,
			c = 0,
			t = b.length,
			x = t,
			k = 1 >= t && e && f.isFunction(e.promise) ? e: f.Deferred();
			if (1 < t) {
				for (; c < t; c++) b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(a(c), k.reject) : --x;
				x || k.resolveWith(k, b)
			} else k !== e && k.resolveWith(k, t ? [e] : []);
			return k.promise()
		}
	});
	f.support = function() {
		var e = w.createElement("div"),
		a = w.documentElement,
		b,
		c,
		t,
		k,
		d,
		h;
		e.setAttribute("className", "t");
		e.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		b = e.getElementsByTagName("*");
		c = e.getElementsByTagName("a")[0];
		if (!b || !b.length || !c) return {};
		t = w.createElement("select");
		k = t.appendChild(w.createElement("option"));
		b = e.getElementsByTagName("input")[0];
		d = {
			leadingWhitespace: 3 === e.firstChild.nodeType,
			tbody: !e.getElementsByTagName("tbody").length,
			htmlSerialize: !!e.getElementsByTagName("link").length,
			style: /top/.test(c.getAttribute("style")),
			hrefNormalized: "/a" === c.getAttribute("href"),
			opacity: /^0.55$/.test(c.style.opacity),
			cssFloat: !!c.style.cssFloat,
			checkOn: "on" === b.value,
			optSelected: k.selected,
			getSetAttribute: "t" !== e.className,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0
		};
		b.checked = !0;
		d.noCloneChecked = b.cloneNode(!0).checked;
		t.disabled = !0;
		d.optDisabled = !k.disabled;
		try {
			delete e.test
		} catch(g) {
			d.deleteExpando = !1
		} ! e.addEventListener && e.attachEvent && e.fireEvent && (e.attachEvent("onclick",
		function() {
			d.noCloneEvent = !1
		}), e.cloneNode(!0).fireEvent("onclick"));
		b = w.createElement("input");
		b.value = "t";
		b.setAttribute("type", "radio");
		d.radioValue = "t" === b.value;
		b.setAttribute("checked", "checked");
		e.appendChild(b);
		c = w.createDocumentFragment();
		c.appendChild(e.firstChild);
		d.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
		e.innerHTML = "";
		e.style.width = e.style.paddingLeft = "1px";
		t = w.getElementsByTagName("body")[0];
		c = w.createElement(t ? "div": "body");
		k = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		};
		t && f.extend(k, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
		for (h in k) c.style[h] = k[h];
		c.appendChild(e);
		a = t || a;
		a.insertBefore(c, a.firstChild);
		d.appendChecked = b.checked;
		d.boxModel = 2 === e.offsetWidth;
		"zoom" in e.style && (e.style.display = "inline", e.style.zoom = 1, d.inlineBlockNeedsLayout = 2 === e.offsetWidth, e.style.display = "", e.innerHTML = "<div style='width:4px;'></div>", d.shrinkWrapBlocks = 2 !== e.offsetWidth);
		e.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
		t = e.getElementsByTagName("td");
		b = 0 === t[0].offsetHeight;
		t[0].style.display = "";
		t[1].style.display = "none";
		d.reliableHiddenOffsets = b && 0 === t[0].offsetHeight;
		e.innerHTML = "";
		w.defaultView && w.defaultView.getComputedStyle && (b = w.createElement("div"), b.style.width = "0", b.style.marginRight = "0", e.appendChild(b), d.reliableMarginRight = 0 === (parseInt((w.defaultView.getComputedStyle(b, null) || {
			marginRight: 0
		}).marginRight, 10) || 0));
		c.innerHTML = "";
		a.removeChild(c);
		if (e.attachEvent) for (h in {
			submit: 1,
			change: 1,
			focusin: 1
		}) a = "on" + h,
		b = a in e,
		b || (e.setAttribute(a, "return;"), b = "function" === typeof e[a]),
		d[h + "Bubbles"] = b;
		c = c = t = k = t = b = e = b = null;
		return d
	} ();
	f.boxModel = f.support.boxModel;
	var Qa = /^(?:\{.*\}|\[.*\])$/,
	Pa = /([A-Z])/g;
	f.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			e = e.nodeType ? f.cache[e[f.expando]] : e[f.expando];
			return !! e && !g(e)
		},
		data: function(e, a, q, c) {
			if (f.acceptData(e)) {
				var t = f.expando,
				k = "string" === typeof a,
				d = e.nodeType,
				h = d ? f.cache: e,
				g = d ? e[f.expando] : e[f.expando] && f.expando;
				if (g && (!c || !g || !h[g] || h[g][t]) || !(k && q === b)) {
					g || (d ? e[f.expando] = g = ++f.uuid: g = f.expando);
					h[g] || (h[g] = {},
					d || (h[g].toJSON = f.noop));
					if ("object" === typeof a || "function" === typeof a) c ? h[g][t] = f.extend(h[g][t], a) : h[g] = f.extend(h[g], a);
					e = h[g];
					c && (e[t] || (e[t] = {}), e = e[t]);
					q !== b && (e[f.camelCase(a)] = q);
					if ("events" === a && !e[a]) return e[t] && e[t].events;
					k ? (q = e[a], null == q && (q = e[f.camelCase(a)])) : q = e;
					return q
				}
			}
		},
		removeData: function(e, a, b) {
			if (f.acceptData(e)) {
				var c, t = f.expando,
				k = e.nodeType,
				d = k ? f.cache: e,
				h = k ? e[f.expando] : f.expando;
				if (d[h]) {
					if (a && (c = b ? d[h][t] : d[h])) if (c[a] || (a = f.camelCase(a)), delete c[a], !g(c)) return;
					if (!b || !(delete d[h][t], !g(d[h]))) a = d[h][t],
					f.support.deleteExpando || !d.setInterval ? delete d[h] : d[h] = null,
					a ? (d[h] = {},
					k || (d[h].toJSON = f.noop), d[h][t] = a) : k && (f.support.deleteExpando ? delete e[f.expando] : e.removeAttribute ? e.removeAttribute(f.expando) : e[f.expando] = null)
				}
			}
		},
		_data: function(e, a, b) {
			return f.data(e, a, b, !0)
		},
		acceptData: function(e) {
			if (e.nodeName) {
				var a = f.noData[e.nodeName.toLowerCase()];
				if (a) return ! (!0 === a || e.getAttribute("classid") !== a)
			}
			return ! 0
		}
	});
	f.fn.extend({
		data: function(e, a) {
			var q = null;
			if ("undefined" === typeof e) {
				if (this.length && (q = f.data(this[0]), 1 === this[0].nodeType)) for (var o = this[0].attributes, t, k = 0, d = o.length; k < d; k++) t = o[k].name,
				0 === t.indexOf("data-") && (t = f.camelCase(t.substring(5)), c(this[0], t, q[t]));
				return q
			}
			if ("object" === typeof e) return this.each(function() {
				f.data(this, e)
			});
			var h = e.split(".");
			h[1] = h[1] ? "." + h[1] : "";
			return a === b ? (q = this.triggerHandler("getData" + h[1] + "!", [h[0]]), q === b && this.length && (q = f.data(this[0], e), q = c(this[0], e, q)), q === b && h[1] ? this.data(h[0]) : q) : this.each(function() {
				var b = f(this),
				c = [h[0], a];
				b.triggerHandler("setData" + h[1] + "!", c);
				f.data(this, e, a);
				b.triggerHandler("changeData" + h[1] + "!", c)
			})
		},
		removeData: function(e) {
			return this.each(function() {
				f.removeData(this, e)
			})
		}
	});
	f.extend({
		_mark: function(e, a) {
			e && (a = (a || "fx") + "mark", f.data(e, a, (f.data(e, a, b, !0) || 0) + 1, !0))
		},
		_unmark: function(e, a, c) { ! 0 !== e && (c = a, a = e, e = !1);
			if (a) {
				var c = c || "fx",
				o = c + "mark"; (e = e ? 0 : (f.data(a, o, b, !0) || 1) - 1) ? f.data(a, o, e, !0) : (f.removeData(a, o, !0), d(a, c, "mark"))
			}
		},
		queue: function(e, a, c) {
			if (e) {
				var a = (a || "fx") + "queue",
				o = f.data(e, a, b, !0);
				c && (!o || f.isArray(c) ? o = f.data(e, a, f.makeArray(c), !0) : o.push(c));
				return o || []
			}
		},
		dequeue: function(e, a) {
			var a = a || "fx",
			b = f.queue(e, a),
			c = b.shift();
			"inprogress" === c && (c = b.shift());
			c && ("fx" === a && b.unshift("inprogress"), c.call(e,
			function() {
				f.dequeue(e, a)
			}));
			b.length || (f.removeData(e, a + "queue", !0), d(e, a, "queue"))
		}
	});
	f.fn.extend({
		queue: function(e, a) {
			"string" !== typeof e && (a = e, e = "fx");
			return a === b ? f.queue(this[0], e) : this.each(function() {
				var b = f.queue(this, e, a);
				"fx" === e && "inprogress" !== b[0] && f.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				f.dequeue(this, e)
			})
		},
		delay: function(e, a) {
			e = f.fx ? f.fx.speeds[e] || e: e;
			a = a || "fx";
			return this.queue(a,
			function() {
				var b = this;
				setTimeout(function() {
					f.dequeue(b, a)
				},
				e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e) {
			function a() {--k || c.resolveWith(o, [o])
			}
			"string" !== typeof e && (e = b);
			for (var e = e || "fx",
			c = f.Deferred(), o = this, t = o.length, k = 1, d = e + "defer", h = e + "queue", e = e + "mark", g; t--;) if (g = f.data(o[t], d, b, !0) || (f.data(o[t], h, b, !0) || f.data(o[t], e, b, !0)) && f.data(o[t], d, f._Deferred(), !0)) k++,
			g.done(a);
			a();
			return c.promise()
		}
	});
	var ua = /[\n\t\r]/g,
	la = /\s+/,
	ab = /\r/g,
	bb = /^(?:button|input)$/i,
	cb = /^(?:button|input|object|select|textarea)$/i,
	db = /^a(?:rea)?$/i,
	va = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	K, wa;
	f.fn.extend({
		attr: function(e, a) {
			return f.access(this, e, a, !0, f.attr)
		},
		removeAttr: function(e) {
			return this.each(function() {
				f.removeAttr(this, e)
			})
		},
		prop: function(e, a) {
			return f.access(this, e, a, !0, f.prop)
		},
		removeProp: function(e) {
			e = f.propFix[e] || e;
			return this.each(function() {
				try {
					this[e] = b,
					delete this[e]
				} catch(a) {}
			})
		},
		addClass: function(e) {
			var a, b, c, t, k, d, h;
			if (f.isFunction(e)) return this.each(function(a) {
				f(this).addClass(e.call(this, a, this.className))
			});
			if (e && "string" === typeof e) {
				a = e.split(la);
				for (b = 0, c = this.length; b < c; b++) if (t = this[b], 1 === t.nodeType) if (!t.className && 1 === a.length) t.className = e;
				else {
					k = " " + t.className + " ";
					for (d = 0, h = a.length; d < h; d++)~k.indexOf(" " + a[d] + " ") || (k += a[d] + " ");
					t.className = f.trim(k)
				}
			}
			return this
		},
		removeClass: function(e) {
			var a, c, o, t, k, d, h;
			if (f.isFunction(e)) return this.each(function(a) {
				f(this).removeClass(e.call(this, a, this.className))
			});
			if (e && "string" === typeof e || e === b) {
				a = (e || "").split(la);
				for (c = 0, o = this.length; c < o; c++) if (t = this[c], 1 === t.nodeType && t.className) if (e) {
					k = (" " + t.className + " ").replace(ua, " ");
					for (d = 0, h = a.length; d < h; d++) k = k.replace(" " + a[d] + " ", " ");
					t.className = f.trim(k)
				} else t.className = ""
			}
			return this
		},
		toggleClass: function(e, a) {
			var b = typeof e,
			c = "boolean" === typeof a;
			return f.isFunction(e) ? this.each(function(b) {
				f(this).toggleClass(e.call(this, b, this.className, a), a)
			}) : this.each(function() {
				if ("string" === b) for (var t, k = 0,
				d = f(this), h = a, g = e.split(la); t = g[k++];) h = c ? h: !d.hasClass(t),
				d[h ? "addClass": "removeClass"](t);
				else if ("undefined" === b || "boolean" === b) this.className && f._data(this, "__className__", this.className),
				this.className = this.className || !1 === e ? "": f._data(this, "__className__") || ""
			})
		},
		hasClass: function(e) {
			for (var e = " " + e + " ",
			a = 0,
			b = this.length; a < b; a++) if (1 === this[a].nodeType && -1 < (" " + this[a].className + " ").replace(ua, " ").indexOf(e)) return ! 0;
			return ! 1
		},
		val: function(e) {
			var a, c, o = this[0];
			if (!arguments.length) {
				if (o) {
					if ((a = f.valHooks[o.nodeName.toLowerCase()] || f.valHooks[o.type]) && "get" in a && (c = a.get(o, "value")) !== b) return c;
					c = o.value;
					return "string" === typeof c ? c.replace(ab, "") : null == c ? "": c
				}
				return b
			}
			var t = f.isFunction(e);
			return this.each(function(c) {
				var q = f(this);
				if (1 === this.nodeType && (c = t ? e.call(this, c, q.val()) : e, null == c ? c = "": "number" === typeof c ? c += "": f.isArray(c) && (c = f.map(c,
				function(e) {
					return null == e ? "": e + ""
				})), a = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type], !a || !("set" in a) || a.set(this, c, "value") === b)) this.value = c
			})
		}
	});
	f.extend({
		valHooks: {
			option: {
				get: function(e) {
					var a = e.attributes.value;
					return ! a || a.specified ? e.value: e.text
				}
			},
			select: {
				get: function(e) {
					var a, b = e.selectedIndex,
					c = [],
					t = e.options,
					e = "select-one" === e.type;
					if (0 > b) return null;
					for (var k = e ? b: 0, d = e ? b + 1 : t.length; k < d; k++) if (a = t[k], a.selected && (f.support.optDisabled ? !a.disabled: null === a.getAttribute("disabled")) && (!a.parentNode.disabled || !f.nodeName(a.parentNode, "optgroup"))) {
						a = f(a).val();
						if (e) return a;
						c.push(a)
					}
					return e && !c.length && t.length ? f(t[b]).val() : c
				},
				set: function(e, a) {
					var b = f.makeArray(a);
					f(e).find("option").each(function() {
						this.selected = 0 <= f.inArray(f(this).val(), b)
					});
					b.length || (e.selectedIndex = -1);
					return b
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
		attr: function(e, a, c, o) {
			var t = e.nodeType;
			if (!e || 3 === t || 8 === t || 2 === t) return b;
			if (o && a in f.attrFn) return f(e)[a](c);
			if (! ("getAttribute" in e)) return f.prop(e, a, c);
			var k, d;
			if (o = 1 !== t || !f.isXMLDoc(e)) a = f.attrFix[a] || a,
			(d = f.attrHooks[a]) || (va.test(a) ? d = wa: K && (d = K));
			if (c !== b) {
				if (null === c) return f.removeAttr(e, a),
				b;
				if (d && "set" in d && o && (k = d.set(e, c, a)) !== b) return k;
				e.setAttribute(a, "" + c);
				return c
			}
			if (d && "get" in d && o && null !== (k = d.get(e, a))) return k;
			k = e.getAttribute(a);
			return null === k ? b: k
		},
		removeAttr: function(e, a) {
			var b;
			if (1 === e.nodeType && (a = f.attrFix[a] || a, f.attr(e, a, ""), e.removeAttribute(a), va.test(a) && (b = f.propFix[a] || a) in e)) e[b] = !1
		},
		attrHooks: {
			type: {
				set: function(e, a) {
					if (bb.test(e.nodeName) && e.parentNode) f.error("type property can't be changed");
					else if (!f.support.radioValue && "radio" === a && f.nodeName(e, "input")) {
						var b = e.value;
						e.setAttribute("type", a);
						b && (e.value = b);
						return a
					}
				}
			},
			value: {
				get: function(e, a) {
					return K && f.nodeName(e, "button") ? K.get(e, a) : a in e ? e.value: null
				},
				set: function(e, a, b) {
					if (K && f.nodeName(e, "button")) return K.set(e, a, b);
					e.value = a
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
		prop: function(e, a, c) {
			var o = e.nodeType;
			if (!e || 3 === o || 8 === o || 2 === o) return b;
			var k, d;
			if (1 !== o || !f.isXMLDoc(e)) a = f.propFix[a] || a,
			d = f.propHooks[a];
			return c !== b ? d && "set" in d && (k = d.set(e, c, a)) !== b ? k: e[a] = c: d && "get" in d && null !== (k = d.get(e, a)) ? k: e[a]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var a = e.getAttributeNode("tabindex");
					return a && a.specified ? parseInt(a.value, 10) : cb.test(e.nodeName) || db.test(e.nodeName) && e.href ? 0 : b
				}
			}
		}
	});
	f.attrHooks.tabIndex = f.propHooks.tabIndex;
	wa = {
		get: function(e, a) {
			var c;
			return ! 0 === f.prop(e, a) || (c = e.getAttributeNode(a)) && !1 !== c.nodeValue ? a.toLowerCase() : b
		},
		set: function(e, a, b) { ! 1 === a ? f.removeAttr(e, b) : (a = f.propFix[b] || b, a in e && (e[a] = !0), e.setAttribute(b, b.toLowerCase()));
			return b
		}
	};
	f.support.getSetAttribute || (K = f.valHooks.button = {
		get: function(e, a) {
			var f;
			return (f = e.getAttributeNode(a)) && "" !== f.nodeValue ? f.nodeValue: b
		},
		set: function(e, a, b) {
			var f = e.getAttributeNode(b);
			f || (f = w.createAttribute(b), e.setAttributeNode(f));
			return f.nodeValue = a + ""
		}
	},
	f.each(["width", "height"],
	function(e, a) {
		f.attrHooks[a] = f.extend(f.attrHooks[a], {
			set: function(e, b) {
				if ("" === b) return e.setAttribute(a, "auto"),
				b
			}
		})
	}));
	f.support.hrefNormalized || f.each(["href", "src", "width", "height"],
	function(e, a) {
		f.attrHooks[a] = f.extend(f.attrHooks[a], {
			get: function(e) {
				e = e.getAttribute(a, 2);
				return null === e ? b: e
			}
		})
	});
	f.support.style || (f.attrHooks.style = {
		get: function(e) {
			return e.style.cssText.toLowerCase() || b
		},
		set: function(e, a) {
			return e.style.cssText = "" + a
		}
	});
	f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
		get: function(e) {
			if (e = e.parentNode) e.selectedIndex,
			e.parentNode && e.parentNode.selectedIndex;
			return null
		}
	}));
	f.support.checkOn || f.each(["radio", "checkbox"],
	function() {
		f.valHooks[this] = {
			get: function(e) {
				return null === e.getAttribute("value") ? "on": e.value
			}
		}
	});
	f.each(["radio", "checkbox"],
	function() {
		f.valHooks[this] = f.extend(f.valHooks[this], {
			set: function(e, a) {
				if (f.isArray(a)) return e.checked = 0 <= f.inArray(f(e).val(), a)
			}
		})
	});
	var ha = /\.(.*)$/,
	ma = /^(?:textarea|input|select)$/i,
	Ra = /\./g,
	Sa = / /g,
	eb = /[^\w\s.|`]/g,
	fb = function(e) {
		return e.replace(eb, "\\$&")
	};
	f.event = {
		add: function(e, a, c, o) {
			if (! (3 === e.nodeType || 8 === e.nodeType)) {
				if (!1 === c) c = m;
				else if (!c) return;
				var k, d;
				c.handler && (k = c, c = k.handler);
				c.guid || (c.guid = f.guid++);
				if (d = f._data(e)) {
					var h = d.events,
					g = d.handle;
					h || (d.events = h = {});
					g || (d.handle = g = function(e) {
						return "undefined" !== typeof f && (!e || f.event.triggered !== e.type) ? f.event.handle.apply(g.elem, arguments) : b
					});
					g.elem = e;
					for (var a = a.split(" "), l, n = 0, u; l = a[n++];) {
						d = k ? f.extend({},
						k) : {
							handler: c,
							data: o
						}; - 1 < l.indexOf(".") ? (u = l.split("."), l = u.shift(), d.namespace = u.slice(0).sort().join(".")) : (u = [], d.namespace = "");
						d.type = l;
						d.guid || (d.guid = c.guid);
						var p = h[l],
						r = f.event.special[l] || {};
						if (!p && (p = h[l] = [], !r.setup || !1 === r.setup.call(e, o, u, g))) e.addEventListener ? e.addEventListener(l, g, !1) : e.attachEvent && e.attachEvent("on" + l, g);
						r.add && (r.add.call(e, d), d.handler.guid || (d.handler.guid = c.guid));
						p.push(d);
						f.event.global[l] = !0
					}
					e = null
				}
			}
		},
		global: {},
		remove: function(e, a, c, o) {
			if (! (3 === e.nodeType || 8 === e.nodeType)) { ! 1 === c && (c = m);
				var k, d, h = 0,
				g, l, n, u, p, r, E = f.hasData(e) && f._data(e),
				z = E && E.events;
				if (E && z) if (a && a.type && (c = a.handler, a = a.type), !a || "string" === typeof a && "." === a.charAt(0)) for (k in a = a || "", z) f.event.remove(e, k + a);
				else {
					for (a = a.split(" "); k = a[h++];) if (u = k, g = 0 > k.indexOf("."), l = [], g || (l = k.split("."), k = l.shift(), n = RegExp("(^|\\.)" + f.map(l.slice(0).sort(), fb).join("\\.(?:.*\\.)?") + "(\\.|$)")), p = z[k]) if (c) {
						u = f.event.special[k] || {};
						for (d = o || 0; d < p.length; d++) if (r = p[d], c.guid === r.guid) {
							if (g || n.test(r.namespace)) null == o && p.splice(d--, 1),
							u.remove && u.remove.call(e, r);
							if (null != o) break
						}
						if (0 === p.length || null != o && 1 === p.length)(!u.teardown || !1 === u.teardown.call(e, l)) && f.removeEvent(e, k, E.handle),
						delete z[k]
					} else for (d = 0; d < p.length; d++) if (r = p[d], g || n.test(r.namespace)) f.event.remove(e, u, r.handler, d),
					p.splice(d--, 1);
					if (f.isEmptyObject(z)) {
						if (a = E.handle) a.elem = null;
						delete E.events;
						delete E.handle;
						f.isEmptyObject(E) && f.removeData(e, b, !0)
					}
				}
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(e, c, q, o) {
			var k = e.type || e,
			d = [],
			h;
			0 <= k.indexOf("!") && (k = k.slice(0, -1), h = !0);
			0 <= k.indexOf(".") && (d = k.split("."), k = d.shift(), d.sort());
			if (q && !f.event.customEvent[k] || f.event.global[k]) {
				e = "object" === typeof e ? e[f.expando] ? e: new f.Event(k, e) : new f.Event(k);
				e.type = k;
				e.exclusive = h;
				e.namespace = d.join(".");
				e.namespace_re = RegExp("(^|\\.)" + d.join("\\.(?:.*\\.)?") + "(\\.|$)");
				if (o || !q) e.preventDefault(),
				e.stopPropagation();
				if (q) {
					if (! (3 === q.nodeType || 8 === q.nodeType)) {
						e.result = b;
						e.target = q;
						c = null != c ? f.makeArray(c) : [];
						c.unshift(e);
						d = q;
						o = 0 > k.indexOf(":") ? "on" + k: "";
						do h = f._data(d, "handle"),
						e.currentTarget = d,
						h && h.apply(d, c),
						o && f.acceptData(d) && d[o] && !1 === d[o].apply(d, c) && (e.result = !1, e.preventDefault()),
						d = d.parentNode || d.ownerDocument || d === e.target.ownerDocument && a;
						while (d && !e.isPropagationStopped());
						if (!e.isDefaultPrevented()) {
							var g, d = f.event.special[k] || {};
							if ((!d._default || !1 === d._default.call(q.ownerDocument, e)) && !("click" === k && f.nodeName(q, "a")) && f.acceptData(q)) {
								try {
									o && q[k] && ((g = q[o]) && (q[o] = null), f.event.triggered = k, q[k]())
								} catch(m) {}
								g && (q[o] = g);
								f.event.triggered = b
							}
						}
						return e.result
					}
				} else f.each(f.cache,
				function() {
					var a = this[f.expando];
					a && a.events && a.events[k] && f.event.trigger(e, c, a.handle.elem)
				})
			}
		},
		handle: function(e) {
			var e = f.event.fix(e || a.event),
			c = ((f._data(this, "events") || {})[e.type] || []).slice(0),
			q = !e.exclusive && !e.namespace,
			o = Array.prototype.slice.call(arguments, 0);
			o[0] = e;
			e.currentTarget = this;
			for (var k = 0,
			d = c.length; k < d; k++) {
				var h = c[k];
				if (q || e.namespace_re.test(h.namespace)) if (e.handler = h.handler, e.data = h.data, e.handleObj = h, h = h.handler.apply(this, o), h !== b && (e.result = h, !1 === h && (e.preventDefault(), e.stopPropagation())), e.isImmediatePropagationStopped()) break
			}
			return e.result
		},
		props: "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,layerX,layerY,metaKey,newValue,offsetX,offsetY,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(","),
		fix: function(a) {
			if (a[f.expando]) return a;
			for (var c = a,
			a = f.Event(c), q = this.props.length, o; q;) o = this.props[--q],
			a[o] = c[o];
			a.target || (a.target = a.srcElement || w);
			3 === a.target.nodeType && (a.target = a.target.parentNode); ! a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement);
			null == a.pageX && null != a.clientX && (q = a.target.ownerDocument || w, c = q.documentElement, q = q.body, a.pageX = a.clientX + (c && c.scrollLeft || q && q.scrollLeft || 0) - (c && c.clientLeft || q && q.clientLeft || 0), a.pageY = a.clientY + (c && c.scrollTop || q && q.scrollTop || 0) - (c && c.clientTop || q && q.clientTop || 0));
			if (null == a.which && (null != a.charCode || null != a.keyCode)) a.which = null != a.charCode ? a.charCode: a.keyCode; ! a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey); ! a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
			return a
		},
		guid: 1E8,
		proxy: f.proxy,
		special: {
			ready: {
				setup: f.bindReady,
				teardown: f.noop
			},
			live: {
				add: function(a) {
					f.event.add(this, r(a.origType, a.selector), f.extend({},
					a, {
						handler: n,
						guid: a.handler.guid
					}))
				},
				remove: function(a) {
					f.event.remove(this, r(a.origType, a.selector), a)
				}
			},
			beforeunload: {
				setup: function(a, b, c) {
					f.isWindow(this) && (this.onbeforeunload = c)
				},
				teardown: function(a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		}
	};
	f.removeEvent = w.removeEventListener ?
	function(a, b, f) {
		a.removeEventListener && a.removeEventListener(b, f, !1)
	}: function(a, b, f) {
		a.detachEvent && a.detachEvent("on" + b, f)
	};
	f.Event = function(a, b) {
		if (!this.preventDefault) return new f.Event(a, b);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? h: m) : this.type = a;
		b && f.extend(this, b);
		this.timeStamp = f.now();
		this[f.expando] = !0
	};
	f.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = h;
			var a = this.originalEvent;
			a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = h;
			var a = this.originalEvent;
			a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = h;
			this.stopPropagation()
		},
		isDefaultPrevented: m,
		isPropagationStopped: m,
		isImmediatePropagationStopped: m
	};
	var xa = function(a) {
		var b = a.relatedTarget,
		c = !1,
		o = a.type;
		a.type = a.data;
		b !== this && (b && (c = f.contains(this, b)), c || (f.event.handle.apply(this, arguments), a.type = o))
	},
	ya = function(a) {
		a.type = a.data;
		f.event.handle.apply(this, arguments)
	};
	f.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	},
	function(a, b) {
		f.event.special[a] = {
			setup: function(c) {
				f.event.add(this, b, c && c.selector ? ya: xa, a)
			},
			teardown: function(a) {
				f.event.remove(this, b, a && a.selector ? ya: xa)
			}
		}
	});
	f.support.submitBubbles || (f.event.special.submit = {
		setup: function() {
			if (f.nodeName(this, "form")) return ! 1;
			f.event.add(this, "click.specialSubmit",
			function(a) {
				var b = a.target,
				c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type: ""; ("submit" === c || "image" === c) && f(b).closest("form").length && l("submit", this, arguments)
			});
			f.event.add(this, "keypress.specialSubmit",
			function(a) {
				var b = a.target,
				c = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.type: ""; ("text" === c || "password" === c) && f(b).closest("form").length && 13 === a.keyCode && l("submit", this, arguments)
			})
		},
		teardown: function() {
			f.event.remove(this, ".specialSubmit")
		}
	});
	if (!f.support.changeBubbles) {
		var aa, za = function(a) {
			var b = f.nodeName(a, "input") ? a.type: "",
			c = a.value;
			"radio" === b || "checkbox" === b ? c = a.checked: "select-multiple" === b ? c = -1 < a.selectedIndex ? f.map(a.options,
			function(a) {
				return a.selected
			}).join("-") : "": f.nodeName(a, "select") && (c = a.selectedIndex);
			return c
		},
		da = function(a, c) {
			var k = a.target,
			o, d;
			if (ma.test(k.nodeName) && !k.readOnly && (o = f._data(k, "_change_data"), d = za(k), ("focusout" !== a.type || "radio" !== k.type) && f._data(k, "_change_data", d), !(o === b || d === o))) if (null != o || d) a.type = "change",
			a.liveFired = b,
			f.event.trigger(a, c, k)
		};
		f.event.special.change = {
			filters: {
				focusout: da,
				beforedeactivate: da,
				click: function(a) {
					var b = a.target,
					c = f.nodeName(b, "input") ? b.type: ""; ("radio" === c || "checkbox" === c || f.nodeName(b, "select")) && da.call(this, a)
				},
				keydown: function(a) {
					var b = a.target,
					c = f.nodeName(b, "input") ? b.type: ""; (13 === a.keyCode && !f.nodeName(b, "textarea") || 32 === a.keyCode && ("checkbox" === c || "radio" === c) || "select-multiple" === c) && da.call(this, a)
				},
				beforeactivate: function(a) {
					a = a.target;
					f._data(a, "_change_data", za(a))
				}
			},
			setup: function() {
				if ("file" === this.type) return ! 1;
				for (var a in aa) f.event.add(this, a + ".specialChange", aa[a]);
				return ma.test(this.nodeName)
			},
			teardown: function() {
				f.event.remove(this, ".specialChange");
				return ma.test(this.nodeName)
			}
		};
		aa = f.event.special.change.filters;
		aa.focus = aa.beforeactivate
	}
	f.support.focusinBubbles || f.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(a, b) {
		function c(a) {
			var e = f.event.fix(a);
			e.type = b;
			e.originalEvent = {};
			f.event.trigger(e, null, e.target);
			e.isDefaultPrevented() && a.preventDefault()
		}
		var k = 0;
		f.event.special[b] = {
			setup: function() {
				0 === k++&&w.addEventListener(a, c, !0)
			},
			teardown: function() {
				0 === --k && w.removeEventListener(a, c, !0)
			}
		}
	});
	f.each(["bind", "one"],
	function(a, c) {
		f.fn[c] = function(a, e, k) {
			var d;
			if ("object" === typeof a) {
				for (var h in a) this[c](h, e, a[h], k);
				return this
			}
			if (2 === arguments.length || !1 === e) k = e,
			e = b;
			"one" === c ? (d = function(a) {
				f(this).unbind(a, d);
				return k.apply(this, arguments)
			},
			d.guid = k.guid || f.guid++) : d = k;
			if ("unload" === a && "one" !== c) this.one(a, e, k);
			else {
				h = 0;
				for (var g = this.length; h < g; h++) f.event.add(this[h], a, d, e)
			}
			return this
		}
	});
	f.fn.extend({
		unbind: function(a, b) {
			if ("object" === typeof a && !a.preventDefault) for (var c in a) this.unbind(c, a[c]);
			else {
				c = 0;
				for (var k = this.length; c < k; c++) f.event.remove(this[c], a, b)
			}
			return this
		},
		delegate: function(a, b, f, c) {
			return this.live(b, f, c, a)
		},
		undelegate: function(a, b, f) {
			return 0 === arguments.length ? this.unbind("live") : this.die(b, null, f, a)
		},
		trigger: function(a, b) {
			return this.each(function() {
				f.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) return f.event.trigger(a, b, this[0], !0)
		},
		toggle: function(a) {
			var b = arguments,
			c = a.guid || f.guid++,
			k = 0,
			d = function(c) {
				var d = (f.data(this, "lastToggle" + a.guid) || 0) % k;
				f.data(this, "lastToggle" + a.guid, d + 1);
				c.preventDefault();
				return b[d].apply(this, arguments) || !1
			};
			for (d.guid = c; k < b.length;) b[k++].guid = c;
			return this.click(d)
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var na = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	f.each(["live", "die"],
	function(a, c) {
		f.fn[c] = function(a, e, k, d) {
			var h = 0,
			g, l, u = d || this.selector,
			n = d ? this: f(this.context);
			if ("object" === typeof a && !a.preventDefault) {
				for (g in a) n[c](g, e, a[g], u);
				return this
			}
			if ("die" === c && !a && d && "." === d.charAt(0)) return n.unbind(d),
			this;
			if (!1 === e || f.isFunction(e)) k = e || m,
			e = b;
			for (a = (a || "").split(" "); null != (d = a[h++]);) if (g = ha.exec(d), l = "", g && (l = g[0], d = d.replace(ha, "")), "hover" === d) a.push("mouseenter" + l, "mouseleave" + l);
			else if (g = d, na[d] ? (a.push(na[d] + l), d += l) : d = (na[d] || d) + l, "live" === c) {
				l = 0;
				for (var p = n.length; l < p; l++) f.event.add(n[l], "live." + r(d, u), {
					data: e,
					selector: u,
					handler: k,
					origType: d,
					origHandler: k,
					preType: g
				})
			} else n.unbind("live." + r(d, u), k);
			return this
		}
	});
	f.each("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error".split(","),
	function(a, b) {
		f.fn[b] = function(a, e) {
			null == e && (e = a, a = null);
			return 0 < arguments.length ? this.bind(b, a, e) : this.trigger(b)
		};
		f.attrFn && (f.attrFn[b] = !0)
	}); (function() {
		function a(e, b, f, c, d, k) {
			for (var d = 0,
			s = c.length; d < s; d++) {
				var o = c[d];
				if (o) {
					for (var h = !1,
					o = o[e]; o;) {
						if (o.sizcache === f) {
							h = c[o.sizset];
							break
						}
						1 === o.nodeType && !k && (o.sizcache = f, o.sizset = d);
						if (o.nodeName.toLowerCase() === b) {
							h = o;
							break
						}
						o = o[e]
					}
					c[d] = h
				}
			}
		}
		function c(a, e, b, f, d, k) {
			for (var d = 0,
			o = f.length; d < o; d++) {
				var s = f[d];
				if (s) {
					for (var h = !1,
					s = s[a]; s;) {
						if (s.sizcache === b) {
							h = f[s.sizset];
							break
						}
						if (1 === s.nodeType) if (k || (s.sizcache = b, s.sizset = d), "string" !== typeof e) {
							if (s === e) {
								h = !0;
								break
							}
						} else if (0 < u.filter(e, [s]).length) {
							h = s;
							break
						}
						s = s[a]
					}
					f[d] = h
				}
			}
		}
		var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
		k = 0,
		h = Object.prototype.toString,
		g = !1,
		l = !0,
		m = /\\/g,
		n = /\W/; [0, 0].sort(function() {
			l = !1;
			return 0
		});
		var u = function(a, e, b, f) {
			var b = b || [],
			c = e = e || w;
			if (1 !== e.nodeType && 9 !== e.nodeType) return [];
			if (!a || "string" !== typeof a) return b;
			var k, s, o, g, l, m = !0,
			n = u.isXML(e),
			x = [],
			E = a;
			do
			if (d.exec(""), k = d.exec(E)) if (E = k[3], x.push(k[1]), k[2]) {
				g = k[3];
				break
			}
			while (k);
			if (1 < x.length && r.exec(a)) if (2 === x.length && p.relative[x[0]]) s = D(x[0] + x[1], e);
			else for (s = p.relative[x[0]] ? [e] : u(x.shift(), e); x.length;) a = x.shift(),
			p.relative[a] && (a += x.shift()),
			s = D(a, s);
			else if (!f && 1 < x.length && 9 === e.nodeType && !n && p.match.ID.test(x[0]) && !p.match.ID.test(x[x.length - 1]) && (k = u.find(x.shift(), e, n), e = k.expr ? u.filter(k.expr, k.set)[0] : k.set[0]), e) {
				k = f ? {
					expr: x.pop(),
					set: v(f)
				}: u.find(x.pop(), 1 === x.length && ("~" === x[0] || "+" === x[0]) && e.parentNode ? e.parentNode: e, n);
				s = k.expr ? u.filter(k.expr, k.set) : k.set;
				for (0 < x.length ? o = v(s) : m = !1; x.length;) k = l = x.pop(),
				p.relative[l] ? k = x.pop() : l = "",
				null == k && (k = e),
				p.relative[l](o, k, n)
			} else o = [];
			o || (o = s);
			o || u.error(l || a);
			if ("[object Array]" === h.call(o)) if (m) if (e && 1 === e.nodeType) for (a = 0; null != o[a]; a++) o[a] && (!0 === o[a] || 1 === o[a].nodeType && u.contains(e, o[a])) && b.push(s[a]);
			else for (a = 0; null != o[a]; a++) o[a] && 1 === o[a].nodeType && b.push(s[a]);
			else b.push.apply(b, o);
			else v(o, b);
			g && (u(g, c, b, f), u.uniqueSort(b));
			return b
		};
		u.uniqueSort = function(a) {
			if (I && (g = l, a.sort(I), g)) for (var e = 1; e < a.length; e++) a[e] === a[e - 1] && a.splice(e--, 1);
			return a
		};
		u.matches = function(a, e) {
			return u(a, null, null, e)
		};
		u.matchesSelector = function(a, e) {
			return 0 < u(e, null, null, [a]).length
		};
		u.find = function(a, e, b) {
			var f;
			if (!a) return [];
			for (var c = 0,
			k = p.order.length; c < k; c++) {
				var d, s = p.order[c];
				if (d = p.leftMatch[s].exec(a)) {
					var o = d[1];
					d.splice(1, 1);
					if ("\\" !== o.substr(o.length - 1) && (d[1] = (d[1] || "").replace(m, ""), f = p.find[s](d, e, b), null != f)) {
						a = a.replace(p.match[s], "");
						break
					}
				}
			}
			f || (f = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName("*") : []);
			return {
				set: f,
				expr: a
			}
		};
		u.filter = function(a, e, f, c) {
			for (var d, k, s = a,
			o = [], h = e, q = e && e[0] && u.isXML(e[0]); a && e.length;) {
				for (var g in p.filter) if (null != (d = p.leftMatch[g].exec(a)) && d[2]) {
					var t, l, m = p.filter[g];
					l = d[1];
					k = !1;
					d.splice(1, 1);
					if ("\\" !== l.substr(l.length - 1)) {
						h === o && (o = []);
						if (p.preFilter[g]) if (d = p.preFilter[g](d, h, f, o, c, q)) {
							if (!0 === d) continue
						} else k = t = !0;
						if (d) for (var n = 0; null != (l = h[n]); n++) if (l) {
							t = m(l, d, n, h);
							var x = c ^ !!t;
							f && null != t ? x ? k = !0 : h[n] = !1 : x && (o.push(l), k = !0)
						}
						if (t !== b) {
							f || (h = o);
							a = a.replace(p.match[g], "");
							if (!k) return [];
							break
						}
					}
				}
				if (a === s) if (null == k) u.error(a);
				else break;
				s = a
			}
			return h
		};
		u.error = function(a) {
			throw "Syntax error, unrecognized expression: " + a;
		};
		var p = u.selectors = {
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
				href: function(a) {
					return a.getAttribute("href")
				},
				type: function(a) {
					return a.getAttribute("type")
				}
			},
			relative: {
				"+": function(a, e) {
					var b = "string" === typeof e,
					f = b && !n.test(e),
					b = b && !f;
					f && (e = e.toLowerCase());
					for (var f = 0,
					c = a.length,
					d; f < c; f++) if (d = a[f]) {
						for (; (d = d.previousSibling) && 1 !== d.nodeType;);
						a[f] = b || d && d.nodeName.toLowerCase() === e ? d || !1 : d === e
					}
					b && u.filter(e, a, !0)
				},
				">": function(a, e) {
					var b, f = "string" === typeof e,
					c = 0,
					d = a.length;
					if (f && !n.test(e)) for (e = e.toLowerCase(); c < d; c++) {
						if (b = a[c]) b = b.parentNode,
						a[c] = b.nodeName.toLowerCase() === e ? b: !1
					} else {
						for (; c < d; c++)(b = a[c]) && (a[c] = f ? b.parentNode: b.parentNode === e);
						f && u.filter(e, a, !0)
					}
				},
				"": function(b, f, d) {
					var h, q = k++,
					g = c;
					"string" === typeof f && !n.test(f) && (h = f = f.toLowerCase(), g = a);
					g("parentNode", f, q, b, h, d)
				},
				"~": function(b, f, d) {
					var h, q = k++,
					g = c;
					"string" === typeof f && !n.test(f) && (h = f = f.toLowerCase(), g = a);
					g("previousSibling", f, q, b, h, d)
				}
			},
			find: {
				ID: function(a, e, b) {
					if ("undefined" !== typeof e.getElementById && !b) return (a = e.getElementById(a[1])) && a.parentNode ? [a] : []
				},
				NAME: function(a, e) {
					if ("undefined" !== typeof e.getElementsByName) {
						for (var b = [], f = e.getElementsByName(a[1]), c = 0, d = f.length; c < d; c++) f[c].getAttribute("name") === a[1] && b.push(f[c]);
						return 0 === b.length ? null: b
					}
				},
				TAG: function(a, e) {
					if ("undefined" !== typeof e.getElementsByTagName) return e.getElementsByTagName(a[1])
				}
			},
			preFilter: {
				CLASS: function(a, e, b, f, c, d) {
					a = " " + a[1].replace(m, "") + " ";
					if (d) return a;
					for (var d = 0,
					k; null != (k = e[d]); d++) k && (c ^ (k.className && 0 <= (" " + k.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? b || f.push(k) : b && (e[d] = !1));
					return ! 1
				},
				ID: function(a) {
					return a[1].replace(m, "")
				},
				TAG: function(a) {
					return a[1].replace(m, "").toLowerCase()
				},
				CHILD: function(a) {
					if ("nth" === a[1]) {
						a[2] || u.error(a[0]);
						a[2] = a[2].replace(/^\+|\s*/g, "");
						var e = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
						a[2] = e[1] + (e[2] || 1) - 0;
						a[3] = e[3] - 0
					} else a[2] && u.error(a[0]);
					a[0] = k++;
					return a
				},
				ATTR: function(a, e, b, f, c, d) {
					e = a[1] = a[1].replace(m, ""); ! d && p.attrMap[e] && (a[1] = p.attrMap[e]);
					a[4] = (a[4] || a[5] || "").replace(m, "");
					"~=" === a[2] && (a[4] = " " + a[4] + " ");
					return a
				},
				PSEUDO: function(a, e, b, f, c) {
					if ("not" === a[1]) if (1 < (d.exec(a[3]) || "").length || /^\w/.test(a[3])) a[3] = u(a[3], null, null, e);
					else return a = u.filter(a[3], e, b, 1 ^ c),
					b || f.push.apply(f, a),
					!1;
					else if (p.match.POS.test(a[0]) || p.match.CHILD.test(a[0])) return ! 0;
					return a
				},
				POS: function(a) {
					a.unshift(!0);
					return a
				}
			},
			filters: {
				enabled: function(a) {
					return ! 1 === a.disabled && "hidden" !== a.type
				},
				disabled: function(a) {
					return ! 0 === a.disabled
				},
				checked: function(a) {
					return ! 0 === a.checked
				},
				selected: function(a) {
					a.parentNode && a.parentNode.selectedIndex;
					return ! 0 === a.selected
				},
				parent: function(a) {
					return !! a.firstChild
				},
				empty: function(a) {
					return ! a.firstChild
				},
				has: function(a, e, b) {
					return !! u(b[3], a).length
				},
				header: function(a) {
					return /h\d/i.test(a.nodeName)
				},
				text: function(a) {
					var e = a.getAttribute("type"),
					b = a.type;
					return "input" === a.nodeName.toLowerCase() && "text" === b && (e === b || null === e)
				},
				radio: function(a) {
					return "input" === a.nodeName.toLowerCase() && "radio" === a.type
				},
				checkbox: function(a) {
					return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
				},
				file: function(a) {
					return "input" === a.nodeName.toLowerCase() && "file" === a.type
				},
				password: function(a) {
					return "input" === a.nodeName.toLowerCase() && "password" === a.type
				},
				submit: function(a) {
					var e = a.nodeName.toLowerCase();
					return ("input" === e || "button" === e) && "submit" === a.type
				},
				image: function(a) {
					return "input" === a.nodeName.toLowerCase() && "image" === a.type
				},
				reset: function(a) {
					var e = a.nodeName.toLowerCase();
					return ("input" === e || "button" === e) && "reset" === a.type
				},
				button: function(a) {
					var e = a.nodeName.toLowerCase();
					return "input" === e && "button" === a.type || "button" === e
				},
				input: function(a) {
					return /input|select|textarea|button/i.test(a.nodeName)
				},
				focus: function(a) {
					return a === a.ownerDocument.activeElement
				}
			},
			setFilters: {
				first: function(a, e) {
					return 0 === e
				},
				last: function(a, e, b, f) {
					return e === f.length - 1
				},
				even: function(a, e) {
					return 0 === e % 2
				},
				odd: function(a, e) {
					return 1 === e % 2
				},
				lt: function(a, e, b) {
					return e < b[3] - 0
				},
				gt: function(a, e, b) {
					return e > b[3] - 0
				},
				nth: function(a, e, b) {
					return b[3] - 0 === e
				},
				eq: function(a, e, b) {
					return b[3] - 0 === e
				}
			},
			filter: {
				PSEUDO: function(a, e, b, f) {
					var c = e[1],
					d = p.filters[c];
					if (d) return d(a, b, e, f);
					if ("contains" === c) return 0 <= (a.textContent || a.innerText || u.getText([a]) || "").indexOf(e[3]);
					if ("not" === c) {
						e = e[3];
						b = 0;
						for (f = e.length; b < f; b++) if (e[b] === a) return ! 1;
						return ! 0
					}
					u.error(c)
				},
				CHILD: function(a, e) {
					var b = e[1],
					f = a;
					switch (b) {
					case "only":
					case "first":
						for (; f = f.previousSibling;) if (1 === f.nodeType) return ! 1;
						if ("first" === b) return ! 0;
						f = a;
					case "last":
						for (; f = f.nextSibling;) if (1 === f.nodeType) return ! 1;
						return ! 0;
					case "nth":
						var b = e[2],
						c = e[3];
						if (1 === b && 0 === c) return ! 0;
						var d = e[0],
						k = a.parentNode;
						if (k && (k.sizcache !== d || !a.nodeIndex)) {
							for (var s = 0,
							f = k.firstChild; f; f = f.nextSibling) 1 === f.nodeType && (f.nodeIndex = ++s);
							k.sizcache = d
						}
						f = a.nodeIndex - c;
						return 0 === b ? 0 === f: 0 === f % b && 0 <= f / b
					}
				},
				ID: function(a, e) {
					return 1 === a.nodeType && a.getAttribute("id") === e
				},
				TAG: function(a, e) {
					return "*" === e && 1 === a.nodeType || a.nodeName.toLowerCase() === e
				},
				CLASS: function(a, e) {
					return - 1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(e)
				},
				ATTR: function(a, e) {
					var b = e[1],
					b = p.attrHandle[b] ? p.attrHandle[b](a) : null != a[b] ? a[b] : a.getAttribute(b),
					f = b + "",
					c = e[2],
					d = e[4];
					return null == b ? "!=" === c: "=" === c ? f === d: "*=" === c ? 0 <= f.indexOf(d) : "~=" === c ? 0 <= (" " + f + " ").indexOf(d) : !d ? f && !1 !== b: "!=" === c ? f !== d: "^=" === c ? 0 === f.indexOf(d) : "$=" === c ? f.substr(f.length - d.length) === d: "|=" === c ? f === d || f.substr(0, d.length + 1) === d + "-": !1
				},
				POS: function(a, e, b, f) {
					var c = p.setFilters[e[2]];
					if (c) return c(a, b, e, f)
				}
			}
		},
		r = p.match.POS,
		E = function(a, e) {
			return "\\" + (e - 0 + 1)
		},
		z;
		for (z in p.match) p.match[z] = RegExp(p.match[z].source + /(?![^\[]*\])(?![^\(]*\))/.source),
		p.leftMatch[z] = RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[z].source.replace(/\\(\d+)/g, E));
		var v = function(a, e) {
			a = Array.prototype.slice.call(a, 0);
			return e ? (e.push.apply(e, a), e) : a
		};
		try {
			Array.prototype.slice.call(w.documentElement.childNodes, 0)[0].nodeType
		} catch(M) {
			v = function(a, e) {
				var b = 0,
				f = e || [];
				if ("[object Array]" === h.call(a)) Array.prototype.push.apply(f, a);
				else if ("number" === typeof a.length) for (var c = a.length; b < c; b++) f.push(a[b]);
				else for (; a[b]; b++) f.push(a[b]);
				return f
			}
		}
		var I, A;
		w.documentElement.compareDocumentPosition ? I = function(a, e) {
			return a === e ? (g = !0, 0) : !a.compareDocumentPosition || !e.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(e) & 4 ? -1 : 1
		}: (I = function(a, e) {
			if (a === e) return g = !0,
			0;
			if (a.sourceIndex && e.sourceIndex) return a.sourceIndex - e.sourceIndex;
			var b, f, c = [],
			d = [];
			b = a.parentNode;
			f = e.parentNode;
			var k = b;
			if (b === f) return A(a, e);
			if (b) {
				if (!f) return 1
			} else return - 1;
			for (; k;) c.unshift(k),
			k = k.parentNode;
			for (k = f; k;) d.unshift(k),
			k = k.parentNode;
			b = c.length;
			f = d.length;
			for (k = 0; k < b && k < f; k++) if (c[k] !== d[k]) return A(c[k], d[k]);
			return k === b ? A(a, d[k], -1) : A(c[k], e, 1)
		},
		A = function(a, e, b) {
			if (a === e) return b;
			for (a = a.nextSibling; a;) {
				if (a === e) return - 1;
				a = a.nextSibling
			}
			return 1
		});
		u.getText = function(a) {
			for (var e = "",
			b, f = 0; a[f]; f++) b = a[f],
			3 === b.nodeType || 4 === b.nodeType ? e += b.nodeValue: 8 !== b.nodeType && (e += u.getText(b.childNodes));
			return e
		}; (function() {
			var a = w.createElement("div"),
			e = "script" + (new Date).getTime(),
			f = w.documentElement;
			a.innerHTML = "<a name='" + e + "'/>";
			f.insertBefore(a, f.firstChild);
			w.getElementById(e) && (p.find.ID = function(a, e, f) {
				if ("undefined" !== typeof e.getElementById && !f) return (e = e.getElementById(a[1])) ? e.id === a[1] || "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
			},
			p.filter.ID = function(a, e) {
				var b = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
				return 1 === a.nodeType && b && b.nodeValue === e
			});
			f.removeChild(a);
			f = a = null
		})(); (function() {
			var a = w.createElement("div");
			a.appendChild(w.createComment(""));
			0 < a.getElementsByTagName("*").length && (p.find.TAG = function(a, e) {
				var b = e.getElementsByTagName(a[1]);
				if ("*" === a[1]) {
					for (var f = [], c = 0; b[c]; c++) 1 === b[c].nodeType && f.push(b[c]);
					b = f
				}
				return b
			});
			a.innerHTML = "<a href='#'></a>";
			a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (p.attrHandle.href = function(a) {
				return a.getAttribute("href", 2)
			});
			a = null
		})();
		w.querySelectorAll &&
		function() {
			var a = u,
			e = w.createElement("div");
			e.innerHTML = "<p class='TEST'></p>";
			if (! (e.querySelectorAll && 0 === e.querySelectorAll(".TEST").length)) {
				u = function(e, b, f, c) {
					b = b || w;
					if (!c && !u.isXML(b)) {
						var d = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);
						if (d && (1 === b.nodeType || 9 === b.nodeType)) {
							if (d[1]) return v(b.getElementsByTagName(e), f);
							if (d[2] && p.find.CLASS && b.getElementsByClassName) return v(b.getElementsByClassName(d[2]), f)
						}
						if (9 === b.nodeType) {
							if ("body" === e && b.body) return v([b.body], f);
							if (d && d[3]) {
								var k = b.getElementById(d[3]);
								if (k && k.parentNode) {
									if (k.id === d[3]) return v([k], f)
								} else return v([], f)
							}
							try {
								return v(b.querySelectorAll(e), f)
							} catch(s) {}
						} else if (1 === b.nodeType && "object" !== b.nodeName.toLowerCase()) {
							var d = b,
							o = (k = b.getAttribute("id")) || "__sizzle__",
							h = b.parentNode,
							q = /^\s*[+~]/.test(e);
							k ? o = o.replace(/'/g, "\\$&") : b.setAttribute("id", o);
							q && h && (b = b.parentNode);
							try {
								if (!q || h) return v(b.querySelectorAll("[id='" + o + "'] " + e), f)
							} catch(g) {} finally {
								k || d.removeAttribute("id")
							}
						}
					}
					return a(e, b, f, c)
				};
				for (var b in a) u[b] = a[b];
				e = null
			}
		} (); (function() {
			var a = w.documentElement,
			e = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
			if (e) {
				var b = !e.call(w.createElement("div"), "div"),
				f = !1;
				try {
					e.call(w.documentElement, "[test!='']:sizzle")
				} catch(c) {
					f = !0
				}
				u.matchesSelector = function(a, c) {
					c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!u.isXML(a)) try {
						if (f || !p.match.PSEUDO.test(c) && !/!=/.test(c)) {
							var d = e.call(a, c);
							if (d || !b || a.document && 11 !== a.document.nodeType) return d
						}
					} catch(k) {}
					return 0 < u(c, null, null, [a]).length
				}
			}
		})(); (function() {
			var a = w.createElement("div");
			a.innerHTML = "<div class='test e'></div><div class='test'></div>";
			a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function(a, e, b) {
				if ("undefined" !== typeof e.getElementsByClassName && !b) return e.getElementsByClassName(a[1])
			},
			a = null))
		})();
		u.contains = w.documentElement.contains ?
		function(a, e) {
			return a !== e && (a.contains ? a.contains(e) : !0)
		}: w.documentElement.compareDocumentPosition ?
		function(a, e) {
			return !! (a.compareDocumentPosition(e) & 16)
		}: function() {
			return ! 1
		};
		u.isXML = function(a) {
			return (a = (a ? a.ownerDocument || a: 0).documentElement) ? "HTML" !== a.nodeName: !1
		};
		var D = function(a, e) {
			for (var b, f = [], c = "", d = e.nodeType ? [e] : e; b = p.match.PSEUDO.exec(a);) c += b[0],
			a = a.replace(p.match.PSEUDO, "");
			a = p.relative[a] ? a + "*": a;
			b = 0;
			for (var k = d.length; b < k; b++) u(a, d[b], f);
			return u.filter(c, f)
		};
		f.find = u;
		f.expr = u.selectors;
		f.expr[":"] = f.expr.filters;
		f.unique = u.uniqueSort;
		f.text = u.getText;
		f.isXMLDoc = u.isXML;
		f.contains = u.contains
	})();
	var gb = /Until$/,
	hb = /^(?:parents|prevUntil|prevAll)/,
	ib = /,/,
	Ta = /^.[^:#\[\.,]*$/,
	jb = Array.prototype.slice,
	Aa = f.expr.match.POS,
	kb = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	f.fn.extend({
		find: function(a) {
			var b = this,
			c, d;
			if ("string" !== typeof a) return f(a).filter(function() {
				for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return ! 0
			});
			var k = this.pushStack("", "find", a),
			h,
			g,
			l;
			for (c = 0, d = this.length; c < d; c++) if (h = k.length, f.find(a, this[c], k), 0 < c) for (g = h; g < k.length; g++) for (l = 0; l < h; l++) if (k[l] === k[g]) {
				k.splice(g--, 1);
				break
			}
			return k
		},
		has: function(a) {
			var b = f(a);
			return this.filter(function() {
				for (var a = 0,
				e = b.length; a < e; a++) if (f.contains(this, b[a])) return ! 0
			})
		},
		not: function(a) {
			return this.pushStack(v(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(v(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !! a && ("string" === typeof a ? 0 < f.filter(a, this).length: 0 < this.filter(a).length)
		},
		closest: function(a, b) {
			var c = [],
			d,
			k,
			h = this[0];
			if (f.isArray(a)) {
				var g, l = {},
				m = 1;
				if (h && a.length) {
					for (d = 0, k = a.length; d < k; d++) g = a[d],
					l[g] || (l[g] = Aa.test(g) ? f(g, b || this.context) : g);
					for (; h && h.ownerDocument && h !== b;) {
						for (g in l) d = l[g],
						(d.jquery ? -1 < d.index(h) : f(h).is(d)) && c.push({
							selector: g,
							elem: h,
							level: m
						});
						h = h.parentNode;
						m++
					}
				}
				return c
			}
			g = Aa.test(a) || "string" !== typeof a ? f(a, b || this.context) : 0;
			for (d = 0, k = this.length; d < k; d++) for (h = this[d]; h;) if (g ? -1 < g.index(h) : f.find.matchesSelector(h, a)) {
				c.push(h);
				break
			} else if (h = h.parentNode, !h || !h.ownerDocument || h === b || 11 === h.nodeType) break;
			c = 1 < c.length ? f.unique(c) : c;
			return this.pushStack(c, "closest", a)
		},
		index: function(a) {
			return ! a ? this[0] && this[0].parentNode ? this.prevAll().length: -1 : "string" === typeof a ? f.inArray(this[0], f(a)) : f.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			var c = "string" === typeof a ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
			d = f.merge(this.get(), c);
			return this.pushStack(!c[0] || !c[0].parentNode || 11 === c[0].parentNode.nodeType || !d[0] || !d[0].parentNode || 11 === d[0].parentNode.nodeType ? d: f.unique(d))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	});
	f.each({
		parent: function(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a: null
		},
		parents: function(a) {
			return f.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return f.dir(a, "parentNode", c)
		},
		next: function(a) {
			return f.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return f.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return f.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return f.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return f.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return f.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return f.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return f.sibling(a.firstChild)
		},
		contents: function(a) {
			return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: f.makeArray(a.childNodes)
		}
	},
	function(a, b) {
		f.fn[a] = function(c, d) {
			var k = f.map(this, b, c),
			h = jb.call(arguments);
			gb.test(a) || (d = c);
			d && "string" === typeof d && (k = f.filter(d, k));
			k = 1 < this.length && !kb[a] ? f.unique(k) : k;
			if ((1 < this.length || ib.test(d)) && hb.test(a)) k = k.reverse();
			return this.pushStack(k, a, h.join(","))
		}
	});
	f.extend({
		filter: function(a, b, c) {
			c && (a = ":not(" + a + ")");
			return 1 === b.length ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
		},
		dir: function(a, c, d) {
			for (var k = [], a = a[c]; a && 9 !== a.nodeType && (d === b || 1 !== a.nodeType || !f(a).is(d));) 1 === a.nodeType && k.push(a),
			a = a[c];
			return k
		},
		nth: function(a, b, f) {
			for (var b = b || 1,
			c = 0; a && !(1 === a.nodeType && ++c === b); a = a[f]);
			return a
		},
		sibling: function(a, b) {
			for (var f = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && f.push(a);
			return f
		}
	});
	var lb = / jQuery\d+="(?:\d+|null)"/g,
	oa = /^\s+/,
	Ba = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	Ca = /<([\w:]+)/,
	mb = /<tbody/i,
	nb = /<|&#?\w+;/,
	Da = /<(?:script|object|embed|option|style)/i,
	Ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
	ob = /\/(java|ecma)script/i,
	Ua = /^\s*<!(?:\[CDATA\[|\-\-)/,
	H = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		area: [1, "<map>", "</map>"],
		_default: [0, "", ""]
	};
	H.optgroup = H.option;
	H.tbody = H.tfoot = H.colgroup = H.caption = H.thead;
	H.th = H.td;
	f.support.htmlSerialize || (H._default = [1, "div<div>", "</div>"]);
	f.fn.extend({
		text: function(a) {
			return f.isFunction(a) ? this.each(function(b) {
				var c = f(this);
				c.text(a.call(this, b, c.text()))
			}) : "object" !== typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || w).createTextNode(a)) : f.text(this)
		},
		wrapAll: function(a) {
			if (f.isFunction(a)) return this.each(function(b) {
				f(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]);
				b.map(function() {
					for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return f.isFunction(a) ? this.each(function(b) {
				f(this).wrapInner(a.call(this, b))
			}) : this.each(function() {
				var b = f(this),
				c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			return this.each(function() {
				f(this).wrapAll(a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0,
			function(a) {
				1 === this.nodeType && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0,
			function(a) {
				1 === this.nodeType && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
			function(a) {
				this.parentNode.insertBefore(a, this)
			});
			if (arguments.length) {
				var a = f(arguments[0]);
				a.push.apply(a, this.toArray());
				return this.pushStack(a, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
			function(a) {
				this.parentNode.insertBefore(a, this.nextSibling)
			});
			if (arguments.length) {
				var a = this.pushStack(this, "after", arguments);
				a.push.apply(a, f(arguments[0]).toArray());
				return a
			}
		},
		remove: function(a, b) {
			for (var c = 0,
			d; null != (d = this[c]); c++) if (!a || f.filter(a, [d]).length) ! b && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])),
			d.parentNode && d.parentNode.removeChild(d);
			return this
		},
		empty: function() {
			for (var a = 0,
			b; null != (b = this[a]); a++) for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
			return this
		},
		clone: function(a, b) {
			a = null == a ? !1 : a;
			b = null == b ? a: b;
			return this.map(function() {
				return f.clone(this, a, b)
			})
		},
		html: function(a) {
			if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(lb, "") : null;
			if ("string" === typeof a && !Da.test(a) && (f.support.leadingWhitespace || !oa.test(a)) && !H[(Ca.exec(a) || ["", ""])[1].toLowerCase()]) {
				a = a.replace(Ba, "<$1></$2>");
				try {
					for (var c = 0,
					d = this.length; c < d; c++) 1 === this[c].nodeType && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
				} catch(k) {
					this.empty().append(a)
				}
			} else f.isFunction(a) ? this.each(function(b) {
				var c = f(this);
				c.html(a.call(this, b, c.html()))
			}) : this.empty().append(a);
			return this
		},
		replaceWith: function(a) {
			if (this[0] && this[0].parentNode) {
				if (f.isFunction(a)) return this.each(function(b) {
					var c = f(this),
					d = c.html();
					c.replaceWith(a.call(this, b, d))
				});
				"string" !== typeof a && (a = f(a).detach());
				return this.each(function() {
					var b = this.nextSibling,
					c = this.parentNode;
					f(this).remove();
					b ? f(b).before(a) : f(c).append(a)
				})
			}
			return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, c, d) {
			var k, h, g, l = a[0],
			m = [];
			if (!f.support.checkClone && 3 === arguments.length && "string" === typeof l && Ea.test(l)) return this.each(function() {
				f(this).domManip(a, c, d, !0)
			});
			if (f.isFunction(l)) return this.each(function(k) {
				var h = f(this);
				a[0] = l.call(this, k, c ? h.html() : b);
				h.domManip(a, c, d)
			});
			if (this[0]) {
				k = l && l.parentNode;
				k = f.support.parentNode && k && 11 === k.nodeType && k.childNodes.length === this.length ? {
					fragment: k
				}: f.buildFragment(a, this, m);
				g = k.fragment;
				if (h = 1 === g.childNodes.length ? g = g.firstChild: g.firstChild) {
					c = c && f.nodeName(h, "tr");
					h = 0;
					for (var u = this.length,
					n = u - 1; h < u; h++) d.call(c ? f.nodeName(this[h], "table") ? this[h].getElementsByTagName("tbody")[0] || this[h].appendChild(this[h].ownerDocument.createElement("tbody")) : this[h] : this[h], k.cacheable || 1 < u && h < n ? f.clone(g, !0, !0) : g)
				}
				m.length && f.each(m, B)
			}
			return this
		}
	});
	f.buildFragment = function(a, b, c) {
		var d, k, h, g;
		b && b[0] && (g = b[0].ownerDocument || b[0]);
		g.createDocumentFragment || (g = w);
		if (1 === a.length && "string" === typeof a[0] && 512 > a[0].length && g === w && "<" === a[0].charAt(0) && !Da.test(a[0]) && (f.support.checkClone || !Ea.test(a[0]))) k = !0,
		(h = f.fragments[a[0]]) && 1 !== h && (d = h);
		d || (d = g.createDocumentFragment(), f.clean(a, g, d, c));
		k && (f.fragments[a[0]] = h ? d: 1);
		return {
			fragment: d,
			cacheable: k
		}
	};
	f.fragments = {};
	f.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(a, b) {
		f.fn[a] = function(c) {
			var d = [],
			c = f(c),
			k = 1 === this.length && this[0].parentNode;
			if (k && 11 === k.nodeType && 1 === k.childNodes.length && 1 === c.length) return c[b](this[0]),
			this;
			for (var k = 0,
			h = c.length; k < h; k++) {
				var g = (0 < k ? this.clone(!0) : this).get();
				f(c[k])[b](g);
				d = d.concat(g)
			}
			return this.pushStack(d, a, c.selector)
		}
	});
	f.extend({
		clone: function(a, b, c) {
			var d = a.cloneNode(!0),
			k,
			h,
			g;
			if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (1 === a.nodeType || 11 === a.nodeType) && !f.isXMLDoc(a)) {
				z(a, d);
				k = A(a);
				h = A(d);
				for (g = 0; k[g]; ++g) h[g] && z(k[g], h[g])
			}
			if (b && (p(a, d), c)) {
				k = A(a);
				h = A(d);
				for (g = 0; k[g]; ++g) p(k[g], h[g])
			}
			return d
		},
		clean: function(a, b, c, d) {
			b = b || w;
			"undefined" === typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || w);
			for (var k = [], h, g = 0, l; null != (l = a[g]); g++) if ("number" === typeof l && (l += ""), l) {
				if ("string" === typeof l) if (nb.test(l)) {
					l = l.replace(Ba, "<$1></$2>");
					h = (Ca.exec(l) || ["", ""])[1].toLowerCase();
					var m = H[h] || H._default,
					u = m[0],
					n = b.createElement("div");
					for (n.innerHTML = m[1] + l + m[2]; u--;) n = n.lastChild;
					if (!f.support.tbody) {
						u = mb.test(l);
						m = "table" === h && !u ? n.firstChild && n.firstChild.childNodes: "<table>" === m[1] && !u ? n.childNodes: [];
						for (h = m.length - 1; 0 <= h; --h) f.nodeName(m[h], "tbody") && !m[h].childNodes.length && m[h].parentNode.removeChild(m[h])
					} ! f.support.leadingWhitespace && oa.test(l) && n.insertBefore(b.createTextNode(oa.exec(l)[0]), n.firstChild);
					l = n.childNodes
				} else l = b.createTextNode(l);
				var p;
				if (!f.support.appendChecked) if (l[0] && "number" === typeof(p = l.length)) for (h = 0; h < p; h++) D(l[h]);
				else D(l);
				l.nodeType ? k.push(l) : k = f.merge(k, l)
			}
			if (c) {
				a = function(a) {
					return ! a.type || ob.test(a.type)
				};
				for (g = 0; k[g]; g++) d && f.nodeName(k[g], "script") && (!k[g].type || "text/javascript" === k[g].type.toLowerCase()) ? d.push(k[g].parentNode ? k[g].parentNode.removeChild(k[g]) : k[g]) : (1 === k[g].nodeType && (b = f.grep(k[g].getElementsByTagName("script"), a), k.splice.apply(k, [g + 1, 0].concat(b))), c.appendChild(k[g]))
			}
			return k
		},
		cleanData: function(a) {
			for (var b, c, d = f.cache,
			k = f.expando,
			h = f.event.special,
			g = f.support.deleteExpando,
			l = 0,
			m; null != (m = a[l]); l++) if (!m.nodeName || !f.noData[m.nodeName.toLowerCase()]) if (c = m[f.expando]) {
				if ((b = d[c] && d[c][k]) && b.events) {
					for (var u in b.events) h[u] ? f.event.remove(m, u) : f.removeEvent(m, u, b.handle);
					b.handle && (b.handle.elem = null)
				}
				g ? delete m[f.expando] : m.removeAttribute && m.removeAttribute(f.expando);
				delete d[c]
			}
		}
	});
	var pa = /alpha\([^)]*\)/i,
	pb = /opacity=([^)]*)/,
	qb = /([A-Z]|^ms)/g,
	Fa = /^-?\d+(?:px)?$/i,
	rb = /^-?\d/,
	sb = /^([\-+])=([\-+.\de]+)/,
	tb = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	Va = ["Left", "Right"],
	Wa = ["Top", "Bottom"],
	T,
	Ga,
	Ha;
	f.fn.css = function(a, c) {
		return 2 === arguments.length && c === b ? this: f.access(this, a, c, !0,
		function(a, e, c) {
			return c !== b ? f.style(a, e, c) : f.css(a, e)
		})
	};
	f.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = T(a, "opacity", "opacity");
						return "" === c ? "1": c
					}
					return a.style.opacity
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
			"float": f.support.cssFloat ? "cssFloat": "styleFloat"
		},
		style: function(a, c, d, k) {
			if (a && !(3 === a.nodeType || 8 === a.nodeType || !a.style)) {
				var h, g = f.camelCase(c),
				l = a.style,
				m = f.cssHooks[g],
				c = f.cssProps[g] || g;
				if (d !== b) {
					k = typeof d;
					if ("string" === k && (h = sb.exec(d))) d = +(h[1] + 1) * +h[2] + parseFloat(f.css(a, c)),
					k = "number";
					if (! (null == d || "number" === k && isNaN(d))) if ("number" === k && !f.cssNumber[g] && (d += "px"), !m || !("set" in m) || (d = m.set(a, d)) !== b) try {
						l[c] = d
					} catch(u) {}
				} else return m && "get" in m && (h = m.get(a, !1, k)) !== b ? h: l[c]
			}
		},
		css: function(a, c, d) {
			var k, h, c = f.camelCase(c);
			h = f.cssHooks[c];
			c = f.cssProps[c] || c;
			"cssFloat" === c && (c = "float");
			if (h && "get" in h && (k = h.get(a, !0, d)) !== b) return k;
			if (T) return T(a, c)
		},
		swap: function(a, b, c) {
			var f = {},
			d;
			for (d in b) f[d] = a.style[d],
			a.style[d] = b[d];
			c.call(a);
			for (d in b) a.style[d] = f[d]
		}
	});
	f.curCSS = f.css;
	f.each(["height", "width"],
	function(a, b) {
		f.cssHooks[b] = {
			get: function(a, e, c) {
				var d;
				if (e) {
					if (0 !== a.offsetWidth) return C(a, b, c);
					f.swap(a, tb,
					function() {
						d = C(a, b, c)
					});
					return d
				}
			},
			set: function(a, e) {
				if (Fa.test(e)) {
					if (e = parseFloat(e), 0 <= e) return e + "px"
				} else return e
			}
		}
	});
	f.support.opacity || (f.cssHooks.opacity = {
		get: function(a, b) {
			return pb.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
		},
		set: function(a, b) {
			var c = a.style,
			d = a.currentStyle,
			k = f.isNaN(b) ? "": "alpha(opacity=" + 100 * b + ")",
			h = d && d.filter || c.filter || "";
			c.zoom = 1;
			if (! (1 <= b && "" === f.trim(h.replace(pa, "")) && (c.removeAttribute("filter"), d && !d.filter))) c.filter = pa.test(h) ? h.replace(pa, k) : h + " " + k
		}
	});
	f(function() {
		f.support.reliableMarginRight || (f.cssHooks.marginRight = {
			get: function(a, b) {
				var c;
				f.swap(a, {
					display: "inline-block"
				},
				function() {
					c = b ? T(a, "margin-right", "marginRight") : a.style.marginRight
				});
				return c
			}
		})
	});
	w.defaultView && w.defaultView.getComputedStyle && (Ga = function(a, c) {
		var d, k, c = c.replace(qb, "-$1").toLowerCase();
		if (! (k = a.ownerDocument.defaultView)) return b;
		if (k = k.getComputedStyle(a, null)) d = k.getPropertyValue(c),
		"" === d && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c));
		return d
	});
	w.documentElement.currentStyle && (Ha = function(a, b) {
		var c, f = a.currentStyle && a.currentStyle[b],
		d = a.runtimeStyle && a.runtimeStyle[b],
		k = a.style; ! Fa.test(f) && rb.test(f) && (c = k.left, d && (a.runtimeStyle.left = a.currentStyle.left), k.left = "fontSize" === b ? "1em": f || 0, f = k.pixelLeft + "px", k.left = c, d && (a.runtimeStyle.left = d));
		return "" === f ? "auto": f
	});
	T = Ga || Ha;
	f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
		var b = a.offsetHeight;
		return 0 === a.offsetWidth && 0 === b || !f.support.reliableHiddenOffsets && "none" === (a.style.display || f.css(a, "display"))
	},
	f.expr.filters.visible = function(a) {
		return ! f.expr.filters.hidden(a)
	});
	var ub = /%20/g,
	Xa = /\[\]$/,
	Ia = /\r?\n/g,
	vb = /#.*$/,
	wb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	xb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	yb = /^(?:GET|HEAD)$/,
	zb = /^\/\//,
	Ja = /\?/,
	Ab = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	Bb = /^(?:select|textarea)/i,
	ra = /\s+/,
	Cb = /([?&])_=[^&]*/,
	Ka = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
	La = f.fn.load,
	ia = {},
	Ma = {},
	L, Q, Na = ["*/"] + ["*"];
	try {
		L = Y.href
	} catch(Ib) {
		L = w.createElement("a"),
		L.href = "",
		L = L.href
	}
	Q = Ka.exec(L.toLowerCase()) || [];
	f.fn.extend({
		load: function(a, c, d) {
			if ("string" !== typeof a && La) return La.apply(this, arguments);
			if (!this.length) return this;
			var k = a.indexOf(" ");
			if (0 <= k) var h = a.slice(k, a.length),
			a = a.slice(0, k);
			k = "GET";
			c && (f.isFunction(c) ? (d = c, c = b) : "object" === typeof c && (c = f.param(c, f.ajaxSettings.traditional), k = "POST"));
			var g = this;
			f.ajax({
				url: a,
				type: k,
				dataType: "html",
				data: c,
				complete: function(a, e, b) {
					b = a.responseText;
					a.isResolved() && (a.done(function(a) {
						b = a
					}), g.html(h ? f("<div>").append(b.replace(Ab, "")).find(h) : b));
					d && g.each(d, [b, e, a])
				}
			});
			return this
		},
		serialize: function() {
			return f.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? f.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Bb.test(this.nodeName) || xb.test(this.type))
			}).map(function(a, b) {
				var c = f(this).val();
				return null == c ? null: f.isArray(c) ? f.map(c,
				function(a) {
					return {
						name: b.name,
						value: a.replace(Ia, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(Ia, "\r\n")
				}
			}).get()
		}
	});
	f.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),
	function(a, b) {
		f.fn[b] = function(a) {
			return this.bind(b, a)
		}
	});
	f.each(["get", "post"],
	function(a, c) {
		f[c] = function(a, e, d, k) {
			f.isFunction(e) && (k = k || d, d = e, e = b);
			return f.ajax({
				type: c,
				url: a,
				data: e,
				success: d,
				dataType: k
			})
		}
	});
	f.extend({
		getScript: function(a, c) {
			return f.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return f.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			b ? u(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings);
			u(a, b);
			return a
		},
		ajaxSettings: {
			url: L,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(Q[1]),
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
				"*": Na
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
				"text json": f.parseJSON,
				"text xml": f.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: O(ia),
		ajaxTransport: O(Ma),
		ajax: function(a, c) {
			function d(a, e, c, k) {
				if (2 !== w) {
					w = 2;
					I && clearTimeout(I);
					M = b;
					z = k || "";
					y.readyState = 0 < a ? 4 : 0;
					var s, q, r, k = e;
					if (c) {
						var E = h,
						v = y,
						A = E.contents,
						G = E.dataTypes,
						C = E.responseFields,
						B, F, N, Y;
						for (F in C) F in c && (v[C[F]] = c[F]);
						for (;
						"*" === G[0];) G.shift(),
						B === b && (B = E.mimeType || v.getResponseHeader("content-type"));
						if (B) for (F in A) if (A[F] && A[F].test(B)) {
							G.unshift(F);
							break
						}
						if (G[0] in c) N = G[0];
						else {
							for (F in c) {
								if (!G[0] || E.converters[F + " " + G[0]]) {
									N = F;
									break
								}
								Y || (Y = F)
							}
							N = N || Y
						}
						N ? (N !== G[0] && G.unshift(N), c = c[N]) : c = void 0
					} else c = b;
					if (200 <= a && 300 > a || 304 === a) {
						if (h.ifModified) {
							if (B = y.getResponseHeader("Last-Modified")) f.lastModified[p] = B;
							if (B = y.getResponseHeader("Etag")) f.etag[p] = B
						}
						if (304 === a) k = "notmodified",
						s = !0;
						else try {
							B = h;
							B.dataFilter && (c = B.dataFilter(c, B.dataType));
							var ga = B.dataTypes;
							F = {};
							var P, O, $ = ga.length,
							H, R = ga[0],
							J,
							X,
							S,
							K,
							L;
							for (P = 1; P < $; P++) {
								if (1 === P) for (O in B.converters)"string" === typeof O && (F[O.toLowerCase()] = B.converters[O]);
								J = R;
								R = ga[P];
								if ("*" === R) R = J;
								else if ("*" !== J && J !== R) {
									X = J + " " + R;
									S = F[X] || F["* " + R];
									if (!S) for (K in L = b, F) if (H = K.split(" "), H[0] === J || "*" === H[0]) if (L = F[H[1] + " " + R]) {
										K = F[K]; ! 0 === K ? S = L: !0 === L && (S = K);
										break
									} ! S && !L && f.error("No conversion from " + X.replace(" ", " to ")); ! 0 !== S && (c = S ? S(c) : L(K(c)))
								}
							}
							q = c;
							k = "success";
							s = !0
						} catch(Q) {
							k = "parsererror",
							r = Q
						}
					} else if (r = k, !k || a) k = "error",
					0 > a && (a = 0);
					y.status = a;
					y.statusText = "" + (e || k);
					s ? m.resolveWith(g, [q, k, y]) : m.rejectWith(g, [y, k, r]);
					y.statusCode(n);
					n = b;
					D && l.trigger("ajax" + (s ? "Success": "Error"), [y, h, s ? q: r]);
					u.resolveWith(g, [y, k]);
					D && (l.trigger("ajaxComplete", [y, h]), --f.active || f.event.trigger("ajaxStop"))
				}
			}
			"object" === typeof a && (c = a, a = b);
			var c = c || {},
			h = f.ajaxSetup({},
			c),
			g = h.context || h,
			l = g !== h && (g.nodeType || g instanceof f) ? f(g) : f.event,
			m = f.Deferred(),
			u = f._Deferred(),
			n = h.statusCode || {},
			p,
			r = {},
			E = {},
			z,
			v,
			M,
			I,
			A,
			w = 0,
			D,
			G,
			y = {
				readyState: 0,
				setRequestHeader: function(a, e) {
					if (!w) {
						var b = a.toLowerCase(),
						a = E[b] = E[b] || a;
						r[a] = e
					}
					return this
				},
				getAllResponseHeaders: function() {
					return 2 === w ? z: null
				},
				getResponseHeader: function(a) {
					var e;
					if (2 === w) {
						if (!v) for (v = {}; e = wb.exec(z);) v[e[1].toLowerCase()] = e[2];
						e = v[a.toLowerCase()]
					}
					return e === b ? null: e
				},
				overrideMimeType: function(a) {
					w || (h.mimeType = a);
					return this
				},
				abort: function(a) {
					a = a || "abort";
					M && M.abort(a);
					d(0, a);
					return this
				}
			};
			m.promise(y);
			y.success = y.done;
			y.error = y.fail;
			y.complete = u.done;
			y.statusCode = function(a) {
				if (a) {
					var e;
					if (2 > w) for (e in a) n[e] = [n[e], a[e]];
					else e = a[y.status],
					y.then(e, e)
				}
				return this
			};
			h.url = ((a || h.url) + "").replace(vb, "").replace(zb, Q[1] + "//");
			h.dataTypes = f.trim(h.dataType || "*").toLowerCase().split(ra);
			null == h.crossDomain && (A = Ka.exec(h.url.toLowerCase()), h.crossDomain = !(!A || !(A[1] != Q[1] || A[2] != Q[2] || (A[3] || ("http:" === A[1] ? 80 : 443)) != (Q[3] || ("http:" === Q[1] ? 80 : 443)))));
			h.data && h.processData && "string" !== typeof h.data && (h.data = f.param(h.data, h.traditional));
			k(ia, h, c, y);
			if (2 === w) return ! 1;
			D = h.global;
			h.type = h.type.toUpperCase();
			h.hasContent = !yb.test(h.type);
			D && 0 === f.active++&&f.event.trigger("ajaxStart");
			if (!h.hasContent && (h.data && (h.url += (Ja.test(h.url) ? "&": "?") + h.data, delete h.data), p = h.url, !1 === h.cache)) {
				A = f.now();
				var C = h.url.replace(Cb, "$1_=" + A);
				h.url = C + (C === h.url ? (Ja.test(h.url) ? "&": "?") + "_=" + A: "")
			} (h.data && h.hasContent && !1 !== h.contentType || c.contentType) && y.setRequestHeader("Content-Type", h.contentType);
			h.ifModified && (p = p || h.url, f.lastModified[p] && y.setRequestHeader("If-Modified-Since", f.lastModified[p]), f.etag[p] && y.setRequestHeader("If-None-Match", f.etag[p]));
			y.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Na + "; q=0.01": "") : h.accepts["*"]);
			for (G in h.headers) y.setRequestHeader(G, h.headers[G]);
			if (h.beforeSend && (!1 === h.beforeSend.call(g, y, h) || 2 === w)) return y.abort(),
			!1;
			for (G in {
				success: 1,
				error: 1,
				complete: 1
			}) y[G](h[G]);
			if (M = k(Ma, h, c, y)) {
				y.readyState = 1;
				D && l.trigger("ajaxSend", [y, h]);
				h.async && 0 < h.timeout && (I = setTimeout(function() {
					y.abort("timeout")
				},
				h.timeout));
				try {
					w = 1,
					M.send(r, d)
				} catch(B) {
					2 > w ? d( - 1, B) : f.error(B)
				}
			} else d( - 1, "No Transport");
			return y
		},
		param: function(a, c) {
			var d = [],
			k = function(a, e) {
				e = f.isFunction(e) ? e() : e;
				d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(e)
			};
			c === b && (c = f.ajaxSettings.traditional);
			if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a,
			function() {
				k(this.name, this.value)
			});
			else for (var h in a) E(h, a[h], c, k);
			return d.join("&").replace(ub, "+")
		}
	});
	f.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var Db = f.now(),
	ea = /(\=)\?(&|$)|\?\?/i;
	f.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return f.expando + "_" + Db++
		}
	});
	f.ajaxPrefilter("json jsonp",
	function(e, b, c) {
		b = "application/x-www-form-urlencoded" === e.contentType && "string" === typeof e.data;
		if ("jsonp" === e.dataTypes[0] || !1 !== e.jsonp && (ea.test(e.url) || b && ea.test(e.data))) {
			var d, k = e.jsonpCallback = f.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
			h = a[k],
			g = e.url,
			l = e.data,
			m = "$1" + k + "$2"; ! 1 !== e.jsonp && (g = g.replace(ea, m), e.url === g && (b && (l = l.replace(ea, m)), e.data === l && (g += (/\?/.test(g) ? "&": "?") + e.jsonp + "=" + k)));
			e.url = g;
			e.data = l;
			a[k] = function(a) {
				d = [a]
			};
			c.always(function() {
				a[k] = h;
				if (d && f.isFunction(h)) a[k](d[0])
			});
			e.converters["script json"] = function() {
				d || f.error(k + " was not called");
				return d[0]
			};
			e.dataTypes[0] = "json";
			return "script"
		}
	});
	f.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				f.globalEval(a);
				return a
			}
		}
	});
	f.ajaxPrefilter("script",
	function(a) {
		a.cache === b && (a.cache = !1);
		a.crossDomain && (a.type = "GET", a.global = !1)
	});
	f.ajaxTransport("script",
	function(a) {
		if (a.crossDomain) {
			var c, f = w.head || w.getElementsByTagName("head")[0] || w.documentElement;
			return {
				send: function(d, k) {
					c = w.createElement("script");
					c.async = "async";
					a.scriptCharset && (c.charset = a.scriptCharset);
					c.src = a.url;
					c.onload = c.onreadystatechange = function(a, e) {
						if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null,
						f && c.parentNode && f.removeChild(c),
						c = b,
						e || k(200, "success")
					};
					f.insertBefore(c, f.firstChild)
				},
				abort: function() {
					if (c) c.onload(0, 1)
				}
			}
		}
	});
	var qa = a.ActiveXObject ?
	function() {
		for (var a in W) W[a](0, 1)
	}: !1,
	Eb = 0,
	W;
	f.ajaxSettings.xhr = a.ActiveXObject ?
	function() {
		var b;
		if (! (b = !this.isLocal && M())) a: {
			try {
				b = new a.ActiveXObject("Microsoft.XMLHTTP");
				break a
			} catch(c) {}
			b = void 0
		}
		return b
	}: M; (function(a) {
		f.extend(f.support, {
			ajax: !!a,
			cors: !!a && "withCredentials" in a
		})
	})(f.ajaxSettings.xhr());
	f.support.ajax && f.ajaxTransport(function(e) {
		if (!e.crossDomain || f.support.cors) {
			var c;
			return {
				send: function(d, k) {
					var h = e.xhr(),
					g,
					l;
					e.username ? h.open(e.type, e.url, e.async, e.username, e.password) : h.open(e.type, e.url, e.async);
					if (e.xhrFields) for (l in e.xhrFields) h[l] = e.xhrFields[l];
					e.mimeType && h.overrideMimeType && h.overrideMimeType(e.mimeType); ! e.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (l in d) h.setRequestHeader(l, d[l])
					} catch(m) {}
					h.send(e.hasContent && e.data || null);
					c = function(a, d) {
						var l, m, u, n, p;
						try {
							if (c && (d || 4 === h.readyState)) if (c = b, g && (h.onreadystatechange = f.noop, qa && delete W[g]), d) 4 !== h.readyState && h.abort();
							else {
								l = h.status;
								u = h.getAllResponseHeaders();
								n = {};
								if ((p = h.responseXML) && p.documentElement) n.xml = p;
								n.text = h.responseText;
								try {
									m = h.statusText
								} catch(q) {
									m = ""
								} ! l && e.isLocal && !e.crossDomain ? l = n.text ? 200 : 404 : 1223 === l && (l = 204)
							}
						} catch(r) {
							d || k( - 1, r)
						}
						n && k(l, m, n, u)
					}; ! e.async || 4 === h.readyState ? c() : (g = ++Eb, qa && (W || (W = {},
					f(a).unload(qa)), W[g] = c), h.onreadystatechange = c)
				},
				abort: function() {
					c && c(0, 1)
				}
			}
		}
	});
	var ja = {},
	J, U, Fb = /^(?:toggle|show|hide)$/,
	Gb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	fa, sa = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
	ba;
	f.fn.extend({
		show: function(a, b, c) {
			if (a || 0 === a) return this.animate(F("show", 3), a, b, c);
			for (var c = 0,
			d = this.length; c < d; c++) a = this[c],
			a.style && (b = a.style.display, !f._data(a, "olddisplay") && "none" === b && (b = a.style.display = ""), "" === b && "none" === f.css(a, "display") && f._data(a, "olddisplay", N(a.nodeName)));
			for (c = 0; c < d; c++) if (a = this[c], a.style && (b = a.style.display, "" === b || "none" === b)) a.style.display = f._data(a, "olddisplay") || "";
			return this
		},
		hide: function(a, b, c) {
			if (a || 0 === a) return this.animate(F("hide", 3), a, b, c);
			a = 0;
			for (b = this.length; a < b; a++) this[a].style && (c = f.css(this[a], "display"), "none" !== c && !f._data(this[a], "olddisplay") && f._data(this[a], "olddisplay", c));
			for (a = 0; a < b; a++) this[a].style && (this[a].style.display = "none");
			return this
		},
		_toggle: f.fn.toggle,
		toggle: function(a, b, c) {
			var d = "boolean" === typeof a;
			f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
				var b = d ? a: f(this).is(":hidden");
				f(this)[b ? "show": "hide"]()
			}) : this.animate(F("toggle", 3), a, b, c);
			return this
		},
		fadeTo: function(a, b, c, f) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			},
			a, c, f)
		},
		animate: function(a, b, c, d) {
			var k = f.speed(b, c, d);
			if (f.isEmptyObject(a)) return this.each(k.complete, [!1]);
			a = f.extend({},
			a);
			return this[!1 === k.queue ? "each": "queue"](function() { ! 1 === k.queue && f._mark(this);
				var b = f.extend({},
				k),
				c = 1 === this.nodeType,
				d = c && f(this).is(":hidden"),
				h,
				g,
				l,
				m,
				u;
				b.animatedProperties = {};
				for (l in a) {
					h = f.camelCase(l);
					l !== h && (a[h] = a[l], delete a[l]);
					g = a[h];
					f.isArray(g) ? (b.animatedProperties[h] = g[1], g = a[h] = g[0]) : b.animatedProperties[h] = b.specialEasing && b.specialEasing[h] || b.easing || "swing";
					if ("hide" === g && d || "show" === g && !d) return b.complete.call(this);
					if (c && ("height" === h || "width" === h)) b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
					"inline" === f.css(this, "display") && "none" === f.css(this, "float") && (f.support.inlineBlockNeedsLayout ? (g = N(this.nodeName), "inline" === g ? this.style.display = "inline-block": (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block")
				}
				null != b.overflow && (this.style.overflow = "hidden");
				for (l in a) if (c = new f.fx(this, b, l), g = a[l], Fb.test(g)) c["toggle" === g ? d ? "show": "hide": g]();
				else h = Gb.exec(g),
				m = c.cur(),
				h ? (g = parseFloat(h[2]), u = h[3] || (f.cssNumber[l] ? "": "px"), "px" !== u && (f.style(this, l, (g || 1) + u), m *= (g || 1) / c.cur(), f.style(this, l, m + u)), h[1] && (g = ("-=" === h[1] ? -1 : 1) * g + m), c.custom(m, g, u)) : c.custom(m, g, "");
				return ! 0
			})
		},
		stop: function(a, b) {
			a && this.queue([]);
			this.each(function() {
				var a = f.timers,
				e = a.length;
				for (b || f._unmark(!0, this); e--;) if (a[e].elem === this) {
					if (b) a[e](!0);
					a.splice(e, 1)
				}
			});
			b || this.dequeue();
			return this
		}
	});
	f.each({
		slideDown: F("show", 1),
		slideUp: F("hide", 1),
		slideToggle: F("toggle", 1),
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
	function(a, b) {
		f.fn[a] = function(a, e, c) {
			return this.animate(b, a, e, c)
		}
	});
	f.extend({
		speed: function(a, b, c) {
			var d = a && "object" === typeof a ? f.extend({},
			a) : {
				complete: c || !c && b || f.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !f.isFunction(b) && b
			};
			d.duration = f.fx.off ? 0 : "number" === typeof d.duration ? d.duration: d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
			d.old = d.complete;
			d.complete = function(a) {
				f.isFunction(d.old) && d.old.call(this); ! 1 !== d.queue ? f.dequeue(this) : !1 !== a && f._unmark(this)
			};
			return d
		},
		easing: {
			linear: function(a, b, c, f) {
				return c + f * a
			},
			swing: function(a, b, c, f) {
				return ( - Math.cos(a * Math.PI) / 2 + 0.5) * f + c
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b;
			this.elem = a;
			this.prop = c;
			b.orig = b.orig || {}
		}
	});
	f.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this); (f.fx.step[this.prop] || f.fx.step._default)(this)
		},
		cur: function() {
			if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
			var a, b = f.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? !b || "auto" === b ? 0 : b: a
		},
		custom: function(a, b, c) {
			function d(a) {
				return k.step(a)
			}
			var k = this,
			h = f.fx;
			this.startTime = ba || I();
			this.start = a;
			this.end = b;
			this.unit = c || this.unit || (f.cssNumber[this.prop] ? "": "px");
			this.now = this.start;
			this.pos = this.state = 0;
			d.elem = this.elem;
			d() && f.timers.push(d) && !fa && (fa = setInterval(h.tick, h.interval))
		},
		show: function() {
			this.options.orig[this.prop] = f.style(this.elem, this.prop);
			this.options.show = !0;
			this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
			f(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = f.style(this.elem, this.prop);
			this.options.hide = !0;
			this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b = ba || I(),
			c = !0,
			d = this.elem,
			k = this.options,
			h;
			if (a || b >= k.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				k.animatedProperties[this.prop] = !0;
				for (h in k.animatedProperties) ! 0 !== k.animatedProperties[h] && (c = !1);
				if (c) {
					null != k.overflow && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"],
					function(a, b) {
						d.style["overflow" + b] = k.overflow[a]
					});
					k.hide && f(d).hide();
					if (k.hide || k.show) for (var g in k.animatedProperties) f.style(d, g, k.orig[g]);
					k.complete.call(d)
				}
				return ! 1
			}
			Infinity == k.duration ? this.now = b: (a = b - this.startTime, this.state = a / k.duration, this.pos = f.easing[k.animatedProperties[this.prop]](this.state, a, 0, 1, k.duration), this.now = this.start + (this.end - this.start) * this.pos);
			this.update();
			return ! 0
		}
	};
	f.extend(f.fx, {
		tick: function() {
			for (var a = f.timers,
			b = 0; b < a.length; ++b) a[b]() || a.splice(b--, 1);
			a.length || f.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(fa);
			fa = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				f.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit: a.elem[a.prop] = a.now
			}
		}
	});
	f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
		return f.grep(f.timers,
		function(b) {
			return a === b.elem
		}).length
	});
	var Hb = /^t(?:able|d|h)$/i,
	Oa = /^(?:body|html)$/i;
	f.fn.offset = "getBoundingClientRect" in w.documentElement ?
	function(a) {
		var b = this[0],
		c;
		if (a) return this.each(function(b) {
			f.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
		try {
			c = b.getBoundingClientRect()
		} catch(d) {}
		var k = b.ownerDocument,
		h = k.documentElement;
		if (!c || !f.contains(h, b)) return c ? {
			top: c.top,
			left: c.left
		}: {
			top: 0,
			left: 0
		};
		b = k.body;
		k = P(k);
		return {
			top: c.top + (k.pageYOffset || f.support.boxModel && h.scrollTop || b.scrollTop) - (h.clientTop || b.clientTop || 0),
			left: c.left + (k.pageXOffset || f.support.boxModel && h.scrollLeft || b.scrollLeft) - (h.clientLeft || b.clientLeft || 0)
		}
	}: function(a) {
		var b = this[0];
		if (a) return this.each(function(b) {
			f.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
		f.offset.initialize();
		var c, d = b.offsetParent,
		k = b.ownerDocument,
		h = k.documentElement,
		g = k.body;
		c = (k = k.defaultView) ? k.getComputedStyle(b, null) : b.currentStyle;
		for (var l = b.offsetTop,
		m = b.offsetLeft; (b = b.parentNode) && b !== g && b !== h && !(f.offset.supportsFixedPosition && "fixed" === c.position);) {
			c = k ? k.getComputedStyle(b, null) : b.currentStyle;
			l -= b.scrollTop;
			m -= b.scrollLeft;
			if (b === d) {
				l += b.offsetTop;
				m += b.offsetLeft;
				if (f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !Hb.test(b.nodeName))) l += parseFloat(c.borderTopWidth) || 0,
				m += parseFloat(c.borderLeftWidth) || 0;
				d = b.offsetParent
			}
			f.offset.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0)
		}
		if ("relative" === c.position || "static" === c.position) l += g.offsetTop,
		m += g.offsetLeft;
		f.offset.supportsFixedPosition && "fixed" === c.position && (l += Math.max(h.scrollTop, g.scrollTop), m += Math.max(h.scrollLeft, g.scrollLeft));
		return {
			top: l,
			left: m
		}
	};
	f.offset = {
		initialize: function() {
			var a = w.body,
			b = w.createElement("div"),
			c,
			d,
			k,
			h = parseFloat(f.css(a, "marginTop")) || 0;
			f.extend(b.style, {
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			});
			b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			a.insertBefore(b, a.firstChild);
			c = b.firstChild;
			d = c.firstChild;
			k = c.nextSibling.firstChild.firstChild;
			this.doesNotAddBorder = 5 !== d.offsetTop;
			this.doesAddBorderForTableAndCells = 5 === k.offsetTop;
			d.style.position = "fixed";
			d.style.top = "20px";
			this.supportsFixedPosition = 20 === d.offsetTop || 15 === d.offsetTop;
			d.style.position = d.style.top = "";
			c.style.overflow = "hidden";
			c.style.position = "relative";
			this.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop;
			this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== h;
			a.removeChild(b);
			f.offset.initialize = f.noop
		},
		bodyOffset: function(a) {
			var b = a.offsetTop,
			c = a.offsetLeft;
			f.offset.initialize();
			f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
			return {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = f.css(a, "position");
			"static" === d && (a.style.position = "relative");
			var k = f(a),
			h = k.offset(),
			g = f.css(a, "top"),
			l = f.css(a, "left"),
			m = {},
			u = {}; ("absolute" === d || "fixed" === d) && -1 < f.inArray("auto", [g, l]) ? (u = k.position(), d = u.top, l = u.left) : (d = parseFloat(g) || 0, l = parseFloat(l) || 0);
			f.isFunction(b) && (b = b.call(a, c, h));
			null != b.top && (m.top = b.top - h.top + d);
			null != b.left && (m.left = b.left - h.left + l);
			"using" in b ? b.using.call(a, m) : k.css(m)
		}
	};
	f.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
			b = this.offsetParent(),
			c = this.offset(),
			d = Oa.test(b[0].nodeName) ? {
				top: 0,
				left: 0
			}: b.offset();
			c.top -= parseFloat(f.css(a, "marginTop")) || 0;
			c.left -= parseFloat(f.css(a, "marginLeft")) || 0;
			d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0;
			d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
			return {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || w.body; a && !Oa.test(a.nodeName) && "static" === f.css(a, "position");) a = a.offsetParent;
				return a
			})
		}
	});
	f.each(["Left", "Top"],
	function(a, c) {
		var d = "scroll" + c;
		f.fn[d] = function(c) {
			var k, h;
			return c === b ? (k = this[0], !k ? null: (h = P(k)) ? "pageXOffset" in h ? h[a ? "pageYOffset": "pageXOffset"] : f.support.boxModel && h.document.documentElement[d] || h.document.body[d] : k[d]) : this.each(function() { (h = P(this)) ? h.scrollTo(!a ? c: f(h).scrollLeft(), a ? c: f(h).scrollTop()) : this[d] = c
			})
		}
	});
	f.each(["Height", "Width"],
	function(a, c) {
		var d = c.toLowerCase();
		f.fn["inner" + c] = function() {
			var a = this[0];
			return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
		};
		f.fn["outer" + c] = function(a) {
			var b = this[0];
			return b && b.style ? parseFloat(f.css(b, d, a ? "margin": "border")) : null
		};
		f.fn[d] = function(a) {
			var e = this[0];
			if (!e) return null == a ? null: this;
			if (f.isFunction(a)) return this.each(function(b) {
				var c = f(this);
				c[d](a.call(this, b, c[d]()))
			});
			if (f.isWindow(e)) {
				var k = e.document.documentElement["client" + c],
				h = e.document.body;
				return "CSS1Compat" === e.document.compatMode && k || h && h["client" + c] || k
			}
			return 9 === e.nodeType ? Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]) : a === b ? (e = f.css(e, d), k = parseFloat(e), f.isNaN(k) ? e: k) : this.css(d, "string" === typeof a ? a: a + "px")
		}
	});
	a.jQuery = a.$ = f
})(window); (function(a, b) {
	function c(b, c) {
		var d, m;
		d = b.nodeName.toLowerCase();
		if ("area" === d) {
			d = b.parentNode;
			m = d.name;
			if (!b.href || !m || "map" !== d.nodeName.toLowerCase()) return ! 1;
			d = a("img[usemap=#" + m + "]")[0];
			return !! d && g(d)
		}
		return (/input|select|textarea|button|object/.test(d) ? !b.disabled: "a" === d ? b.href || c: c) && g(b)
	}
	function g(b) {
		return ! a(b).parents().andSelf().filter(function() {
			return "hidden" === a.css(this, "visibility") || a.expr.filters.hidden(this)
		}).length
	}
	var d = 0,
	m = /^ui-id-\d+$/;
	a.ui = a.ui || {};
	a.ui.version || (a.extend(a.ui, {
		version: "20130409",
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
		focus: function(b, c) {
			return "number" === typeof b ? this.each(function() {
				var d = this;
				setTimeout(function() {
					a(d).focus();
					c && c.call(d)
				},
				b)
			}) : this._focus.apply(this, arguments)
		},
		scrollParent: function() {
			var b;
			b = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
				return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function() {
				return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
			}).eq(0);
			return /fixed/.test(this.css("position")) || !b.length ? a(document) : b
		},
		zIndex: function(c) {
			if (c !== b) return this.css("zIndex", c);
			if (this.length) for (var c = a(this[0]), d; c.length && c[0] !== document;) {
				d = c.css("position");
				if ("absolute" === d || "relative" === d || "fixed" === d) if (d = parseInt(c.css("zIndex"), 10), !isNaN(d) && 0 !== d) return d;
				c = c.parent()
			}
			return 0
		},
		uniqueId: function() {
			return this.each(function() {
				this.id || (this.id = "ui-id-" + ++d)
			})
		},
		removeUniqueId: function() {
			return this.each(function() {
				m.test(this.id) && a(this).removeAttr("id")
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
	function(c, d) {
		function g(b, c, d, h) {
			a.each(m,
			function() {
				c -= parseFloat(a.css(b, "padding" + this)) || 0;
				d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0);
				h && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
			});
			return c
		}
		var m = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
		v = d.toLowerCase(),
		p = {
			innerWidth: a.fn.innerWidth,
			innerHeight: a.fn.innerHeight,
			outerWidth: a.fn.outerWidth,
			outerHeight: a.fn.outerHeight
		};
		a.fn["inner" + d] = function(c) {
			return c === b ? p["inner" + d].call(this) : this.each(function() {
				a(this).css(v, g(this, c) + "px")
			})
		};
		a.fn["outer" + d] = function(b, c) {
			return "number" !== typeof b ? p["outer" + d].call(this, b) : this.each(function() {
				a(this).css(v, g(this, b, !0, c) + "px")
			})
		}
	}), a.extend(a.expr[":"], {
		data: function(b, c, d) {
			return !! a.data(b, d[3])
		},
		focusable: function(b) {
			return c(b, !isNaN(a.attr(b, "tabindex")))
		},
		tabbable: function(b) {
			var d = a.attr(b, "tabindex"),
			g = isNaN(d);
			return (g || 0 <= d) && c(b, !g)
		}
	}), a(function() {
		var b = document.body,
		c = b.appendChild(c = document.createElement("div"));
		c.offsetHeight;
		a.extend(c.style, {
			minHeight: "100px",
			height: "auto",
			padding: 0,
			borderWidth: 0
		});
		a.support.minHeight = 100 === c.offsetHeight;
		a.support.selectstart = "onselectstart" in c;
		b.removeChild(c).style.display = "none"
	}), a.extend(a.ui, {
		plugin: {
			add: function(b, c, d) {
				var g, b = a.ui[b].prototype;
				for (g in d) b.plugins[g] = b.plugins[g] || [],
				b.plugins[g].push([c, d[g]])
			},
			call: function(a, b, c) {
				var d = a.plugins[b];
				if (d && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (b = 0; b < d.length; b++) a.options[d[b][0]] && d[b][1].apply(a.element, c)
			}
		},
		contains: a.contains,
		hasScroll: function(b, c) {
			if ("hidden" === a(b).css("overflow")) return ! 1;
			var d = c && "left" === c ? "scrollLeft": "scrollTop",
			g = !1;
			if (0 < b[d]) return ! 0;
			b[d] = 1;
			g = 0 < b[d];
			b[d] = 0;
			return g
		},
		isOverAxis: function(a, b, c) {
			return a > b && a < b + c
		},
		isOver: function(b, c, d, g, m, p) {
			return a.ui.isOverAxis(b, d, m) && a.ui.isOverAxis(c, g, p)
		}
	}))
})(jQuery); (function(a, b) {
	var c = 0,
	g = Array.prototype.slice,
	d = a.cleanData;
	a.cleanData = function(b) {
		for (var c = 0,
		g; null != (g = b[c]); c++) try {
			a(g).triggerHandler("remove")
		} catch(n) {}
		d(b)
	};
	a.widget = function(b, c, d) {
		var g, r, v, p, z = b.split(".")[0],
		b = b.split(".")[1];
		g = z + "-" + b;
		d || (d = c, c = a.Widget);
		a.expr[":"][g] = function(b) {
			return !! a.data(b, g)
		};
		a[z] = a[z] || {};
		r = a[z][b];
		v = a[z][b] = function(a, b) {
			if (!this._createWidget) return new v(a, b);
			arguments.length && this._createWidget(a, b)
		};
		a.extend(v, r, {
			version: d.version,
			_proto: a.extend({},
			d),
			_childConstructors: []
		});
		p = new c;
		p.options = a.widget.extend({},
		p.options);
		a.each(d,
		function(b, g) {
			a.isFunction(g) && (d[b] = function() {
				var a = function() {
					return c.prototype[b].apply(this, arguments)
				},
				d = function(a) {
					return c.prototype[b].apply(this, a)
				};
				return function() {
					var b = this._super,
					c = this._superApply,
					k;
					this._super = a;
					this._superApply = d;
					k = g.apply(this, arguments);
					this._super = b;
					this._superApply = c;
					return k
				}
			} ())
		});
		v.prototype = a.widget.extend(p, {
			widgetEventPrefix: b
		},
		d, {
			constructor: v,
			namespace: z,
			widgetName: b,
			widgetBaseClass: g,
			widgetFullName: g
		});
		r ? (a.each(r._childConstructors,
		function(b, c) {
			var d = c.prototype;
			a.widget(d.namespace + "." + d.widgetName, v, c._proto)
		}), delete r._childConstructors) : c._childConstructors.push(v);
		a.widget.bridge(b, v)
	};
	a.widget.extend = function(c) {
		for (var d = g.call(arguments, 1), l = 0, n = d.length, r, v; l < n; l++) for (r in d[l]) v = d[l][r],
		d[l].hasOwnProperty(r) && v !== b && (c[r] = a.isPlainObject(v) ? a.widget.extend({},
		c[r], v) : v);
		return c
	};
	a.widget.bridge = function(c, d) {
		var l = d.prototype.widgetFullName;
		a.fn[c] = function(n) {
			var r = "string" === typeof n,
			v = g.call(arguments, 1),
			p = this,
			n = !r && v.length ? a.widget.extend.apply(null, [n].concat(v)) : n;
			r ? this.each(function() {
				var d, h = a.data(this, l);
				if (!h) return a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + n + "'");
				if (!a.isFunction(h[n]) || "_" === n.charAt(0)) return a.error("no such method '" + n + "' for " + c + " widget instance");
				d = h[n].apply(h, v);
				if (d !== h && d !== b) return p = d && d.jquery ? p.pushStack(d.get()) : d,
				!1
			}) : this.each(function() {
				var b = a.data(this, l);
				b ? b.option(n || {})._init() : new d(n, this)
			});
			return p
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
		_createWidget: function(b, d) {
			d = a(d || this.defaultElement || this)[0];
			this.element = a(d);
			this.uuid = c++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
			this.options = a.widget.extend({},
			this.options, this._getCreateOptions(), b);
			this.bindings = a();
			this.hoverable = a();
			this.focusable = a();
			d !== this && (a.data(d, this.widgetName, this), a.data(d, this.widgetFullName, this), this._on({
				remove: "destroy"
			}), this.document = a(d.style ? d.ownerDocument: d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
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
		option: function(c, d) {
			var g = c,
			n, r, v;
			if (0 === arguments.length) return a.widget.extend({},
			this.options);
			if ("string" === typeof c) if (g = {},
			n = c.split("."), c = n.shift(), n.length) {
				r = g[c] = a.widget.extend({},
				this.options[c]);
				for (v = 0; v < n.length - 1; v++) r[n[v]] = r[n[v]] || {},
				r = r[n[v]];
				c = n.pop();
				if (d === b) return r[c] === b ? null: r[c];
				r[c] = d
			} else {
				if (d === b) return this.options[c] === b ? null: this.options[c];
				g[c] = d
			}
			this._setOptions(g);
			return this
		},
		_setOptions: function(a) {
			for (var b in a) this._setOption(b, a[b]);
			return this
		},
		_setOption: function(a, b) {
			this.options[a] = b;
			"disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
			return this
		},
		enable: function() {
			return this._setOption("disabled", !1)
		},
		disable: function() {
			return this._setOption("disabled", !0)
		},
		_on: function(b, c) {
			c ? (b = a(b), this.bindings = this.bindings.add(b)) : (c = b, b = this.element);
			var d = this;
			a.each(c,
			function(c, h) {
				function g() {
					return ! 0 === d.options.disabled || a(this).hasClass("ui-state-disabled") ? void 0 : ("string" === typeof h ? d[h] : h).apply(d, arguments)
				}
				"string" !== typeof h && (g.guid = h.guid = h.guid || g.guid || a.guid++);
				var p = c.match(/^(\w+)\s*(.*)$/),
				z = p[1] + d.eventNamespace; (p = p[2]) ? d.widget().delegate(p, z, g) : b.bind(z, g)
			})
		},
		_off: function(a, b) {
			b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
			a.unbind(b).undelegate(b)
		},
		_delay: function(a, b) {
			var c = this;
			return setTimeout(function() {
				return ("string" === typeof a ? c[a] : a).apply(c, arguments)
			},
			b || 0)
		},
		_hoverable: function(b) {
			this.hoverable = this.hoverable.add(b);
			this._on(b, {
				mouseenter: function(b) {
					a(b.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(b) {
					a(b.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(b) {
			this.focusable = this.focusable.add(b);
			this._on(b, {
				focusin: function(b) {
					a(b.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(b) {
					a(b.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(b, c, d) {
			var g, r = this.options[b],
			d = d || {},
			c = a.Event(c);
			c.type = (b === this.widgetEventPrefix ? b: this.widgetEventPrefix + b).toLowerCase();
			c.target = this.element[0];
			if (b = c.originalEvent) for (g in b) g in c || (c[g] = b[g]);
			this.element.trigger(c, d);
			return ! (a.isFunction(r) && !1 === r.apply(this.element[0], [c].concat(d)) || c.isDefaultPrevented())
		}
	};
	a.each({
		show: "fadeIn",
		hide: "fadeOut"
	},
	function(b, c) {
		a.Widget.prototype["_" + b] = function(d, g, r) {
			"string" === typeof g && (g = {
				effect: g
			});
			var v, p = !g ? b: !0 === g || "number" === typeof g ? c: g.effect || c,
			g = g || {};
			"number" === typeof g && (g = {
				duration: g
			});
			v = !a.isEmptyObject(g);
			g.complete = r;
			g.delay && d.delay(g.delay);
			if (v && a.effects && (a.effects.effect[p] || !1 !== a.uiBackCompat && a.effects[p])) d[b](g);
			else if (p !== b && d[p]) d[p](g.duration, g.easing, r);
			else d.queue(function(c) {
				a(this)[b]();
				r && r.call(d[0]);
				c()
			})
		}
	}); ! 1 !== a.uiBackCompat && (a.Widget.prototype._getCreateOptions = function() {
		return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
	})
})(jQuery);~
function() {
	function a(b) {
		for (var c = [], g = b.length - 1; 0 <= g; g--) {
			var h = b[g];
			if ("string" === typeof h) if (d[h]) {
				var l = d[h].rely;
				c.push(h);
				l && (c = c.concat(a(l)))
			} else "undefined" != typeof console && console.log("Please check your model name:" + h);
			else "function" === typeof h && c.push(h)
		}
		return c
	}
	function b(a) {
		var b = this;
		this.stackline = a;
		this.current = this.stackline[0];
		this.bag = {
			returns: [],
			complete: !1
		};
		this.start = function() {
			"function" != typeof b.current && d[b.current] ? r(d[b.current].path, d[b.current].type, d[b.current].charset, b.next) : r("bingo", b.current, b.next, b)
		};
		this.next = function() {
			1 == b.stackline.length || 1 > b.stackline.length ? b.bag.complete = !0 : (b.stackline.shift(), b.current = b.stackline[0], b.start())
		}
	}
	function c(a, b) {
		var c = !1,
		d = !0,
		g = a.document,
		h = g.documentElement,
		l = g.addEventListener ? "addEventListener": "attachEvent",
		m = g.addEventListener ? "removeEventListener": "detachEvent",
		k = g.addEventListener ? "": "on",
		u = function(d) {
			if (! ("readystatechange" == d.type && "complete" != g.readyState) && (("load" == d.type ? a: g)[m](k + d.type, u, !1), !c && (c = !0))) b.call(a, d.type || d)
		},
		n = function() {
			try {
				h.doScroll("left")
			} catch(a) {
				setTimeout(n, 50);
				return
			}
			u("poll")
		};
		if ("complete" == g.readyState) b.call(a, "lazy");
		else {
			if (g.createEventObject && h.doScroll) {
				try {
					d = !a.frameElement
				} catch(r) {}
				d && n()
			}
			g[l](k + "DOMContentLoaded", u, !1);
			g[l](k + "readystatechange", u, !1);
			a[l](k + "load", u, !1)
		}
	}
	var g = document.head || document.getElementsByTagName("head")[0],
	d = {},
	m = {},
	h = {},
	l = {},
	n,
	r = function(a, b, c, d) {
		if ("string" === typeof a && "bingo" === a) b && d.bag.returns.push(b()),
		c && c();
		else if (h[a]) d && setTimeout(function() {
			r(a, b, c, d)
		},
		1);
		else if (m[a]) d && d();
		else {
			h[a] = !0;
			var l, n = b || a.toLowerCase().substring(a.lastIndexOf(".") + 1);
			if ("js" === n) l = document.createElement("script"),
			l.type = "text/javascript",
			c && (l.charset = c),
			l.src = a,
			l.async = "true";
			else if ("css" === n) {
				l = document.createElement("link");
				l.type = "text/css";
				c && (l.charset = c);
				l.rel = "stylesheet";
				l.href = a;
				m[a] = !0;
				h[a] = !1;
				g.appendChild(l);
				d && d();
				return
			}
			l.onload = l.onreadystatechange = function() {
				if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) h[a] = !1,
				m[a] = !0,
				d && d(),
				l.onload = l.onreadystatechange = null
			};
			g.appendChild(l)
		}
	},
	v = function(a, b) {
		a && b && b.path && (d[a] = b)
	};
	n = function() {
		var c = [].slice.call(arguments);
		l.core && l.autoload && !m[l] && (v("__core", {
			path: l.core
		}), c = ["__core"].concat(c));
		c = a(c).reverse();
		c = new b(c);
		c.start();
		return c.bag
	};~
	function() {
		var a = document.getElementsByTagName("script")[0],
		b = a.getAttribute("autoload"),
		a = a.getAttribute("core");
		"true" === b && a && (l.autoload = b, l.core = a);
		l.autoload && l.core && n()
	} ();
	n.exe = n;
	n.load = r;
	n.add = v;
	n.ready = function() {
		var a = arguments;
		c(window,
		function() {
			n.apply(this, a)
		})
	};
	n.watch = function(a, b, c) {
		a.watch ? a.watch(b,
		function(a, b, d) {
			c(a, b, d);
			return d
		}) : (a.__proto__ = a.__proto__ || {},
		a.__proto__.watch = function() {
			var d = this;
			d.oldValue = a[b];
			getter = function() {
				return d.oldValue
			};
			setter = function(g) {
				var h = d.oldValue;
				d.oldValue = g;
				return c.call(a, b, h, g)
			};
			Object.defineProperty ? Object.defineProperty && Object.defineProperty(a, b, {
				get: getter,
				set: setter
			}) : Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__ ? (Object.prototype.__defineGetter__.call(a, b, getter), Object.prototype.__defineSetter__.call(a, b, setter)) : a.__intervalStamp = setInterval(function() {
				var g = d.oldValue;
				return function() {
					var d = a[b];
					g != d && (c.call(a, b, g, d), g = d)
				}
			} (), 100)
		} ())
	};
	n.unwatch = function(a, b) {
		if (a.unwatch) a.unwatch(b);
		else {
			var c = a[b];
			delete a[b];
			a[b] = c;
			a.__intervalStamp && clearInterval(a.__intervalStamp)
		}
	};
	this.In = n
} ();
var TY = {}; (function() {
	TY = jQuery.noConflict();
	TY.extend(TY, {
		version: "1.0",
		debug: "qing",
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
	b = null,
	c, g, d;
	if (!0 == a[a.length - 1]) for (c = 0; c < a.length - 1; ++c) {
		d = a[c].split(".");
		b = TY;
		for (g = "TY" == d[0] ? 1 : 0; g < d.length; ++g) b[d[g]] = b[d[g]] || {},
		b = b[d[g]]
	} else for (c = 0; c < a.length; ++c) {
		d = a[c].split(".");
		b = TY;
		for (g = "TY" == d[0] ? 1 : 0; g < d.length; ++g) b[d[g]] = b[d[g]] || {},
		b = b[d[g]]
	}
	return b
};
TY.extend(TY, {
	ns: function(a, b) {
		for (var c = a.split("."), g = window, d = 0; d < c.length; d++) g[c[d]] || (g[c[d]] = d != c.length - 1 || !b ? {}: b),
		g = g[c[d]];
		return g
	}
});
TY.namespace("module");
TY.extend(TY.module, In);
TY.module.add("TY.css", {
	path: TY.isDebuger() + "/resources/css/TY.css?_v=20130409",
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
		for (var a = [], b = this, c = 0, g = arguments.length; c < g; c++)"string" === TY.type(arguments[c]) ? this.isLoadedModule(arguments[c]) || a.push(arguments[c]) : a.push(arguments[c]);
		TY(document).data("TY.core.interface") ? TY.module.exe.apply(this, a) : TY.module.exe.apply(this, ["TY.core.interface",
		function() {
			TY.module.exe.apply(b, a)
		}])
	},
	preload: function(a, b, c, g) {
		a && b && c && (a = a.replace(/\./g, "_"), 1 > TY("#" + a).size() && ("js" === c.toLowerCase() && TY("head").append('<script id="' + a + '" type="text/javascript" src="' + b + '"><\/script>'), "css" === c.toLowerCase() && TY("head").append('<link id="' + a + '"  type="text/css" rel="stylesheet" href="' + b + '"/>'), g && g()))
	},
	isLoadedModule: function(a) {
		var b = TY(document).data("TY.modules"),
		c = !1;
		if (b) for (var b = b.split(","), g = 0, d = b.length; g < d; g++) if (a === b[g]) {
			c = !0;
			break
		}
		return c
	},
	loadedModule: function(a) {
		var b = this.isLoadedModule(a),
		c = TY(document).data("TY.modules");
		c ? (c = c.split(","), b || (c.push(a), TY(document).data("TY.modules", c.join(",")))) : TY(document).data("TY.modules", a)
	}
});
TY.param = TY.param;
TY.extend(TY.param, {
	getParam: function(a, b) {
		for (var c = {},
		g = (b ? b: location.search.substring(1)).split("&"), d = -1, m = 0, h = g.length; m < h; m++) d = g[m].indexOf("="),
		-1 != d && (this.key = g[m].substring(0, d), d = g[m].substring(d + 1), d = decodeURIComponent(d), c[this.key] = d);
		return a ? c[a] : c
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
			var b = RegExp("[&?#]" + a + "=([^#&?]*)", "i"),
			a = b.exec(document.location.search);
			return (b = b.exec(document.location.hash)) ? b[b.length - 1] : a ? a[a.length - 1] : null
		},
		getHash: function(a) {
			return (a || location.href).match("#.*$")[0]
		},
		setHash: function(a, b) {
			var c = location.hash.substr(1),
			g = RegExp("(" + a + "=)([^&]*)"),
			b = b || "",
			c = g.test(c) ? c.replace(g,
			function(a, c) {
				return c + b
			}) : c + (("" == c ? "": "&") + a + "=" + b);
			location.hash = c
		},
		getPath: function(a) {
			var a = a || location.href,
			b;
			return - 1 < (b = a.indexOf("#!")) ? a.substring(b + 2, a.length) : a.replace(this.protocol() + "://" + location.host, "")
		},
		matcher: function(a, b) {
			var c = b ? a: this.protocol() + "://" + location.host,
			g = b || a; - 1 < location.hash.indexOf("#!") && (c = c + location.pathname + "#!");
			return this.matchUrl(location.href, c + g)
		},
		matchUrl: function(a, b) {
			var c = [],
			b = b.replace(/([\^$*+?|-])/g, "\\$1").replace(/{([^}]+)}/g,
			function(a, b) {
				c.push(b);
				return "([^/&#]+)"
			}),
			g = RegExp("^" + b + "/?$");
			if (g.test(a)) {
				for (var g = a.match(g).slice(1, c.length + 1), d = {},
				m = 0; m < g.length; m++) d[c[m]] = g[m];
				return d
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
		else for (var b in a) console.log(b + " : " + a[b]);
		else console.log(a)
	},
	getPropertyCount: function(a) {
		var b, c = 0;
		switch (TY.type(a)) {
		case "object":
			for (b in a) a.hasOwnProperty(b) && c++;
			break;
		case "array":
			c = a.length;
			break;
		default:
			c = a.length
		}
		return c
	},
	replaceTag: function(a, b) {
		return a.replace(/(\<.*?\>)|(\<\/,*?\>)|(\<.*?\/\>)/g, b || "")
	},
	format: function(a, b) {
		if (1 == arguments.length) return function() {
			var b = TY.makeArray(arguments);
			b.unshift(a);
			return TY.validator.format.apply(this, b)
		};
		2 < arguments.length && b.constructor != Array && (b = TY.makeArray(arguments).slice(1));
		b.constructor != Array && (b = [b]);
		TY.each(b,
		function(b, g) {
			a = a.replace(RegExp("\\{" + b + "\\}", "g"), g)
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
	getElRealSize: function(a, b) {
		if (a) {
			var c = {};
			"undefined" == typeof b && (b = !1);
			b ? (c.height = a.height() + (parseFloat(a.css("borderTopWidth")) || 0) + (parseFloat(a.css("borderBottomWidth")) || 0) + (parseFloat(a.css("paddingTop")) || 0) + (parseFloat(a.css("paddingBottom")) || 0) + (parseFloat(a.css("marginTop")) || 0) + (parseFloat(a.css("marginBottom")) || 0), c.width = a.width() + (parseFloat(a.css("paddingLeft")) || 0) + (parseFloat(a.css("paddingRight")) || 0) + (parseFloat(a.css("borderLeftWidth")) || 0) + (parseFloat(a.css("borderRightWidth")) || 0) + (parseFloat(a.css("marginLeft")) || 0) + (parseFloat(a.css("marginRight")) || 0)) : (c.height = a.height() + (parseFloat(a.css("borderTopWidth")) || 0) + (parseFloat(a.css("borderBottomWidth")) || 0) + (parseFloat(a.css("paddingTop")) || 0) + (parseFloat(a.css("paddingBottom")) || 0), c.width = a.width() + (parseFloat(a.css("paddingLeft")) || 0) + (parseFloat(a.css("paddingRight")) || 0) + (parseFloat(a.css("borderLeftWidth")) || 0) + (parseFloat(a.css("borderRightWidth")) || 0));
			return c
		}
		return null
	},
	getResourcePath: function(a) {
		function b(a, b) {
			var c, g, n = "";
			if ("js" === a) {
				c = document.getElementsByTagName("script");
				for (var r = 0,
				v = c.length; r < v; r++) if (g = c[r].src, "text/javascript" == c[r].type.toLowerCase() && RegExp(b, "gi").test(g)) {
					n = g.slice(0, g.lastIndexOf("/"));
					break
				}
			} else {
				c = document.getElementsByTagName("link");
				r = 0;
				for (v = c.length; r < v; r++) if (g = c[r].href, "text/css" == c[r].type.toLowerCase() && RegExp(b, "gi").test(g)) {
					n = g.slice(0, g.lastIndexOf("/"));
					break
				}
			}
			return n
		}
		var c = /\.css/gi,
		g = /\.js/gi;
		if (a) if ("string" === TY.type(a)) {
			a = a.toLowerCase();
			if (c.test(a)) return b("css", a);
			if (g.test(a)) return b("js", a)
		} else TY.util.console("传入的name类型错误，请传入string类型的参数。");
		else TY.util.console("未传入name")
	},
	scopeProxy: function(a, b) {
		return function() {
			return a.apply(b, arguments)
		}
	},
	getSelectTxt: function() {
		var a = "",
		a = document.selection ? document.selection.createRange().text: document.getSelection();
		return a.toString()
	},
	tmplFormat: function(a, b) {
		return a.replace(/{(.*?)}/igm,
		function(a, g) {
			return b[g] ? b[g] : a
		})
	}
});
TY.extend(!0, {
	util: {
		DateFormatter: {
			ts2TDate: function(a, b) {
				var c = new Date( + a),
				g = c.getFullYear(),
				d = (c.getMonth() + 1).toString().leftFix("0", 2),
				m = c.getDate().toString().leftFix("0", 2),
				h = [c.getHours().toString().leftFix("0", 2), ":", c.getMinutes().toString().leftFix("0", 2)].join(""),
				l = new Date,
				n = l.getFullYear(),
				r = l.getMonth(),
				v = l.getDate(),
				l = [];
				c.setHours(0);
				c.setMinutes(0);
				c.setSeconds(0);
				c = (new Date(n, r, v)).getTime() - c;
				0 >= c ? (l.push("今天"), l.push(h)) : 864E5 == c ? (l.push("昨天"), l.push(h)) : 1728E5 == c ? (l.push("前天"), l.push(h)) : (g == n ? l.push([d, "月", m, "日"].join("")) : l.push([g, "年", d, "月" + m, "日"].join("")), b && l.push(h));
				return l.join("")
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
			b = null,
			c = this,
			g = null;
			if ("object" == typeof a[0]) {
				try {
					g = frames[a[0].name],
					b = frames[a[0].name] && frames[a[0].name].jQuery,
					"undefined" != typeof a[0].charset && (document.charset = a[0].charset)
				} catch(d) {
					TY.util.console({
						title: "取得代理",
						msg: d
					})
				}
				if (b) {
					TY.util.console({
						title: "取得代理",
						msg: "成功"
					});
					var m = jQuery.makeArray(a),
					m = m.slice(2);
					b[a[1]].apply(b, m)
				} else g || jQuery("body").append('<iframe src="' + a[0].path + '" name="' + a[0].name + '" style="display:none"></iframe>'),
				this.tryTimes++<this.tryMaxTimes && setTimeout(function() {
					a.callee.apply(c, a)
				},
				500)
			}
		} catch(h) {
			TY.util.console({
				title: "代理错误",
				msg: h
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
			for (var b in this.browser) if (this.browser[b]) {
				this.core = b;
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
	leftFix: function(a, b) {
		for (var c = this; c.length < b;) c = a + c;
		return c
	},
	getCNlen: function() {
		for (var a = 0,
		b = 0; b < this.length; b++) a += 128 < this.charCodeAt(b) ? 2 : 1;
		return a
	},
	subStringCn: function(a, b) {
		var c = 0,
		g = this,
		d;
		d = "..";
		b && ("boolean" == TY.type(b) && (a -= 2), "string" == TY.type(b) && (d = b.getCNlen(), a -= d, d = b));
		for (var m = 0; m < g.length; m++) if (c += 128 < g.charCodeAt(m) ? 2 : 1, c > a) {
			g = g.slice(0, m);
			b && (g += d);
			break
		}
		return g.toString()
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
	var b = Object(this),
	c = b.length >>> 0;
	if (0 === c) return - 1;
	var g = 0;
	0 < arguments.length && (g = Number(arguments[1]), g !== g ? g = 0 : 0 !== g && g !== 1 / 0 && g !== -(1 / 0) && (g = (0 < g || -1) * Math.floor(Math.abs(g))));
	if (g >= c) return - 1;
	for (g = 0 <= g ? g: Math.max(c - Math.abs(g), 0); g < c; g++) if (g in b && b[g] === a) return g;
	return - 1
});
Array.prototype.uniq = function() {
	for (var a = {},
	b = this.length,
	c = 0; c < b; c++)"undefined" == typeof a[this[c]] && (a[this[c]] = 1);
	b = this.length = 0;
	for (c in a) this[b++] = c;
	return this
};
Array.prototype.remove = function(a) {
	this.splice(this.indexOf(a), 1)
};
TY.loadedModule("TY.util.livequery");
TY.extend(TY.fn, {
	livequery: function(a, b, c) {
		var g = this,
		d;
		TY.isFunction(a) && (c = b, b = a, a = void 0);
		jQuery.each(jQuery.livequery.queries,
		function(m, h) {
			if (g.selector == h.selector && g.context == h.context && a == h.type && (!b || b.jQuerylqguid == h.fn.jQuerylqguid) && (!c || c.jQuerylqguid == h.fn2.jQuerylqguid)) return (d = h) && !1
		});
		d = d || new jQuery.livequery(this.selector, this.context, a, b, c);
		d.stopped = !1;
		d.run();
		return this
	},
	expire: function(a, b, c) {
		var g = this;
		jQuery.isFunction(a) && (c = b, b = a, a = void 0);
		jQuery.each(jQuery.livequery.queries,
		function(d, m) {
			g.selector == m.selector && g.context == m.context && (!a || a == m.type) && (!b || b.jQuerylqguid == m.fn.jQuerylqguid) && (!c || c.jQuerylqguid == m.fn2.jQuerylqguid) && !this.stopped && jQuery.livequery.stop(m.id)
		});
		return this
	}
}); (function(a) {
	a.livequery = function(b, c, g, d, m) {
		this.selector = b;
		this.context = c;
		this.type = g;
		this.fn = d;
		this.fn2 = m;
		this.elements = [];
		this.stopped = !1;
		this.id = a.livequery.queries.push(this) - 1;
		d.$lqguid = d.$lqguid || a.livequery.guid++;
		m && (m.$lqguid = m.$lqguid || a.livequery.guid++);
		return this
	};
	a.livequery.prototype = {
		stop: function() {
			var a = this;
			this.type ? this.elements.unbind(this.type, this.fn) : this.fn2 && this.elements.each(function(c, g) {
				a.fn2.apply(g)
			});
			this.elements = [];
			this.stopped = !0
		},
		run: function() {
			if (!this.stopped) {
				var b = this,
				c = this.elements,
				g = a(this.selector, this.context),
				d = g.not(c);
				this.elements = g;
				this.type ? (d.bind(this.type, this.fn), 0 < c.length && a.each(c,
				function(c, d) {
					0 > a.inArray(d, g) && a.event.remove(d, b.type, b.fn)
				})) : (d.each(function() {
					b.fn.apply(this)
				}), this.fn2 && 0 < c.length && a.each(c,
				function(c, d) {
					0 > a.inArray(d, g) && b.fn2.apply(d)
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
			if (a.livequery.running && a.livequery.queue.length) for (var b = a.livequery.queue.length; b--;) a.livequery.queries[a.livequery.queue.shift()].run()
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
			function(b, c) {
				if (a.fn[c]) {
					var g = a.fn[c];
					a.fn[c] = function() {
						var b = g.apply(this, arguments);
						a.livequery.run();
						return b
					}
				}
			})
		},
		run: function(b) {
			void 0 != b ? 0 > a.inArray(b, a.livequery.queue) && a.livequery.queue.push(b) : a.each(a.livequery.queries,
			function(b) {
				0 > a.inArray(b, a.livequery.queue) && a.livequery.queue.push(b)
			});
			a.livequery.timeout && clearTimeout(a.livequery.timeout);
			a.livequery.timeout = setTimeout(a.livequery.checkQueue, 20)
		},
		stop: function(b) {
			void 0 != b ? a.livequery.queries[b].stop() : a.each(a.livequery.queries,
			function(b) {
				a.livequery.queries[b].stop()
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
	function b(a) {
		d.lastIndex = 0;
		return d.test(a) ? '"' + a.replace(d,
		function(a) {
			var b = l[a];
			return "string" === typeof b ? b: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
		}) + '"': '"' + a + '"'
	}
	function c(a, d) {
		var g, l, A, y, D = m,
		B, C = d[a];
		C && "object" === typeof C && "function" === typeof C.toJSON && (C = C.toJSON(a));
		"function" === typeof n && (C = n.call(d, a, C));
		switch (typeof C) {
		case "string":
			return b(C);
		case "number":
			return isFinite(C) ? "" + C: "null";
		case "boolean":
		case "null":
			return "" + C;
		case "object":
			if (!C) return "null";
			m += h;
			B = [];
			if ("[object Array]" === Object.prototype.toString.apply(C)) {
				y = C.length;
				for (g = 0; g < y; g += 1) B[g] = c(g, C) || "null";
				A = 0 === B.length ? "[]": m ? "[\n" + m + B.join(",\n" + m) + "\n" + D + "]": "[" + B.join(",") + "]";
				m = D;
				return A
			}
			if (n && "object" === typeof n) {
				y = n.length;
				for (g = 0; g < y; g += 1)"string" === typeof n[g] && (l = n[g], (A = c(l, C)) && B.push(b(l) + (m ? ": ": ":") + A))
			} else for (l in C) Object.prototype.hasOwnProperty.call(C, l) && (A = c(l, C)) && B.push(b(l) + (m ? ": ": ":") + A);
			A = 0 === B.length ? "{}": m ? "{\n" + m + B.join(",\n" + m) + "\n" + D + "}": "{" + B.join(",") + "}";
			m = D;
			return A
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
	} catch(g) {
		throw Error(g);
	}
	var d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	m, h, l = {
		"": "\\b",
		"\t": "\\t",
		"\n": "\\n",
		"": "\\f",
		"\r": "\\r",
		'"': '\\"',
		"\\": "\\\\"
	},
	n;
	"function" !== typeof TY.util.json && (TY.util.json = function(a, b, d) {
		var g;
		h = m = "";
		if ("number" === typeof d) for (g = 0; g < d; g += 1) h += " ";
		else "string" === typeof d && (h = d);
		if ((n = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) throw Error("TY.util.stringify");
		return c("", {
			"": a
		})
	})
})();
TY.loadedModule("TY.util.dateformat");
var dateFormat = function() {
	var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
	b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
	c = /[^-+\dA-Z]/g,
	g = function(a, b) {
		a = "" + a;
		for (b = b || 2; a.length < b;) a = "0" + a;
		return a
	};
	return function(d, m, h) {
		var l = dateFormat;
		1 == arguments.length && "[object String]" == Object.prototype.toString.call(d) && !/\d/.test(d) && (m = d, d = void 0);
		d = d ? new Date(d) : new Date;
		if (isNaN(d)) throw SyntaxError("invalid date");
		m = "" + (l.masks[m] || m || l.masks["default"]);
		"UTC:" == m.slice(0, 4) && (m = m.slice(4), h = !0);
		var n = h ? "getUTC": "get",
		r = d[n + "Date"](),
		v = d[n + "Day"](),
		p = d[n + "Month"](),
		z = d[n + "FullYear"](),
		A = d[n + "Hours"](),
		y = d[n + "Minutes"](),
		D = d[n + "Seconds"](),
		n = d[n + "Milliseconds"](),
		B = h ? 0 : d.getTimezoneOffset(),
		C = {
			d: r,
			dd: g(r),
			ddd: l.i18n.dayNames[v],
			dddd: l.i18n.dayNames[v + 7],
			m: p + 1,
			mm: g(p + 1),
			mmm: l.i18n.monthNames[p],
			mmmm: l.i18n.monthNames[p + 12],
			yy: ("" + z).slice(2),
			yyyy: z,
			h: A % 12 || 12,
			hh: g(A % 12 || 12),
			H: A,
			HH: g(A),
			M: y,
			MM: g(y),
			s: D,
			ss: g(D),
			l: g(n, 3),
			L: g(99 < n ? Math.round(n / 10) : n),
			t: 12 > A ? "a": "p",
			tt: 12 > A ? "am": "pm",
			T: 12 > A ? "A": "P",
			TT: 12 > A ? "AM": "PM",
			Z: h ? "UTC": (("" + d).match(b) || [""]).pop().replace(c, ""),
			o: (0 < B ? "-": "+") + g(100 * Math.floor(Math.abs(B) / 60) + Math.abs(B) % 60, 4),
			S: ["th", "st", "nd", "rd"][3 < r % 10 ? 0 : (10 != r % 100 - r % 10) * r % 10]
		};
		return m.replace(a,
		function(a) {
			return a in C ? C[a] : a.slice(1, a.length - 1)
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
Date.prototype.format = function(a, b) {
	return dateFormat(this, a, b)
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
	set: function(a, b) {
		if (this.isLocalStorage) window.localStorage.setItem(a, TY.util.json(b));
		else if (this.initDom()) try {
			this.dataDom.load(this.hname),
			this.dataDom.setAttribute(a, TY.util.json(b)),
			this.dataDom.save(this.hname)
		} catch(c) {}
	},
	get: function(a) {
		if (this.isLocalStorage) return window.localStorage.getItem(a);
		if (this.initDom()) try {
			return this.dataDom.load(this.hname),
			this.dataDom.getAttribute(a)
		} catch(b) {
			return null
		}
	},
	remove: function(a) {
		if (this.isLocalStorage) localStorage.removeItem(a);
		else if (this.initDom()) try {
			this.dataDom.load(this.hname),
			this.dataDom.removeAttribute(a),
			this.dataDom.save(this.hname)
		} catch(b) {}
	}
};
TY.loadedModule("TY.io.cookie");
jQuery.cookie = function(a, b, c) {
	if (1 < arguments.length && "[object Object]" !== "" + b) {
		c = jQuery.extend({},
		c);
		if (null === b || void 0 === b) c.expires = -1;
		if ("number" === typeof c.expires) {
			var g = c.expires,
			d = c.expires = new Date;
			d.setDate(d.getDate() + g)
		}
		b = "" + b;
		return document.cookie = [encodeURIComponent(a), "=", c.raw ? b: encodeURIComponent(b), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path: "", c.domain ? "; domain=" + c.domain: "", c.secure ? "; secure": ""].join("")
	}
	c = b || {};
	d = c.raw ?
	function(a) {
		return a
	}: decodeURIComponent;
	return (g = RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)").exec(document.cookie)) ? d(g[1]) : null
};
TY.namespace("TY.io.cookie");
TY.io.cookie = TY.io.cookie;
TY.extend(TY.io.cookie, {
	set: function(a, b, c) {
		this.config = {
			expires: 7,
			path: "/",
			domain: "",
			secure: !1
		};
		jQuery.extend(this.config, c);
		jQuery.cookie(a, b, this.config)
	},
	get: function(a) {
		return jQuery.cookie(a)
	},
	del: function(a, b) {
		this.config = {
			path: "/",
			domain: ""
		};
		jQuery.extend(this.config, b);
		jQuery.cookie(a, null, this.config)
	}
});
TY.namespace("view");
TY.loadedModule("TY.view.page");
"undefined" == typeof window.TY.view.page && (TY.view.page = function(a) {
	this.init(a)
}); (function(a) {
	TY.extend(a.prototype, {
		setConfig: function(a) {
			this.id = "TY_view_page_" + (new Date).getTime();
			this.defArgs = {
				preTxt: "上一页",
				nextTxt: "下一页",
				totalTxt: "共",
				recordsTxt: "条记录",
				isShowCount: !0,
				isShowExtra: !0,
				changeList: null,
				page: 1,
				showNum: 10,
				el: null,
				pageTagNum: 5,
				total: 0
			};
			this.args = TY.extend({},
			this.defArgs, a);
			this.pageSize = Math.ceil(this.args.total / this.args.showNum)
		},
		createHtml: function() {
			var a = '<font class="num">{0}' + this.args.total + "{1}</font>";
			this.args.el.empty();
			if (0 < this.args.total) {
				var c = ["<span class='TY_view_page' id='" + this.id + "'>"],
				g = Math.ceil(this.pageSize / this.args.pageTagNum),
				d = 0 == this.pageSize % this.args.pageTagNum ? !0 : !1,
				m = Math.ceil(this.args.page / this.args.pageTagNum),
				h = m * this.args.pageTagNum - this.args.pageTagNum + 1;
				this.args.isShowCount && (a = TY.util.format(a, this.args.totalTxt, this.args.recordsTxt), c.push(a));
				c.push('<a href="#" style="' + (1 < this.args.page ? "": "visibility:hidden") + '" class="previous">' + this.args.preTxt + "</a>");
				if (m >= g) if (this.pageSize < this.args.pageTagNum) {
					a = 0;
					for (d = this.pageSize; a < d; a++) c.push('<a href="#" ' + (h + a == this.args.page ? ' class="on"': "") + ">" + (h + a) + "</a>")
				} else {
					d || (h = this.pageSize - this.args.pageTagNum + 1);
					for (a = 0; a < this.args.pageTagNum; a++) c.push('<a href="#" ' + (h + a == this.args.page ? ' class="on"': "") + ">" + (h + a) + "</a>")
				} else {
					for (1 == m ? this.pageSize < this.args.pageTagNum ? (a = 0, d = this.pageSize) : (a = 0, d = this.args.pageTagNum) : (a = 0, d = this.args.pageTagNum); a < d; a++) c.push('<a href="#" ' + (h + a == this.args.page ? ' class="on"': "") + ">" + (h + a) + "</a>");
					1 == g - m && 1 == this.pageSize % this.args.pageTagNum || c.push('<a class="addOne" href="#">...</a>');
					c.push('<a href="#">' + this.pageSize + "</a>")
				}
				c.push('<a href="#" style="' + (this.args.page == this.pageSize ? "visibility:hidden": "") + '" class="next">' + this.args.nextTxt + "</a>");
				this.args.isShowExtra && (c.push('<span class="num"><input type="text" class="page" value="' + this.args.page + '"/>/' + this.pageSize + "页</span>"), c.push('<a href="javascript:void(0)" class="gopage">GO</a>'));
				c.push("</span>");
				this.args.el.append(c.join(""));
				this.args.el.data("page", this.args.page)
			}
		},
		bindEvent: function() {
			var a = this,
			c = 1,
			g;
			jQuery("a", this.args.el).bind("click",
			function(d) {
				d.preventDefault();
				d = Math.ceil(a.args.page / a.args.pageTagNum); ! jQuery(this).hasClass("on") && !jQuery(this).hasClass("gopage") && (c = jQuery(this).hasClass("previous") ? +a.args.el.data("page") - 1 : jQuery(this).hasClass("next") ? +a.args.el.data("page") + 1 : jQuery(this).hasClass("addOne") ? d * a.args.pageTagNum + 1 : +jQuery(this).text(), a.args.changeList(c), a.args.el.data("page", c));
				jQuery(this).hasClass("gopage") && (clearTimeout(g), d = jQuery.trim(jQuery(":input", a.args.el).val()), isNaN(d) && (d = 1), 0 >= d && (d = 1), d >= a.pageSize && (d = a.pageSize), a.args.changeList(d), a.args.el.data("page", d))
			});
			jQuery(":input", this.args.el).keyup(function() {
				clearTimeout(g);
				var c = +jQuery(this).val();
				isNaN(c) && (c = 1);
				0 >= c && (c = 1);
				c >= a.pageSize && (c = a.pageSize);
				g = setTimeout(function() {
					a.args.changeList(c);
					a.args.el.data("page", c)
				},
				2E3)
			})
		},
		init: function(a) {
			this.setConfig(a);
			this.createHtml();
			this.bindEvent()
		}
	})
})(TY.view.page);
TY.namespace("view");
TY.loadedModule("TY.view.template");
"undefined" == typeof window.TY.view.template && (TY.view.template = function() {
	this.init.apply(this, arguments)
}); (function() {
	var a = /{.*?}/g,
	b = function(a, b, c) {
		if ("{}" != a) {
			var h = a.indexOf("|"),
			l,
			n,
			r,
			v = "";
			if ( - 1 != h) {
				l = a.slice(1, h);
				n = a.slice(h + 1, a.length - 1);
				a = n.indexOf(","); - 1 == a ? r = n: (r = n.slice(0, a), v = n.slice(a + 1));
				if ( - 1 != l.indexOf(",")) {
					l = l.split(",");
					n = [];
					for (var h = 0,
					p = l.length; h < p; h++) a = "undefined" != typeof b[l[h]] ? b[l[h]] : "",
					n.push(a)
				} else n = "undefined" != typeof b[l] ? b[l] : "";
				if ("function" == typeof c[r]) return b = [],
				"array" == TY.type(n) ? b = b.concat(n) : b.push(n),
				l = v.split(","),
				0 < l.length && (b = b.concat(l)),
				c[r].apply(this, b);
				if ("rowNum" == r) return c.rowNum++
			} else return l = a.replace(/\{|\}/g, ""),
			"rowNum" == l ? c.rowNum++:"undefined" != typeof b[l] ? b[l] : ""
		}
	},
	c = function(c, d, m) {
		var h = [],
		l = c;
		if (h = c.match(a)) if ("object" == TY.type(d)) for (var n = 0,
		r = h.length; n < r; n++) c = c.replace(h[n], b(h[n], d, m));
		else {
			if ("array" == TY.type(d)) {
				for (var v = [], p = 0, z = d.length; p < z; p++) {
					l = c;
					n = 0;
					for (r = h.length; n < r; n++) l = l.replace(h[n], b(h[n], d[p], m));
					v.push(l)
				}
				c = v.join("")
			}
		} else TY.util.console("未指定模板特殊符{}");
		return c
	};
	TY.extend(TY.view.template.prototype, {
		setConfig: function() {
			var a = arguments.length,
			b = [];
			this.fnArrays = fnArrays = arguments[a - 2] || {};
			this.config = arguments[a - 1];
			this.dataStore = "undefined" == typeof this.config.dataStore ? null: this.config.dataStore;
			this.el = "undefined" == typeof this.config.el ? null: this.config.el;
			this.blankTxt = "undefined" == typeof this.config.blankTxt ? "暂无数据": this.config.blankTxt;
			for (var c = 0; c < a - 2; c++) b.push(arguments[c]);
			this.template = b.join("");
			this.handlerTemplate = "";
			this.loadElId = "TY_view_template_load";
			this.rowNum = 1;
			this.render = this.config.render || null;
			this.loadTxt = "undefined" == typeof this.config.loadTxt ? "数据加载中...": this.config.loadTxt;
			TY.extend(this, fnArrays)
		},
		init: function() {
			try {
				if (this.setConfig.apply(this, arguments), "undefined" == typeof this.el) alert("绑定元素未定义");
				else {
					this.el.hide();
					this.el.append("<div class='" + this.loadElId + "' style='margin:60px auto;text-align:center;'>" + this.loadTxt + "</div>");
					0 < TY.util.getPropertyCount(this.dataStore) ? (this.handlerTemplate = c(this.template, this.dataStore, this), this.el.html(this.handlerTemplate)) : this.el.html("<div style='margin:60px auto;text-align:center;'>" + this.blankTxt + "</div>");
					var a = this;
					this.el.fadeIn(300,
					function() {
						a.render && a.render()
					})
				}
			} catch(b) {
				TY.util.console({
					title: "初始化TY.view.template错误",
					msg: b
				})
			}
		},
		refresh: function(a) {
			try {
				if ("undefined" == typeof a) throw Error("refresh未传入数据");
				this.rowNum = 1;
				this.dataStore = a;
				this.el.empty().append("<div class='" + this.loadElId + "' style='margin:60px auto;text-align:center;'>" + this.loadTxt + "</div>");
				this.handlerTemplate = c(this.template, this.dataStore, this);
				this.el.empty().append(this.handlerTemplate);
				this.render && this.render()
			} catch(b) {
				TY.util.console({
					title: "TY.view.template refresh错误",
					msg: b
				})
			}
		},
		append: function(a) {
			try {
				if ("undefined" == typeof a) throw Error("refresh未传入数据");
				this.dataStore = a;
				this.el.append("<div class='" + this.loadElId + "' style='margin:60px auto;text-align:center;'>" + this.loadTxt + "</div>");
				TY("." + this.loadElId).remove();
				this.handlerTemplate = c(this.template, this.dataStore, this);
				this.el.append(this.handlerTemplate)
			} catch(b) {
				TY.util.console({
					title: "TY.view.template append错误",
					msg: b
				})
			}
		}
	})
})(TY.view.template);
TY.namespace("ui");
TY.loadedModule("TY.ui.tips");
"undefined" == typeof window.TY.ui.tips && (TY.ui.tips = function(a) {
	this.init(a)
}); (function(a, b) {
	b.extend(a.prototype, {
		init: function(a) {
			this.setConfig(a);
			this.args.autoHide && this.allHide();
			this.insertHtml()
		},
		setConfig: function(a) {
			this.defArgs = {
				id: "TY_ui_tips_" + (new Date).getTime(),
				el: null,
				type: "success",
				msg: "",
				title: "",
				position: "default",
				time: null,
				top: 0,
				left: 0,
				width: "auto",
				callback: null,
				clickable: !0,
				autoHide: !0,
				isArrow: !1,
				zIndex: null
			};
			this.args = b.extend({},
			this.defArgs, a)
		},
		insertHtml: function() {
			var a = [];
			a.push('<div id="' + this.args.id + '" class="main_container">');
			a.push('<div  class="notification ' + this.switchType() + '">');
			if (this.args.isArrow) {
				a.push('<div class="arrow">');
				for (var g = 0; 9 > g; g++) a.push('<div class="line' + (g + 1) + '"></div>');
				a.push("</div>")
			}
			this.args.title && a.push("<p><strong>" + this.args.title + ": </strong></p>");
			a.push("<p>");
			a.push(this.args.msg);
			a.push("</p>");
			a.push("</div></div>");
			b("body").append(a.join(""));
			b("#" + this.args.id).css({
				display: "inline-block"
			});
			this.args.width && b("#" + this.args.id).width(this.args.width);
			b.browser.msie && 9 == b.browser.version && b("#" + this.args.id).css({
				filter: "none"
			});
			this.args.el ? this.setPosition() : this.setmidCenter();
			this.bindEvent()
		},
		switchType: function() {
			var a = "";
			switch (this.args.type) {
			case "success":
				a = "success";
				break;
			case "warn":
				a = "warning";
				break;
			case "info":
				a = "information";
				break;
			case "failure":
				a = "failure";
				break;
			case "loading":
				a = "loading";
				break;
			default:
				a = "success"
			}
			return a
		},
		show: function() {
			b("#" + this.args.id).show()
		},
		allHide: function() {
			b("div.main_container").remove()
		},
		setPosition: function() {
			var a = this.args.el,
			g = TY.util.getElRealSize(a),
			d = g.width,
			g = g.height,
			m = a.offset(),
			h = b("#" + this.args.id),
			l = TY.util.getElRealSize(h),
			n = l.height,
			l = l.width,
			a = b(".arrow", a);
			switch (this.args.position) {
			case "rightCenter":
				g = {
					left: m.left + d + this.args.left,
					top: m.top + (g - n) / 2 + this.args.top
				};
				break;
			case "rightTop":
				g = {
					left: m.left + d + this.args.left,
					top: m.top - n + parseFloat(h.css("marginBottom")) + this.args.top
				};
				break;
			case "rightBottom":
				g = {
					left: m.left + d + this.args.left,
					top: m.top + g + this.args.top
				};
				break;
			case "bottom":
				g = {
					left: m.left + this.args.left,
					top: m.top + g + this.args.top
				};
				break;
			case "top":
				g = {
					left: m.left + this.args.left,
					top: m.top - n + parseFloat(h.css("marginBottom")) + this.args.top
				};
				break;
			case "midCenter":
				g = {
					left: m.left + (d - l) / 2 + this.args.left,
					top: m.top + (g - n) / 2 + this.args.top
				};
				break;
			default:
				g = {
					left: m.left + this.args.left,
					top: m.top + this.args.top
				}
			}
			a.css({
				left: (d - 16) / 2
			});
			this.args.zIndex && h.css("z-index", this.args.zIndex);
			h.css({
				top: g.top,
				left: g.left
			}).show();
			if (this.args.time) {
				var r = this;
				0 < +this.args.time && (this.time = setTimeout(function() {
					r.remove(h)
				},
				this.args.time))
			}
		},
		setmidCenter: function() {
			var a = b("#" + this.args.id),
			g = TY.util.getElRealSize(a),
			d = g.height,
			g = g.width,
			d = b(window).scrollTop() + (b(window).height() - d) / 2,
			m = b(window).scrollLeft() + (b(window).width() - g) / 2;
			b(".arrow", a).css({
				left: (g - 16) / 2
			});
			a.css({
				top: d + this.args.top - 100,
				left: m + this.args.left
			}).show();
			if (this.args.time) {
				var h = this;
				0 < +this.args.time && (this.time = setTimeout(function() {
					h.remove(a)
				},
				this.args.time))
			}
		},
		remove: function(a) {
			this.time && clearTimeout(this.time);
			a ? a.remove() : b("#" + this.args.id).remove();
			this.args.callback && this.args.callback();
			this.destory()
		},
		bindEvent: function() {
			if (this.args.clickable) {
				var a = this;
				b("#" + this.args.id).click(function() {
					a.remove(b(this))
				})
			}
		},
		destory: function() {
			for (var a in this) this[a] = null,
			delete this[a]
		}
	})
})(TY.ui.tips, jQuery);
TY.namespace("ui");
TY.loadedModule("TY.ui.mod");
"undefined" == typeof window.TY.ui.mod && (TY.ui.mod = function(a) {
	this.init(a)
});
TY.extend(TY.ui.mod.prototype, {
	version: "1.0",
	setConfig: function(a) {
		var b = TY(".modDiv").length;
		this.id = a.id || "mod_TY_ui_" + b;
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
		b = TY("#" + a.id);
		a.scrollable || a.lockScreen();
		b.css({
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
			var b = this.boxStyle.scrollTop,
			c = this.boxStyle.scrollLeft;
			setTimeout(function() {
				a.scrollTop(b).scrollLeft(c)
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
				var b = TY("body");
				TY.extend(this.boxStyle, {
					bodyOverflowX: b.css("overflow-x"),
					bodyOverflowY: b.css("overflow-y")
				});
				TY("body").css({
					"overflow-x": "hidden",
					"overflow-y": "hidden"
				})
			}
			this.boxStyle.widthOffset = a.width() - this.boxStyle.width;
			this.boxStyle.heightOffset = a.height() - this.boxStyle.height;
			b = {
				"padding-right": this.boxStyle.widthOffset,
				"padding-bottom": this.boxStyle.heightOffset,
				"margin-top": this.boxStyle.marginTop - this.boxStyle.scrollTop,
				"margin-left": this.boxStyle.marginLeft - this.boxStyle.scrollLeft
			};
			TY.browser.msie && 8 == TY.browser.version && (b["margin-top"] = this.boxStyle.marginTop - this.boxStyle.scrollTop + 1);
			a.css(b)
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
			c = TY("#" + this.id),
			g = this.getDocument();
			a.top = ((self.innerHeight || g && g.clientHeight || document.body.clientHeight) - c.height() - parseFloat(c.css("borderTopWidth")) - parseFloat(c.css("borderBottomWidth")) - parseFloat(c.css("paddingTop")) - parseFloat(c.css("paddingBottom")) - parseFloat(c.css("marginTop")) - parseFloat(c.css("marginBottom"))) / 2;
			if (TY.browser.msie && (6 == TY.browser.version || 7 == TY.browser.version)) a.top = TY(window).scrollTop() + (TY(window).height() - c.height() - parseFloat(c.css("borderTopWidth")) - parseFloat(c.css("borderBottomWidth")) - parseFloat(c.css("paddingTop")) - parseFloat(c.css("paddingBottom")) - parseFloat(c.css("marginTop")) - parseFloat(c.css("marginBottom"))) / 2;
			a.left = TY(window).scrollLeft() + (TY(window).width() - c.width() - parseFloat(c.css("borderLeftWidth")) - parseFloat(c.css("borderRightWidth")) - parseFloat(c.css("paddingLeft")) - parseFloat(c.css("paddingRight")) - parseFloat(c.css("marginLeft")) - parseFloat(c.css("marginRight"))) / 2;
			a.width = c.width();
			a.height = c.height();
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
					var c = [];
					if (TY.isArray(this.args.Buttons)) for (var c = this.args.Buttons.reverse(), g = 0, d = c.length; g < d; g++) a.push('<input type="button"  value="' + c[g].text + '"/>')
				}
				a.push("</div>")
			}
			a.push('\t</td><td class="bcr"></td></tr>');
			a.push('\t<tr><td class="bfl"></td><td class="bfc"></td><td class="bfr"></td></tr>');
			a.push("</table>");
			a.push('<iframe frameborder="0" class="iframeDiv" id="iframe_' + this.id + '"/>');
			if (this.args.isMod) {
				var m = this;
				TY.loader("TY.ui.mod",
				function() {
					m.mod = new TY.ui.mod({
						id: "mod_" + m.id,
						scrollable: m.args.scrollable,
						modZindex: m.args.modZindex
					})
				})
			}
			TY("body").append(a.join(""));
			this.args.render && this.args.render();
			this.setContentWidth();
			this.popPosHandler();
			this.show();
			a = jQuery("#" + this.id).find(".btnArea input"); (a.size() || (a = jQuery("#" + this.id).find(".closeBtn")).size()) && a.eq(0).focus()
		},
		getDocument: function() {
			return document.documentElement ? document.documentElement: document.body
		},
		setContentWidth: function() {
			var a = this.getDocument(),
			c = self.innerWidth || a && a.clientWidth || document.body.clientWidth,
			a = self.innerHeight || a && a.clientHeight || document.body.clientHeight,
			g = TY("#" + this.id),
			d = TY(".ty-content", g);
			this.args.isMax ? (d.css({
				width: c - 140
			}), d.css({
				height: a - 100
			})) : (g.width() > c - 20 && d.parent().css({
				width: c / 2
			}), 200 > g.width() && d.parent().css({
				width: 200
			}), g.height() > a && (d.parent().css({
				height: a / 2
			}), d.css({
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
			var c = a.getPosition();
			a.bringToFront();
			a.getDocument();
			TY("#" + a.id).css({
				top: c.top,
				left: c.left,
				display: "inline-block"
			});
			TY("#iframe_" + a.id).css({
				top: c.top,
				left: c.left,
				width: c.width,
				height: c.height
			})
		},
		bindEvent: function() {
			var a = TY("#" + this.id),
			c = this,
			g;
			TY(document).bind("keyup.TY_ui_pop",
			function(a) {
				27 === a.which && (c.args.closeHandler && c.args.closeHandler(), c.remove())
			});
			a.find(".closeBtn").click(function() {
				c.remove();
				c.args.closeHandler && c.args.closeHandler()
			});
			TY("#" + this.id + " .btnArea :input").click(function() {
				g = TY(this);
				if ("window" == c.args.type) c.args.Buttons[g.index()].handler();
				else if (g.hasClass("yes")) {
					var a = !0;
					c.args.yesHandler && (a = c.args.yesHandler());
					void 0 === a && (a = !0);
					a && c.remove()
				} else c.args.closeHandler && c.args.closeHandler(),
				c.remove()
			});
			var d = TY("#iframe_" + this.id),
			a = TY("#" + this.id);
			this.args.isDrag && (TY("#" + c.id).find(".topBar").hover(function() {
				TY(this).css("cursor", "move")
			}), TY.loader("TY.ui.draggable",
			function() {
				c.args.isShowHead ? a.draggable({
					handle: ".topBar",
					callback: function() {
						d.css({
							top: a.css("top"),
							left: a.css("left")
						})
					}
				}) : a.draggable({
					callback: function() {
						d.css({
							top: a.css("top"),
							left: a.css("left")
						})
					}
				})
			}));
			this.args.isClickable && setTimeout(function() {
				TY.event.add(document, "click", c.clickToRemove, {
					instance: c
				})
			},
			100);
			this.args.isDrag || TY.event.add(window, "resize", c.popPosHandler, {
				popInstance: c
			})
		},
		clickToRemove: function(a) {
			var c = a.target,
			a = a.data.instance;
			TY.contains(TY("#" + a.id)[0], c) || a.remove()
		},
		dragHandler: function(a) {
			function c(a) {
				window.getSelection && window.getSelection().removeAllRanges();
				d.css({
					top: l + a.pageY - r,
					left: h + a.pageX - n
				});
				m.css({
					top: l + a.pageY - r,
					left: h + a.pageX - n
				})
			}
			function g() {
				TY(document).unbind("mousemove", c).unbind("mouseup", g);
				d[0].setCapture ? (d[0].releaseCapture(), d.unbind("onlosecaptur", g)) : TY(window).unbind("onblur", g)
			}
			var d = TY(a),
			a = TY(".topBar", d),
			m = TY("#iframe_" + this.id);
			d.show();
			a.hover(function() {
				TY(this).css("cursor", "move")
			},
			function() {
				TY(this).css("cursor", "default")
			}).bind("mousedown",
			function(a) {
				v = TY(document).scrollTop();
				p = TY(document).scrollLeft();
				h = d.offset().left;
				l = d.offset().top;
				n = a.pageX + p;
				r = a.pageY + v;
				TY(document).bind("mousemove", c).bind("mouseup", g);
				d[0].setCapture ? (d[0].setCapture(), d.bind("onlosecaptur", g)) : TY(window).bind("onblur", g)
			});
			var h, l, n, r, v, p
		}, bringToFront: function() {
			var a = TY(".TY_ui_window").length;
			0 < a ? (a = 1 < a ? TY(".TY_ui_window").eq(a - 2) : TY(".TY_ui_window").eq(a - 1), a = a.css("zIndex")) : a = this.args.modZindex;
			"auto" == a ? a = this.args.modZindex: this.args.modZindex > a && (a = this.args.modZindex);
			TY("#" + this.id).css("z-index", +a + 3)
		},
		popScroll: function(a) {
			try {
				var c = TY("#" + a.data.id),
				g = TY("#iframe_" + a.data.id),
				d,
				a = null;
				"undefined" != typeof a && null != a && clearTimeout(a);
				a = setTimeout(function() {
					d = TY(window).scrollTop() + (TY(window).height() - c.height() - parseFloat(c.css("borderTopWidth")) - parseFloat(c.css("borderBottomWidth")) - parseFloat(c.css("paddingTop")) - parseFloat(c.css("paddingBottom")) - parseFloat(c.css("marginTop")) - parseFloat(c.css("marginBottom"))) / 2;
					c.stop(!0, !1);
					g.stop(!0, !1);
					c.animate({
						top: d
					},
					"fast");
					g.animate({
						top: d
					},
					"fast")
				},
				100)
			} catch(m) {
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
				c;
				for (c in a) c = null;
				setTimeout(function() {
					delete a
				},
				100)
			} catch(g) {
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
	function b() {
		var a = [];
		h = "ty_login_window_" + (new Date).getTime();
		a.push('<div id="' + h + '" class="TY_login_window">');
		a.push('<div class="TY_login_window_body">');
		a.push('<form method="post" target="_top" accept-charset="UTF-8" action="' + d + '" id="topguideloginform" name="topguideloginform" >');
		a.push('<div class="TY_dialog_body" style="height:70px;*height:65px!important">');
		a.push('<div class="TY_login_users">');
		a.push("<ul>");
		a.push("<li>");
		a.push('<span class="ty_login_title">');
		a.push("用户名：</span>");
		a.push('<input name="model.username" nam="vwriter" type="text" class="login_input" tabindex="1"/>&nbsp;');
		a.push('<a id="registerLink" href="http://passport.tianya.cn/register/default.jsp"  tabindex="3" target="_blank">立即注册</a></li>');
		a.push('<li><span class="ty_login_title">密　码：</span>');
		a.push('<input type="password"  name="model.password" nam="vpassword" class="login_input"  tabindex="2"/>&nbsp;');
		a.push('<a href="http://passport.tianya.cn/fp/fp.jsp" target="_blank" tabindex="4">找回密码</a></li>');
		a.push('<li id="login_checkbox_li"><span class="ty_login_title"></span><input type="checkbox" name="rmflag" id="rmflag" class="login_checkbox" value="1" checked="checked" />下次自动登录</li>');
		a.push('<input type="hidden"  name="fowardURL"  value="'+window.location.pathname+'" />');
		a.push("</ul>");
		a.push("</div>");
		a.push("</div>");
		a.push("</form>");
		a.push("</div>");
		a.push("</div>");
		return a.join("")
	}
	function c() {
		var b = a("#" + h);
		a(":password", b).bind("keyup",
		function(a) {
			13 === a.which && g()
		})
	}
	function g() {
		var b = a("#" + h),
		c = a("#topguideloginform");
		jQuery(".TY_login_window_body input[nam=vwriter]", b).val() ? jQuery(".TY_login_window_body input[nam=vpassword]", b).val() ? (document.charset = "UTF-8", c.submit()) : alert("请先输入密码") : alert("请先输入用户名")
	}
	var d = "loginTo",
	m, h;
	a.extend(TY, {
		loginAction: function(d, n, r) {
			if (jQuery.isReady) {
				var v = !0,
				p = !0,
				z = arguments;
				"boolean" == a.type(z[0]) && (!1 == z[0] && (p = !1), d = z[1], n = z[2], r = z[3]);
				buttons = [{
					id: "submitBtn",
					text: "登录",
					handler: function() {
						g()
					}
				},
				{
					id: "cancelBtn",
					text: "取消",
					handler: function() {
						m && m.remove()
					}
				}]; ! 1 == p && (buttons.splice(1, 1), v = !1);
				d || (d = "社区登录");
				n || (n = window.location.href);
				r || (r = window.location.href);
				//"http://blog.tianya.cn/" == !n && (n = "http://blog.tianya.cn/default.asp");
				//"http://blog.tianya.cn/" == !r && (r = "http://blog.tianya.cn/default.asp");
				p = "";
				p = b();
				m = new TY.ui.pop({
					headTxt: d,
					isShowCloseIco: v,
					body: p,
					type: "window",
					Buttons: buttons,
					modZindex: 12E3
				});
				c();
				a(".TY_login_window_body input[name=returnURL]", a("#" + h)).val(r);
				a(".TY_login_window_body input[name=fowardURL]", a("#" + h)).val(n);
				v = encodeURIComponent(window.location.href); - 1 == document.getElementById("registerLink").href.indexOf("sourceURL=") && (document.getElementById("registerLink").href = document.getElementById("registerLink").href + "?sourceURL=" + v);
				a(".TY_login_window_body input[name=vwriter]", a("#" + h)).focus();
				return ! 1
			}
			a(document).ready(function() {
				TY.loginAction(d, n, r)
			})
		}
	})
})(jQuery);
"undefined" === typeof MenuUtil && (window.MenuUtil = {});
MenuUtil.login = function(a, b, c) {
	TY.loginAction(a, b, c)
};
MenuUtil.loginIfr = function(a, b, c) {
	TY.loginAction(a, b, c)
};
var tb_show2 = function(a, b) {
	var c = "";
	b.html && (c = b.html);
	b.src && (c = b.width && b.height ? '<iframe width="' + b.width + '" height="' + b.height + '" frameborder="0" src="' + b.src + '"/>': '<iframe frameborder="0" src="' + b.src + '"/>');
	window.tb_show2_pop = new TY.ui.pop({
		isShowHead: !1,
		isShowButton: !1,
		isClickable: !0,
		body: c,
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
	showTips: function(a, b, c, g) {
		"undefined" == typeof TY.ui.tips ? TY.loader("TY.ui.tips",
		function() {
			setTimeout(function() {
				new TY.ui.tips({
					type: a || "success",
					msg: b || "成功提示",
					position: "midCenter",
					time: c || 3E3,
					callback: function() {
						g && g()
					}
				})
			},
			100)
		}) : new TY.ui.tips({
			type: a || "success",
			msg: b || "成功提示",
			position: "midCenter",
			time: 3E3,
			callback: function() {
				g && g()
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
	var b = this;
	TY.ajax({
		url: b.preUrl + "/api/tw?method=following.ice.selectall",
		data: {
			"var": b.allFollowVarName
		},
		dataType: "script",
		cache: !1,
		type: "get",
		success: function() {
			if (window[b.allFollowVarName]) {
				var c = window[b.allFollowVarName];
				c && c.success && c.data && (0 < c.data.friend.length && (b.FollowList = b.FollowList.concat(c.data.friend)), 0 < c.data.follow.length && (b.FollowList = b.FollowList.concat(c.data.follow)));
				a && a()
			}
		},
		failure: function() {
			TY.util.console("请求我的关注接口失败")
		}
	})
};
TY_Twitter_util.prototype.addFollow = function(a, b) {
	var c = this;
	this.getAllfollow(function() { - 1 != c.FollowList.indexOf( + a) ? TY_Common_util.showTips("warn", "您已关注了该用户了") : TY.ajax({
			url: c.preUrl + "/api/tw?method=following.ice.insert",
			type: "get",
			dataType: "script",
			data: {
				"params.followingUserId": a,
				"var": c.followResponseVarName
			},
			cache: !1,
			success: function() {
				if (window[c.followResponseVarName]) {
					var g = window[c.followResponseVarName];
					1 === g.success ? (c.FollowList.push( + a), TY_Common_util.showTips("success", "关注成功"), b && b(g.data)) : TY_Common_util.showTips("warn", g.message || "关注成功")
				}
			},
			failure: function() {
				TY.util.console("关注请求失败")
			}
		})
	})
};
var TY_lite_url = "",
TY_lite_url = "http://static.tianyaui.com/global/lite"; (function() {
	var a = {
		targetUrl: "",
		fromOldFlag: "BBS",
		blockId: null,
		init: function() {
			window.top == self && this.detectBbs() && jQuery(document).ready(function() {
				a.initDom();
				a.bindEvent()
			})
		},
		bindEvent: function() {
			var a = this;
			jQuery(".ty_tip_no_more").click(function(a) {
				"function" == typeof clickPartLink && clickPartLink(a, "stat", "新版顶导航/返回旧版")
			});
			jQuery(".yijianfankui").click(function(a) {
				"function" == typeof clickPartLink && clickPartLink(a, "stat", "新版顶导航/意见反馈")
			});
			1024 < window.screen.availWidth && (jQuery("body.layout-1280").livequery(function() {
				var c = a.getPosition();
				c && c.left && jQuery(".ty_tip_box").css("left", c.left + "px").show()
			}), jQuery("body.layout-1024").livequery(function() {
				var c = a.getPosition();
				c && c.left && jQuery(".ty_tip_box").css("left", c.left + "px").show()
			}), jQuery(window).resize(function() {
				var c = a.getPosition();
				c && c.left && jQuery(".ty_tip_box").css("left", c.left + "px").show()
			}))
		},
		getPosition: function() {
			var a = {},
			c = null,
			g = null,
			d = 0,
			c = 0,
			c = jQuery("#doc");
			0 === c.size() && (c = jQuery("#bbsdoc"));
			0 === c.size() && (c = jQuery("#blogdoc"));
			if (0 != c.size()) return g = c.offset(),
			d = g.top + ("NEW_BBS_POST" === this.fromOldFlag ? 120 : 7),
			a.top = d,
			1024 < window.screen.availWidth ? (c = g.left + parseInt(c.width(), 10) + 1, a.left = c) : (a.right = "0", a.left = null),
			a
		},
		initDom: function() {
			var a = this.getPosition();
			if (a) {
				var c = a.left ? "left:" + a.left: "right:" + a.right,
				a = '<div class="ty_tip_box" style="top:' + a.top + "px;" + (c + "px;") + '">';
				this.targetUrl && (a += '<a class="ty_tip_no_more" href="' + this.targetUrl + '" style="background-position:0px  -2100px;"></a>');
				a = "NEW_BLOG" == this.fromOldFlag ? a + '<a class="yijianfankui" title="谈谈新版感受和问题(无需登录)" href="http://bbs.tianya.cn/list-1018-1.shtml"></a>': a + '<a class="yijianfankui" title="谈谈新版感受和问题(无需登录)" href="http://bbs.tianya.cn/list.jsp?item=797&sub={subVal}"></a>';
				a += "</div>";
				a = "NEW_TW" == this.fromOldFlag ? a.replace(/\{subVal\}/, "2") : a.replace(/\{subVal\}/, "1");
				jQuery("body").append(a)
			}
		},
		detectBbs: function() {
			for (var a = 0,
			c = document.location.href,
			g = window.bbsGlobal ? window.bbsGlobal.item: null, d = [/http:\/\/bbs\.tianya\.cn\/(index.shtml){0,1}$/i, /http:\/\/bbs\.tianya\.cn\/list-(\w+)-1\.shtml$/i, /http:\/\/bbs\.tianya\.cn\/post-(\w+)-(\w+)-\d+\.shtml$/i, /http:\/\/www\.tianya\.cn\/(\d+)(\/profile){0,1}$/i, /http:\/\/www\.tianya\.cn\/blog\/(index\.jsp){0,1}$/i, /http:\/\/www\.tianya\.cn\/t\/reply/i, /http:\/\/www\.tianya\.cn\/t\/post/i, /http:\/\/www\.tianya\.cn\/t\/atme/i]; d[a] && !d[a].exec(c);) a++;
			if (a === d.length) return ! 1;
			this.blockId = g;
			switch (a) {
			case 0:
				this.fromOldFlag = "NEW_BBS";
				break;
			case 3:
				this.fromOldFlag = "NEW_TW";
				break;
			case 4:
				this.fromOldFlag = "NEW_BLOG";
				break;
			case 5:
				this.targetUrl = !1;
				this.fromOldFlag = "NEW_TW";
				break;
			case 6:
				this.targetUrl = !1;
				this.fromOldFlag = "NEW_TW";
				break;
			case 7:
				this.targetUrl = !1,
				this.fromOldFlag = "NEW_TW"
			}
			return ! 0
		}
	};
	a.init()
})();
window.console || (console = {
	log: function() {}
});
var TUI = {},
iceURL = "http://www.tianya.cn/api/tw",
st_scroll_top_show, followHtml = [];
followHtml.push('<div class="addFollow_pop">');
followHtml.push("<p>您已经关注了TA，您可以在您的首页看到TA的动态</p>");
followHtml.push('<table width="100%">');
followHtml.push('<tr><td width="25%">添加备注：</td><td><input type="text" style="width:70%" class="remarkInput"/></td></tr>');
followHtml.push('<tr><td>选择分组：</td><td><select id="groupSelect" style="width:70%"></select></td></tr>');
followHtml.push('<tr id="addGroupWin"><td></td><td><input type="text" class="addGroup" style="width:70%"/><a href="#">创建分组</a></td></tr>');
followHtml.push("</table>");
followHtml.push("</div>"); (function(a) {
	TUI.ifMod = function(b, c) {
		var g = a(b);
		0 !== g.size() && setTimeout(function() {
			c(g)
		},
		13)
	};
	TUI.run = function(a, c) {
		setTimeout(function() {
			a.call(c, jQuery)
		},
		13)
	};
	TUI.fillGroupData = function() {
		var b = [],
		c = 0,
		g;
		for (g in _g.groupMap) b.push('<option value="' + g + '">' + _g.groupMap[g] + "</option>"),
		c++;
		a("#groupSelect").append(b.join(""));
		c < _g.groupLimit && (a("#addGroupWin").show(), a("#addGroupWin").find("a").bind("click",
		function(b) {
			b.preventDefault(); (b = a(".addGroup", a("#addGroupWin")).val().trim()) ? TUI.Qing_addGroup(b) : new TY.ui.tips({
				type: "warn",
				msg: "请填写分组名称",
				position: "midCenter",
				time: 2500,
				callback: function() {
					a(".addGroup", a("#addGroupWin")).focus()
				}
			})
		}))
	}
})(jQuery);
TUI.getRandom = function(a) {
	return (a || "") + Math.floor(1E4 * Math.random())
};
TUI.ga = {
	push: function() {}
};
TUI.setGoogleAnalytics = function() {};
TUI.listenFocusPeople = function(a) {
	if (a || !0 !== TUI.listenFocusPeople.running) {
		var b = jQuery;
		a || (a = jQuery(document));
		a.find(".t-setfocus").livequery(function() {
			var a = b(this);
			TUI.onceAjaxGet({
				id: "following.ice.selectall",
				sendRequest: function(a) {
					jQuery.getScript(iceURL + "?var=varMyAllFriend&method=following.ice.selectall",
					function() {
						var b = window.varMyAllFriend,
						c = {},
						c = b && b.success && b.data ? b.data || {}: {};
						a(c)
					})
				},
				success: function(g) {
					var d = g.follow,
					g = g.friend,
					m = +a.attr("_data");
					a.addClass("t-notfocus"); - 1 !== b.inArray(m, d) && a.addClass("t-focused").removeClass("t-notfocus"); - 1 !== b.inArray(m, g) && a.addClass("t-friend").removeClass("t-notfocus")
				}
			})
		});
		a.find(".t-notfocus").live("click",
		function(c) {
			var g = this;
			c.preventDefault();
			if (__global.isOnline()) {
				var d = b(this).attr("_data"),
				m = TUI.getRandom("blackId");
				b.getScript(iceURL + "?" + jQuery.param({
					"params.userId": d,
					"var": m,
					method: "userBlack.ice.isBlack"
				}),
				function() {
					var c = window[m];
					if (1 === +c.success && (2 === +c.code || 3 === +c.code)) new TY.ui.tips({
						type: "warn",
						msg: "对不起，根据对方的设置，您不能对TA进行此操作",
						position: "midCenter",
						time: 2500,
						callback: function() {
							b(".addGroup", b("#addGroupWin")).focus()
						}
					});
					else if (!b(this).hasClass("t-focus-loading")) {
						b(this).addClass("t-focus-loading").removeClass("t-notfocus");
						var l = "doFocus_" + Math.floor(1E3 * Math.random());
						b.getScript(iceURL + "?" + b.param({
							"var": l,
							method: "following.ice.insert",
							"params.followingUserId": d
						}),
						function() {
							var c = window[l] || {};
							1 == c.success ? (a.find('.t-setfocus[_data="' + d + '"]').removeClass("t-notfocus").addClass("t-focused"), b(g).removeClass("t-focus-loading").addClass("t-focused"), (c = TUI.onceAjaxData("following.ice.selectall")) && jQuery.isArray(c.follow) && c.follow.push(parseInt(d, 10)), popWin = new TY.ui.pop({
								headTxt: "关注成功",
								body: followHtml.join(""),
								type: "confirm",
								yesHandler: function() {
									var a = b("#groupSelect", b(".addFollow_pop")).val() || "",
									c = b(".remarkInput", b(".addFollow_pop")).val().trim();
									TUI.Qing_setGroupOrRemark({
										followingUserId: d,
										remark: c,
										group: a
									})
								}
							}), TUI.getGroupInfo(TUI.fillGroupData)) : (b(g).removeClass("t-focus-loading").addClass("t-notfocus"), new TY.ui.tips({
								type: "warn",
								msg: c.message || "关注失败",
								position: "midCenter",
								time: 2500
							}))
						})
					}
				})
			} else TY.loginAction()
		});
		a.find(".t-focused").live("click",
		function(c) {
			c.preventDefault();
			if (__global.isOnline()) {
				var g = jQuery(this);
				if (!g.hasClass("cancel-focus-lock")) {
					g.addClass("cancel-focus-lock");
					var d = this;
					new TY.ui.pop({
						headTxt: "取消关注",
						body: "真的要取消关注吗？",
						type: "confirm",
						render: function() {
							g.removeClass("cancel-focus-lock")
						},
						yesHandler: function() {
							var c = b(d).attr("_data"),
							g = TUI.getRandom("delfocus");
							b.getScript(iceURL + "?" + b.param({
								"var": g,
								method: "following.ice.delete",
								"params.followingUserId": c
							}),
							function() {
								var l = window[g] || {};
								if (1 == l.success) {
									if (a.find('.t-setfocus[_data="' + c + '"]').removeClass("t-focused").addClass("t-notfocus"), b(d).removeClass("t-focused").removeClass("tag-focus-loading").addClass("t-notfocus"), (l = TUI.onceAjaxData("following.ice.selectall")) && jQuery.isArray(l.follow)) {
										var n = jQuery.inArray(parseInt(c, 10), l.follow); - 1 !== n && l.follow.splice(n, 1)
									}
								} else b(d).removeClass("tag-focus-loading").addClass("t-focused"),
								new TY.ui.tips({
									type: "warn",
									msg: l.message || "取消关注失败",
									position: "midCenter",
									time: 2500
								})
							})
						}
					})
				}
			} else TY.loginAction()
		});
		TUI.listenFocusPeople.running = !0
	}
};
TUI.initAllFocusButton = function() {
	var a = jQuery;
	TUI.listenFocusPeople();
	a(".tag-setfocus").livequery(function() {
		var b = a(this),
		g = b.attr("_data"),
		d = "isArticleCollected_" + encodeURIComponent(g);
		TUI.onceAjaxGet({
			id: d,
			sendRequest: function(b) {
				var c = TUI.getRandom("varMyTag"),
				d = iceURL + "?" + a.param({
					"var": c,
					method: "collect.ice.isArticleCollected",
					"params.title": g
				});
				jQuery.getScript(d,
				function() {
					var a = window[c],
					d = {},
					d = a && a.success && a.data ? a.data || {}: {};
					b(d)
				})
			},
			success: function(a) {
				var d = a.isCollected;
				b.addClass("tag-notfocus");
				1 == d && (a = a.id, b.removeClass("tag-notfocus").addClass("tag-focused").attr("_id", a))
			}
		})
	});
	var b = function(b, g) {
		var d = a("#FocusTag");
		if (0 !== d.size()) {
			var m = !0;
			d.find(">li a").each(function() {
				if (a(this).text() == b && (m = !1, !g)) return a(this).closest("li").remove(),
				!1
			});
			m && g && d.prepend('<li><a href="tag?q=' + encodeURIComponent(b) + '">' + b + "</a></li>")
		}
	};
	a(".tag-notfocus").live("click",
	function(c) {
		c.preventDefault();
		if (__global.isOnline()) {
			if (!a(this).hasClass("tag-focus-loading")) {
				a(this).addClass("tag-focus-loading").removeClass("tag-notfocus");
				var g = a(this).attr("_data"),
				d = this,
				m = TUI.getRandom("varInsertTag");
				a.getScript(iceURL + "?" + a.param({
					"var": m,
					method: "collect.ice.addCollectArticle",
					"params.appName": "话题",
					"params.url": "/t/tag.jsp?q=" + g,
					"params.title": g
				}),
				function() {
					var c = window[m];
					c && 1 == c.success ? (a(d).removeClass("tag-focus-loading").addClass("tag-focused").attr("_id", c.data.id), b(g, !0)) : a(d).removeClass("tag-focus-loading").addClass("tag-notfocus")
				})
			}
		} else TY.loginAction()
	});
	a(".tag-focused").live("click",
	function(c) {
		c.preventDefault();
		if (__global.isOnline()) {
			if (!a(this).hasClass("tag-focus-loading")) {
				a(this).addClass("tag-focus-loading").removeClass("tag-focused");
				var g = a(this).attr("_data"),
				d = this,
				m = TUI.getRandom("vardelTag");
				a.getScript(iceURL + "?" + a.param({
					"var": m,
					method: "collect.ice.delCollectArticle",
					"params.appName": "话题",
					"params.id": a(this).attr("_id")
				}),
				function() {
					var c = window[m];
					c && 1 == c.success ? (a(d).removeClass("tag-focus-loading").addClass("tag-notfocus"), b(g, !1)) : a(d).removeClass("tag-focus-loading").addClass("tag-focused")
				})
			}
		} else TY.loginAction()
	})
}; (function() {
	var a = {};
	TUI.onceAjaxGet = function(b) {
		var c = a[b.id];
		c || (a[b.id] = c = {
			bLoading: !1,
			bLoaded: !1,
			data: null
		});
		c.bLoaded ? b.success.apply(window, c.data) : (c.bLoading || (c.bLoading = !0, b.sendRequest(function() {
			c.bLoaded = !0;
			c.data = arguments
		})), setTimeout(function() {
			TUI.onceAjaxGet(b)
		},
		500))
	};
	TUI.onceAjaxData = function(b) {
		return a[b] && a[b].bLoaded ? a[b].data && a[b].data[0] : null
	}
})();
TUI.getStrLen = function(a) {
	for (var b = 0,
	c = 0; c < a.length; c++) b += 128 < a.charCodeAt(c) ? 2 : 1;
	return b
};
TUI.getStringByLength = function(a, b) {
	var c = a;
	TUI.getStrLen(a) > b && (c = a.subStringCn(b, !0));
	return c
};
TUI.getVipCode = function(a, b) {
	var c = "";
	switch ( + a) {
	case 1:
		c = '<a class="my-16 my-16-company" title="' + (b || "企业认证用户") + '" href="http://www.tianya.cn/honor/enterprise" target="_blank"></a>';
		break;
	case 2:
		c = '<a class="my-16 my-16-star" title="' + (b ? "天涯牛人认证：" + b: "天涯牛人认证") + '" href="http://www.tianya.cn/honor/vip" target="_blank"></a>';
		break;
	case 3:
		c = '<a class="my-16 my-16-mobile" title="手机认证用户" target="_blank" href="http://www.tianya.cn/mobile/identity"></a>';
		break;
	default:
		c = ""
	}
	return c
}; (function() {
	TY.module.add("Qing.global-css", {
		path: TY_lite_url + "/global/tw/css/tyui_t_all-qing.css?_v=20130409",
		type: "css",
		charset: "utf-8",
		rely: null
	});
	TY.module.add("Qing.Editor-icon", {
		path: TY_lite_url + "/editor/build/editor/theme/twitterpost.css?_v=20130409",
		type: "css",
		charset: "utf-8",
		rely: null
	});
	TY.module.add("Qing.Editor-base", {
		path: TY_lite_url + "/global/pub_mod/twitter/css/tianya.editor.css?_v=20130409",
		type: "css",
		charset: "utf-8",
		rely: ["Qing.Editor-icon"]
	});
	TY.module.add("Qing.Editor-cssIE6", {
		path: TY_lite_url + "/editor/build/editor/theme/cool/editor-pkg-sprite-min.css?_v=20130409",
		type: "css",
		charset: "utf-8",
		rely: ["Qing.Editor-base"]
	});
	TY.module.add("Qing.Editor-css", {
		path: TY_lite_url + "/editor/build/editor/theme/cool/editor-pkg-min-datauri.css?_v=20130409",
		type: "css",
		charset: "utf-8",
		rely: ["Qing.Editor-base"]
	});
	TY.module.add("Qing.ui.tips-css", {
		path: TY_lite_url + "/css/qing.ui.tips.css?_v=20130409",
		type: "css",
		charset: "utf-8",
		rely: null
	});
	TY.module.add("Qing.global-js", {
		path: TY_lite_url + "/global/tw/js/tyui_t_all-qing.js?_v=20130409",
		type: "js",
		charset: "utf-8",
		rely: ["Qing.global-css"]
	});
	TY.module.add("Qing.Editor-ie6", {
		path: TY_lite_url + "/editor/build/editorBase-min.js?_v=20130409",
		type: "js",
		charset: "utf-8",
		rely: ["Qing.Editor-cssIE6"]
	});
	TY.module.add("Qing.Editor", {
		path: TY_lite_url + "/editor/build/editorBase-min.js?_v=20130409",
		type: "js",
		charset: "utf-8",
		rely: ["Qing.Editor-css"]
	});
	TY.module.add("Qing.uploadFlash", {
		path: TY_lite_url + "/global/tw/uploadify/upload.js?_v=20130409",
		type: "js",
		charset: "utf-8",
		rely: null
	});
	TY.module.add("Qing.ui.tips", {
		path: TY_lite_url + "/global/ty/ui/TY.ui.tips.js?_v=20130409",
		type: "js",
		charset: "utf-8",
		rely: ["Qing.ui.tips-css"]
	})
})(); (function() {
	window._g = {};
	_g.editorPath = "http://static.tianyaui.com/global/lite/editor/build/editor/plugins/";
	_g.activityList = null;
	_g.groupMap = {};
	_g.groupLimit = 10
})(); (function(a) {
	function b(b, c, g, l, n, r) {
		l || (l = __global.getUserId());
		n || (n = __global.getUserName());
		r || (r = "天涯微博");
		a.ajax({
			url: "/api/msg?method=messageuser.insertmessage",
			data: {
				"params.sendUserId": l,
				"params.sendUserName": n,
				"params.receiveUserId": b,
				"params.receiveUserName": c,
				"params.content": g,
				"params.sourceName": r
			},
			dataType: "json",
			type: "post",
			cache: !1,
			success: function(a) {
				1 === +a.success ? new TY.ui.tips({
					type: "success",
					msg: a.message || "消息发送成功",
					position: "midCenter",
					time: 2500
				}) : new TY.ui.tips({
					type: "warn",
					msg: a.message || "消息发送失败",
					position: "midCenter",
					time: 2500
				})
			},
			failure: function() {
				TY.util.console("send message error")
			}
		})
	}
	var c;
	TUI.getGroupInfo = function(a) {
		if ("undefined" != typeof followGroupList) {
			var b = followGroupList.list;
			_g.groupMap = {};
			for (var c = 0,
			g = b.length; c < g; c++) _g.groupMap[b[c].i] = b[c].n;
			a && a()
		} else {
			var n = TUI.getRandom("f_group");
			jQuery.getScript(iceURL + "?" + jQuery.param({
				method: "followinggroup.ice.selectname",
				"var": n
			}),
			function() {
				var b = window[n];
				if (1 === +b.success) {
					_g.groupMap = {};
					for (var b = b.data.list,
					c = 0,
					g = b.length; c < g; c++) _g.groupMap[b[c].i] = b[c].n;
					a && a()
				} else TY.util.console("Get group info error")
			})
		}
	};
	TUI.Qing_addFriendAction = function(b, c) {
		a.ajax({
			url: "/api/tw?method=friend.ice.addFriendRequest",
			data: {
				"params.followingUserId": b,
				"params.content": c
			},
			dataType: "json",
			type: "post",
			cache: !1,
			success: function(a) {
				1 === +a.success ? new TY.ui.tips({
					type: "success",
					msg: a.message || "添加好友成功",
					position: "midCenter",
					time: 2500
				}) : new TY.ui.tips({
					type: "warn",
					msg: a.message || "添加好友失败",
					position: "midCenter",
					time: 2500
				})
			},
			failure: function() {
				TY.util.console("add friend error")
			}
		})
	};
	TUI.Qing_addGroup = function(b) {
		var c = TUI.getRandom("f_g_add");
		a.getScript(iceURL + "?" + jQuery.param({
			method: "followinggroup.ice.insert",
			"params.name": b,
			"var": c
		}),
		function() {
			var g = window[c];
			if (g && 1 === +g.success) {
				g = g.data.group;
				_g.groupMap[g] = b;
				var l = a("#groupSelect");
				0 < l.size() && (l.append('<option value="' + g + '">' + b + "</option>"), l.val(g));
				a(".addGroup", a(".addFollow_pop")).val("").focus();
				9 < a("#groupSelect").find("option").size() && a("#addGroupWin").hide()
			} else new TY.ui.tips({
				type: "warn",
				msg: g.message || "添加分组失败",
				position: "midCenter",
				time: 2500
			})
		})
	};
	TUI.Qing_addFollowor = function(b, c, g) {
		var l = TUI.getRandom("q_f");
		a.getScript(iceURL + "?" + jQuery.param({
			method: "following.ice.insert",
			"var": l,
			"params.followingUserId": b
		}),
		function() {
			var a = window[l];
			if (a && 1 === +a.success) {
				c && c();
				var r = TUI.onceAjaxData("following.ice.selectall");
				r && jQuery.isArray(r.follow) && r.follow.push(parseInt(b, 10));
				g && new TY.ui.tips({
					type: "success",
					msg: a.message || "关注成功",
					position: "midCenter",
					time: 2500
				})
			} else new TY.ui.tips({
				type: "warn",
				msg: a.message || "关注失败",
				position: "midCenter",
				time: 2500
			})
		})
	};
	TUI.Qing_setGroupOrRemark = function(b, g) {
		var h = {},
		l;
		for (l in b) h["params." + l] = b[l];
		var n = TUI.getRandom("f_g_attr");
		h["var"] = n;
		h.method = "following.ice.updateFollowingUserGroupAttr";
		a.getScript(iceURL + "?" + jQuery.param(h),
		function() {
			var a = window[n];
			1 === +a.success ? (new TY.ui.tips({
				type: "success",
				msg: a.message || "设置成功",
				position: "midCenter",
				time: 2500
			}), c && c.remove(), g && g()) : new TY.ui.tips({
				type: "warn",
				msg: a.message || "设置分组或备注失败",
				position: "midCenter",
				time: 2500
			})
		})
	};
	TUI.Qing_sendMessage = function(c, g) {
		var h = [];
		h.push('<table width="350" height="120">');
		h.push("\t<tr>");
		h.push('\t\t<td valign="top" align="left">发送内容:</td>');
		h.push('\t\t<td><textarea style="width:250px;height:110px;margin-left: 5px;padding:3px 5px;" id="Qing_message_content"></textarea></td>');
		h.push("\t</tr>");
		h.push("</table>");
		var l = new TY.ui.pop({
			headTxt: "发消息给" + g,
			body: h.join(""),
			type: "confirm",
			render: function() {
				setTimeout(function() {
					a("#Qing_message_content").focus()
				},
				20)
			},
			yesHandler: function() {
				var h = a("#Qing_message_content").val().trim();
				h ? (b(c, g, h), l.remove()) : new TY.ui.tips({
					type: "warn",
					msg: "请填写消息内容",
					position: "midCenter",
					time: 2500
				})
			}
		})
	};
	TUI.Qing_atSomeOne = function(a) {
		a && TY.loader("TY.ui.twitterPost", "TY.util.cursorPoint",
		function() {
			var b = new TY.ui.pop({
				headTxt: "@对话TA",
				body: '<div id="twitter_pop_area"></div>',
				type: "confirm",
				isShowButton: !1,
				render: function() {
					window.twitterPost = new TY.ui.twitterPost({
						el: jQuery("#twitter_pop_area"),
						defaultValue: "@" + a + " ",
						plugins: "friend,emotion",
						twitterObj: "twitterPost",
						isFocus: !0,
						render: function() {
							var a = jQuery("#twitter_pop_area");
							a.find(".toolbar").css({
								width: "82%"
							});
							setTimeout(function() {
								TY.util.cursorPoint.toTextEnd(a.find(".poster-textarea")[0])
							},
							10)
						},
						callback: function() {
							setTimeout(function() {
								b.remove()
							},
							1E3)
						}
					})
				}
			})
		})
	};
	a(".sendmsg").livequery("click",
	function(b) {
		b.preventDefault();
		if (__global.isOnline()) if ("1" === a(this).attr("_isBlack")) new TY.ui.tips({
			type: "warn",
			msg: "对不起，根据对方的设置，您不能对TA进行此操作",
			position: "midCenter",
			time: 2500,
			callback: function() {
				a(".addGroup", a("#addGroupWin")).focus()
			}
		});
		else {
			var b = a(this).attr("uid"),
			c = a(this).attr("uname");
			b && c && TUI.Qing_sendMessage(b, c)
		} else TY.loginAction()
	});
	a(".q_addFollow").livequery("click",
	function(b) {
		b.preventDefault();
		if ("1" === a(this).attr("_isBlack")) new TY.ui.tips({
			type: "warn",
			msg: "对不起，根据对方的设置，您不能对TA进行此操作",
			position: "midCenter",
			time: 2500,
			callback: function() {
				a(".addGroup", a("#addGroupWin")).focus()
			}
		});
		else {
			var g = a(this).attr("uid") || a(this).attr("_data");
			TUI.Qing_addFollowor(g,
			function() {
				c = new TY.ui.pop({
					headTxt: "关注成功",
					body: followHtml.join(""),
					type: "confirm",
					yesHandler: function() {
						var b = a("#groupSelect", a(".addFollow_pop")).val() || "",
						c = a(".remarkInput", a(".addFollow_pop")).val().trim();
						TUI.Qing_setGroupOrRemark({
							followingUserId: g,
							remark: c,
							group: b
						})
					}
				});
				TUI.getGroupInfo(TUI.fillGroupData)
			})
		}
	});
	var g = ['<div class="addGroupWin">', '<table width="350" height="120">', '<tr><td valign="top" align="left">发送内容:</td><td><textarea id="Qing_message_content" style="width:250px;height:110px;margin-left: 5px;padding:3px 5px;"></textarea></td></tr>', "</table>", "</div>"];
	a(".q_addFriend").die("click").live("click",
	function(b) {
		b.preventDefault();
		if (__global.isOnline()) if ("1" === a(this).attr("_isBlack")) new TY.ui.tips({
			type: "warn",
			msg: "对不起，根据对方的设置，您不能对TA进行此操作",
			position: "midCenter",
			time: 2500,
			callback: function() {
				a(".addGroup", a("#addGroupWin")).focus()
			}
		});
		else {
			var b = a(this).attr("uname"),
			m = a(this).attr("uid"),
			h = g.join(""),
			h = TY.util.format(h, [b, m]);
			c = new TY.ui.pop({
				headTxt: "请求加" + b + "为好友",
				body: h,
				type: "confirm",
				render: function() {
					setTimeout(function() {
						a("#Qing_message_content").focus()
					},
					20)
				},
				yesHandler: function() {
					var b = a(":input", a(".addGroupWin")).val().trim();
					TUI.Qing_addFriendAction(m, b)
				}
			})
		} else TY.loginAction()
	});
	a(".atAuthor").livequery("click",
	function(b) {
		b.preventDefault();
		if (__global.isOnline()) if ("1" === a(this).attr("_isBlack")) new TY.ui.tips({
			type: "warn",
			msg: "对不起，根据对方的设置，您不能对TA进行此操作",
			position: "midCenter",
			time: 2500,
			callback: function() {
				a(".addGroup", a("#addGroupWin")).focus()
			}
		});
		else {
			var b = a(this).attr("uid"),
			c = a(this).attr("uname");
			b && c && TUI.Qing_atSomeOne(c)
		} else TY.loginAction()
	})
})(jQuery);
jQuery(document).ready(function() {
	function a(a, c) {
		jQuery(a).click(function() {
			jQuery("#searchIndex form").attr("action", c)
		})
	}
	jQuery(".searchText").focus(function() {
		jQuery(this).attr("item", "ed");
		"搜人、搜贴、搜版块、搜遍天涯" == jQuery(this).attr("value") && (jQuery(this).attr("value", ""), jQuery(this).css("color", "#000"))
	});
	jQuery("#searchIndex li").click(function() {
		jQuery("#searchIndex").find("li").removeClass("hover");
		jQuery(this).addClass("hover")
	});
	a("#sTab1", "bbs");
	a("#sTab2", "user");
	a("#sTab3", "bbs");
	a("#sTab4", "t");
	a("#sTab5", "blog");
	a("#sTab6", "tag");
	jQuery(".sousuo").click(function() {
		if ("" == jQuery(".searchText").attr("value") || "搜人、搜贴、搜版块、搜遍天涯" == jQuery(".searchText").attr("value")) return ! 1
	})
});
TUI.setScrollTop = function(a) {
	window.noTopBtn || window.bbsGlobal && window.bbsGlobal.artId || (a.browser.msie && 6 == a.browser.version || TY.mobile.isMobile()) && TY.loader("TY.ui.scrollTop",
	function() {
		new TY.ui.scrollTop({
			pageWidth: 1E3,
			offset: {
				left: 5,
				top: 0
			}
		})
	})
}; (function() {
	var a = /(\<script.*?\>.*?\<\/script\>)|(\<.*?\>)|(\<.*?\/\>)/ig;
	window.BBS_UTIL = {
		valueHandler: function(b) {
			try {
				if (b) return a = /(\<script.*?\>.*?\<\/script\>)/ig,
				b = b.replace(a, "")
			} catch(c) {
				TY.util.console({
					title: "发帖数据处理出错",
					msg: c
				})
			}
			return ""
		}
	}
})(jQuery);
TUI.initPicToggle = function(a) {
	function b(a) {
		a = g(a);
		a.addClass("on").siblings().removeClass("on");
		a = a.index();
		m.eq(a).show().siblings().hide();
		h.eq(a).show().siblings().hide()
	}
	function c() {
		var c = a.find(".mod-pic-number>a.on"),
		g = d.size(),
		c = c.index();
		c++;
		c >= g && (c = 0);
		b(d[c])
	}
	var g = jQuery,
	d = a.find(".mod-pic-number>a"),
	m = a.find(".mod-pic-imgs li"),
	h = a.find(".mod-pic-title li");
	if (! (2 > d.size())) {
		d.hover(function() {
			clearInterval(l);
			b(this)
		});
		var l = setInterval(c, 4E3);
		a.mouseenter(function() {
			clearInterval(l)
		}).mouseleave(function() {
			l = setInterval(c, 4E3)
		})
	}
};
TUI.initBbsTouban = function(a) {
	a(".mod-pic-toggle").each(function() {
		TUI.initPicToggle(a(this))
	})
};
TUI.show2DBarcode = function(a) {
	function b() {
		d.css({
			top: parseInt(a(document).scrollTop()) + parseInt(d.attr("_top"))
		}).show()
	}
	var c = a.browser.msie && 6 == a.browser.version ? !0 : !1,
	g = null,
	d = null;
	a("body").append('<div id="barcode_float"><a href="http://www.tianya.cn/mobile/" target="_blank"><p>吉首大学社团管理</p><img src="http://static.tianyaui.com/global/lite/images/2Dbarcode.png"><p>手机扫描</p></a></div>');
	d = a("#barcode_float");
	c && (d.css("position", "absolute").attr("_top", parseInt(d.css("top"))), b(), a(window).bind("scroll",
	function() {
		d.hide();
		clearTimeout(g);
		g = setTimeout(function() {
			b()
		},
		300)
	}))
};
jQuery(function() {
	TUI.run(TUI.initAllFocusButton);
	TUI.run(TUI.setScrollTop);
	TUI.run(TUI.setGoogleAnalytics);
	TUI.run(TUI.initBbsTouban)
});
var getLink = {
	art: function(a, b, c, g, d) {
		switch (d) {
		case 1:
			return "http://bbs.tianya.cn/go_reply_position.jsp?item=" + a + "&id=" + b + "&rid=" + (g ? g: 0);
		default:
			return "http://bbs.tianya.cn/post-" + a + "-" + b + "-1.shtml"
		}
	},
	item: function(a) {
		return "http://bbs.tianya.cn/list-" + a + "-1.shtml"
	}
};
TY.namespace("ui");
TY.loadedModule("TY.ui.nav");
TY_lite_url = location.protocol+"//"+location.hostname +":"+location.port+"/fbbs"; (function(a) {
	var b = location.protocol+"//"+location.hostname +":"+location.port+"/fbbs",
	c = {
		loginStatus: 0,
		userId: "",
		userName: "",
		showUserMenu: !1,
		checkStatus: function() {
			if (this.loginStatus = __global.isOnline() ? 1 : __global.getUserId() && __global.getUserName() ? 2 : 0) this.userId = __global.getUserId(),
			this.userName = __global.getUserName(),
			this.showUserMenu = !0
		}
	},
	g = 0,
	d = [["内容", "bbs", "人"], ["博文", "blog", "博主"]],
	m = a.browser.msie && 6 == a.browser.version ? !0 : !1,
	h = !m && !TY.mobile.isMobile(),
	l = function(b) {
		m && a(b).prepend('<iframe frameborder="0" style="left:0px;width:100%;height:0px;top:0px;position:absolute;z-index: -1;filter: Alpha(Opacity=0);" class="js-iframe"></iframe>')
	};
	getStrByLen = function(a, b, c) {
		var d = 0;
		c && (b -= 4);
		for (var g = 0; g < a.length; g++) if (d += 128 < a.charCodeAt(g) ? 2 : 1, d > b) {
			a = a.slice(0, g);
			c && (a += "...");
			break
		}
		return a
	};
	var n = {},
	r = 6E4,
	v = null,
	p = {
		eventSourceArr: [],
		showfloat: function(b) {
			var c = a.extend({},
			{
				obj: "null",
				view: "null",
				event: "mouseenter",
				focusClass: "on",
				effect: "show",
				effectspeed: 0,
				ineffect: "hide",
				directionTop: !1,
				directionLeft: !1,
				verticalAdjust: 0,
				levelAdjust: 0,
				autoClose: !0,
				cution: function() {},
				render: function() {}
			},
			b || {}),
			d = null,
			g = null,
			h = a(c.obj),
			l = a(c.view),
			m = this;
			c.event = c.event.toLowerCase();
			"mouseover" == c.event && (c.event = "mouseenter");
			switch (c.effect) {
			case "fadeIn":
				c.ineffect = "fadeOut";
				c.effectspeed = 0 === c.effectspeed ? 200 : c.effectspeed;
				break;
			case "slideDown":
				c.ineffect = "slideUp";
				c.effectspeed = 0 === c.effectspeed ? 400 : c.effectspeed;
				break;
			default:
				c.ineffect = "hide"
			}
			var n = function() {
				p.setJsiIframeHeight(l);
				p.setShowFloatPosition(c);
				l[c.effect](c.effectspeed);
				return ! 0
			},
			r = function() {
				"A" != h.get(0).nodeName.toUpperCase() && h.removeClass(c.focusClass);
				l[c.ineffect](c.effectspeed);
				g = null
			},
			w = function() {
				a(m.eventSourceArr.join(",")).not(this).removeAttr("showed").removeClass(function() {
					return a(this).attr("bakFocusClass") || ""
				}).siblings(".more-view").hide();
				a(document).unbind("click", w);
				a(document).unbind("click", v)
			},
			v = function(b) {
				0 < a(b.target).closest(c.view).size() ? b.stopPropagation() : w()
			};
			1 === h.size() && 1 === l.size() && ("mouseenter" != c.event ? (m.eventSourceArr.push(c.obj), h.attr("bakFocusClass", c.focusClass), h.bind(c.event,
			function(b) {
				w.call(this);
				if (!1 === c.cution()) return ! 1;
				if ("1" != a(this).attr("showed")) if ("A" != h.get(0).nodeName.toUpperCase() && h.addClass(c.focusClass), n(), a(this).attr("showed", "1"), c.autoClose) a(document).one("click", w);
				else a(document).bind("click", v);
				else r(),
				a(this).attr("showed", "0");
				b.stopPropagation()
			})) : (h.bind("mouseenter",
			function() {
				if (g) clearTimeout(g);
				else {
					if (!1 === c.cution()) return ! 1;
					d = setTimeout(function() {
						"A" != h.get(0).nodeName.toUpperCase() && h.addClass(c.focusClass);
						n() && w()
					},
					200)
				}
			}).bind("mouseleave",
			function() {
				d && (clearTimeout(d), d = null);
				g = setTimeout(r, 200)
			}), l.bind("mouseenter",
			function() {
				g && clearTimeout(g)
			}).bind("mouseleave",
			function() {
				g = setTimeout(r, 10)
			})));
			c.render()
		},
		setShowFloatPosition: function(b) {
			var c = 0,
			d = 0,
			c = b.directionTop ? -a(b.view).outerHeight() : a(b.obj).outerHeight();
			b.directionLeft && (d = a(b.obj).outerWidth() - a(b.view).outerWidth());
			a(b.view).css({
				"margin-top": c + (b.verticalAdjust || 0),
				"margin-left": d + (b.levelAdjust || 0)
			})
		},
		setJsiIframeHeight: function(a) {
			if (m) {
				var b = a.height();
				a.find(".js-iframe").height(b)
			}
		},
		searchHint: function(c) {
			function h() {
				y = 0;
				z = r.find("a").size();
				r.find("a").removeClass(w)
			}
			function l(c) {
				var f = A = (new Date).getTime();
				a.getScript(b + "api?" + a.param({
					method: "bbs.ice.itemSearch",
					"var": "forumArr",
					"params.key": c,
					"params.all": !1,
					"params.mode": 0
				}),
				function() {
					var d = window.forumArr;
					if (d && d.success && d.data && d.data.rows && 0 < d.data.rows.length && f == A) {
						var d = d.data.rows,
						k = 0,
						g = [];
						for (i = 0; i < d.length && !(g = d[i].split("/"), r.find("dl.forum-list").append(a("<dd></dd>").append(a("<a></a>").html(g[1].toLowerCase().replace(c, "<strong>" + c + "</strong>")).attr("href", b + "list-" + g[0] + "-1.shtml"))), k++, 8 === k); i++);
					}
					h()
				})
			}
			var m = a(c.form),
			n = a(c.input),
			r = a(c.view),
			v = inputVal = "搜帖、找人、搜版块",
			y,
			z,
			w = "curr";
			h();
			if (1 === m.size() && (m.attr("action", "http://www.tianya.cn/search/bbs").bind("submit",
			function() {
				var b = a.trim(n.val());
				if ("" == b || b == v) return n.val("").focus(),
				!1
			}), a("#top_search_submit_btn", m).bind("click",
			function() {
				m.trigger("submit")
			}), 1 === n.size() && 1 === r.size())) {
				var A = "";
				"" === n.val() && n.val(v);
				n.bind("keyup",
				function(c) {
					var f = a(this),
					c = c.which;
					if (13 === c) y ? (location = r.find("a").eq(y - 1).attr("href"), r.slideUp().attr("show", "0"), h()) : m.trigger("submit");
					else if (38 === c || 40 === c) {
						if ("1" != r.attr("show")) return ! 1;
						if (38 === c) if (1 < y) y--,
						r.find("a").eq(y).removeClass(w).end().eq(y - 1).addClass(w);
						else return ! 1;
						else if (y < z) y++,
						r.find("a").eq(y - 2).removeClass(w).end().eq(y - 1).addClass(w);
						else return ! 1
					} else f = a.trim(f.val()).toLowerCase(),
					"" == f ? (r.slideUp().attr("show", "0"), inputVal = "") : "" !== f && f !== v && f != inputVal && (inputVal = f, c = getStrByLen(f, 12, 1), r.find("dl dd").remove(), r.find("strong").html(c.replace(/\</g, "&lt").replace(/\>/g, "&gt")), a("#search-text").attr("href", "http://www.tianya.cn/search/" + d[g][1] + "?q=" + encodeURIComponent(f)), a("#search-user").attr("href", "http://www.tianya.cn/search/user?q=" + encodeURIComponent(f)), a("#search-tab").attr("href", b + "tag/" + encodeURIComponent(f)), l(f), r.slideDown("fast").attr("show", "1")),
					setTimeout(function() {
						p.setJsiIframeHeight(r)
					},
					500)
				}).bind("focus",
				function() {
					a.trim(n.val()) === v && n.val("");
					n.removeClass("off")
				}).bind("blur",
				function() {
					"" === a.trim(n.val()) && n.val(v).addClass("off");
					setTimeout(function() {
						r.slideUp().attr("show", "0");
						h()
					},
					100)
				});
				r.bind("mouseenter",
				function() {
					h()
				})
			}
		},
		deleteMsgData: function(b) {
			var c = a.extend({},
			{
				itemName: "",
				o_trigger: "",
				iceName: "",
				precondition: function() {},
				callback: function() {}
			},
			b || {});
			if (0 == jQuery(c.o_trigger).size()) return ! 1;
			jQuery(c.o_trigger).bind("click",
			function() {
				c.precondition(); ! 1 != A.resetMsgItemData(c.itemName) && (c.iceName && ("ALL" == c.itemName ? a.getScript("http://www.tianya.cn/api/tw?" + a.param({
					"var": "delmsgResult",
					method: c.iceName
				}),
				function() {
					var b = window.delmsgResult;
					b && b.success ? a("a.js-gnore-msg").hide() : alert("忽略提醒设置失败:" + b.code)
				}) : a.getScript("http://www.tianya.cn/api/tw?" + a.param({
					"var": "r_upData",
					method: c.iceName,
					"params.count": 0
				}),
				function() {})), c.callback())
			})
		},
		msgFlicker: function(b, c, d) {
			n[d] = setInterval(function() {
				b = a(b);
				"hidden" === b.css("visibility") ? b.css("visibility", "visible") : b.css("visibility", "hidden")
			},
			c)
		},
		closeFlicker: function(a) {
			clearTimeout(n[a]);
			n[a] = null
		},
		bottomHotScroll: function() {
			var b = a("#bottom_nav ul.art-lite"),
			c = b.find("li"),
			d = !1;
			if (! (2 >= c.size())) {
				var g = 0,
				h = 3E3,
				l = 40,
				g = c.first().width() * c.size();
				c.slice(0, 2).clone().appendTo(b);
				var m = function() {
					function a() {
						var c = parseInt(b.css("margin-left")),
						c = c - 2;
						c <= -g && (c = 0);
						b.css({
							"margin-left": c + "px"
						});
						h = 800;
						d = setTimeout(a, l)
					}
					d = setTimeout(a, h)
				};
				b.bind("mouseenter",
				function() {
					d && clearTimeout(d)
				}).bind("mouseleave",
				function() {
					m()
				});
				m()
			}
		}
	},
	z = {
		app_str: "",
		sel_class: " on ",
		top_id: "",
		createDom: function(c) {
			var d = {
				app_str: "",
				sel_class: "",
				topNavWidth: 1E3,
				qing_Url_tomatch: "http://www.tianya.cn/".replace(/\//g, "\\/").replace(/\./g, "\\.")
			},
			c = a.extend({},
			d, c || {});
			this.app_str = c.app_str;
			this.sel_class = c.sel_class || this.sel_class;
			a("body").prepend('<div id="top_nav_wrap"  style="' + (950 == c.topNavWidth || 980 == c.topNavWidth ? "width:" + c.topNavWidth + "px;": "") + '"><div id="top_nav" class="clearfix" style="display:none;"></div></div>');
			this.top_id = "#top_nav";
			c = a("#top_nav");
			c.append('<div class="top-nav-logo"><a href="http://focus.tianya.cn/" _tystat="新版顶导航/Logo"></a></div>');
			c.append('<div class="top-nav-main clearfix"><div class="top-nav-menu clearfix"></div><div class="top-nav-separated"></div><div class="top-nav-links clearfix"></div></div>');
			d = ['<div class="top-nav-fl clearfix"><ul class="top-nav-menu-list clearfix">', '<li class="top-nav-menu-li top-nav-menu-li-first"><a href="' + b + '" class="top-nav-main-menu" appstr="bbs" _checklocation="1" _tystat="新版顶导航/论坛">论坛</a></li>', '<li class="top-nav-menu-li"><a href="http://www.tianya.cn/blog/" class="top-nav-main-menu" appstr="blog" _checklocation="1" _tystat="新版顶导航/博客">博客</a></li><li class="top-nav-menu-li"><a href="http://groups.tianya.cn/" class="top-nav-main-menu" appstr="laiba" _checklocation="1" _tystat="新版顶导航/部落">部落</a></li><li class="top-nav-menu-li"><a href="http://wenda.tianya.cn/" class="top-nav-main-menu" appstr="wenda" _checklocation="1" _tystat="新版顶导航/问答">问答</a></li><li class="top-nav-menu-li"><a href="http://game.tianya.cn/" class="top-nav-main-menu" appstr="game" _checklocation="1" _tystat="新版顶导航/游戏">游戏厅</a></li><li class="top-nav-menu-li"><a href="http://travel.tianya.cn/" class="top-nav-main-menu" appstr="travel" _checklocation="1" _tystat="新版顶导航/天涯客">天涯客</a></li><li class="top-nav-menu-li"><a href="http://pinpai.tianya.cn/" class="top-nav-main-menu" appstr="pinpai" _checklocation="1" _tystat="新版顶导航/品牌">品牌</a></li><li class="top-nav-menu-li"><span id="top_nav_menu_more" class="top-ico-bg top-nav-main-menu">更多</span></li></ul></div>'].join("");
			c.find(".top-nav-menu").append(d);
			c.find(".top-nav-menu").append('<div id="top_search" class="top-nav-fr top-search"><div class="clearfix"><form id="top_search_form" action="" method="get"><input id="top_search_submit_btn" type="button" class="top-search-submit" value=""><input id="top_search_key" name="q" type="text" class="top-search-key off" value="" autocomplete="off"></form></div></div>');
			c.find(".top-nav-menu").append('<div id="top_user_menu" class="top-nav-fr"><ul class="top-nav-menu-list clearfix"><li class="top-nav-menu-li top-nav-menu-li-first"><a href="http://www.tianya.cn/mobile/" class="white" _checklocation="1" appstr="mobile" _tystat="新版顶导航/手机">手机</a></li><li class="top-nav-menu-li"><a href="http://service.tianya.cn/index.do" _tystat="新版顶导航/服务">服务</a></li></ul></div>');
			this.addLoginStatusHtml();
			c.find(".top-nav-links").append('<div class="top-nav-fl"><ul class="top-nav-menu-list clearfix"><li class="top-nav-menu-li top-nav-menu-li-first"><a href="http://focus.tianya.cn/" appstr="focus" _checklocation="1" _tystat="新版顶导航/分社区/聚焦">聚焦</a></li><li class="top-nav-menu-li"><a href="http://news.tianya.cn/" appstr="news" _checklocation="1" _tystat="新版顶导航/分社区/民生">民生</a></li><li class="top-nav-menu-li"><a href="http://cul.tianya.cn" appstr="cul" _checklocation="1" _tystat="新版顶导航/分社区/人文">人文</a></li><li class="top-nav-menu-li"><a href="http://travel.tianya.cn/" appstr="travel" _checklocation="1" _tystat="新版顶导航/分社区/旅游">旅游</a></li><li class="top-nav-menu-li"><a href="http://biz.tianya.cn/" appstr="biz" _checklocation="1" _tystat="新版顶导航/分社区/财经">财经</a></li><li class="top-nav-menu-li"><a href="http://auto.tianya.cn/" appstr="auto" _checklocation="1" _tystat="新版顶导航/分社区/汽车">汽车</a></li><li class="top-nav-menu-li"><a href="http://it.tianya.cn/" appstr="it" _checklocation="1" _tystat="新版顶导航/分社区/IT数码">IT数码</a></li><li class="top-nav-menu-li"><a href="http://fashion.tianya.cn/" appstr="fashion" _checklocation="1" _tystat="新版顶导航/分社区/时尚">时尚</a></li><li class="top-nav-menu-li"><a href="http://emo.tianya.cn/" appstr="emo" _checklocation="1" _tystat="新版顶导航/分社区/情感">情感</a></li><li class="top-nav-menu-li"><a href="http://ent.tianya.cn/" appstr="ent" _checklocation="1" _tystat="新版顶导航/分社区/娱乐">娱乐</a></li><li class="top-nav-menu-li"><a href="http://sports.tianya.cn/" appstr="sports" _checklocation="1" _tystat="新版顶导航/分社区/体育">体育</a></li><li class="top-nav-menu-li"><a href="http://pp.tianya.cn/" appstr="pp" _checklocation="1" _tystat="新版顶导航/分社区/图片">图片</a></li><li class="top-nav-menu-li"><a href="http://video.tianya.cn/" appstr="video" _checklocation="1" _tystat="新版顶导航/分社区/更多/视频">视频</a></li><li class="top-nav-menu-li"><span id="top_nav_community_more" class="top-ico-bg">更多</span></li></ul></div>');
			c.find(".top-nav-links").append('<div class="top-nav-fr"><ul class="top-nav-menu-list clearfix"><li class="top-nav-menu-li top-nav-menu-li-first"><a href="http://bj.tianya.cn/" appstr="city-bj" _checklocation="1" _tystat="新版顶导航/城市/北京">北京</a></li><li class="top-nav-menu-li"><a href="http://sh.tianya.cn/" _checklocation="1" appstr="city-sh" _tystat="新版顶导航/城市/上海">上海</a></li><li class="top-nav-menu-li"><a href="http://gd.tianya.cn/" _checklocation="1" appstr="city-gd" _tystat="新版顶导航/城市/广东">广东</a></li><li class="top-nav-menu-li"><span id="top_nav_city_all" class="top-ico-bg" js-data="null">更多</span></li></ul></div>');
			a("#top_nav_menu_more").before('<div id="top_nav_menu_more_view" class="more-view"><ul class="link-list clearfix"><li><a href="http://apps.tianya.cn/" _tystat="新版顶导航/应用">应用</a></li><li><a href="http://mall.tianya.cn/" _tystat="新版顶导航/购物街">购物街</a></li><li class="li-border-btm"><a href="http://shangjia.tianya.cn" _tystat="新版顶导航/天涯商家">天涯商家</a></li><li><a href="http://pay.tianya.cn/" _tystat="新版顶导航/充值中心">充值中心</a></li><li><a href="http://apps.tianya.cn/gift" _tystat="新版顶导航/社区商店">社区商店</a></li><li><a href="http://2000.bbs.tianya.cn/djmanage/djpage.asp?djid=12107" _tystat="新版顶导航/实物换礼">实物换礼</a></li><li><a href="http://apps.tianya.cn/event" _tystat="新版顶导航/天涯活动">天涯活动</a></li></ul></div>');
			a("#top_search").append('<div id="top_search_type" class="top-search-type"><ul><li><a id="search-text" href="javascript:void(0);">含有<strong>?</strong>的内容&gt;&gt;</a></li><li><a id="search-user" href="javascript:void(0);">名为<strong>?</strong>的人&gt;&gt;</a></li><li class="clearfix"><dl class="forum-list"><dt>含有<strong>?</strong>的版块&gt;&gt;</dt></dl></li><li><a id="search-tab" href="javascript:void(0);">去<strong>?</strong>的标签&gt;&gt;</a></li></ul></div>');
			a("#top_nav_community_more").before('<div id="top_nav_community_more_view" class="more-view"><ul class="link-list clearfix"><li><a href="http://xinzhi.tianya.cn/" tystat="新版顶导航/分社区/更多/新知">新知</a></li><li><a href="http://baby.tianya.cn/" _tystat="新版顶导航/分社区/更多/亲子">亲子</a></li><li><a href="http://yuqing.tianya.cn/" _tystat="新版顶导航/分社区/更多/舆情">舆情</a></li><li><a href="http://gongyi.tianya.cn/" _tystat="新版顶导航/分社区/更多/公益">公益</a></li><li><a href="http://star.tianya.cn/" _tystat="新版顶导航/分社区/更多/星工场">星工场</a></li><li><a href="http://media.tianya.cn" _tystat="新版顶导航/分社区/更多/传媒">传媒</a></li><li><a href="http://2000.bbs.tianya.cn/djmanage/djpage.asp?djid=12237" _tystat="新版顶导航/分社区/更多/换礼">换礼</a></li><li><a href="http://ebook.tianya.cn" _tystat="新版顶导航/分社区/更多/读书">读书</a></li></ul></div>');
			d = ['<div id="top_nav_city_all_view" class="more-view"><div id="top_nav_city_item"><div class="clearfix"><dl class="link-list3"><dt><strong></strong>[ <a class="js-bbsCityBack" href="javascript:void(0);">返回查看全部地区</a> ]</dt></dl></div></div><div id="top_nav_city_list"><ul class="link-list2 clearfix">', '<li class="loading"><img src="' + TY_lite_url + '/images/loading1.gif" align="absmiddle"> 正在加载...</li>', "</ul></div></div>"].join("");
			a("#top_nav_city_all").before(d);
			this.addIe6IframeHtml();
			this.eventBind();
			h || y.msgData()
		},
		addLoginStatusHtml: function() {
			var d = [];
			1 == c.loginStatus ? (d = ['<li class="top-nav-menu-li"><a href="http://www.tianya.cn/' + c.userId + '" appstr="mypage"  _checklocation="1" _tystat="新版顶导航/用户名">' + c.userName + "</a></li>", !h ? '<li class="top-nav-menu-li"><span id="top_nav_message" class="top-ico-bg">消息<strong></strong ></span></li>': "", '<li class="top-nav-menu-li top-nav-menu-li-other"><span id="top_nav_set" class="top-ico-bg2"></span></li>'], a("#top_nav #top_user_menu .top-nav-menu-list").append(d.join("")),
			 d = [
			 '<div id="top_nav_set_view" class="more-view"><ul class="link-list clearfix"><li><a href="http://www.tianya.cn/set/" _tystat="新版顶导航/设置">设置</a></li>',
			 '<li><a href="http://www.tianya.cn/' + c.userId + '/profile" _tystat="新版顶导航/个人主页">个人主页</a></li>', 
			 '<li><a href="http://www.tianya.cn/user/" _tystat="新版顶导航/关系中心">关系中心</a></li><li><a id="js_relogin" href="javascript:void(0);" _tystat="新版顶导航/更换账号">更换账号</a></li>', 
			 '<li><a href="logout?returnURL=' + encodeURIComponent(document.location.href)+'" _tystat="新版顶导航/退出">退出</a></li>', 
			 "</ul></div>"].join(""), a("#top_nav_set").before(d), h || (d = ['<div id="top_nav_message_view" class="more-view"><ul class="link-list clearfix"><li><a href="http://www.tianya.cn/message/user" target="_blank" id="top_nav_msg_userCount" _tystat="新版顶导航/消息/用户消息">用户消息<span>（0）</span></a></li>', 
			 '<li><a href="' + b + 'my_collect.jsp" target="_blank" id="top_nav_msg_atMeCount" _tystat="新版顶导航/消息/收藏更新">收藏更新<span>（0）</span></a></li>', 
			 '<li><a href="http://www.tianya.cn/user/fans" target="_blank" id="top_nav_msg_fanCount" _tystat="新版顶导航/消息/查看粉丝">查看粉丝<span>（0）</span></a></li><li><a href="http://www.tianya.cn/t/reply" target="_blank" id="top_nav_msg_replyCount" _tystat="新版顶导航/消息/查看评论">查看评论<span>（0）</span></a></li><li><a href="http://www.tianya.cn/t/atme" target="_blank" id="top_nav_msg_shareCount" _tystat="新版顶导航/消息/查看@我">查看@我<span>（0）</span></a></li><li><a href="http://www.tianya.cn/user/request"  target="_blank"id="top_nav_msg_requestCount" _tystat="新版顶导航/消息/好友申请">好友申请<span>（0）</span></a></li><li><a href="http://www.tianya.cn/message/sys" target="_blank" id="top_nav_msg_sysCount" _tystat="新版顶导航/消息/系统消息">系统消息<span>（0）</span></a></li></ul></div>'].join(""), a("#top_nav_message").before(d))) : (d = ['<li class="top-nav-menu-li"><a id="js_login" href="javascript:void(0);" rel="nofollow" _tystat="新版顶导航/登录">登录</a></li>', '<li class="top-nav-menu-li"><a href="regiest.htm?sourceURL=' + encodeURIComponent(window.location.href) + '" target="_blank" rel="nofollow" _tystat="新版顶导航/注册">注册</a></li>'], a("#top_nav #top_user_menu .top-nav-menu-list").append(d.join("")))
		},
		addIe6IframeHtml: function() {
			m && (l("#top_nav_menu_more_view"), l("#top_search_type"), l("#top_nav_community_more_view"), l("#top_nav_city_all_view"), 1 == c.loginStatus && (l("#top_nav_set_view"), l("#top_nav_message_view")))
		},
		eventBind: function() {
			p.showfloat({
				obj: "#top_nav_menu_more",
				view: "#top_nav_menu_more_view",
				verticalAdjust: 6,
				levelAdjust: -9
			});
			p.showfloat({
				obj: "#top_nav_set",
				view: "#top_nav_set_view",
				directionLeft: !0,
				verticalAdjust: -1
			});
			h || (p.showfloat({
				obj: "#top_nav_message",
				view: "#top_nav_message_view",
				verticalAdjust: 6,
				levelAdjust: -9
			}), p.deleteMsgData({
				itemName: "fC",
				o_trigger: "#top_nav_msg_fanCount",
				iceName: "messagecount.ice.updatefan"
			}), p.deleteMsgData({
				itemName: "ryC",
				o_trigger: "#top_nav_msg_replyCount",
				iceName: "messagecount.ice.updatereply"
			}), p.deleteMsgData({
				itemName: "seC",
				o_trigger: "#top_navmsg_shareCount",
				iceName: "messagecount.ice.updateshare"
			}), p.deleteMsgData({
				itemName: "rtC",
				o_trigger: "#top_nav_msg_requestCount",
				iceName: "messagecount.ice.updaterequest"
			}), p.deleteMsgData({
				itemName: "uC",
				o_trigger: "#top_nav_msg_userCount",
				iceName: "messagecount.ice.updateusercount"
			}), p.deleteMsgData({
				itemName: "ssC",
				o_trigger: "#top_nav_msg_sysCount",
				iceName: "messagecount.ice.updatesyscount"
			}), p.deleteMsgData({
				itemName: "amC",
				o_trigger: "#top_nav_msg_atMeCount",
				iceName: "messagecount.ice.updateatme"
			}));
			p.showfloat({
				obj: "#top_nav_community_more",
				view: "#top_nav_community_more_view",
				verticalAdjust: 6,
				levelAdjust: -9
			});
			p.showfloat({
				obj: "#top_nav_city_all",
				view: "#top_nav_city_all_view",
				directionLeft: !0,
				verticalAdjust: 6,
				cution: function() {
					"null" == a(this.obj).attr("js-data") && y.bbsCityList(this)
				}
			});
			p.searchHint({
				form: "#top_search_form",
				input: "#top_search_key",
				view: "#top_search_type"
			});
			a("#js_login,#js_relogin").bind("click",
			function() {
				TY.loginAction()
			});
			this.checkLocation();
			a("a[_tystat]", this.top_id).live("click",
			function(b) {
				"function" == typeof clickPartLink && clickPartLink(b, "stat", a(this).attr("_tystat"))
			});
			a(this.top_id).show()
		},
		checkLocation: function() {
			var b = document.location.href,
			c = a("a[_checklocation]", this.top_id),
			d = !1,
			g = function(b) {
				a(b).addClass(z.sel_class);
				d = !0;
				return ! 1
			};
			d || c.each(function() {
				if ("undefined" != typeof a(this).attr("href")) {
					var c = a(this).attr("href");
					if (0 == b.indexOf(c)) return g(this)
				}
			});
			d || c.each(function() {
				if ("undefined" != typeof a(this).attr("appstr")) for (var b = a(this).attr("appstr").split("|"), c = 0; c < b.length; c++) if (z.app_str.length && b[c] == z.app_str) return g(this)
			});
			d || c.each(function() {
				if ("undefined" != typeof a(this).attr("appstr")) for (var c = a(this).attr("appstr").split("|"), d = 0; d < c.length; d++) if (0 == b.indexOf("http://" + c[d] + ".tianya.cn/") || 0 == b.indexOf("http://www.tianya.cn/" + c[d] + "/")) return g(this)
			});
			this.resetSearchType()
		},
		resetSearchType: function() {
			if ( - 1 < window.location.href.indexOf("http://www.tianya.cn/blog/") || -1 < window.location.href.indexOf("http://blog.tianya.cn/")) g = 1;
			a("a#search-text").html("含有<strong>?</strong>的" + d[g][0] + "&gt;&gt;");
			a("a#search-user").html("名为<strong>?</strong>的" + d[g][2] + "&gt;&gt;")
		},
		dealHtml: function(b) {
			this.top_id = "#top_nav";
			this.app_str = b.app_str || "";
			this.sel_class = b.sel_class || this.sel_class;
			b.topNavWidth && a(this.top_id).closest("#top_nav_wrap").css({
				width: b.topNavWidth
			});
			this.addLoginStatusHtml();
			this.addIe6IframeHtml();
			this.eventBind();
			h || y.msgData()
		}
	},
	A = {
		resetMsgItemData: function(b, c) {
			var d = B.readCookie();
			if (d) d = d[0];
			else return ! 1;
			if ("ALL" == b) if (0 < d.t) d.t = d.fC = d.ryC = d.seC = d.rtC = d.uC = d.ssC = d.amC = 0,
			a("#bottom_message_view #bottom_msg_userCount").attr("href", "http://www.tianya.cn/message/user"),
			a("#bottom_message_view #bottom_msg_sysCount").attr("href", "http://www.tianya.cn/message/sys");
			else return ! 1;
			else if (0 < d[b]) c ? d[b] += c: (d[b] = 0, "uC" == b && a("#bottom_message_view #bottom_msg_userCount").attr("href", "http://www.tianya.cn/message/user"), "ssC" == b && a("#bottom_message_view #bottom_msg_sysCount").attr("href", "http://www.tianya.cn/message/sys")),
			d.t = d.fC + d.ryC + d.seC + d.rtC + d.uC + d.ssC + d.amC;
			else return ! 1;
			B.writeCookie(d);
			D.msgData(d);
			return ! 0
		},
		checkDelMsg: function() {
			var a = TY.param.getParam("cleanMsg");
			a && ("fC" == a || "ryC" == a || "seC" == a || "rtC" == a || "uC" == a || "ssC" == a || "amC" == a) && this.resetMsgItemData(a)
		}
	},
	y = {
		dateStr: 1,
		msgCookieName: "ty_msg",
		AppData: function(b) {
			a.getScript("http://apps.tianya.cn/api/user/getuserapp.php?var=userApp&limit=3",
			function() {
				var a = window.userApp;
				a && a.result && a.data && 0 < a.data.length && D.AppData(a.data, b)
			})
		},
		BizData: function(b) {
			a.ajax({
				url: "http://static.tianyaui.com/global/data/nav/focusxin.tianya.cn/tianyabottom/index.shtml?_=" + Math.random(),
				dataType: "script",
				type: "GET",
				scriptCharset: "utf-8",
				success: function() {
					var a = window.bottomBizArt;
					a && 0 < a.length && D.BizData(a, b)
				}
			})
		},
		traceData: function(b) {
			a.getScript("http://apps.tianya.cn/api/inner/gethistory.php?var=userTrace",
			function() {
				var c = window.userTrace,
				d = {};
				if (c && c.result && c.data && 0 < c.data.length) {
					for (var c = c.data,
					g = 0; g < c.length - 1; g++) for (var h = g + 1; h < c.length; h++) c[g].time < c[h].time && (d = c[g], c[g] = c[h], c[h] = d);
					D.traceData(c, b)
				} else a("ul", b.view).html('<li><a href="javascript:void(0);">未查询到相关记录！</a></li>'),
				p.setShowFloatPosition(b)
			})
		},
		hotArtData: function() {
			var a = new Date,
			a = a.getFullYear().toString() + (a.getMonth() + 1).toString() + a.getDate().toString() + a.getHours().toString(),
			b = document.getElementsByTagName("HEAD").item(0),
			c = document.createElement("script");
			c.type = "text/javascript";
			c.charset = "utf-8";
			c.src = "http://static.tianyaui.com/global/data/nav/focusxin.tianya.cn/dibu/index.shtml?v=" + a;
			b.appendChild(c);
			var d = 0,
			g = function() {
				var a = window.bottomHotArt;
				a ? 0 < a.length && D.hotArtData(a) : 120 > d && (d++, setTimeout(g, 500))
			};
			g()
		},
		chatData: function(b) {
			a.getScript("http://www.tianya.cn/api/tw?" + a.param({
				"var": "friends",
				method: "chatUser.ice.getChatUser"
			}),
			function() {
				var c = window.friends;
				c && 1 == c.success && c.data ? D.chatData(c.data.list, b) : "-4" == c.code && a("#results-hint", b.view).remove()
			})
		},
		chatMsgNotice: function() {
			v && clearTimeout(v);
			if ("null" != a("#bottom_chat").attr("js-data") && 0 == a("#my-friend li").size()) return ! 1;
			C.checkAccountStatus();
			a.getScript("http://www.tianya.cn/api/msg?" + a.param({
				"var": "msgNotice",
				method: "messageNotice.getMessageNotice"
			}),
			function() {
				var a = window.msgNotice;
				a && 1 == a.success && a.data && D.chatMsgNotice(a.data)
			})
		},
		msgData: function() {
			if (c.showUserMenu) {
				var a = B.readCookie();
				a && parseInt((new Date).getTime()) < parseInt(a[0].tS) + 6E4 && a[0].uId == c.userId ? D.msgData(a[0]) : this.upMsgData()
			}
		},
		upMsgData: function() {
			a.getScript("http://www.tianya.cn/api/tw?" + a.param({
				"var": "msgObj",
				method: "messagecount.ice.select",
				"params.userId": c.userId
			}),
			function() {
				var a = window.msgObj;
				if (a && a.success && a.data) {
					var b = {
						tS: (new Date).getTime(),
						uId: c.userId,
						t: "undefined" == typeof a.data.msgNum ? 0 : +a.data.msgNum,
						fC: "undefined" == typeof a.data.fanCount ? 0 : +a.data.fanCount,
						ryC: "undefined" == typeof a.data.replyCount ? 0 : +a.data.replyCount,
						seC: "undefined" == typeof a.data.shareCount ? 0 : +a.data.shareCount,
						rtC: "undefined" == typeof a.data.requestCount ? 0 : +a.data.requestCount,
						uC: "undefined" == typeof a.data.userCount ? 0 : +a.data.userCount,
						ssC: "undefined" == typeof a.data.sysCount ? 0 : +a.data.sysCount,
						amC: "undefined" == typeof a.data.atMeCount ? 0 : +a.data.atMeCount
					},
					d = B.readCookie();
					B.writeCookie(b);
					D.msgData(b); + a.data.voice || D.checkNewMsg(b, d)
				} else setTimeout(y.upMsgData, 6E4)
			})
		},
		bbsCityList: function(b) {
			a.ajax({
				url: "http://static.tianyaui.com/focus/js/cityitemselect.js",
				dataType: "script",
				type: "GET",
				scriptCharset: "utf-8",
				success: function() {
					window._cityItemSelectDataSet && D.bbsCityList(window._cityItemSelectDataSet, b)
				}
			})
		},
		start: function() {
			this.msgData();
			this.hotArtData()
		}
	},
	D = {
		AppData: function(b, c) {
			for (var d = [], g = 0; g < b.length && 3 > g; g++) d.push('<dd><a href="http://apps.tianya.cn/app.php?appid=' + b[g].appid + '" title="' + b[g].appname + '" target="_blank" _tystat="新版底导航/应用">' + getStrByLen(b[g].appname, 12, 0) + "</a></dd>");
			a("#bottom_my_app_list", c.view).append(d.join(""));
			p.setShowFloatPosition(c);
			a(c.obj).removeAttr("js-data")
		},
		BizData: function(b, c) {
			for (var d = [], g = 0; g < b.length; g++) d.push('<dd><a href="' + b[g].url + '" target="_blank">' + getStrByLen(b[g].title, 12, 0) + "</a></dd>");
			a(".js-biz-data", c.view).append(d.join("")).closest("li").show();
			p.setShowFloatPosition(c);
			a(c.obj).removeAttr("biz-data")
		},
		traceData: function(b, c) {
			for (var d = [], g = 0; g < b.length && 10 > g; g++) d.push('<li><a href="' + b[g].link + '" title="' + b[g].title + '" target="_blank" _tystat="新版底导航/足迹">' + getStrByLen(b[g].title, 30, 0) + "</a></li>");
			a("ul", c.view).html(d.join(""));
			p.setShowFloatPosition(c);
			a(c.obj).removeAttr("js-data")
		},
		hotArtData: function(b) {
			var c = [];
			c.push('<ul class="art-lite">');
			for (var d = 0; d < b.length && 20 > d; d++) c.push('<li><a href="' + b[d].url + '" title="' + b[d].title + '" target="_blank" _tystat="新版底导航/热帖">【热帖】' + getStrByLen(b[d].title, 32, 0) + "</a></li>");
			c.push("</ul>");
			a("li.art-view", O.self).html(c.join(""));
			p.bottomHotScroll()
		},
		msgData: function(b) {
			if ("undefined" == typeof b) return ! 1;
			var d = "undefined" == typeof b.t ? 0 : b.t;
			0 < parseInt(d) ? (999 < parseInt(d) && (d = "999+"), d = "(" + d + ")", a("a.js-gnore-msg").show()) : (d = "", a("a.js-gnore-msg").hide());
			var g = "",
			g = h ? "bottom": "top_nav";
			a("#" + g + "_message").find("strong").html(d);
			a("#" + g + "_msg_replyCount").find("span").html("（" + b.ryC + "）");
			a("#" + g + "_msg_fanCount").find("span").html("（" + b.fC + "）");
			a("#" + g + "_msg_shareCount").find("span").html("（" + b.seC + "）");
			a("#" + g + "_msg_userCount").find("span").html("（" + b.uC + "）");
			a("#" + g + "_msg_sysCount").find("span").html("（" + b.ssC + "）");
			a("#" + g + "_msg_requestCount").find("span").html("（" + b.rtC + "）");
			a("#" + g + "_msg_atMeCount").find("span").html("（" + b.amC + "）");
			userCount = "undefined" == typeof b.uC ? 0 : b.uC;
			sysCount = "undefined" == typeof b.ssC ? 0 : b.ssC;
			0 < +userCount && a("#" + g + "_message_view #" + g + "_msg_userCount").attr("href", "http://www.tianya.cn/message/unread?utype=1");
			0 < +sysCount && a("#" + g + "_message_view #" + g + "_msg_sysCount").attr("href", "http://www.tianya.cn/message/unread?utype=2"); ! n.msg && d.length ? p.msgFlicker("#" + g + "_message strong", 700, "msg") : n.msg && !d.length && p.closeFlicker("msg");
			c.showUserMenu && setTimeout(function() {
				y.msgData()
			},
			6E4)
		},
		checkNewMsg: function(b, c) {
			var d = !1;
			c ? (c = c[0], b.uC > c.uC && (d = !0)) : 0 < b.uC && (d = !0);
			d && (a("#newNsgSound").remove(), a.isReady ? a("body").append('<embed id="newNsgSound" src="' + TY_lite_url + '/sound/tianyamsg.swf" hidden="true" width="0" height="0" loop="false" autostart="true">') : a(document).ready(function() {
				a("body").append('<embed id="newNsgSound" src="' + TY_lite_url + '/sound/tianyamsg.swf" hidden="true" width="0" height="0" loop="false" autostart="true">')
			}))
		},
		chatData: function(b, c) {
			if (0 < b.length) {
				a("#results-hint", c.view).remove();
				y.chatMsgNotice();
				for (var d = [], g = 0; g < b.length; g++) b[g].onlineStatus || (d.push(b[g]), b.splice(g, 1), g--);
				b = b.concat(d);
				domHtml = [];
				for (g = 0; g < b.length; g++) d = b[g].userId + "," + b[g].userName + "," + b[g].py + "," + b[g].dpy,
				domHtml.push('<li _searchKey="' + d + '"><a href="javascript:void(0);" class="' + (b[g].onlineStatus ? "status-online": "off-line") + '" title="' + b[g].userName + '" _tystat="新版底导航/聊天" _userId=' + b[g].userId + ' _userName="' + b[g].userName + '" _notice="0">' + b[g].userName + "<strong>(0)</strong></a></li>");
				a("ul#my-friend", c.view).prepend(domHtml.join(""));
				C.init(c)
			}
			p.setShowFloatPosition(c);
			a(c.obj).removeAttr("js-data")
		},
		chatMsgNotice: function(b) {
			function c(b) {
				var d = a(b);
				if (d.size()) for (var g = 0; g < d.size() - 1; g++) for (j = g + 1; j < d.size(); j++) if (d.eq(j).attr("_notice") > d.eq(g).attr("_notice")) {
					d.eq(j).parent().insertBefore(d.eq(g).parent());
					d = a(b);
					g--;
					break
				}
			}
			var d = a("#bottom_chat"),
			g = 0,
			h = 0;
			0 < b.total ? (d.find("strong").html("(" + (99 < b.total ? "99+": b.total) + ")"), a.each(b,
			function(c) {
				var d = a('#my-friend li a[_userid="' + c + '"]');
				0 < d.size() && (g += b[c], b[c] = 99 < b[c] ? "99+": b[c], d.attr("_notice", b[c]).find("strong").html("(" + b[c] + ")"))
			}), h = b.total - g, h = 99 < h ? "99+": h, a("#my-friend li a[_other]").attr("_notice", h).find("strong").html("(" + h + ")"), n.msgNotice || p.msgFlicker("#bottom_chat strong", 700, "msgNotice"), c('#my-friend li a[_userid][class="status-online"]'), c('#my-friend li a[_userid][class="off-line"]')) : (d.find("strong").html(""), a("#my-friend li a[_userid]").attr("_notice", 0).find("strong").html("(0)"), a("#my-friend li a[_other]").attr("_notice", 0).find("strong").html("(0)"), n.msgNotice && p.closeFlicker("msgNotice"));
			r = "1" != a("#bottom_chat").attr("showed") ? 6E4: 1E4;
			v = setTimeout(function() {
				y.chatMsgNotice()
			},
			r)
		},
		bbsCityList: function(b, c) {
			if (b = b || window._cityItemSelectDataSet || null) if (1 > b.length) a("#top_nav_city_list .loading").html("数据加载发生错误～！");
			else {
				var d = a("#top_nav_city_list"),
				g = a("#top_nav_city_item"),
				l = [];
				l.push('<ul class="link-list2 clearfix">');
				for (i = 0; i < b.length; i++) 36 > b[i].id && l.push('<li><a href="javascript:void(0);" class="js-bbsSelCity" _cityid="' + b[i].id + '">' + b[i].c1 + "</a></li>");
				l.push("</ul>");
				d.html(l.join(""));
				a("a.js-bbsSelCity", c.view).bind("click",
				function() {
					D.bbsCityItemList(a(this).attr("_cityid"), c);
					p.setJsiIframeHeight(a(c.view))
				});
				a("a.js-bbsCityBack", c.view).bind("click",
				function() {
					g.hide();
					d.show();
					p.setJsiIframeHeight(a(c.view))
				});
				a(c.obj).removeAttr("js-data");
				g.hide();
				d.show();
				l = d.height();
				h ? g.css({
					"min-height": l
				}) : g.css({
					height: l
				});
				p.setJsiIframeHeight(a(c.view))
			}
		},
		bbsCityItemList: function(b) {
			if ("undefined" != typeof window._cityItemSelectDataSet) {
				for (var c = window._cityItemSelectDataSet,
				d = [], g = null, h = a("#top_nav_city_item"), l = 0; l < c.length; l++) if (c[l].id == b) {
					c = c[l];
					break
				}
				for (var g = c.c2,
				b = "",
				l = 0; l < g.length; l++) b = 0 < parseInt(g[l].v) ? "http://bbs.tianya.cn/list-" + g[l].v + "-1.shtml": g[l].v,
				d.push('<dd><a href="' + b + '">' + g[l].n + "</a></dd>");
				a("dt strong", h).html(c.c1);
				a("dt", h).siblings("dd").remove().end().after(d.join(""));
				a("#top_nav_city_item,#top_nav_city_list").toggle()
			}
		}
	},
	B = {
		readCookie: function() {
			var a = __global.getCookie(y.msgCookieName);
			if (!a) return null;
			if ( - 1 === a.indexOf("_")) try {
				return eval(a)
			} catch(b) {
				return null
			} else return a = a.split("_"),
			[{
				tS: +a[0] || 0,
				uId: +a[1] || 0,
				t: +a[2] || 0,
				fC: +a[3] || 0,
				ryC: +a[4] || 0,
				seC: +a[5] || 0,
				rtC: +a[6] || 0,
				uC: +a[7] || 0,
				ssC: +a[8] || 0,
				amC: +a[9] || 0
			}]
		},
		writeCookie: function(a) {
			var b = [];
			b.push((new Date).getTime());
			b.push(a.uId || __global.getUserId());
			b.push(a.t || 0);
			b.push(a.fC || 0);
			b.push(a.ryC || 0);
			b.push(a.seC || 0);
			b.push(a.rtC || 0);
			b.push(a.uC || 0);
			b.push(a.ssC || 0);
			b.push(a.amC || 0);
			__global.setCookieNoEscape(y.msgCookieName, b.join("_"), y.dateStr, "/", ".tianya.cn", !1)
		}
	},
	C = {
		config: null,
		otherSide: {
			name: null,
			id: null,
			status: null
		},
		getDataParam: {
			lastTime: 0,
			updataInterval: 0,
			updataTimeOut: null,
			pveGetDataTime: null,
			getMsgTimeOut: null,
			resetObj: !1,
			closeView: !1
		},
		postDataParam: {
			ready: !0,
			maxLength: 500
		},
		getTempLate: function() {
			return ['<div class="bottom-chat-view"><div class="bottom-sub-nav-hd">', '<span class="js-status ' + (this.otherSide.status ? "status-online": "status-offline") + '"></span><h4 class="js-name">' + this.otherSide.name + "</h4>", '<span class="btn-close js-dialog-close"></span></div><div class="bottom-chat-main"><div class="bottom-chat-msg"></div><div class="bottom-chat-post clearfix"><div class="bottom-chat-post-input clearfix"><textarea id="bottom_msg_post" name="" class="bottom-msg-input"></textarea></div></div><div class="bottom-chat-cation clearfix"><span class="bottom-chat-cation-btn">发送</span>', '<span class="bottom-chat-cation-hint">还可输入 ' + this.postDataParam.maxLength + " 字</span>", "</div></div></div>"].join("")
		},
		showChatView: function() {
			var b = this;
			0 == a(".bottom-chat .bottom-chat-view", this.config.view).size() ? (this.getDataParam.closeView && (this.getDataParam.resetObj = !0, this.getDataParam.closeView = !1), a(this.config.view).addClass("status-dialog"), a(".bottom-chat", this.config.view).prepend(this.getTempLate()), p.setShowFloatPosition(this.config)) : (a(".bottom-chat-view .js-status", this.config.view).removeClass("status-online").removeClass("status-offline").addClass(function() {
				return b.otherSide.status ? "status-online": "status-offline"
			}), a(".bottom-chat-view .js-name", this.config.view).html(this.otherSide.name), a(".bottom-chat-main .bottom-chat-msg", this.config.view).html("正在努力加载数据中...."), a(".bottom-chat-main #bottom_msg_post", this.config.view).val(""), this.getDataParam.resetObj = !0);
			this.getDataParam.lastTime = 0;
			this.getDataParam.resetObj ? (clearTimeout(this.getDataParam.getMsgTimeOut), this.getDataParam.getMsgTimeOut = setTimeout(function() {
				b.getMsg()
			},
			1200)) : this.getMsg()
		},
		closeChatView: function() {
			this.getDataParam.closeView = !0;
			this.getDataParam.resetObj = !1;
			var b = a(".bottom-chat .bottom-chat-view", this.config.view).hide();
			a(this.config.view).removeClass("status-dialog");
			p.setShowFloatPosition(this.config);
			a("#my-friend a.status-sel", this.config.view).removeClass("status-sel");
			if (this.otherSide.id) with(this.otherSide) name = id = status = null;
			setTimeout(function() {
				b.remove()
			},
			0)
		},
		getMsg: function() {
			var b = this;
			if (!b.otherSide.id) return ! 1;
			var d = b.otherSide.id;
			setTimeout(function() {
				a.getScript("http://chat.tianya.cn/api/chat?" + a.param({
					method: "gm",
					"var": "chatMsgList",
					"params.userId": b.otherSide.id,
					"params.lastTime": b.getDataParam.lastTime
				}),
				function() {
					b.checkAccountStatus();
					var g = !0,
					h = window.chatMsgList;
					b.getDataParam.getMsgTimeOut = null;
					if (h.success) {
						if (b.getDataParam.closeView) return g = !1,
						b.getDataParam.closeView = !1;
						h = h.data.items;
						b.getDataParam.updataInterval = 500;
						var l = jQuery(".bottom-chat-view .bottom-chat-msg", b.config.view);
						"正在努力加载数据中...." == l.html() && l.html("");
						if (h && 0 < h.length) {
							for (var m = [], n = 0; n < h.length; n++) {
								var p = h[n];
								m.push('<div class="bottom-msg-info ' + (p.fromUserId == c.userId ? "source-self": "source-otherSide") + ' clearfix">');
								m.push('<p class="bottom-msg-date">' + (new Date(p.time)).format("yyyy-mm-dd HH:MM:ss") + "</p>");
								m.push('<div class="bottom-msg-content clearfix"><p>' + p.content + "</p></div>");
								m.push('<div class="bottom-msg-arrow clearfix"></div>');
								m.push("</div>");
								b.getDataParam.lastTime = p.time
							}
							l.append(m.join(""));
							l.scrollTop(9999999);
							b.clearMsgNotice()
						} else 0 == b.getDataParam.lastTime && (b.getDataParam.updataInterval = 5E3)
					} else g = !1,
					"ConnectionExpired" == h.code && (b.getDataParam.resetObj ? b.getDataParam.resetObj = !1 : b.getDataParam.closeView ? (b.getDataParam.closeView = !1, b.getDataParam.resetObj = !1) : d == b.otherSide.id && (b.closeChatView(), a(b.config.obj).triggerHandler(b.config.event)));
					if (g) if ("1" != a(b.config.obj).attr("showed")) a(b.config.obj).one(b.config.event,
					function() {
						b.getMsg()
					});
					else b.getDataParam.updataTimeOut = setTimeout(function() {
						b.getMsg()
					},
					b.getDataParam.updataInterval)
				})
			},
			15)
		},
		postMsg: function() {
			var b = a("#bottom_msg_post", this.config.view).val().trim();
			if (C.postDataParam.ready && this.checkMsgLength(b)) {
				C.postDataParam.ready = !1;
				var c = this;
				setTimeout(function() {
					a.getScript("http://chat.tianya.cn/api/chat?" + a.param({
						method: "pm",
						"var": "postMsg",
						"params.userId": c.otherSide.id,
						"params.content": b
					}),
					function() {
						postMsg.success ? a("#bottom_msg_post", c.config.view).val("") : alert(postMsg.message);
						C.postDataParam.ready = !0
					})
				},
				15)
			}
		},
		clearMsgNotice: function() {
			var b = this;
			setTimeout(function() {
				a.getScript("http://www.tianya.cn/api/msg?" + a.param({
					method: "messageNotice.clearMessageNotice",
					"var": "clearMsgNotice",
					"params.userId": b.otherSide.id
				}),
				function() {
					clearMsgNotice.success || alert(clearMsgNotice.message)
				})
			},
			15)
		},
		checkAccountStatus: function(b) {
			var d = this.config || this;
			if (!__global.isOnline() || c.userId != __global.getUserId()) if (d && (this.closeChatView(), a(".friend-list-view", d.view).html('<div id="results-hint">' + accountWarn + "</div>"), p.setShowFloatPosition(d)), !b) return ! 1
		},
		checkMsgLength: function(b) {
			if (! (0 < b.length)) return ! 1;
			var c = this.postDataParam.maxLength - b.length;
			if (b.length > this.postDataParam.maxLength) return a(".bottom-chat-cation-hint", this.config.view).html("己超出 " + c + " 字"),
			!1;
			a(".bottom-chat-cation-hint", this.config.view).html("还可输入 " + c + " 字");
			return ! 0
		},
		eventBind: function() {
			var b = this;
			a("#friend_search_key", this.config.view).bind("keyup",
			function() {
				var c = a(this).val().trim(),
				d = a("#bottom_chat_view #my-friend li");
				"" != c ? a("a.bottom-view-clear", b.config.view).show() : a("a.bottom-view-clear", b.config.view).hide();
				0 < d.size() && (d.hide(), a("#my-friend li[_searchkey*=" + c + "]", b.config.view).show())
			}).bind("focus",
			function() {
				a(this).val().trim() == a(this).attr("_hint") && a(this).val("")
			}).bind("blur",
			function() {
				"" == a(this).val().trim() && a(this).val(a(this).attr("_hint"))
			});
			a("a.bottom-view-clear", this.config.view).bind("click",
			function() {
				a("#friend_search_key", b.config.view).val("").triggerHandler("keyup");
				a("#friend_search_key", b.config.view).triggerHandler("blur")
			});
			a("#my-friend li a[_userid]", this.config.view).bind("click",
			function() {
				var c = a(this);
				if (c.hasClass("status-sel")) b.closeChatView();
				else {
					var d = 0;
					with(b.otherSide) name = c.attr("_username"),
					id = c.attr("_userid"),
					status = c.hasClass("status-online");
					d = c.attr("_notice");
					c.find("strong").attr("_notice", 0).html("(0)");
					0 < d && /\((.+)\)/gi.test(a("strong", b.config.obj).text()) && (c = +RegExp.$1 - d, 0 < c ? a("strong", b.config.obj).html("(" + c + ")") : a("strong", b.config.obj).html(""));
					b.showChatView();
					a("#my-friend li a", b.config.view).removeClass("status-sel");
					a(this).addClass("status-sel").siblings
				}
			});
			a(".js-dialog-close", this.config.view).live("click",
			function() {
				b.closeChatView()
			});
			a("#bottom_msg_post", this.config.view).live("keydown",
			function(a) {
				if (13 == a.keyCode) return C.postMsg(),
				!1
			}).live("keyup",
			function() {
				var c = a(this).val().trim();
				b.checkMsgLength(c)
			});
			a(".bottom-chat-cation-btn", this.config.view).live("click",
			function() {
				C.postMsg();
				a("#bottom_msg_post", b.config.view).focus()
			})
		},
		setConfig: function(a) {
			this.config = a
		},
		init: function() {
			this.eventBind()
		}
	},
	O = {
		wrapObj: null,
		self: null,
		createDom: function() {
			a("body").prepend('<div id="bottom_nav_wrap" style="display:none;"><div id="bottom_nav"></div></div>');
			this.wrapObj = a("#bottom_nav_wrap");
			this.self = a("#bottom_nav");
			var d = a("#bottom_nav"),
			g = __global.getUserCityName();
			null == g && (g = "城市", a.getScript("http://stat.tianya.cn/cityid.jsp",
			function() {
				null != __global.getUserCityName() && (g = __global.getUserCityName(), d.find("a.myCityName").html(g))
			}));
			var h = ['<div class="bottom-bg"><ul class="ul-nav"><li class="li-border-r li-user-name"><span id="bottom_username" class="b-username" biz-data="null" js-data="null">我的天涯</span></li><li class="li-border"><span id="bottom_trace" class="white" js-data="null"><span class="bottom-ico-bg bottom-ico-bg-3">足迹</span></span></li><li class="li-border-l"><a href="http://2000.bbs.tianya.cn/djmanage/djpage.asp?djid=12053" id="suning-logo" target="_blank" _tystat="新版底导航/广告"></a></li><li class="art-view"></li><li class="f-r li-border-l"><a href="javascript:scroll(0,0);" class="bottom-scroll-top" ></a></li><li class="f-r li-border"><span id="bottom_message" class="white"><span class="bottom-ico-bg bottom-ico-bg-6">消息<strong></strong ></span></span></li>', '<li class="f-r li-border-r"><a href="http://static.tianya.cn/city/cityJump.html" class="white myCityName" _tystat="新版底导航/城市">' + g + "</a></li>", "</ul></div>"].join("");
			d.append(h);
					h = [
			'<div id="bottom_username_view" class="more-view"><div class="bottom_username_view_wrap"><div class="bottom_username_subnav clearfix"><ul><li class="li-first"><dl class="clearfix">', 
			'<dt><a href="http://www.tianya.cn/' + c.userId + '">我的信息</a></dt>', 
			'<dd><a href="http://www.tianya.cn/' + c.userId + '/blog" target="_blank">我的帖子</a></dd>', 
			'<dd><a href="http://www.tianya.cn/' + c.userId + '/laiba" target="_blank">我的社团</a></dd>', 
			'<dd><a href="' + b + 'my_block.jsp" target="_blank">我的论坛</a></dd>', 
			'</dl></li></ul></div></div></div>'].join("");
			a("#bottom_username").before(h);
			l("#bottom_username_view");
			h = ['<div id="bottom_trace_view" class="more-view"><ul class="link-list clearfix">', '<li class="logoing"><img src="' + TY_lite_url + '/images/loading1.gif"></li>', "</ul></div>"].join("");
			a("#bottom_trace").before(h);
			l("#bottom_trace_view");
			h = ['<div id="bottom_message_view" class="more-view bottom-message-list"><div class="bottom-sub-nav-hd"><h4>消息</h4><a href="javascript:void(0);" class="a-gnore js-gnore-msg"></a><a href="http://www.tianya.cn/message/set" class="a-set" target="_blank"></a></div><ul class="link-list clearfix"><li><a href="http://www.tianya.cn/message/user" target="_blank" id="bottom_msg_userCount" _tystat="新版底导航/消息/用户消息">用户消息<span>（0）</span></a></li>', '<li><a href="' + b + 'my_collect.jsp" target="_blank" id="bottom_msg_atMeCount" _tystat="新版底导航/消息/收藏更新">收藏更新<span>（0）</span></a></li>', '<li><a href="http://www.tianya.cn/user/fans" target="_blank" id="bottom_msg_fanCount" _tystat="新版底导航/消息/查看粉丝">查看粉丝<span>（0）</span></a></li><li><a href="http://www.tianya.cn/t/reply" target="_blank" id="bottom_msg_replyCount" _tystat="新版底导航/消息/查看评论">查看评论<span>（0）</span></a></li><li><a href="http://www.tianya.cn/t/atme" target="_blank" id="bottom_msg_shareCount" _tystat="新版底导航/消息/查看@我">查看@我<span>（0）</span></a></li><li><a href="http://www.tianya.cn/user/request"  target="_blank"id="bottom_msg_requestCount" _tystat="新版底导航/消息/好友申请">好友申请<span>（0）</span></a></li><li><a href="http://www.tianya.cn/message/sys" target="_blank" id="bottom_msg_sysCount" _tystat="新版底导航/消息/系统消息">系统消息<span>（0）</span></a></li></ul></div>'].join("");
			a("#bottom_message").before(h);
			l("#bottom_message_view");
			this.reSetWidth();
			this.eventBind();
			y.start();
			this.wrapObj.show()
		},
		reSetWidth: function() {
			1255 < a(window).width() ? this.self.css({
				width: 1255
			}) : this.self.css({
				width: 1E3
			})
		},
		eventBind: function() {
			var b = this;
			a(window).bind("resize",
			function() {
				b.reSetWidth()
			});
			a(document).ready(function() {
				b.reSetWidth()
			});
			p.showfloat({
				obj: "#bottom_username",
				view: "#bottom_username_view",
				focusClass: "b-username-over",
				directionTop: !0,
				verticalAdjust: -2,
				cution: function() {
					if (!__global.isOnline()) return ! 1;
					a("#bottom_trace_hint").remove();
					"null" == a(this.obj).attr("js-data") && y.AppData(this);
					"null" == a(this.obj).attr("biz-data") && y.BizData(this)
				},
				render: function() {
					a(this.obj).bind("click",
					function() {
						if (!__global.isOnline()) return TY.loginAction(),
						!1;
						window.location = "http://www.tianya.cn/" + c.userId
					})
				}
			});
			p.showfloat({
				obj: "#bottom_trace",
				view: "#bottom_trace_view",
				event: "click",
				directionTop: !0,
				verticalAdjust: -2,
				cution: function() {
					if (__global.isOnline()) a("#bottom_trace_hint").remove();
					else return TY.loginAction(),
					!1;
					"null" == a(this.obj).attr("js-data") && y.traceData(this)
				}
			});
			setTimeout(function() {
				a("#bottom_trace_hint").remove()
			},
			15E3);
			p.showfloat({
				obj: "#bottom_message",
				view: "#bottom_message_view",
				event: "click",
				directionTop: !0,
				verticalAdjust: -2,
				autoClose: !1,
				cution: function() {
					c.loginStatus || TY.loginAction()
				}
			});
			p.deleteMsgData({
				itemName: "ALL",
				o_trigger: "#bottom_message_view .js-gnore-msg",
				iceName: "messagecount.ice.clrarallcount",
				precondition: function() {
					jQuery("#bottom_message").triggerHandler("click")
				}
			});
			p.deleteMsgData({
				itemName: "fC",
				o_trigger: "#bottom_msg_fanCount",
				iceName: "messagecount.ice.updatefan"
			});
			p.deleteMsgData({
				itemName: "ryC",
				o_trigger: "#bottom_msg_replyCount",
				iceName: "messagecount.ice.updatereply"
			});
			p.deleteMsgData({
				itemName: "seC",
				o_trigger: "#bottom_msg_shareCount",
				iceName: "messagecount.ice.updateshare"
			});
			p.deleteMsgData({
				itemName: "rtC",
				o_trigger: "#bottom_msg_requestCount",
				iceName: "messagecount.ice.updaterequest"
			});
			p.deleteMsgData({
				itemName: "uC",
				o_trigger: "#bottom_msg_userCount",
				iceName: "messagecount.ice.updateusercount"
			});
			p.deleteMsgData({
				itemName: "ssC",
				o_trigger: "#bottom_msg_sysCount",
				iceName: "messagecount.ice.updatesyscount"
			});
			p.deleteMsgData({
				itemName: "amC",
				o_trigger: "#bottom_msg_atMeCount",
				iceName: "messagecount.ice.updateatme"
			});
			a("a[_tystat]", this.self).live("click",
			function(b) {
				"function" == typeof clickPartLink && clickPartLink(b, "stat", a(this).attr("_tystat"))
			})
		}
	};
	TY.ui.nav = {
		settings: {
			 
			showTopNav: !0,
			topNavFromHtml: !1,
			showBottomNav: !0
		},
		init: function(b) {
			this.settings = a.extend({},
			this.settings, b || {});
			c.checkStatus();
			this.settings.showTopNav ? (z.createDom(this.settings), h || A.checkDelMsg()) : this.settings.topNavFromHtml && 0 < a("#top_nav").size() && (z.dealHtml(this.settings), h || A.checkDelMsg());
			this.settings.showBottomNav && h && (O.createDom(), A.checkDelMsg())
		},
		initScreen: function() {},
		initNavData: function(a) {
			A.resetMsgItemData(a)
		}
	}
})(jQuery);