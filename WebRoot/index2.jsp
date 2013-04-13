<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<script src="ty_files/h.js" type="text/javascript"></script>
<title>吉首大学社团管理</title>
<script type="text/javascript" charset="utf-8" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="ty_files/lite-all.js"></script>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
<link href="ty_files/lite-all.css" rel="stylesheet" type="text/css">
<link href="ty_files/bbs.css" rel="stylesheet" type="text/css">
<script charset="utf-8" src="ty_files/refresh.htm"></script>
<!--[if gt IE 8]>
  <script src="http://static.tianyaui.com/global/lite/js/IEPinify.js?v=201304110830" type="text/javascript"></script>
<![endif]-->
<!--[if lt IE 7]>
  <script src="http://static.tianyaui.com/global/ty/util/image/DD_belatedPNG_0.0.8a.js?v=201304110830" type="text/javascript"></script>
<![endif]-->
<style>
.layout-1280 #bbsdoc {
	width: 1255px;
}

.layout-1280 #bbsdoc .layout-lmr #main {
	width: 920px;
}

.layout-1280 #bbsdoc .layout-mr #main {
	width: 1035px;
}

.layout-1280 #bbsdoc .layout-lm #main {
	width: 1110px;
}

.layout-1280 #bbsdoc .layout-m #main {
	width: 1215px;
}

.layout-1280 .ad-additional {
	display: inline-block;
}

.layout-1280-top-nav div#top_nav_wrap {
	width: 1115px;
}
</style>
<script src="ty_files/index.htm" charset="utf-8" type="text/javascript"></script>
<style type="text/css">
#ty_msg_mod *,#ty_msg_mod {
	margin: 0px;
	padding: 0px;
}

#ty_msg_mod #ty_msg_hd_close,#ty_msg_mod .ty-msg-ft a {
	background:
		url(http://static.tianyaui.com/global/wizard/images/ty-msg-bg.png?v=20120906)
		no-repeat;
	display: inline-block;
}

#ty_msg_mod {
	z-index: 100;
	width: 351px;
	position: fixed;
	_position: absolute;
	right: 2px;
	font-size: 12px;
	display: none;
	bottom: 34px;
	_top: expression(( document.documentElement.clientHeight ?
		document.documentElement.clientHeight :   document.body.clientHeight)+documentElement.scrollTop-MSG_GLOBAL.heightHead-MSG_GLOBAL.heightClose-MSG_GLOBAL.heightAd-MSG_GLOBAL.heightBottom-MSG_GLOBAL.heightBorder-2-34+"px");
	_left: expression(( document.documentElement.clientWidth ?  
		document.documentElement.clientWidth :   document.body.clientWidth)+(document.documentElement.scrollLeft?
		 document.documentElement.scrollLeft:  document.body.scrollLeft)
		-MSG_GLOBAL.width -MSG_GLOBAL.widthBorder+"px");
	_bottom: auto;
}

#ty_msg_mod #msg_border_ctn {
	border: 2px solid #84a9d2;
	overflow: hidden;
	background: #fff;
}

#ty_msg_mod #head_msg {
	width: 100%;
}

#ty_msg_mod .ty-msg-hd {
	background: none;
	width: 100%;
	height: 19px;
	overflow: hidden;
}

#ty_msg_mod #ty_msg_hd_close {
	cursor: pointer;
	margin-right: 2px;
	height: 14px;
	width: 14px;
	float: right;
	background: #6699CC;
	border: 1px solid #ccc;
	line-height: 14px;
	text-align: center;
	color: #fff;
	font-size: 14px;
	overflow: hidden;
}

#ty_msg_mod .ty-msg-bd iframe {
	height: 189px;
	width: 346px;
	overflow: hidden;
}

#ty_msg_mod .ty-msg-bd {
	line-height: 0;
}

#ty_msg_mod .ty-msg-bd iframe.ad {
	height: 240px;
	width: 346px;
	overflow: hidden;
}

