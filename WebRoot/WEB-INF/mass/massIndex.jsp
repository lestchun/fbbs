<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html xmlns=" http://www.w3.org/1999/xhtml">
<head>
<meta content="text/html; charset=UTF-8" http-equiv="content-type" />
 
<title>${model.name}社团－吉首大学社团管理</title>

<script src="js/jquery-1.7.2.min.js"  type="text/javascript"></script>
 
<script src="mass_files/TY_002.js" charset="utf-8" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="mass_files/TY_002.css"/>
 
 <s:if test="'1001'==result.resultCode">
	<script type="text/javascript">
		var timer=setTimeout("location.href='index.jsp'",3000);
		alert("${result.msg}，3秒后跳转到首页,点击确定返回");
		clearTimeout(timer);
		history.go(-1);
	</script>
</s:if>

<link rel="stylesheet" href="mass_files/base1000.css"/>
<script type="text/javascript" src="mass_files/comm.js"></script>
<script type="text/javascript" src="mass_files/scroll.js"></script>
<link rel="stylesheet" href="mass_files/custom_css.css"/>
 
<script async="" src="mass_files/interface.js" charset="utf-8" type="text/javascript"></script>
<link href="mass_files/TY.css" rel="stylesheet" charset="utf-8" type="text/css"/>
<script async="" src="mass_files/TY.js" charset="utf-8" type="text/javascript"></script>

<script src="mass_files/index.htm" charset="utf-8" type="text/javascript"></script>

<style type="text/css">
#ty_msg_mod *,#ty_msg_mod {
	margin: 0px;
	padding: 0px;
}

#ty_msg_mod #ty_msg_hd_close,#ty_msg_mod .ty-msg-ft a {
	background:
		url(images/ty-msg-bg.png?v=20120906)
		no-repeat;
	display: inline-block;
}

#ty_msg_mod {
	z-index: 100;
	width: 351px;
	position: fixed;
	_position: absolute;
	right: 2px;
	font-size: 12px;
	display: none;
	bottom: 34px;
	_top: expression(( document.documentElement.clientHeight ?
		document.documentElement.clientHeight :   document.body.clientHeight)+documentElement.scrollTop-MSG_GLOBAL.heightHead-MSG_GLOBAL.heightClose-MSG_GLOBAL.heightAd-MSG_GLOBAL.heightBottom-MSG_GLOBAL.heightBorder-2-34+"px");
	_left: expression(( document.documentElement.clientWidth ?  
		document.documentElement.clientWidth :   document.body.clientWidth)+(document.documentElement.scrollLeft?
		 document.documentElement.scrollLeft:  document.body.scrollLeft)
		-MSG_GLOBAL.width -MSG_GLOBAL.widthBorder+"px");
	_bottom: auto;
}

#ty_msg_mod #msg_border_ctn {
	border: 2px solid #84a9d2;
	overflow: hidden;
	background: #fff;
}

#ty_msg_mod #head_msg {
	width: 100%;
}

#ty_msg_mod .ty-msg-hd {
	background: none;
	width: 100%;
	height: 19px;
	overflow: hidden;
}

#ty_msg_mod #ty_msg_hd_close {
	cursor: pointer;
	margin-right: 2px;
	height: 14px;
	width: 14px;
	float: right;
	background: #6699CC;
	border: 1px solid #ccc;
	line-height: 14px;
	text-align: center;
	color: #fff;
	font-size: 14px;
	overflow: hidden;
}

#ty_msg_mod .ty-msg-bd iframe {
	height: 189px;
	width: 346px;
	overflow: hidden;
}

#ty_msg_mod .ty-msg-bd {
	line-height: 0;
}

#ty_msg_mod .ty-msg-bd iframe.ad {
	height: 240px;
	width: 346px;
	overflow: hidden;
}

