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
				<table style="width:300px;height:200px" border=1>
					<tr>
						<td>用户名:</td>
						<td><input name="model.username"></td>
					</tr>
					<tr>
						<td>密码:</td>
						<td><input type="password" name="model.password"/></td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="button"  value="登录"/>
						</td>
					</tr>
				</table>
			
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
				网站留言
			</td>		
		</tr>
		<tr>
			<td  >
				<ul>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
					<li><a href="#">xxx 来   报道</a></li>
				</ul>
			</td>
			<td >
				<ul>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
				</ul>
			</td>
			<td>
				<ul>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
					<li><a href="#">xxx 杯具咯  哈哈 </a></li>
				</ul>
			</td>		
		</tr>
		<tr > 
			<td colspan="4">
				<jsp:include page="WEB-INF/comment/footer.jsp"></jsp:include>
			</td>
		</tr>
  	</table>
  </body>
</html>
