<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<s:set var="f" value="%{lists.content[0]}"></s:set>
<s:set var="s" value="%{lists.content[1]}"></s:set>
<s:set var="t" value="%{lists.content[2]}"></s:set>
<html>
<head>
</head>
<body>
	<ul id="cms_fragment_627_ul" class="cf">
		<li class="cf aid0 ">
			<div>
				<div class="subject">
					<a desc="标题" id="cms_fragment_627_1_title"
						href="goAddBBs-${f.id}-1"
						title="${f.title}" target="_blank">${f.title}</a>
				</div>
				<div class="pic">
					<a name="title-link" id="cms_fragment_627_1_img_link"
						href="goAddBBs-${f.id}-1"
						title="${f.title}" target="_blank"><img
						alt="${f.title}" desc="图片" id="cms_fragment_627_1_img"
						src="mass_files/138617449.jpg"
						style="width: 110px; height: 90px"
						onerror="this.src='image/errorimg.gif'"></a>
				</div>

				<div class="showSubtitle summary-subtitle">
					<span class="subject2" id="cms_fragment_627_1_subject"><a
						desc="模块" href="#"
						title="${f.modul.name}" target="_blank">${f.modul.name}</a></span>
				</div>
				<span class="additionalItem additionalItem_author"> <a
					desc="作者"
					href="#"
					id="cms_fragment_627_1_author" target="_blank">${f.user.nickname}</a>
				</span>

				<div class="summary">
					<span id="cms_fragment_627_1_summary" desc="摘要">${f.subCon}…</span>
				</div>
				<div class="clear"></div>
			</div>
		</li>

		<li class="cf aid0 ">

			<div>
				<div class="subject">
					<a desc="标题" id="cms_fragment_627_2_title"
						href="goAddBBs-${s.id}-1"
						title="${s.title}" target="_blank">${s.title}</a>
				</div>
				<div class="pic">
					<a name="title-link" id="cms_fragment_627_2_img_link"
						href="goAddBBs-${s.id}-1"
						title="${s.title}" target="_blank"><img
						alt="${s.title}" desc="图片" id="cms_fragment_627_2_img"
						src="mass_files/138317802.jpg"
						style="width: 110px; height: 90px"
						onerror="this.src='image/errorimg.gif'"></a>
				</div>


				<div class="showSubtitle summary-subtitle">
					<span class="subject2" id="cms_fragment_627_2_subject"><a
						desc="模块" href="http://bbs.tianya.cn/list-culture-1.shtml"
						title="${s.modul.name}" target="_blank">${s.modul.name}</a></span>
				</div>
				<span class="additionalItem additionalItem_author"> <a
					desc="作者"
					href="http://my.tianya.cn/info/%E6%B2%88%E8%B6%85and%E8%B0%AD%E6%98%99"
					id="cms_fragment_627_2_author" target="_blank">${s.user.nickname}</a>
				</span>

				<div class="summary">
					<span id="cms_fragment_627_2_summary" desc="摘要">${s.subCon}…</span>


				</div>
				<div class="clear"></div>
			</div>
		</li>
		<li class="cf aid0 clear-line">
			<div>
				<div class="subject">
					<a desc="标题" id="cms_fragment_627_3_title"
						href="goAddBBs-${t.id}-1"
						title="${t.title}" target="_blank">${t.title}</a>
				</div>
				<div class="pic">
					<a name="title-link" id="cms_fragment_627_3_img_link"
						href="goAddBBs-${t.id}-1"
						title="${t.title}" target="_blank"><img
						alt="${t.title}" desc="图片" id="cms_fragment_627_3_img"
						src="mass_files/130180728.jpg"
						style="width: 110px; height: 90px"
						onerror="this.src='image/errorimg.gif'"></a>
				</div>
				<div class="showSubtitle summary-subtitle">
					<span class="subject2" id="cms_fragment_627_3_subject"><a
						desc="模块" href="#"
						title="${t.modul.name}" target="_blank">${t.modul.name}</a></span>
				</div>
				<span class="additionalItem additionalItem_author"> <a
					desc="作者"
					href="http://my.tianya.cn/info/%E8%A5%BF%E5%B1%B1%E6%99%BA%E5%8F%9F"
					id="cms_fragment_627_3_author" target="_blank">${t.user.nickname}</a>
				</span>

				<div class="summary">
					<span id="cms_fragment_627_3_summary" desc="摘要">${t.subCon}…</span>
				</div>
				<div class="clear"></div>
			</div>
		</li>
	</ul>
</body>
</html>
