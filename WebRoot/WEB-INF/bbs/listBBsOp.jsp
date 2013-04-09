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
    <title>我的帖子</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
  </head>
  <body>
    <table>
    	<tr>
    		<th>名称</th>
    		<th>最后修改时间</th>
    		<th>访问量</th>
    		<th>回复数量</th>
    		<th>删除</th>
    	</tr>
    	<tr>
    	<s:iterator  value="lists.content" id="bbs">
    		<th>${bbs.name}</th>
    		<th>${bbs.updateTime}</th>
    		<th>${bbs.viewNum}</th>
    		<th>${bbs.replayNum}</th>
    		<th><a href="">删除</a></th>
		</s:iterator>
    	</tr>
    	<tr>
    		<td colspan="5">
    			<jsp:include page="../comment/page.jsp"></jsp:include>
    		</td>
    	</tr>
    </table>
  </body>
</html>
