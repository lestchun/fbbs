TY.loadedModule("TY.util.imgPng");
var DD_belatedPNG = {
	ns: "DD_belatedPNG",
	imgSize: {},
	delay: 10,
	nodesFixed: 0,
	createVmlNameSpace: function() {
		document.namespaces && !document.namespaces[this.ns] && document.namespaces.add(this.ns, "urn:schemas-microsoft-com:vml")
	},
	createVmlStyleSheet: function() {
		var a;
		a = document.createElement("style");
		a.setAttribute("media", "screen");
		document.documentElement.firstChild.insertBefore(a, document.documentElement.firstChild.firstChild);
		a.styleSheet && (a = a.styleSheet, a.addRule(this.ns + "\\:*", "{behavior:url(#default#VML)}"), a.addRule(this.ns + "\\:shape", "position:absolute;"), a.addRule("img." + this.ns + "_sizeFinder", "behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;"), this.screenStyleSheet = a, a = document.createElement("style"), a.setAttribute("media", "print"), document.documentElement.firstChild.insertBefore(a, document.documentElement.firstChild.firstChild), a = a.styleSheet, a.addRule(this.ns + "\\:*", "{display: none !important;}"), a.addRule("img." + this.ns + "_sizeFinder", "{display: none !important;}"))
	},
	readPropertyChange: function() {
		var a, d, b;
		a = event.srcElement;
		if (a.vmlInitiated) { ( - 1 != event.propertyName.search("background") || -1 != event.propertyName.search("border")) && DD_belatedPNG.applyVML(a);
			if ("style.display" == event.propertyName) for (b in d = "none" == a.currentStyle.display ? "none": "block", a.vml) a.vml.hasOwnProperty(b) && (a.vml[b].shape.style.display = d); - 1 != event.propertyName.search("filter") && DD_belatedPNG.vmlOpacity(a)
		}
	},
	vmlOpacity: function(a) {
		if ( - 1 != a.currentStyle.filter.search("lpha")) {
			var d = a.currentStyle.filter,
			d = parseInt(d.substring(d.lastIndexOf("=") + 1, d.lastIndexOf(")")), 10) / 100;
			a.vml.color.shape.style.filter = a.currentStyle.filter;
			a.vml.image.fill.opacity = d
		}
	},
	handlePseudoHover: function(a) {
		setTimeout(function() {
			DD_belatedPNG.applyVML(a)
		},
		1)
	},
	fix: function(a) {
		if (this.screenStyleSheet) {
			var d, a = a.split(",");
			for (d = 0; d < a.length; d++) this.screenStyleSheet.addRule(a[d], "behavior:expression(DD_belatedPNG.fixPng(this))")
		}
	},
	applyVML: function(a) {
		a.runtimeStyle.cssText = "";
		this.vmlFill(a);
		this.vmlOffsets(a);
		this.vmlOpacity(a);
		a.isImg && this.copyImageBorders(a)
	},
	attachHandlers: function(a) {
		var d, b, g, e, c;
		d = this;
		b = {
			resize: "vmlOffsets",
			move: "vmlOffsets"
		};
		if ("A" == a.nodeName) for (e in g = {
			mouseleave: "handlePseudoHover",
			mouseenter: "handlePseudoHover",
			focus: "handlePseudoHover",
			blur: "handlePseudoHover"
		},
		g) g.hasOwnProperty(e) && (b[e] = g[e]);
		for (c in b) b.hasOwnProperty(c) && (g = function() {
			d[b[c]](a)
		},
		a.attachEvent("on" + c, g));
		a.attachEvent("onpropertychange", this.readPropertyChange)
	},
	giveLayout: function(a) {
		a.style.zoom = 1;
		"static" == a.currentStyle.position && (a.style.position = "relative")
	},
	copyImageBorders: function(a) {
		var d, b;
		d = {
			borderStyle: !0,
			borderWidth: !0,
			borderColor: !0
		};
		for (b in d) d.hasOwnProperty(b) && (a.vml.color.shape.style[b] = a.currentStyle[b])
	},
	vmlFill: function(a) {
		if (a.currentStyle) {
			var d, b, g;
			d = a.currentStyle;
			for (b in a.vml) a.vml.hasOwnProperty(b) && (a.vml[b].shape.style.zIndex = d.zIndex);
			a.runtimeStyle.backgroundColor = "";
			a.runtimeStyle.backgroundImage = "";
			b = !0;
			if ("none" != d.backgroundImage || a.isImg) a.isImg ? a.vmlBg = a.src: (a.vmlBg = d.backgroundImage, a.vmlBg = a.vmlBg.substr(5, a.vmlBg.lastIndexOf('")') - 5)),
			g = this,
			g.imgSize[a.vmlBg] || (b = document.createElement("img"), g.imgSize[a.vmlBg] = b, b.className = g.ns + "_sizeFinder", b.runtimeStyle.cssText = "behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;", b.attachEvent("onload",
			function() {
				this.width = this.offsetWidth;
				this.height = this.offsetHeight;
				g.vmlOffsets(a)
			}), b.src = a.vmlBg, b.removeAttribute("width"), b.removeAttribute("height"), document.body.insertBefore(b, document.body.firstChild)),
			a.vml.image.fill.src = a.vmlBg,
			b = !1;
			a.vml.image.fill.on = !b;
			a.vml.image.fill.color = "none";
			a.vml.color.shape.style.backgroundColor = d.backgroundColor;
			a.runtimeStyle.backgroundImage = "none";
			a.runtimeStyle.backgroundColor = "transparent"
		}
	},
	vmlOffsets: function(a) {
		var d, b, g, e, c, i, f, h;
		e = a.currentStyle;
		c = {
			W: a.clientWidth + 1,
			H: a.clientHeight + 1,
			w: this.imgSize[a.vmlBg].width,
			h: this.imgSize[a.vmlBg].height,
			L: a.offsetLeft,
			T: a.offsetTop,
			bLW: a.clientLeft,
			bTW: a.clientTop
		};
		i = 1 == c.L + c.bLW ? 1 : 0;
		f = function(a, b, d, c, e, f) {
			a.coordsize = c + "," + e;
			a.coordorigin = f + "," + f;
			a.path = "m0,0l" + c + ",0l" + c + "," + e + "l0," + e + " xe";
			a.style.width = c + "px";
			a.style.height = e + "px";
			a.style.left = b + "px";
			a.style.top = d + "px"
		};
		f(a.vml.color.shape, c.L + (a.isImg ? 0 : c.bLW), c.T + (a.isImg ? 0 : c.bTW), c.W - 1, c.H - 1, 0);
		f(a.vml.image.shape, c.L + c.bLW, c.T + c.bTW, c.W, c.H, 1);
		f = {
			X: 0,
			Y: 0
		};
		if (a.isImg) f.X = parseInt(e.paddingLeft, 10) + 1,
		f.Y = parseInt(e.paddingTop, 10) + 1;
		else for (h in f) f.hasOwnProperty(h) && this.figurePercentage(f, c, h, e["backgroundPosition" + h]);
		a.vml.image.fill.position = f.X / c.W + "," + f.Y / c.H;
		h = e.backgroundRepeat;
		d = c.W + i;
		b = c.H;
		g = 1 + i;
		e = {
			X: {
				b1: "L",
				b2: "R",
				d: "W"
			},
			Y: {
				b1: "T",
				b2: "B",
				d: "H"
			}
		};
		"repeat" != h || a.isImg ? (f = {
			T: f.Y,
			R: f.X + c.w,
			B: f.Y + c.h,
			L: f.X
		},
		-1 != h.search("repeat-") && (h = h.split("repeat-")[1].toUpperCase(), f[e[h].b1] = 1, f[e[h].b2] = c[e[h].d]), f.B > c.H && (f.B = c.H), a.vml.image.shape.style.clip = "rect(" + f.T + "px " + (f.R + i) + "px " + f.B + "px " + (f.L + i) + "px)") : a.vml.image.shape.style.clip = "rect(1px " + d + "px " + b + "px " + g + "px)"
	},
	figurePercentage: function(a, d, b, g) {
		var e, c;
		c = !0;
		e = "X" == b;
		switch (g) {
		case "left":
		case "top":
			a[b] = 0;
			break;
		case "center":
			a[b] = 0.5;
			break;
		case "right":
		case "bottom":
			a[b] = 1;
			break;
		default:
			-1 != g.search("%") ? a[b] = parseInt(g, 10) / 100 : c = !1
		}
		a[b] = Math.ceil(c ? d[e ? "W": "H"] * a[b] - d[e ? "w": "h"] * a[b] : parseInt(g, 10));
		0 === a[b] % 2 && a[b]++;
		return a[b]
	},
	fixPng: function(a) {
		a.style.behavior = "none";
		var d, b, g, e, c;
		if (! ("BODY" == a.nodeName || "TD" == a.nodeName || "TR" == a.nodeName)) {
			a.isImg = !1;
			if ("IMG" == a.nodeName) if ( - 1 != a.src.toLowerCase().search(/\.png(\?[^=]+=.+)?$/)) a.isImg = !0,
			a.style.visibility = "hidden";
			else return;
			else if ( - 1 == a.currentStyle.backgroundImage.toLowerCase().search(".png")) return;
			d = DD_belatedPNG;
			a.vml = {
				color: {},
				image: {}
			};
			b = {
				shape: {},
				fill: {}
			};
			for (e in a.vml) if (a.vml.hasOwnProperty(e)) {
				for (c in b) b.hasOwnProperty(c) && (g = d.ns + ":" + c, a.vml[e][c] = document.createElement(g));
				a.vml[e].shape.stroked = !1;
				a.vml[e].shape.appendChild(a.vml[e].fill);
				a.parentNode.insertBefore(a.vml[e].shape, a)
			}
			a.vml.image.shape.fillcolor = "none";
			a.vml.image.fill.type = "tile";
			a.vml.color.fill.on = !1;
			d.attachHandlers(a);
			d.giveLayout(a);
			d.giveLayout(a.offsetParent);
			a.vmlInitiated = !0;
			d.applyVML(a)
		}
	}
};
try {
	document.execCommand("BackgroundImageCache", !1, !0)
} catch(r) {}
DD_belatedPNG.createVmlNameSpace();
DD_belatedPNG.createVmlStyleSheet();
TY.namespace("util");
TY.util.imagePng = DD_belatedPNG;
jQuery.browser.msie && 7 > jQuery.browser.version && TY.util.imagePng.fix(".pngfix");