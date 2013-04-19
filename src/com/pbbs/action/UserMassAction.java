package com.pbbs.action;

import static com.pbbs.tool.Result.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.User;
import com.pbbs.model.UserMass;
import com.pbbs.service.UserMassService;
import com.pbbs.service.UserService;
import com.pbbs.tool.Result;
@Controller("UserMassAction")
@Scope("prototype")
public class UserMassAction extends BaseAction<UserMass> {
	private static final long serialVersionUID = 1L;
	@Autowired UserMassService service;
	@Autowired UserService uservice;
	
	public UserMassAction() {
		model= new UserMass();
	}
	
	public String listmUserMass(){
		if(null==model){
			model= new UserMass();
		}
		result= new Result();
		result.setResultCode(ERROR_CODE);
		User user=getLoginUser(uservice);
		if(null==user){
			result.setMsg("你没有登录");
		}else{
			model.setUser(user);
			lists=service.findUserMassByUserAndVef(model, getPages());
			result.setResultCode(SUCCESS_CODE);
		}
		
		return SUCCESS;
	}
	
}
