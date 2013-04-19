<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
	<ul class="text-list">
		<s:iterator  value="lists.content" id="mess">
		<li><a
			href="${mess.id}"
			class="title" target="_blank" title="${mess.msg}">${mess.msg}</a></li>
		<li>
		</s:iterator>
		<s:if test="page<lists.totalPages">
			<li class="more"><a
				href="http://bbs.tianya.cn/list-lookout-1.shtml">更多&gt;&gt;</a></li>
		</s:if>
	</ul>
</body>
</html>
