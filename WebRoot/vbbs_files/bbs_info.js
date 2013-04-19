window.TUI || (TUI = {});
var LaboratoryTest = function() {
    return window.bbsGlobal && "797" == bbsGlobal.item ? !0 : !1
};
function intval(a) {
    a = parseInt(a);
    return isNaN(a) ? 0 : a
}
function getPos(a) {
    for (var e = 0,
    c = 0,
    b = intval(a.style.width), d = intval(a.style.height), h = a.offsetWidth, g = a.offsetHeight; a.offsetParent;) e += a.offsetLeft + (a.currentStyle ? intval(a.currentStyle.borderLeftWidth) : 0),
    c += a.offsetTop + (a.currentStyle ? intval(a.currentStyle.borderTopWidth) : 0),
    a = a.offsetParent;
    e += a.offsetLeft + (a.currentStyle ? intval(a.currentStyle.borderLeftWidth) : 0);
    c += a.offsetTop + (a.currentStyle ? intval(a.currentStyle.borderTopWidth) : 0);
    return {
        x: e,
        y: c,
        w: b,
        h: d,
        wb: h,
        hb: g
    }
}
function getScroll() {
    var a, e, c, b;
    document.documentElement && document.documentElement.scrollTop ? (a = document.documentElement.scrollTop, e = document.documentElement.scrollLeft, c = document.documentElement.scrollWidth, b = document.documentElement.scrollHeight) : document.body && (a = document.body.scrollTop, e = document.body.scrollLeft, c = document.body.scrollWidth, b = document.body.scrollHeight);
    return {
        t: a,
        l: e,
        w: c,
        h: b
    }
}
function scroller(a, e) {
    "object" != typeof a && (a = document.getElementById(a || "post_head"));
    if (a) {
        var c = this;
        c.el = a;
        c.p = getPos(a);
        c.s = getScroll();
        c.clear = function() {
            window.clearInterval(c.timer);
            c.timer = null
        };
        c.t = (new Date).getTime();
        c.step = function() {
            var a = (new Date).getTime(),
            d = (a - c.t) / e;
            a >= e + c.t ? (c.clear(), window.setTimeout(function() {
                c.scroll(c.p.y, c.p.x)
            },
            13)) : (a = ( - Math.cos(d * Math.PI) / 2 + 0.5) * (c.p.y - c.s.t) + c.s.t, d = ( - Math.cos(d * Math.PI) / 2 + 0.5) * (c.p.x - c.s.l) + c.s.l, c.scroll(a, d))
        };
        c.scroll = function(a, d) {
            window.scrollTo(d, a)
        };
        c.timer = window.setInterval(function() {
            c.step()
        },
        13)
    }
}
var see_only_uname = null,
see_only_str = null;
function setOnlyUser(a, e) {
    see_only_uname = a;
    see_only_str = "#ty_vip_look[" + a + "]";
    jQuery(".atl-pages a").attr("href");
    jQuery(".atl-pages a").attr("href",
    function() {
        return jQuery(this).attr("_bak") + see_only_str
    });
    a == jQuery(".see-host").attr("_uname") && jQuery(".see-host").addClass("see-host-off");
    jQuery(".atl-item[_host!='" + a + "']").hide().attr("_hide", "1");
    0 == jQuery(".atl-item[_host='" + a + "']").size() ? jQuery(".atl-main").prepend('<div class="bbs-info-hint">本页无楼主（或指定人）的回复，请 <a href="javascript:void(0);" class="see-all">查看本页其它回复</a></div>') : jQuery(".bbs-info-hint").remove();
    toAnchor(e)
}
function cancelOnlyUser(a) {
    jQuery(".see-host").removeClass("see-host-off");
    jQuery(".atl-item").show().removeAttr("_hide");
    jQuery(".bbs-info-hint").remove();
    see_only_str = see_only_uname = null;
    jQuery(".atl-pages a").attr("href",
    function() {
        return jQuery(this).attr("_bak");
    });
    toAnchor(a);
}
function toAnchor(a) {
    a && a.length && scroller(a, 100);
}
function goPage(a, e, c, b) {
    var a = a.page.value,
    d = "";
    /(^-?\d\d*$)/.test(a) ? (d = a > b ?  e + "-" + c + "-" + b : 0 >= a ?  e + "-" + c + "-1":  e + "-" + c + "-" + a , see_only_str && (d += see_only_str), window.location.href = d) : alert("页码必须是数字！");
    return ! 1;
}
function replyTop() {
    var a = jQuery("#textAreaContainer", jQuery("#bbsPost")),
    e = "@" + decodeURI(jQuery(".js-bbs-act").attr("js_activityusername"));
    0 > a.val().indexOf(e) && a.val(function() {
        return e + " " + jQuery(this).val()
    });
    setTimeout(function() {
        TY.util.cursorPoint.toTextEnd(a.get(0))
    },
    500);
}
var resetDom = {}; (function(a) {
    a.extend(resetDom, {
        resetSeeOnly: function() {
            jQuery(".atl-pages a").attr("_bak",
            function() {
                return jQuery(this).attr("href")
            });
            /ty_vip_look\[(.+)\]/gi.test(window.location.hash) && setOnlyUser(encodeURIComponent(decodeURIComponent(RegExp.$1)))
        },
        resetUserNameUtil: function(a) {
            var c = jQuery(a).html().split("@"),
            b = 0;
            if (1 < c.length) {
                for (var d = 1; d < c.length; d++) {
                    var h = c[d].match(/^([\-\w\u4e00-\u9fa5]{1,16})/);
                    if (h && (h = h[1]))"." != c[d].substring(h.length, h.length + 1) && 21 > b ? (c[d] = c[d].replace(h, '<a href="http://www.tianya.cn/n/' + h + '" target="_blank">@' + h + "</a>"), b++) : c[d] = c[d].replace(h, "@" + h)
                }
                jQuery(a).html(c.join(""))
            }
        },
        resetUserName: function() {
            var e = this;
            jQuery(".atl-con-bd .bbs-content").each(function() {
                e.resetUserNameUtil(a(this))
            })
        },
        lazyLoad: function(e) {
            var c = {
                threshold: 0,
                failurelimit: 3,
                event: "scroll",
                effect: "show",
                effectspeed: 500,
                container: window,
                max_width: 0,
                elements: "img[original]"
            },
            b = function(b, d) {
                var c;
                c = void 0 === d.container || d.container === window ? 3 * a(window).height() + a(window).scrollTop() : a(d.container).offset().top + 3 * a(d.container).height();
                try {
                    return c <= a(b).offset().top - d.threshold
                } catch(e) {
                    return ! 0
                }
            },
            d = function(b, d) {
                var c;
                c = void 0 === d.container || d.container === window ? a(window).scrollTop() : a(d.container).offset().top;
                try {
                    return c >= a(b).offset().top + d.threshold + a(b).height()
                } catch(e) {
                    return ! 1
                }
            };
            a.extend(a.expr[":"], {
                "below-the-fold": "belowthefold(a, {threshold : 0, container: window})",
                "above-the-fold": "!belowthefold(a, {threshold : 0, container: window})"
            });
            e && a.extend(c, e);
            var h = a(c.elements);
            if (0 != h.size()) {
                var g = null;
                a(c.container).bind("scroll",
                function() {
                    if (0 == h.size()) a(this).unbind("scroll");
                    else {
                        var e = 0;
                        g && clearTimeout(g);
                        g = setTimeout(function() {
                            var g = [];
                            h.each(function() {
                                var i = a(this);
                                if ("1" == i.closest(".atl-item").attr("_hide")) return ! 0;
                                if (!d(i, c)) if (b(i, c)) {
                                    if (e++>c.failurelimit) return ! 1
                                } else "1" != i.attr("loaded") && (a("<img />").one("load",
                                function() {
                                    var b = this.width;
                                    a.browser.msie && 6 == a.browser.version && (b = this.width > c.max_width ? c.max_width: this.width);
                                    i.hide().removeAttr("height").attr("src", i.attr("original")).width(b).show()
                                }).one("seterrurl",
                                function() {
                                    i.hide().removeAttr("height").attr("src", "http://static.tianyaui.com/img/static/2011/imgloadingerr.gif").show()
                                }).one("error",
                                function() {
                                    a(this).trigger("seterrurl")
                                }).attr("src", i.attr("original")), i.attr("loaded", "1"), g.push(h.index(i)))
                            });
                            for (var i = 0; i < g.length; i++) h.splice(g[i] - i, 1)
                        },
                        200)
                    }
                });
                a(c.container).trigger(c.event)
            }
        },
        bindEvent: function() {
            a(".see-host").live("click",
            function() {
                see_only_uname ? see_only_uname != a(this).attr("_uname") ? (a(".atl-item[_host='" + a(this).attr("_uname") + "']").show(), setOnlyUser(a(this).attr("_uname"))) : cancelOnlyUser() : setOnlyUser(a(this).attr("_uname"))
            });
            a(".see-all").live("click",
            function() {
                cancelOnlyUser();
                a(this).closest(".bbs-info-hint").hide()
            })
        },
        loadApps: function() {
            TY.loader("TY.util.iframeResize");
            if (0 < a("#js_survey[_id!='']").size()) for (var e = a("#js_survey"), c = e.attr("_id").split(","), b = 0; b < c.length; b++) e.append(['<div class="survey-view cf">', '<iframe id="iframe_survey_' + c[b] + '" scrolling="no" height="0" frameborder="0" width="100%" src="http://diaocha.tianya.cn/v/open/survey/detail?surveyId=' + c[b] + '" ></iframe>', "</div>"].join(""));
            if (0 < a("#js_event[_id!='']").size()) {
                e = a("#js_event");
                c = e.attr("_id").split(",");
                for (b = 0; b < c.length; b++) e.append(['<div class="event-view cf">', '<iframe id="iframe_event_' + c[b] + '" scrolling="no" height="0" frameborder="0" width="100%" src="http://apps.tianya.cn/event/zujian/info.php?eventid=' + c[b] + "&iframeid=iframe_event_" + c[b] + '"></iframe>', "</div>"].join(""))
            }
            if (0 < a("#js_album[_id!='']").size()) {
                var d = a("#js_album"),
                b = d.attr("_id").split(",");
                a.getScript("http://apps.tianya.cn/api/album/multiGetAlbumInfo.php?var=albumList&aid=" + b.toString(),
                function() {
                    var b = window.albumList;
                    if (b && b.result && b.data && b.data.infolist && b.data.articlelist) {
                        if (0 == b.data.infolist.length && 0 == b.data.articlelist.length) return ! 1;
                        d.append('<div class="album-view cf"></div>');
                        var c = a(".album-view", d),
                        e = 0;
                        a.each(b.data.articlelist,
                        function(d) {
                            var i = [1 == e % 2 ? '<div class="album-info album-info-r">': '<div class="album-info">', '<div class="hd cf">', '<h3><a title="' + b.data.infolist[d].albumname + '" target="_blank" href="http://apps.tianya.cn/album/albuminfo/aid/' + d + '">' + getStrByLen(b.data.infolist[d].albumname, 50, 1) + "</a></h3>", '<a href="http://apps.tianya.cn/album" target="_blank" class="to-album-page">专辑首页</a>', "</div>", '<div class="bd cf">', '<div class="album-pic"><img src="' + b.data.infolist[d].imgurl + '"></div>', '<div class="album-list">', "<ul>"];
                            a.each(this,
                            function() {
                                i.push('<li><a target="_blank" title="' + this.articletitle + '" href="' + this.articleurl + '">' + getStrByLen(this.articletitle, 36, 1) + "</a></li>")
                            });
                            i.push("</ul>", "</div>", "</div>", "</div>");
                            c.append(i.join(""));
                            e++
                        })
                    }
                })
            }
        },
        init: function() {
            this.resetUserName();
            this.lazyLoad({
                max_width: 912,
                elements: ".atl-con-bd .bbs-content img[original]",
                effect: "fadeIn"
            });
            this.loadApps();
            this.resetSeeOnly();
            this.bindEvent()
        }
    })
})(jQuery);
TUI.initPostView = function(a) {
    var e = {
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
                var d = (new Date).getTime() - this.start,
                c = parseInt(d / this.duration, 10),
                c = {
                    op: this.Constant.Reply,
                    success: this.Constant.Fail,
                    time: d,
                    timeInterval: "(" + 5 * c + "s," + (5 * c + 5) + "s)",
                    code: "",
                    desc: "",
                    user: __global.getUserName() || ""
                };
                if (!0 === a) {
                    if (d < this.duration) return;
                    c.success = this.Constant.Success;
                    c.readyState = 4;
                    c.status = 200;
                    c.code = "success";
                    c.desc = "响应时间大于5s"
                } else {
                    c.readyState = a.readyState;
                    c.status = a.status;
                    c.code = a.code;
                    c.desc = a.desc;
                    c.code || (c.code = "error");
                    if (!c.desc || "null" === c.desc || "Unknown" === c.desc || "parsererror" === c.code) c.desc = a.responseText || "未知错误：responseText为空";
                    c.desc = c.desc.substr(0, this.Constant.descMax)
                }
                this.sendError(TY.util.json(c))
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
    },
    c = {};
    a.extend(c, {
        replayUrl: "replyBbs",
        twitterUrl: "#",
        editor: null,
        isAuth: !1,
        popCon: null,
        authInfo: {},
        getReplyAreaContent: function(b) {
            b = b.parent().parent().find(".atl-info").find("a").first().text() || b.attr("_val");
            a("#textAreaContainer", a("#bbsPost")).val("回复 @" + b + ": ").focus();
            setTimeout(function() {
                TY.util.cursorPoint.toTextEnd(a("#textAreaContainer", a("#bbsPost")).get(0))
            },
            500)
        },
        getReplyAreaContent: function(a) {
            var d = jQuery,
            c = a.closest(".atl-item"),
            e = c.find(".atl-info .js-vip-check").text(),
            f = "";
            c.find(".atl-info span").each(function() {
                var a = d(this).text(); - 1 !== a.indexOf("时间：") && (f = a.replace("时间：", ""))
            });
            a = a.attr("floor");
            this.drawReplay(e, f, c.find(".bbs-content"), +a)
        },
        getReplyTopAreaContent: function() {
            var b = a("#textAreaContainer", a("#bbsPost"));
            b.val("");
            setTimeout(function() {
                TY.util.cursorPoint.toTextEnd(b.get(0))
            },
            500)
        },
        drawReplay: function(b, d, c, e) {
            var f = c.contents(),
            j = [],
            c = [],
            i = "",
            k = [];
            e && (i = e + "楼 ");
            f.each(function() {
                var b = "";
                "string" === typeof this ? (b = a.trim(this)) && j.push("    " + b) : ("BR" === a(this).prop("tagName") && j.push("\n"), "IMG" === a(this).prop("tagName") ? j.push("\n    " + a(this).attr("src") + "\n") : (b = a.trim(a(this).text())) && j.push("    " + b))
            });
            k = j.join("").match(/(.|\n)*\-{15,}/g);
            c.push(k ? k + "\n": "");
            c.push("    @" + b + " " + i + d + "\n");
            b = j.join("").replace(/(.|\n)*\-{15,}/g, "");
            d = function(b, d) {
                var c = b.match(/https?:\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+([-_A-Z0-9a-z\$\.\+\!\*\/,:;@&=\?\~\#\%]*)*/gi) || [],
                e = !0;
                a.each(c,
                function(a, c) {
                    for (var h = b.split(c), f = 0, g = c.getCNlen(), j = "", i = 0; i < h.length; i++) {
                        f += h[i].getCNlen();
                        j += h[i];
                        j += c;
                        if (f < d && f + g > d) return b = j + "......",
                        e = !1,
                        !0;
                        f += g
                    }
                });
                e && (b = b.subStringCn(d, !0) + "....");
                return b
            };
            400 < b.getCNlen() && (b = d(b, 400));
            c.push(b);
            c.push("\n    -----------------------------\n");
            var c = c.join(""),
            c = c.replace(/\n+/g, "\n"),
            l = a("#textAreaContainer", a("#bbsPost"));
            l.val(c);
            setTimeout(function() {
                TY.util.cursorPoint.toTextEnd(l.get(0))
            },
            500)
        },
        insertHtml: function(b, d) {
            var c = __global.getUserId(),
            e = __global.getUserName(),
            f = [];
            f.push('<div class="atl-item" _host="' + c + '">');
            f.push('\t<div class="atl-head">');
            f.push('\t\t<div class="atl-head-reply">');
            f.push('\t\t\t<a href="#fabu_anchor" class="a-link reply">回复</a>末楼');
            f.push("\t\t</div>");
            f.push('\t<div class="atl-info">');
            f.push('\t\t<span>作者：<a class="js-vip-check" href="#" target="_blank">' + e + "</a> </span>");
            d && (d = d.replace(/\..*/g, ""), f.push("\t\t<span>时间：" + d + " </span>"));
            f.push("\t</div>");
            f.push("</div>");
            f.push('<div class="atl-content">');
            f.push('\t<div class="atl-con-hd clearfix">');
            f.push('\t\t<div class="atl-con-hd-l"></div>');
            f.push('\t\t<div class="atl-con-hd-r"></div>');
            f.push("\t</div>");
            f.push('\t<div class="atl-con-bd clearfix">');
            f.push('       <div class="bbs-content">');
            f.push(b);
            f.push("       </div>");
            f.push("\t</div>");
            f.push('\t\t<div class="atl-con-ft clearfix">');
            f.push('\t\t<div class="atl-con-ft-l"></div>');
            f.push('\t\t<div class="atl-con-ft-r"></div>');
            f.push("\t</div>");
            f.push("</div>");
            f.push("</div>");
            a(".atl-main").append(f.join(""));
            resetDom.resetUserNameUtil(a(".atl-main").find(".bbs-content:last"))
        },
        bindEvent: function() {
            var b = this;
            a("a.reply").live("click",
            function() {
                b.getReplyAreaContent(a(this))
            });
            a(".replytop").live("click", replyTop);
            a(".common-submitBtn", a(".post-div")).click(function() {
                a(this).prop("disabled") ? new TY.ui.tips({
                    msg: "大侠，你的动作太快了，不如休息下吧。",
                    position: "midCenter",
                    time: 2500,
                    type: "warn"
                }) : (a(this).attr("disabled", "disabled"), __global.isOnline() || LaboratoryTest() ? b.submitAction() : TY.loginAction())
            });
            a("#textAreaContainer", a(".post-div")).keypress(function(b) { (10 === b.which || 13 === b.which && !0 === b.ctrlKey) && a(".common-submitBtn", a(".post-div")).click()
            });
            a(".common-submitBtn").attr("title", "Ctrl+Enter快捷发表");
            a("#isTwitter").change(function() {
                TY.io.storage.set("bbsReplyTwitter", a(this).prop("checked"))
            });
            a("#codeImg").live("click",
            function() {
                b.oCode()
            })
        },
        oCode: function() {
            var a = "http://imgcode.tianya.cn/services/ImageCodeService?_r=" + (new Date).getTime();
            jQuery("#imgCode").attr("src", a);
            jQuery("#validateCode").attr("value", "")
        },
        codeWin: function() {
            var b = this;
            b.popCon = new TY.ui.pop({
                headTxt: "请输入验证码",
                body: "<div class='fb_yzm_main'><div class='fb_yzm_main_col'><p><label for='validateCode'>验证码：</label><input type='text' size='20' id='validateCode' name='validateCode'/></p></div><div class='fb_yzm_main_col2'> <img id='imgCode' /> <a id='codeImg' href='javascript:void(0);'>看不清，换一个</a><input type='hidden' name='vk_code' id='vk_code' size='12' /></div><div class='fb_yzm_main_col3'></div></div>",
                type: "window",
                isDrag: !0,
                Buttons: [{
                    id: "Button1",
                    text: "确定",
                    handler: function() {
                        c.codeCheck()
                    }
                },
                {
                    id: "Button2",
                    text: "取消",
                    handler: function() {
                        a(".common-submitBtn", a(".post-div")).removeAttr("disabled");
                        b.popCon.remove()
                    }
                }]
            });
            b.oCode();
            a(".common-submitBtn", a(".post-div")).removeAttr("disabled")
        },
        codeCheck: function() {
            __global.getCookie("vk");
            var a = jQuery("input[id=validateCode]");
            "" == a.val() ? alert("请输入验证码") : (this.popCon.remove(), this.submitAction(a.val()))
        },
        validate: function() {
            var b = a("#textAreaContainer").val(),
            d = {
                checked: !0
            };
            if (1 > b.trim().length) return d.checked = !1,
            this._showTips("回复不能为空", "warn"),
            d;
            if (8E3 < b.getCNlen()) return d.checked = !1,
            this._showTips("帖子内容太长（4000个汉字以内）", "warn"),
            d;
            d.checked && (d.item = "", d.content = BBS_UTIL.valueHandler(b), d.unValue = b);
            return d
        },
        submitAction: function(b) {
            var d = this,
            c = this.validate(),
            g;
            if (c.checked) {
                d.popItem = new TY.ui.tips({
                    el: a("#textAreaContainer"),
                    type: "loading",
                    msg: "操作中...",
                    position: "midCenter"
                });
                g = {
                    "model.bbs.id":  bbsGlobal.artId,
                    "model.content": c.content
                    /*"params.item": TY.param.getParam("item") || bbsGlobal.item,
                    "params.appId": jQuery("#post_head .atl-menu").attr("js_appid"),
                    "params.appBlock": TY.param.getParam("item") || bbsGlobal.item,
                    "params.postId": TY.param.getParam("id") || bbsGlobal.artId,
                    "params.preUrl": jQuery("#post_head .atl-menu").attr("js_activityurl"),
                    "params.preTitle": decodeURI(jQuery("#post_head .atl-menu").attr("js_title")),
                    "params.preUserId": jQuery("#post_head .atl-menu").attr("_host"),
                    "params.preUserName": decodeURI(jQuery("#post_head .atl-menu").attr("js_activityusername")),
                    "params.prePostTime": jQuery("#post_head .atl-menu").attr("js_posttime"),
                    "params.sourceName": "天涯论坛",
                    "params.type": 3,
                    "params.bScore": !0,
                    "params.content": c.content,
                    "params.title": c.content,
                    "params.bWeiBo": !1*/
                };
                b && (g["params.vCode"] = b);
                e.active();
                var f = a.ajax({
                    url: d.replayUrl,
                    headers: {
                        Connection: "close"
                    },
                    dataType: "json",
                    type: "post",
                    data: g,
                    success: function(b) {
                        d.popItem.remove();
                        1000 == +b.resultCode ? (e.clear(!0),(d._showTips("回复成功", "success"), d.insertHtml(b.data && b.data.content || "", b.data && b.data.time), a("#textAreaContainer").val(""), a("#isTwitter").prop("checked") )) : 
                        	(new TY.ui.pop({body: b.msg}), setTimeout(function() {
                            a(".common-submitBtn", a(".post-div")).removeAttr("disabled");
                        },
                        5E3), e.clear({
                            code: e.Constant.ServerResponse,
                            desc: b.message,
                            readyState: f && f.readyState || 0,
                            status: f && f.status || ""
                        }));
                    },
                    error: function(b, c, f) {
                        e.clear({
                            readyState: b.readyState,
                            status: b.status,
                            code: c,
                            desc: f,
                            responseText: b.responseText
                        });
                        d.popItem.remove();
                        setTimeout(function() {
                            a(".common-submitBtn", a(".post-div")).removeAttr("disabled")
                        },
                        5E3)
                    }
                });
                e.setXHR(f)
            }
        },
        shareTwitter: function(b) {
            var d = a(".js-bbs-act"),
            b = {
                "params.title": b.content,
                "params.appId": "bbs",
                "params.appBlock": d.attr("js_blockid"),
                "params.postId": d.attr("js_postid"),
                "params.preUrl": d.attr("js_activityurl"),
                "params.preTitle": decodeURI(d.attr("js_title")),
                "params.preUserName": decodeURI(d.attr("js_activityusername")),
                "params.preUserId": d.attr("_host"),
                "params.prePostTime": d.attr("js_posttime"),
                "params.sourceName": "天涯论坛",
                "params.type": 2
            };
            new TY.util.proxy({
                name: "tianyacnProxy",
                path: "http://www.tianya.cn/proxy.html"
            },
            "ajax", {
                url: this.twitterUrl,
                type: "post",
                data: b,
                dataType: "json",
                success: function(a) {
                    1 != +a.success && TY.util.console({
                        title: "转发微博失败",
                        msg: a.message
                    })
                }
            })
        },
        checkStorage: function() {
            var b = TY.io.storage.get("bbsReplyTwitter");
            b && ("true" == b ? a("#isTwitter").attr("checked", !0) : a("#isTwitter").attr("checked", !1))
        },
        getRealUser: function(b) {
            var d = this;
            a.ajax({
                url: "/api?method=bbs.api.vip&params.userIds=" + __global.getUserId(),
                dataType: "json",
                cache: !1,
                success: function(a) {
                    1 === +a.success ? (a = a.data, "undefined" != typeof a.rows && 0 < a.rows.length && (d.isAuth = !0, d.authInfo = a.rows[0]), b && b()) : new TY.ui.tips({
                        type: "warn",
                        msg: a.message || "获取认证信息错误",
                        position: "midCenter",
                        time: 2500
                    })
                },
                error: function() {
                    TY.util.console("getRealUser error")
                }
            })
        },
        init: function() {
            var b = this;
            if (0 < a("#bbsPost").size()) {
                a("#textAreaContainer").width(630);
                if (!__global.isOnline()) {
                    var d = ("btn" + Math.random()).replace(".", ""),
                    c = '<div class="bbsPostLogin"><a href="javascript:void(0);" id="' + d + '">登录</a> | <a href="http://passport.tianya.cn/register/default.jsp?sourceURL=' + encodeURIComponent(window.location) + '">注册</a>';
                    LaboratoryTest() && (c += '<span class="guest-reply-tip">亲，您没账号也可以在天涯试验场直接发帖提交建议的哦</span>');
                    jQuery("#bbsPost").before(c + "</div>");
                    jQuery("#" + d).live("click",
                    function() {
                        TY.loginAction()
                    })
                }
                this.checkStorage();
                if ("undefined" != typeof bbsGlobal.itemPermission) {
                    if (4 == bbsGlobal.itemPermission && !__global.isOnline()) {
                        TY.loginAction(!1);
                        return
                    }
                    if (5 == bbsGlobal.itemPermission) {
                        if (!__global.isOnline()) return;
                        this.getRealUser(function() {
                            b.isAuth || a(".post-div").empty().addClass("bbs-info-hint").html('本版需要<a href="http://www.tianya.cn/mobile/identity" target="_blank">认证</a>后回复')
                        })
                    }
                }
                TY.loader("TY.ui.bbsPost",
                function() {
                    var b = "friend,photo"; ! __global.isOnline() && LaboratoryTest() && (b = "", jQuery("#isTwitter").closest("label").remove());
                    window.bbsContent = new TY.ui.bbsPost({
                        BBSObj: "bbsContent",
                        el: a("#bbsPost"),
                        toolWrap: a("#editorToolBar"),
                        plugins: b
                    })
                });
                this.bindEvent()
            } else a(".post-div").empty().addClass("bbs-info-hint").html("本帖已不能回复")
        },
        _showTips: function(b, c) {
            "undefined" == typeof TY.ui.tips ? TY.loader("TY.ui.tips",
            function() {
                setTimeout(function() {
                    new TY.ui.tips({
                        el: a("#bbsPost"),
                        type: c || "success",
                        msg: b || "发布成功",
                        position: "midCenter",
                        time: 3E3,
                        callback: function() {
                            a(".common-submitBtn", a(".post-div")).removeAttr("disabled")
                        }
                    })
                },
                100)
            }) : new TY.ui.tips({
                el: a("#bbsPost"),
                type: c || "success",
                msg: b || "发布成功",
                position: "midCenter",
                time: 3E3,
                callback: function() {
                    a(".common-submitBtn", a(".post-div")).removeAttr("disabled")
                }
            })
        }
    });
    c.init()
};
TUI.formatBbsMusic = function(a) {
    var e = {
        "default": {
            playerUrl: "http://static.tianyaui.com/global/ty/resources/swf/iMusicA.swf",
            width: 403,
            height: 60
        },
        imusica: {
            playerUrl: "http://static.tianyaui.com/global/ty/resources/swf/iMusicA.swf",
            width: 403,
            height: 60
        },
        imusica2: {
            playerUrl: "http://static.tianyaui.com/global/ty/resources/swf/iMusicA.swf",
            width: 403,
            height: 60
        }
    },
    c = function(a, c) {
        var e = a.match(RegExp("\\?(?:.+&)?" + c + "=(.*?)(?:&.*)?$"));
        return e ? e[1] : ""
    };
    a('span[name="music_player"]').each(function() {
        var b = a.trim(a(this).attr("value"));
        if ("" != b) {
            var d = "",
            h = "",
            g = "",
            f = "",
            d = b.split(","),
            h = b = "";
            1 === d.length ? (h = "imusica2", -1 !== d[0].indexOf("iMusicA2") ? (f = a.param({
                musicId: c(d[0], "musicId"),
                username: c(d[0], "username")
            }), c(d[0], "autoStart"), b = "&" + a.param({
                albumId: "",
                albumname: ""
            })) : f = "username=天涯音乐&musicId=0&targetUrl=" + d[0]) : (h = d[0], f = a.param({
                musicId: d[3],
                username: d[4]
            }), b = "&" + a.param({
                albumId: d[1],
                albumname: d[2]
            }));
            if (g = e[h]) {
                var d = g.width,
                h = g.height,
                g = g.playerUrl,
                j = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ,id="${application}" width="${width}" height="${height}" ,codebase=" http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab">,<param name="movie" value="${swf}" />,<param name="quality" value="high" />,<param name="bgcolor" value="${bgcolor}" />,<param name="wmode" value="transparent" />,<param name="allowScriptAccess" value="always" />,<param name="FlashVars" value="${flashvars}" />,<embed src="${swf}" quality="high" bgcolor="${bgcolor} ",width="${width}" height="${height}" name="${application}" align="middle" ,play="true" ,loop="false" ,wmode="transparent" ,quality="high" ,flashvars="${flashvars}",allowScriptAccess="always" ,type="application/x-shockwave-flash" ,pluginspage=" http://www.adobe.com/go/getflashplayer">,</embed>,</object>'.split(","),
                f = function(b) {
                    var c = j.join("");
                    a.each(b,
                    function(a, b) {
                        c = c.replace(RegExp("\\$\\{" + a + "\\}", "g"), b)
                    });
                    return c
                } ({
                    bgcolor: "",
                    application: "iMusicPlayer",
                    width: d,
                    height: h,
                    swf: g,
                    flashvars: f + "&autoStart=false" + b
                });
                a(this).html(f).css({
                    margin: "10px 0",
                    "text-align": "center",
                    display: "block"
                })
            }
        }
    })
};
TUI.initActAction = function(a) {
    var e = jQuery,
    c = {
        actionHtml: '<ul class="clearfix"><li><a href="javascript:void(0);" class="icos icos-1 js-focus">关注楼主</a></li><li><a href="javascript:void(0);" class="icos icos-3 js-album">加入专辑</a></li><li><a href="javascript:void(0);" class="icos icos-5 js-gift">赠送礼物</a></li><li><a href="javascript:void(0);" class="icos icos-2 js-twshare" >转发到天涯微博</a></li></ul>',
        bventBind: function() {
            e("#alt_action .js-focus").bind("click",
            function() {
                if (__global._isOnline) {
                    e(this);
                    var a = TUI.getRandom("doFocus_"),
                    c = e(".js-bbs-act").attr("js_activityuserid");
                    e.getScript(iceURL + "?" + e.param({
                        "var": a,
                        method: "following.ice.insert",
                        "params.followingUserId": c
                    }),
                    function() {
                        var c = window[a] || {};
                        1 == c.success ? new TY.ui.tips({
                            msg: c.message || "关注成功",
                            position: "midCenter",
                            time: 2500
                        }) : new TY.ui.tips({
                            type: "warn",
                            msg: c.message || "关注失败",
                            position: "midCenter",
                            time: 2500
                        })
                    })
                } else TY.loginAction()
            });
            e("#alt_action .js-album").attr("target", "_blank").attr("href", "http://apps.tianya.cn/my_album_titlelist?fromurl=" + encodeURIComponent(window.location));
            e("#alt_action .js-gift").bind("click",
            function() {
                if (__global._isOnline) {
                    var a = new TY.ui.pop({
                        headTxt: "赠送礼物",
                        body: '<iframe frameborder="0" scrolling="no" id="app_gift" name="app_gift" src="http://apps.tianya.cn/gift/presentselect.php?sendnames=' + encodeURIComponent("@" + decodeURIComponent(e(".js-bbs-act").attr("js_activityusername"))) + "&itemid=" + bbsGlobal.item + "&articleid=" + bbsGlobal.artId + '"></iframe>',
                        isMod: !0,
                        isShowButton: !1
                    });
                    window.objReSize || (window.giftReSize = function(c, h) {
                        e("#app_gift").css({
                            width: c,
                            height: h
                        });
                        a.popPosHandler()
                    });
                    window.closeGiftWindow || (window.closeGiftWindow = function() {
                        a.remove()
                    })
                } else TY.loginAction()
            });
            e("#alt_action .js-twshare").bind("click",
            function() {
                if (__global.isOnline()) {
                    var a = e(".js-bbs-act"),
                    c = decodeURIComponent;
                    a.attr("js_activityuserid");
                    a.attr("js_appid");
                    c(a.attr("js_title") || "");
                    c(a.attr("js_activityusername"));
                    c(a.attr("js_activityurl"));
                    a.attr("js_posttime");
                    var h = TUI.getRandom("bbs_share_t");
                    new TY.ui.pop({
                        headTxt: "转发并回复",
                        body: '<div id="' + h + '" style="width:600px;height:166px;">正在加载...</div>',
                        isMod: !0,
                        isShowButton: !1
                    }); (function() {
                        e("#" + h).html("");
                        TY.loader("TY.ui.twitterPost",
                        function() {
                            window.twitterPost = new TY.ui.twitterPost({
                                el: e("#" + h),
                                isCross: !0,
                                callback: function(a) {
                                    a = {
                                        "params.artId": TY.param.getParam("id") || bbsGlobal.artId,
                                        "params.item": TY.param.getParam("item") || bbsGlobal.item,
                                        "params.appId": jQuery("#post_head .atl-menu").attr("js_appid"),
                                        "params.appBlock": TY.param.getParam("item") || bbsGlobal.item,
                                        "params.postId": TY.param.getParam("id") || bbsGlobal.artId,
                                        "params.preUrl": jQuery("#post_head .atl-menu").attr("js_activityurl"),
                                        "params.preTitle": decodeURI(jQuery("#post_head .atl-menu").attr("js_title")),
                                        "params.preUserId": jQuery("#post_head .atl-menu").attr("_host"),
                                        "params.preUserName": decodeURI(jQuery("#post_head .atl-menu").attr("js_activityusername")),
                                        "params.prePostTime": jQuery("#post_head .atl-menu").attr("js_posttime"),
                                        "params.sourceName": "天涯论坛",
                                        "params.type": 3,
                                        "params.bScore": !0,
                                        "params.content": a.data.title,
                                        "params.bWeiBo": !1
                                    };
                                    new TY.util.proxy({
                                        name: "tianyacnProxy",
                                        path: "http://www.tianya.cn/proxy.html"
                                    },
                                    "ajax", {
                                        url: "http://www.tianya.cn/api/tw?method=tweet.ice.shareTweet",
                                        data: a,
                                        type: "post",
                                        dataType: "json",
                                        success: function() {}
                                    })
                                },
                                plugins: "friend,emotion",
                                twitterObj: "twitterPost"
                            })
                        })
                    })()
                } else TY.loginAction()
            })
        },
        init: function() {
            a.append(this.actionHtml).addClass("alt-action");
            this.bventBind()
        }
    };
    bbsGlobal.permission && c.init()
};
function bindSelPosition(a) {
    function e() {
        b.box.hide();
        c = !1
    }
    var c = !1,
    b = {
        parent: null,
        box: null,
        top: 0,
        left: 0,
        directionLeft: 0
    };
    jQuery.extend(b, a || {});
    b.parent.bind("mouseenter",
    function() {
        if (c) clearTimeout(c);
        else {
            var a = 0,
            e = 0,
            a = b.parent.offset().top + b.parent.height() + b.top,
            e = b.directionLeft ? b.parent.offset().left + b.parent.outerWidth() - b.box.outerWidth() : b.parent.offset().left + b.left;
            b.box.css({
                top: a,
                left: e
            });
            b.box.show()
        }
    }).bind("mouseleave",
    function() {
        c = setTimeout(e, 100)
    });
    b.box.bind("mouseenter",
    function() {
        c && clearTimeout(c)
    }).bind("mouseleave",
    function() {
        c = setTimeout(e, 100)
    })
}
TUI.initTopMore = function(a) {
    var e = a("a.acl-more"); ({
        init: function() {
            e.size() && (a("body").append('<div id="f_moreBox"><ul class="f-morebox" class="clearfix"><li><a href="javascript:void(0);" class="icos icos-3 js-album">加入专辑</a></li><li><a href="javascript:void(0);" class="icos icos-5 js-gift">赠送礼物</a></li></ul></div>'), bindSelPosition({
                parent: e,
                box: a("#f_moreBox"),
                top: 2,
                left: -35
            }));
            a("a.acl-more").show();
            this.bindEvent()
        },
        bindEvent: function() {
            a("a.js-album").attr("target", "_blank").attr("href", "http://apps.tianya.cn/my_album_titlelist?fromurl=" + encodeURIComponent(window.location));
            a("a.js-gift").bind("click",
            function() {
                if (__global._isOnline) {
                    var c = new TY.ui.pop({
                        headTxt: "赠送礼物",
                        body: '<iframe frameborder="0" scrolling="no" id="app_gift" name="app_gift" src="http://apps.tianya.cn/gift/presentselect.php?sendnames=' + encodeURIComponent("@" + decodeURIComponent(a(".js-bbs-act").attr("js_activityusername"))) + "&itemid=" + bbsGlobal.item + "&articleid=" + bbsGlobal.artId + '"></iframe>',
                        isMod: !0,
                        isShowButton: !1
                    });
                    window.objReSize || (window.giftReSize = function(b, d) {
                        a("#app_gift").css({
                            width: b,
                            height: d
                        });
                        c.popPosHandler()
                    });
                    window.closeGiftWindow || (window.closeGiftWindow = function() {
                        c.remove()
                    })
                } else TY.loginAction()
            })
        }
    }).init()
};
TUI.initShareBox = function(a) {
    var e = a("#shareBox"),
    c = a("a.acl-share"); ({
        shareData: {
            site: encodeURIComponent("天涯社区"),
            title: "",
            title_gbk: "",
            url: ""
        },
        getPageData: function() {
            var b = a(".js-bbs-act");
            with(this.shareData) title = b.attr("js_title"),
            title_gbk = b.attr("js_title_gbk"),
            url = b.attr("js_activityurl") + "?event=share|share-"
        },
        bindEvent: function() {
            var b = this;
            a(".js-tyweibo").bind("click",
            function() {
                if (__global.isOnline()) {
                    var b = a(".js-bbs-act"),
                    c = decodeURIComponent;
                    b.attr("js_activityuserid");
                    b.attr("js_appid");
                    c(b.attr("js_title") || "");
                    c(b.attr("js_activityusername"));
                    c(b.attr("js_activityurl"));
                    b.attr("js_posttime");
                    var e = TUI.getRandom("bbs_share_t");
                    new TY.ui.pop({
                        headTxt: "转发并回复",
                        body: '<div id="' + e + '" style="width:600px;height:166px;">正在加载...</div>',
                        isMod: !0,
                        isShowButton: !1
                    }); (function() {
                        a("#" + e).html("");
                        TY.loader("TY.ui.twitterPost",
                        function() {
                            window.twitterPost = new TY.ui.twitterPost({
                                el: a("#" + e),
                                isCross: !0,
                                type: "shareTweet",
                                oPostData: {
                                    artId: TY.param.getParam("id") || bbsGlobal.artId,
                                    item: TY.param.getParam("item") || bbsGlobal.item,
                                    appId: jQuery("#post_head .atl-menu").attr("js_appid"),
                                    appBlock: TY.param.getParam("item") || bbsGlobal.item,
                                    postId: TY.param.getParam("id") || bbsGlobal.artId,
                                    preUrl: jQuery("#post_head .atl-menu").attr("js_activityurl"),
                                    preTitle: decodeURI(jQuery("#post_head .atl-menu").attr("js_title")),
                                    preUserId: jQuery("#post_head .atl-menu").attr("_host"),
                                    preUserName: decodeURI(jQuery("#post_head .atl-menu").attr("js_activityusername")),
                                    prePostTime: jQuery("#post_head .atl-menu").attr("js_posttime"),
                                    sourceName: "天涯论坛",
                                    type: 3,
                                    bScore: !0,
                                    "params.bWeiBo": !1
                                },
                                callback: function() {},
                                plugins: "friend,emotion",
                                twitterObj: "twitterPost"
                            })
                        })
                    })()
                } else TY.loginAction()
            });
            a(".js-sinaweibo").bind("click",
            function() {
                window.open("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(b.shareData.url + "sina-weibo") + "&title=" + b.shareData.title + "&content=utf-8&ralateUid=2140585607&appkey=482040646", "sw", "toolbar=0,status=0,resizable=1,width=440,height=430")
            });
            a(".js-qzone").bind("click",
            function() {
                window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(b.shareData.url + "q-zone") + "&title=" + b.shareData.title + "&site=" + b.shareData.site, "qw", "toolbar=0,status=0,resizable=1,width=600,height=480")
            });
            a(".js-qqweibo").bind("click",
            function() {
                window.open("http://share.v.t.qq.com/index.php?c=share&a=index&url=" + encodeURIComponent(b.shareData.url + "qq-weibo") + "&assname=" + b.shareData.site + "&title=" + b.shareData.title, "qw2", "toolbar=0,status=0,resizable=1,width=600,height=480")
            });
            a(".js-renren").bind("click",
            function() {
                window.open("http://share.xiaonei.com/share/buttonshare.do?link=" + encodeURIComponent(b.shareData.url + "renren") + "&title=" + b.shareData.title, "rw", "toolbar=0,status=0,resizable=1,width=600,height=400")
            });
            a(".js-tieba").bind("click",
            function() {
                window.open("http://tieba.baidu.com/f/commit/share/openShareApi?url=" + encodeURIComponent(b.shareData.url + "tieba") + "&title=" + b.shareData.title_gbk, "tw", "toolbar=0,status=0,resizable=1,width=600,height=400")
            });
            a(".js-douban").bind("click",
            function() {
                window.open("http://www.douban.com/recommend/?url=" + encodeURIComponent(b.shareData.url + "douban") + "&title=" + b.shareData.title, "dw", "toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=400")
            });
            a(".js-penyou").bind("click",
            function() {
                window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=" + encodeURIComponent(b.shareData.url + "penyou") + "&title=" + b.shareData.title + "&site=" + b.shareData.site, "qw", "toolbar=0,status=0,resizable=1,width=600,height=480")
            })
        },
        init: function() {
            e.size() && e.html('<a href="javascript:void(0);" class="share-icos share-icos-1 js-tyweibo" title="分享到天涯微博">天涯微博</a><a href="javascript:void(0);" class="share-icos share-icos-2 js-sinaweibo" title="分享到新浪微博"></a><a href="javascript:void(0);" class="share-icos share-icos-4 js-qqweibo" title="分享到腾讯微博"></a><a href="javascript:void(0);" class="share-icos share-icos-3 js-qzone" title="分享到QQ空间"></a><a href="javascript:void(0);" class="share-icos share-icos-5 js-renren" title="分享到人人网"></a><a href="javascript:void(0);" class="share-icos share-icos-6 js-tieba" title="分享到百度贴吧"></a><a href="javascript:void(0);" class="share-icos share-icos-7 js-douban" title="分享到豆辨网"></a><a href="javascript:void(0);" class="share-icos share-icos-8 js-penyou" title="分享到腾讯朋友"></a>');
            c.size() && (a("body").append('<div id="f_shareBox" _stat="/stat/bbs/post/分享"><ul class="f-selbox" class="clearfix"><li><a href="javascript:void(0);" class="share-icos share-icos-2 js-sinaweibo">新浪微博</a></li><li><a href="javascript:void(0);" class="share-icos share-icos-4 js-qqweibo">腾讯微博</a></li><li><a href="javascript:void(0);" class="share-icos share-icos-3 js-qzone">QQ空间</a></li><li><a href="javascript:void(0);" class="share-icos share-icos-5 js-renren">人人网</a></li><li><a href="javascript:void(0);" class="share-icos share-icos-6 js-tieba">百度贴吧</a></li><li><a href="javascript:void(0);" class="share-icos share-icos-7 js-douban">豆辨网</a></li><li><a href="javascript:void(0);" class="share-icos share-icos-8 js-penyou">腾讯朋友</a></li><li><a href="javascript:void(0);" class="share-icos share-icos-1 js-tyweibo">天涯微博</a></li></ul></div>'), bindSelPosition({
                parent: c,
                box: a("#f_shareBox"),
                top: 2,
                left: -36
            }));
            this.getPageData();
            this.bindEvent()
        }
    }).init()
};
TUI.hotAct_web = function(a) { ({
        initDom: function() {
            a(".atl-location").first().before('<div id="relevant_hot_all_w" class="relevant-article mt10 clearfix" style="display:none"><div id="relevant_hot_all" class="fl clearfix" _stat="/stat/bbs/post/天涯热帖"><h3>天涯热帖</h3><ul class="text-list"></ul></div></div>')
        },
        getActList: function() {
            a.getScript("http://bbs.tianya.cn/api?" + a.param({
                "var": "hotActWeb",
                method: "bbs.api.hotArtList",
                "params.num": 10,
                "params.orderBy": 1
            }),
            function() {
                var e = window.hotActWeb;
                if (e && "1" == e.success && 0 < e.data.rows.length) {
                    for (var c = [], b = 0; b < e.data.rows.length; b++) {
                        var d = e.data.rows[b];
                        c.push('<li><a title="' + d.title + '" target="_blank" href="' + d.url + '">' + d.title + "</a></li>")
                    }
                    a("#relevant_hot_all_w ul.text-list").html(c.join(""));
                    a("#relevant_hot_all_w").show()
                }
            })
        },
        checkUrl: function() {
            return /^(http|https):\/\/.*\.(tianya\.cn|hainan\.net)\/.*/g.test(document.referrer)
        },
        init: function() {
            "1" == window.bbsGlobal.page && !__global.isOnline() && !this.checkUrl() && (this.initDom(), this.getActList())
        }
    }).init()
};
TUI.relevantAct_web = function(a) { ({
        keyWords: "",
        keyForGbk: "0",
        initDom: function() {
            a(".atl-main .atl-item").first().after('<div id="relevant_rom_all_w" class="relevant-article mt10 clearfix" style="display:none"><div id="relevant_rom_all" class="fl clearfix" _stat="/stat/bbs/post/相关阅读"><h3>相关阅读</h3><div class="relevant-key"></div><ul class="text-list"></ul></div></div>')
        },
        getWords: function() {
            function a(b, c) {
                for (var e = c.toString(1).split("&"), f = -1, j = "", i = [], k = 0; k < e.length; k++) f = e[k].indexOf("="),
                -1 != f && (j = e[k].substring(0, f), i[j] = e[k].substring(f + 1));
                return i[b]
            }
            var c = document.referrer,
            b = c.substring(c.indexOf("?") + 1, c.length);
            if (/^http:\/\/www.baidu.com\/(s|baidu)\?.*/g.test(c)) {
                if (/ie=utf-8/g.test(b)) return TY.param.getParam("wd", b) ? TY.param.getParam("wd", b) : TY.param.getParam("word", b);
                this.keyForGbk = "1";
                return a("wd", b)
            }
            if (/^http:\/\/www.google.com.hk\/search\?.*/g.test(c)) return TY.param.getParam("q", b);
            if (/^http:\/\/www.sogou.com\/web\?.*/g.test(c)) return this.keyForGbk = "1",
            a("query", b);
            if (/^http:\/\/www.so.com\/s\?.*/g.test(c) || /^http:\/\/so.360.cn\/s\?.*/g.test(c)) return TY.param.getParam("q", b);
            if (/^http:\/\/www.soso.com\/q\?.*/g.test(c)) return this.keyForGbk = "1",
            a("w", b)
        },
        getActList: function() {
            a.ajax({
                url: "http://search.tianya.cn/fcgi-bin/tj",
                dataType: "script",
                type: "get",
                scriptCharset: "gbk",
                data: {
                    pos: 6,
                    url: document.location.href,
                    relay: this.keyWords,
                    lw: +this.keyForGbk ? "gbk": "utf8",
                    title: decodeURIComponent(a(".js-bbs-act").attr("js_title")),
                    l: "utf8"
                },
                success: function() {
                    for (var e = window.tuijian_bbs_web,
                    c = e.rel_words.split(" "), b = ["关键词："], d = 0; d < c.length; d++) b.push('<a href="http://bbs.tianya.cn/tag/' + encodeURIComponent(c[d]) + '" target="_blank">' + c[d] + "</a>&nbsp;");
                    a("#relevant_rom_all_w .relevant-key").html(b.join(""));
                    c = [];
                    for (d = 0; d < e.res.length && 8 > d; d++) b = e.res[d],
                    c.push('<li><a title="' + b.title + '" target="_blank" href="' + b.url + '">' + b.title + "</a></li>");
                    a("#relevant_rom_all_w ul.text-list").html(c.join(""));
                    a("#relevant_rom_all_w").show()
                }
            })
        },
        checkUrl: function() {
            return /^(http|https):\/\/.*\.(tianya\.cn|hainan\.net)\/.*/g.test(document.referrer)
        },
        init: function() {
            "1" == window.bbsGlobal.page && !__global.isOnline() && !this.checkUrl() && (this.initDom(), this.keyWords = this.getWords(), this.getActList())
        }
    }).init()
};
TUI.relevantAct = function() {
    var a = jQuery,
    e = a("#relevant_article"); ({
        insetHtml: function(a) {
            for (var b = "",
            d = 0; d < a.length && 10 > d; d++) b += '<li><a href="' + a[d].url + '" target="_blank" title=' + a[d].title + ">" + getStrByLen(a[d].title, 60, 1) + "</a></li>";
            e.prepend('<div id="relevant_rom" class="fl clearfix"><h3>相关推荐</h3><ul class="text-list" _stat="/stat/bbs/post/相关推荐"></ul></div>');
            e.find("#relevant_rom ul.text-list").html(b);
            e.show()
        },
        init: function() {
            var c = this;
            a.ajax({
                url: "http://search.tianya.cn/fcgi-bin/tj",
                dataType: "script",
                type: "get",
                scriptCharset: "gbk",
                data: {
                    pos: 4,
                    url: document.location.href,
                    title: decodeURIComponent(a(".js-bbs-act").attr("js_title")),
                    l: "utf8"
                },
                success: function() {
                    var b = window.tuijian_bbs;
                    b && 0 < b.length && (8 > b.length ? a.ajax({
                        url: "http://search.tianya.cn/fcgi-bin/tj",
                        dataType: "script",
                        type: "get",
                        scriptCharset: "gbk",
                        data: {
                            pos: 6,
                            url: document.location.href,
                            title: decodeURIComponent(a(".js-bbs-act").attr("js_title")),
                            l: "utf8"
                        },
                        success: function() {
                            b = b.concat(window.tuijian_bbs_web.res);
                            c.insetHtml(b)
                        }
                    }) : c.insetHtml(b))
                }
            })
        }
    }).init()
};
TUI.initReport = function(a) {
    var e = function(b, c) {
        var e = a("#" + c),
        g = e.find("input[name='reason']:checked").val();
        if ("其它" == g) {
            e = e.find(".int_textarea").val();
            if ("" == e || "我对这个有意见" == e) return new TY.ui.tips({
                type: "warn",
                msg: "请填写好举报理由",
                position: "midCenter",
                time: 1500
            }),
            !1;
            g = e
        }
        0 == a(b).closest(".atl-item").size() ? jQuery.trim(a(".atl-item:first").find(".bbs-content").html()) : jQuery.trim(a(b).closest(".atl-item").find(".bbs-content").html());
        e = {
            item: bbsGlobal.item,
            artId: bbsGlobal.artId,
            replyId: a(b).attr("replyid"),
            authorId: a(b).attr("authorId"),
            author: a(b).attr("author"),
            authorTime: a(b).attr("replytime"),
            reason: g,
            reporter: __global.getUserName(),
            page: bbsGlobal.page,
            floor: a(b).closest(".atl-item").attr("id") || 0
        };
        a.ajax({
            type: "Post",
            cache: !1,
            timeout: 2E3,
            data: a.param(e),
            url: "/ty_report.jsp",
            complete: function() {
                new TY.ui.tips({
                    msg: "举报成功，非常感谢您对天涯社区的支持！",
                    position: "midCenter",
                    time: 2500
                })
            }
        });
        return ! 0
    },
    c = __global.getCookie("right");
    __global.isOnline() && /^web4=y/.test(c) ? a("a.reportme").css({
        visibility: "visible"
    }) : (a(".atl-item").hover(function() {
        var b = a(this).find("a.reportme");
        b.size() ? b.css({
            visibility: "visible"
        }) : a("#post_head a.reportme").css({
            visibility: "visible"
        })
    },
    function() {
        var b = a(this).find("a.reportme");
        b.size() ? b.css({
            visibility: "hidden"
        }) : a("#post_head a.reportme").css({
            visibility: "hidden"
        })
    }), a("#post_head .atl-head-reply").hover(function() {
        a(this).find("a.reportme").css({
            visibility: "visible"
        })
    },
    function() {
        a(this).find("a.reportme").css({
            visibility: "hidden"
        })
    }));
    a("a.reportme").live("click",
    function() {
        if (__global.isOnline()) {
            var b = "report_" + Math.floor(1E4 * Math.random()),
            c = '<div id="{reportViewID}" class="report-view"><dl><dt>请选择举报类型</dt><dd>举报对象：<a href="http://www.tianya.cn/n/{author}" target="_blank">{author}</a></dd><dd>举报原因：<label><input name="reason" type="radio" value="广告" checked="checked" />广告</label><label><input name="reason" type="radio" value="谩骂" />谩骂</label><label><input name="reason" type="radio" value="色情" />色情</label><label><input name="reason" type="radio" value="违法" />违法</label><label><input name="reason" type="radio" value="其它" />其它</label></dd><dd id="input_reason">举报内容：<textarea name="report_reason" rows="3" class="int_textarea">我对这个有意见</textarea></dd></dl></div>'.replace(/\{reportViewID\}/g, b),
            c = c.replace(/\{author\}/g, a(this).attr("author")),
            h = this,
            g = new TY.ui.pop({
                headTxt: "举报：",
                body: c,
                type: "window",
                isDrag: !1,
                Buttons: [{
                    id: "submitBtn",
                    text: "确定",
                    handler: function() {
                        e(h, b) && g.remove()
                    }
                },
                {
                    id: "operation1",
                    text: "取消",
                    handler: function() {
                        j();
                        g.remove()
                    }
                }],
                closeHandler: function() {
                    j()
                }
            }),
            f = a("#" + b);
            f.find(".int_textarea").bind("focus",
            function() {
                this.value = ""
            });
            f.find("input[name='reason']").bind("change",
            function() {
                "其它" == a(this).val() ? f.find("#input_reason").show() : f.find("#input_reason").hide()
            });
            var j = function() {
                f.find("input[name='reason']").unbind("change");
                f.find(".int_textarea").unbind("focus")
            }
        } else TY.loginAction()
    })
};
TUI.initAdmin = function() {
    __global.isOnline() && /^web4=y/.test(__global.getCookie("right")) && In.load(TY_lite_url + "/js/bbs/admin.js?v=20130411", "js")
};
TUI.initMark = function(a) {
    var e = function(c, b) {
        __global.isOnline() ? setTimeout(function() {
            a.ajax({
                url: iceURL,
                dataType: "script",
                type: "get",
                data: b,
                success: function() {
                    var a = window[b["var"]];
                    a && a.success ? new TY.ui.tips({
                        msg: c + '成功，<a href="http://bbs.tianya.cn/my_collect.jsp" target="_blank">查看我的收藏</a>',
                        position: "midCenter",
                        time: 2500
                    }) : new TY.ui.tips({
                        type: "warn",
                        msg: a.message || c + "失败",
                        position: "midCenter",
                        time: 2500
                    })
                }
            })
        },
        0) : TY.loginAction()
    }; (function() {
        var c = a(".js-bbs-act"),
        b = {
            "var": "add_mark",
            method: "bbsArticleMark.insert",
            "params.blockId": bbsGlobal.item,
            "params.articleId": bbsGlobal.artId,
            "params.title": decodeURI(c.attr("js_title")),
            "params.authorId": c.attr("js_activityuserid"),
            "params.authorName": decodeURI(c.attr("js_activityusername")),
            "params.markResId": 0,
            "params.markFloorId": 0,
            "params.grade": c.attr("js_grade")
        }; ("主版" != bbsGlobal.itemType || bbsGlobal.isNewArticle) && a("a.mark").live("click",
        function() {
            var c = a(this).closest(".atl-item");
            a.extend(b, {
                "params.markResId": c.attr("replyid"),
                "params.markFloorId": c.attr("id")
            });
            e("收藏", b)
        });
        a("a.marktop").live("click",
        function() {
            var c = a(".js-bbs-act");
            a.extend(b, {
                "params.markResId": c.attr("js_postid"),
                "params.markFloorId": 0
            });
            e("收藏", b)
        })
    })()
};
TUI.initBrand = function(a) {
    var e = jQuery,
    c = decodeURIComponent(e(".js-bbs-act").attr("js_title"));
    e.ajax({
        url: "http://803.tianya.cn/keyword",
        dataType: "script",
        type: "get",
        scriptCharset: "gbk",
        data: {
            varPara: "adsObj",
            handle: "json",
            returnNum: 6,
            title: c
        },
        success: function() {
            var b = [],
            c = window.adsObj;
            c && c.ads && c.ads.length && (jQuery.each(c.ads,
            function(a, c) {
                b.push("<li><span>.</span>");
                b.push('<a target="_blank" href="' + c.ads_url + '">' + c.ads_title + "</a>");
                b.push("</li>")
            }), a.html(['<div class="thd"><h3 class="clearfix"><a target="_blank" href="http://2000.bbs.tianya.cn/djmanage/djpage.asp?djid=12385">更多</a></h3></div><ul class="clearfix">', b.join(""), "</ul>"].join("")), jQuery("#spaceBrandAd").show())
        }
    })
};
TUI.clickArticle = function(a) {
    var e = a(".js-bbs-act"),
    c = bbsGlobal.item,
    b = decodeURIComponent(e.attr("js_blockname")),
    d = bbsGlobal.artId,
    h = decodeURIComponent(e.attr("js_title")),
    e = decodeURIComponent(e.attr("js_activityusername")),
    g = parseInt(__global.getUserId());
    0 < g || (g = 336604);
    var c = c.toLowerCase(),
    f = {},
    f = !0 == __global.isOnline() ? {
        item: c,
        itemName: b,
        idArticle: d,
        title: h,
        writer: e,
        userId: g
    }: {
        item: c,
        idArticle: d
    };
    a.getScript("http://click.tianyaui.com/clkme.jsp?" + a.param(f))
};
TUI.listenKeyBoardPrevNext = function(a) {
    a(document).keydown(function(e) {
        var c = a(e.target).prop("tagName");
        "INPUT" === c || "TEXTAREA" === c || (e = e.which, c = null, 37 === e && (c = a(".js-keyboard-prev").attr("href")), 39 === e && (c = a(".js-keyboard-next").attr("href")), c && (window.location.href = c))
    })
};
TUI.setFolatMenu = function(a) {
    a("body").append('<div id="flat_menu" class="bbs-flat-menu"><div class="scroll-btn"><a href="javascript:scroll(0, 0);" class="s-btn scroll-top-btn js-scroll-top-btn"></a><a href="#fabu_anchor" class="s-btn toreply-btn js-toreply-btn"></a></div></div>');
    var e = a("#flat_menu"),
    c = a("#doc"),
    b = 0,
    d = 0,
    h = 0,
    g = a.browser.msie && "6.0" === a.browser.version ? !0 : !1,
    f = g ? "absolute": "fixed",
    j = function() {
        b = a(window).width();
        d = c.outerWidth();
        h = e.outerWidth();
        dScrollTopHeight = e.outerHeight();
        var j = Math.max(a(document).height() - c.offset().top - c.outerHeight() - 30, 0);
        b > d + 2 * h ? e.css({
            left: (b + d) / 2,
            right: "auto"
        }) : e.css({
            left: "auto",
            right: 0
        });
        g ? e.css({
            top: a(document).scrollTop() + a(window).height() - j - dScrollTopHeight,
            bottom: "auto",
            position: f
        }).show() : e.css({
            top: "auto",
            position: f
        }).show()
    };
    a("a.js-toreply-btn").bind("click", replyTop);
    var i = null;
    g ? a(window).bind("resize scroll",
    function() {
        e.hide();
        clearTimeout(i);
        i = setTimeout(function() {
            j()
        },
        300)
    }) : a(window).bind("resize",
    function() {
        j()
    });
    j()
};
TUI.getJS = function(a) {
  //  a.getScript("http://static.tianyaui.com/global/wizard/js/wizard.js")
};
TUI.initFontSet = function() {
    function a() {
        e(".bbs-content").css({
            "font-size": d.size + "px",
            "font-family": 2 === +d.family ? "微软雅黑": "宋体",
            "padding-left": d.padding,
            "padding-right": d.padding
        });
        2 === +d.family ? e(".font-set-view .font-family").addClass("font-family-2") : e(".font-set-view .font-family").removeClass("font-family-2");
        e(".btn-color").removeClass("btn-color-sel");
        e("body").removeClass("bg-1 bg-2 bg-3 bg-4 bg-5");
        d.bgColor && (e(".btn-color").eq(d.bgColor - 1).addClass("btn-color-sel"), e("body").addClass("bg-" + d.bgColor));
        TY.io.storage.set(c, d)
    }
    var e = jQuery,
    c = "bbs_font",
    b = function() {
        this.size = 16;
        this.padding = 0;
        this.bgColor = this.family = 1
    },
    d = new b;
    TY.io.storage.get(c) && "" != TY.io.storage.get(c) && (e.extend(d, jQuery.parseJSON(TY.io.storage.get("bbs_font"))), a());
    var h = e("#font_set"),
    g = e(".font-set-view");
    e(document).bind("click",
    function(a) {
        a = e(a.target);
        0 == a.closest(g).size() && a.prop("id") != h.attr("id") && (g.hide(), h.attr("_open", 0))
    });
    h.bind("click",
    function() {
        var a = e(this);
        "undefined" == typeof a.attr("_open") || 0 == a.attr("_open") ? (a.attr("_open", 1), g.show()) : (g.hide(), a.attr("_open", 0))
    });
    e(".font-size-add", g).bind("click",
    function() {
        64 != d.size && (d.size += 2, 64 < d.size && (d.size = 64), a())
    });
    e(".font-size-red", g).bind("click",
    function() {
        12 != d.size && (d.size -= 2, 12 > d.size && (d.size = 12), a())
    });
    e(".font-family", g).bind("click",
    function() {
        d.family = 1 === d.family ? 2 : 1;
        a()
    });
    e(".padding-add", g).bind("click",
    function() {
        120 != d.padding && (d.padding += 10, 120 < d.padding && (d.padding = 120), a())
    });
    e(".padding-red", g).bind("click",
    function() {
        0 != d.padding && (d.padding -= 10, 0 > d.padding && (d.padding = 0), a())
    });
    e(".btn-color", g).bind("click",
    function() {
        var b = +e(this).attr("_value");
        b != d.bgColor && (d.bgColor = b, a())
    });
    e(".btn-reset", g).bind("click",
    function() {
        d = new b;
        a();
        TY.io.storage.remove(c)
    })
};
TUI.checkVipStatus = function(a) {
    var e = a(".js-vip-check");
    if (0 !== e.size()) {
        var c = {},
        b = "";
        e.each(function() {
            b = a(this).attr("uid");
            isNaN( + b) || (c[b] || (c[b] = []), c[b].push(a(this)))
        });
        var d = [];
        a.each(c,
        function(a) {
            d.push(a)
        });
        if (0 !== d.length) {
            var h = function(a) {
                var b = 0,
                c = "",
                e = "";
                1 == a.mtype && (b = 3);
                1 == a.vtype && (b = 2);
                1 == a.btype && (b = 1, c = a.bd, e = a.burl);
                2 == a.type && (b = 3);
                1 == a.type && (b = 2);
                3 == a.type && (b = 1);
                return {
                    type: b,
                    desc: c,
                    url: e
                }
            },
            g = function(b, c) {
                var c = h(c),
                e = TUI.getVipCode(c.type, c.desc, c.url);
                a.each(b,
                function() {
                    3 != c.type && a(this).after(e)
                })
            },
            e = "http://806.tianya.cn/adsp/user/getVIipUser.jsp?userid=" + d.join(",");
            a.ajax({
                url: e,
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function(b) {
                    if (b && 0 !== b.length) {
                        var e = "",
                        d = [];
                        a.each(b,
                        function(a, b) {
                            e = b.ui || "";
                            e = b.userId;
                            d = c[e] || [];
                            g(d, b)
                        })
                    }
                }
            })
        }
    }
};
TUI.userNameRelated = function() {
    function a(a) {
        return b(".js-bbs-act").attr("js_activityuserid") === a ? !0 : !1
    }
    function e(b, c, e, d) {
        c = '<div id="person_info_detail" class="none" ><div class="person_arrow"></div>' + ('<div class="fl"><p class="imgArea"><img src="http://tx.tianyaui.com/logo/' + b + '" width="50" height="50"/></p><div class="focus-btn"><a _data="' + b + '" class="t-setfocus t-notfocus" href="javascript:void(0);"></a></div></div>') + '<div class="fl ml10"><ul>';
        see_only_uname ? (c = a(b) ? c + ('<li class="see_ico none"><a href="javascript:void(0)" class="see_hostone" _host="' + d + '">只看楼主</a></li>') : c + ('<li class="see_ico none"><a href="javascript:void(0)" class="see_soneone" _host="' + d + '" pid="' + e + '">只看此人</a></li>'), c += '<li class="see_ico"><a href="javascript:void(0)" class="see_all">查看全部</a></li>') : (c = a(b) ? c + ('<li class="see_ico"><a href="javascript:void(0)" class="see_hostone" _host="' + d + '">只看楼主</a></li>') : c + ('<li class="see_ico"><a href="javascript:void(0)" class="see_soneone" _host="' + d + '" pid="' + e + '">只看此人</a></li>'), c += '<li class="see_ico none"><a href="javascript:void(0)" class="see_all">查看全部</a></li>');
        return c + '<li class="email_ico"><a href="javascript:void(0)" class="msgSend">发短信息</a></li>' + ('<li class="msg_ico"><a href="http://www.tianya.cn/' + b + '/bbs" target="_blank">TA的帖子</a></li>') + ('<li class="pic_ico"><a href="http://www.tianya.cn/' + b + '/album" target="_blank">TA的相册</a></li>') + "</ul></div></div>"
    }
    function c() {
        b("#person_info_detail").remove();
        b(document).unbind("click.person_info");
        clearTimeout(d)
    }
    var b = jQuery,
    d;
    b(".js-vip-check").livequery("mouseenter",
    function() {
        clearTimeout(d);
        0 < b("#person_info_detail").size() && b("#person_info_detail").remove();
        var a = b(this).offset(),
        g = b(this).attr("uid"),
        f = b(this).attr("uname"),
        j = b(this).closest(".atl-item").attr("_host"),
        i = b(this).closest(".atl-item").attr("id") || "post_head",
        k = b(".js-bbs-act").attr("js_activityusername");
        b("body").append(e(g, f, i, k));
        b("#person_info_detail").attr("uid", g);
        b("#person_info_detail").css({
            top: a.top + 22,
            left: a.left - 56
        }).show(0);
        b(".msgSend", b("#person_info_detail")).bind("click",
        function() {
            TY.loader("TY.ui.sendMsg",
            function() {
                new TY.ui.sendMsg({
                    recUname: f
                })
            })
        });
        b(".see_hostone", b("#person_info_detail")).bind("click",
        function() {
            var a = b(this).attr("_host");
            see_only_uname ? see_only_uname != a ? (b(".atl-item[_host='" + a + "']").show(), setOnlyUser(a)) : cancelOnlyUser() : setOnlyUser(a);
            b(this).parent().hide();
            b(this).parent().next().show()
        });
        b(".see_soneone", b("#person_info_detail")).bind("click",
        function() {
            var a = i || "";
            see_only_uname ? cancelOnlyUser(a) : setOnlyUser(j, a);
            b(this).parent().hide();
            b(this).parent().next().show()
        });
        b(".see_all", b("#person_info_detail")).bind("click",
        function() {
            cancelOnlyUser(i);
            b(this).parent().hide();
            b(this).parent().prev().show();
            b(".bbs-info-hint").remove()
        });
        b("#person_info_detail").livequery("mouseout",
        function() {
            d = setTimeout(function() {
                c()
            },
            1E3)
        }).livequery("mouseover",
        function() {
            clearTimeout(d)
        });
        b(document).bind("click.person_info",
        function(a) {
            0 < b("#person_info_detail").size() ? (a = a.target, !b.contains(b("#person_info_detail").get(0), a) && b("#person_info_detail").get(0) != a && c()) : c()
        })
    }).livequery("mouseleave",
    function() {
        d = setTimeout(function() {
            c()
        },
        1E3)
    })
};
var _gaq = _gaq || [],
_hmt = _hmt || [];
TUI.statistics = function(a) {
    a.getScript("http://click.tianyaui.com/b.jsp?user=" + encodeURIComponent(__global._isOnline ? __global.getUserName() : ""));
    a.ajax({
        url: "http://static.tianyaui.com/global/ty/stat/stat_20080313.js",
        dataType: "script",
        type: "get",
        scriptCharset: "gbk",
        success: function() {}
    });
    a.ajax({
        url: "http://hm.baidu.com/h.js?bc5755e0609123f78d0e816bf7dee255",
        cache: !0,
        dataType: "script",
        type: "get",
        success: function() {
            var a = TY.param.getParam("event");
            a && (a = a.split("|"), 2 == a.length && _hmt.push(["_trackEvent", a[1], a[0], "", ""]))
        }
    });
    window.TUI && (TUI.urchin = function(a) {
        _hmt.push(["_trackEvent", a, "click", "", ""])
    },
    jQuery(document).click(function(a) {
        for (a = jQuery(a.target); 0 !== a.size() && "BODY" !== a.prop("tagName");) a.attr("_stat") && TUI.urchin(a.attr("_stat")),
        a = a.parent()
    }))
};
function BasicFun() {
    TUI.run(TUI.initAdmin);
    TUI.run(TUI.formatBbsMusic);
    resetDom.init();
    TUI.ifMod("#font_set", TUI.initFontSet);
    TUI.run(TUI.initReport);
    TUI.run(TUI.initMark);
    TUI.run(TUI.initPostView);
    TUI.run(TUI.listenKeyBoardPrevNext);
    TUI.run(TUI.initTopMore);
    TUI.run(TUI.initShareBox)
}
if ("undefined" != typeof bbsGlobal.itemPermission && 4 == bbsGlobal.itemPermission && !__global._isOnline) TY.loginAction(!1);
else {
    var isIE6 = jQuery.browser.msie && 6 == jQuery.browser.version ? !0 : !1;
    isIE6 || BasicFun();
    jQuery(document).ready(function(a) {
        isIE6 && BasicFun();
        __global.isOnline() && "y" == __global.getPartCookie("right", "web4") && jQuery(".facebiz").css("display", "inline-block");
        TUI.run(TUI.checkVipStatus);
        TUI.run(TUI.userNameRelated);
        TUI.run(TUI.setFolatMenu);
        TUI.run(TUI.relevantAct_web);
        TUI.ifMod("#relevant_article", TUI.relevantAct);
        TUI.ifMod("#SpaceBrand", TUI.initBrand);
        TUI.run(TUI.show2DBarcode);
        __global.isOnline() ? a("#author_name_reply").html(__global.getUserName()) : a("#author_name_reply").parent().remove();
        TUI.run(TUI.clickArticle);
        TUI.run(TUI.getJS);
        TUI.run(TUI.statistics);
        a("#ty_msg_mod").livequery(function() {
            a(this).css("zIndex", 1E6)
        });
        var e = "no11,no04,travel,843,685,798,973,12,131,872,840,243,919,680,no21,687,990,689,769,903,819,688,686,725,739,750,817,818,820,831,832,833,874,881,884,886,909,922,926,928,153,156,159,173,176,178,179,183,186,189,191,194,199,202,203,207,208,212,220,223,224,227,230,231,233,234,235,237,238,244,248,249,250,251,253,254,255,256,257,259,260,261,262,263,264,265,266,267,269,270,272,273,276,277,278,283,284,285,287,290,293,294,296,297,299,300,301,303,304,306,307,308,311,312,314,315,316,317,319,320,322,323,325,326,327,329,331,333,338,339,340,341,342,360,365,385,388,39,391,392,393,40,41,419,42,421,44,449,45,452,454,455,456,457,458,459,46,460,462,463,464,465,466,467,47,488,489,490,491,492,493,5001,5004,5005,5006,5007,5009,5010,5016,5018,5019,5023,5027,5028,5029,5030,5031,5032,5033,5034,5035,5036,5037,5038,5039,5040,5043,5044,5045,5046,5047,5048,5049,5050,5051,5052,5053,5055,5058,5059,506,5060,5061,5062,5063,5064,5065,5066,5068,5069,5070,5072,5075,5076,5078,5082,5085,5086,5087,5089,5090,5091,5092,5093,5094,5095,5096,5097,5098,5099,5100,5101,5102,5103,5104,5106,5107,5108,5109,5110,5111,5112,5113,5114,5115,5120,5121,5122,5123,5124,5125,5127,5128,5129,5130,5131,5132,5133,5135,5137,5138,5139,5140,5141,5142,5143,5144,5146,5147,5148,5150,5153,5154,5155,5156,5157,5158,5159,5160,5161,5162,5163,5164,5165,5166,5167,5168,5169,5170,5171,5172,5173,5174,5175,5176,5177,5178,5179,5180,5181,5182,5183,5184,5185,5186,5187,5188,5189,5190,5191,5192,5193,5194,5195,5197,5198,5199,52,5201,5202,5203,5204,5205,5206,5207,5208,5209,5210,5211,5212,5213,5214,5215,5216,5217,5218,5219,5220,5221,5222,5223,5224,5225,5226,56,58,59,60,62,63,65,670,677,72,726,73,736,754,757,77,78,79,794,80,82,88,89,90,92,937,97,ehomephot,hn,laoba,mfinances,outseachina,schoolculture,servantonline,volunteerhn,xhw,22".split(",");
        "undefined" != typeof e && 0 < e.length && bbsGlobal.item && 0 < e.indexOf(bbsGlobal.item) && a.getScript(TY_lite_url + "/js/bbs/highlight.js");
        a(".addpost").livequery("click",
        function(a) { ! __global.isOnline() && !1 === LaboratoryTest() && (TY.loginAction(), a.preventDefault())
        })
    })
};