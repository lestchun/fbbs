<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
	<a href="${mid}">发表帖子</a>
	<ul style="width:200px">
		<s:iterator  value="lists.content" id="bbs">
		<li>
			<a href="loadMass?id=${bbs.id}" >${bbs.title}..........详情</a>
		</li>
		</s:iterator>
		<li>
			<jsp:include page="../comment/page.jsp"></jsp:include>
		</li>
	</ul>
</body>
</html>