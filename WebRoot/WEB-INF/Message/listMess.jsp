<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
	<ul style="width:200px;margin-left: 0px">
		<s:iterator  value="lists.content" id="mess">
		<li>
			${mess.msg}
		</li>
		</s:iterator>
	</ul>
</body>
</html>
