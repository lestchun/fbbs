<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<s:set var="showName" value="model.mass.name"></s:set>
<html>
<body>
	<ul>
		<li>帖子列表</li>
		<s:iterator  value="lists.content" id="bbs">
		<li>
			<a href="loadMass?id=${bbs.id}" >${bbs.title}</a> &nbsp;&nbsp;&nbsp;&nbsp;
			<a href="#">${bbs.user.nickname}</a>&nbsp;&nbsp;&nbsp;&nbsp;${bbs.viewNum}/${bbs.replayNum}
		</li>
		</s:iterator>
	</ul>
</body>
</html>