<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <s:if test="'1001'==result.resultCode">
	<script type="text/javascript">
		alert("${result.msg}，3秒后跳转到首页,点击确定返回");
		history.go(-1);
	</script>
	<meta http-equiv="Refresh" content="3; url=index.jsp" /> 
</s:if>
    <base href="<%=basePath%>">
    <title>发表帖子</title>
  </head>
  <body>
     <table style="width:100%;hrigth:100%">
  	<tr>
  		<td>
  		</td>
  		<td width="1024px">
		  	<table style="width:100%;height:100%" border=1>
				<tr>
					<td style="height:180px">
						<jsp:include page="../comment/header.jsp"></jsp:include>	
					</td>
				</tr>
				<tr>
					<td style="height:20px">
						当前位置:<a href="index.jsp">首页</a>&gt;&gt;<a href="loadMass?id=${model.mass.id}">${model.mass.name}</a>&gt;&gt;<a href="loadModul?id=${model.id}">${model.name}</a>&gt;&gt;发表帖子
					</td>		
				</tr>
				<tr>
						<td>
							<span>标题</span>
							<input name="model.title">
						</td>
				
				
				</tr>
				<tr > 
					<td >
						<jsp:include page="../comment/footer.jsp"></jsp:include>
					</td>
				</tr>
		  	</table>
  	  		</td>
  		<td>
  		</td>
  	</tr>
  </table>
  </body>
</html>
