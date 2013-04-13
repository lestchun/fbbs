<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>${session.user.nickname}  -  个人中心</title>
<s:if test="'1001'==result.resultCode">
	<script type="text/javascript">
		alert("${result.msg}，3秒后跳转到首页,点击确定返回");
		history.go(-1);
	</script>
	<meta http-equiv="Refresh" content="3; url=index.jsp" /> 
</s:if>
</head>
<body>
	
	<table style="width:100%;hrigth:100%">
  	<tr>
  		<td>
  		</td>
  		<td width="1024px">
		  	<table style="width:100%;height:100%" border=1>
				<tr>
					<td colspan="2" style="height:180px">
						<jsp:include page="../comment/header.jsp"></jsp:include>	
					</td>
				</tr>
				<tr>
						<td>
							<ul style="width:300px">
 
								<li><a href="index.jsp">首页</a></li>
								<li><a href="javascript:void(0)" onclick="loadPage('jsp/info.jsp')">个人信息</a></li>
								<li><a href="javascript:void(0)" onclick="loadPage('listmUserMass',1)">我的社团</a></li>
								<li><a href="javascript:void(0)" onclick="loadPage('listUserBBs',1)">我的帖子</a></li>
							</ul>
						</td>
						<td>
							<div style="width:800px;height:600px" id="shwCenter">
								<h1>欢迎进入个人中心</h1>
							</div>
						</td>
				
				</tr> 
				<tr>
					<td colspan="2">
						<jsp:include page="../comment/footer.jsp"></jsp:include>
					</td>
				</tr>
		  	</table>
  	  		</td>
  		<td>
  		</td>
  	</tr>
  </table>
	
	<script type="text/javascript">
		
		function loadPage(url,type){
		if(!!type){
			$("#shwCenter").html("<iframe src='"+url+"' style='width:100%;height:100%'></iframe>");		
		}else{
			$("#shwCenter").load(url);
		}
			
		}
	
	</script>
	
	
</body>
</html>
