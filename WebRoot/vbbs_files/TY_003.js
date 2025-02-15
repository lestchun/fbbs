TY.namespace("util.iframeResize");
TY.loadedModule("TY.util.iframeResize"); (function(i, b) {
	function d(a, b) {
		0 < a.length && (a = a.get(0), a.contentDocument && a.contentDocument.body.clientHeight ? a.height = a.contentDocument.body.clientHeight: a.Document && a.Document.body.clientHeight && (a.height = a.Document.body.clientHeight), a.contentDocument && a.contentDocument.body.clientWidth ? a.width = a.contentDocument.body.clientWidth: a.Document && a.Document.body.clientWidth && (a.width = a.Document.body.clientWidth), b && b())
	}
	b.extend(TY.util.iframeResize, {
		insertIframe: function(a, e, f, g, h) {
			var c = a + "_Frame";
			b("#" + a).append('<iframe id="' + c + '" name="' + c + '" src="' + e + '" width="' + f + '" height="' + g + '" frameborder="0" style="overflow:hidden;"></iframe>');
			b("#" + c).load(function() {
				d(b(this), h)
			})
		},
		refreshIframe: function(a) {
			a = b("#" + a);
			d(a)
		}
	})
})(TY.util.iframeResize, jQuery);