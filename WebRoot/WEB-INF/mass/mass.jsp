<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<s:set var="showName" value="model.name"></s:set>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<s:if test="'1001'==result.resultCode">
	<script type="text/javascript">
	alert("${result.msg}，3秒后跳转到首页,点击确定返回");
		history.go(-1);
	</script>
	<meta http-equiv="Refresh" content="3; url=index.jsp" /> 
</s:if>
<title>吉首大学社团管理  ${model.name}</title>
</head>
<body>
	<table style="width: 100%; heigth: 100%">
		<tr>
			<td></td>
			<td style="width:1024px">
			
				<table style="width:100%;height:100%" border=1>
					<tr>
						<td colspan="3">
							<jsp:include page="../comment/header.jsp"></jsp:include>
						</td>
					</tr>
					<tr>
						<td colspan="3" style="height:20px">
							当前位置:<a href="index.jsp">首页</a>&gt;&gt;${model.name}
						</td>
					</tr>
					<tr>
						<td rowspan="3" width="200px">
							<ul>
								<li><a href="index.jsp">首页</a></li>
								<li><a href="index.jsp">留言板</a></li>
								<s:iterator  value="model.moduls" id="moduls">
								<li>
									<a href="loadModul?id=${moduls.id}" >${moduls.name}</a>
								</li>
								</s:iterator>
							</ul>
						</td>
						<td colspan="2">
							${model.desc}
						</td>
					</tr>
					<tr >
						<td style="height:20px">
							最新帖子 
						</td>
						<td>
							活动公告
						</td>
					</tr>
					<tr >
						<td style="height:200px">
							最新帖子 
						</td>
						<td>
							活动公告
						</td>
					</tr>
					<tr>
						<td colspan="3">
						<jsp:include page="../comment/footer.jsp"></jsp:include>
						</td>						
					</tr>
				</table>
			</td>
			<td></td>
		</tr>
	</table>

</body>
</html>