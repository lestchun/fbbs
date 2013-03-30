package com.pbbs.action;

import static com.pbbs.tool.Result.EOOR_CODE;
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
	
	public UserAction() {
		model= new User();
	}
	
	public String userCenter(){
		
		model=getLoginUser();
		result= new Result();
		result.setResultCode(EOOR_CODE);
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
		result.setResultCode(EOOR_CODE);
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
 
	
}
