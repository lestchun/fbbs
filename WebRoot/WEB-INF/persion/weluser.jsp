<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
	<div class="bd">
		<ul class="top_zone_box">
		<s:iterator  value="list.content" id="user" status="i">
			<li class="clearfix">
				<div class="headbox">
						<div class="head50">
							<a
								href="${user.id}"
								target="_blank"><img src="image/user.gif"></a>
						</div>
						<div class="focus-btn">
							<a _data="24866027" class="t-setfocus t-notfocus"
								href="javascript:void(0);"></a>
						</div>
					</div>
					<p class="text">
						<a
							href="${user.id}"
							target="_blank">${user.nickname}</a><em title="吉大社团牛人认证"
							class="my-16 my-16-star"></em>
					</p>
					<p class="desc">历史回帖数${null==user.reply?0:user.reply}</p>
					<p class="text">
						<a href="http://bbs.tianya.cn/post-607-28101-1.shtml"
							target="_blank">${user.username}</a>
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
