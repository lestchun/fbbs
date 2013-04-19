<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
 
	 <ul class="bbs-list ${page==1?'curr':''}">
	 	<s:iterator  value="lists.content" id="bbs" status="i">
		<li><span><a  href="${bbs.id}">${bbs.modul.mass.name}</a></span>
		<div class="title">
				<a href="goAddBBs-${bbs.id}-1"
					target="_blank">${bbs.title}</a>
			</div></li>
			<s:if test="(#i.index+1)%4==0">
		<li class="li-line"></li>
			</s:if>
	 	</s:iterator>
 
	</ul>
</body>
</html>
