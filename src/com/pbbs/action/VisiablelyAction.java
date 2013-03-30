package com.pbbs.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Visiablely;
import com.pbbs.service.VisiablelyService;
@Controller("VisiablelyAction")
@Scope("prototype")
public class VisiablelyAction extends BaseAction<Visiablely> {
	private static final long serialVersionUID = 3204261195403033209L;
	@Autowired VisiablelyService service;
	public VisiablelyAction() {
		model=new Visiablely();
	}
	
	
	
	
}
