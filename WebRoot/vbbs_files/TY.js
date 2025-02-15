TY.namespace("ui");
TY.loadedModule("TY.ui.bbsPost"); (function(e) {
    var g = function(a, b) {
        return a.replace(/{(.*?)}/igm,
        function(a, d) {
            return b[d] ? b[d] : a
        })
    };
    window.TY.ui.bbsPost = function(a) {
        var b = this;
        TY.loader("TY.util.cursorPoint",
        function() {
            b.init(a)
        })
    };
    e.extend(TY.ui.bbsPost.prototype, {
        position: {},
        pluginsArray: [],
        setConfig: function(a) {
            this.el = a.el || null;
            this.toolWrap = a.toolWrap || null;
            this.BBSObj = a.BBSObj || null;
            this.plugins = {};
            var b = this;
            this.pluginsInit = {
                friend: {
                    text: "朋友",
                    callback: function(a) {
                        TY.loader("TY.ui.friendV2",
                        function() {
                            new TY.ui.friend({
                                textArea: a.find("textarea"),
                                el: e(".editorToolBar", a).find(".friend"),
                                isClickHide: !0,
                                left: 6,
                                top: 0,
                                isAutoTip: !1
                            })
                        })
                    }
                },
                photo: {
                    text: "图片",
                    callback: function(a) {
                        TY.loader("TY.ui.photoV2",
                        function() {
                            var c = b.el.find("textarea");
                            TY.util.cursorPoint.bindCursorPoint(c.get(0));
                            new TY.ui.photo({
                                wrapContainer: a,
                                el: e(".editorToolBar", a).find(".photo"),
                                uploadPic: {
                                    callback: function(a) {
                                        b.insertPhoto(a)
                                    }
                                },
                                newSociPic: {
                                    callback: function(a) {
                                        b.insertPhoto(a)
                                    }
                                },
                                webPic: {
                                    callback: function(a) {
                                        b.insertPhoto(a)
                                    }
                                },
                                noPreview: !0,
                                app: "bbs",
                                picNum: 50,
                                top: 28,
                                left: -20
                            })
                        })
                    }
                },
                video: {
                    text: "视频",
                    callback: function(a) {
                        TY.loader("TY.ui.videoV2",
                        function() {
                            new TY.ui.video({
                                el: e(".video", e(".editorToolBar", a)),
                                textarea: a.find("textarea"),
                                callback: function(a) {
                                    b.insertVideo(a)
                                },
                                top: 2,
                                left: -20
                            })
                        })
                    }
                },
                music: {
                    text: "音乐",
                    callback: function(a) {
                        TY.loader("TY.ui.musicboxV2",
                        function() {
                            new TY.ui.musicbox({
                                el: e(".editorToolBar", a).find(".music"),
                                showArea: jQuery("#textAreaContainer"),
                                top: 6,
                                left: 22
                            })
                        })
                    }
                },
                vote: {
                    text: "投票",
                    callback: function(a) {
                        TY.loader("TY.ui.popWrap",
                        function() {
                            b.plugins.vote = new TY.ui.popWrap({
                                el: e(".editorToolBar", a).find(".vote"),
                                content: '<div id="iframeArea_vote" style="overflow:hidden;"></div>',
                                mode: "remove",
                                position: "bottom",
                                top: 10,
                                left: -286,
                                arrowLeft: 310,
                                isArrow: !0,
                                bodyClick: !0,
                                iframeResize: {
                                    name: "iframeArea_vote",
                                    path: "http://apps.tianya.cn/vote/forum_vote_page.html?callbackObj=" + b.BBSObj + "&fn=pluginCallback&iframeId=iframeArea_vote_Frame&_v=" + (new Date).getTime(),
                                    width: 726,
                                    height: 600
                                }
                            })
                        })
                    }
                },
                act: {
                    text: "活动",
                    callback: function(a) {
                        TY.loader("TY.ui.popWrap",
                        function() {
                            b.plugins.act = new TY.ui.popWrap({
                                el: e(".editorToolBar", a).find(".act"),
                                content: '<div id="iframeArea_act"></div>',
                                mode: "remove",
                                position: "bottom",
                                top: 10,
                                left: -342,
                                arrowLeft: 366,
                                isArrow: !0,
                                bodyClick: !0,
                                iframeResize: {
                                    name: "iframeArea_act",
                                    path: "http://apps.tianya.cn/event/zujian/add.php?callbackObj=" + b.BBSObj + "&fn=pluginCallback&iframeId=iframeArea_act_Frame&_v=" + (new Date).getTime(),
                                    width: 726,
                                    height: 300
                                }
                            })
                        })
                    }
                },
                album: {
                    text: "专辑",
                    callback: function(a) {
                        TY.loader("TY.ui.popWrap",
                        function() {
                            b.plugins.album = new TY.ui.popWrap({
                                el: e(".editorToolBar", a).find(".album"),
                                content: '<div id="iframeArea_album"></div>',
                                mode: "remove",
                                position: "bottom",
                                top: 10,
                                left: -232,
                                arrowLeft: 250,
                                isArrow: !0,
                                bodyClick: !0,
                                iframeResize: {
                                    name: "iframeArea_album",
                                    path: "http://apps.tianya.cn/templates/album_forum_page.html?callbackObj=" + b.BBSObj + "&fn=pluginCallback&iframeId=iframeArea_album_Frame&_v=" + (new Date).getTime(),
                                    width: 726,
                                    height: 480
                                }
                            })
                        })
                    }
                }
            };
            var c = a.plugins || "";
            if (c) if (a = c.split(","), 0 < a.length) for (var c = 0,
            d = a.length; c < d; c++) this.pluginsArray.push(a[c]);
            else this.pluginsArray.push(c)
        },
        init: function(a) {
            this.setConfig(a);
            this.insertHtml();
            this.bindEvent()
        },
        insertHtml: function() {
            var a = this;
            this.toolWrap.addClass("editorToolBar");
            for (var b = 0,
            c = this.pluginsArray.length; b < c; b++) this.toolWrap.append("<span class='" + this.pluginsArray[b] + "'>" + this.pluginsInit[this.pluginsArray[b]].text + "</span>"),
            e("." + this.pluginsArray[b], this.toolWrap).bind("click",
            function() {
                a.pluginsInit[this.className].callback(a.el)
            })
        },
        insertPhoto: function(a) {
            var b = "\n",
            c, d = this.el.find("textarea"),
            e;
            this.position = TY.util.cursorPoint.get(d.get(0));
            0 === +this.position.end && (this.position.start = d.val().length, this.position.end = d.val().length);
            e = d.val().substring(0, this.position.end);
            c = d.val().substring(this.position.end);
            if (a) {
                for (var h = 0,
                g = a.length; h < g; h++) b += a[h].mid + "\n";
                d.val(e + b + c);
                TY.util.cursorPoint.toTextAt(d.get(0), d.val().length - c.length)
            }
        },
        insertVideo: function(a) {
            var b, c = this.el.find("textarea"),
            d;
            a && (d = c.val().substring(0, this.position.end), b = c.val().substring(this.position.end), a = "\n" + a.flashUrl + "\n" + a.title + "\n", c.val(d + a + b))
        },
        bindEvent: function() {
            var a = this.el.find("textarea"),
            b = this;
            this.toolWrap.find("span").click(function() {
                b.position = TY.util.cursorPoint.get(a.get(0))
            });
            this.el.find("textarea").bind("click",
            function() { ! __global.isOnline() && !1 == (window.bbsGlobal && "797" == bbsGlobal.item ? !0 : !1) && TY.loginAction()
            })
        },
        createPreview: function(a, b, c) {
            var d = e(".ty_bbs_preview_area", this.el),
            f;
            f = e(a, this.twitterPoster);
            0 < f.size() ? f.append(g(c, b)) : (0 == a.indexOf(".") ? (f = a.replace(".", ""), d.append('<ul class="' + f + '"></ul>')) : 0 == a.indexOf(".") ? (f = a.replace("#", ""), d.append('<ul id="' + f + '"></ul>')) : alert("传入id有误"), e(a, this.twitterPoster).append(g(c, b)))
        },
        pluginCallback: function(a, b, c) {
            "undefined" == typeof c && (c = !0);
            switch (b) {
            case "vote":
                this.createPreview(".vote_preview", a, '<li val="{id}"><a href="{url}" target="_blank">{content}</a><a class="fr" href="javascript:(0);" onclick="jQuery(this).parent().remove();return false;">删除</a></li>');
                this.plugins.vote.remove();
                break;
            case "event":
                e(".act_preview").empty();
                this.createPreview(".act_preview", a, '<li val="{id}"><a href="{url}" target="_blank">{content}</a><a class="fr" href="javascript:(0);" onclick="jQuery(this).parent().remove();return false;">删除</a></li>');
                this.plugins.act.remove();
                break;
            case "album":
                c && this.plugins.album.remove()
            }
        }
    })
})(jQuery);