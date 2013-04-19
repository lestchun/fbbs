<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="ty_files/h.js" async="" type="text/javascript"></script>
<meta charset="utf-8">
<title>发帖-${model.mass.name}-${model.name}</title>
<s:if test="'1001'==result.resultCode">
	<script type="text/javascript">
		var timer = setTimeout("location.href='index.jsp'", 3000);
		alert("${result.msg}，3秒后跳转到首页,点击确定返回");
		clearTimeout(timer);
		history.go(-1);
	</script>
</s:if>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">

<link href="ty_files/lite-all.css" rel="stylesheet" type="text/css">
<link href="ty_files/bbs.css" rel="stylesheet" type="text/css">
<!-- 
<link href="css/base950.css" rel="stylesheet" type="text/css">
<link href="css/custom_css.css" rel="stylesheet" type="text/css">
 -->
<link rel="shortcut icon"
	href="http://static.tianyaui.com/global/lite/favicon_32.ico?v=201304110830"
	type="image/vnd.microsoft.icon">
<script type="text/javascript" charset="utf-8"
	src="ty_files/lite-all.js"></script>
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

</head>
<body>
	<div id="bottom_nav_wrap" style="">
		<div style="width: 1255px;" id="bottom_nav">
			<div class="bottom-bg">
				<ul class="ul-nav">
					<li class="li-border-r li-user-name"><div
							id="bottom_username_view" class="more-view">
							<div class="bottom_username_view_wrap">
								<div class="bottom_username_subnav clearfix">
									<ul>
										<li class="li-first"><dl class="clearfix">
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
											</dl></li>
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
						</div> <span id="bottom_username" class="b-username" biz-data="null"
						js-data="null">我的天涯</span></li>
					<li class="li-border"><div id="bottom_trace_view"
							class="more-view">
							<ul class="link-list clearfix">
								<li class="logoing"><img src="ty_files/loading1.gif"></li>
							</ul>
						</div> <span bakfocusclass="on" id="bottom_trace" class="white"
						js-data="null"><span class="bottom-ico-bg bottom-ico-bg-3">足迹</span></span></li>
					<li class="li-border-l"><a
						href="http://2000.bbs.tianya.cn/djmanage/djpage.asp?djid=12053"
						id="suning-logo" target="_blank" _tystat="新版底导航/广告"></a></li>
					<li class="art-view"><ul style="margin-left: -3438px;"
							class="art-lite">
							<li><a href="http://bbs.tianya.cn/post-no04-2094541-1.shtml"
								title="有奖拍摄身边的公交车！图" target="_blank" _tystat="新版底导航/热帖">【热帖】有奖拍摄身边的公交车！图</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-travel-450758-1.shtml"
								title="有奖提问《那些冒险的梦》" target="_blank" _tystat="新版底导航/热帖">【热帖】有奖提问《那些冒险的梦》</a></li>
							<li><a href="http://bbs.tianya.cn/post-sport-207196-1.shtml"
								title="直击美国爆炸恐怖袭击(多图)" target="_blank" _tystat="新版底导航/热帖">【热帖】直击美国爆炸恐怖袭击(多图)</a></li>
							<li><a href="http://bbs.tianya.cn/post-665-846426-1.shtml"
								title="南派三叔坦诚出轨自称是人渣" target="_blank" _tystat="新版底导航/热帖">【热帖】南派三叔坦诚出轨自称是人渣</a></li>
							<li><a href="http://bbs.tianya.cn/post-sport-207196-1.shtml"
								title="直击美国爆炸恐怖袭击(多图)" target="_blank" _tystat="新版底导航/热帖">【热帖】直击美国爆炸恐怖袭击(多图)</a></li>
							<li><a href="http://bbs.tianya.cn/post-sport-207196-1.shtml"
								title="直击美国爆炸恐怖袭击(多图)" target="_blank" _tystat="新版底导航/热帖">【热帖】直击美国爆炸恐怖袭击(多图)</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-develop-1279523-1.shtml"
								title="黄金价格暴跌，发生啥事了？" target="_blank" _tystat="新版底导航/热帖">【热帖】黄金价格暴跌，发生啥事了？</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-funinfo-4082807-1.shtml"
								title="海天事件惊爆孙静雅是男的！" target="_blank" _tystat="新版底导航/热帖">【热帖】海天事件惊爆孙静雅是男的！</a></li>
							<li><a href="http://bbs.tianya.cn/post-no04-2290601-1.shtml"
								title="网友亲历美国的艺术展！图" target="_blank" _tystat="新版底导航/热帖">【热帖】网友亲历美国的艺术展！图</a></li>
							<li><a href="http://bbs.tianya.cn/post-no11-1377094-1.shtml"
								title="开八护肤品中的有效当红成分" target="_blank" _tystat="新版底导航/热帖">【热帖】开八护肤品中的有效当红成分</a></li>
							<li><a href="http://bbs.tianya.cn/post-934-17415-1.shtml"
								title="以一个丈夫的眼光说婆媳关系" target="_blank" _tystat="新版底导航/热帖">【热帖】以一个丈夫的眼光说婆媳关系</a></li>
							<li><a href="http://bbs.tianya.cn/post-98-863090-1.shtml"
								title="月入2000，养孩子没有那么难" target="_blank" _tystat="新版底导航/热帖">【热帖】月入2000，养孩子没有那么难</a></li>
							<li><a href="http://bbs.tianya.cn/post-890-15247-1.shtml"
								title="2013上海车展看车团火爆招募" target="_blank" _tystat="新版底导航/热帖">【热帖】2013上海车展看车团火爆招募</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-develop-1279523-1.shtml"
								title="黄金！你怎么了，为何暴跌？" target="_blank" _tystat="新版底导航/热帖">【热帖】黄金！你怎么了，为何暴跌？</a></li>
							<li><a href="http://bbs.tianya.cn/post-936-117334-1.shtml"
								title="交了一个女朋友，把我吓尿了" target="_blank" _tystat="新版底导航/热帖">【热帖】交了一个女朋友，把我吓尿了</a></li>
							<li><a href="http://bbs.tianya.cn/post-903-2164-1.shtml"
								title="峨眉雪芽供佛法会现场直播" target="_blank" _tystat="新版底导航/热帖">【热帖】峨眉雪芽供佛法会现场直播</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-worldlook-731815-1.shtml"
								title="是谁让奥巴马总统记住了415" target="_blank" _tystat="新版底导航/热帖">【热帖】是谁让奥巴马总统记住了415</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-filmtv-390046-1.shtml"
								title="2012年中国电影导演艺术解读" target="_blank" _tystat="新版底导航/热帖">【热帖】2012年中国电影导演艺术解读</a></li>
							<li><a href="http://bbs.tianya.cn/post-no06-222936-1.shtml"
								title="兰州大妈开武警牌照路虎购物" target="_blank" _tystat="新版底导航/热帖">【热帖】兰州大妈开武警牌照路虎购物</a></li>
							<li><a
								href="http://bbs.tianya.cn/post-numtechnoloy-159799-1.shtml"
								title="坐下聊一聊小米手机的帝国梦" target="_blank" _tystat="新版底导航/热帖">【热帖】坐下聊一聊小米手机的帝国梦</a></li>
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
						</div> <span bakfocusclass="on" id="bottom_message" class="white"><span
							class="bottom-ico-bg bottom-ico-bg-6">消息<strong></strong></span></span></li>
					<li class="f-r li-border-r"><a
						href="http://static.tianya.cn/city/cityJump.html"
						class="white myCityName" _tystat="新版底导航/城市">深圳</a></li>
				</ul>
			</div>
		</div>
	</div>
	<script type="text/javascript" charset="utf-8">
		window._modul_id=${model.id};
		(function($) {
			var nStorage = false;
			var _key = "screenStatus";
			if (window.localStorage) {
				nStorage = TY.io.storage.get(_key);
			} else {
				nStorage = __global.getCookie(_key);
			}
			if (nStorage) {
				$("body").addClass(
						"layout-" + nStorage + " layout-" + nStorage
								+ "-top-nav");
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
									href="http://passport.tianya.cn/register/default.jsp?sourceURL=http%3A%2F%2Fbbs.tianya.cn%2FhotArticle.jsp"
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
		<div id="bbsdoc" class="bbsdoc">
			<div class="clearfix"></div>
			<!--兼容个别浏览器强制改变最小字号而导致的页面错乱-->
			<!-- <div id="hd"></div>-->
			<div id="bd" class="layout-lm clearfix" style="z-index: 9999">
				<div id="main">
					<div class="location clearfix">
						<div class="text">
							<a href="index.jsp">吉首大学社团管理</a> &gt; <em><a
								href="loadMass?id=${model.mass.id}">${model.mass.name}</a></em> &gt;
							<b>发帖</b>
						</div>
					</div>
					<div id="BBS_BLOCK" >
						<table class="fatieArea">
							<colgroup>
								<col class="titleItem" />
								<col class="item" />
							</colgroup>
							<tr>
								<td>标题：</td>
								<td><input name="model.title" type="text"
									class="bbsTitle fl" maxlength="34"  /><span class="fr"> <select
										class="selectCompose" name="model.visiablely.id">
											<option value="">可见人</option>
											<option value="1">所有人</option>
											<option value="2">注册用户</option>
											<option value="3">社团成员</option>
									</select></span></td>
							</tr>
							<tr>
								<td valign="top">内容：</td>
								<td id="textAreaWrap"><div id="editorToolBar"></div>
									<textarea id="textAreaContainer" name="model.content"
										class="textAreaContainer"></textarea>
									<div class="ty_bbs_preview_area"></div></td>
							</tr>
							<tr>
								<td>
									<!--标签：-->
								</td>
								<td style="zoom: 1;"><span style="color: #8A8A8A;">请遵守<a
										class="hrefgonyue" target="_blank" href="#">吉首大学社团公约</a>言论规则，不得违反国家法律法规
								</span>
								<!--<div  class="labelInput"></div>--> <input
									class="common-submitBtn fr inputbtn ty-bluebtn" type="button"
									value="发表(Ctrl+Enter)" /><span class="fr mr10 mt5"><label
										class="mr10"><input type="radio" name="isSelf"
											value="1" />原创</label><label><input type="radio"
											name="isSelf" value="0" />转载</label></span></td>
							</tr>
						</table>
					</div>
					<script type="text/javascript" src="js/fatie1.js?v=201304110830"></script>
				</div>
			</div>
			<div id="ft"></div>
		</div>
		<script type="text/javascript" charset="UTF-8" src="ty_files/bbs.js"></script>
		<div id="foot">
			<script type="text/javascript" charset="gb2312"
				src="mass_files/tianya_footer1.js"></script>
		</div>
	</div>

	<div id="barcode_float">
		<a href="http://www.tianya.cn/mobile/" target="_blank"><p>吉首大学社团管理</p>
			<img src="image/qr.png">
			<p>手机扫描进入</p></a>
	</div>
	<div style="width: 0px; height: 0px;"></div>
</body>
</html>