package com.pbbs.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.PageRequest;
import org.springframework.orm.hibernate3.support.OpenSessionInViewFilter;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Mass;
import com.pbbs.service.MassService;
@Controller("MassAction")
@Scope("prototype")
public class MassAction extends BaseAction<Mass> {
	
	private static final long serialVersionUID = -932903908572266190L;
	@Autowired MassService service;
	
	public String listShortMass(){
		lists=service.ListMass(null,null, new PageRequest(0, 30));
		return SUCCESS;
	}
	
}
