<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<html>
<body>
	  <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
	  <script type="text/javascript" src="js/json2.js"></script>
	  <script type="text/javascript" src="js/mask.js"></script>
	  <script type="text/javascript" src="js/tool.js"></script>
	  
	  <img alt="吉首大学" src="image/jsu.png">
	  <div style="float:right;margin-right: 100px">
		  	<h1>${null==showName?'吉首大学社团管理网站':showName}</h1>	
	  </div>
	  <div style="float:right;width:200px;margin-right:10px" id="showLogin">
	  		${null==sessionScope['user']?'':'你好'}${sessionScope.user.nickname}
	  		&nbsp;&nbsp;&nbsp;&nbsp;
	  		${null==sessionScope['user']?'':'<a href="userCenter">个人中心</a>'}
	  		${null==sessionScope['user']?'':'<a href="logout">安全退出</a>'}
	  </div>				
</body>
</html>