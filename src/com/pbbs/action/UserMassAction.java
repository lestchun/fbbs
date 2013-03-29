package com.pbbs.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.UserMass;
import com.pbbs.service.UserMassService;
@Controller("UserMassAction")
@Scope("prototype")
public class UserMassAction extends BaseAction<UserMass> {
	private static final long serialVersionUID = 1L;
	@Autowired UserMassService service;
}
