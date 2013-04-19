<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="ty_files/h.js" async="" type="text/javascript"></script>
<meta charset="utf-8">
<title>${model.mass.name}-${model.name}</title>
  <s:if test="'1001'==result.resultCode">
	<script type="text/javascript">
		var timer=setTimeout("location.href='index.jsp'",3000);
		alert("${result.msg}，3秒后跳转到首页,点击确定返回");
		clearTimeout(timer);
		history.go(-1);
	</script>
</s:if>

<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">

<link href="ty_files/lite-all.css" rel="stylesheet" type="text/css">
<link href="ty_files/bbs.css" rel="stylesheet" type="text/css">
 
<link rel="shortcut icon" href="http://static.tianyaui.com/global/lite/favicon_32.ico?v=201304110830" type="image/vnd.microsoft.icon">
<script type="text/javascript" charset="utf-8" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="mass_files/TY.js"></script>
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

</head>
<body>

	<script type="text/javascript" charset="utf-8">
		(function($) {
			var nStorage = false;
			var _key = "screenStatus";
			if (window.localStorage) {
				nStorage = TY.io.storage.get(_key);
			} else {
				nStorage = __global.getCookie(_key);
			}
			if (nStorage) {
				$("body").addClass( "layout-" + nStorage + " layout-" + nStorage + "-top-nav")
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
		<div id="bbsdoc" class="bbsdoc">
			<div id="left"></div>
			<div class="clearfix"></div>
			<!--兼容个别浏览器强制改变最小字号而导致的页面错乱-->
			<!-- <div id="hd"></div>-->
			<div id="bd" class="layout-lm clearfix">
				<div id="main">
					<div class="location clearfix">
						<div class="text">
							<a href="index.jsp">吉首大学社团管理</a> &gt; <em><a
							href="loadMass?id=${model.mass.id}">${model.mass.name}</a></em>&gt; <a
							href="#" class="addpost" rel="nofollow">${model.name}</a>
							<!--<strong>热帖榜</strong>-->
						</div>
						<ul class="clearfix">
							<li class="reload"><a href="javascript:window.location.reload(true);" class="btn-gray" style="float:right">刷新</a></li>
							<li class="fatie"><a href="goPostBBs?pid=${model.id}" class="btn-post btn-gray" rel="nofollow">发帖</a></li>
						</ul>
						<!-- 
						<li class="fatie"><a href="goPostBBs?pid=${model.id}" class="btn-post btn-gray" rel="nofollow">发帖</a></li>
						<li class="reload"><a href="javascript:window.location.reload(true);" class="btn-gray">刷新</a></li>
						 -->
					</div>
					<div class="mt5">
						<table class="tab-bbs-list tab-bbs-list-2" border="0"
							cellpadding="0" cellspacing="0" width="100%">
							<colgroup>
								<col class="col-title">
								<col class="col-author">
								<col class="col-date">
							</colgroup>
							<tbody>
								<tr>
									<th scope="col">标题</th>
									<th scope="col">作者</th>
									<th scope="col">回复时间</th>
								</tr>
							</tbody>
							<tbody>
								<s:iterator  value="list.content" id="bbs" status="i">
								<tr ${(i.index+1)%2==0?'class="bg"':''}>
									<td class="td-title">
										<a target="_blank" href="goAddBBs-${bbs.id}-1">[${model.name}]${bbs.title}
									</a></td>
									<td><a target="_blank"
										href="#"
										class="author">${bbs.user.nickname}</a></td>
									<td>${bbs.updateTime}</td>
								</tr>
								</s:iterator>
								<s:if test="%{list.totalPages}==0">
									<tr>
										<td colspan="2">当前没有任何帖子</td>
									</tr>
								</s:if>
							</tbody>
						</table>
					</div>

					<div class="long-pages">
						<s:if test="page>1"><a _bak='loadModul?id=${model.id}&page=${page-1}' href='loadModul?id=${model.id}&page=${page-1}' rel="nofollow">上页</a></s:if><s:else><span>上页</span></s:else>
						<strong>${page}</strong>
						<s:if test="(page+1)<list.totalPages"><a _bak="loadModul?id=${model.id}&page=${page+1}" href="loadModul?id=${model.id}&page=${page+1}" rel="nofollow">${page+1}</a></s:if>
						<s:if test="(page+2)<list.totalPages"><a _bak="loadModul?id=${model.id}&page=${page+2}" href="loadModul?id=${model.id}&page=${page+2}" rel="nofollow">${page+2}</a></s:if>
						<s:if test="(page+3)<list.totalPages"><a _bak="loadModul?id=${model.id}&page=${page+3}" href="loadModul?id=${model.id}&page=${page+3}" rel="nofollow">${page+3}</a></s:if>
						<s:if test="(page+4)<list.totalPages"><a _bak="loadModul?id=${model.id}&page=${page+4}" href="loadModul?id=${model.id}&page=${page+4}" rel="nofollow">${page+4}</a></s:if>
						<s:if test="page<list.totalPages"><a _bak="loadModul?id=${model.id}&page=${page+1}" href="loadModul?id=${model.id}&page=${page+1}" class="js-keyboard-next">下页</a> </s:if>
						<s:else><span>下一页</span></s:else>
					</div>

				</div>
			</div>
			<div id="ft"></div>
		</div>
		<script type="text/javascript" charset="UTF-8"
			src="ty_files/bbs.js"></script>
		<div id="foot">
			 <script type="text/javascript" charset="gb2312" src="mass_files/tianya_footer1.js"></script>
		</div>
	</div>

	<div id="barcode_float">
		<a href="http://www.tianya.cn/mobile/" target="_blank"><p>吉首大学社团管理</p>
			<img src="image/qr.png">
		<p>手机扫描进入</p></a>
	</div>
	<div style="width: 0px; height: 0px;">
		 
	</div>
</body>
</html>