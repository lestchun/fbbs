package com.pbbs.action;

import static com.pbbs.tool.Result.ERROR_CODE;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.User;
import com.pbbs.service.UserService;
import com.pbbs.tool.Result;
@Controller("UserAction")
@Scope("prototype")
public class UserAction extends BaseAction<User> {
	private static final long serialVersionUID = 1511404579803137517L;
	@Autowired UserService service;
	private String oldPass;
	private String newPass; 

	public UserAction() {
		model= new User();
	}
	
	public String userCenter(){
		
		model=getLoginUser();
		result= new Result();
		result.setResultCode(ERROR_CODE);
		if(null==model){
			result.setMsg("你还没有登录");
		}else{
			model=service.findUserById(model.getId());
			result.setResultCode(SUCCESS_CODE);
		}
		return SUCCESS;
	}
	
	
	
	public String logout(){
		
		session.put("user", null);
		
		return SUCCESS;
	}
	
	public String login(){
		
		result= new Result();
		result.setResultCode(ERROR_CODE);
		System.out.println(model);
		if(null==model){
			result.setMsg("用户名密码不能为空");
		}else if(null==model.getUsername()){
			result.setMsg("用户名为空");
		}else if(null==model.getPassword()){
			result.setMsg("密码为空");
		}else{
			model=service.findUserByUserNameAndUserName(model);
			if(null==model){
				result.setMsg("用户名或者密码错误");
			}else{
				if("1".equals(model.getStatus())){
					result.setMsg("您的用户已经被锁住！请联系管理员");
				}else{
					setLoginUser(model);
					result.setResultCode(SUCCESS_CODE);
					Map<String , Object> param= new HashMap<String, Object>();
					param.put("id", model.getId());
					param.put("nickname", model.getNickname());
					result.setRows(param);
					result.setMsg("登录成功");
				}
			}
		}
		return SUCCESS;
	}
	
	
	public String updatePass(){
		result= new Result();
		result.setResultCode(ERROR_CODE);
		if(StringUtils.isBlank(oldPass)){
			result.setMsg("你没有输入原始密码");
		}else if(StringUtils.isBlank(newPass)){
			result.setMsg("你没有输入新密码");
		}else{
			User user= getLoginUser();
			if(user==null){
				result.setMsg("你没有登录");
			}else{
				if(!oldPass.equals(user.getPassword())){
					result.setMsg("旧密码错误");
				}else{
					model=service.findUserById(user.getId());
					model.setPassword(newPass);
					service.saveUser(model);
					result.setResultCode(SUCCESS_CODE);
					result.setMsg("修改成功");
				}
			}
		}
		return SUCCESS;
	}
	
	
	

	public String getOldPass() {
		return oldPass;
	}

	public void setOldPass(String oldPass) {
		this.oldPass = oldPass;
	}

	public String getNewPass() {
		return newPass;
	}

	public void setNewPass(String newPass) {
		this.newPass = newPass;
	}
 
	
}
