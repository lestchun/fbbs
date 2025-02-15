var _stat_cookieDomain = ".tianya.cn";
var _stat_serverAddr = "http://stat.tianya.cn";
var _stat_cid = "0";
var _stat_guid = "";
var _stat_userid = "";
function clickPartLink(g, h, b) {
	_stat_ifClickLink = true;
	var c = g || window.event;
	var k = c.target || c.srcElement;
	while (k.tagName != "A") {
		k = k.parentNode;
		if (!k) {
			return false
		}
	}
	var f = window.location.href;
	var a = (k) ? k.href: "";
	if (!a || a == "") {
		return false
	}
	var j = _getSrvUrl(h) + "?fromURL=" + escape(f) + "&clickURL=" + escape(a) + "&cityId=" + _stat_cid + "&pv=0&columnName=" + encodeURIComponent(b) + "&guid=" + _stat_guid + "&userid=" + _stat_userid + "&r=" + Math.random();
	try {
		_sendRequest(j);
		if (_isUniqueUser()) {
			_saveNewUserInfo()
		}
	} catch(d) {}
}
function _autoStatRequest(d, b) {
	var g = document.referrer;
	var f = window.location.href;
	if (!f || f == "") {
		return false
	}
	if (!g || g == "") {
		g = f
	}
	var a = _getSrvUrl(d) + "?fromURL=" + escape(g) + "&clickURL=" + escape(f) + "&cityId=" + _stat_cid + "&pv=" + b + "&guid=" + _stat_guid + "&userid=" + _stat_userid + "&r=" + Math.random();
	try {
		_sendRequest(a);
		if (_isUniqueUser()) {
			_saveNewUserInfo()
		}
	} catch(c) {}
}
function _saveNewUserInfo() {
	var a = _stat_serverAddr + "/guid.jsp?guid=" + _stat_guid + "&browser=" + __client.browser + " " + __client.version + "&os=" + __client.os + "&screenRate=" + __client.screenRate + "&cityId=" + _stat_cid + "&r=" + Math.random();
	_sendRequest(a)
}
function _sendRequest(b) {
	var a = document.createElement("img");
	a.src = b;
	a.height = "1px";
	a.width = "1px";
	document.getElementsByTagName("head")[0].appendChild(a)
}
function _getSrvUrl(a) {
	return _stat_serverAddr + "/clickAnalyse.jsp"
}
function _setCookieDomain() {
	var a = window.location.href;
	if (!a || a == "" || a.indexOf(".tianya.cn") == -1) {
		_stat_cookieDomain = null
	}
}
function _isUniqueUser() {
	var d = __client.getCookie("__ptime");
	var a = false;
	if (d && !isNaN(d) && _stat_guid) {
		var c = new Date();
		var f = parseInt(c.getTime() / 86400000);
		var b = parseInt(d / 86400000);
		if (f > b) {
			a = true
		}
	}
	__client.setCookie("__ptime", (new Date().getTime()), 360, "/", _stat_cookieDomain, false);
	return a
}
var __client = {
	init: function() {
		this.browser = this.searchString(this.dataBrowser) || "Unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown version";
		this.os = this.searchString(this.dataOS) || "Unknown OS";
		this.screenRate = screen.width + "*" + screen.height
	},
	searchString: function(d) {
		for (var a = 0; a < d.length; a++) {
			var b = d[a].string;
			var c = d[a].prop;
			this.versionSearchString = d[a].versionSearch || d[a].identity;
			if (b) {
				if (b.indexOf(d[a].subString) != -1) {
					return d[a].identity
				}
			} else {
				if (c) {
					return d[a].identity
				}
			}
		}
	},
	searchVersion: function(b) {
		var a = b.indexOf(this.versionSearchString);
		if (a == -1) {
			return
		}
		return parseFloat(b.substring(a + this.versionSearchString.length + 1))
	},
	dataBrowser: [{
		String: navigator.userAgent,
		subString: "OmniWeb",
		versionSearch: "OmniWeb/",
		identity: "OmniWeb"
	},
	{
		string: navigator.vendor,
		subString: "Apple",
		identity: "Safari"
	},
	{
		prop: window.opera,
		identity: "Opera"
	},
	{
		string: navigator.vendor,
		subString: "iCab",
		identity: "iCab"
	},
	{
		string: navigator.vendor,
		subString: "KDE",
		identity: "Konqueror"
	},
	{
		string: navigator.userAgent,
		subString: "Firefox",
		identity: "Firefox"
	},
	{
		string: navigator.userAgent,
		subString: "Chrome",
		identity: "Chrome"
	},
	{
		string: navigator.vendor,
		subString: "Camino",
		identity: "Camino"
	},
	{
		string: navigator.userAgent,
		subString: "Netscape",
		identity: "Netscape"
	},
	{
		string: navigator.userAgent,
		subString: "MSIE",
		identity: "MSIE",
		versionSearch: "MSIE"
	},
	{
		string: navigator.userAgent,
		subString: "Gecko",
		identity: "Mozilla",
		versionSearch: "rv"
	},
	{
		string: navigator.userAgent,
		subString: "Mozilla",
		identity: "Netscape",
		versionSearch: "Mozilla"
	}],
	dataOS: [{
		string: navigator.platform,
		subString: "Win",
		identity: "Windows"
	},
	{
		string: navigator.platform,
		subString: "Mac",
		identity: "Mac"
	},
	{
		string: navigator.platform,
		subString: "Linux",
		identity: "Linux"
	}],
	setCookie: function(b, f, k, h, c, g) {
		var a = -1;
		if ((typeof k == "number") && (k >= 0)) {
			var j = new Date();
			j.setTime(j.getTime() + (k * 24 * 60 * 60 * 1000));
			a = j.toGMTString()
		}
		document.cookie = b + "=" + f + ";" + (a != -1 ? " expires=" + a + ";": "") + (h ? "path=" + h: "") + (c ? "; domain=" + c: "") + (g ? "; secure": "")
	},
	getCookie: function(a) {
		var f = null;
		if (document.cookie && document.cookie != "") {
			var d = document.cookie.split(";");
			for (var c = 0; c < d.length; c++) {
				var b = d[c].replace(/(^\s*)|(\s*$)/g, "");
				if (b.substring(0, a.length + 1) == (a + "=")) {
					f = unescape(b.substring(a.length + 1));
					break
				}
			}
		}
		return f
	},
	getPartCookie: function(b, a) {
		var d = this.getCookie(b);
		if (d) {
			var g = d.split("&");
			for (var c = 0; c < g.length; c++) {
				var h = g[c].split("=");
				if (h[0] == a) {
					var f = h[1];
					return f
				}
			}
		}
		return ""
	},
	getParameter: function(c) {
		var a = document.getElementsByTagName("script");
		for (i = 0; i < a.length; i++) {
			if (a[i].src && a[i].src.match(/stat_[0-9]+\.js(\?.*)?$/)) {
				var b = new RegExp("(^|)" + c + "=([^&]*)(&|$)", "gi").exec(a[i].src);
				if (b) {
					return b[2]
				}
			}
		}
		return ""
	},
	createGUIDCookie: function() {
		var a = Math.round(Math.random() * 2147483647);
		this.setCookie("__guid", a, 360, "/", _stat_cookieDomain, false);
		return a
	},
	createCityCookie: function() {
		var a = document.createElement("script");
		a.defer = true;
		a.src = _stat_serverAddr + "/cityid.jsp";
		document.getElementsByTagName("head")[0].appendChild(a)
	},
	getEvent: function() {
		if (window.event) {
			oEvent = window.event;
			oEvent.target = oEvent.srcElement;
			return oEvent
		} else {
			return this.getEvent.caller.arguments[0]
		}
	}
};
try {
	__client.init();
	_stat_userid = __client.getPartCookie("user", "id");
	if (!_stat_userid) {
		_stat_userid = ""
	}
	_setCookieDomain();
	_stat_guid = __client.getCookie("__guid");
	if (!_stat_guid) {
		_stat_guid = __client.createGUIDCookie();
		_saveNewUserInfo()
	}
	_stat_cid = __client.getCookie("__cid");
	if (_stat_cid == null || _stat_cid == "") {
		__client.createCityCookie();
		_stat_cid = "-1"
	} else {
		if (isNaN(_stat_cid) && _stat_cid != "CN") {
			_stat_cid = "-2"
		}
	}
} catch(e) {}
_autoStatRequest("stat", "1"); (function() {
	var c = {
		isGecko: function() {
			return navigator.userAgent.indexOf("Gecko") == -1 ? false: true
		},
		isOpera: function() {
			return navigator.userAgent.indexOf("Opera") == -1 ? false: true
		},
		isIE: function() {
			return document.all ? true: false
		},
		onReady: function(k) {
			if (k == undefined) {
				return false
			}
			this.domReady = false;
			var j = [];
			j.push(k);
			var h = function() {
				k()
			};
			this.ready = function() {
				if (this.domReady) {
					h()
				}
				if (c.isGecko() || c.isOpera()) {
					try {
						document.removeEventListener("DOMContentLoaded", h)
					} catch(l) {}
					document.addEventListener("DOMContentLoaded", h, false);
					this.domReady = true
				} else {
					if (c.isIE()) {
						var m = window.setInterval(function() {
							try {
								document.documentElement.doScroll("left")
							} catch(n) {
								return
							}
							h();
							window.clearInterval(m);
							this.domReady = true
						},
						5)
					}
				}
			};
			this.ready()
		}
	};
	var d = "http://static.tianya.cn/js/2010/";
	function b() {
		var h = document.createElement("div");
		h.style.width = "0px";
		h.style.height = "0px";
		document.body.appendChild(h);
		h.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="0" height="0" id="TYFC1" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="' + d + 'cookie.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed src="' + d + 'cookie.swf" quality="high" bgcolor="#ffffff" width="0" height="0" id="TYFC2" align="middle" allowScriptAccess="always" allowNetworking="all" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>'
	}
	function g() {
		if (document.all) {
			return document.getElementById("TYFC1")
		} else {
			return document.getElementById("TYFC2")
		}
	}
	function a(k) {
		try {
			var j = g();
			if (j) {
				j.setFlashId(k)
			}
		} catch(h) {}
	}
	function f() {
		try {
			var j = g();
			if (!j) {
				return ""
			}
			if (j.getFlashId() == "nodata") {
				return ""
			}
			return j.getFlashId()
		} catch(h) {
			return ""
		}
	}
	if (typeof jQuery == "function") {
		jQuery(document).ready(function() {
			b();
			setTimeout(function() {
				var j = __client.getCookie("__guid2");
				if (g()) {
					var h = f();
					if (h && !j) {
						__client.setCookie("__guid2", h, 720, "/", _stat_cookieDomain, false)
					} else {
						if (j) {
							a(j)
						} else {
							j = __client.createGUIDCookie();
							__client.setCookie("__guid2", j, 720, "/", _stat_cookieDomain, false);
							a(j)
						}
					}
				}
			},
			1000)
		})
	} else {
		c.onReady(function() {
			b();
			setTimeout(function() {
				var j = __client.getCookie("__guid2");
				if (g()) {
					var h = f();
					if (h && !j) {
						__client.setCookie("__guid2", h, 720, "/", _stat_cookieDomain, false)
					} else {
						if (j) {
							a(j)
						} else {
							j = __client.createGUIDCookie();
							__client.setCookie("__guid2", j, 720, "/", _stat_cookieDomain, false);
							a(j)
						}
					}
				}
			},
			1000)
		})
	}
})();