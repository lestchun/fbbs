<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<base href="<%=basePath%>">
	<title>吉首大学社团管理 系统 注册</title>
</head>
<body>
<table style="width:100%;hrigth:100%">
  	<tr>
  		<td>
  		</td>
  		<td width="1024px">
		  	<table style="width:100%;height:100%" border=0>
				<tr>
					<td colspan="3" style="height:180px">
						<jsp:include page="../WEB-INF/comment/header.jsp"></jsp:include>	
					</td>
				</tr>
			 	<tr>
			 		<td >&nbsp;</td>
			 		<td align="center">
			 			<form action="regiestUser" id="regiestForm" method="post" >
				 			<table style="width:500px" border=0>
				 				<tr>
				 					<td>用户名:</td>
				 					<td align="left"><input name="model.username"><a href="javascript:void(0);" onclick="checkUserName()">检测用户是否可用</a></td>
				 				</tr>
				 				<tr>
				 					<td>昵&nbsp;&nbsp;&nbsp;称:</td>
				 					<td align="left"><input name="model.nickname"></td>
				 				</tr>
				 				<tr>
				 					<td>密&nbsp;&nbsp;&nbsp;码:</td>
				 					<td align="left"><input name="model.password" type="password"></td>
				 				</tr>
				 				<tr>
				 					<td>班&nbsp;&nbsp;&nbsp;级:</td>
				 					<td align="left"><input name="model.grade" ></td>
				 				</tr>
				 				<tr >
				 					<td colspan="2" align="center">
				 						<input type="submit" value="提交">
				 						<input type="reset" value="重置">
				 					</td>
				 				</tr>
				 			</table>
			 			</form>
			 		</td>
			 		<td>&nbsp;</td>
			 	</tr>
				<tr > 
					<td colspan="3">
						<jsp:include page="../WEB-INF/comment/footer.jsp"></jsp:include>
					</td>
				</tr>
		  	</table>
  	  		</td>
  		<td>
  		</td>
  	</tr>
  </table>
  <script type="text/javascript">
  			
  		function checkUserName(){
  			
  			var obj=getObjForm("regiestForm");
  			if(!obj||!obj['model.username']){
  				alert("你没有选择");
  				return ;
  			}
  			
  			$.post("checkUserName",obj,function(data){
  					alert(data.msg);
  			});
  			
  		}
  		
  
  
  
  </script>
</body>
</html>