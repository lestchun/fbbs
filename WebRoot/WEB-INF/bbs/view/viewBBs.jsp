<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>${model.title}</title>
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
<link href="vbbs_files/lite-all.css" rel="stylesheet" type="text/css">
<link href="vbbs_files/bbs_article.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" href="http://static.tianyaui.com/global/lite/favicon_32.ico?v=201304110830" type="image/vnd.microsoft.icon">
<script>
	document.domain = "localhost";
</script>
<script type="text/javascript">
	var bbsGlobal = {
		isEhomeItem : false,
		isNewArticle : false,
		blocktype : "主版",
		itemType : "主版",
		page : "${page}",
		permission : true,
		itemPermission : 1,
		item : "no20",
		artId : ${model.id},
		media : 0,
		subType : "null",
		adshow : 0
	};
</script>
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="vbbs_files/lite-all.js"></script>
<script async="" src="mass_files/interface.js" charset="utf-8" type="text/javascript"></script>
<link href="vbbs_files/TY.css" rel="stylesheet" charset="utf-8" type="text/css">
<script async="" src="mass_files/TY.js" charset="utf-8" type="text/javascript"></script>
<script async="" src="vbbs_files/textChange.js" charset="utf-8" type="text/javascript"></script>
<script async="" src="vbbs_files/TY_002.js" charset="utf-8" type="text/javascript"></script>
</head>
<body class="bg-1">
	<div>
		<script type="text/javascript" charset="utf-8">
			TY.ui.nav.init({
				showTopNav : true,
				topNavFromHtml : true,
				topNavWidth : 950,
				showBottomNav : true
			});
		</script>

		<div id="doc">
			<div id="hd"></div>
			<div id="bd" class="clearfix">
				<div id="q_topbanner_950_90" class="banner-img-mt10 clearfix">
					<div class="qing_ad_hd">
						<a href="#" target="_blank">
						<img src="image/head.jpg" border="0" height="90" width="950"></a>
					</div>
					<div  >
						<a href="#" target="_blank">
						<img src="image/head.jpg" border="0" height="90" width="950"></a>
					</div>
					<div class="qing_ad_bd"></div>
				</div>
				<div class="atl-location clearfix">
					<p class="crumbs">
						<a href="index2.jsp">吉首大学社团管理</a> &gt; <em><a
							href="loadMass?id=${model.modul.mass.id}">${model.modul.mass.name}</a></em>&gt; <a
							href="loadModul?id=${model.id}" class="addpost" rel="nofollow">${model.modul.name}</a>
					</p>
				</div>
				<div id="post_head" class="atl-head">
					<h1 class="atl-title">
						<span class="s_title"><span style="font-weight: 400;">${model.title}</span></span><span
							id="q_button_170_25_w"><div id="q_button_170_25"></div></span>
					</h1>
					<div class="atl-menu clearfix js-bbs-act" >
						<div class="info_icon_box">


							<span class="info_icon faceblue"></span>
						</div>

						<div class="atl-info">
							<span value="78680738">楼主：<a
								href="#" target="_blank"
								class="js-vip-check" uid="${model.user.id}" uname="${model.user.nickname}">${model.user.nickname}</a></span>
							<span>时间：${model.updateTime} </span> <span>点击：${model.viewNum} </span> <span>回复：${model.replayNum}</span>
						</div>
						<div class="read-menu">
							<a href="javascript:" class="see-host"
								_uname="%E6%AF%94%E5%8D%A1%E4%B8%98%E4%B8%98%E6%AF%94%E5%8D%A1%E6%AF%94%E5%8D%A1"></a>
							<span class="font-set-box clearfix"> <a href="javascript:"
								id="font_set" class="font-set"></a>
								<div class="font-set-view" _stat="/stat/bbs/post/阅读设置">
									<p>
										<strong>字体：</strong><span class="set-btn font-size-add"></span><span
											class="set-btn font-size-red"></span><span
											class="set-btn font-family"></span>
									</p>
									<p>
										<strong>边距：</strong><span class="set-btn padding-add"></span><span
											class="set-btn padding-red"></span>
									</p>
									<p>
										<strong>背景：</strong><span id="btn_color_1"
											class="btn-color btn-color-sel" _value="1"></span><span
											id="btn_color_2" class="btn-color" _value="2"></span><span
											id="btn_color_3" class="btn-color" _value="3"></span><span
											id="btn_color_4" class="btn-color" _value="4"></span><span
											id="btn_color_5" class="btn-color" _value="5"></span>
									</p>
									<p>
										<strong>还原：</strong><span class="set-btn btn-reset"></span>
									</p>
								</div>
							</span>
						</div>
					</div>
 
					<div>
						<div class="atl-pages">
							<form action="" method="get"
							onsubmit="return goPage(this,'goAddBBs',${model.id},4);">
							<span class="hint">使用“←”“→”快捷翻页</span> 
							<s:if test="page>1"><a _bak='goAddBBs-${model.id}-${page-1}' href='goAddBBs-${model.id}-${page-1}'>上页</a></s:if><s:else><span>上页</span></s:else>
							<strong>${page}</strong>
							<s:if test="(page+1)<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+1}" href="goAddBBs-${model.id}-${page+1}">${page+1}</a></s:if>
							<s:if test="(page+2)<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+2}" href="goAddBBs-${model.id}-${page+2}">${page+2}</a></s:if>
							<s:if test="(page+3)<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+3}" href="goAddBBs-${model.id}-${page+3}">${page+3}</a></s:if>
							<s:if test="(page+4)<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+4}" href="goAddBBs-${model.id}-${page+4}">${page+4}</a></s:if>
							<s:if test="page<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+1}" href="goAddBBs-${model.id}-${page+1}" class="js-keyboard-next">下页</a> </s:if>
							<s:else><span>下一页</span></s:else>
							&nbsp;到
							<input bindcursor="true" value="${page}" name="page" class="pagetxt" type="text">页&nbsp;
							<input name="gopage" class="pagebtn" maxlength="6" value="确定" type="submit">
						</form>
						</div>
					</div>

					<div class="atl-head-reply">
						<a style="visibility: hidden;" href="javascript:void(0);"
							class="reportme a-link" replyid="0"
							replytime="2013-04-14 16:16:00" author="比卡丘丘比卡比卡"
							authorid="78680738">举报</a> <a href="#fabu_anchor"
							class="replytop a-link" _time="2013-04-14 16:16:00"
							_name="比卡丘丘比卡比卡">回复</a> <a name="392188"
							href="javascript:void(0);" class="marktop a-link">收藏</a> <a
							href="javascript:void(0);" class="a-link acl-share">分享</a> <a
							href="javascript:void(0);" class="a-link acl-more">更多</a> <span>楼主</span>
					</div>

				</div>
				<div class="atl-main">

					<s:if test="null==page||page==1">
					<div class="atl-item" >
						<div class="atl-content">
							<!-- <div class="host-ico">楼主</div> -->
							<div class="atl-con-hd clearfix">
								<div class="atl-con-hd-l"></div>
								<div class="atl-con-hd-r"></div>
							</div>
							<div class="atl-con-bd clearfix">
								<div
									style="font-size: 16px; font-family: 宋体; padding-left: 0px; padding-right: 0px;"
									class="bbs-content clearfix">
										${model.content}
								</div>

								<div id="alt_action" class="clearfix"></div>
							</div>
							<div class="atl-con-ft clearfix">
								<div class="atl-con-ft-l"></div>
								<div class="atl-con-ft-r"></div>
							</div>
						</div>
					</div>
					</s:if>
					<s:iterator  value="list.content" id="reply" status="i">
					<div class="atl-item" >
						<div class="atl-head" id="796b7a9db4c81cb6540163930a30fdea">
							<div class="atl-head-reply">
								<a href="javascript:void(0);" class="reportme a-link"
									replyid="0" replytime="${reply.regiestTime}" author="${reply.user.nickname}"
									authorid="78680738">举报</a> 
							</div>
							<div class="atl-info">
								<span value="78680738">${reply.user.id==model.user.id?'<strong class="host">楼主</strong>':'作者'}：
								<a href="#" target="_blank"
									class="js-vip-check" uid="78680738" uname="${reply.user.nickname}">${reply.user.nickname}</a>
								</span>
								<!-- <span><a href="javascript:void(0);" class="see-only"  _uname="%E6%AF%94%E5%8D%A1%E4%B8%98%E4%B8%98%E6%AF%94%E5%8D%A1%E6%AF%94%E5%8D%A1">只看此人</a></span>-->
								<span>时间：${reply.regiestTime}</span>
							</div>
						</div>
						<div class="atl-content">
							<!-- <div class="host-ico">楼主</div> -->
							<div class="atl-con-hd clearfix">
								<div class="atl-con-hd-l"></div>
								<div class="atl-con-hd-r"></div>
							</div>
							<div class="atl-con-bd clearfix">
								<div
									style="font-size: 16px; font-family: 宋体; padding-left: 0px; padding-right: 0px;"
									class="bbs-content">${reply.content}</div>
							</div>
							<div class="atl-con-ft clearfix">
								<div class="atl-con-ft-l"></div>
								<div class="atl-con-ft-r"></div>
							</div>
						</div>
					</div>
					</s:iterator>
				</div>
				<div class="clearfix">
					<div class="atl-pages">
						<form action="" method="get"
							onsubmit="return goPage(this,'goAddBBs',${model.id},4);">
							<span class="hint">使用“←”“→”快捷翻页</span> 
							<s:if test="page>1"><a _bak='goAddBBs-${bbs.id}-${page-1}' href='goAddBBs-${bbs.id}-${page-1}'>上页</a></s:if><s:else><span>上页</span></s:else>
							<strong>${page}</strong>
							<s:if test="(page+1)<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+1}" href="goAddBBs-${model.id}-${page+1}">${page+1}</a></s:if>
							<s:if test="(page+2)<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+2}" href="goAddBBs-${model.id}-${page+2}">${page+2}</a></s:if>
							<s:if test="(page+3)<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+3}" href="goAddBBs-${model.id}-${page+3}">${page+3}</a></s:if>
							<s:if test="(page+4)<list.totalPages"><a _bak="goAddBBs-${model.id}-${page+4}" href="goAddBBs-${model.id}-${page+4}">${page+4}</a></s:if>
							<s:if test="page<list.totalPages"><a _bak="/post-no20-392188-2.shtml" href="http://bbs.tianya.cn/post-no20-392188-2.shtml" class="js-keyboard-next">下页</a> </s:if>
							<s:else><span>下一页</span></s:else>
							&nbsp;到
							<input bindcursor="true" value="${page}" name="page" class="pagetxt" type="text">页&nbsp;
							<input name="gopage" class="pagebtn" maxlength="6" value="确定" type="submit">
						</form>
					</div>
				</div>
				<div id="q_backbanner_950_90" class="banner-img-mt10">
					<div class="qing_ad_hd"></div>
					<div style="display: none;">
						<div style="position: relative; width: 950px; height: 90px;">
						</div>
					</div>
					<div style="display: none;">
						<div style="position: relative; width: 950px; height: 90px;">
						</div>
					</div>
					<div style="display: block;">
					</div>
					<div style="display: none;">
						<div style="position: relative; width: 950px; height: 90px;">
							<embed style="position: absolute; z-index: 0; left: 0;"
								src="vbbs_files/1344583664708.swf" quality="high"
								pluginspage="http://www.macromedia.com/go/getflashplayer"
								type="application/x-shockwave-flash" wmode="opaque" height="90"
								width="950">
							<a
								href="#"
								target="_blank" style="cursor: pointer"><div
									style="position: relative; filter: alpha(opacity = 0); left: 0; top: 0; width: 950px; height: 90px; z-index: 10; opacity: 0; background-color: #000000"></div></a>
						</div>
					</div>
					<div class="qing_ad_bd"></div>
				</div>
				<div style="display: block;" id="relevant_article"
					class="relevant-article mt15 clearfix">
					<div id="relevant_rom" class="fl clearfix">
						<h3>相关推荐</h3>
						<s:action name="getBBsRecommend" executeResult="true">
							<s:param name="page" value="1"></s:param>
							<s:param name="size" value="10"></s:param>
							<s:param name="model.id" value="1"></s:param>
							<s:param name="model.viewNum" value="%{model.modul.mass.id}"></s:param>
						</s:action>
					</div>
				</div>
				<div class="post-div clearfix">
					<a href="#" class="a-anchor" name="fabu_anchor"></a>


					<div class="bbsPostLogin">
					</div>
					<div id="bbsPost">
						<div class="editorToolBar" id="editorToolBar">
						</div>
						<textarea bindcursor="true" style="width: 630px;"
							id="textAreaContainer" class="textAreaContainer"></textarea>
						<p class="post-p">
							<span style="color: #8A8A8A;" class="fl mt10">请遵守<a
								class="hrefgonyue" target="_blank"
								href="http://service.tianya.cn/guize/gongyue.do?classtype=3">吉首大学社团公约</a>言论规则，不得违反国家法律法规
							</span>
							<!-- <label class="p-share mr5"><input id="isTwitter" value="1" type="checkbox">同时转发到微博</label> -->
							<input title="Ctrl+Enter快捷发表" class="common-submitBtn inputbtn ty-bluebtn" value="回复(Ctrl+Enter)" type="button">
						</p>
					</div>
					<div id="replay-banner">
						<div id="q_replaybox_300_250" class="clearfix">
							<div class="qing_ad_hd"></div>
							<div style="display: none;">
							 
							</div>
							<div style="display: block;">
								<a
									href="#"
									target="_blank"><img src="image/ad.jpg"
									border="0" height="250" width="300"></a>
							</div>
							
							<div class="qing_ad_bd"></div>
						</div>
					</div>

				</div>
			</div>
			<div id="ft"></div>
		</div>

		<div id="foot">
			<script type="text/javascript" charset="gb2312" src="mass_files/tianya_footer1.js"></script>
		</div>
	</div>

	<script type="text/javascript" src="vbbs_files/bbs_info.js"></script>
 
	<div id="float_right_parent_div"
		style="position: absolute; right: 10px; top: 40px; z-index: 100;">
		<div style="display: none;">
			<!-- 
			<div>
				<a
					href="http://807.tianya.cn/count?t=PQHnUeEL2ElIczZkZsxS&amp;backurl=http://mall.tianya.cn/item/5684.html"
					target="_blank"><img src="vbbs_files/1365676671958.jpg"
					border="0" height="500" width="120"></a>
			</div>
			<img style="cursor: pointer;" id="adsp_content_right_close_btn"
				src="vbbs_files/c120.jpg">
				-->
		</div>
		<div style="display: block;">
			<!-- 
			<div>
				<a
					href="http://807.tianya.cn/count?t=bSRikz5rginNFe4AAPWd&amp;backurl=http://shopin.tianya.cn/"
					target="_blank"><img src="vbbs_files/1364224940038.gif"
					border="0" height="500" width="120"></a>
			</div>
			<img style="cursor: pointer;" id="adsp_content_right_close_btn"
				src="vbbs_files/c120.jpg">
				 -->
		</div>
		<div style="display: none;">
			<div>
				<a
					href="http://807.tianya.cn/count?t=lSCUU84pJBgw8ys8SjID&amp;backurl=http://page.tianya.cn/comagic"
					target="_blank"><img src="vbbs_files/1365766950909.jpg"
					border="0" height="500" width="120"></a>
			</div>
			<img style="cursor: pointer;" id="adsp_content_right_close_btn"
				src="vbbs_files/c120.jpg">
		</div>
		<div style="display: none;">
			<div>
				<a
					href="http://807.tianya.cn/count?t=wTAsGudqGGyio8b5JpIi&amp;backurl=http://haizhinan.tmall.com/"
					target="_blank"><img src="vbbs_files/1365752792803.jpg"
					border="0" height="500" width="120"></a>
			</div>
			<img style="cursor: pointer;" id="adsp_content_right_close_btn"
				src="vbbs_files/c120.jpg">
		</div>
	</div>
	

	<!--End 广告系统代码 -->

	<!-- Baidu Button BEGIN -->
	<script type="text/javascript" id="bdshare_js"
		data="type=slide&amp;img=2&amp;uid=705779&amp;pos=left"></script>
	<!-- Baidu Button END -->


	<div id="cproIframe1holder"
		style="padding: 0px; display: block; visibility: visible; border: medium none; background: none repeat scroll 0% 0% transparent; float: none; overflow: hidden; position: absolute; z-index: 2147483647; width: 126px; height: 360px; line-height: 360px; left: 100px; top: 150px;">
		<div
			style="padding: 0px; display: block; visibility: visible; border: medium none; background: none repeat scroll 0% 0% transparent; float: none; overflow: hidden; width: 100%; height: 100%;">
			<div style="display: none">-</div>
		</div>
		<div
			style="padding: 0px; display: block; visibility: visible; border: medium none; float: none; overflow: hidden; line-height: 20px; position: absolute; text-decoration: none; color: rgb(51, 51, 51); text-align: left; font-size: 14px; font-family: simsun, arial; cursor: pointer; background: none repeat scroll 0% 0% rgb(255, 255, 255); opacity: 0; width: 53px; right: 0px; bottom: 0px; height: 20px; margin-bottom: 61px; margin-right: 5px;">&nbsp;</div>
	</div>
	<div class="ty_tip_box" style="top: 67px; left: 1187.5px;">
		<a class="yijianfankui" title="谈谈新版感受和问题(无需登录)"
			href="http://bbs.tianya.cn/list.jsp?item=797&amp;sub=1"></a>
	</div>
	<div
		style="left: 1186.5px; right: auto; top: auto; position: fixed; display: block;"
		id="flat_menu" class="bbs-flat-menu">
		<div class="scroll-btn">
			<a href="javascript:scroll(0,%200);"
				class="s-btn scroll-top-btn js-scroll-top-btn"></a><a
				href="#fabu_anchor" class="s-btn toreply-btn js-toreply-btn"></a>
		</div>
	</div>
	<div id="barcode_float">
		<a href="http://www.tianya.cn/mobile/" target="_blank"><p>天涯社区客户端</p>
			<img src="vbbs_files/2Dbarcode.png">
		<p>手机扫描下载</p></a>
	</div>
	<style type="text/css">
