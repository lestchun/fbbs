<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>吉首大学社团管理系统-首页</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
  </head>
  <body>
  <table style="width:100%;hrigth:100%">
  	<tr>
  		<td>
  		</td>
  		<td width="1024px">
		  	<table style="width:100%;height:100%" border=1>
				<tr>
					<td colspan="4" style="height:180px">
						<jsp:include page="WEB-INF/comment/header.jsp"></jsp:include>	
					</td>
				</tr>
				<tr>
					<td rowspan="3" style="width:300px">
						<div>社团列表</div>
						
						<s:action name="listShortMass" executeResult="true"></s:action>
					</td>
					<td style="width:500px" colspan="2">
						滚动图片
					</td>
					<td style="width: 300px;height:200px">
						<div style="width:250px"  id="userLogins"> 
						<s:if test="#session.user==null">
						<form id="login-form">
						<div style="width:200px">
							<label>用户名:</label>
							<label><input name="model.username" style="width:100px"></label>
						</div>
						<div>
							<label>密&nbsp;&nbsp;码:</label>
							<label><input type="password" name="model.password" style="width:100px"/></label>
						</div>
 						<div><input type="button"  value="登录" onclick="userLogin()"/><a href="jsp/register.jsp">注册</a></div>
						</form>
						</s:if>
						<s:else>
							你好 ${sessionScope.user.nickname} &nbsp;&nbsp;&nbsp;&nbsp;<a href="">个人中心</a>
						</s:else>
						</div>
					</td>		
				</tr>
				<tr style="height: 20px">
					<td  style="width:20%" align="center">
						最新更新
					</td>
					<td style="width:60%" align="center">
						热门帖子
					</td>
					<td align="center">
						系统消息
					</td>		
				</tr>
				<tr>
					<td  >
						 <s:action name="getLastUpdate"></s:action>
						 &nbsp;
					</td>
					<td >
						 <s:action name="getHotBbs"></s:action>
						 &nbsp;
					</td>
					<td>
						<s:action name="getSystemMessage" executeResult="true"></s:action>
					</td>		
				</tr>
				<tr > 
					<td colspan="4">
						<jsp:include page="WEB-INF/comment/footer.jsp"></jsp:include>
					</td>
				</tr>
		  	</table>
  	  		</td>
  		<td>
  		</td>
  	</tr>
  </table>
  <script type="text/javascript" src="js/login.js"></script>
  </body>
</html>