#ty_msg_mod .ty-msg-ft {
	height: 29px;
	margin-top: 1px;
	overflow: hidden;
	background-color: #dbeaf8;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list a {
	padding-left: 18px;
	margin-left: 8px;
	float: left;
	height: 29px;
	line-height: 29px;
	text-decoration: none;
	font-size: 12px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list a:link,#ty_msg_mod .ty-msg-ft .ty-msg-fw-list a:visited
	{
	color: #0b64ae;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list a:hover {
	color: #ff6600;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-mall {
	background-position: 0px -356px;
	padding-left: 20px
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-pinpai {
	background-position: 2px -433px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-suning {
	background-position: 0px -494px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-bookroom {
	background-position: 5px -75px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-tuan {
	background-position: 0 -124px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-tickets {
	background-position: 0 -172px;
}

#ty_msg_mod .ty-msg-ft .ty-msg-fw-list .ty-msg-clothes {
	background-position: 5px -224px;
}

#ty_msg_mod .ty-msg-ft #ty_msg_ft_close {
	height: 29px;
	width: 29px;
	float: right;
	background-position: 11px -284px;
}
</style>

</head>
<body>
	<div id="cms_template_document" class="cms_template_document">
		<div id="cms_head" class="cms_head">
			<div id="tianya_common_head">
				<script id="common_ty_head" type="text/javascript" charset="utf-8">
					var headStr = jQuery("head").html();
					 
					//if(headStr.indexOf("TY.css") < 0){
						TY.loader("TY.ui.nav",function(){
									TY.ui.nav.init ({
										app_str:'focus',
										showTopNav:true,
										topNavWidth: 1005,
										showBottomNav:1
									});
						});
					//}
						
					</script>
			</div>
		</div>
		<div id="cms_body" class="cms_body">

			<div style="" id="cms_Location_18" class="tui-1000 tui-box cf">
				<div class="tui-center cf">
					<div class="" id="cms_control_11451" fragmentid="static_adpic"
						ftype="static_html" fragmenturl="" groupid="undefined"
						templatename="undefined">
						<div id="adsp_lamu_1000_450" ftype="static-img-link"
							class="static_adpic static_advertisement">
							<!-- 广告位图片默认高度80px-->

							<a href="javascript:void(0)" target="_blank"><img src=""
								style="width: 1000px; height: 450px;"></a>
						</div>
					</div>
				</div>
			</div>
			<div id="cms_Location_1" class="tui-1000 tui-box cf">

				<div class="tui-center cf">
					<div style="top: 0px; left: 0px;" class="" id="cms_control_7"
						fragmentid="normal-column" ftype="normal-column"
						fragmenturl="/cms_fragments/dynamicFragments/normal_frame_60.htm"
						groupid="undefined" templatename="undefined">
						<div class="tui-list-box tui-section space cf custom_css123125157"
							ftype="normal-column">
							<div class="hd">
								<h2>栏目名称</h2>
								<span><a id="more" href="#" target="_blank"></a></span><span><em
									class="emtext"></em></span>
							</div>
							<div class="bd cf">

								<div class="" id="cms_control_8"
									fragmentid="static-mulit-column" ftype="static_html"
									fragmenturl="undefined" groupid="undefined"
									templatename="undefined">
									<div id="cms_nav_9" style="" ftype="static_html" class="cf"
										stype="static-mulit-column" fragmentid="static-mulit-column"
										parmamter="width" target="style">
										<div class="mulit-column mulit-column-not-h-last"
											style="width: 255px">
											<div class="mbd">
												<div class="" id="cms_control_10" fragmentid="static_adpic"
													ftype="static_html" fragmenturl="" groupid="undefined"
													templatename="undefined">
													<div id="cms_nav_14" style="" ftype="static-img-link"
														class="static_adpic" fragmentid="static_adpic">
														<!-- 广告占位符图片默认高度80px-->

														<a href="javascript:void(0)" target=""><img
															src="mass.png?mass=${model.name}"
															style="width: 250px; height: 50px;"></a>
													</div>
												</div>
											</div>
										</div>
										<div class="mulit-column mulit-column-not-h-last"
											style="width: 645px">
											<div class="mbd"></div>
										</div>
										<div class="mulit-column" style="width: 100px">
											<div class="mbd">
												<div class="" id="cms_control_12" fragmentid="undefined"
													ftype="static_html" fragmenturl="undefined"
													groupid="undefined" templatename="undefined">
													<div id="cms_nav_1466" style="" class="static-space"
														ftype="static_html" stype="static-space"></div>
												</div>
												<div class="" id="cms_control_13" fragmentid="static_adpic"
													ftype="static_html" fragmenturl="" groupid="undefined"
													templatename="undefined">
													<div id="cms_nav_15" style="" ftype="static-img-link"
														class="static_adpic" fragmentid="static_adpic">
														<a href="javascript:void(0)" id="join-btn" sid="${model.id}"
															class="no-join"></a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style="" id="cms_Location_15" class="tui-1000 tui-box cf">
				<div class="tui-center cf">
					<div dyfragment_static_data="true"
						fragmenttag="normal_pic_txt_list1.normal_pic_txt_list"
						fragmentid="normal_pic_txt_list_51"
						fragmentparmater="id='cms_fragment_15' dataSource=-1 showHead=1 title='栏目名称' hdClass='tui-list-box tui-section   custom_css123145738' bdClass='tui-pic-text       pic-l     pic-l custom_css_bd123145738 topic    li-1' sectionIds='' morelink='' titleFormat='' titleLen=10 subTitleLen=10 txtLen=300 summaryLinkName='' showFileds='' titlelocation='right' picWidth=95 picHeight=70 summaryEllipsis='YES' picPosition='left' isPaging=0 dateFormat='' showBlog=0 showNO=0 event='请在此输入栏目名称' isFilterSumHtml=1 showSectionLogo=0 effect='' "
						class="tui-list-box tui-section   custom_css123145738"
						id="cms_fragment_15">
						<div class="hd">
							<h2>栏目名称</h2>
							<em></em>
						</div>
						<div class="bd" style="">
							<div
								class="tui-pic-text       pic-l     pic-l custom_css_bd123145738 topic    li-1 pic-l"
								onclick="javascript:void(0)">
								<ul id="cms_fragment_15_ul" class="cf">
									<li class="cf  ">
										<div>
											<div class="pic">
												<a name="title-link" id="cms_fragment_15_1_img_link"
													href="javascript:void(0)" target=""><img desc="图片"
													id="cms_fragment_15_1_img" src="mass_files/cultopic.jpg"
													style="width: 95px; height: 70px;"
													onerror="this.src='http://cms.tianyaui.com/template_base/images/errorimg.gif'"></a>
											</div>
											<div class="summary-title">
												<span class="subject"><a desc="标题"
													id="cms_fragment_15_1_title" href="javascript:void(0)"
													target=""></a></span>
											</div>
											<div class="summary">
												<span desc="摘要" id="cms_fragment_15_1_summary">${model.desc}</span>
											</div>
											<div class="clear"></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="" id="cms_control_11530" ftype="static_freemarkerCode"
						fragmentid="0" fragmenturl="" isfavor="0" groupid="undefined">
						<div id="bbs_num_location">
							<div id="bbs_num_div">
								<a desc="论坛" href="#cms_control_265">论坛</a>&nbsp;41&nbsp;个&nbsp;|&nbsp;<a
									desc="来吧" href="#cms_control_300">部落</a>
								5563&nbsp;个&nbsp;|&nbsp;<a desc="居民" href="#cms_control_301">居民</a>
								<span id="bbs_num_span">2780</span> 人&nbsp;|&nbsp;<a desc="企业"
									href="#cms_control_302">企业</a>&nbsp;13&nbsp;个
							</div>
						</div>
						<!-- freemarker_end_tag -->
					</div>
					<div style="position: relative;" class="" id="cms_control_42"
						fragmentid="undefined" ftype="static_html" fragmenturl="undefined"
						groupid="undefined" templatename="undefined">
						<div class="static-space" ftype="static_html" stype="static-space"></div>
					</div>
				</div>
			</div>
			<div style="" id="cms_Location_4" class="tui-390_430_140 tui-box cf">
				<div class="tui-left cf">
					<div class="" id="cms_control_18" fragmentid="normal-column"
						ftype="normal-column"
						fragmenturl="/cms_fragments/dynamicFragments/normal_frame_60.htm"
						groupid="undefined" templatename="undefined">
						<div style="opacity: 1;"
							class="tui-list-box tui-section space cf        custom_css123165825"
							ftype="normal-column">
							<div class="hd">
								<h2>热点</h2>
								<span><a id="more" href="#" target="_blank"></a></span><span><em
									class="emtext"></em></span>
							</div>
							<div style="" class="bd cf"></div>
						</div>
					</div>
					<div
						class="tui-pic-text     pic-t custom_css_bd12140737 f14 pic-text-line top_pic li-1 pic-t"
						id="cms_fragment_598" onclick="clickPartLink(event,'stat','热点')">
						<s:action name="getMassHotBbs" executeResult="true">
							<s:param name="page" value="1"></s:param>
							<s:param name="size" value="2"></s:param>
							<s:param name="model.id" value="1"></s:param>
							<s:param name="model.viewNum" value="%{model.id}"></s:param>
						</s:action>
					</div>
				</div>
				<div class="tui-center cf">
					<div class="catch_button" id="cms_control_265"
						ftype="static_freemarkerCode" fragmentid="0" fragmenturl=""
						isfavor="0" groupid="undefined">
						<ul class="bbs">
							<li style="cursor: pointer;"><img
								src="mass_files/down_off.png"
								onmouseover="this.src='image/down_on.png'"
								onmouseout="this.src='image/down_off.png'"
								title="下一屏"  /></li>
							<li style="cursor: default;"><img
								src="mass_files/up_off.png"
								onmouseover="this.src='image/up_on.png'"
								onmouseout="this.src='image/up_off.png'"
								title="上一屏" /></li>
						</ul>
						<!-- freemarker_end_tag -->
					</div>
					<div
						class="tui-list-box tui-section            catch_list     custom_css123173044"
						id="cms_fragment_24">
						<div class="hd">
							<h2>置顶 </h2>
							<em></em>
						</div>
						<div class="bd"
							style="height: 730px; overflow: hidden; position: relative;">

							<div
								class="tui-pic-text  pic-l bbs_list  pic-l  custom_css_bd123173044 f14    catch_pic                      li-1 pic-l"
								onclick="clickPartLink(event,'stat','论坛')">
								<ul style="position: absolute; top: 0px; height: 2190px;"
									id="cms_fragment_24_ul" class="cf">
									<s:action name="getMassPostHead" executeResult="true">
										<s:param name="page" value="1"></s:param>
										<s:param name="size" value="20"></s:param>
										<s:param name="pid" value="24"></s:param>
										<s:param name="model.id" value="1"></s:param>
										<s:param name="model.viewNum" value="%{model.id}"></s:param>
									</s:action>
								</ul>
							</div>
						</div>
					</div>
					<script type="text/javascript">
//加载内容图片
	  
	  </script>

					<div class="" id="cms_control_411" fragmentid="undefined"
						ftype="static_html" fragmenturl="undefined" groupid="undefined"
						templatename="undefined">
						<div class="static-space" ftype="static_html" stype="static-space"></div>
					</div>
					<div style="position: relative;" class="" id="cms_control_410"
						fragmentid="undefined" ftype="static_html" fragmenturl="undefined"
						groupid="undefined" templatename="undefined">
						<div class="static-space" ftype="static_html" stype="static-space"></div>
					</div>
					<div class="" id="cms_control_661" fragmentid="undefined"
						ftype="static_html" fragmenturl="undefined" groupid="undefined"
						templatename="undefined">
						<div class="static-space" ftype="static_html" stype="static-space"></div>
					</div>
				</div>
				<div class="tui-right cf">

					<div
						class="tui-list-box tui-section                         custom_css123181939"
						id="cms_fragment_30">
						<div class="hd cf">
							<h2>版块排行</h2>
						</div>
						<div class="bd cf" style="">
							<div
								class="tui-text-list cf  top-topic custom_css_bd123181939 f14                                                            li-1"
								onclick="clickPartLink(event,'stat','版块排行')">
								<ul id="cms_fragment_30_ul">
									<s:iterator  value="model.moduls" id="moduls">
									<li>
										<a href="loadModul?id=${moduls.id}" >${moduls.name}</a>
									</li>
									</s:iterator>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="cms_Location_6" class="tui-390_430_140 tui-box cf">
				<div class="tui-left cf">
					<div
						class="tui-list-box tui-section custom_css123185149"
						id="cms_fragment_627">
						<div class="hd">
							<h2>推荐</h2>
							<em></em> <span>
							<!-- <a href="http://cul.tianya.cn/novel/list_1.shtml" target="_blank">更多&gt;&gt;</a>--></span>
						</div>
						<div class="bd" style="">
							<div
								class="tui-pic-text  pic-l   pic-l        pic-l  pic-l  pic-l   pic-l    pic-l  pic-l   custom_css_bd123185149 f14                              li-1 pic-l"
								onclick="clickPartLink(event,'stat','推荐')">
								<s:action name="getMassRecommend" executeResult="true">
									<s:param name="page" value="1"></s:param>
									<s:param name="size" value="3"></s:param>
									<s:param name="model.id" value="1"></s:param>
									<s:param name="model.viewNum" value="%{model.id}"></s:param>
								</s:action>
							</div>
						</div>
					</div>
				</div>
				<div class="tui-center cf">
					<div class="catch_button" id="cms_control_300"
						ftype="static_freemarkerCode" fragmentid="0" fragmenturl=""
						isfavor="0" groupid="undefined">
						<ul class="bbs">
							<li style="cursor: pointer;"><img
								src="mass_files/down_off.png"
								onmouseover="this.src='image/down_on.png'"
								onmouseout="this.src='image/down_off.png'"
								title="下一屏"></li>
							<li style="cursor: default;"><img
								src="mass_files/up_off.png"
								onmouseover="this.src='image/up_on.png'"
								onmouseout="this.src='image/up_off.png'"
								title="上一屏"></li>
						</ul>
						<!-- freemarker_end_tag -->
					</div>
					<div
						class="tui-list-box tui-section              catch_list custom_css123185350"
						id="cms_fragment_44">
						<div class="hd">
							<h2>加精</h2>
							<em></em>
						</div>
						<div class="bd"
							style="height: 438px; overflow: hidden; position: relative;">

							<div
								class="tui-pic-text  pic-l pic-l  pic-l  pic-l  pic-l  pic-l  pic-l custom_css_bd123185350 f14 bbs_list catch_pic li-1 pic-l"
								onclick="clickPartLink(event,'stat','加精')">
								<ul style="position: absolute; top: 0px; height: 1314px;"
									id="cms_fragment_44_ul" class="cf">
									<s:action name="getMassDigest" executeResult="true">
										<s:param name="page" value="1"></s:param>
										<s:param name="size" value="20"></s:param>
										<s:param name="pid" value="44"></s:param>
										<s:param name="model.id" value="1"></s:param>
										<s:param name="model.viewNum" value="%{model.id}"></s:param>
									</s:action>
								</ul>
							</div>
						</div>
					</div>

					<div class="" id="cms_control_698" fragmentid="undefined"
						ftype="static_html" fragmenturl="undefined" groupid="undefined"
						templatename="undefined">
						<div class="static-space" ftype="static_html" stype="static-space"></div>
					</div>
					<div class="" id="cms_control_1229" fragmentid="undefined"
						ftype="static_html" fragmenturl="undefined" groupid="undefined"
						templatename="undefined">
						<div class="static-space" ftype="static_html" stype="static-space"></div>
					</div>
				</div>
				<div class="tui-right cf">
					<div class="" id="cms_control_46" fragmentid="normal-column"
						ftype="normal-column"
						fragmenturl="/cms_fragments/dynamicFragments/normal_frame_60.htm"
						groupid="undefined" templatename="undefined">
						<div class="tui-list-box tui-section space cf custom_css123185849"
							ftype="normal-column">
							<div class="hd">
								<h2>推荐部门</h2>
								<span>
								<a id="more" href="#" target="_blank"></a></span><span><em
									class="emtext"></em></span>
							</div>
							<div style="" class="bd cf">
								<ul></ul>
							</div>
						</div>
					</div>
					<s:action name="modulRank" executeResult="true">
						<s:param name="page" value="1"></s:param>
						<s:param name="id" value="%{model.id}"></s:param>
						<s:param name="size" value="5"></s:param>
					</s:action>			
				</div>
			</div>

			<div id="cms_Location_14" class="tui-1000 tui-box cf">
				<div class="tui-center cf">
					<div class="" id="cms_control_341" fragmentid="undefined"
						ftype="static_html" fragmenturl="undefined" groupid="undefined"
						templatename="undefined">
						<div class="static-space" ftype="static_html" stype="static-space"></div>
					</div>
					<div style="position: relative;" class="" id="cms_control_229"
						fragmentid="normal-column" ftype="normal-column"
						fragmenturl="/cms_fragments/dynamicFragments/normal_frame_60.htm"
						groupid="undefined" templatename="undefined">
						<div
							class="tui-list-box tui-section space cf    custom_css12614593"
							ftype="normal-column">
							<div class="hd">
								<h2>友情链接</h2>
								<span><a id="more" href="#" target="_blank"></a></span><span><em
									class="emtext"></em></span>
							</div>
							<div class="bd cf">

								<div class="" id="cms_control_230" fragmentid="static-text-link"
									ftype="static_html" fragmenturl="" groupid="undefined"
									templatename="undefined">
									<div id="cms_nav_231" style="" ftype="static-text-link"
										fragmentid="static-text-link_359"
										class="tui-text-list cf custom_css_bd12615127" columnnbr="10">
										<ul>
											<li style="clear: none; float: left; width: 9.95%;"><a
												href="http://www.jsu.edu.cn/default.html" target="_blank"
												class="">吉首大学首页</a></li>
											<li style="clear: none; float: left; width: 9.95%;"><a
												href="http://jwc.jsu.edu.cn/" target="_blank" class="">吉首大学教务处</a></li>
											<li style="clear: none; float: left; width: 9.95%;"><a
												href="http://ise.jsu.edu.cn/index.asp" target="_blank" class="">信息科学与工程学院</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="cms_foot" class="cms_foot cf">
			<div class="" id="cms_control_28" fragmentid="undefined"
				ftype="static_html" fragmenturl="undefined" groupid="undefined"
				templatename="undefined">
				<div class="static-space" ftype="static_html" stype="static-space"></div>
			</div>
			<div class="" id="cms_control_48" fragmentid="ty-copyright"
				ftype="static-copyright" fragmenturl="" groupid="undefined"
				templatename="undefined">
				<div class="tui-950 tui-box cf" id="footer1"
					fragmentid="cms_ty_foot_216">
					<div class="" id="sns-operation" ftype="static_operation"
						innerfragmentid="cms_ty_foot_216">
						<div class="copyright">
							社团管理员： 
							<a href="http://www.tianya.cn/77699920" target="_blank">${model.user.nickname}</a><br>E-mail：${model.user.username}@live.jsu.cn
						</div>
					</div>
					<div class="copyrightJS" rtype="replace-copyright">
						<script type="text/javascript" charset="gb2312"
							src="mass_files/tianya_footer1.js"></script>
						<style type="text/css">
<!--
.foot {
	border-top: 4px solid #eee;
	padding-top: 6px;
	margin-top: 10px
}

.foot p {
	text-align: center;
	margin: 3px;
	font-size: 12px;
	color: #555;
	font-family: Arial
}

.foot p a:link,.foot p a:visited,.foot p a:hover {
	color: #2965b1;
	font-size: 12px;
	margin: 0px 4px
}
-->
</style>
					</div>
				</div>
			</div>
			<div class="" id="cms_control_49" fragmentid="undefined"
				ftype="static_html" fragmenturl="undefined" groupid="undefined"
				templatename="undefined">
				<div class="static-space" ftype="static_html" stype="static-space"></div>
			</div>
			<div class="" id="cms_control_50" fragmentid="undefined"
				ftype="static_html" fragmenturl="undefined" groupid="undefined"
				templatename="undefined">
				<div class="static-space" ftype="static_html" stype="static-space"></div>
			</div>
		</div>
	</div>
	<div id="cms_foot_script">
		<script charset="UTF-8" type="text/javascript" src="mass_files/stat_20080313.js"></script>
	</div>
	<div id="cms_advertisement_script">
		<script type="text/javascript" charset="UTF-8" src="mass_files/display.txt"></script>
	</div>
</body>
</html>