#ty_msg_mod .ty-msg-ft {
	height: 29px;
	margin-top: 1px;
	overflow: hidden;
	background-color: #dbeaf8;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list a {
	padding-left: 18px;
	margin-left: 8px;
	float: left;
	height: 29px;
	line-height: 29px;
	text-decoration: none;
	font-size: 12px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list a:link,#ty_msg_mod .ty-msg-ft .ty-msg-fw-list a:visited
	{
	color: #0b64ae;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list a:hover {
	color: #ff6600;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-mall {
	background-position: 0px -356px;
	padding-left: 20px
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-pinpai {
	background-position: 2px -433px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-suning {
	background-position: 0px -494px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-bookroom {
	background-position: 5px -75px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-tuan {
	background-position: 0 -124px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-tickets {
	background-position: 0 -172px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-clothes {
	background-position: 5px -224px;
}

#ty_msg_mod .ty-msg-ft #ty_msg_ft_close {
	height: 29px;
	width: 29px;
	float: right;
	background-position: 11px -284px;
}
</style>
<img src="ty_files/clickAnalyse.htm" height="0" width="0">
<img src="ty_files/guid.htm" height="0" width="0">

</head>
<body>
	<div id="bottom_nav_wrap" style="">
		<div style="width: 1255px;" id="bottom_nav">
			<div class="bottom-bg">
				<ul class="ul-nav">
					<li class="li-border-r li-user-name">
						<div id="bottom_username_view" class="more-view">
							<div class="bottom_username_view_wrap">
								<div class="bottom_username_subnav clearfix">
									<ul>
										<li class="li-first">
											<dl class="clearfix">
												<dt>
													<a href="http://www.tianya.cn/">我的首页</a>
												</dt>
												<dd>
													<a href="http://www.tianya.cn//blog" target="_blank">我的博客</a>
												</dd>
												<dd>
													<a href="http://www.tianya.cn//laiba" target="_blank">我的部落</a>
												</dd>
												<dd>
													<a href="http://bbs.tianya.cn/my_block.jsp" target="_blank">我的论坛</a>
												</dd>
											</dl>
										</li>
										<li style="display: none"><dl
												class="js-biz-data clearfix">
												<dt>天涯推荐</dt>
											</dl></li>
										<li><dl id="bottom_my_app_list" class="clearfix">
												<dt>
													<a href="http://apps.tianya.cn/" target="_blank">我的应用</a>
												</dt>
											</dl></li>
									</ul>
								</div>
							</div>
						</div>
						<span id="bottom_username" class="b-username" biz-data="null"
						js-data="null">我的天涯</span>
					</li>
					<li class="li-border"><div id="bottom_trace_view"
							class="more-view">
							<ul class="link-list clearfix">
								<li class="logoing"><img src="ty_files/loading1.gif"></li>
							</ul>
						</div>
						<span bakfocusclass="on" id="bottom_trace" class="white"
						js-data="null"><span class="bottom-ico-bg bottom-ico-bg-3">足迹</span></span></li>
					<li class="li-border-l"><a
						href="http://2000.bbs.tianya.cn/djmanage/djpage.asp?djid=12053"
						id="suning-logo" target="_blank" _tystat="新版底导航/广告"></a></li>
					<li class="art-view"><ul style="margin-left: -2790px;"
							class="art-lite">
							<li><a href="http://bbs.tianya.cn/post-no04-2094541-1.shtml"
								title="有奖拍摄身边的公交车！图" target="_blank" _tystat="新版底导航/热帖">【热帖】有奖拍摄身边的公交车！图</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-travel-450758-1.shtml"
								title="有奖提问《那些冒险的梦》" target="_blank" _tystat="新版底导航/热帖">【热帖】有奖提问《那些冒险的梦》</a></li>
							<li><a href="http://bbs.tianya.cn/post-no04-2289049-1.shtml"
								title="图片直播特色川东喜宴！图" target="_blank" _tystat="新版底导航/热帖">【热帖】图片直播特色川东喜宴！图</a></li>
							<li><a href="http://bbs.tianya.cn/post-903-2157-1.shtml"
								title="佛赠茶为加持，你赠茶为结缘" target="_blank" _tystat="新版底导航/热帖">【热帖】佛赠茶为加持，你赠茶为结缘</a></li>
							<li><a href="http://bbs.tianya.cn/post-cars-273865-1.shtml"
								title="开车上路还是别求神拜佛保佑" target="_blank" _tystat="新版底导航/热帖">【热帖】开车上路还是别求神拜佛保佑</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-funinfo-4075653-1.shtml"
								title="盘点圈内入豪门的众男星现状" target="_blank" _tystat="新版底导航/热帖">【热帖】盘点圈内入豪门的众男星现状</a></li>
							<li><a href="http://bbs.tianya.cn/post-play-244017-1.shtml"
								title="CS玩家认出炸弹挽救多人生命" target="_blank" _tystat="新版底导航/热帖">【热帖】CS玩家认出炸弹挽救多人生命</a></li>
							<li><a href="http://bbs.tianya.cn/post-98-862584-1.shtml"
								title="有种婆婆能把你关心成抑郁症" target="_blank" _tystat="新版底导航/热帖">【热帖】有种婆婆能把你关心成抑郁症</a></li>
							<li><a href="http://bbs.tianya.cn/post-665-841810-1.shtml"
								title="网曝少女做好事反被警察拷打" target="_blank" _tystat="新版底导航/热帖">【热帖】网曝少女做好事反被警察拷打</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-filmtv-390347-1.shtml"
								title="《我是歌手》：乐坛真唱运动" target="_blank" _tystat="新版底导航/热帖">【热帖】《我是歌手》：乐坛真唱运动</a></li>
							<li><a href="http://bbs.tianya.cn/post-sport-207130-1.shtml"
								title="刘翔为圈钱竟不愿意宣布退役" target="_blank" _tystat="新版底导航/热帖">【热帖】刘翔为圈钱竟不愿意宣布退役</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-numtechnoloy-159580-1.shtml"
								title="说说苹果iOS系统给我的启发" target="_blank" _tystat="新版底导航/热帖">【热帖】说说苹果iOS系统给我的启发</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-itinfo-218333-1.shtml"
								title="网络时代，如何保护您的隐私" target="_blank" _tystat="新版底导航/热帖">【热帖】网络时代，如何保护您的隐私</a></li>
							<li><a href="http://bbs.tianya.cn/post-98-862136-1.shtml"
								title="别抱怨婆婆了，亲妈也靠不住" target="_blank" _tystat="新版底导航/热帖">【热帖】别抱怨婆婆了，亲妈也靠不住</a></li>
							<li><a href="http://bbs.tianya.cn/post-sport-207130-1.shtml"
								title="刘翔为圈钱竟不愿意宣布退役" target="_blank" _tystat="新版底导航/热帖">【热帖】刘翔为圈钱竟不愿意宣布退役</a></li>
							<li><a href="http://bbs.tianya.cn/post-sport-207130-1.shtml"
								title="刘翔为圈钱竟不愿意宣布退役" target="_blank" _tystat="新版底导航/热帖">【热帖】刘翔为圈钱竟不愿意宣布退役</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-develop-1273347-1.shtml"
								title="背着240万房贷,压力大睡不着" target="_blank" _tystat="新版底导航/热帖">【热帖】背着240万房贷,压力大睡不着</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-develop-1273347-1.shtml"
								title="背着240万房贷,压力大睡不着" target="_blank" _tystat="新版底导航/热帖">【热帖】背着240万房贷,压力大睡不着</a></li>
							<li><a href="http://bbs.tianya.cn/post-no01-463997-1.shtml"
								title="怀念毛蒋背后是国家共识割裂" target="_blank" _tystat="新版底导航/热帖">【热帖】怀念毛蒋背后是国家共识割裂</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-filmtv-389358-1.shtml"
								title="《毒战》：杜琪峰的另类警匪" target="_blank" _tystat="新版底导航/热帖">【热帖】《毒战》：杜琪峰的另类警匪</a></li>
							<li><a href="http://bbs.tianya.cn/post-no04-2094541-1.shtml"
								title="有奖拍摄身边的公交车！图" target="_blank" _tystat="新版底导航/热帖">【热帖】有奖拍摄身边的公交车！图</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-travel-450758-1.shtml"
								title="有奖提问《那些冒险的梦》" target="_blank" _tystat="新版底导航/热帖">【热帖】有奖提问《那些冒险的梦》</a></li>
						</ul></li>
					<li class="f-r li-border-l"><a href="javascript:scroll(0,0);"
						class="bottom-scroll-top"></a></li>
					<li class="f-r li-border"><div id="bottom_message_view"
							class="more-view bottom-message-list">
							<div class="bottom-sub-nav-hd">
								<h4>消息</h4>
								<a href="javascript:void(0);" class="a-gnore js-gnore-msg"></a><a
									href="http://www.tianya.cn/message/set" class="a-set"
									target="_blank"></a>
							</div>
							<ul class="link-list clearfix">
								<li><a href="http://www.tianya.cn/message/user"
									target="_blank" id="bottom_msg_userCount"
									_tystat="新版底导航/消息/用户消息">用户消息<span>（0）</span></a></li>
								<li><a href="http://bbs.tianya.cn/my_collect.jsp"
									target="_blank" id="bottom_msg_atMeCount"
									_tystat="新版底导航/消息/收藏更新">收藏更新<span>（0）</span></a></li>
								<li><a href="http://www.tianya.cn/user/fans"
									target="_blank" id="bottom_msg_fanCount"
									_tystat="新版底导航/消息/查看粉丝">查看粉丝<span>（0）</span></a></li>
								<li><a href="http://www.tianya.cn/t/reply" target="_blank"
									id="bottom_msg_replyCount" _tystat="新版底导航/消息/查看评论">查看评论<span>（0）</span></a></li>
								<li><a href="http://www.tianya.cn/t/atme" target="_blank"
									id="bottom_msg_shareCount" _tystat="新版底导航/消息/查看@我">查看@我<span>（0）</span></a></li>
								<li><a href="http://www.tianya.cn/user/request"
									target="_blank" id="bottom_msg_requestCount"
									_tystat="新版底导航/消息/好友申请">好友申请<span>（0）</span></a></li>
								<li><a href="http://www.tianya.cn/message/sys"
									target="_blank" id="bottom_msg_sysCount"
									_tystat="新版底导航/消息/系统消息">系统消息<span>（0）</span></a></li>
							</ul>
						</div>
						<span bakfocusclass="on" id="bottom_message" class="white"><span
							class="bottom-ico-bg bottom-ico-bg-6">消息<strong></strong></span></span></li>
					<li class="f-r li-border-r"><a
						href="http://static.tianya.cn/city/cityJump.html"
						class="white myCityName" _tystat="新版底导航/城市">城市</a></li>
				</ul>
			</div>
		</div>
	</div>
	<script type="text/javascript" charset="utf-8">
		(function($) {
			var nStorage = false;
			var _key = "screenStatus";
			if (window.localStorage) {
				nStorage = TY.io.storage.get(_key)
			} else {
				nStorage = __global.getCookie(_key)
			}
			if (nStorage) {
				$("body").addClass(
						"layout-" + nStorage + " layout-" + nStorage
								+ "-top-nav")
			}
		})(jQuery);
	</script>
	<div id="huebox">
		<div id="top_nav_wrap">
			<div id="top_nav">
				<div class="top-nav-logo">
					<a href="http://focus.tianya.cn/" _tystat="新版顶导航/Logo"></a>
				</div>
				<div class="top-nav-main clearfix">
					<div class="top-nav-menu clearfix">
						<div class="top-nav-fl clearfix">
							<ul class="top-nav-menu-list clearfix">
								<li class="top-nav-menu-li top-nav-menu-li-first"><a
									href="http://bbs.tianya.cn/" class="top-nav-main-menu  on"
									appstr="bbs" _checklocation="1" _tystat="新版顶导航/论坛">论坛</a></li>
								<li class="top-nav-menu-li"><a
									href="http://www.tianya.cn/blog/" class="top-nav-main-menu"
									appstr="blog" _checklocation="1" _tystat="新版顶导航/博客">博客</a></li>
								<li class="top-nav-menu-li"><a
									href="http://groups.tianya.cn/" class="top-nav-main-menu"
									appstr="laiba" _checklocation="1" _tystat="新版顶导航/部落">部落</a></li>
								<li class="top-nav-menu-li"><a
									href="http://wenda.tianya.cn/" class="top-nav-main-menu"
									appstr="wenda" _checklocation="1" _tystat="新版顶导航/问答">问答</a></li>
								<li class="top-nav-menu-li"><a
									href="http://game.tianya.cn/" class="top-nav-main-menu"
									appstr="game" _checklocation="1" _tystat="新版顶导航/游戏">游戏厅</a></li>
								<li class="top-nav-menu-li"><a
									href="http://travel.tianya.cn/" class="top-nav-main-menu"
									appstr="travel" _checklocation="1" _tystat="新版顶导航/天涯客">天涯客</a></li>
								<li class="top-nav-menu-li"><a
									href="http://pinpai.tianya.cn/" class="top-nav-main-menu"
									appstr="pinpai" _checklocation="1" _tystat="新版顶导航/品牌">品牌</a></li>
								<li class="top-nav-menu-li">
									<div id="top_nav_menu_more_view" class="more-view">
										<ul class="link-list clearfix">
											<li><a href="http://apps.tianya.cn/" _tystat="新版顶导航/应用">应用</a></li>
											<li><a href="http://mall.tianya.cn/" _tystat="新版顶导航/购物街">购物街</a></li>
											<li class="li-border-btm"><a
												href="http://shangjia.tianya.cn/" _tystat="新版顶导航/天涯商家">天涯商家</a></li>
											<li><a href="http://pay.tianya.cn/" _tystat="新版顶导航/充值中心">充值中心</a></li>
											<li><a href="http://apps.tianya.cn/gift"
												_tystat="新版顶导航/社区商店">社区商店</a></li>
											<li><a
												href="http://2000.bbs.tianya.cn/djmanage/djpage.asp?djid=12107"
												_tystat="新版顶导航/实物换礼">实物换礼</a></li>
											<li><a href="http://apps.tianya.cn/event"
												_tystat="新版顶导航/天涯活动">天涯活动</a></li>
										</ul>
									</div> <span id="top_nav_menu_more"
									class="top-ico-bg top-nav-main-menu">更多</span>
								</li>
							</ul>
						</div>
						<div id="top_search" class="top-nav-fr top-search">
							<div class="clearfix">
								<form id="top_search_form" method="get"
									action="http://www.tianya.cn/search/bbs">
									<input id="top_search_submit_btn" value=""
										class="top-search-submit" type="button"> <input
										id="top_search_key" autocomplete="off" value="搜帖、找人、搜版块"
										class="top-search-key off" name="q" bindcursor="true"
										type="text">
								</form>
							</div>
							<div id="top_search_type" class="top-search-type">
								<ul>
									<li><a id="search-text" href="javascript:void(0);">含有<strong>?</strong>的内容&gt;&gt;
									</a></li>
									<li><a id="search-user" href="javascript:void(0);">名为<strong>?</strong>的人&gt;&gt;
									</a></li>
									<li class="clearfix">
										<dl class="forum-list">
											<dt>
												含有<strong>?</strong>的版块&gt;&gt;
											</dt>
										</dl>
									</li>
									<li><a id="search-tab" href="javascript:void(0);">去<strong>?</strong>的标签&gt;&gt;
									</a></li>
								</ul>
							</div>
						</div>
						<div id="top_user_menu" class="top-nav-fr">
							<ul class="top-nav-menu-list clearfix">
								<li class="top-nav-menu-li top-nav-menu-li-first"><a
									href="http://www.tianya.cn/mobile/" appstr="mobile"
									_checklocation="1" _tystat="新版顶导航/手机">手机</a></li>
								<li class="top-nav-menu-li"><a
									href="http://service.tianya.cn/index.do" _tystat="新版顶导航/服务">服务</a></li>
								<li class="top-nav-menu-li"><a id="js_login"
									href="javascript:void(0);" rel="nofollow" _tystat="新版顶导航/登录">登录</a></li>
								<li class="top-nav-menu-li"><a
									href="http://passport.tianya.cn/register/default.jsp?sourceURL=http%3A%2F%2Fbbs.tianya.cn%2F"
									target="_blank" rel="nofollow" _tystat="新版顶导航/注册">注册</a></li>
							</ul>
						</div>
					</div>
					<div class="top-nav-separated"></div>
					<div class="top-nav-links clearfix">
						<div class="top-nav-fl">
							<ul class="top-nav-menu-list clearfix">
								<li class="top-nav-menu-li top-nav-menu-li-first"><a
									href="http://focus.tianya.cn/" appstr="focus"
									_checklocation="1" _tystat="新版顶导航/分社区/聚焦">聚焦</a></li>
								<li class="top-nav-menu-li"><a
									href="http://news.tianya.cn/" appstr="news" _checklocation="1"
									_tystat="新版顶导航/分社区/民生">民生</a></li>
								<li class="top-nav-menu-li"><a href="http://cul.tianya.cn/"
									appstr="cul" _checklocation="1" _tystat="新版顶导航/分社区/人文">人文</a></li>
								<li class="top-nav-menu-li"><a
									href="http://travel.tianya.cn/" appstr="travel"
									_checklocation="1" _tystat="新版顶导航/分社区/旅游">旅游</a></li>
								<li class="top-nav-menu-li"><a href="http://biz.tianya.cn/"
									appstr="biz" _checklocation="1" _tystat="新版顶导航/分社区/财经">财经</a></li>
								<li class="top-nav-menu-li"><a
									href="http://auto.tianya.cn/" appstr="auto" _checklocation="1"
									_tystat="新版顶导航/分社区/汽车">汽车</a></li>
								<li class="top-nav-menu-li"><a href="http://it.tianya.cn/"
									appstr="it" _checklocation="1" _tystat="新版顶导航/分社区/IT数码">IT数码</a></li>
								<li class="top-nav-menu-li"><a
									href="http://fashion.tianya.cn/" appstr="fashion"
									_checklocation="1" _tystat="新版顶导航/分社区/时尚">时尚</a></li>
								<li class="top-nav-menu-li"><a href="http://emo.tianya.cn/"
									appstr="emo" _checklocation="1" _tystat="新版顶导航/分社区/情感">情感</a></li>
								<li class="top-nav-menu-li"><a href="http://ent.tianya.cn/"
									appstr="ent" _checklocation="1" _tystat="新版顶导航/分社区/娱乐">娱乐</a></li>
								<li class="top-nav-menu-li"><a
									href="http://sports.tianya.cn/" appstr="sports"
									_checklocation="1" _tystat="新版顶导航/分社区/体育">体育</a></li>
								<li class="top-nav-menu-li"><a href="http://pp.tianya.cn/"
									appstr="pp" _checklocation="1" _tystat="新版顶导航/分社区/图片">图片</a></li>
								<li class="top-nav-menu-li"><a
									href="http://video.tianya.cn/" appstr="video"
									_checklocation="1" _tystat="新版顶导航/分社区/视频">视频</a></li>
								<li class="top-nav-menu-li">
									<div id="top_nav_community_more_view" class="more-view">
										<ul class="link-list clearfix">
											<li><a href="http://xinzhi.tianya.cn/"
												_tystat="新版顶导航/分社区/更多/新知">新知</a></li>
											<li><a href="http://baby.tianya.cn/"
												_tystat="新版顶导航/分社区/更多/亲子">亲子</a></li>
											<li><a href="http://yuqing.tianya.cn/"
												_tystat="新版顶导航/分社区/更多/舆情">舆情</a></li>
											<li><a href="http://gongyi.tianya.cn/"
												_tystat="新版顶导航/分社区/更多/公益">公益</a></li>
											<li><a href="http://star.tianya.cn/"
												_tystat="新版顶导航/分社区/更多/星工场">星工场</a></li>
											<li><a href="http://media.tianya.cn/"
												_tystat="新版顶导航/分社区/更多/传媒">传媒</a></li>
											<li><a
												href="http://2000.bbs.tianya.cn/djmanage/djpage.asp?djid=12237"
												_tystat="新版顶导航/分社区/更多/换礼">换礼</a></li>
											<li><a href="http://ebook.tianya.cn/"
												_tystat="新版顶导航/分社区/更多/读书">读书</a></li>
										</ul>
									</div> <span id="top_nav_community_more" class="top-ico-bg">更多</span>
								</li>
							</ul>
						</div>
						<div class="top-nav-fr">
							<ul class="top-nav-menu-list clearfix">
								<li class="top-nav-menu-li top-nav-menu-li-first"><a
									href="http://bj.tianya.cn/" appstr="city-bj" _checklocation="1"
									_tystat="新版顶导航/城市/北京">北京</a></li>
								<li class="top-nav-menu-li"><a href="http://sh.tianya.cn/"
									appstr="city-sh" _checklocation="1" _tystat="新版顶导航/城市/上海">上海</a></li>
								<li class="top-nav-menu-li"><a href="http://gd.tianya.cn/"
									appstr="city-gd" _checklocation="1" _tystat="新版顶导航/城市/广东">广东</a></li>
								<li class="top-nav-menu-li">
									<div id="top_nav_city_all_view" class="more-view">
										<div id="top_nav_city_item">
											<div class="clearfix">
												<dl class="link-list3">
													<dt>
														<strong></strong> [ <a class="js-bbsCityBack"
															href="javascript:void(0);">返回查看全部地区</a> ]
													</dt>
												</dl>
											</div>
										</div>
										<div id="top_nav_city_list">
											<ul class="link-list2 clearfix">
												<li class="loading"><img src="ty_files/loading1.gif"
													align="absmiddle"> 正在加载...</li>
											</ul>
										</div>
									</div> <span id="top_nav_city_all" class="top-ico-bg" js-data="null">更多</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" charset="utf-8">
			TY.ui.nav.init({
				showTopNav : false,
				topNavFromHtml : true
			});
		</script>
		<script type="text/javascript">
			var bbsGlobal = {
				isEhomeItem : false
			};
		</script>
		<div id="bbsdoc" class="bbsdoc">
			<div class="clearfix"></div>
			<!--兼容个别浏览器强制改变最小字号而导致的页面错乱-->
			<div id="hd"></div>
			<div id="bd" class="layout-lmr clearfix">
				<div id="left">
					<div id="bbs_left_nav" class="bbs_left_nav">
						<div class="bbs_left_logo"  style="z-index: 9999">
							<a href="http://bbs.tianya.cn/">吉首大学社团管理首页</a>
						</div>
						<ul class="nav_parent">
							<li>
							<a class="expand" href="http://bbs.tianya.cn/list-lookout-1.shtml">社团列表</a></li>
							<s:action name="listShortMass" executeResult="true"></s:action>
						</ul>
						<div class="line">&nbsp;</div>
					</div>
				</div>
				<div id="right">


					<div id="q_button_180_90" class="banner-img-mb10">
						<!--180*90小图-->
					</div>

					<!--了望天涯-->


					<div class="section" _stat="/stat/bbs/index/社区公告" _tystat="社区公告">
						<div class="hd clearfix">
							<h2>社区公告</h2>
						</div>
						<div class="bd">
							<ul class="text-list">
								<li><a
									href="http://bbs.tianya.cn/post-lookout-268056-1.shtml"
									class="title" target="_blank" title="天涯社区暂停访问公告">天涯社区暂停访问公告</a></li>
								<li><a
									href="http://bbs.tianya.cn/post-lookout-268043-1.shtml"
									class="title" target="_blank" title="祝贺亚洲论坛开版">祝贺亚洲论坛开版</a></li>
								<li><a
									href="http://bbs.tianya.cn/post-travel-473850-1.shtml"
									class="title" target="_blank" title="天涯旅游新推“艳遇”利器！">天涯旅游新推“艳遇”利器！</a></li>
								<li class="more"><a
									href="http://bbs.tianya.cn/list-lookout-1.shtml">更多&gt;&gt;</a></li>
							</ul>
						</div>
						<div class="ft"></div>
					</div>

					<!--180*150中图-->
					<div style="display: block;" id="AD_img_180_150_LINK"
						class="section">
						<div class="hd clearfix">
							<h2>送花送钻，不如带她去泡泡</h2>
						</div>
						<div class="bd">
							<a
								href="http://807.tianya.cn/count?t=ntk8CwhhlBv665pOLmNv&amp;backurl=http://page.tianya.cn/wqhome/shop?c=30228&amp;couid=45480"
								target="_blank"><img src="ty_files/1364799028216.jpg"
								class="pic"></a>
						</div>
						<div class="ft"></div>
					</div>

					<!--人气用户-->







					<div class="section" _stat="/stat/bbs/index/人气网友" _tystat="人气网友">
						<div class="hd clearfix">
							<h2>人气网友</h2>
						</div>
						<div class="bd">
							<ul class="user-list">
								<li class="clearfix"><div class="headbox">
										<div class="head50">
											<a
												href="http://www.tianya.cn/n/%E8%B8%8F%E6%B5%AA%E8%80%8C%E6%9D%A5%E7%9A%84%E9%A3%8E"
												target="_blank"><img src="ty_files/24866027.htm"></a>
										</div>
										<div class="focus-btn">
											<a _data="24866027" class="t-setfocus t-notfocus"
												href="javascript:void(0);"></a>
										</div>
									</div>
									<p class="text">
										<a
											href="http://www.tianya.cn/n/%E8%B8%8F%E6%B5%AA%E8%80%8C%E6%9D%A5%E7%9A%84%E9%A3%8E"
											target="_blank">踏浪而来的风</a><em title="天涯牛人认证"
											class="my-16 my-16-star"></em>
									</p>
									<p class="desc">粉丝数86190人</p>
									<p class="text">
										<a href="http://bbs.tianya.cn/post-607-28101-1.shtml"
											target="_blank">兰展</a>
									</p></li>
								<li class="clearfix"><div class="headbox">
										<div class="head50">
											<a href="http://www.tianya.cn/n/%E5%AE%89%E6%9D%B0"
												target="_blank"><img src="ty_files/13227.htm"></a>
										</div>
										<div class="focus-btn">
											<a _data="13227" class="t-setfocus t-notfocus"
												href="javascript:void(0);"></a>
										</div>
									</div>
									<p class="text">
										<a href="http://www.tianya.cn/n/%E5%AE%89%E6%9D%B0"
											target="_blank">安杰</a>
									</p>
									<p class="desc">粉丝数169人</p>
									<p class="text">
										<a href="http://bbs.tianya.cn/post-no21-16782-1.shtml"
											target="_blank">海口骑楼老街，带你穿越到民国!</a>
									</p></li>
								<li class="clearfix"><div class="headbox">
										<div class="head50">
											<a
												href="http://www.tianya.cn/n/%E6%B9%96%E5%85%89%E6%B5%B7%E9%9F%B5369"
												target="_blank"><img src="ty_files/66248917.htm"></a>
										</div>
										<div class="focus-btn">
											<a _data="66248917" class="t-setfocus t-notfocus"
												href="javascript:void(0);"></a>
										</div>
									</div>
									<p class="text">
										<a
											href="http://www.tianya.cn/n/%E6%B9%96%E5%85%89%E6%B5%B7%E9%9F%B5369"
											target="_blank">湖光海韵369</a>
									</p>
									<p class="desc">粉丝数29人</p>
									<p class="text">
										<a href="http://bbs.tianya.cn/post-186-574338-1.shtml"
											target="_blank">行走故土之：那些飘逝的符号</a>
									</p></li>
								<!--  <li class="more"><a href="http://www.tianya.cn/bbs/more.jsp?mod=m14">更多&gt;&gt;</a></li>   -->
							</ul>
						</div>
						<div class="ft"></div>
					</div>

					<!--企业空间-精彩推荐-->
					<div id="exciting_activities">
						<div class="section">
							<div class="hd clearfix">
								<h2>推荐话题</h2>
							</div>
							<s:action name="listRec" executeResult="true">
								<s:param name="page" value="1"></s:param>
								<s:param name="size" value="20"></s:param>
							</s:action>
							<div class="ft"></div>
						</div>
					</div>

					<!--180*150中图-->
					<div id="q_button_180_150_1" class="banner-img-mb10"></div>

					<!--版块推荐-->

					<div class="section" _stat="/stat/bbs/block/版块推荐" _tystat="版块推荐">
						<div class="hd clearfix">
							<h2>版块推荐</h2>
						</div>
						<div class="bd">
							<ul class="user-list">
								<li class="clearfix"><div class="headbox">
										<div class="head50">
											<a href="http://bbs.tianya.cn/list-329-1.shtml"><img
												src="ty_files/137579571.htm" height="50" width="50"></a>
										</div>
									</div>
									<p class="text">
										<a href="http://bbs.tianya.cn/list-329-1.shtml">天涯广州</a><br>
										<a href="http://bbs.tianya.cn/list-329-1.shtml">静水流深，自由、平等、包容，广州的城市精神<br></a>
									</p></li>
							</ul>
							<ul class="text-list">
								<li><a href="http://bbs.tianya.cn/post-329-467790-1.shtml"
									target="_blank" title="明天就要去看房了…据说买房是个长久战，体力活">明天就要去看房了…据说买房是个长久战，体力活</a></li>
								<li><a href="http://bbs.tianya.cn/post-329-468274-1.shtml"
									target="_blank" title="让盒饭去见鬼吧，晚餐，冬笋腊肉。">让盒饭去见鬼吧，晚餐，冬笋腊肉。</a></li>
								<li><a href="http://bbs.tianya.cn/post-329-469406-1.shtml"
									target="_blank" title="从月薪1800元到5000元，需要多久？">从月薪1800元到5000元，需要多久？</a></li>
							</ul>
						</div>
						<div class="ft"></div>
					</div>

					<!--旅游推荐-->
					<div id="travel_recommend"></div>

					<!--180*300大图-->
					<div id="q_button_180_300" class="section banner-img-mb10"></div>

					<!--版块排行-->
					<div class="section" _stat="/stat/bbs/block/版块排行" _tystat="版块排行">
						<div class="hd clearfix">
							<h2>版块排行</h2>
						</div>
						<div class="bd">
							<ul class="block-ranking">
								<s:action name="massRank" executeResult="true"></s:action>
							</ul>
						</div>
					</div>


					<!--手机和客服 
					<div class="section" id="right_mobile" _tystat="玩转手机">
						<div class="hd clearfix">
							<h2>玩转手机</h2>
						</div>
						<div class="bd">
							<ul class="text-list">
								<li><a href="http://www.tianya.cn/mobile/" target="_blank">手机访问m.tianya.cn</a></li>
								<li><a href="http://www.tianya.cn/mobile/iphone">iPhone客户端</a></li>
								<li><a href="http://www.tianya.cn/mobile/android">Android客户端</a></li>
								<!-- 
            <li><a href="/mobile/symbianv3.jsp">Symbian V3客户端</a></li>
            <li><a href="/mobile/symbianv5.jsp">Symbian V5客户端</a></li>
            
								<li><a href="http://www.tianya.cn/mobile/winphone">Windows
										Phone客户端</a></li>
							</ul>
						</div>
					</div>
 -->
					<!--%@ include file="right_service.jsp"%-->

				</div>
				<div id="main">
					<!--以下为论坛首页中部模块,非常重要,主要以奇勇/永华/武彬调整为主.-->

					<div class="clearfix">
						<div id="q_topbanner_685_90_additional"
							class="banner-img-mb10 ad-additional" _nodispaly="true">
							<!--宽屏补充广告位-->
						</div>
						<div id="q_topbanner_685_90" class="banner-img-mb10">
							<!--固定高度class:banner-h100 顶部通栏广告-->
						</div>
					</div>

					<div id="myTopBlock" class="clearfix bbs-often-view mb10 fs14"
						_stat="/stat/bbs/block/常去版块" _tystat="常去版块">
						<dl>
							<dt>常去:</dt>
							<dd>
								<a href="http://bbs.tianya.cn/list-funinfo-1.shtml">娱乐八卦</a>
							</dd>
							<dd>
								<a href="http://bbs.tianya.cn/list-free-1.shtml">天涯杂谈</a>
							</dd>
							<dd>
								<a href="http://bbs.tianya.cn/list-feeling-1.shtml">情感天地</a>
							</dd>
							<dd>
								<a href="http://bbs.tianya.cn/list-worldlook-1.shtml">国际观察</a>
							</dd>
							<dd>
								<a href="http://bbs.tianya.cn/list-develop-1.shtml">经济论坛</a>
							</dd>
						</dl>
					</div>

					<!--热帖榜-->

					<div class="wrap-1 clearfix js-bbs-hot-list">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>热帖榜</span></li>
							</ul>
							<div class="location clearfix">
								<a href="http://bbs.tianya.cn/compose.jsp"
									class="btn-post btn-gray" rel="nofollow">发帖</a>
							</div>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div class="wrap-bd-in bbs-list-box show clearfix"
								_stat="/stat/bbs/index/热帖榜" _tystat="热帖榜">
								<s:action name="getHotBbs" executeResult="true">
										<s:param name="page" value="1"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getHotBbs" executeResult="true">
										<s:param name="page" value="2"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getHotBbs" executeResult="true">
										<s:param name="page" value="3"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getHotBbs" executeResult="true">
										<s:param name="page" value="4"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getHotBbs" executeResult="true">
										<s:param name="page" value="5"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<div class="page">
									<a class="sel" href="javascript:void(0);">1</a><a
										href="javascript:void(0);">2</a><a href="javascript:void(0);">3</a><a
										href="javascript:void(0);">4</a><a href="javascript:void(0);">5</a>
									<a href="#" class="bbs-list-more">更多&gt;&gt;</a>
								</div>
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>



					<!--实时热帖榜-->
					<!--%@ include file="/bbs/pub/hot_art2.jsp" %-->

					<div class="clearfix">
						<div id="q_topbanner_685_90_1_additional"
							class="banner-img-mt10 ad-additional" _nodispaly="true">
							<!--宽屏补充广告位-->
						</div>
						<div id="q_topbanner_685_90_1" class="banner-img-mt10">
							<!--固定高度class:banner-h100 通栏广告1-->
						</div>
					</div>

					<!--推荐版-->
					<div class="wrap-1 mt5 clearfix js-bbs-hot-list">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>推荐榜</span></li>
							</ul>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div class="wrap-bd-in bbs-list-box show clearfix"
								_stat="/stat/bbs/index/别院榜" _tystat="别院榜">
								<s:action name="getRecommend" executeResult="true">
										<s:param name="page" value="1"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getRecommend" executeResult="true">
										<s:param name="page" value="2"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getRecommend" executeResult="true">
										<s:param name="page" value="3"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getRecommend" executeResult="true">
										<s:param name="page" value="4"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getRecommend" executeResult="true">
										<s:param name="page" value="5"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<div class="page">
									<a class="sel" href="javascript:void(0);">1</a><a
										href="javascript:void(0);">2</a><a href="javascript:void(0);">3</a><a
										href="javascript:void(0);">4</a><a href="javascript:void(0);">5</a>
								</div>
								<!--<a href="#" class="bbs-list-more">更多&gt;&gt;</a>-->
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>

					<!--置顶榜-->
					<div class="wrap-1 mt5 clearfix js-bbs-hot-list">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>置顶榜</span></li>
							</ul>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div class="wrap-bd-in bbs-list-box show clearfix"
								_stat="/stat/bbs/index/城市榜" _tystat="城市榜">
								<s:action name="getPostHead" executeResult="true">
										<s:param name="page" value="1"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getPostHead" executeResult="true">
										<s:param name="page" value="2"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getPostHead" executeResult="true">
										<s:param name="page" value="3"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getPostHead" executeResult="true">
										<s:param name="page" value="4"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getPostHead" executeResult="true">
										<s:param name="page" value="5"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<div class="page">
									<a class="sel" href="javascript:void(0);">1</a><a
										href="javascript:void(0);">2</a><a href="javascript:void(0);">3</a><a
										href="javascript:void(0);">4</a><a href="javascript:void(0);">5</a>
								</div>
								<!--<a href="#" class="bbs-list-more">更多&gt;&gt;</a>-->
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>

					<div class="clearfix">
						<div id="q_topbanner_685_90_2_additional"
							class="banner-img-mt10 ad-additional" _nodispaly="true">
							<!--宽屏补充广告位-->
						</div>
						<div id="q_topbanner_685_90_2" class="banner-img-mt10">
							<!--通栏广告2-->
						</div>
					</div>

					<!--最新更新-->
					<div class="wrap-1 mt5 clearfix js-bbs-hot-list">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>最新更新榜</span></li>
							</ul>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div class="wrap-bd-in bbs-list-box show clearfix"
								_stat="/stat/bbs/index/旅游榜" _tystat="旅游榜">
								<s:action name="getLastUpdate" executeResult="true">
										<s:param name="page" value="1"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getLastUpdate" executeResult="true">
										<s:param name="page" value="2"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getLastUpdate" executeResult="true">
										<s:param name="page" value="3"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getLastUpdate" executeResult="true">
										<s:param name="page" value="4"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getLastUpdate" executeResult="true">
										<s:param name="page" value="5"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<div class="page">
									<a class="sel" href="javascript:void(0);">1</a><a
										href="javascript:void(0);">2</a><a href="javascript:void(0);">3</a><a
										href="javascript:void(0);">4</a><a href="javascript:void(0);">5</a><a
										href="http://travel.tianya.cn/" target="_blank"
										class="bbs-list-more">更多&gt;&gt;</a>
								</div>
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>

					<!--加精  -->
					<div class="wrap-1 mt5 clearfix js-bbs-hot-list" id="geban_toutiao">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>各版头条</span></li>
							</ul>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div _stat="/stat/bbs/index/各版头条"
								class="wrap-bd-in bbs-list-box show clearfix" _tystat="各版头条">
									<s:action name="getDigest" executeResult="true">
										<s:param name="page" value="1"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getDigest" executeResult="true">
										<s:param name="page" value="2"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getDigest" executeResult="true">
										<s:param name="page" value="3"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getDigest" executeResult="true">
										<s:param name="page" value="4"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<s:action name="getDigest" executeResult="true">
										<s:param name="page" value="5"></s:param>
										<s:param name="size" value="12"></s:param>
								</s:action>
								<div class="page">
									<a href="javascript:void(0);" class="sel">1</a><a
										href="javascript:void(0);">2</a><a href="javascript:void(0);">3</a><a
										href="javascript:void(0);">4</a><a href="javascript:void(0);">5</a>
								</div>
								<!--<a href="#" class="bbs-list-more">更多&gt;&gt;</a>-->
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>

					<!--各版头图-->
					<div id="top_img" class="wrap-1 mt5 clearfix js-bbs-hot-list">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>各版头图</span></li>
							</ul>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div class="wrap-bd-in bbs-list-box show clearfix"
								_stat="/stat/bbs/index/各版头图" _tystat="各版头图">
								<ul class="bbs-list bbs-img-list curr">
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-5214-1.shtml"><img
													src="ty_files/138754805.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5214-3188-1.shtml">趁青春，快疯狂一次</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-free-1.shtml"><img
													src="ty_files/138755544.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-free-3206920-1.shtml">淮安卫生局长挥霍公款包情妇</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-41-1.shtml"><img
													src="ty_files/138754282.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-41-1157505-1.shtml">CCTV记者采访一农民工</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-455-1.shtml"><img
													src="ty_files/138751750.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-455-32348-1.shtml">我的漫漫驾考路</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-hn-1.shtml"><img
													src="ty_files/138750392.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-hn-76428-1.shtml">记录：习近平总书记在海南</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-5229-1.shtml"><img
													src="ty_files/138739732.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5229-2047-1.shtml">各国标准美女</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-63-1.shtml"><img
													src="ty_files/138699451.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-63-672250-1.shtml">夜幕下的宽窄巷子</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-769-1.shtml"><img
													src="ty_files/138665731.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-769-10345-1.shtml">青藏线返回！</a>
											</p>
										</div></li>
								</ul>
								<ul class="bbs-list bbs-img-list">
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-754-1.shtml"><img
													src="ty_files/138701742.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-754-4916-1.shtml">传说岛国很“色情”？</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-5131-1.shtml"><img
													src="ty_files/138700042.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5131-15201-1.shtml">爆照了，各种小清新</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-769-1.shtml"><img
													src="ty_files/138577687.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-769-10341-1.shtml">一路狂奔：九寨沟自驾</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-tianyamyself-1.shtml"><img
													src="ty_files/138701119.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-tianyamyself-180902-1.shtml">只有我穿的跟狗熊似的</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-41-1.shtml"><img
													src="ty_files/138401786.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-41-1156993-1.shtml">15岁少女惨遭游街</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-tianyamyself-1.shtml"><img
													src="ty_files/138699695.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-tianyamyself-180836-1.shtml">脸肉肉的婴儿肥妹子</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-75-1.shtml"><img
													src="ty_files/138699433.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-75-594756-1.shtml">让我蛋蛋忧桑的大金毛</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-tianyamyself-1.shtml"><img
													src="ty_files/138698173.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-tianyamyself-180826-1.shtml">没PS没修图没妆最真实</a>
											</p>
										</div></li>
								</ul>
								<ul class="bbs-list bbs-img-list">
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-650-1.shtml"><img
													src="ty_files/138694532.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-650-16752-1.shtml">明星最好看的那些瞬间</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-75-1.shtml"><img
													src="ty_files/138692849.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-75-594862-1.shtml">我的小鹦鹉money</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-75-1.shtml"><img
													src="ty_files/138690284.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-75-594903-1.shtml">开帖纪录下我的vv猫</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-sport-1.shtml"><img
													src="ty_files/138688740.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-sport-207130-1.shtml">刘翔不宣布退役因合同未到期</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-no04-1.shtml"><img
													src="ty_files/138644783.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-no04-2289049-1.shtml">图片直播川东喜宴</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-293-1.shtml"><img
													src="ty_files/138684785.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-293-126407-1.shtml">图文并茂，教你做邵阳蛋卷！</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-no04-1.shtml"><img
													src="ty_files/138682029.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-no04-2289291-1.shtml">非典幸存者</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-worldlook-1.shtml"><img
													src="ty_files/138676848.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-worldlook-726531-1.shtml">把各国阅兵式拉出来比一比</a>
											</p>
										</div></li>
								</ul>
								<ul class="bbs-list bbs-img-list">
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-41-1.shtml"><img
													src="ty_files/138657036.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-41-1157512-1.shtml">上海“富姐们”背什么包？</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-travel-1.shtml"><img
													src="ty_files/138653333.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-travel-479622-1.shtml">北极
													梦幻之旅</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-393-1.shtml"><img
													src="ty_files/137242325.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-393-7320-1.shtml">初到汉堡—报道贴</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-5229-1.shtml"><img
													src="ty_files/138647206.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5229-2055-1.shtml">毁掉清华百年声誉的人</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-5103-1.shtml"><img
													src="ty_files/138643903.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5103-8424-1.shtml">挺近虎牙，无限风光在险峰</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-5010-1.shtml"><img
													src="ty_files/138643784.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5010-38924-1.shtml">818你周边或者家乡的小吃</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-funinfo-1.shtml"><img
													src="ty_files/138642887.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-funinfo-4074088-1.shtml">华鼎奖明星红毯
													AB疑似隆胸</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-922-1.shtml"><img
													src="ty_files/138639830.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-922-4830-1.shtml">春风吹进颐和园（2）</a>
											</p>
										</div></li>
								</ul>
								<ul class="bbs-list bbs-img-list">
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-5214-1.shtml"><img
													src="ty_files/138639032.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5214-3162-1.shtml">红色炮弹吃垮我的钱包</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-no20-1.shtml"><img
													src="ty_files/138638473.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-no20-390522-1.shtml">当医生一年，看见医院就想吐</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-325-1.shtml"><img
													src="ty_files/138634541.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-325-33801-1.shtml">屌丝的桌面背景图~</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-41-1.shtml"><img
													src="ty_files/138525093.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-41-1157306-1.shtml">地铁上，遭遇极品女</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-books-1.shtml"><img
													src="ty_files/138617635.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-books-179029-1.shtml">记忆之水和遗忘之水</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-books-1.shtml"><img
													src="ty_files/138617449.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-books-178602-1.shtml">斯里兰卡，佛祖的泪滴</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-5229-1.shtml"><img
													src="ty_files/138505394.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5229-2037-1.shtml">星座流氓指数大曝光！</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/list-73-1.shtml"><img
													src="ty_files/138602485.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-73-604503-1.shtml">最美的国事欢迎仪式</a>
											</p>
										</div></li>
								</ul>

								<div class="page">
									<a class="sel" href="javascript:void(0);">1</a><a
										href="javascript:void(0);" class="">2</a><a
										href="javascript:void(0);" class="">3</a><a
										href="javascript:void(0);" class="">4</a><a
										href="javascript:void(0);" class="">5</a>
								</div>
								<!--<a href="#" class="bbs-list-more">更多&gt;&gt;</a>-->
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>

					<!--红黑榜-->
					<div id="grade_art" class="wrap-1 mt5 clearfix js-bbs-hot-list">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>红黑榜</span></li>
							</ul>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div class="wrap-bd-in bbs-list-box show clearfix"
								_stat="/stat/bbs/index/红黑榜" _tystat="红黑榜">



								<ul class="bbs-list bbs-list2 curr">

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-ehomephot-1.shtml">摄影贴图</a></span>
										<div class="title">
											<a title="在自己生活的小岛旅行：天堂小镇博鳌及红石滩" target="_blank"
												href="http://bbs.tianya.cn/post-ehomephot-35584-1.shtml">在自己生活的小岛旅行：天堂小镇博鳌及红石滩</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-832-1.shtml">炎黄陕西</a></span>
										<div class="title">
											<a title="独行广州----华南植物园" target="_blank"
												href="http://bbs.tianya.cn/post-832-4794-1.shtml">独行广州----华南植物园</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-767-1.shtml">家有学童</a></span>
										<div class="title">
											<a title="让孩子玩着学成语~配图" target="_blank"
												href="http://bbs.tianya.cn/post-767-27611-1.shtml">让孩子玩着学成语~配图</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-739-1.shtml">天山南北</a></span>
										<div class="title">
											<a title="雪后山谷里的小屋，幽静的杏花沟" target="_blank"
												href="http://bbs.tianya.cn/post-739-8815-1.shtml">雪后山谷里的小屋，幽静的杏花沟</a>
										</div></li>
									<li class="li-line"></li>
									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-70-1.shtml">铅笔森林</a></span>
										<div class="title">
											<a title="假使我有围城似的爱情" target="_blank"
												href="http://bbs.tianya.cn/post-70-545955-1.shtml">假使我有围城似的爱情</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-travel-1.shtml">旅游休闲</a></span>
										<div class="title">
											<a title="其实不穷，其实无穷----单车自驾映象老挝" target="_blank"
												href="http://bbs.tianya.cn/post-travel-480095-1.shtml">其实不穷，其实无穷----单车自驾映象老挝</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-fans-1.shtml">球迷一家</a></span>
										<div class="title">
											<a title="【复盘巴萨】来自香榭丽舍的警钟" target="_blank"
												href="http://bbs.tianya.cn/post-fans-353832-1.shtml">【复盘巴萨】来自香榭丽舍的警钟</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-140-1.shtml">教师</a></span>
										<div class="title">
											<a title="图片故事2013" target="_blank"
												href="http://bbs.tianya.cn/post-140-625422-1.shtml">图片故事2013</a>
										</div></li>
									<li class="li-line"></li>
								</ul>

								<ul class="bbs-list bbs-list2 ">

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-272-1.shtml">兰州</a></span>
										<div class="title">
											<a title="黄河边上拍兰州" target="_blank"
												href="http://bbs.tianya.cn/post-272-12438-1.shtml">黄河边上拍兰州</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-725-1.shtml">焕彩香江</a></span>
										<div class="title">
											<a title="4月4日---7日暴走购物西贡美食游" target="_blank"
												href="http://bbs.tianya.cn/post-725-8867-1.shtml">4月4日---7日暴走购物西贡美食游</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-754-1.shtml">海南美食</a></span>
										<div class="title">
											<a title="从海南小岛到越南，一路吃喝玩乐记（图）" target="_blank"
												href="http://bbs.tianya.cn/post-754-4938-1.shtml">从海南小岛到越南，一路吃喝玩乐记（图）</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-63-1.shtml">四川</a></span>
										<div class="title">
											<a title="遭遇大雨暴雪，挑战牛背山归来......" target="_blank"
												href="http://bbs.tianya.cn/post-63-672287-1.shtml">遭遇大雨暴雪，挑战牛背山归来......</a>
										</div></li>
									<li class="li-line"></li>
									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-767-1.shtml">家有学童</a></span>
										<div class="title">
											<a title="有一种富养叫做不花钱－养儿养女养自己" target="_blank"
												href="http://bbs.tianya.cn/post-767-27607-1.shtml">有一种富养叫做不花钱－养儿养女养自己</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-fans-1.shtml">球迷一家</a></span>
										<div class="title">
											<a title="输得一地鸡毛（曼联的德比分析）" target="_blank"
												href="http://bbs.tianya.cn/post-fans-353613-1.shtml">输得一地鸡毛（曼联的德比分析）</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-140-1.shtml">教师</a></span>
										<div class="title">
											<a title="《在路上》" target="_blank"
												href="http://bbs.tianya.cn/post-140-617868-1.shtml">《在路上》</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-874-1.shtml">辽阔东北</a></span>
										<div class="title">
											<a title="冰雪融化的震撼" target="_blank"
												href="http://bbs.tianya.cn/post-874-5187-1.shtml">冰雪融化的震撼</a>
										</div></li>
									<li class="li-line"></li>
								</ul>

								<ul class="bbs-list bbs-list2 ">

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-no04-1.shtml">贴图专区</a></span>
										<div class="title">
											<a title="老街，城市的记忆匣子" target="_blank"
												href="http://bbs.tianya.cn/post-no04-2288475-1.shtml">老街，城市的记忆匣子</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-water-1.shtml">灌水专区</a></span>
										<div class="title">
											<a title="梦里江南是喝不完的酒" target="_blank"
												href="http://bbs.tianya.cn/post-water-1341424-1.shtml">梦里江南是喝不完的酒</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-687-1.shtml">浪漫三亚</a></span>
										<div class="title">
											<a title="甜心美女三亚晒身材晒服装，大量美图迷倒你！" target="_blank"
												href="http://bbs.tianya.cn/post-687-18996-1.shtml">甜心美女三亚晒身材晒服装，大量美图迷倒你！</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-769-1.shtml">巴山蜀水</a></span>
										<div class="title">
											<a title="春天，柳江古镇真的不错哦~" target="_blank"
												href="http://bbs.tianya.cn/post-769-10271-1.shtml">春天，柳江古镇真的不错哦~</a>
										</div></li>
									<li class="li-line"></li>
									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-780-1.shtml">个性90后</a></span>
										<div class="title">
											<a title="[随心之笔]90后的请进，818你的人生观，价值观" target="_blank"
												href="http://bbs.tianya.cn/post-780-27766-1.shtml">[随心之笔]90后的请进，818你的人生观，价值观</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-47-1.shtml">深圳</a></span>
										<div class="title">
											<a title="送给想来深圳的朋友（看此帖少走十年冤枉路）" target="_blank"
												href="http://bbs.tianya.cn/post-47-1451730-1.shtml">送给想来深圳的朋友（看此帖少走十年冤枉路）</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-5157-1.shtml">四川房产</a></span>
										<div class="title">
											<a title="这个户型怎么样？优缺点有哪些 ？中间红色的一块是不是浪费的？" target="_blank"
												href="http://bbs.tianya.cn/post-5157-17588-1.shtml">这个户型怎么样？优缺点有哪些
												？中间红色的一块是不是浪费的？</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-312-1.shtml">芜湖</a></span>
										<div class="title">
											<a title="收养的那只流浪猫~~不定时加照片哈" target="_blank"
												href="http://bbs.tianya.cn/post-312-12707-1.shtml">收养的那只流浪猫~~不定时加照片哈</a>
										</div></li>
									<li class="li-line"></li>
								</ul>

								<ul class="bbs-list bbs-list2 ">

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-739-1.shtml">天山南北</a></span>
										<div class="title">
											<a title="天夸张，花放肆之新疆伊犁新源杏花沟" target="_blank"
												href="http://bbs.tianya.cn/post-739-8816-1.shtml">天夸张，花放肆之新疆伊犁新源杏花沟</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-343-1.shtml">蓝色老人</a></span>
										<div class="title">
											<a title="江山多娇——三清山" target="_blank"
												href="http://bbs.tianya.cn/post-343-27478-1.shtml">江山多娇——三清山</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-443-1.shtml">职业女性</a></span>
										<div class="title">
											<a title="记录在北京奋斗的日子" target="_blank"
												href="http://bbs.tianya.cn/post-443-69420-1.shtml">记录在北京奋斗的日子</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-41-1.shtml">上海</a></span>
										<div class="title">
											<a title="上海菜" target="_blank"
												href="http://bbs.tianya.cn/post-41-1156945-1.shtml">上海菜</a>
										</div></li>
									<li class="li-line"></li>
									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-297-1.shtml">宜昌</a></span>
										<div class="title">
											<a title="那些年醉过的酒" target="_blank"
												href="http://bbs.tianya.cn/post-297-25243-1.shtml">那些年醉过的酒</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-832-1.shtml">炎黄陕西</a></span>
										<div class="title">
											<a title="独行广州----华林禅寺" target="_blank"
												href="http://bbs.tianya.cn/post-832-4790-1.shtml">独行广州----华林禅寺</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-no16-1.shtml">散文天下</a></span>
										<div class="title">
											<a title="写给青春的77封信" target="_blank"
												href="http://bbs.tianya.cn/post-no16-243484-1.shtml">写给青春的77封信</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-307-1.shtml">潮汕</a></span>
										<div class="title">
											<a title="【我的家庭菜单】——1家3口晚餐进行时" target="_blank"
												href="http://bbs.tianya.cn/post-307-33998-1.shtml">【我的家庭菜单】——1家3口晚餐进行时</a>
										</div></li>
									<li class="li-line"></li>
								</ul>

								<ul class="bbs-list bbs-list2 ">

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-767-1.shtml">家有学童</a></span>
										<div class="title">
											<a title="记录正读初二的女儿成长日记" target="_blank"
												href="http://bbs.tianya.cn/post-767-23591-1.shtml">记录正读初二的女儿成长日记</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-5131-1.shtml">泸州</a></span>
										<div class="title">
											<a title="带你360度游布达拉宫" target="_blank"
												href="http://bbs.tianya.cn/post-5131-15190-1.shtml">带你360度游布达拉宫</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-develop-1.shtml">经济论坛</a></span>
										<div class="title">
											<a title="政策与楼市的拐点" target="_blank"
												href="http://bbs.tianya.cn/post-develop-1268509-1.shtml">政策与楼市的拐点</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-3d-1.shtml">动漫前线</a></span>
										<div class="title">
											<a title="【123时光机】治愈系小清晰~~！！！更新ing~~~~" target="_blank"
												href="http://bbs.tianya.cn/post-3d-62710-1.shtml">【123时光机】治愈系小清晰~~！！！更新ing~~~~</a>
										</div></li>
									<li class="li-line"></li>
									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-5007-1.shtml">广东房产</a></span>
										<div class="title">
											<a title="也来说说我的女友为买二套房假离婚的闹剧" target="_blank"
												href="http://bbs.tianya.cn/post-5007-18838-1.shtml">也来说说我的女友为买二套房假离婚的闹剧</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-no04-1.shtml">贴图专区</a></span>
										<div class="title">
											<a title="三月江南，花气袭人。" target="_blank"
												href="http://bbs.tianya.cn/post-no04-2287957-1.shtml">三月江南，花气袭人。</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-culture-1.shtml">舞文弄墨</a></span>
										<div class="title">
											<a title="如同鬼神一样的文字 《清明梦游》" target="_blank"
												href="http://bbs.tianya.cn/post-culture-494191-1.shtml">如同鬼神一样的文字
												《清明梦游》</a>
										</div></li>

									<li class="facered"><span><a
											href="http://bbs.tianya.cn/list-tianyamyself-1.shtml">天涯真我</a></span>
										<div class="title">
											<a title="November 剛剛申請的~新人 先發片吧~~" target="_blank"
												href="http://bbs.tianya.cn/post-tianyamyself-180331-1.shtml">November
												剛剛申請的~新人 先發片吧~~</a>
										</div></li>
									<li class="li-line"></li>
								</ul>

								<div class="page">
									<a class="sel" href="javascript:void(0);">1</a><a
										href="javascript:void(0);">2</a><a href="javascript:void(0);">3</a><a
										href="javascript:void(0);">4</a><a href="javascript:void(0);">5</a>
								</div>
								<!--<a href="#" class="bbs-list-more">更多&gt;&gt;</a>-->
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>
					<!--网友活动-->
					<div id="user-act" class="wrap-1 mt5 clearfix js-bbs-hot-list">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>网友活动</span></li>
							</ul>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div class="wrap-bd-in bbs-list-box show clearfix"
								_stat="/stat/bbs/index/网友活动" _tystat="网友活动">
								<ul class="bbs-list bbs-img-list curr">

									<li>
										<div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5154-7023-1.shtml"><img
													src="ty_files/136392019.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-5154-7023-1.shtml">我与樱花有个约会</a>
											</p>
										</div>
									</li>

									<li>
										<div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/post-687-19015-1.shtml"><img
													src="ty_files/138757385.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-687-19015-1.shtml">用一句话形容三亚</a>
											</p>
										</div>
									</li>

									<li>
										<div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://bbs.tianya.cn/post-234-12297-1.shtml"><img
													src="ty_files/135926562.jpg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-234-12297-1.shtml">818你身边的灵异事件</a>
											</p>
										</div>
									</li>

									<li>
										<div class="info-wrap">
											<div class="img">
												<a target="_blank"
													href="http://wenda.tianya.cn/question/17kdjhrs8uabsi0fvda7dr88cnssi0tsg6jl2"><img
													src="ty_files/135148191.htm"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://wenda.tianya.cn/question/17kdjhrs8uabsi0fvda7dr88cnssi0tsg6jl2">说新年目标拿礼品拉</a>
											</p>
										</div>
									</li>

								</ul>
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>
					<!--精彩视频-->
					<div id="top_video" class="wrap-1 mt5 clearfix js-bbs-hot-list">
						<div class="tag-list clearfix">
							<ul class="clearfix">
								<li class="curr"><span>精彩视频</span></li>
							</ul>
						</div>
						<div class="wrap-hd clearfix">
							<div class="wrap-hd-l"></div>
							<div class="wrap-hd-r"></div>
						</div>
						<div class="wrap-bd clearfix">
							<div class="wrap-bd-in bbs-list-box show clearfix"
								_stat="/stat/bbs/index/精彩视频" _tystat="精彩视频">
								<ul class="bbs-list bbs-img-list curr">
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138753272.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-841798-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-841798-1.shtml">网友调侃红豆局长</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138752771.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-841854-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-841854-1.shtml">网友笑侃二奶反腐</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138690856.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-840851-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-840851-1.shtml">变态男给女友穿铁内裤</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138698454.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-841286-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-841286-1.shtml">亲，今天你板蓝根了吗</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138686672.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-841209-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-841209-1.shtml">女孩在男友家门口自杀</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138685927.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-841197-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-841197-1.shtml">h7n9死者获赔13万</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138685118.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-841188-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-841188-1.shtml">王丽坤被封素颜女神</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138668378.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-840826-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-840826-1.shtml">送给女朋友的生日歌曲</a>
											</p>
										</div></li>
								</ul>
								<ul class="bbs-list bbs-img-list">
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138554059.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-839792-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-839792-1.shtml">这是一首简单的小禽歌</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138516694.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-838893-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-838893-1.shtml">铁线虫入侵与H7N9猜想</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138514947.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-839111-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-839111-1.shtml">我喜欢你，你知道吗？</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138512820.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-839256-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-839256-1.shtml">新国五条版《渴望》</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138459798.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-838678-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-838678-1.shtml">微信收费要跟国际接轨</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138414196.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-838183-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-838183-1.shtml">摇微信找美女被拍裸照</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138395571.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-838105-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-838105-1.shtml">唐僧遇到白娘子</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138288678.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-837326-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-837326-1.shtml">小姐脱衣陪酒称天太热</a>
											</p>
										</div></li>
								</ul>
								<ul class="bbs-list bbs-img-list">
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138280688.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-837252-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-837252-1.shtml">劝君慎喝万能板蓝根</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138226442.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-836805-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-836805-1.shtml">楼市有风险离婚需谨慎</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138182303.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-836532-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-836532-1.shtml">北京深夜惊现裸奔男女</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138178606.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-833960-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-833960-1.shtml">网友原创：话说周立波</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138172199.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-836302-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-836302-1.shtml">无厘头版法海我很懂爱</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138081169.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-835476-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-835476-1.shtml">H7N9禽流感6人死亡</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138080539.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-835162-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-835162-1.shtml">海天盛筵否认淫乱派对</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138075501.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-834747-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-834747-1.shtml">花季女孩救母被烧伤</a>
											</p>
										</div></li>
								</ul>
								<ul class="bbs-list bbs-img-list">
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/138075479.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-834578-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-834578-1.shtml">网友原创MV：提醒自己</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137977443.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-834144-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-834144-1.shtml">众多明星出席三亚盛宴</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137821724.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-831639-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-831639-1.shtml">网友原创：老师的眼睛</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137814124.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-833168-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-833168-1.shtml">四好男人的下场</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137796985.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-833095-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-833095-1.shtml">清明节版《青花瓷》</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137785695.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-833006-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-833006-1.shtml">网友翻唱星语心愿</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137785622.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-832592-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-832592-1.shtml">原创微电影：爱的守候</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137719957.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-832110-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-832110-1.shtml">怎么好白菜都被猪拱了</a>
											</p>
										</div></li>
								</ul>
								<ul class="bbs-list bbs-img-list">
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137687803.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-832132-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-832132-1.shtml">歌曲串烧童话十八弯</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137686468.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-832148-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-832148-1.shtml">酒干瓶卖我批公款吃喝</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137684732.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-831128-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-831128-1.shtml">萌妹子吐槽考试题太难</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137633649.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-831688-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-831688-1.shtml">越狱17年自首是为孩子</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137579606.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-831189-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-831189-1.shtml">愚人节逆袭疯狂整蛊</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137573789.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-831184-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-831184-1.shtml">你是苹果迷吗</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137462656.htm"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-830159-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-830159-1.shtml">故乡的三种死亡方式</a>
											</p>
										</div></li>
									<li><div class="info-wrap">
											<div class="img clearfix">
												<img src="ty_files/137461492.jpg"><a target="_blank"
													href="http://bbs.tianya.cn/post-665-828876-1.shtml"
													class="play-bg"></a>
											</div>
											<p>
												<a target="_blank"
													href="http://bbs.tianya.cn/post-665-828876-1.shtml">吐槽国人跟风抢购潮</a>
											</p>
										</div></li>
								</ul>

								<div class="page">
									<a class="sel" href="javascript:void(0);">1</a><a
										href="javascript:void(0);" class="">2</a><a
										href="javascript:void(0);" class="">3</a><a
										href="javascript:void(0);" class="">4</a><a
										href="javascript:void(0);" class="">5</a>
								</div>
								<!--<a href="#" class="bbs-list-more">更多&gt;&gt;</a>-->
							</div>
						</div>
						<div class="wrap-ft clearfix">
							<div class="wrap-ft-l"></div>
							<div class="wrap-ft-t"></div>
						</div>
					</div>

					<!--发现推荐-->
					<!--%@ include file="/bbs/pub/main_faxiantuijian.jsp"%-->

					<!--特色版块-->
					<!--%@ include file="/bbs/pub/hot_item.jsp" %-->

					<!--版块大全-->
					<!--<div>版块列表</div>-->

					<jsp:include page="/WEB-INF/comment/link.jsp"></jsp:include>	

					
				</div>
			</div>
			<div id="ft"></div>
		</div>
		<script type="text/javascript" charset="UTF-8" src="ty_files/bbs.js"></script>
		<!--右下滑动广告-->
		<script type="text/javascript" charset="UTF-8" src="ty_files/wizard.js"></script>
		<script type="text/javascript" charset="UTF-8" src="ty_files/display.txt"></script>
		<div id="adsp_rp_crazy_div"
			style="position: absolute; left: 411px; top: 180px; z-index: 100; cursor: pointer; display: none;">
			<div
				style="position: relative; display: block; width: 600px; height: 350px;">
				<embed wmode="transparent" src="ty_files/1365734571873.swf"
					type="application/x-shockwave-flash"
					style="left: 0px; position: absolute;" height="350" width="600">
				<a target="_blank"
					href="http://807.tianya.cn/count?t=gdX5MWS1mhz8fsGnwL82&amp;backurl=http://sale.suning.com/images/advertise/007/0yuanxd/index.html?utm_source=zq-ty&amp;utm_medium=syll&amp;utm_content=qingchun&amp;utm_campaign=paiqi"><div
						style="position: relative; left: 0px; right: 0px; width: 600px; height: 350px; z-index: 10; background-color: rgb(255, 255, 255); opacity: 0; cursor: pointer;"></div></a>
			</div>
			<img id="adsp_crazy_close_btn"
				style="font-size: 14px; cursor: pointer; display: block; margin: 0px 0px 0px 529px;"
				src="ty_files/cclose.jpg">
		</div>
		<div id="adsp_rp_crazy_left_div"
			style="position: absolute; left: 0px; top: 378px; z-index: 100; cursor: pointer; display: block;">
			<a style="display: block;" target="_blank"
				href="http://807.tianya.cn/count?t=gdX5MWS1mhz8fsGnwL82&amp;backurl=http://sale.suning.com/images/advertise/007/0yuanxd/index.html?utm_source=zq-ty&amp;utm_medium=syll&amp;utm_content=qingchun&amp;utm_campaign=paiqi"><img
				src="ty_files/1365734583154.jpg" style="left: 0px; cursor: pointer;"></a><img
				style="display: block;" id="adsp_crazy_reply_btn"
				src="ty_files/r20.jpg">
		</div>
		<div id="foot">
			<p>
				<a href="http://help.tianya.cn/about/about.html" rel="nofollow"
					target="_blank">关于天涯</a> | <a
					href="http://help.tianya.cn/about/service.html" rel="nofollow"
					target="_blank">广告服务</a> | <a href="http://open.tianya.cn/"
					rel="nofollow" target="_blank">开放平台</a> | <a
					href="http://service.tianya.cn/" rel="nofollow" target="_blank">天涯客服</a>
				| <a href="http://help.tianya.cn/about/ystl.html" rel="nofollow"
					target="_blank">隐私和版权</a> | <a
					href="http://help.tianya.cn/about/contact.html" rel="nofollow"
					target="_blank">联系我们</a> | <a href="http://join.tianya.cn/"
					rel="nofollow" target="_blank">加入天涯</a> | <a
					href="http://m.tianya.cn/web/" rel="nofollow" target="_blank">手机版</a>
				| <a href="http://service.tianya.cn/jbts.html" rel="nofollow"
					target="_blank">举报投诉</a>
			</p>
			<p class="copyright">© 1999 - 2013 天涯社区</p>
		</div>
	</div>

	<div class="ty_tip_box" style="top: 67px; left: 1212.5px;">
		<a class="yijianfankui" title="谈谈新版感受和问题(无需登录)"
			href="http://bbs.tianya.cn/list.jsp?item=797&amp;sub=1"></a>
	</div>
	<div id="barcode_float">
		<a href="http://www.tianya.cn/mobile/" target="_blank"><p>吉首大学社团管理</p>
			<img src="image/qr.png">
		<p>手机扫描进入</p></a>
	</div>
	<div style="width: 0px; height: 0px;">
		<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
			codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"
			id="TYFC1" align="middle" height="0" width="0">
			<param name="allowScriptAccess" value="always">
			<param name="allowNetworking" value="all">
			<param name="movie"
				value="http://static.tianya.cn/js/2010/cookie.swf">
			<param name="quality" value="high">
			<param name="bgcolor" value="#ffffff">
			<embed src="ty_files/cookie.swf" quality="high" bgcolor="#ffffff"
				id="TYFC2" allowscriptaccess="always" allownetworking="all"
				type="application/x-shockwave-flash"
				pluginspage="http://www.macromedia.com/go/getflashplayer"
				align="middle" height="0" width="0">
		</object>
	</div>
</body>
</html>