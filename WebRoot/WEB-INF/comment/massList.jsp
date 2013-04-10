<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<body>
	<ul style="width:200px">
		<s:iterator  value="lists.content" id="mass">
		<li>
			<a href="loadMass?id=${mass.id}" >${mass.name}</a>
		</li>
		</s:iterator>
	</ul>
</body>
</html>