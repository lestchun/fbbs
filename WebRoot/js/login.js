function userLogin(){
	
	var obj=getObjForm("login-form");
	
	if(!obj['model.username']){
		alert("用户名不能为空");
		return ;
	}
	
	if(!obj['model.password']){
		alert("密码不能为空");
		return ;
	}
	
	$.mask();
	$.post("login",obj,function(data){
		alert(data.msg);
		if(data.resultCode==1000){
			var str="你好"+data.rows.nickname+"&nbsp;&nbsp;&nbsp;&nbsp;<a href=''>个人中心</a>";
			$("#showLogin").html(str);
			$("#userLogins").html(str);
		}
		$.mask.hide();
	});
	
}