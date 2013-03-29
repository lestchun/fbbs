package com.pbbs.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.User;
import com.pbbs.service.UserService;
@Controller("UserAction")
@Scope("prototype")
public class UserAction extends BaseAction<User> {
	private static final long serialVersionUID = 1511404579803137517L;
	@Autowired UserService service;
}