.adsp_action_user_logo_1_0 {
	background:
		url("http://801.tianyaui.com/res/2012/1203/1354523121967.gif")
		no-repeat scroll 0 0 transparent;
	display: inline-block;
	width: 20px;
	height: 20px;
	vertical-align: middle
}

.adsp_action_user_logo_2_0 {
	background:
		url("http://801.tianyaui.com/res/2012/1203/1354523121967.gif")
		no-repeat scroll 0 0 transparent;
	display: inline-block;
	width: 20px;
	height: 20px;
	vertical-align: middle
}

.adsp_action_user_logo_3_0 {
	background:
		url("http://801.tianyaui.com/res/2012/1203/1354523121967.gif")
		no-repeat scroll 0 0 transparent;
	display: inline-block;
	width: 20px;
	height: 20px;
	vertical-align: middle
}

.adsp_action_user_logo_4_0 {
	background:
		url("http://801.tianyaui.com/res/2012/1203/1354523121967.gif")
		no-repeat scroll 0 0 transparent;
	display: inline-block;
	width: 20px;
	height: 20px;
	vertical-align: middle
}

.adsp_action_user_logo_5_0 {
	background:
		url("http://801.tianyaui.com/res/2012/1203/1354523121967.gif")
		no-repeat scroll 0 0 transparent;
	display: inline-block;
	width: 20px;
	height: 20px;
	vertical-align: middle
}

.adsp_action_user_logo_6_0 {
	background:
		url("http://801.tianyaui.com/res/2012/1203/1354523121967.gif")
		no-repeat scroll 0 0 transparent;
	display: inline-block;
	width: 20px;
	height: 20px;
	vertical-align: middle
}
</style>
	<div style="width: 0px; height: 0px;">
	</div>
</body>
</html>