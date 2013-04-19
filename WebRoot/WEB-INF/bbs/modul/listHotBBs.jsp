<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<s:set var="f" value="%{lists.content[0]}"></s:set>
<s:set var="s" value="%{lists.content[1]}"></s:set>
<html>
<head>
</head>
<body>
	<ul id="cms_fragment_598_ul" class="cf">
		<li class="cf aid0 ">
			<div>
				<div class="pic">
					<a name="title-link" id="cms_fragment_598_1_img_link"
						href="goAddBBs-${f.id}-1"
						target="_blank" title="${f.title}"><img
						alt="${f.title}" desc="图片" id="cms_fragment_598_1_img"
						src="mass_files/139034305.jpg"
						style="width: 370px; height: 240px"
						onerror="this.src='image/errorimg.gif'"></a>
				</div>
				<div class="summary-title">
					<span class="subject"><a title="${f.title}"
						desc="标题" id="cms_fragment_598_1_title"
						href="goAddBBs-${f.id}-1"
						target="_blank">${f.title}</a></span>
				</div>

				<div class="showSubtitle summary-subtitle">
					<span class="subject2" id="cms_fragment_598_1_subject"><a
						desc="模块" href="#"
						title="${f.modul.name}" target="_blank">${f.modul.name}</a></span>
				</div>
				<span class="additionalItem additionalItem_author"> <a
					desc="作者"
					href="#"
					id="cms_fragment_598_1_author" title="${f.user.nickname}" target="_blank">${f.user.nickname}</a>
				</span>

				<div class="summary">
					<span desc="摘要" id="cms_fragment_598_1_summary">${f.subCon}…</span>
				</div>
				<div class="clear"></div>
			</div>
		</li>
		<li class="cf aid0 clear-line">
			<div>
				<div class="pic">
					<a name="title-link" id="cms_fragment_598_2_img_link"
						href="goAddBBs-${s.id}-1"
						target="_blank" title="${s.title}"><img
						alt="${s.title}"" desc="图片" id="cms_fragment_598_2_img"
						src="mass_files/139033805.jpg"
						style="width: 370px; height: 240px"
						onerror="this.src='image/errorimg.gif'"></a>
				</div>
				<div class="summary-title">
					<span class="subject"><a title="${s.title}""
						desc="标题" id="cms_fragment_598_2_title"
						href="goAddBBs-${s.id}-1"
						target="_blank">${s.title}"</a></span>
				</div>
				<div class="showSubtitle summary-subtitle">
					<span class="subject2" id="cms_fragment_598_2_subject"><a
						desc="模块" href="#"
						title="${s.modul.name}" target="_blank">${s.modul.name}</a></span>
				</div>
				<span class="additionalItem additionalItem_author"> <a
					desc="作者"
					href="#"
					id="cms_fragment_598_2_author" title="${f.user.nickname}" target="_blank">${f.user.nickname}</a>
				</span>

				<div class="summary">
					<span desc="摘要" id="cms_fragment_598_2_summary">${f.subCon}…</span>
				</div>
				<div class="clear"></div>
			</div>
		</li>
	</ul>
</body>
</html>
