<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
	<div class="bd">
		<ul class="top_zone_box">
		<s:iterator  value="lists.content" id="user" status="i">
			<li class="clearfix">
				<div class="headbox">
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
			</s:iterator>
		</ul>
		<div class="more">
		<s:if test="lists.totalPages>1">
			<a href="http://pinpai.tianya.cn/" target="_blank">更多&gt;&gt;</a>
		</s:if>
		</div>
	</div>
 
</body>
</html>
