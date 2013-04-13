<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<s:if test="'1001'==result.resultCode">
	<script type="text/javascript">
		alert("${result.msg},点击确定返回");
		history.go(-1);
	</script>
</s:if>
<title>注册成功</title>
</head>
<body>
	<center>
		<h1>${result.msg}</h1>
		<a href="index.jsp">返回首页</a> 	
	</center>
</body>
</html>