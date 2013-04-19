<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
		<ul class="text-list" _stat="/stat/bbs/post/相关推荐">
		<s:iterator  value="lists.content" id="bbs" status="i">
		  <li><a href="goAddBBs-${bbs.id}-1"
				target="_blank" title="[${bbs.modul.name}]${bbs.title}...">[${bbs.modul.name}]${bbs.title}......</a></li>
		</s:iterator>
		</ul>
 
</body>
</html>
