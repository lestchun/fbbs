<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<s:set var="showName" value="model.mass.name"></s:set>
<html>
<body>
		<s:iterator  value="lists.content" id="modul" status="i">
		<div class="tui-topnews custom_css_bd12319153 f12 topnews_tl "
			onclick="javascript:void(0)">
			<ul>
				<li class="cf aid0">
					<h3>
						<a desc="${modul.name}"
							href="${modul.name}"
							target="_blank">${modul.name}</a>
					</h3>
					<div class="showSubTitle subTitleCenter">
						<span class="subject2">
						<a desc="副标题" class="sub1"
							href="${modul.name}"
							target="_blank">1934</a></span>
					</div>
					<div class="summary">
						<span desc="摘要">24968</span><a desc="详细"
							href="${modul.name}"
							target="_blank"></a>
					</div>
				</li>
			</ul>
		</div>
		</s:iterator>
</body>
</html>