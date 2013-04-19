var LaboratoryTest = function() {
	return window.bbsGlobal && "797" == bbsGlobal.item ? !0 : !1
};
TY.loader("Qing.ui.tips",
function() {
	var i = {
		url: "http://click.tianyaui.com/qce.jsp?error={errorTxt}&_r={_r}",
		timer: null,
		start: 0,
		xhr: null,
		duration: 5E3,
		Constant: {
			descMax: 500,
			Fail: "F",
			Success: "S",
			Post: "P",
			Reply: "R",
			ServerResponse: "serverResponse"
		},
		setXHR: function(a) {
			this.xhr = a
		},
		active: function() {
			var a = this;
			this.timer || (this.timer = setTimeout(function() {
				a.clear({
					readyState: a.xhr ? a.xhr.readyState: "",
					status: a.xhr && a.xhr.status ? a.xhr.status: "",
					code: "noResponse",
					desc: "超时30s无响应"
				})
			},
			6 * this.duration), this.start = (new Date).getTime())
		},
		clear: function(a) {
			if (this.timer) {
				clearTimeout(this.timer);
				this.xhr = this.timer = null;
				var g = (new Date).getTime() - this.start,
				b = parseInt(g / this.duration, 10),
				b = {
					op: this.Constant.Post,
					success: this.Constant.Fail,
					time: g,
					timeInterval: "(" + 5 * b + "s," + (5 * b + 5) + "s)",
					code: "",
					desc: "",
					user: __global.getUserName() || ""
				};
				if (!0 === a) {
					if (g < this.duration) return;
					b.success = this.Constant.Success;
					b.readyState = 4;
					b.status = 200;
					b.code = "success";
					b.desc = "响应时间大于5s"
				} else {
					b.readyState = a.readyState;
					b.status = a.status;
					b.code = a.code;
					b.desc = a.desc;
					b.code || (b.code = "error");
					if (!b.desc || "null" === b.desc || "Unknown" === b.desc || "parsererror" === b.code) b.desc = a.responseText || "未知错误：responseText为空";
					b.desc = b.desc.substr(0, this.Constant.descMax)
				}
				this.sendError(TY.util.json(b))
			}
		},
		createImg: function() {
			var a = document.createElement("img");
			a.id = "stat_img" + (new Date).getTime();
			a.style.display = "none";
			document.body.appendChild(a);
			this.imgEl = document.getElementById(a.id)
		},
		sendError: function(a) {
			this.imgEl || this.createImg();
			this.imgEl.src = this.url.replace(/\{errorTxt\}/, encodeURIComponent(a)).replace(/\{_r\}/, Math.random())
		}
	}; (function(a) {
		var g = {};
		a.extend(g, {
			submitUrl: "addBBs",
			blockUrl: "/api?method=bbs.ice.getItemList",
			myBlockUrl: "/api/tw?method=userblock.ice.select",
			block: {},
			blockIndex: [],
			subBlock: {},
			subBlockMap: {},
			blockIndex: [],
			labelItem: null,
			popularItem: null,
			allItem: null,
			popItem: null,
			permissions: {},
			isAuth: !1,
			authInfo: {},
			init: function() {
				var b = this;
				a("#editorToolBar").width(736);
				this.bindEvent();
				//this.getPermission();
				//window.bbsGlobal && window.bbsGlobal.itemPermission && 5 === window.bbsGlobal.itemPermission && 
				this.getRealUser(function() { ! 0 !== b.isAuth && new TY.ui.pop({
						headTxt: "需要认证",
						body: '本版需要<a href="http://passport.tianya.cn/portect?action=smsintro&from=successtqbk" target="_blank">认证</a>后发表！'
					})
				}); ! __global.isOnline() && LaboratoryTest() && jQuery(".location .text").append('<span class="guest-post-tip">亲，您没账号的话请先注册哦</span>')
			},
			bindEvent: function() {
				var b = this;
				a(".bbsTitle", a(".fatieArea")).die("focus").focus();
				a(".common-submitBtn", a(".fatieArea")).die("click").live("click",
				function() {
					a(this).prop("disabled") ? b.switchTips("大侠，你的动作太快了，不如休息下吧。", "warn", 5E3) : (a(this).attr("disabled", "disabled"), a(this).hasClass("common-submitBtn-grey") || (__global.isOnline() || LaboratoryTest() ? b.submitAction(0) : TY.loginAction()))
				});
				a("#textAreaContainer", a(".fatieArea")).keypress(function(b) { (10 === b.which || 13 === b.which && !0 === b.ctrlKey) && a(".common-submitBtn", a(".fatieArea")).click()
				});
				a(".common-submitBtn").attr("title", "Ctrl+Enter快捷发表");
				a(".selectCompose", a(".fatieArea")).bind("change",
				function() {
					a(this).val().trim() && BBS_block_check.check(a(".common-submitBtn"), b.permissions[a(this).val()], "", b.isAuth)
				});
				a("#codeImg").live("click",
				function() {
					b.oCode()
				});
				a(".forum-album").livequery("mouseover",
				function() {
					var b = a(this);
					a(".forum-album").css("z-index", 0);
					b.css("z-index", 1);
					a(this).find(".forum-view").css({
						visibility: "visible",
						"z-index": 1E3,
						"background-color": "white"
					})
				}).livequery("mouseout",
				function() {
					a(".forum-album").css("z-index", 1);
					a(this).find(".forum-view").css("visibility", "hidden")
				});
				a(".forum-album span").livequery("click",
				function() {
					a(this).parent().remove()
				})
			},
			oCode: function() {
				var a = "http://imgcode.tianya.cn/services/ImageCodeService?_r=" + (new Date).getTime();
				jQuery("#imgCode").attr("src", a);
				jQuery("#validateCode").attr("value", "")
			},
			codeWin: function() {
				popCon = new TY.ui.pop({
					headTxt: "请输入验证码",
					body: "<div class='fb_yzm_main'><div class='fb_yzm_main_col'><p><label for='validateCode'>验证码：</label><input type='text' size='20' id='validateCode' name='validateCode'/></p></div><div class='fb_yzm_main_col2'> <img id='imgCode' /> <a id='codeImg' href='javascript:void(0);'>看不清，换一个</a><input type='hidden' name='vk_code' id='vk_code' size='12' /></div><div class='fb_yzm_main_col3'></div></div>",
					type: "window",
					isDrag: !0,
					closeHandler: function() {
						a(".common-submitBtn", a(".fatieArea")).prop("disabled") && a(".common-submitBtn", a(".fatieArea")).removeAttr("disabled")
					},
					Buttons: [{
						id: "Button1",
						text: "确定",
						handler: function() {
							g.codeCheck()
						}
					},
					{
						id: "Button2",
						text: "取消",
						handler: function() {
							popCon.remove();
							a(".common-submitBtn", a(".fatieArea")).prop("disabled") && a(".common-submitBtn", a(".fatieArea")).removeAttr("disabled")
						}
					}]
				});
				this.oCode()
			},
			codeCheck: function() {
				__global.getCookie("vk");
				var a = jQuery("input[id=validateCode]");
				"" == a.val() ? alert("请输入验证码") : (popCon.remove(), this.submitAction(0, a.val()))
			},
			validate: function() {
				var b = a(".bbsTitle", a(".fatieArea")).val(),  //标题
			 
				c = a(".selectCompose", a(".fatieArea")).val(),		//可见性编号
				d = a(".selectCompose :selected", a(".fatieArea")).val(), 
				f = a("#textAreaContainer").val(),					//帖子内容
				h,
				d = "" === d ? "1": d,
				e = {
					checked: !0
				};
				if (1 > b.trim().length) return e.checked = !1,
				this.switchTips("请填写帖子标题", "info", 3E3),
				a(".bbsTitle", a(".fatieArea")).focus(),
				e;
				if (80 < b.getCNlen()) return e.checked = !1,
				this.switchTips("帖子标题太长（40个汉字以内）", "info", 3E3),
				a(".bbsTitle", a(".fatieArea")).focus(),
				e;
				//if (h = TY.param.getParam("item")) c = h;
				//else if (1 > c.trim().length) return e.checked = !1,
				//this.switchTips("请选择版块", "info", 3E3),
				//e;
				if (1 > f.trim().length) return e.checked = !1,
				this.switchTips("请填写帖子内容", "info", 3E3),
				a("#textAreaContainer").focus(),
				e;
				if (2E4 < f.getCNlen()) return e.checked = !1,
				this.switchTips("帖子内容太长（10000个汉字以内）", "info", 3E3),
				a("#textAreaContainer").focus(),
				e;
				h = a(":radio[name=isSelf]:checked").val();
				if ("0" === h) b += "(转载)";
				else if ("1" !== h) return e.checked = !1,
				this.switchTips("请选择原创或转载", "info", 3E3),
				e;
				var g = [],
				j = [],
				i = [];
				a(".forum-album").each(function() {
					g.push(a(this).attr("aid"));
				});
				a(".vote_preview li").each(function() {
					i.push(a(this).attr("val"));
				});
				a(".act_preview li").each(function() {
					j.push(a(this).attr("val"));
				});
				e.checked && (e.item = c, e.title = b, e.content = BBS_UTIL.valueHandler(f), e.topicIds = g.join(","), e.activityIds = j.join(","), e.voteIds = i.join(","));
				return e;
			},
			submitAction: function(b, c) {
				var d = this,
				f = this.validate(),
				h = {},
				e = TY.param.getParam("item");
				/\/bbs\//g.test(location.href.substring("/"));
				if (f.checked) {
					h = {
						"model.visiablely.id": f.item,
						"model.title": f.title,
						"model.content": f.content,
						"model.modul.id": window._modul_id
					};
					//e && (h["params.subItem"] = f.itemTxt, h["params.item"] = f.item = e);
					////f.topicIds && (h["params.topicIds"] = f.topicIds);
					//f.activityIds && (h["params.activityIds"] = f.activityIds);
					//f.voteIds && (h["params.voteIds"] = f.voteIds);
					//c && (h["params.vCode"] = c);
					d.popItem = new TY.ui.tips({
						el: a("#textAreaContainer"),
						type: "loading",
						msg: "操作中...",
						position: "midCenter"
					});
					i.active();
					var g = a.ajax({
						url: d.submitUrl,
						headers: {
							Connection: "close"
						},
						type: "post",
						data: h,
						success: function(c) {
							//c = a.parseJSON(c);
							1000 == c.resultCode ? (i.clear(!0), c.msg && 0 <= +c.msg.indexOf("验证码") ? (d.popItem.remove(), -1 == +c.msg.indexOf("[]") && alert("验证码错误，请重新输入。"), d.codeWin()) : (new TY.ui.tips({
								el: a("#textAreaContainer"),
								type: b,
								msg: "帖子发布成功",
								position: "midCenter",
								time: 1E3,
								callback: function() {
									location.href = "loadModul?id=" +window._modul_id;
								}
							}), d.reset(), d.clearStorage())) : (d.popItem.remove(), new TY.ui.pop({
								body: c.message
							}), a(".common-submitBtn", a(".fatieArea")).removeAttr("disabled"), i.clear({
								code: i.Constant.ServerResponse,
								desc: c.msg,
								readyState: g && g.readyState || 0,
								status: g && g.status || ""
							}))
						},
						error: function(b, c, d) {
							i.clear({
								readyState: b.readyState,
								status: b.status,
								code: c,
								desc: d,
								responseText: b.responseText
							});
							TY.util.console({
								title: "发布",
								msg: "发布请求错误"
							});
							a(".common-submitBtn", a(".fatieArea")).removeAttr("disabled")
						}
					});
					i.setXHR(g)
				}
			},
			reset: function() {
				this.popularItem && this.popularItem.resetSelect();
				a(".bbsTitle", a(".fatieArea")).val("");
				a("#textAreaContainer").val("")
			},
			changeBlog: function(b) {
				a(".selectBox", a(".fatieArea")).val(b.text());
				a(".selectBox", a(".fatieArea")).attr("_val", b.attr("_val"))
			},
			selectEnterFn: function(b) {
				a(".selectBox", a(".fatieArea")).val(b.text());
				a(".selectBox", a(".fatieArea")).attr("_val", b.attr("_val"))
			},
			autoSave: function() {
				try {
					var b = a(".bbsTitle", a(".fatieArea")).val(),
					c = a(".selectBox", a(".fatieArea")).attr("_val") || "";
					word = a("#textAreaContainer").val();
					label = "";
					var d = {};
					word && b && c && label && (d.title = b, d.content = word, d.item = c, d.label = label, TY.io.storage.set("bbsBlock", d))
				} catch(f) {}
			},
			initData: function() {
				try {
					TY.io.storage.get("bbsBlock");
					var b = TY.param.getParam("item"),
					c = TY.param.getParam("sub"),
					d = /\/bbs\//g.test(location.href.substring("/"));
					b && (a(".selectBox", a(".fatieArea")).val(g.block[b]), a(".selectBox", a(".fatieArea")).attr("_val", b));
					d && ("undefined" != typeof c && "" != c ? a(".selectBox", a(".fatieArea")).val(c) : "undefined" != typeof c && a(".selectBox", a(".fatieArea")).val("选择子版"))
				} catch(f) {
					TY.util.console({
						title: "初始化数据",
						msg: f
					})
				}
			},
			setData: function(b) {
				a(".bbsTitle", a(".fatieArea")).val(b.title);
				b.item && (a(".selectBox", a(".fatieArea")).val(g.block[b.item]), a(".selectBox", a(".fatieArea")).attr("_val", b.item))
			},
			clearStorage: function() {},
			switchTips: function(b, c, d) {
				d = 2E3;
				b && new TY.ui.tips({
					el: a("#textAreaContainer"),
					type: c,
					msg: b,
					position: "midCenter",
					time: d,
					callback: function() {
						a(".common-submitBtn", a(".fatieArea")).removeAttr("disabled")
					}
				})
			},
			getPermission: function() {
				var b = this;
				a.ajax({
					url: "/api?method=bbs.ice.itemlist",
					dataType: "json",
					cache: !1,
					success: function(a) {
						if (1 === +a.success) {
							if (a = a.data.rows) for (var d = 0,
							f = a.length; d < f; d++) b.permissions[a[d].id] = a[d].permission
						} else new TY.ui.tips({
							type: "warn",
							msg: a.message || "获取板块权限失败",
							position: "midCenter",
							time: 2500
						});
					},
					error: function() {
						TY.util.console("getPermission error");
					}
				})
			},
			getRealUser: function(b) {
				var c = this;
				a.ajax({
					url: "/api?method=bbs.api.vip&params.userIds=" + __global.getUserId(),
					dataType: "json",
					cache: !1,
					success: function(a) {
						1 === +a.success ? (a = a.data, "undefined" != typeof a.rows && 0 < a.rows.length && (c.isAuth = !0, c.authInfo = a.rows[0])) : new TY.ui.tips({
							type: "warn",
							msg: a.message || "获取认证信息错误",
							position: "midCenter",
							time: 2500
						});
						b && b()
					},
					error: function() {
						TY.util.console("getRealUser error")
					}
				})
			}
		});
		jQuery(document).ready(function() {
			__global.isOnline() ? TY.loader("TY.ui.bbsPost",
			function() {
				g.init();
				window.bbsContent = new TY.ui.bbsPost({
					BBSObj: "bbsContent",
					el: a("#textAreaWrap"),
					toolWrap: a("#editorToolBar"),
					plugins: "friend,photo,video,music,album,vote,act"
				})
			}) : LaboratoryTest() ? TY.loader("TY.ui.bbsPost",
			function() {
				g.init();
				window.bbsContent = new TY.ui.bbsPost({
					BBSObj: "bbsContent",
					el: a("#textAreaWrap"),
					toolWrap: a("#editorToolBar"),
					plugins: ""
				})
			}) : TY.loginAction()
		})
	})(jQuery);
	window.onbeforeunload = function() {
		if (jQuery("#textAreaContainer").val() || jQuery(".bbsTitle").val()) return "您确认要离开当前页面吗？你所输入的数据可能未被保存."
	}
});