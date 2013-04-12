<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<body>
		<s:iterator  value="lists.content" id="mass">
		<li>
			<a hidefocus="" class="folder expand" href="loadMass?id=${mass.id}" >${mass.name}</a>
		</li>
		</s:iterator>
</body>
</html>