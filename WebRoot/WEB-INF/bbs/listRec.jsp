<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
	<div class="bd">
		<ul class="top_zone_box">
		<s:iterator  value="lists.content" id="bbs" status="i">
			<li class="top_zone_list">
			<a href="goAddBBs-${bbs.id}-1" target="_blank" title="${bbs.title}" class="title">${bbs.title}</a>
			</li>
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
