<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<s:set var="showName" value="model.mass.name"></s:set>
<html>
<body>
		<s:iterator  value="lists.content" id="mass" status="i">
		<li><span class="ranking-num ranking-num-${i.index+1}">&nbsp;</span><a
			href="loadMass?id=${mass.id}">${mass.name}</a><span
			class="trend-img trend-img-down">&nbsp;</span></li>
		</s:iterator>
</body>
</html>