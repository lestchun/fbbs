jQuery(document).ready(function(c) {
	window.external && "msIsSiteMode" in window.external && !
	function(c) {
		var b = navigator.userAgent.toLowerCase();
		return {
			version: (b.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
			safari: /webkit/i.test(b) && !this.chrome,
			opera: /opera/i.test(b),
			firefox: /firefox/i.test(b),
			ie: /msie/i.test(b) && !/opera/.test(this.browserName),
			mozilla: /mozilla/i.test(b) && !/(compatible|webkit)/.test(b) && !this.chrome,
			chrome: /chrome/i.test(b) && /webkit/i.test(b) && /mozilla/i.test(b),
			maxthon: /maxthon/g.test(b)
		} [c]
	} ("maxthon") && TY.loader("TY.util.pinify",
	function() {
		function d() {
			var a = __global.getCookie("ty_msg");
			a && 0 < a.indexOf("_") && 9 == a.split("_").length && b(a) && (a = a.split("_"), a = {
				tS: +a[0] || 0,
				uId: +a[1] || 0,
				t: +a[2] || 0,
				fC: +a[3] || 0,
				ryC: +a[4] || 0,
				seC: +a[5] || 0,
				rtC: +a[6] || 0,
				uC: +a[7] || 0,
				ssC: +a[8] || 0
			},
			c.pinify.clearJumpList(), c.pinify.addJumpList({
				title: "消息",
				items: [{
					name: "系统消息：" + +a.ssC,
					url: "http://www.tianya.cn/message/unread?utype=2",
					icon: "http://static.tianyaui.com/global/lite/sys_msg.ico?_v=20121203"
				},
				{
					name: "用户消息：" + +a.uC,
					url: "http://www.tianya.cn/message/unread?utype=1",
					icon: "http://static.tianyaui.com/global/lite/user_msg.ico?_v=20121203"
				},
				{
					name: "好友申请：" + +a.rtC,
					url: "http://www.tianya.cn/user/request",
					icon: "http://static.tianyaui.com/global/lite/friend_apply.ico?_v=20121203"
				},
				{
					name: "at我：" + +a.seC,
					url: "http://www.tianya.cn/t/atme",
					icon: "http://static.tianyaui.com/global/lite/at.ico?_v=20121203"
				},
				{
					name: "评论：" + +a.ryC,
					url: "http://www.tianya.cn/t/reply",
					icon: "http://static.tianyaui.com/global/lite/reply.ico?_v=20121203"
				},
				{
					name: "粉丝：" + +a.fC,
					url: "http://www.tianya.cn/user/fans",
					icon: "http://static.tianyaui.com/global/lite/fans.ico?_v=20121203"
				}]
			}), 0 === +a.t ? c.pinify.clearOverlay() : (c.pinify.flashTaskbar(), c.pinify.addOverlay({
				title: "新消息",
				icon: "http://static.tianyaui.com/global/lite/info.ico?_v=20121203"
			})))
		}
		if (("http://bbs.tianya.cn/" == location.href || "http://www.tianya.cn/blog/" == location.href || /^http\:\/\/tianya\.cn\/\d/.test(location.href)) && "true" != TY.io.storage.get("iepinify") && !c.pinify.isPinned()) new TY.ui.pop({
			headTxt: "天涯社区IE9固定网站",
			isShowHead: !1,
			body: '<iframe src="http://www.tianya.cn/IEpinify.html" frameborder="0" width="600" height="420"></iframe>',
			isClickable: !0,
			yesHandler: function() {
				c("#iepinifyNo").prop("checked") && TY.io.storage.set("iepinify", !0)
			}
		}),
		c(".btnArea").append('<label style="vertical-align:middle;line-height:26px;"><input type="checkbox" id="iepinifyNo" value="1" style="float:left;background:none;margin-right:6px;border:none;"/> 以后不再提示</label>');
		var b = function() {
			var a = "";
			return function(b) {
				var c = !1,
				b = b.substr(14);
				b != a && (c = !0, a = b);
				return c
			}
		} ();
		__global.isOnline() && (d(), setInterval(d, 6E4));
		c("head").pinify({
			navColor: "Silver",
			startUrl: location.href,
			window: "width=1024;height=768"
		})
	})
});