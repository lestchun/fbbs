<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
</head>
<body>
	<s:iterator  value="lists.content" id="bbs" status="i">
	<li class="cf aid0 ">
		<div>
			<div class="subject">
				<a desc="标题" id="cms_fragment_${pid}_${i.index}_title"
					href="goAddBBs-${bbs.id}-1"
					title="${bbs.title}" target="_blank">${bbs.title}</a>
			</div>
			<div class="showSubtitle summary-subtitle">
				<span class="subject2" id="cms_fragment_${pid}_${i.index}_subject"><a
					desc="板块" href="#"
					title="${bbs.modul.name}" target="_blank">${bbs.modul.name}</a></span>
			</div>
			<span class="additionalItem additionalItem_author"> <a
				desc="作者"
				href="#"
				id="cms_fragment_${pid}_${i.index}_author" target="_blank">${bbs.user.nickname}</a>
			</span>

			<div class="summary">
				<span id="cms_fragment_${pid}_${i.index}_summary" desc="摘要">${bbs.subCon}…</span>
			</div>
			<div class="clear"></div>
		</div>
	</li>
	</s:iterator>
</body>
</html>
