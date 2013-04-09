<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  </head>
  <body> 
  		<table style="width:100%;" border=1>
			<tr>
				<td style="height:20px">社团名称</td>
				<td>状态</td>
				<td>操作</td>
			</tr> 			
	  	   <s:iterator  value="lists.content" id="usermass">
				<tr>
					<td><a href="loadMass?id=${usermass.mass.id}">${usermass.mass.name}</a></td>
					<td>${usermass.verify}</td>
					<td><a href="">退出</a></td>
				</tr> 			
			</s:iterator>
  		</table>
  </body>
</html>
