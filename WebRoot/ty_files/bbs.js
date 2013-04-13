TUI.initHotBbsList = function(a) {
    var b = jQuery; ({
        listen: function() {
            var d = this;
            a.find(".page a:first").addClass("sel");
            a.find(".page a").live("click",
            function() {
                b(this).hasClass("bbs-list-more") || d.setPage(b(this))
            })
        },
        setPage: function(a) {
            var b = a.index();
            a.siblings("a").removeClass("sel");
            a.addClass("sel");
            a.parent().siblings(".bbs-list").removeClass("curr").eq(b).addClass("curr")
        }
    }).listen()
};
TUI.listenBbsTypeSearch = function() {
    var a = jQuery,
    b = a("#bbs_type_search .top-search-key");
    "" === a.trim(b.val()) && b.val("版内搜索");
    b.blur(function() {
        "" === a.trim(a(this).val()) && a(this).val("版内搜索")
    }).focus(function() {
        "版内搜索" === a.trim(a(this).val()) && a(this).val("")
    })
};
TUI.initUserInfo = function(a) {
    a("#left").prepend(['<ul class="user-list left-userinfo"><li class="clearfix"><div class="headbox">', '<div class="head50"><img src="http://tx.tianyaui.com/logo/small/' + __global.getUserId() + '" /></div>', "</div>", '<p class="text">' + __global.getUserName() + "</p>", "</li></ul>"].join(""));
    a.getScript("/api?" + a.param({
        "var": "vipType",
        method: "bbs.api.vip",
        "params.userIds": __global.getUserId()
    }),
    function() {
        var b = window.vipType;
        if (b && 1 == b.success && b.data && 0 < b.data.rows.length) {
            var d = "";
            switch ( + b.data.rows[0].type) {
            case 1:
                d = '<em class="my-16 my-16-company" title="企业认证用户"></em>';
                break;
            case 2:
                d = '<em class="my-16 my-16-star" title="天涯牛人认证"></em>';
                break;
            case 3:
                d = '<em class="my-16 my-16-mobile" title="手机认证用户"></em>';
                break;
            default:
                d = ""
            }
            a("#left .user-list p.text").append(d)
        }
    })
};
TUI.initLeftNav = function(a) {
    var b = jQuery; ({
        init: function() {
            this.mobileSet();
            this.addPowerLink();
            this.bindEvent();
            this.updateFolder()
        },
        mobileSet: function() {
            TY.mobile.isMobile() && b("#bbs_left_nav").css({
                position: "static",
                "margin-top": "-72px"
            })
        },
        addPowerLink: function() {
            var b = TY.io.cookie.get("right"),
            c = "";
            /^web4=y/.test(b) && (c = c + '<li><a href="http://www4.tianya.cn/manager/index.asp" class="child_link" itemid="0">管理中心</a></li>' + ('<li><a href="' + getLink.item(931) + '" class="child_link" itemid="0">斑竹之家</a></li>'), c += '<li><a href="/list-1028-1.shtml" class="child_link" itemid="0">内部论坛</a></li>');
            /portal=y/.test(b) && (c += '<li><a href="http://www4.tianya.cn/new/PortalTianyaforum/articleslist.asp?stritem=VIP1" class="child_link" itemid="0">工作论坛</a></li>');
            c.length && a.find(".nav_child_box[_service=1] .nav_child").append(c)
        },
        bindEvent: function() {
            var d = a.find(".nav_parent");
            d.delegate("a", "click",
            function(c) {
                var e = b(this);
                if (/#$/.test(e.attr("href"))) if (c.preventDefault(), e.hasClass("expand")) e.hasClass("fn_my_block") && 1 === d.find('a[href="#"]').size() && (e.removeClass("expand"), a.find(".nav_child_box").show(), a.find("#my_block_box").hide());
                else {
                    var c = d.find('a[href="#"]'),
                    f = c.index(e);
                    c.removeClass("expand").addClass("folder");
                    e.addClass("expand");
                    e.hasClass("fn_my_block") ? (a.find(".nav_child_box").hide(), a.find("#my_block_box").show()) : (a.find(".nav_child_box:not([_service])").hide().eq(f).show(), a.data("tmpIdx", f))
                }
            });
            a.find(".nav_child_box:not([_service]) .child_link").click(function() {
                TY.io.storage.set("left_nav", [a.data("tmpIdx"), b(this).attr("itemid"), a.scrollTop()])
            });
            a.find(".nav_child_box[_service] .child_link").click(function() {
                TY.io.storage.set("left_nav", [null, 0, 3E3])
            })
        },
        updateFolder: function() {
            var b = window.bbsGlobal ? bbsGlobal.item: null;
            if (b) {
                TY.io.storage.get("left_nav");
                var c = jQuery.parseJSON(TY.io.storage.get("left_nav"));
                if (c) {
                    var e = a.find(".nav_parent").find('a[href="#"]'),
                    f = e.eq(c[0]);
                    f.trigger("click");
                    b && c[1] == b && (e.children("li").removeClass("curr"), f.closest("li").addClass("curr"));
                    a.scrollTop(c[2])
                }
            }
        }
    }).init()
};
TUI.initBlockList = function() {
    jQuery('.bbs-block-detail[_type="' + jQuery(".bbs-block-tab .curr").html() + '"]').show().siblings(".bbs-block-detail").hide();
    jQuery(".bbs-block-tab").find("a").live("click",
    function(a) {
        a = a || window.event;
        a.stopPropagation();
        a.preventDefault();
        jQuery(this).addClass("curr").parent().siblings().find("a").removeClass("curr");
        jQuery('.bbs-block-detail[_type="' + jQuery(".bbs-block-tab .curr").html() + '"]').show().siblings(".bbs-block-detail").hide()
    })
};
TUI.initMyTopBlock = function() { ({
        key: "footstep",
        viewMax: __global.isOnline() ? 5 : 8,
        baseData: [{
            id: "funinfo",
            name: "娱乐八卦"
        },
        {
            id: "free",
            name: "天涯杂谈"
        },
        {
            id: "feeling",
            name: "情感天地"
        },
        {
            id: "worldlook",
            name: "国际观察"
        },
        {
            id: "develop",
            name: "经济论坛"
        }],
        init: function() {
            1 === jQuery("#myTopBlock").size() && this.initData();
            window.bbsGlobal && bbsGlobal.item && bbsGlobal.itemName && this.writeFootstep(bbsGlobal.item, bbsGlobal.itemName)
        },
        writeFootstep: function(a, b) {
            for (var d = TY.io.storage,
            c = d.get(this.key), e = null, e = !1, c = c ? jQuery.parseJSON(c) : [], f = 0; f < c.length; f++) if (c[f].id == a) {
                e = c[f];
                c.splice(f, 1);
                c.unshift(e);
                e = !0;
                break
            }
            e || c.unshift({
                id: a,
                name: b
            });
            c.length > this.viewMax && (c.length = this.viewMax);
            d.set(this.key, c)
        },
        initDom: function(a) {
            var b = "",
            d = [];
            jQuery.each(a,
            function(a, b) {
                d.push('<dd><a href="' + getLink.item(b.id) + '">' + b.name + "</a></dd>")
            });
            __global.isOnline() && (b = '<dl class="my-block-links fr"><dd><a href="http://bbs.tianya.cn/my_compose_list.jsp">我的帖子</a></dd><dd><a href="http://bbs.tianya.cn/my_reply_list.jsp">我的回帖</a></dd><dd><a href="http://bbs.tianya.cn/my_collect.jsp">我的收藏</a></dd></dl>', d.push('<dd><a class="fb" title="版块管理" href="http://bbs.tianya.cn/my_block.jsp">&gt;&gt;</a></dd>'));
            jQuery("#myTopBlock").html([b, "<dl><dt>常去:</dt>", d.join(""), "</dl>"].join("")).show()
        },
        initData: function() {
            var a = this,
            b = function(b) {
                for (var c = TY.io.storage.get(a.key), e = b.length, c = c ? jQuery.parseJSON(c) : [], f = !1, e = [], e = 0, h = c.length - 1; 0 <= h; h--) for (var g = 0; g < b.length; g++) if (c[h].id == b[g].id) {
                    b.splice(g, 1);
                    b.unshift(c[h]);
                    e++;
                    break
                }
                e = a.viewMax - b.length + e;
                2 > e && (e = 2);
                e = c.slice(0, e);
                for (h = 0; h < e.length; h++) for (g = 0; g < e.length && g < b.length; g++) if (b[g].id == e[h].id) {
                    b.splice(g, 1);
                    break
                }
                b = e.concat(b);
                e = b.length;
                for (g = 0; b.length < a.viewMax && g < a.baseData.length; g++) {
                    f = !1;
                    for (h = 0; h < e; h++) if (a.baseData[g].id == b[h].id) {
                        f = !0;
                        break
                    }
                    f || b.push(a.baseData[g])
                }
                a.initDom(b.slice(0, a.viewMax))
            };
            __global.isOnline() ? this.loadFav(function(a) {
                a || (a = []);
                b(a)
            }) : b([])
        },
        loadFav: function(a) {
            var b = TUI.getRandom("MyBlock");
            jQuery.getScript(iceURL + "?" + jQuery.param({
                "var": b,
                method: "userblock.ice.selectItems"
            }),
            function() {
                var d = window[b];
                d && d.data && d.data.items && 0 < d.data.items.length ? a(d.data.items) : a(null)
            })
        }
    }).init()
};
TUI.initTyBbsStat = function() {
    var a = document.location.href; ("http://bbs.tianya.cn/index.jsp" === a || "http://bbs.tianya.cn/" === a) && jQuery(".bbs-list-box").add(".section").add("#myTopBlock").click(function(a) {
        var d = jQuery(a.target),
        c = jQuery(this).attr("_tystat");
        d.is("a") && c && clickPartLink(a, "stat", c)
    })
};
TUI.initSetMyBlock = function(a) {
    var b = jQuery; ({
        key: "footstep",
        init: function() {
            this.initFootstep();
            this.listenDel()
        },
        initFootstep: function() {
            var b = TY.io.storage.get(this.key),
            b = b ? jQuery.parseJSON(b) : null,
            c = [];
            if (b) {
                for (var e = a.children(".block").eq(1).children(".my-block"), f = 0; f < b.length; f++) c.push("<li>" + (f + 1) + '.<a href="' + getLink.item(b[f].id) + '">' + b[f].name + "</a></li>");
                e.html(c.join(""))
            }
        },
        listenDel: function() {
            var d = this;
            a.delegate(".del", "click",
            function() {
                d.actDel(b(this))
            })
        },
        actDel: function(a) {
            if (__global.isOnline()) {
                var c = a.siblings("a");
                new TY.ui.pop({
                    headTxt: "提示",
                    body: "是否删除收藏的版块【" + c.html() + "】？",
                    type: "confirm",
                    isMod: !0,
                    yesHandler: function() {
                        var e = c.attr("_id"),
                        f = TUI.getRandom("delBlock");
                        b.getScript(iceURL + "?" + b.param({
                            method: "userblock.ice.delete",
                            "params.blockId": e,
                            "var": f
                        }),
                        function() {
                            window[f] && 1 == window[f].success && a.parent().remove()
                        })
                    }
                })
            } else TY.loginAction()
        }
    }).init()
};
TUI.listenBlockCollect = function(a) {
    var b = {
        loading: !1,
        listen: function() {
            var b = this;
            window.bbsGlobal && bbsGlobal.item && bbsGlobal.itemName && (this.loadData(), jQuery(document).delegate(".a-collection", "click",
            function() {
                b.actAdd(a(this))
            }), jQuery(document).delegate(".a-collected", "click",
            function() {
                b.actDel(a(this))
            }))
        },
        loadData: function() {
            var a = TUI.getRandom("myBlock");
            jQuery.getScript(iceURL + "?" + jQuery.param({
                "var": a,
                method: "userblock.ice.selectItems"
            }),
            function() {
                var b = window[a];
                if (b && b.data && b.data.items && 0 < b.data.items.length) for (var b = b.data.items,
                e = jQuery(".a-collection").attr("_id"), f = 0; f < b.length; f++) if (e == b[f].id) {
                    jQuery(".a-collection").removeClass("a-collection").addClass("a-collected").attr("title", "点击取消收藏");
                    break
                }
            })
        },
        actAdd: function(d) {
            if (__global.isOnline()) {
                if (!b.loading) {
                    b.loading = !0;
                    var c = d.attr("_id"),
                    e = TUI.getRandom("addBlock");
                    a.getScript(iceURL + "?" + a.param({
                        method: "userblock.ice.add",
                        "params.blockId": c,
                        "var": e
                    }),
                    function() {
                        window[e] && 1 == window[e].success && (d.removeClass("a-collection").addClass("a-collected").attr("title", "点击取消收藏"), b.loading = !1)
                    })
                }
            } else TY.loginAction()
        },
        actDel: function(d) {
            if (__global.isOnline()) {
                if (!b.loading) {
                    b.loading = !0;
                    var c = d.attr("_id"),
                    e = TUI.getRandom("delBlock");
                    a.getScript(iceURL + "?" + a.param({
                        method: "userblock.ice.delete",
                        "params.blockId": c,
                        "var": e
                    }),
                    function() {
                        window[e] && 1 == window[e].success && (d.removeClass("a-collected").addClass("a-collection").attr("title", "收藏本版"), b.loading = !1)
                    })
                }
            } else TY.loginAction()
        }
    };
    b.listen()
};
TUI.initRightZone = function(a) { ({
        listen: function() {
            a.find(".top_zone_tab").mouseover(this.clickFn)
        },
        clickFn: function() {
            jQuery(this).siblings().removeClass("on");
            jQuery(this).addClass("on");
            var b = jQuery(this).index();
            a.find(".top_zone_box").hide().eq(b).show()
        }
    }).listen()
};
TUI.initPowers = function(a) {
    var b = jQuery,
    d = {
        itemid: bbsGlobal.item || !1,
        delMore: !1,
        powerLIst: [{
            id: 61,
            e_fun: function(a) {
                this.delMore || (a.append('<a href="http://admin.bbs.tianya.cn/action/deleteSome.jsp?type=0&item=' + this.itemid + '" class="fred" target="_blank">帖子批删</a>'), this.delMore = !0)
            }
        },
        {
            id: 63,
            e_fun: function(a) {
                this.delMore || (a.append('<a href="http://admin.bbs.tianya.cn/action/deleteSome.jsp?type=0&item=' + this.itemid + '" class="fred" target="_blank">帖子批删</a>'), this.delMore = !0)
            }
        },
        {
            id: 65,
            e_fun: function(a) {
                this.delMore || (a.append('<a href="http://admin.bbs.tianya.cn/action/deleteSome.jsp?type=0&item=' + this.itemid + '" class="fred" target="_blank">帖子批删</a>'), this.delMore = !0)
            }
        },
        {
            id: 122,
            e_fun: function(a) {
                a.append('<a href="http://admin.bbs.tianya.cn/userdeny/DenyController.do?item=' + this.itemid + '" class="fred" target="_blank">用户管理</a>')
            }
        }],
        checkCookie: function() { / ^web4 = y / .test(TY.io.cookie.get("right")) && this.itemid && this.getPower()
        },
        getPower: function() {
            var a = this;
            b.getScript("/api?" + b.param({
                "var": "power",
                method: "bbs.ice.userItemPower",
                "params.item": a.itemid
            }),
            function() {
                var b = window.power;
                if (b && 1 == b.success && b.data && b.data.rows && b.data.rows.itemPower && 0 < b.data.rows.itemPower.length) a.addAdminFun(b.data.rows.itemPower);
                else return ! 1
            })
        },
        addAdminFun: function(c) {
            var d = this;
            b.each(this.powerLIst,
            function() {
                var f = this;
                b.each(c,
                function(b, c) {
                    if ( + c.id === f.id) return f.e_fun.call(d, a),
                    !1
                })
            });
            a.append('<a href="http://admin.bbs.tianya.cn/log/actionLog.jsp?item=' + this.itemid + '" class="fred" target="_blank">管理日志</a>')
        }
    };
    TY.io && TY.io.cookie ? d.checkCookie() : TY.loader("TY.io.cookie",
    function() {
        d.checkCookie()
    })
};
TUI.initSpaceBanner = function(a) {
    var b = jQuery,
    d = a.find(".tag-list li");
    0 < d.size() && d.live("hover",
    function() {
        if (!b(this).hasClass("curr")) {
            var c = d.index(this);
            d.removeClass("curr").eq(c).addClass("curr");
            b(".view-list .tag-content", a).removeClass("curr").eq(c).addClass("curr")
        }
    })
};
TUI.initRelatedBlock = function() {
    var a = jQuery;
    TY.module.add("Qing.ui.scrollList", {
        path: TY_lite_url + "/js/scrollList.js?_v=20130411",
        type: "js",
        charset: "utf-8"
    });
    TY.loader("Qing.ui.scrollList",
    function() {
        a("#main_xiangguan").scrollList({
            thumbObj: ".main-list ul",
            thumbParent: ".main-list",
            btnUp: ".btns .up",
            btnDown: ".btns .down",
            slideTime: 200
        })
    })
};
TUI.inItemFocus = function(a) {
    var b = jQuery,
    d = b(".a-collection,.a-collected").attr("_id"),
    c = !1;
    d && (a.each(function(a, f) {
        var h = b(f).find(".js-item-link[itemId='" + d + "']");
        0 < h.size() && (h.closest("li").addClass("curr"), b(this).removeClass("fold-close"), c = !0)
    }), c || a.eq(0).removeClass("fold-close"));
    c || a.eq(0).removeClass("fold-close")
};
TUI.getMyCityList = function(a) {
    var b = jQuery;
    TY.loader("TY.data.area",
    function() {
        var d = TY_getAreaData.getCity(__global.getCookie("__cid")),
        c = TY_getAreaData.getProvinceByCid(__global.getCookie("__cid")),
        e = b(".a-collection,.a-collected").attr("_id");
        b.getScript("/api?" + b.param({
            "var": "itemList",
            method: "bbs.api.relationItem",
            "params.prov": c.pName,
            "params.city": d.cityName
        }),
        function() {
            var c = window.itemList;
            if (c && 1 == c.success && c.data && 0 < c.data.rows.length) {
                var d = "";
                b.each(c.data.rows,
                function(a, b) {
                    var c = '<a href="' + getLink.item(b.item) + '" class="js-item-link" itemid="' + b.item + '">' + b.item_name + "</a>";
                    d = e == b.item ? d + ('<li class="curr">' + c + "</li>") : d + ("<li>" + c + "</li>")
                });
                d += '<li class="line"></li>';
                a.find("ul").prepend(d)
            }
            TUI.ifMod(".js-item-list", TUI.inItemFocus)
        })
    })
};
TUI.shangwuscroll = function(a) { ({
        options: {
            showCount: 3,
            itemCount: 0,
            itemList: null,
            itemWidth: 0,
            slideTime: 500
        },
        scrolling: !1,
        backUpItemList: function() {
            var b = a.find(".main-view ul li");
            this.options.itemWidth = b.outerWidth();
            a.find(".main-view ul").css({
                width: 3E3
            });
            var d = b.clone();
            b.parent().append(d);
            this.options.itemLIst = a.find(".main-view ul")
        },
        listenEvent: function() {
            var b = this;
            a.find(".next").live("click",
            function() {
                if (b.scrolling) return ! 1;
                var a = parseInt(b.options.itemLIst.css("margin-left"));
                a >= -((b.options.itemCount - 1) * b.options.itemWidth) ? a -= b.options.itemWidth: (b.options.itemLIst.css({
                    "margin-left": 0
                }), a = -b.options.itemWidth);
                b.scrolling = !0;
                b.options.itemLIst.animate({
                    "margin-left": a
                },
                b.options.slideTime,
                function() {
                    b.scrolling = !1
                })
            });
            a.find(".prev").live("click",
            function() {
                if (b.scrolling) return ! 1;
                var a = parseInt(b.options.itemLIst.css("margin-left"));
                0 > a || (a = -(b.options.itemCount * b.options.itemWidth), b.options.itemLIst.css({
                    "margin-left": a
                }));
                a += b.options.itemWidth;
                b.scrolling = !0;
                b.options.itemLIst.animate({
                    "margin-left": a
                },
                b.options.slideTime,
                function() {
                    b.scrolling = !1
                })
            })
        },
        init: function() {
            this.options.itemCount = a.find(".main-view ul li").size() || 0;
            if (this.options.itemCount <= this.options.showCount) return ! 1;
            this.backUpItemList();
            this.listenEvent()
        }
    }).init()
};
TUI.initStarBbs = function(a) { ({
        starBbsApi: "cmsArticle.ice.select",
        querySize: 8,
        init: function() {
            var b = this,
            d = this.getAreaId(),
            c = TUI.getRandom("cmsArticle");
            d && jQuery.getScript(iceURL + "?" + jQuery.param({
                method: this.starBbsApi,
                "params.sectionIds": d,
                "params.querySize": this.querySize,
                "var": c
            }),
            function() {
                var d = window[c];
                d && 1 == d.success && d.data && d.data.item && 0 < d.data.item.length && a.html(b.createDom(d.data.item)).show()
            })
        },
        createDom: function(a) {
            for (var d = [], c = null, e = 0, f = a.length; e < f; e++) c = a[e],
            d.push("<li>"),
            d.push('<a title="' + c.article_title + '" target="_blank" href="' + c.article_link + '">' + c.article_title + "</a>"),
            d.push("</li>");
            return ['<div class="hd clearfix"><h2>同城话题</h2></div><div class="bd"><ul class="text-list">', d.join(""), '</ul></div><div class="ft"></div></div>'].join("")
        },
        getAreaId: function() {
            var a = __global.getUserCityId();
            if (a && isNaN(a) && "CN" != a) return 3820;
            for (var a = [{
                pid: "1",
                pName: " 北京",
                citys: [{
                    cid: "1",
                    cityName: "北京"
                }]
            },
            {
                pid: "2",
                pName: "上海",
                citys: [{
                    cid: "2",
                    cityName: "上海"
                }]
            },
            {
                pid: "3",
                pName: "天津",
                citys: [{
                    cid: "3",
                    cityName: "天津"
                }]
            },
            {
                pid: "4",
                pName: "重庆",
                citys: [{
                    cid: "4",
                    cityName: "重庆"
                }]
            },
            {
                pid: "5",
                pName: "河北",
                citys: [{
                    cid: "5",
                    cityName: "石家庄"
                },
                {
                    cid: "6",
                    cityName: "保定"
                },
                {
                    cid: "7",
                    cityName: "唐山"
                },
                {
                    cid: "102",
                    cityName: "张家口"
                },
                {
                    cid: "103",
                    cityName: "秦皇岛"
                },
                {
                    cid: "104",
                    cityName: "沧州"
                },
                {
                    cid: "105",
                    cityName: "邢台"
                },
                {
                    cid: "106",
                    cityName: "承德"
                },
                {
                    cid: "107",
                    cityName: "廊坊"
                },
                {
                    cid: "108",
                    cityName: "邯郸"
                },
                {
                    cid: "109",
                    cityName: "衡水"
                }]
            },
            {
                pid: "6",
                pName: "山西",
                citys: [{
                    cid: "8",
                    cityName: "太原"
                },
                {
                    cid: "9",
                    cityName: "大同"
                },
                {
                    cid: "10",
                    cityName: "晋城"
                },
                {
                    cid: "110",
                    cityName: "长治"
                },
                {
                    cid: "111",
                    cityName: "运城"
                },
                {
                    cid: "112",
                    cityName: "朔州"
                },
                {
                    cid: "113",
                    cityName: "晋中"
                },
                {
                    cid: "114",
                    cityName: "吕梁"
                },
                {
                    cid: "115",
                    cityName: "临汾"
                },
                {
                    cid: "116",
                    cityName: "忻州"
                },
                {
                    cid: "117",
                    cityName: "阳泉"
                }]
            },
            {
                pid: "7",
                pName: "内蒙古",
                citys: [{
                    cid: "11",
                    cityName: "呼和浩特"
                },
                {
                    cid: "12",
                    cityName: "包头"
                },
                {
                    cid: "118",
                    cityName: "通辽"
                },
                {
                    cid: "119",
                    cityName: "鄂尔多斯"
                },
                {
                    cid: "120",
                    cityName: "呼伦贝尔"
                },
                {
                    cid: "121",
                    cityName: "巴彦淖尔市"
                },
                {
                    cid: "122",
                    cityName: "乌海"
                },
                {
                    cid: "123",
                    cityName: "兴安盟"
                },
                {
                    cid: "124",
                    cityName: "赤峰"
                },
                {
                    cid: "125",
                    cityName: "阿拉善盟"
                },
                {
                    cid: "126",
                    cityName: "锡林郭勒盟"
                },
                {
                    cid: "127",
                    cityName: "乌兰察布市"
                }]
            },
            {
                pid: "8",
                pName: "辽宁",
                citys: [{
                    cid: "13",
                    cityName: "沈阳"
                },
                {
                    cid: "14",
                    cityName: "大连"
                },
                {
                    cid: "128",
                    cityName: "朝阳"
                },
                {
                    cid: "129",
                    cityName: "本溪"
                },
                {
                    cid: "130",
                    cityName: "抚顺"
                },
                {
                    cid: "131",
                    cityName: "鞍山"
                },
                {
                    cid: "132",
                    cityName: "盘锦"
                },
                {
                    cid: "133",
                    cityName: "铁岭"
                },
                {
                    cid: "134",
                    cityName: "锦州"
                },
                {
                    cid: "135",
                    cityName: "葫芦岛"
                },
                {
                    cid: "136",
                    cityName: "丹东"
                },
                {
                    cid: "137",
                    cityName: "阜新"
                },
                {
                    cid: "138",
                    cityName: "营口"
                },
                {
                    cid: "139",
                    cityName: "辽阳"
                }]
            },
            {
                pid: "9",
                pName: "吉林",
                citys: [{
                    cid: "15",
                    cityName: "长春"
                },
                {
                    cid: "16",
                    cityName: "四平"
                },
                {
                    cid: "17",
                    cityName: "吉林"
                },
                {
                    cid: "140",
                    cityName: "通化"
                },
                {
                    cid: "141",
                    cityName: "白山"
                },
                {
                    cid: "142",
                    cityName: "延边朝鲜族自治州"
                },
                {
                    cid: "143",
                    cityName: "辽源"
                },
                {
                    cid: "144",
                    cityName: "松原"
                },
                {
                    cid: "145",
                    cityName: "白城"
                }]
            },
            {
                pid: "10",
                pName: "黑龙江",
                citys: [{
                    cid: "18",
                    cityName: "哈尔滨"
                },
                {
                    cid: "19",
                    cityName: "佳木斯"
                },
                {
                    cid: "146",
                    cityName: "齐齐哈尔"
                },
                {
                    cid: "147",
                    cityName: "绥化"
                },
                {
                    cid: "148",
                    cityName: "大兴安岭地区"
                },
                {
                    cid: "149",
                    cityName: "伊春"
                },
                {
                    cid: "150",
                    cityName: "鹤岗"
                },
                {
                    cid: "151",
                    cityName: "双鸭山"
                },
                {
                    cid: "152",
                    cityName: "黑河"
                },
                {
                    cid: "153",
                    cityName: "鸡西"
                },
                {
                    cid: "154",
                    cityName: "大庆"
                },
                {
                    cid: "155",
                    cityName: "牡丹江"
                },
                {
                    cid: "156",
                    cityName: "七台河"
                }]
            },
            {
                pid: "11",
                pName: "江苏",
                citys: [{
                    cid: "20",
                    cityName: "南京"
                },
                {
                    cid: "21",
                    cityName: "苏州"
                },
                {
                    cid: "22",
                    cityName: "扬州"
                },
                {
                    cid: "23",
                    cityName: "无锡"
                },
                {
                    cid: "24",
                    cityName: "徐州"
                },
                {
                    cid: "157",
                    cityName: "常州"
                },
                {
                    cid: "158",
                    cityName: "连云港"
                },
                {
                    cid: "159",
                    cityName: "南通"
                },
                {
                    cid: "160",
                    cityName: "盐城"
                },
                {
                    cid: "161",
                    cityName: "宿迁"
                },
                {
                    cid: "162",
                    cityName: "泰州"
                },
                {
                    cid: "163",
                    cityName: "镇江"
                },
                {
                    cid: "164",
                    cityName: "淮安"
                }]
            },
            {
                pid: "12",
                pName: "浙江",
                citys: [{
                    cid: "25",
                    cityName: "杭州"
                },
                {
                    cid: "26",
                    cityName: "温州"
                },
                {
                    cid: "27",
                    cityName: "绍兴"
                },
                {
                    cid: "28",
                    cityName: "宁波"
                },
                {
                    cid: "165",
                    cityName: "丽水"
                },
                {
                    cid: "166",
                    cityName: "衢州"
                },
                {
                    cid: "167",
                    cityName: "舟山"
                },
                {
                    cid: "168",
                    cityName: "台州"
                },
                {
                    cid: "169",
                    cityName: "湖州"
                },
                {
                    cid: "170",
                    cityName: "嘉兴"
                },
                {
                    cid: "171",
                    cityName: "金华"
                }]
            },
            {
                pid: "13",
                pName: "安徽",
                citys: [{
                    cid: "29",
                    cityName: "合肥"
                },
                {
                    cid: "30",
                    cityName: "芜湖"
                },
                {
                    cid: "31",
                    cityName: "安庆"
                },
                {
                    cid: "32",
                    cityName: "马鞍山"
                },
                {
                    cid: "172",
                    cityName: "淮北"
                },
                {
                    cid: "173",
                    cityName: "淮南"
                },
                {
                    cid: "174",
                    cityName: "亳州"
                },
                {
                    cid: "175",
                    cityName: "池州"
                },
                {
                    cid: "176",
                    cityName: "六安"
                },
                {
                    cid: "177",
                    cityName: "阜阳"
                },
                {
                    cid: "178",
                    cityName: "蚌埠"
                },
                {
                    cid: "179",
                    cityName: "滁州"
                },
                {
                    cid: "180",
                    cityName: "铜陵"
                },
                {
                    cid: "181",
                    cityName: "宿州"
                },
                {
                    cid: "182",
                    cityName: "黄山"
                },
                {
                    cid: "183",
                    cityName: "宣城"
                },
                {
                    cid: "184",
                    cityName: "巢湖"
                }]
            },
            {
                pid: "14",
                pName: "福建",
                citys: [{
                    cid: "33",
                    cityName: "福州"
                },
                {
                    cid: "34",
                    cityName: "厦门"
                },
                {
                    cid: "35",
                    cityName: "泉州"
                },
                {
                    cid: "185",
                    cityName: "南平"
                },
                {
                    cid: "186",
                    cityName: "漳州"
                },
                {
                    cid: "187",
                    cityName: "龙岩"
                },
                {
                    cid: "188",
                    cityName: "宁德"
                },
                {
                    cid: "189",
                    cityName: "莆田"
                },
                {
                    cid: "190",
                    cityName: "三明"
                }]
            },
            {
                pid: "15",
                pName: "江西",
                citys: [{
                    cid: "36",
                    cityName: "南昌"
                },
                {
                    cid: "37",
                    cityName: "景德镇"
                },
                {
                    cid: "38",
                    cityName: "赣州"
                },
                {
                    cid: "39",
                    cityName: "九江"
                },
                {
                    cid: "191",
                    cityName: "吉安"
                },
                {
                    cid: "192",
                    cityName: "宜春"
                },
                {
                    cid: "193",
                    cityName: "抚州"
                },
                {
                    cid: "194",
                    cityName: "新余"
                },
                {
                    cid: "195",
                    cityName: "萍乡"
                },
                {
                    cid: "196",
                    cityName: "上饶"
                },
                {
                    cid: "197",
                    cityName: "鹰潭"
                }]
            },
            {
                pid: "16",
                pName: "山东",
                citys: [{
                    cid: "40",
                    cityName: "济南"
                },
                {
                    cid: "41",
                    cityName: "青岛"
                },
                {
                    cid: "42",
                    cityName: "淄博"
                },
                {
                    cid: "43",
                    cityName: "威海"
                },
                {
                    cid: "198",
                    cityName: "德州"
                },
                {
                    cid: "199",
                    cityName: "莱芜"
                },
                {
                    cid: "200",
                    cityName: "聊城"
                },
                {
                    cid: "201",
                    cityName: "枣庄"
                },
                {
                    cid: "202",
                    cityName: "潍坊"
                },
                {
                    cid: "203",
                    cityName: "泰安"
                },
                {
                    cid: "204",
                    cityName: "东营"
                },
                {
                    cid: "205",
                    cityName: "烟台"
                },
                {
                    cid: "206",
                    cityName: "临沂"
                },
                {
                    cid: "207",
                    cityName: "日照"
                },
                {
                    cid: "208",
                    cityName: "滨州"
                },
                {
                    cid: "209",
                    cityName: "荷泽"
                },
                {
                    cid: "210",
                    cityName: "济宁"
                }]
            },
            {
                pid: "17",
                pName: "河南",
                citys: [{
                    cid: "44",
                    cityName: "郑州"
                },
                {
                    cid: "45",
                    cityName: "开封"
                },
                {
                    cid: "46",
                    cityName: "洛阳"
                },
                {
                    cid: "47",
                    cityName: "安阳"
                },
                {
                    cid: "48",
                    cityName: "南阳"
                },
                {
                    cid: "211",
                    cityName: "许昌"
                },
                {
                    cid: "212",
                    cityName: "三门峡"
                },
                {
                    cid: "213",
                    cityName: "平顶山"
                },
                {
                    cid: "214",
                    cityName: "驻马店"
                },
                {
                    cid: "215",
                    cityName: "周口"
                },
                {
                    cid: "216",
                    cityName: "濮阳"
                },
                {
                    cid: "217",
                    cityName: "鹤壁"
                },
                {
                    cid: "218",
                    cityName: "济源"
                },
                {
                    cid: "219",
                    cityName: "焦作"
                },
                {
                    cid: "220",
                    cityName: "商丘"
                },
                {
                    cid: "221",
                    cityName: "漯河"
                },
                {
                    cid: "222",
                    cityName: "新乡"
                },
                {
                    cid: "223",
                    cityName: "信阳"
                }]
            },
            {
                pid: "18",
                pName: "湖北",
                citys: [{
                    cid: "49",
                    cityName: "武汉"
                },
                {
                    cid: "50",
                    cityName: "宜昌"
                },
                {
                    cid: "51",
                    cityName: "襄樊"
                },
                {
                    cid: "224",
                    cityName: "鄂州"
                },
                {
                    cid: "225",
                    cityName: "咸宁"
                },
                {
                    cid: "226",
                    cityName: "孝感"
                },
                {
                    cid: "227",
                    cityName: "荆州"
                },
                {
                    cid: "228",
                    cityName: "十堰"
                },
                {
                    cid: "229",
                    cityName: "黄冈"
                },
                {
                    cid: "230",
                    cityName: "黄石"
                },
                {
                    cid: "231",
                    cityName: "恩施土家族苗族自治州"
                },
                {
                    cid: "232",
                    cityName: "荆门"
                },
                {
                    cid: "233",
                    cityName: "随州"
                }]
            },
            {
                pid: "19",
                pName: "湖南",
                citys: [{
                    cid: "52",
                    cityName: "长沙"
                },
                {
                    cid: "53",
                    cityName: "株洲"
                },
                {
                    cid: "54",
                    cityName: "常德"
                },
                {
                    cid: "55",
                    cityName: "岳阳"
                },
                {
                    cid: "234",
                    cityName: "益阳"
                },
                {
                    cid: "235",
                    cityName: "永州"
                },
                {
                    cid: "236",
                    cityName: "郴州"
                },
                {
                    cid: "237",
                    cityName: "湘西土家族苗族自治州"
                },
                {
                    cid: "238",
                    cityName: "邵阳"
                },
                {
                    cid: "239",
                    cityName: "怀化"
                },
                {
                    cid: "240",
                    cityName: "娄底"
                },
                {
                    cid: "241",
                    cityName: "湘潭"
                },
                {
                    cid: "242",
                    cityName: "张家界"
                },
                {
                    cid: "243",
                    cityName: "衡阳"
                }]
            },
            {
                pid: "20",
                pName: "广东",
                citys: [{
                    cid: "56",
                    cityName: "广州"
                },
                {
                    cid: "58",
                    cityName: "佛山"
                },
                {
                    cid: "59",
                    cityName: "潮州"
                },
                {
                    cid: "60",
                    cityName: "东莞"
                },
                {
                    cid: "244",
                    cityName: "清远"
                },
                {
                    cid: "245",
                    cityName: "河源"
                },
                {
                    cid: "246",
                    cityName: "揭阳"
                },
                {
                    cid: "247",
                    cityName: "汕头"
                },
                {
                    cid: "248",
                    cityName: "珠海"
                },
                {
                    cid: "249",
                    cityName: "肇庆"
                },
                {
                    cid: "250",
                    cityName: "梅州"
                },
                {
                    cid: "251",
                    cityName: "中山"
                },
                {
                    cid: "252",
                    cityName: "云浮"
                },
                {
                    cid: "253",
                    cityName: "江门"
                },
                {
                    cid: "254",
                    cityName: "惠州"
                },
                {
                    cid: "255",
                    cityName: "茂名"
                },
                {
                    cid: "256",
                    cityName: "韶关"
                },
                {
                    cid: "257",
                    cityName: "汕尾"
                },
                {
                    cid: "258",
                    cityName: "湛江"
                },
                {
                    cid: "259",
                    cityName: "阳江"
                },
                {
                    cid: "359",
                    cityName: "顺德"
                }]
            },
            {
                pid: "21",
                pName: "广西",
                citys: [{
                    cid: "61",
                    cityName: "南宁"
                },
                {
                    cid: "62",
                    cityName: "柳州"
                },
                {
                    cid: "63",
                    cityName: "桂林"
                },
                {
                    cid: "260",
                    cityName: "河池"
                },
                {
                    cid: "261",
                    cityName: "崇左"
                },
                {
                    cid: "262",
                    cityName: "钦州"
                },
                {
                    cid: "263",
                    cityName: "玉林"
                },
                {
                    cid: "264",
                    cityName: "梧州"
                },
                {
                    cid: "265",
                    cityName: "贺州"
                },
                {
                    cid: "266",
                    cityName: "贵港"
                },
                {
                    cid: "267",
                    cityName: "北海"
                },
                {
                    cid: "268",
                    cityName: "防城港"
                },
                {
                    cid: "269",
                    cityName: "百色"
                },
                {
                    cid: "270",
                    cityName: "来宾"
                }]
            },
            {
                pid: "22",
                pName: "海南",
                citys: [{
                    cid: "64",
                    cityName: "海口"
                },
                {
                    cid: "65",
                    cityName: "三亚"
                },
                {
                    cid: "66",
                    cityName: "儋州"
                },
                {
                    cid: "67",
                    cityName: "文昌"
                },
                {
                    cid: "68",
                    cityName: "乐东"
                },
                {
                    cid: "69",
                    cityName: "五指山"
                },
                {
                    cid: "70",
                    cityName: "琼海"
                },
                {
                    cid: "71",
                    cityName: "万宁"
                },
                {
                    cid: "72",
                    cityName: "定安"
                },
                {
                    cid: "73",
                    cityName: "昌江"
                },
                {
                    cid: "74",
                    cityName: "临高"
                },
                {
                    cid: "75",
                    cityName: "澄迈"
                },
                {
                    cid: "76",
                    cityName: "东方"
                },
                {
                    cid: "77",
                    cityName: "陵水"
                },
                {
                    cid: "78",
                    cityName: "保亭"
                },
                {
                    cid: "79",
                    cityName: "屯昌"
                },
                {
                    cid: "80",
                    cityName: "琼中"
                },
                {
                    cid: "81",
                    cityName: "白沙"
                }]
            },
            {
                pid: "23",
                pName: "四川",
                citys: [{
                    cid: "82",
                    cityName: "成都"
                },
                {
                    cid: "83",
                    cityName: "自贡"
                },
                {
                    cid: "84",
                    cityName: "绵阳"
                },
                {
                    cid: "85",
                    cityName: "乐山"
                },
                {
                    cid: "271",
                    cityName: "雅安"
                },
                {
                    cid: "272",
                    cityName: "凉山彝族自治州"
                },
                {
                    cid: "273",
                    cityName: "宜宾"
                },
                {
                    cid: "274",
                    cityName: "泸州"
                },
                {
                    cid: "275",
                    cityName: "资阳"
                },
                {
                    cid: "276",
                    cityName: "阿坝藏族羌族自治州"
                },
                {
                    cid: "277",
                    cityName: "甘孜藏族自治州"
                },
                {
                    cid: "278",
                    cityName: "德阳"
                },
                {
                    cid: "279",
                    cityName: "攀枝花"
                },
                {
                    cid: "280",
                    cityName: "广元"
                },
                {
                    cid: "281",
                    cityName: "内江"
                },
                {
                    cid: "282",
                    cityName: "巴中"
                },
                {
                    cid: "283",
                    cityName: "眉山"
                },
                {
                    cid: "284",
                    cityName: "达州"
                },
                {
                    cid: "285",
                    cityName: "南充"
                },
                {
                    cid: "286",
                    cityName: "遂宁"
                },
                {
                    cid: "287",
                    cityName: "广安"
                }]
            },
            {
                pid: "24",
                pName: "贵州",
                citys: [{
                    cid: "86",
                    cityName: "贵阳"
                },
                {
                    cid: "87",
                    cityName: "遵义"
                },
                {
                    cid: "88",
                    cityName: "六盘水"
                },
                {
                    cid: "288",
                    cityName: "毕节"
                },
                {
                    cid: "289",
                    cityName: "黔南布依族苗族自治州"
                },
                {
                    cid: "290",
                    cityName: "黔东南苗族侗族自治州"
                },
                {
                    cid: "291",
                    cityName: "黔西南布依族苗族自治州"
                },
                {
                    cid: "292",
                    cityName: "铜仁"
                },
                {
                    cid: "293",
                    cityName: "安顺"
                }]
            },
            {
                pid: "25",
                pName: "云南",
                citys: [{
                    cid: "89",
                    cityName: "昆明"
                },
                {
                    cid: "294",
                    cityName: "迪庆藏族自治州"
                },
                {
                    cid: "295",
                    cityName: "文山壮族苗族自治州"
                },
                {
                    cid: "296",
                    cityName: "德宏德宏傣族景颇族自治州"
                },
                {
                    cid: "297",
                    cityName: "临沧"
                },
                {
                    cid: "298",
                    cityName: "玉溪"
                },
                {
                    cid: "299",
                    cityName: "西双版纳傣族自治州"
                },
                {
                    cid: "300",
                    cityName: "楚雄彝族自治州"
                },
                {
                    cid: "301",
                    cityName: "思茅"
                },
                {
                    cid: "302",
                    cityName: "保山"
                },
                {
                    cid: "303",
                    cityName: "昭通"
                },
                {
                    cid: "304",
                    cityName: "曲靖"
                },
                {
                    cid: "305",
                    cityName: "红河哈尼族彝族自治州"
                },
                {
                    cid: "306",
                    cityName: "大理大理白族自治州"
                },
                {
                    cid: "307",
                    cityName: "怒江傈僳族自治州"
                },
                {
                    cid: "308",
                    cityName: "丽江"
                }]
            },
            {
                pid: "26",
                pName: "西藏",
                citys: [{
                    cid: "90",
                    cityName: "拉萨"
                },
                {
                    cid: "309",
                    cityName: "日喀则"
                },
                {
                    cid: "310",
                    cityName: "林芝"
                },
                {
                    cid: "311",
                    cityName: "阿里"
                },
                {
                    cid: "312",
                    cityName: "那曲"
                },
                {
                    cid: "313",
                    cityName: "昌都"
                },
                {
                    cid: "314",
                    cityName: "山南"
                }]
            },
            {
                pid: "27",
                pName: "陕西",
                citys: [{
                    cid: "91",
                    cityName: "西安"
                },
                {
                    cid: "92",
                    cityName: "宝鸡"
                },
                {
                    cid: "93",
                    cityName: "咸阳"
                },
                {
                    cid: "315",
                    cityName: "榆林"
                },
                {
                    cid: "316",
                    cityName: "渭南"
                },
                {
                    cid: "317",
                    cityName: "安康"
                },
                {
                    cid: "318",
                    cityName: "汉中"
                },
                {
                    cid: "319",
                    cityName: "商洛"
                },
                {
                    cid: "320",
                    cityName: "铜川"
                },
                {
                    cid: "321",
                    cityName: "延安"
                }]
            },
            {
                pid: "28",
                pName: "甘肃",
                citys: [{
                    cid: "94",
                    cityName: "兰州"
                },
                {
                    cid: "95",
                    cityName: "天水"
                },
                {
                    cid: "322",
                    cityName: "白银"
                },
                {
                    cid: "323",
                    cityName: "庆阳"
                },
                {
                    cid: "324",
                    cityName: "金昌"
                },
                {
                    cid: "325",
                    cityName: "武威"
                },
                {
                    cid: "326",
                    cityName: "陇南"
                },
                {
                    cid: "327",
                    cityName: "甘南藏族自治州"
                },
                {
                    cid: "328",
                    cityName: "酒泉"
                },
                {
                    cid: "329",
                    cityName: "张掖"
                },
                {
                    cid: "330",
                    cityName: "临夏回族自治州"
                },
                {
                    cid: "331",
                    cityName: "平凉"
                },
                {
                    cid: "332",
                    cityName: "定西"
                }]
            },
            {
                pid: "29",
                pName: "青海",
                citys: [{
                    cid: "100",
                    cityName: "西宁"
                },
                {
                    cid: "333",
                    cityName: "海西蒙古族藏族自治州"
                },
                {
                    cid: "334",
                    cityName: "玉树藏族自治州"
                },
                {
                    cid: "335",
                    cityName: "果洛藏族自治州"
                },
                {
                    cid: "336",
                    cityName: "海南藏族自治州"
                },
                {
                    cid: "337",
                    cityName: "海北藏族自治州"
                },
                {
                    cid: "338",
                    cityName: "黄南藏族自治州"
                },
                {
                    cid: "339",
                    cityName: "海东"
                }]
            },
            {
                pid: "30",
                pName: "宁夏",
                citys: [{
                    cid: "101",
                    cityName: "银川"
                },
                {
                    cid: "340",
                    cityName: "石嘴山"
                },
                {
                    cid: "341",
                    cityName: "固原"
                },
                {
                    cid: "342",
                    cityName: "吴忠"
                }]
            },
            {
                pid: "31",
                pName: "新疆",
                citys: [{
                    cid: "96",
                    cityName: "乌鲁木齐"
                },
                {
                    cid: "343",
                    cityName: "阿克苏"
                },
                {
                    cid: "344",
                    cityName: "塔城"
                },
                {
                    cid: "345",
                    cityName: "伊犁哈萨克自治州"
                },
                {
                    cid: "346",
                    cityName: "阿勒泰"
                },
                {
                    cid: "347",
                    cityName: "巴音郭楞蒙古自治州"
                },
                {
                    cid: "348",
                    cityName: "克孜勒苏柯尔克孜自治州"
                },
                {
                    cid: "349",
                    cityName: "克拉玛依"
                },
                {
                    cid: "350",
                    cityName: "石河子"
                },
                {
                    cid: "351",
                    cityName: "昌吉回族自治州"
                },
                {
                    cid: "352",
                    cityName: "伊犁哈萨克自治州"
                },
                {
                    cid: "353",
                    cityName: "喀什"
                },
                {
                    cid: "354",
                    cityName: "和田"
                },
                {
                    cid: "355",
                    cityName: "哈密"
                },
                {
                    cid: "356",
                    cityName: "博尔塔拉蒙古自治州"
                },
                {
                    cid: "357",
                    cityName: "吐鲁番"
                },
                {
                    cid: "358",
                    cityName: "伊吾"
                }]
            },
            {
                pid: "32",
                pName: "台湾",
                citys: [{
                    cid: "97",
                    cityName: "台湾"
                }]
            },
            {
                pid: "33",
                pName: "香港",
                citys: [{
                    cid: "98",
                    cityName: "香港"
                }]
            },
            {
                pid: "34",
                pName: "澳门",
                citys: [{
                    cid: "99",
                    cityName: "澳门"
                }]
            },
            {
                pid: "35",
                pName: "深圳",
                citys: [{
                    cid: "57",
                    cityName: "深圳"
                }]
            }], d = {
                1 : 3674,
                8 : 3674,
                9 : 3674,
                6 : 3674,
                5 : 3674,
                10 : 3674,
                7 : 3674,
                3 : 3691,
                2 : 3668,
                11 : 3668,
                16 : 3668,
                12 : 3668,
                15 : 3668,
                13 : 3668,
                20 : 3679,
                32 : 3679,
                18 : 3679,
                33 : 3679,
                34 : 3679,
                14 : 3679,
                21 : 3694,
                19 : 4385,
                4 : 3685,
                25 : 3685,
                24 : 3685,
                27 : 3700,
                23 : 3688,
                28 : 3688,
                31 : 3688,
                26 : 3688,
                29 : 3688,
                30 : 3688,
                22 : 3697,
                35 : 3682,
                17 : 5213
            },
            c = __global.getUserCityName(), e = __global.getUserCityId(), f = "", h = f = null, g = null, i = 0; i < a.length; i++) for (var g = a[i], j = 0; j < g.citys.length; j++) if (f = g.citys[j].cityName, h = g.citys[j].cid, h == e && f == c) return f = g.pid,
            d[f]
        }
    }).init()
};
TY.ui.nav.initScreen = function() {
    var a = jQuery; ({
        config: {
            _key: "screenStatus",
            ACTTEXT: "宽屏模式",
            range: [1024, 1280, 1366, 1440]
        },
        init: function() {
            this.checkUse() && (this.setControlTab(), this.checkCurrentStatus())
        },
        checkUse: function() {
            if (0 != a("#top_nav #top_nav_set_view").size()) {
                var b = this.getBrowserWidth(),
                d = this.config.range,
                b = a.inArray(b, d);
                if (! ( - 1 == b || 0 == b)) return this.config.range = [d[0], d[1]],
                !0
            }
        },
        getBrowserWidth: function() {
            return window.screen && screen.availWidth
        },
        getStatus: function() {
            var a = this.config.range,
            d = "";
            return (d = window.localStorage ? TY.io.storage.get(this.config._key) : __global.getCookie(this.config._key)) || a[0]
        },
        setStatus: function(a) {
            window.localStorage ? TY.io.storage.set(this.config._key, a) : __global.setCookie(this.config._key, a, 300, "/", ".tianya.cn", !1)
        },
        getNextStatus: function() {
            var b = this.config.range,
            d = this.getStatus(),
            c = a.inArray( + d, b),
            d = b.length,
            c = ++c;
            c > d - 1 && (c = 0);
            return b[c]
        },
        setControlTab: function() {
            var b = this;
            a("#top_nav_set_view .link-list li:last").prev().before('<li><a class="screen" href="javascript:" _stat="/stat/navtop/宽屏模式" _tystat="新版顶导航/宽屏模式">' + this.config.ACTTEXT + "</a></li>");
            a("#top_nav_set_view .link-list .screen").click(function() {
                var a = b.getNextStatus();
                b.setStatus(a);
                b.changeStatus(a)
            })
        },
        getControlTab: function() {
            return a("#top_nav_set_view .link-list .screen")
        },
        getAllClass: function() {
            var b = [],
            d = this;
            a.each(this.config.range,
            function(a, e) {
                b.push(d.getLayoutClass(e))
            });
            return b.join(" ")
        },
        changeStatus: function(b) {
            this.getControlTab();
            var b = this.getLayoutClass(b),
            d = this.getAllClass();
            a("body").removeClass(d).addClass(b);
            a.browser.safari && a.browser.webkit && (a("#bbs_left_nav").css({
                top: 1
            }), setTimeout(function() {
                a("#bbs_left_nav").css({
                    top: 0
                })
            },
            0))
        },
        getLayoutClass: function(b) {
            var d;
            d = "" + (a("html").hasClass("bbs-page") ? " layout-" + b + "-top-nav": "");
            return "layout-" + b + d
        },
        checkCurrentStatus: function() {
            this.getStatus()
        }
    }).init()
};
jQuery.browser.opera && jQuery(window).bind("resize",
function() {
    var a = jQuery;
    a("#bbs_left_nav").size() || a(this).unbind("resize");
    a("#bbs_left_nav").css({
        bottom: 33
    });
    setTimeout(function() {
        a("#bbs_left_nav").css({
            bottom: 34
        })
    },
    50)
});
jQuery(function() {
    jQuery("#my-bbs-collection .td-title").live({
        mouseenter: function() {
            jQuery(this).addClass("on")
        },
        mouseleave: function() {
            jQuery(this).removeClass("on")
        }
    }).delegate("a", "click",
    function() {
        var a = jQuery(this);
        if (a.hasClass("del")) new TY.ui.pop({
            headTxt: "提示",
            body: "是否删除该收藏的帖子？",
            type: "confirm",
            isMod: !0,
            yesHandler: function() {
                var b = a.attr("_data").split(","),
                d = TUI.getRandom("bbsArticleMark");
                jQuery.getScript(iceURL + "?" + jQuery.param({
                    method: "bbsArticleMark.delete",
                    "params.blockId": b[0],
                    "params.articleId": b[1],
                    "var": d
                }),
                function() {
                    window[d] && 1 == window[d].success && a.closest("tr").fadeOut("normal",
                    function() {
                        jQuery(this).remove()
                    })
                })
            }
        });
        else {
            a.hasClass("update-num") || (a = a.siblings(".update-num"));
            var b = a.attr("_data");
            if (b) {
                var b = b.split(","),
                d = TUI.getRandom("bbsArticleMark");
                jQuery.getScript(iceURL + "?" + jQuery.param({
                    method: "bbsArticleMark.update",
                    "var": d,
                    "params.blockId": b[0],
                    "params.articleId": b[1]
                }),
                function() {
                    window[d] && 1 == window[d].success && a.remove()
                })
            }
        }
    })
});
window.BBS_Ad_Factory = {
    count: 0,
    createText: function(a) {
        for (var a = a.data || [], b = Math.min(a.length, 5), d = ["<ul>"], c = 0; c < b; c++) d.push('<li class="list_item">'),
        d.push('<a href="' + a[c].url + '" target="_blank" title="' + a[c].name + '">' + a[c].name + "</a></li>");
        d.push("</ul>");
        this.box.children(".ad_list").prepend(d.join(""));
        this.count++;
        this.show("text")
    },
    createPic: function(a) {
        for (var a = a.data || [], b = Math.min(a.length, 6), d = ["<ul>"], c = 0; c < b; c++) d.push('<li class="pic_list_item">'),
        d.push('<a href="' + a[c].url + '" target="_blank" title="' + a[c].name + '">'),
        d.push('<img class="pic" src="' + a[c].pic + '" />' + a[c].name.subStringCn(30) + "</a></li>");
        d.push("</ul>");
        this.box.children(".ad_pic_list").prepend(d.join(""));
        this.count++;
        this.show("pic")
    },
    appendBlankLogo: function() {
        var a;
        a = '<li class="pic_list_item js_blank_logo"><a href="http://shangjia.tianya.cn" target="_blank"><img class="pic" src="http://static.tianyaui.com/global/lite/images/ad_logo_blank.png?_v=20130411" /></a></li>';
        var b = this.box.find(".ad_pic_list ul");
        1 > b.find(".js_blank_logo").size() && b.append(a)
    },
    show: function(a) {
        var b = this.box.find(".ad_list .list_item"),
        d = this.box.find(".ad_pic_list .pic_list_item");
        1 == this.count ? ("text" == a ? 4 > b.size() ? this.box.addClass("single_line") : this.box.addClass("multi_line") : "pic" == a && (4 > d.size() ? this.box.addClass("single_line") : this.box.addClass("multi_line"), 4 > d.size() ? this.appendBlankLogo(d.size(), 3) : this.appendBlankLogo(d.size(), 6)), this.box.show()) : 2 == this.count && (4 > b.size() && 4 > d.size() ? (this.box.addClass("single_line"), this.appendBlankLogo(d.size(), 3)) : (this.box.removeClass("single_line").addClass("multi_line"), this.appendBlankLogo(d.size(), 6)), this.box.show())
    },
    init: function(a) {
        this.box || (this.box = jQuery("#ad_business_box"), this.box.html('<div class="ad_header">最新商讯</div><div class="ad_list"><p class="contact"><a class="join_ad" href="http://page.tianya.cn/html/merchant/price.html" target="_blank">申请加入</a><a title="更多" href="http://shangjia.tianya.cn" class="more"  target="_blank">更多&gt;&gt;</a></p></div><div class="ad_pic_list"></div>'));
        if (0 != this.box.size()) switch (a.type) {
        case "text":
            this.createText(a);
            break;
        case "pic":
            this.createPic(a)
        }
    }
};
window.__channel || (__channel = {
    _headline_pic_ad: function(a, b, d, c) {
        var e = jQuery,
        f = e(".touban-pic .mod-pic-imgs li"),
        e = e(".touban-pic .mod-pic-title li");
        if (a > f.size()) return ! 1;
        f.eq(a - 1).find("a").attr("href", d).end();
        f.eq(a - 1).find("img").attr("src", b);
        e.eq(a - 1).find("a").attr("href", d).html(c)
    }
});
window.BBS_Ad_180_150 = {
    domId: "AD_img_180_150_LINK",
    init: function(a) {
        var b = jQuery("#AD_img_180_150_LINK");
        1 === b.size() && a && a[0] && (a = this.createDom(a[0])) && b.html(a).show()
    },
    createDom: function(a) {
        return a.url && a.pic && a.name ? ['<div class="hd clearfix"><h2>' + a.name + "</h2></div>", '<div class="bd">', '<a href="' + a.url + '" target="_blank"><img src="' + a.pic + '" class="pic"></a>', '</div><div class="ft"></div></div>'].join("") : null
    }
};
window.BBS_Ad_Exciting = {
    checkDom: function() {
        if (jQuery("#exciting_activities").size()) {
            var a = jQuery("#exciting_activities");
            jQuery(".top_zone_box", a).size() || a.html('<div class="section"><div class="hd clearfix"><h2>推荐话题</h2></div><div class="bd"><ul class="top_zone_box"></ul><div class="more"><a href="http://pinpai.tianya.cn/" target="_blank">更多&gt;&gt;</a></div></div><div class="ft"></div></div>');
            return jQuery(".top_zone_box", a)
        }
        return ! 1
    },
    picList: {
        init: function(a) {
            if (a.length) {
                var b = window.BBS_Ad_Exciting.checkDom();
                if (b) {
                    for (var d = [], c = 0; c < a.length; c++) d.push('<li class="top_zone_list">'),
                    d.push('<a href="' + a[c].url + '" target="_blank" title="' + a[c].name + '" class="title">' + a[c].name + "</a>"),
                    a[c].pic && a[c].pic.length && d.push('<a href="' + a[c].url + '" target="_blank" title="' + a[c].name + '" ><img src="' + a[c].pic + '" class="pic" /></a>'),
                    d.push("</li>");
                    b.prepend(d.join(""))
                }
            }
        }
    },
    txtList: {
        init: function(a) {
            if (a.length) {
                var b = window.BBS_Ad_Exciting.checkDom();
                if (b) {
                    for (var d = [], c = 0; c < a.length; c++) d.push('<li class="top_zone_list"><a href="' + a[c].url + '" target="_blank" title="' + a[c].name + '" class="title">' + a[c].name + "</a></li>");
                    b.append(d.join(""))
                }
            }
        }
    }
};
window.BBS_Ad_Travel = {
    checkDom: function() {
        if (jQuery("#travel_recommend").size()) {
            var a = jQuery("#travel_recommend"); ! jQuery(".top_zone_box", a).size() && !jQuery(".bd", a).size() && a.html('<div class="section"><div class="hd clearfix"><h2>旅游推荐</h2></div><div class="bd"></div><div class="ft"></div></div>');
            return a.find(".bd")
        }
        return ! 1
    },
    picList: {
        init: function(a) {
            if (a.length) {
                var b = window.BBS_Ad_Travel.checkDom();
                if (b) {
                    for (var d = [], c = 0; c < a.length; c++) d.push('<ul class="user-list">', '<li class="clearfix">', '<div class="headbox">', '<div class="head50"><a href="' + a[c].url + '"><img src="' + a[c].pic + '"></a></div>', "</div>", '<p class="text"><a href="' + a[c].url + '">' + a[c].name + "</a></p>", '<p class="desc">' + a[c].summary + "</p>", "</li>", "</ul>");
                    b.prepend(d.join(""))
                }
            }
        }
    },
    txtList: {
        init: function(a) {
            if (a.length) {
                var b = window.BBS_Ad_Travel.checkDom();
                if (b) {
                    var d = [];
                    d.push('<ul class="text-list">');
                    for (var c = 0; c < a.length; c++) d.push('<li><a href="' + a[c].url + '" target="_blank" title="' + a[c].name + '">' + a[c].name + "</a></li>");
                    d.push("</ul>");
                    b.append(d.join(""))
                }
            }
        }
    }
};
window.BBS_Ad_HotSales = {
    id: "ad_hot_sales",
    init: function(a) {
        var b = jQuery("#" + this.id);
        0 === b.size() || !a || 0 === a.length || b.html(this.createDom(a)).show()
    },
    createDom: function(a) {
        for (var b = 0,
        d = a.length,
        c = null,
        e = [], b = 0; b < d; b++) c = a[b],
        e.push('<li class="item">'),
        e.push('<a href="' + c.url + '" target="_blank" title="' + c.name + '"><img src="' + c.pic + '" class="pic" /></a>'),
        e.push('<p class="desc">'),
        e.push('<a class="link" href="' + c.url + '" target="_blank">' + c.name + "</a>"),
        e.push('价格：<span class="price">&#65509;' + c.pay + "</span>"),
        e.push('&nbsp;分享：<span class="price">' + c.summary + "</span>"),
        e.push("</p>"),
        e.push("</li>");
        return ['<div class="hd clearfix"><h2>精彩热卖</h2></div><div class="bd"><ul class="hot_sales_list">', e.join(""), "</ul></div>"].join("")
    }
};
window.BBS_Ad_BizSales = {
    id: "ad_biz_sales",
    init: function(a) {
        var b = jQuery("#" + this.id);
        0 === b.size() || !a || 0 === a.length || b.html(this.createDom(a)).show()
    },
    createDom: function(a) {
        for (var b = 0,
        d = a.length,
        c = null,
        e = [], b = 0; b < d; b++) c = a[b],
        e.push('<li class="item">'),
        e.push('<a class="link" href="' + c.url + '" target="_blank" title="' + c.name + '">' + c.name + "</a>"),
        e.push('<p class="desc">'),
        e.push(c.summary),
        e.push("</p>"),
        e.push("</li>");
        return ['<div class="hd clearfix"><h2>商家推广</h2></div><div class="bd"><ul class="biz_sales_list">', e.join(""), "</ul></div>"].join("")
    }
};
window.BBS_Ad_PromoGroupA = {
    indexNum: 0,
    count: 0,
    init: function(a) {
        this.createDom(a)
    },
    createDom: function(a) {
        if (a && a.length) {
            var b = jQuery("#mod-pic-toggle-ad"),
            d = [];
            this.count = a.length - 1;
            for (var c = 0; c < a.length; c++) d.push('<li><a href="' + a[c].url + '" target="_blank">' + a[c].name + '</a><br/><a href="' + a[c].url + '" target="_blank"><img src="' + a[c].pic + '" /></a></li>');
            this.indexNum = parseInt(a.length * Math.random());
            b.append(['<div class="bd"><ul class="ad-promogroupa">', d.join(""), "</ul></div>"].join(""));
            jQuery(".ad-promogroupa>li").eq(this.indexNum).show();
            this.startPlay(b)
        }
    },
    startPlay: function(a) {
        var b = this,
        d = jQuery(".ad-promogroupa>li", a);
        a.show();
        this.count && setInterval(function() {
            d.eq(b.indexNum).fadeOut("fast",
            function() {
                b.indexNum < b.count ? b.indexNum++:b.indexNum = 0;
                d.eq(b.indexNum).fadeIn("fast")
            })
        },
        25E3)
    }
}; (function(a) {
    window.BBS_block_check = {
        createHtml: function(b, d, c) {
            this.id = "block_state_tips_" + (new Date).getTime();
            temp = "";
            var e = [];
            e.push('<div class="block_state_tips" id="' + this.id + '">');
            if (d) {
                e.push('<div class="arrow">');
                for (d = 1; 10 > d; d++) temp = '<div class="line' + d + '"></div>',
                e.push(temp);
                e.push("</div>")
            }
            e.push(b);
            e.push("</div>");
            a("body").append(e.join(""));
            var f = a("#" + this.id);
            f.bind("click",
            function() {
                a(this).remove()
            });
            c && (c = setTimeout(function() {
                f.remove();
                clearTimeout(c)
            },
            c))
        },
        setPosition: function(b) {
            var d = this.el.offset(),
            c = TY.util.getElRealSize(this.el).height,
            e = a("#" + this.id),
            f = TY.util.getElRealSize(e),
            h = f.width,
            f = f.height,
            g = 0,
            i = 0;
            switch (b) {
            case "left":
                g = d.left - h - 10;
                i = d.top + (c - f) / 2;
                break;
            case "bottom":
                g = d.left;
                i = d.top + c;
                break;
            case "top":
                g = d.left,
                i = d.top - c
            }
            this.isArrow && (i += 10);
            e.css({
                position: "absolute",
                left: g,
                top: i
            })
        },
        stateCheck: function(a, d) {
            switch (a) {
            case 5:
                d || (this.createHtml('本帖需要<a href="http://passport.tianya.cn/portect?action=smsintro&from=successtqbk" target="_blank">认证</a>后发表！', !1, 5E3), this.setPosition("bottom"), this.el.addClass("common-submitBtn-grey"))
            }
        },
        check: function(a, d, c, e) {
            this.el = a;
            if (c) {
                this.el.removeClass(c);
                var f
            } else this.el.removeClass("common-submitBtn-grey");
            "undefined" != typeof bbsGlobal.itemPermission && (f = bbsGlobal.itemPermission);
            f !== +d && this.stateCheck(f, e)
        },
        showTips: function(a, d, c, e, f) {
            this.el = a;
            this.isArrow = c;
            this.createHtml(d, c, f);
            this.setPosition(e)
        }
    }
})(jQuery);
var LaboratoryTest = function() {
    return window.bbsGlobal && "797" == bbsGlobal.item ? !0 : !1
},
_gaq = _gaq || [],
_hmt = _hmt || [];
TUI.statistics = function(a) {
    a.getScript("http://click.tianyaui.com/b.jsp?user=" + encodeURIComponent(__global._isOnline ? __global.getUserName() : ""));
    a.ajax({
        url: "http://static.tianyaui.com/global/ty/stat/stat_20080313.js",
        dataType: "script",
        type: "get",
        scriptCharset: "gbk",
        success: function() {}
    }); (function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = "http://hm.baidu.com/h.js?bc5755e0609123f78d0e816bf7dee255";
        var d = document.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(a, d)
    })();
    window.TUI && (TUI.urchin = function(a) {
        _hmt.push(["_trackEvent", a, "click", "", ""])
    },
    jQuery(document).click(function(a) {
        for (a = jQuery(a.target); 0 !== a.size() && "BODY" !== a.prop("tagName");) a.attr("_stat") && TUI.urchin(a.attr("_stat")),
        a = a.parent()
    }))
};
TUI.tyskts = function() {
    window.bbsGlobal && window.bbsGlobal.itemName && "新闻众评" == window.bbsGlobal.itemName && (TY.io.storage.get("tyskts") || new TY.ui.pop({
        headTxt: "提示：",
        body: "<br/>您好， “天涯时空”已更名为“新闻众评”，欢迎继续访问！<br/><br/>",
        type: "alert",
        isDrag: !1,
        isShowCloseIco: !1,
        yesHandler: function() {
            TY.io.storage.set("tyskts", !0)
        }
    }))
};
jQuery(function() {
    TUI.ifMod("#bbs_left_nav", TUI.initLeftNav);
    TUI.ifMod("#top_nav", TY.ui.nav.initScreen);
    TUI.ifMod(".bbs-list-box", TUI.initHotBbsList);
    TUI.run(TUI.listenBbsTypeSearch);
    TUI.initMyTopBlock();
    TUI.ifMod(".bbs-block-list", TUI.initBlockList);
    __global.isOnline() && (TUI.run(TUI.listenBlockCollect), TUI.ifMod("#set_my_block", TUI.initSetMyBlock));
    TUI.ifMod("#space_banner", TUI.initSpaceBanner);
    window.bbsGlobal && bbsGlobal.isEhomeItem ? (TUI.ifMod(".js-item-list", TUI.inItemFocus), jQuery('.js-item-list[blocktype="主题讨论"]').removeClass("fold-close"), jQuery('.js-item-list[blocktype="城市家园"]').removeClass("fold-close")) : TUI.ifMod('.js-item-list[blocktype="天涯城市"]', TUI.getMyCityList);
    TUI.ifMod(".js-power", TUI.initPowers);
    TUI.ifMod("#right_star_bbs", TUI.initStarBbs);
    TUI.ifMod("#main_xiangguan", TUI.initRelatedBlock);
    TUI.ifMod("#top_zone", TUI.initRightZone);
    TUI.ifMod("#shangwu-scroll", TUI.shangwuscroll);
    TUI.initTyBbsStat();
    TUI.run(TUI.statistics);
    TUI.run(TUI.tyskts);
    TUI.run(TUI.show2DBarcode)
});
jQuery(document).ready(function(a) {
    var b = !1,
    d = function(c) {
        a.ajax({
            url: "/api?method=bbs.api.vip&params.userIds=" + __global.getUserId(),
            dataType: "json",
            cache: !1,
            success: function(a) {
                1 === +a.success ? (a = a.data, "undefined" != typeof a.rows && 0 < a.rows.length && (b = !0), c && c()) : new TY.ui.tips({
                    type: "warn",
                    msg: a.message || "获取认证信息错误",
                    position: "midCenter",
                    time: 2500
                })
            },
            failure: function() {
                TY.util.console("getRealUser error")
            }
        })
    };
    window.bbsGlobal && "undefined" != typeof bbsGlobal.itemPermission ? a(".btn-post", a("#main")).bind("click",
    function(c) {
        c.preventDefault();
        var e = a(this); ! __global.isOnline() && !1 === LaboratoryTest() ? TY.loginAction() : 3 === bbsGlobal.itemPermission ? BBS_block_check.showTips(a(this), "本版已关闭，不能发帖！", !0, "bottom", 5E3) : 5 === bbsGlobal.itemPermission ? __global.isOnline() ? d(function() {
            b ? location.href = e.attr("href") : BBS_block_check.showTips(e, '本版需要<a href="http://www.tianya.cn/mobile/identity" target="_blank">认证</a>后发帖', !0, "bottom", 5E3)
        }) : TY.loginAction(!1) : location.href = a(this).attr("href")
    }) : a(".btn-post").livequery("click",
    function(a) {
        __global.isOnline() || (TY.loginAction(), a.preventDefault())
    })
});