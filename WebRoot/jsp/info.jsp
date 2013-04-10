<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 
<title></title>	
<script type="text/javascript">
	function updat(){
		var obj=getObjForm("upPass");
		if(!obj){
			alert("你没有输入信息");
			return ;
		}
		if(!obj['oldPass']){
			alert("旧密码不能为空");
			return ; 
		}
		if(!obj['newPass']){
			alert("新密码不能为空");
			return ;
		}
		if(!obj['cfgPass']){
			alert("确认密码不能为空");		
			return ;
		}
		if(obj['newPass']!=obj['cfgPass']){
			alert("两次输入密码不一致");
			return ;
		}
		$.mask();		
		$.post("updatePass",obj,function(data){
			alert(data.msg);
			$.mask.hide();	
		});
	
	}



</script>
</head>
<body>
	<form id="upPass">
		<fieldset>
		<legend>修改密码</legend>
		<span>旧密码:</span><input type="password" name="oldPass"><br/>
		<span>新密码:</span><input type="password" name="newPass"><br/>
		<span>确认密码:</span><input type="password" name="cfgPass"><br/>
		<input type="button" value="修改" onclick="updat()">	
		</fieldset>
	</form>
</body>
</html>
>>>>>>> branch 'master' of ssh://git@github.com/lestchun/fbbs.git
