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
<script type="text/javascript" charset="utf-8" src="mass_files/TY.js"></script>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
<link href="ty_files/lite-all.css" rel="stylesheet" type="text/css">
<link href="ty_files/bbs.css" rel="stylesheet" type="text/css">
<script charset="utf-8" src="ty_files/refresh.htm"></script>
<!--[if gt IE 8]>
  <script src="js/IEPinify.js?v=201304110830" type="text/javascript"></script>
<![endif]-->
<!--[if lt IE 7]>
  <script src="js/DD_belatedPNG_0.0.8a.js?v=201304110830" type="text/javascript"></script>
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
		url(images/ty-msg-bg.png?v=20120906)
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

</head>
<body>
	
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
		<script type="text/javascript" charset="utf-8">
			TY.ui.nav.init({
				showTopNav : true,
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
							<s:action name="getSystemMessage" executeResult="true">
								<s:param name="page" value="1"></s:param>
								<s:param name="size" value="10"></s:param>
							</s:action>
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
								href="#"
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
								<s:action name="listWelUser" executeResult="true">
									<s:param name="page" value="1"></s:param>
									<s:param name="size" value="10"></s:param>
								</s:action>			
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
				广告区域
				<!-- 
				<embed wmode="transparent" src="ty_files/1365734571873.swf"
					type="application/x-shockwave-flash"
					style="left: 0px; position: absolute;" height="350" width="600">
					-->
				<a target="_blank"
					href="http://807.tianya.cn/count?t=gdX5MWS1mhz8fsGnwL82&amp;backurl=http://sale.suning.com/images/advertise/007/0yuanxd/index.html?utm_source=zq-ty&amp;utm_medium=syll&amp;utm_content=qingchun&amp;utm_campaign=paiqi">
					<div
						style="position: relative; left: 0px; right: 0px; width: 600px; height: 350px; z-index: 10; background-color: rgb(255, 255, 255); opacity: 0; cursor: pointer;">
					</div>
				</a>
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
			<script type="text/javascript" charset="gb2312" src="mass_files/tianya_footer1.js"></script>
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
	广告区域
	<!-- 
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
		 -->
	</div>
</body>
</html>
